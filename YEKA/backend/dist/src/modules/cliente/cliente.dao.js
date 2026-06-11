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
exports.ClienteDAO = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ClienteDAO = class ClienteDAO {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(sedeId) {
        return this.prisma.cliente.findMany({
            where: {
                activo: true,
                ...(sedeId ? { sedeOrigenId: sedeId } : {}),
            },
            orderBy: { nombre: 'asc' },
        });
    }
    async findById(id) {
        return this.prisma.cliente.findUnique({
            where: { id },
        });
    }
    async search(q) {
        return this.prisma.cliente.findMany({
            where: {
                activo: true,
                OR: [
                    { nombre: { contains: q, mode: 'insensitive' } },
                    { celular: { contains: q, mode: 'insensitive' } },
                    { dni: { contains: q, mode: 'insensitive' } },
                ],
            },
            orderBy: { nombre: 'asc' },
            take: 50,
        });
    }
    async findByDni(dni) {
        return this.prisma.cliente.findFirst({
            where: { dni, activo: true },
        });
    }
    async findByCelular(cel) {
        return this.prisma.cliente.findFirst({
            where: { celular: cel, activo: true },
        });
    }
    async create(data) {
        return this.prisma.cliente.create({
            data: {
                ...data,
                nivelPremium: 1,
                activo: true,
            },
        });
    }
    async update(id, data) {
        return this.prisma.cliente.update({
            where: { id },
            data,
        });
    }
    async softDelete(id) {
        return this.prisma.cliente.update({
            where: { id },
            data: { activo: false },
        });
    }
    async getFacturaCount(clienteId) {
        return this.prisma.factura.count({
            where: {
                clienteId,
                estadoPago: 'PAGADO',
            },
        });
    }
};
exports.ClienteDAO = ClienteDAO;
exports.ClienteDAO = ClienteDAO = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClienteDAO);
//# sourceMappingURL=cliente.dao.js.map