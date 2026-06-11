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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaFacade = void 0;
const common_1 = require("@nestjs/common");
const factura_dao_1 = require("./factura.dao");
const prisma_service_1 = require("../../prisma/prisma.service");
const sede_facade_1 = require("../sede/sede.facade");
const cliente_facade_1 = require("../cliente/cliente.facade");
const client_1 = require("../../../generated/prisma/client");
function toResponseDto(factura) {
    return {
        id: factura.id,
        numero: factura.numero,
        clienteId: factura.clienteId,
        usuarioCreadorId: factura.usuarioCreadorId,
        sedeId: factura.sedeId,
        subtotal: factura.subtotal.toNumber(),
        impuestosJson: factura.impuestosJson,
        total: factura.total.toNumber(),
        estadoPago: factura.estadoPago,
        notas: factura.notas,
        createdAt: factura.createdAt,
        updatedAt: factura.updatedAt,
        abonos: factura.abonos?.map((a) => ({
            id: a.id,
            facturaId: a.facturaId,
            monto: a.monto.toNumber(),
            metodoPago: a.metodoPago,
            notas: a.notas,
            fecha: a.fecha,
        })),
        cliente: factura.cliente,
        prendas: factura.prendas,
    };
}
let FacturaFacade = class FacturaFacade {
    facturaDAO;
    prismaService;
    SedeFacade;
    clienteFacade;
    constructor(facturaDAO, prismaService, SedeFacade, clienteFacade) {
        this.facturaDAO = facturaDAO;
        this.prismaService = prismaService;
        this.SedeFacade = SedeFacade;
        this.clienteFacade = clienteFacade;
    }
    async getFacturas(sedeId, estadoPago) {
        const facturas = await this.facturaDAO.findAll(sedeId, estadoPago);
        return facturas.map((f) => toResponseDto(f));
    }
    async getFacturaById(id) {
        const factura = await this.facturaDAO.findById(id);
        if (!factura) {
            throw new common_1.NotFoundException(`Factura con id ${id} no encontrada`);
        }
        return toResponseDto(factura);
    }
    async createFactura(dto, usuarioId) {
        const sede = await this.SedeFacade.getSedeById(dto.sedeId);
        const year = new Date().getFullYear();
        const codigoSede = sede.codigoSede;
        const latestFactura = await this.prismaService.factura.findFirst({
            where: {
                numero: {
                    startsWith: `${codigoSede}-${year}-`,
                },
            },
            orderBy: {
                numero: 'desc',
            },
        });
        let seq = 1;
        if (latestFactura) {
            const parts = latestFactura.numero.split('-');
            const lastSeq = parseInt(parts[parts.length - 1], 10);
            if (!isNaN(lastSeq)) {
                seq = lastSeq + 1;
            }
        }
        const numero = `${codigoSede}-${year}-${String(seq).padStart(5, '0')}`;
        const factura = await this.facturaDAO.create({
            numero,
            clienteId: dto.clienteId,
            usuarioCreadorId: usuarioId,
            sedeId: dto.sedeId,
            notas: dto.notas,
        });
        await this.prismaService.auditLog.create({
            data: {
                usuarioId,
                accion: client_1.AccionAuditoria.CREACION,
                entidadAfectada: 'Factura',
                entidadId: factura.id,
                valorNuevo: factura,
            },
        });
        return toResponseDto(factura);
    }
    async addAbono(facturaId, dto, usuarioId) {
        const factura = await this.facturaDAO.findById(facturaId);
        if (!factura) {
            throw new common_1.NotFoundException(`Factura con id ${facturaId} no encontrada`);
        }
        if (factura.estadoPago === client_1.EstadoPago.ANULADO) {
            throw new common_1.BadRequestException('No se puede registrar un abono en una factura anulada');
        }
        const abonos = await this.facturaDAO.getAbonos(facturaId);
        const totalAbonado = abonos.reduce((sum, item) => sum + item.monto.toNumber(), 0);
        const totalFactura = factura.total.toNumber();
        if (totalAbonado + dto.monto > totalFactura + 0.001) {
            throw new common_1.BadRequestException(`El monto del abono (${dto.monto}) supera el saldo pendiente (${totalFactura - totalAbonado})`);
        }
        const valorAnterior = { ...factura };
        await this.facturaDAO.addAbono(facturaId, dto);
        const nuevoTotalAbonado = totalAbonado + dto.monto;
        let nuevoEstado = client_1.EstadoPago.PENDIENTE;
        if (Math.abs(nuevoTotalAbonado - totalFactura) < 0.01) {
            nuevoEstado = client_1.EstadoPago.PAGADO;
        }
        else if (nuevoTotalAbonado > 0) {
            nuevoEstado = client_1.EstadoPago.PARCIAL;
        }
        const updatedFactura = await this.facturaDAO.update(facturaId, {
            estadoPago: nuevoEstado,
        });
        await this.prismaService.auditLog.create({
            data: {
                usuarioId,
                accion: client_1.AccionAuditoria.ABONO,
                entidadAfectada: 'Factura',
                entidadId: facturaId,
                valorAnterior: valorAnterior,
                valorNuevo: updatedFactura,
            },
        });
        if (nuevoEstado === client_1.EstadoPago.PAGADO && factura.clienteId) {
            await this.clienteFacade.recalcularNivelPremium(factura.clienteId);
        }
        const freshFactura = await this.facturaDAO.findById(facturaId);
        return toResponseDto(freshFactura);
    }
    async anularFactura(facturaId, usuarioId) {
        const factura = await this.facturaDAO.findById(facturaId);
        if (!factura) {
            throw new common_1.NotFoundException(`Factura con id ${facturaId} no encontrada`);
        }
        if (factura.estadoPago === client_1.EstadoPago.ANULADO) {
            throw new common_1.BadRequestException('La factura ya está anulada');
        }
        const valorAnterior = { ...factura };
        const updated = await this.facturaDAO.update(facturaId, {
            estadoPago: client_1.EstadoPago.ANULADO,
        });
        await this.prismaService.auditLog.create({
            data: {
                usuarioId,
                accion: client_1.AccionAuditoria.ANULACION,
                entidadAfectada: 'Factura',
                entidadId: facturaId,
                valorAnterior: valorAnterior,
                valorNuevo: updated,
            },
        });
        if (factura.clienteId) {
            await this.clienteFacade.recalcularNivelPremium(factura.clienteId);
        }
        return toResponseDto(updated);
    }
    async recalcularFactura(facturaId) {
        const updated = await this.facturaDAO.recalcularTotales(facturaId);
        const freshFactura = await this.facturaDAO.findById(facturaId);
        return toResponseDto(freshFactura);
    }
};
exports.FacturaFacade = FacturaFacade;
exports.FacturaFacade = FacturaFacade = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => cliente_facade_1.ClienteFacade))),
    __metadata("design:paramtypes", [factura_dao_1.FacturaDAO,
        prisma_service_1.PrismaService,
        sede_facade_1.SedeFacade,
        cliente_facade_1.ClienteFacade])
], FacturaFacade);
//# sourceMappingURL=factura.facade.js.map