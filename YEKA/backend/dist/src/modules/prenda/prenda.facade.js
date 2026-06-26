"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PrendaFacade_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrendaFacade = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prenda_dao_1 = require("./prenda.dao");
const factura_facade_1 = require("../factura/factura.facade");
const prisma_service_1 = require("../../prisma/prisma.service");
const configuracion_service_1 = require("../configuracion/configuracion.service");
const client_1 = require("../../../generated/prisma/client");
function toResponseDto(prenda) {
    return {
        id: prenda.id,
        facturaId: prenda.facturaId,
        codigoQR: prenda.codigoQR,
        tipoPrendaId: prenda.tipoPrendaId,
        talla: prenda.talla || '',
        color: prenda.color || '',
        marca: prenda.marca || null,
        estadoActual: prenda.estadoActual,
        fechaCompromiso: prenda.fechaCompromiso,
        esLujo: prenda.esLujo,
        fotoUrl: prenda.fotoUrl,
        usuarioTallerId: prenda.usuarioTallerId,
        fechaUltimaNotificacion: prenda.fechaUltimaNotificacion,
        notas: prenda.notas,
        createdAt: prenda.createdAt,
        updatedAt: prenda.updatedAt,
        tipoUrgenciaId: prenda.tipoUrgenciaId || null,
        porcentajeAtencionAplicado: prenda.porcentajeAtencionAplicado ? prenda.porcentajeAtencionAplicado.toString() : null,
        factura: prenda.factura,
    };
}
function toPrendaServicioResponseDto(ps) {
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
        observaciones: ps.observaciones || null,
        detallesCalculo: ps.detallesCalculo || null,
        createdAt: ps.createdAt,
    };
}
let PrendaFacade = PrendaFacade_1 = class PrendaFacade {
    prendaDAO;
    prismaService;
    facturaFacade;
    configService;
    configuracionService;
    logger = new common_1.Logger(PrendaFacade_1.name);
    constructor(prendaDAO, prismaService, facturaFacade, configService, configuracionService) {
        this.prendaDAO = prendaDAO;
        this.prismaService = prismaService;
        this.facturaFacade = facturaFacade;
        this.configService = configService;
        this.configuracionService = configuracionService;
    }
    async createPrenda(dto) {
        const factura = await this.prismaService.factura.findUnique({
            where: { id: dto.facturaId },
        });
        if (!factura) {
            throw new common_1.NotFoundException(`Factura con id ${dto.facturaId} no encontrada`);
        }
        const tipoPrenda = await this.prismaService.tipoPrenda.findUnique({
            where: { id: dto.tipoPrendaId }
        });
        if (!tipoPrenda || !tipoPrenda.activo) {
            throw new common_1.NotFoundException(`Tipo de prenda con id ${dto.tipoPrendaId} no encontrado o inactivo`);
        }
        const sede = await this.prismaService.sede.findUnique({
            where: { id: factura.sedeId },
        });
        if (!sede) {
            throw new common_1.NotFoundException(`Sede con id ${factura.sedeId} no encontrada`);
        }
        if (dto.notas) {
            const wordCount = dto.notas.trim().split(/\s+/).filter(Boolean).length;
            if (wordCount > 1000) {
                throw new common_1.BadRequestException('La observación/notas no puede superar las 1000 palabras');
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
        });
        const qrCode = `PR-${codigoSede}-${year}-${String(created.id).padStart(5, '0')}`;
        const updated = await this.prendaDAO.update(created.id, {
            codigoQR: qrCode,
        });
        return toResponseDto(updated);
    }
    async getPrendas(filters) {
        const list = await this.prendaDAO.findAll(filters);
        return list.map(toResponseDto);
    }
    async getPrendaById(id) {
        const prenda = await this.prendaDAO.findById(id);
        if (!prenda) {
            throw new common_1.NotFoundException(`Prenda con id ${id} no encontrada`);
        }
        return {
            ...toResponseDto(prenda),
            servicios: prenda.servicios?.map(toPrendaServicioResponseDto) || [],
        };
    }
    async updatePrenda(id, dto, usuarioId) {
        const prenda = await this.prendaDAO.findById(id);
        if (!prenda) {
            throw new common_1.NotFoundException(`Prenda con id ${id} no encontrada`);
        }
        if (dto.notas) {
            const wordCount = dto.notas.trim().split(/\s+/).filter(Boolean).length;
            if (wordCount > 1000) {
                throw new common_1.BadRequestException('La observación/notas no puede superar las 1000 palabras');
            }
        }
        const valorAnterior = { ...prenda };
        const updateData = { ...dto };
        if (dto.tipoUrgenciaId !== undefined) {
            if (dto.tipoUrgenciaId === null) {
                updateData.porcentajeAtencionAplicado = null;
            }
            else {
                const urgencia = await this.prismaService.tipoUrgencia.findUnique({
                    where: { id: dto.tipoUrgenciaId }
                });
                updateData.porcentajeAtencionAplicado = urgencia?.porcentajeRecargo || 0;
            }
        }
        const updated = await this.prendaDAO.update(id, updateData);
        if (dto.tipoUrgenciaId !== undefined || dto.tipoPrendaId !== undefined) {
            await this.recalcularPreciosPrenda(id);
        }
        await this.prismaService.auditLog.create({
            data: {
                usuarioId,
                accion: client_1.AccionAuditoria.MODIFICACION,
                entidadAfectada: 'Prenda',
                entidadId: id,
                valorAnterior: valorAnterior,
                valorNuevo: updated,
            },
        });
        return toResponseDto(updated);
    }
    async getValorHoraGlobal() {
        const conf = await this.prismaService.configuracion.findUnique({
            where: { clave: 'VALOR_HORA_PUNTOS' }
        });
        return conf ? parseFloat(conf.valor) : 60;
    }
    async recalcularPreciosPrenda(prendaId) {
        const prenda = await this.prismaService.prenda.findUnique({
            where: { id: prendaId },
            include: { tipoPrenda: true, tipoUrgencia: true, servicios: true }
        });
        if (!prenda)
            return;
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
                    detallesCalculo: result.detallesCalculo
                }
            });
        }
        await this.facturaFacade.recalcularFactura(prenda.facturaId);
    }
    async calcularPreciosDeServicio(prenda, dto) {
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
            throw new common_1.NotFoundException(`Servicio de catálogo con id ${dto.servicioId} no encontrado o inactivo`);
        }
        const confMinutos = await this.prismaService.configuracion.findUnique({
            where: { clave: 'MINUTOS_PRODUCTIVOS_MES' }
        });
        const minutosProductivos = confMinutos ? parseInt(confMinutos.valor, 10) : 21120;
        const confUtilidad = await this.prismaService.configuracion.findUnique({
            where: { clave: 'MARGEN_UTILIDAD_GLOBAL' }
        });
        const margenUtilidad = confUtilidad ? parseFloat(confUtilidad.valor) : 30.0;
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
                }
                else if (factor.tipo === 'ANUAL') {
                    totalAnual += valor;
                }
                else if (factor.tipo === 'DIARIO') {
                    totalDiario += valor;
                }
            }
        }
        const costoMensualEquivalente = totalMensual + (totalAnual / 12) + (totalDiario * 22);
        const cfMin = minutosProductivos > 0 ? (costoMensualEquivalente / minutosProductivos) : 0;
        const medidaBase = servicio.medidaBase.toNumber() || 1;
        const tiempoBase = servicio.tiempoBase || 60;
        let medidaEntregadaFinal = dto.medidaEntregada;
        if (dto.medidaEntregada !== undefined && dto.medidaEntregada !== null) {
            if (dto.medidaEntregada < medidaBase) {
                medidaEntregadaFinal = medidaBase;
            }
        }
        const medidaUsada = medidaEntregadaFinal || medidaBase;
        const proporcion = medidaUsada / medidaBase;
        const tiempoCalculadoBase = Math.round(proporcion * tiempoBase);
        const porcentajeDificultad = prenda.tipoPrenda?.porcentajeDificultad?.toNumber() || 0;
        const tiempoCalculado = Math.round(tiempoCalculadoBase * (1 + porcentajeDificultad / 100));
        const valorPorTiempo = tiempoCalculado * cfMin;
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
        const precioBruto = valorPorTiempo + valorFactoresCobro;
        const precioConUtilidad = precioBruto * (1 + margenUtilidad / 100);
        const porcentajeUrgencia = prenda.porcentajeAtencionAplicado?.toNumber() ?? (prenda.tipoUrgencia?.porcentajeRecargo?.toNumber() || 0);
        const getUrgencyMultiplier = (val) => {
            if (val <= 0)
                return 1.0;
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
            factoresCobroDetalle: servicio.categoriasFactores.flatMap(cat => cat.activa ? cat.factores.filter(f => f.activo && f.tipo === 'FIJO_POR_SERVICIO').map(f => ({
                nombre: f.nombre,
                valor: f.valor.toNumber()
            })) : []),
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
    async asignarServicio(prendaId, dto, usuarioId) {
        const prenda = await this.prismaService.prenda.findUnique({
            where: { id: prendaId },
            include: { tipoPrenda: true, tipoUrgencia: true }
        });
        if (!prenda) {
            throw new common_1.NotFoundException(`Prenda con id ${prendaId} no encontrada`);
        }
        if (dto.observaciones) {
            const wordCount = dto.observaciones.trim().split(/\s+/).filter(Boolean).length;
            if (wordCount > 500) {
                throw new common_1.BadRequestException('Las observaciones del servicio no pueden superar las 500 palabras');
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
            detallesCalculo: preciosCalculados.detallesCalculo,
        });
        await this.facturaFacade.recalcularFactura(prenda.facturaId);
        await this.prismaService.auditLog.create({
            data: {
                usuarioId,
                accion: client_1.AccionAuditoria.MODIFICACION,
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
    async eliminarServicio(prendaId, prendaServicioId, usuarioId) {
        const prenda = await this.prendaDAO.findById(prendaId);
        if (!prenda) {
            throw new common_1.NotFoundException(`Prenda con id ${prendaId} no encontrada`);
        }
        const servicio = prenda.servicios?.find((s) => s.id === prendaServicioId);
        if (!servicio) {
            throw new common_1.NotFoundException(`Servicio asignado con id ${prendaServicioId} no encontrado en la prenda ${prendaId}`);
        }
        const deleted = await this.prendaDAO.deletePrendaServicio(prendaServicioId);
        await this.facturaFacade.recalcularFactura(prenda.facturaId);
        await this.prismaService.auditLog.create({
            data: {
                usuarioId,
                accion: client_1.AccionAuditoria.ANULACION,
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
    async cambiarEstado(id, dto, usuarioId) {
        const prenda = await this.prendaDAO.findById(id);
        if (!prenda) {
            throw new common_1.NotFoundException(`Prenda con id ${id} no encontrada`);
        }
        const updateData = {
            estadoActual: dto.nuevoEstado,
        };
        if (dto.usuarioTallerId !== undefined && dto.usuarioTallerId !== null) {
            const user = await this.prismaService.usuario.findUnique({
                where: { id: dto.usuarioTallerId },
            });
            if (!user || !user.activo) {
                throw new common_1.NotFoundException(`Usuario de taller con id ${dto.usuarioTallerId} no encontrado o inactivo`);
            }
            if (user.rol !== 'TALLER' && user.rol !== 'ADMIN') {
                throw new common_1.BadRequestException('El usuario asignado debe tener rol TALLER o ADMIN');
            }
            updateData.usuarioTallerId = dto.usuarioTallerId;
        }
        else if (dto.usuarioTallerId === null) {
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
                accion: client_1.AccionAuditoria.CAMBIO_ESTADO,
                entidadAfectada: 'Prenda',
                entidadId: id,
                valorAnterior: valorAnterior,
                valorNuevo: {
                    estadoActual: updated.estadoActual,
                    usuarioTallerId: updated.usuarioTallerId,
                },
            },
        });
        return toResponseDto(updated);
    }
    async subirFoto(id, dto, usuarioId) {
        const prenda = await this.prendaDAO.findById(id);
        if (!prenda) {
            throw new common_1.NotFoundException(`Prenda con id ${id} no encontrada`);
        }
        const valorAnterior = { fotoUrl: prenda.fotoUrl };
        const updated = await this.prendaDAO.update(id, {
            fotoUrl: dto.fotoUrl,
        });
        await this.prismaService.auditLog.create({
            data: {
                usuarioId,
                accion: client_1.AccionAuditoria.MODIFICACION,
                entidadAfectada: 'Prenda',
                entidadId: id,
                valorAnterior: valorAnterior,
                valorNuevo: { fotoUrl: updated.fotoUrl },
            },
        });
        return toResponseDto(updated);
    }
    async deletePrenda(id, usuarioId) {
        const prenda = await this.prendaDAO.findById(id);
        if (!prenda) {
            throw new common_1.NotFoundException(`Prenda con id ${id} no encontrada`);
        }
        const deleted = await this.prendaDAO.delete(id);
        await this.facturaFacade.recalcularFactura(prenda.facturaId);
        await this.prismaService.auditLog.create({
            data: {
                usuarioId,
                accion: client_1.AccionAuditoria.ANULACION,
                entidadAfectada: 'Prenda',
                entidadId: id,
                valorAnterior: deleted,
            },
        });
        return toResponseDto(deleted);
    }
};
exports.PrendaFacade = PrendaFacade;
exports.PrendaFacade = PrendaFacade = PrendaFacade_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prenda_dao_1.PrendaDAO,
        prisma_service_1.PrismaService,
        factura_facade_1.FacturaFacade,
        config_1.ConfigService,
        configuracion_service_1.ConfiguracionService])
], PrendaFacade);
//# sourceMappingURL=prenda.facade.js.map