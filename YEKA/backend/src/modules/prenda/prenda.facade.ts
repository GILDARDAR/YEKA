import {
  Injectable,
  NotFoundException,
  BadRequestException,
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
  TipoExpress,
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
    tipoExpress: (prenda as any).tipoExpress || 'NORMAL',
    factura: (prenda as any).factura,
  };
}

function toPrendaServicioResponseDto(ps: PrendaServicio): PrendaServicioResponseDto {
  return {
    id: ps.id,
    prendaId: ps.prendaId,
    servicioId: ps.servicioId,
    medidaEntregada: ps.medidaEntregada ? ps.medidaEntregada.toString() : null,
    tipoExpress: ps.tipoExpress,
    precioFinal: ps.precioFinal.toString(),
    createdAt: ps.createdAt,
  };
}

@Injectable()
export class PrendaFacade {
  constructor(
    private readonly prendaDAO: PrendaDAO,
    private readonly prismaService: PrismaService,
    private readonly facturaFacade: FacturaFacade,
    private readonly configService: ConfigService,
    private readonly configuracionService: ConfiguracionService,
  ) {}

  async createPrenda(dto: CreatePrendaDto): Promise<PrendaResponseDto> {
    // 1. Verify invoice exists
    const factura = await this.prismaService.factura.findUnique({
      where: { id: dto.facturaId },
    });
    if (!factura) {
      throw new NotFoundException(`Factura con id ${dto.facturaId} no encontrada`);
    }

    // 1.5. Verify TipoPrenda exists
    const tipoPrenda = await this.prismaService.tipoPrenda.findUnique({
      where: { id: dto.tipoPrendaId }
    });
    if (!tipoPrenda || !tipoPrenda.activo) {
      throw new NotFoundException(`Tipo de prenda con id ${dto.tipoPrendaId} no encontrado o inactivo`);
    }

    // 2. Look up Sede to get codigoSede
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

    // 3. Create garment with a temporary unique QR first
    const tempQr = `TEMP-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const created = await this.prendaDAO.create({
      facturaId: dto.facturaId,
      tipoPrendaId: dto.tipoPrendaId,
      talla: dto.talla,
      color: dto.color,
      marca: dto.marca,
      esLujo: dto.esLujo,
      notas: dto.notas,
      codigoQR: tempQr,
    });

    // 4. Update the QR code using the generated auto-increment ID
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
    const updated = await this.prendaDAO.update(id, dto);

    // Create AuditLog
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

  async asignarServicio(
    prendaId: number,
    dto: AsignarServicioDto,
    usuarioId: number,
  ): Promise<PrendaServicioResponseDto> {
    // 1. Verify garment exists
    const prenda = await this.prendaDAO.findById(prendaId);
    if (!prenda) {
      throw new NotFoundException(`Prenda con id ${prendaId} no encontrada`);
    }

    // 2. Verify service exists in catalogue
    const servicio = await this.prismaService.catalogoServicio.findUnique({
      where: { id: dto.servicioId },
    });
    if (!servicio || !servicio.activo) {
      throw new NotFoundException(`Servicio de catálogo con id ${dto.servicioId} no encontrado o inactivo`);
    }

    // 2.5 Get pricing rule for this specific garment type
    const reglaPrecio = await this.prismaService.precioServicio.findUnique({
      where: {
        catalogoServicioId_tipoPrendaId: {
          catalogoServicioId: dto.servicioId,
          tipoPrendaId: prenda.tipoPrendaId
        }
      }
    });

    if (!reglaPrecio || !reglaPrecio.activo) {
      throw new BadRequestException(`El servicio no tiene una regla de precio configurada para este tipo de prenda.`);
    }

    // 3. Calculate base price using the length algorithm
    let basePrice = reglaPrecio.precioBase.toNumber();
    
    if (dto.medidaEntregada !== undefined && dto.medidaEntregada !== null) {
      const medidaBase = reglaPrecio.medidaBase.toNumber();
      const medidaExtra = reglaPrecio.medidaExtra.toNumber();
      const precioExtra = reglaPrecio.precioExtra.toNumber();

      if (dto.medidaEntregada > medidaBase && medidaExtra > 0) {
        const exceso = dto.medidaEntregada - medidaBase;
        const unidadesExtra = Math.ceil(exceso / medidaExtra);
        basePrice = basePrice + (unidadesExtra * precioExtra);
      }
    }

    // 3.5 Apply express multipliers using ConfiguracionService
    let multiplier = 1.0;
    if (dto.tipoExpress === TipoExpress.EXPRESS_48H) {
      const multStr = await this.configuracionService.get('EXPRESS_48H_MULTIPLIER');
      multiplier = parseFloat(multStr);
    } else if (dto.tipoExpress === TipoExpress.EXPRESS_24H) {
      const multStr = await this.configuracionService.get('EXPRESS_24H_MULTIPLIER');
      multiplier = parseFloat(multStr);
    }

    const finalPrice = basePrice * multiplier;

    // 4. Create PrendaServicio pivot record
    const ps = await this.prendaDAO.asignarServicio({
      prendaId,
      servicioId: dto.servicioId,
      medidaEntregada: dto.medidaEntregada,
      tipoExpress: dto.tipoExpress,
      precioFinal: finalPrice,
    });

    // 5. Recalculate invoice totals
    await this.facturaFacade.recalcularFactura(prenda.facturaId);

    // 6. Write AuditLog for assigning service
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
          tipoExpress: dto.tipoExpress,
          precioFinal: finalPrice,
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
    // 1. Verify garment exists
    const prenda = await this.prendaDAO.findById(prendaId);
    if (!prenda) {
      throw new NotFoundException(`Prenda con id ${prendaId} no encontrada`);
    }

    // 2. Verify the PrendaServicio belongs to this prenda
    const servicio = (prenda as any).servicios?.find((s: any) => s.id === prendaServicioId);
    if (!servicio) {
      throw new NotFoundException(`Servicio asignado con id ${prendaServicioId} no encontrado en la prenda ${prendaId}`);
    }

    // 3. Delete the PrendaServicio
    const deleted = await this.prendaDAO.deletePrendaServicio(prendaServicioId);

    // 4. Recalculate invoice totals
    await this.facturaFacade.recalcularFactura(prenda.facturaId);

    // 5. Write AuditLog
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
      // Check if user exists
      const user = await this.prismaService.usuario.findUnique({
        where: { id: dto.usuarioTallerId },
      });
      if (!user || !user.activo) {
        throw new NotFoundException(`Usuario de taller con id ${dto.usuarioTallerId} no encontrado o inactivo`);
      }
      // Check if user has TALLER or ADMIN role
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

    // Create AuditLog
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

  async cambiarTipoExpress(
    id: number,
    tipoExpress: TipoExpress,
    usuarioId: number,
  ): Promise<PrendaResponseDto> {
    const prenda = await this.prendaDAO.findById(id);
    if (!prenda) {
      throw new NotFoundException(`Prenda con id ${id} no encontrada`);
    }

    const valorAnterior = { tipoExpress: (prenda as any).tipoExpress || 'NORMAL' };
    
    // Update the Prenda's own setting
    const updated = await this.prendaDAO.update(id, { tipoExpress });

    // Iterate over all assigned services and update them
    const servicios = (prenda as any).servicios || [];
    for (const s of servicios) {
      const reglaPrecio = await this.prismaService.precioServicio.findUnique({
        where: {
          catalogoServicioId_tipoPrendaId: {
            catalogoServicioId: s.servicioId,
            tipoPrendaId: prenda.tipoPrendaId
          }
        }
      });
      if (reglaPrecio) {
        let basePrice = reglaPrecio.precioBase.toNumber();
        if (s.medidaEntregada !== null && s.medidaEntregada !== undefined) {
          const mEntregada = s.medidaEntregada.toNumber();
          const mBase = reglaPrecio.medidaBase.toNumber();
          const mExtra = reglaPrecio.medidaExtra.toNumber();
          const pExtra = reglaPrecio.precioExtra.toNumber();
          if (mEntregada > mBase && mExtra > 0) {
            const exceso = mEntregada - mBase;
            const unidadesExtra = Math.ceil(exceso / mExtra);
            basePrice = basePrice + (unidadesExtra * pExtra);
          }
        }

        let multiplier = 1.0;
        if (tipoExpress === TipoExpress.EXPRESS_48H) {
          const multStr = await this.configuracionService.get('EXPRESS_48H_MULTIPLIER');
          multiplier = parseFloat(multStr);
        } else if (tipoExpress === TipoExpress.EXPRESS_24H) {
          const multStr = await this.configuracionService.get('EXPRESS_24H_MULTIPLIER');
          multiplier = parseFloat(multStr);
        }

        const finalPrice = basePrice * multiplier;

        await this.prismaService.prendaServicio.update({
          where: { id: s.id },
          data: { tipoExpress, precioFinal: finalPrice },
        });
      }
    }

    // Recalculate invoice totals
    await this.facturaFacade.recalcularFactura(prenda.facturaId);

    // Create AuditLog
    await this.prismaService.auditLog.create({
      data: {
        usuarioId,
        accion: AccionAuditoria.MODIFICACION,
        entidadAfectada: 'Prenda',
        entidadId: id,
        valorAnterior: valorAnterior as any,
        valorNuevo: { tipoExpress } as any,
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

    // Create AuditLog
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

    // Recalculate invoice totals
    await this.facturaFacade.recalcularFactura(prenda.facturaId);

    // Create AuditLog
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
