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
        tipoExpress: prenda.tipoExpress || 'NORMAL',
        factura: prenda.factura,
    };
}
function toPrendaServicioResponseDto(ps) {
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
let PrendaFacade = class PrendaFacade {
    prendaDAO;
    prismaService;
    facturaFacade;
    configService;
    configuracionService;
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
        const updated = await this.prendaDAO.update(id, dto);
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
    async asignarServicio(prendaId, dto, usuarioId) {
        const prenda = await this.prendaDAO.findById(prendaId);
        if (!prenda) {
            throw new common_1.NotFoundException(`Prenda con id ${prendaId} no encontrada`);
        }
        const servicio = await this.prismaService.catalogoServicio.findUnique({
            where: { id: dto.servicioId },
        });
        if (!servicio || !servicio.activo) {
            throw new common_1.NotFoundException(`Servicio de catálogo con id ${dto.servicioId} no encontrado o inactivo`);
        }
        const reglaPrecio = await this.prismaService.precioServicio.findUnique({
            where: {
                catalogoServicioId_tipoPrendaId: {
                    catalogoServicioId: dto.servicioId,
                    tipoPrendaId: prenda.tipoPrendaId
                }
            }
        });
        if (!reglaPrecio || !reglaPrecio.activo) {
            throw new common_1.BadRequestException(`El servicio no tiene una regla de precio configurada para este tipo de prenda.`);
        }
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
        let multiplier = 1.0;
        if (dto.tipoExpress === client_1.TipoExpress.EXPRESS_48H) {
            const multStr = await this.configuracionService.get('EXPRESS_48H_MULTIPLIER');
            multiplier = parseFloat(multStr);
        }
        else if (dto.tipoExpress === client_1.TipoExpress.EXPRESS_24H) {
            const multStr = await this.configuracionService.get('EXPRESS_24H_MULTIPLIER');
            multiplier = parseFloat(multStr);
        }
        const finalPrice = basePrice * multiplier;
        const ps = await this.prendaDAO.asignarServicio({
            prendaId,
            servicioId: dto.servicioId,
            medidaEntregada: dto.medidaEntregada,
            tipoExpress: dto.tipoExpress,
            precioFinal: finalPrice,
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
                    tipoExpress: dto.tipoExpress,
                    precioFinal: finalPrice,
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
    async cambiarTipoExpress(id, tipoExpress, usuarioId) {
        const prenda = await this.prendaDAO.findById(id);
        if (!prenda) {
            throw new common_1.NotFoundException(`Prenda con id ${id} no encontrada`);
        }
        const valorAnterior = { tipoExpress: prenda.tipoExpress || 'NORMAL' };
        const updated = await this.prendaDAO.update(id, { tipoExpress });
        const servicios = prenda.servicios || [];
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
                if (tipoExpress === client_1.TipoExpress.EXPRESS_48H) {
                    const multStr = await this.configuracionService.get('EXPRESS_48H_MULTIPLIER');
                    multiplier = parseFloat(multStr);
                }
                else if (tipoExpress === client_1.TipoExpress.EXPRESS_24H) {
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
        await this.facturaFacade.recalcularFactura(prenda.facturaId);
        await this.prismaService.auditLog.create({
            data: {
                usuarioId,
                accion: client_1.AccionAuditoria.MODIFICACION,
                entidadAfectada: 'Prenda',
                entidadId: id,
                valorAnterior: valorAnterior,
                valorNuevo: { tipoExpress },
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
exports.PrendaFacade = PrendaFacade = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prenda_dao_1.PrendaDAO,
        prisma_service_1.PrismaService,
        factura_facade_1.FacturaFacade,
        config_1.ConfigService,
        configuracion_service_1.ConfiguracionService])
], PrendaFacade);
//# sourceMappingURL=prenda.facade.js.map