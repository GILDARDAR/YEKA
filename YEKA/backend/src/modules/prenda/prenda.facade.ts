import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrendaDAO } from './prenda.dao';
import { FacturaFacade } from '../factura/factura.facade';
import { PrismaService } from '../../prisma/prisma.service';
import { ConfiguracionService } from '../configuracion/configuracion.service';
import {
  CreatePrendaDto,
  AsignarServicioDto,
  CambiarEstadoDto,
  SubirFotoDto,
  PrendaResponseDto,
  PrendaServicioResponseDto,
} from './prenda.dto';
import {
  Prenda,
  PrendaServicio,
  EstadoPrenda,
  AccionAuditoria,
} from '../../../generated/prisma/client';

function toResponseDto(prenda: Prenda): PrendaResponseDto {
  return {
    id: prenda.id,
    facturaId: prenda.facturaId,
    codigoQR: prenda.codigoQR,
    tipoPrendaId: prenda.tipoPrendaId,
    talla: (prenda as any).talla || '',
    color: (prenda as any).color || '',
    marca: (prenda as any).marca || null,
    estadoActual: prenda.estadoActual,
    fechaCompromiso: prenda.fechaCompromiso,
    esLujo: prenda.esLujo,
    fotoUrl: prenda.fotoUrl,
    usuarioTallerId: prenda.usuarioTallerId,
    fechaUltimaNotificacion: prenda.fechaUltimaNotificacion,
    notas: prenda.notas,
    createdAt: prenda.createdAt,
    updatedAt: prenda.updatedAt,
    tipoUrgenciaId: (prenda as any).tipoUrgenciaId || null,
    porcentajeAtencionAplicado: (prenda as any).porcentajeAtencionAplicado ? (prenda as any).porcentajeAtencionAplicado.toString() : null,
    factura: (prenda as any).factura,
  };
}

function toPrendaServicioResponseDto(ps: PrendaServicio): PrendaServicioResponseDto {
  return {
    id: ps.id,
    prendaId: ps.prendaId,
    servicioId: ps.servicioId,
    medidaEntregada: ps.medidaEntregada ? ps.medidaEntregada.toString() : null,
    tiempoCalculado: ps.tiempoCalculado,
    valorPorTiempo: ps.valorPorTiempo ? ps.valorPorTiempo.toString() : null,
    valorFactoresCobro: ps.valorFactoresCobro ? ps.valorFactoresCobro.toString() : null,
    precioBruto: ps.precioBruto ? ps.precioBruto.toString() : null,
    precioFinal: ps.precioFinal.toString(),
    observaciones: (ps as any).observaciones || null,
    detallesCalculo: (ps as any).detallesCalculo || null,
    createdAt: ps.createdAt,
  };
}

@Injectable()
export class PrendaFacade {
  private readonly logger = new Logger(PrendaFacade.name);
  
  constructor(
    private readonly prendaDAO: PrendaDAO,
    private readonly prismaService: PrismaService,
    private readonly facturaFacade: FacturaFacade,
    private readonly configService: ConfigService,
    private readonly configuracionService: ConfiguracionService,
  ) {}

  async createPrenda(dto: CreatePrendaDto): Promise<PrendaResponseDto> {
    const factura = await this.prismaService.factura.findUnique({
      where: { id: dto.facturaId },
    });
    if (!factura) {
      throw new NotFoundException(`Factura con id ${dto.facturaId} no encontrada`);
    }

    const tipoPrenda = await this.prismaService.tipoPrenda.findUnique({
      where: { id: dto.tipoPrendaId }
    });
    if (!tipoPrenda || !tipoPrenda.activo) {
      throw new NotFoundException(`Tipo de prenda con id ${dto.tipoPrendaId} no encontrado o inactivo`);
    }

    const sede = await this.prismaService.sede.findUnique({
      where: { id: factura.sedeId },
    });
    if (!sede) {
      throw new NotFoundException(`Sede con id ${factura.sedeId} no encontrada`);
    }

    if (dto.notas) {
      const wordCount = dto.notas.trim().split(/\s+/).filter(Boolean).length;
      if (wordCount > 1000) {
        throw new BadRequestException('La observación/notas no puede superar las 1000 palabras');
      }
    }

    const year = new Date().getFullYear();
    const codigoSede = sede.codigoSede;

    const tempQr = `TEMP-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    
    let porcentajeAtencionAplicado = undefined;
    if (dto.tipoUrgenciaId) {
      const urgencia = await this.prismaService.tipoUrgencia.findUnique({
        where: { id: dto.tipoUrgenciaId }
      });
      if (urgencia) {
        porcentajeAtencionAplicado = urgencia.porcentajeRecargo;
      }
    }

    const defaultFecha = await this.calcularFechaCompromiso(0);
    const created = await this.prendaDAO.create({
      facturaId: dto.facturaId,
      tipoPrendaId: dto.tipoPrendaId,
      talla: dto.talla,
      color: dto.color,
      marca: dto.marca,
      esLujo: dto.esLujo,
      notas: dto.notas,
      codigoQR: tempQr,
      tipoUrgenciaId: dto.tipoUrgenciaId,
      porcentajeAtencionAplicado,
      fechaCompromiso: defaultFecha,
    });

    const qrCode = `PR-${codigoSede}-${year}-${String(created.id).padStart(5, '0')}`;
    const updated = await this.prendaDAO.update(created.id, {
      codigoQR: qrCode,
    });

    return toResponseDto(updated);
  }

  async getPrendas(filters?: {
    estadoActual?: EstadoPrenda;
    usuarioTallerId?: number;
    facturaId?: number;
  }): Promise<PrendaResponseDto[]> {
    const list = await this.prendaDAO.findAll(filters);
    return list.map(toResponseDto);
  }

  async getPrendaById(id: number): Promise<PrendaResponseDto & { servicios: any[] }> {
    const prenda = await this.prendaDAO.findById(id);
    if (!prenda) {
      throw new NotFoundException(`Prenda con id ${id} no encontrada`);
    }
    return {
      ...toResponseDto(prenda),
      servicios: (prenda as any).servicios?.map(toPrendaServicioResponseDto) || [],
    };
  }

  async updatePrenda(id: number, dto: any, usuarioId: number): Promise<PrendaResponseDto> {
    const prenda = await this.prendaDAO.findById(id);
    if (!prenda) {
      throw new NotFoundException(`Prenda con id ${id} no encontrada`);
    }

    if (dto.notas) {
      const wordCount = dto.notas.trim().split(/\s+/).filter(Boolean).length;
      if (wordCount > 1000) {
        throw new BadRequestException('La observación/notas no puede superar las 1000 palabras');
      }
    }

    const valorAnterior = { ...prenda };
    
    const updateData = { ...dto };
    if (dto.tipoUrgenciaId !== undefined) {
      if (dto.tipoUrgenciaId === null) {
        updateData.porcentajeAtencionAplicado = null;
      } else {
        const urgencia = await this.prismaService.tipoUrgencia.findUnique({
          where: { id: dto.tipoUrgenciaId }
        });
        updateData.porcentajeAtencionAplicado = urgencia?.porcentajeRecargo || 0;
      }
    }

    // If urgency or tipo prenda changed, we should recalculate the prices of all assigned services
    if (dto.tipoUrgenciaId !== undefined || dto.tipoPrendaId !== undefined) {
      await this.recalcularPreciosPrenda(id);
    }

    const nuevaFecha = await this.calcularFechaCompromiso(0);
    const updated = await this.prendaDAO.update(id, {
      ...updateData,
      fechaCompromiso: nuevaFecha,
    });

    await this.prismaService.auditLog.create({
      data: {
        usuarioId,
        accion: AccionAuditoria.MODIFICACION,
        entidadAfectada: 'Prenda',
        entidadId: id,
        valorAnterior: valorAnterior as any,
        valorNuevo: updated as any,
      },
    });

    return toResponseDto(updated);
  }

  private async getValorHoraGlobal(): Promise<number> {
    const conf = await this.prismaService.configuracion.findUnique({
      where: { clave: 'VALOR_HORA_PUNTOS' }
    });
    return conf ? parseFloat(conf.valor) : 60; // Default 60
  }

  private async recalcularPreciosPrenda(prendaId: number) {
    const prenda = await this.prismaService.prenda.findUnique({
      where: { id: prendaId },
      include: { tipoPrenda: true, tipoUrgencia: true, servicios: true }
    });
    if (!prenda) return;

    for (const ps of prenda.servicios) {
      const psDTO = {
        servicioId: ps.servicioId,
        medidaEntregada: ps.medidaEntregada ? ps.medidaEntregada.toNumber() : undefined,
      };
      const result = await this.calcularPreciosDeServicio(prenda, psDTO);
      
      await this.prismaService.prendaServicio.update({
        where: { id: ps.id },
        data: {
          medidaEntregada: result.medidaEntregadaFinal,
          tiempoCalculado: result.tiempoCalculado,
          valorPorTiempo: result.valorPorTiempo,
          valorFactoresCobro: result.valorFactoresCobro,
          precioBruto: result.precioBruto,
          precioFinal: result.precioFinal,
          detallesCalculo: result.detallesCalculo as any
        }
      });
    }

    await this.facturaFacade.recalcularFactura(prenda.facturaId);
  }

  private async calcularPreciosDeServicio(prenda: any, dto: { servicioId: number, medidaEntregada?: number }) {
    const servicio = await this.prismaService.catalogoServicio.findUnique({
      where: { id: dto.servicioId },
      include: {
        categoriasFactores: {
          include: {
            factores: true
          }
        }
      }
    });

    if (!servicio || !servicio.activo) {
      throw new NotFoundException(`Servicio de catálogo con id ${dto.servicioId} no encontrado o inactivo`);
    }

    // 1. Obtener configuraciones globales
    const confMinutos = await this.prismaService.configuracion.findUnique({
      where: { clave: 'MINUTOS_PRODUCTIVOS_MES' }
    });
    const minutosProductivos = confMinutos ? parseInt(confMinutos.valor, 10) : 21120; // Default 21120

    const confUtilidad = await this.prismaService.configuracion.findUnique({
      where: { clave: 'MARGEN_UTILIDAD_GLOBAL' }
    });
    const margenUtilidad = confUtilidad ? parseFloat(confUtilidad.valor) : 30.0; // Default 30.0%

    // 2. Obtener todos los factores activos en el sistema para calcular el costo prorrateado por minuto
    const activeCategories = await this.prismaService.categoriaFactorCobro.findMany({
      where: { activa: true },
      include: {
        factores: {
          where: { activo: true }
        }
      }
    });

    let totalMensual = 0;
    let totalAnual = 0;
    let totalDiario = 0;

    for (const cat of activeCategories) {
      for (const factor of cat.factores) {
        const valor = factor.valor.toNumber();
        if (factor.tipo === 'MENSUAL') {
          totalMensual += valor;
        } else if (factor.tipo === 'ANUAL') {
          totalAnual += valor;
        } else if (factor.tipo === 'DIARIO') {
          totalDiario += valor;
        }
      }
    }

    const costoMensualEquivalente = totalMensual + (totalAnual / 12) + (totalDiario * 22);
    const cfMin = minutosProductivos > 0 ? (costoMensualEquivalente / minutosProductivos) : 0;

    // 3. Medida y cálculo del tiempo base
    const medidaBase = servicio.medidaBase.toNumber() || 1;
    const tiempoBase = servicio.tiempoBase || 60;
    
    // Si la medida entregada es menor que la medida base, la medida entregada se convierte en la medida base
    let medidaEntregadaFinal = dto.medidaEntregada;
    if (dto.medidaEntregada !== undefined && dto.medidaEntregada !== null) {
      if (dto.medidaEntregada < medidaBase) {
        medidaEntregadaFinal = medidaBase;
      }
    }
    
    const medidaUsada = medidaEntregadaFinal || medidaBase;
    const proporcion = medidaUsada / medidaBase;
    const tiempoCalculadoBase = Math.round(proporcion * tiempoBase);

    // Aplicar porcentaje de dificultad sobre el tiempo calculado (aumenta los minutos directos)
    const porcentajeDificultad = prenda.tipoPrenda?.porcentajeDificultad?.toNumber() || 0;
    const tiempoCalculado = Math.round(tiempoCalculadoBase * (1 + porcentajeDificultad / 100));

    // Calcular costo por tiempo usando CF_min
    const valorPorTiempo = tiempoCalculado * cfMin;

    // 4. Factores fijos por servicio (FIJO_POR_SERVICIO) específicos de este servicio
    let valorFactoresCobro = 0;
    for (const cat of servicio.categoriasFactores) {
      if (cat.activa) {
        for (const factor of cat.factores) {
          if (factor.activo && factor.tipo === 'FIJO_POR_SERVICIO') {
            valorFactoresCobro += factor.valor.toNumber();
          }
        }
      }
    }

    // 5. Calcular precio bruto operativo (costo operativo)
    const precioBruto = valorPorTiempo + valorFactoresCobro;

    // 6. Aplicar margen de utilidad global
    const precioConUtilidad = precioBruto * (1 + margenUtilidad / 100);

    // 7. Aplicar multiplicador de urgencia
    const porcentajeUrgencia = prenda.porcentajeAtencionAplicado?.toNumber() ?? (prenda.tipoUrgencia?.porcentajeRecargo?.toNumber() || 0);
    
    const getUrgencyMultiplier = (val: number): number => {
      if (val <= 0) return 1.0;
      if (val > 5.0) {
        return 1.0 + (val / 100);
      }
      return val >= 1.0 ? val : 1.0;
    };
    const urgMultiplier = getUrgencyMultiplier(porcentajeUrgencia);
    const precioFinal = precioConUtilidad * urgMultiplier;

    this.logger.log(`=== CALCULANDO PRECIOS DE SERVICIO (NUEVO MODELO) ===`);
    this.logger.log(`Servicio ID: ${dto.servicioId} (${servicio.tipoEspecifico})`);
    this.logger.log(`Medida Base: ${medidaBase} cm`);
    this.logger.log(`Tiempo Base: ${tiempoBase} min`);
    this.logger.log(`Medida Entregada (Original): ${dto.medidaEntregada ?? 'N/A'}`);
    this.logger.log(`Medida Entregada (Final ajustada): ${medidaEntregadaFinal ?? 'N/A'}`);
    this.logger.log(`Medida Usada: ${medidaUsada}`);
    this.logger.log(`Proporción: ${proporcion}`);
    this.logger.log(`Tiempo Calculado Base: ${tiempoCalculadoBase} min`);
    this.logger.log(`Porcentaje Dificultad Prenda: ${porcentajeDificultad}%`);
    this.logger.log(`Tiempo Calculado (Ajustado Dificultad): ${tiempoCalculado} min`);
    this.logger.log(`Minutos Productivos Mes: ${minutosProductivos}`);
    this.logger.log(`Gastos Fijos Sumas: Mensual=${totalMensual}, Anual=${totalAnual}, Diario=${totalDiario}`);
    this.logger.log(`Costo Mensual Equivalente: €${costoMensualEquivalente}`);
    this.logger.log(`Costo Fijo por Minuto (CF_min): €${cfMin}`);
    this.logger.log(`Valor por Tiempo (Tiempo * CF_min): €${valorPorTiempo}`);
    this.logger.log(`Valor Factores Fijos Servicio (FIJO_POR_SERVICIO): €${valorFactoresCobro}`);
    this.logger.log(`Precio Bruto (Operativo): €${precioBruto}`);
    this.logger.log(`Margen de Utilidad Global: ${margenUtilidad}%`);
    this.logger.log(`Precio Con Utilidad: €${precioConUtilidad}`);
    this.logger.log(`Porcentaje Urgencia Prenda: ${porcentajeUrgencia}%`);
    this.logger.log(`Multiplicador de Urgencia: ${urgMultiplier}x`);
    this.logger.log(`Precio Final: €${precioFinal}`);
    this.logger.log(`=====================================================`);

    const detallesCalculo = {
      medidaBase,
      tiempoBase,
      medidaEntregada: medidaEntregadaFinal,
      medidaUsada,
      proporcion,
      tiempoCalculadoBase,
      porcentajeDificultad,
      tiempoCalculado,
      minutosProductivos,
      totalMensual,
      totalAnual,
      totalDiario,
      costoMensualEquivalente,
      cfMin,
      valorPorTiempo,
      factoresCobroDetalle: servicio.categoriasFactores.flatMap(cat => 
        cat.activa ? cat.factores.filter(f => f.activo && f.tipo === 'FIJO_POR_SERVICIO').map(f => ({
          nombre: f.nombre,
          valor: f.valor.toNumber()
        })) : []
      ),
      valorFactoresCobro,
      precioBruto,
      margenUtilidad,
      precioConUtilidad,
      porcentajeUrgencia,
      urgMultiplier,
      precioFinal
    };

    return {
      tiempoCalculado,
      valorPorTiempo,
      valorFactoresCobro,
      precioBruto,
      precioFinal,
      medidaEntregadaFinal,
      detallesCalculo
    };
  }
  async calcularFechaCompromiso(tiempoNuevasPrendas: number = 0): Promise<Date> {
    const result = await this.prismaService.prendaServicio.aggregate({
      _sum: {
        tiempoCalculado: true,
      },
      where: {
        prenda: {
          estadoActual: {
            in: ['RECIBIDA', 'PENDIENTE_VALORACION', 'EN_PRODUCCION']
          }
        }
      }
    });

    const totalTiempoPendiente = result._sum.tiempoCalculado || 0;
    const totalMinutes = totalTiempoPendiente + tiempoNuevasPrendas;
    const diasRequeridos = Math.max(1, Math.ceil(totalMinutes / 480));

    let fecha = new Date();
    fecha.setHours(0, 0, 0, 0);
    fecha.setDate(fecha.getDate() + 1);

    let diasAgregados = 0;
    while (diasAgregados < diasRequeridos) {
      if (fecha.getDay() !== 0 && fecha.getDay() !== 6) {
        diasAgregados++;
      }
      if (diasAgregados < diasRequeridos) {
        fecha.setDate(fecha.getDate() + 1);
      }
    }
    
    return fecha;
  }

  async asignarServicio(
    prendaId: number,
    dto: AsignarServicioDto,
    usuarioId: number,
  ): Promise<PrendaServicioResponseDto> {
    const prenda = await this.prismaService.prenda.findUnique({
      where: { id: prendaId },
      include: { tipoPrenda: true, tipoUrgencia: true }
    });
    if (!prenda) {
      throw new NotFoundException(`Prenda con id ${prendaId} no encontrada`);
    }

    if (dto.observaciones) {
      const wordCount = dto.observaciones.trim().split(/\s+/).filter(Boolean).length;
      if (wordCount > 500) {
        throw new BadRequestException('Las observaciones del servicio no pueden superar las 500 palabras');
      }
    }

    const preciosCalculados = await this.calcularPreciosDeServicio(prenda, dto);

    const ps = await this.prendaDAO.asignarServicio({
      prendaId,
      servicioId: dto.servicioId,
      medidaEntregada: preciosCalculados.medidaEntregadaFinal,
      tiempoCalculado: preciosCalculados.tiempoCalculado,
      valorPorTiempo: preciosCalculados.valorPorTiempo,
      valorFactoresCobro: preciosCalculados.valorFactoresCobro,
      precioBruto: preciosCalculados.precioBruto,
      precioFinal: preciosCalculados.precioFinal,
      observaciones: dto.observaciones,
      detallesCalculo: preciosCalculados.detallesCalculo as any,
    });

    await this.facturaFacade.recalcularFactura(prenda.facturaId);

    const nuevaFecha = await this.calcularFechaCompromiso(0);
    await this.prismaService.prenda.update({
      where: { id: prendaId },
      data: { fechaCompromiso: nuevaFecha }
    });

    await this.prismaService.auditLog.create({
      data: {
        usuarioId,
        accion: AccionAuditoria.MODIFICACION,
        entidadAfectada: 'Prenda',
        entidadId: prendaId,
        valorNuevo: {
          tipo: 'ASIGNAR_SERVICIO',
          prendaServicioId: ps.id,
          servicioId: dto.servicioId,
          precioFinal: preciosCalculados.precioFinal,
          observaciones: dto.observaciones,
        },
      },
    });

    return toPrendaServicioResponseDto(ps);
  }

  async eliminarServicio(
    prendaId: number,
    prendaServicioId: number,
    usuarioId: number,
  ): Promise<void> {
    const prenda = await this.prendaDAO.findById(prendaId);
    if (!prenda) {
      throw new NotFoundException(`Prenda con id ${prendaId} no encontrada`);
    }

    const servicio = (prenda as any).servicios?.find((s: any) => s.id === prendaServicioId);
    if (!servicio) {
      throw new NotFoundException(`Servicio asignado con id ${prendaServicioId} no encontrado en la prenda ${prendaId}`);
    }

    const deleted = await this.prendaDAO.deletePrendaServicio(prendaServicioId);
    await this.facturaFacade.recalcularFactura(prenda.facturaId);

    const nuevaFecha = await this.calcularFechaCompromiso(0);
    await this.prismaService.prenda.update({
      where: { id: prendaId },
      data: { fechaCompromiso: nuevaFecha }
    });

    await this.prismaService.auditLog.create({
      data: {
        usuarioId,
        accion: AccionAuditoria.ANULACION,
        entidadAfectada: 'PrendaServicio',
        entidadId: prendaServicioId,
        valorAnterior: {
          prendaId,
          servicioId: deleted.servicioId,
          precioFinal: deleted.precioFinal.toString(),
        },
      },
    });
  }

  async cambiarEstado(
    id: number,
    dto: CambiarEstadoDto,
    usuarioId: number,
  ): Promise<PrendaResponseDto> {
    const prenda = await this.prendaDAO.findById(id);
    if (!prenda) {
      throw new NotFoundException(`Prenda con id ${id} no encontrada`);
    }

    const updateData: Partial<Prenda> = {
      estadoActual: dto.nuevoEstado,
    };

    if (dto.usuarioTallerId !== undefined && dto.usuarioTallerId !== null) {
      const user = await this.prismaService.usuario.findUnique({
        where: { id: dto.usuarioTallerId },
      });
      if (!user || !user.activo) {
        throw new NotFoundException(`Usuario de taller con id ${dto.usuarioTallerId} no encontrado o inactivo`);
      }
      if (user.rol !== 'TALLER' && user.rol !== 'ADMIN') {
        throw new BadRequestException('El usuario asignado debe tener rol TALLER o ADMIN');
      }
      updateData.usuarioTallerId = dto.usuarioTallerId;
    } else if (dto.usuarioTallerId === null) {
      updateData.usuarioTallerId = null;
    }

    const valorAnterior = {
      estadoActual: prenda.estadoActual,
      usuarioTallerId: prenda.usuarioTallerId,
    };

    const updated = await this.prendaDAO.update(id, updateData);

    await this.prismaService.auditLog.create({
      data: {
        usuarioId,
        accion: AccionAuditoria.CAMBIO_ESTADO,
        entidadAfectada: 'Prenda',
        entidadId: id,
        valorAnterior: valorAnterior as any,
        valorNuevo: {
          estadoActual: updated.estadoActual,
          usuarioTallerId: updated.usuarioTallerId,
        } as any,
      },
    });

    return toResponseDto(updated);
  }

  async subirFoto(
    id: number,
    dto: SubirFotoDto,
    usuarioId: number,
  ): Promise<PrendaResponseDto> {
    const prenda = await this.prendaDAO.findById(id);
    if (!prenda) {
      throw new NotFoundException(`Prenda con id ${id} no encontrada`);
    }

    const valorAnterior = { fotoUrl: prenda.fotoUrl };
    const updated = await this.prendaDAO.update(id, {
      fotoUrl: dto.fotoUrl,
    });

    await this.prismaService.auditLog.create({
      data: {
        usuarioId,
        accion: AccionAuditoria.MODIFICACION,
        entidadAfectada: 'Prenda',
        entidadId: id,
        valorAnterior: valorAnterior as any,
        valorNuevo: { fotoUrl: updated.fotoUrl } as any,
      },
    });

    return toResponseDto(updated);
  }

  async deletePrenda(id: number, usuarioId: number): Promise<PrendaResponseDto> {
    const prenda = await this.prendaDAO.findById(id);
    if (!prenda) {
      throw new NotFoundException(`Prenda con id ${id} no encontrada`);
    }

    const deleted = await this.prendaDAO.delete(id);
    await this.facturaFacade.recalcularFactura(prenda.facturaId);

    await this.prismaService.auditLog.create({
      data: {
        usuarioId,
        accion: AccionAuditoria.ANULACION,
        entidadAfectada: 'Prenda',
        entidadId: id,
        valorAnterior: deleted as any,
      },
    });

    return toResponseDto(deleted);
  }
}
