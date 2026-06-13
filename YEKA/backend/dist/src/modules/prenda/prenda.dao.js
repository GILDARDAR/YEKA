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
exports.PrendaDAO = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const client_1 = require("../../../generated/prisma/client");
let PrendaDAO = class PrendaDAO {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(filters) {
        return this.prisma.prenda.findMany({
            where: {
                ...(filters?.estadoActual ? { estadoActual: filters.estadoActual } : {}),
                ...(filters?.usuarioTallerId ? { usuarioTallerId: filters.usuarioTallerId } : {}),
                ...(filters?.facturaId ? { facturaId: filters.facturaId } : {}),
            },
            include: {
                factura: true,
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findById(id) {
        return this.prisma.prenda.findUnique({
            where: { id },
            include: {
                servicios: {
                    include: {
                        servicio: true,
                    },
                },
            },
        });
    }
    async findByQr(codigoQR) {
        return this.prisma.prenda.findUnique({
            where: { codigoQR },
        });
    }
    async create(data) {
        return this.prisma.prenda.create({
            data: {
                facturaId: data.facturaId,
                tipoPrendaId: data.tipoPrendaId,
                talla: data.talla,
                color: data.color,
                marca: data.marca || null,
                esLujo: data.esLujo ?? false,
                notas: data.notas || null,
                codigoQR: data.codigoQR,
            },
        });
    }
    async update(id, data) {
        return this.prisma.prenda.update({
            where: { id },
            data,
        });
    }
    async delete(id) {
        return this.prisma.prenda.delete({
            where: { id },
        });
    }
    async asignarServicio(data) {
        return this.prisma.prendaServicio.create({
            data: {
                prendaId: data.prendaId,
                servicioId: data.servicioId,
                medidaEntregada: data.medidaEntregada !== undefined ? new client_1.Prisma.Decimal(data.medidaEntregada) : null,
                tipoExpress: data.tipoExpress,
                precioFinal: new client_1.Prisma.Decimal(data.precioFinal),
            },
        });
    }
    async getServiciosByPrenda(prendaId) {
        return this.prisma.prendaServicio.findMany({
            where: { prendaId },
            orderBy: { createdAt: 'asc' },
        });
    }
    async deletePrendaServicio(id) {
        return this.prisma.prendaServicio.delete({
            where: { id },
        });
    }
};
exports.PrendaDAO = PrendaDAO;
exports.PrendaDAO = PrendaDAO = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrendaDAO);
//# sourceMappingURL=prenda.dao.js.map