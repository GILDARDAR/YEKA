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
exports.FacturaDAO = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const client_1 = require("../../../generated/prisma/client");
let FacturaDAO = class FacturaDAO {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(sedeId, estadoPago) {
        return this.prisma.factura.findMany({
            where: {
                ...(sedeId ? { sedeId } : {}),
                ...(estadoPago ? { estadoPago } : {}),
            },
            orderBy: { createdAt: 'desc' },
            include: { cliente: true, abonos: true },
        });
    }
    async findById(id) {
        return this.prisma.factura.findUnique({
            where: { id },
            include: {
                cliente: true,
                abonos: true,
                prendas: {
                    include: {
                        tipoPrenda: true,
                        tipoUrgencia: true,
                        servicios: {
                            include: {
                                servicio: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async findByNumero(numero) {
        return this.prisma.factura.findUnique({
            where: { numero },
        });
    }
    async create(data) {
        return this.prisma.factura.create({
            data: {
                ...data,
                subtotal: 0,
                total: 0,
                estadoPago: client_1.EstadoPago.PENDIENTE,
                impuestosJson: { iva: 21, monto: 0 },
            },
        });
    }
    async update(id, data) {
        return this.prisma.factura.update({
            where: { id },
            data: data,
        });
    }
    async addAbono(facturaId, data) {
        return this.prisma.abono.create({
            data: {
                facturaId,
                monto: new client_1.Prisma.Decimal(data.monto),
                metodoPago: data.metodoPago,
                notas: data.notas || null,
            },
        });
    }
    async getAbonos(facturaId) {
        return this.prisma.abono.findMany({
            where: { facturaId },
            orderBy: { fecha: 'asc' },
        });
    }
    async getAbonoById(abonoId) {
        return this.prisma.abono.findUnique({
            where: { id: abonoId },
        });
    }
    async updateAbono(abonoId, data) {
        return this.prisma.abono.update({
            where: { id: abonoId },
            data: {
                ...(data.monto !== undefined && { monto: new client_1.Prisma.Decimal(data.monto) }),
                ...(data.metodoPago && { metodoPago: data.metodoPago }),
                ...(data.notas !== undefined && { notas: data.notas }),
            },
        });
    }
    async deleteAbono(abonoId) {
        return this.prisma.abono.delete({
            where: { id: abonoId },
        });
    }
    async recalcularTotales(facturaId) {
        const asignaciones = await this.prisma.prendaServicio.findMany({
            where: {
                prenda: {
                    facturaId,
                },
            },
        });
        const subtotal = asignaciones.reduce((sum, item) => sum.add(item.precioFinal), new client_1.Prisma.Decimal(0));
        const confIva = await this.prisma.configuracion.findUnique({
            where: { clave: 'IVA_PORCENTAJE' }
        });
        const ivaPorcentaje = confIva ? parseFloat(confIva.valor) : 21.0;
        const subtotalNum = subtotal.toNumber();
        const factor = 1 - (ivaPorcentaje / 100);
        const totalNum = factor > 0 ? (subtotalNum / factor) : subtotalNum;
        const totalRedondeado = Math.round(totalNum * 100) / 100;
        const total = new client_1.Prisma.Decimal(totalRedondeado);
        const ivaMonto = new client_1.Prisma.Decimal(totalRedondeado - subtotalNum);
        const impuestosJson = {
            iva: ivaPorcentaje,
            monto: ivaMonto.toNumber(),
        };
        return this.prisma.factura.update({
            where: { id: facturaId },
            data: {
                subtotal,
                total,
                impuestosJson: impuestosJson,
            },
        });
    }
};
exports.FacturaDAO = FacturaDAO;
exports.FacturaDAO = FacturaDAO = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FacturaDAO);
//# sourceMappingURL=factura.dao.js.map