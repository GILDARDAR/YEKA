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
exports.SedeDAO = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let SedeDAO = class SedeDAO {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.sede.findMany({
            where: { activa: true },
            orderBy: { nombre: 'asc' },
        });
    }
    async findById(id) {
        return this.prisma.sede.findUnique({ where: { id } });
    }
    async findByCodigo(codigo) {
        return this.prisma.sede.findUnique({ where: { codigoSede: codigo } });
    }
    async create(data) {
        return this.prisma.sede.create({ data });
    }
    async update(id, data) {
        return this.prisma.sede.update({ where: { id }, data });
    }
    async softDelete(id) {
        return this.prisma.sede.update({
            where: { id },
            data: { activa: false },
        });
    }
    async getUsadoEnFecha(sedeId, startOfDay, endOfDay) {
        const result = await this.prisma.prendaServicio.findMany({
            where: {
                prenda: {
                    factura: {
                        sedeId,
                        createdAt: {
                            gte: startOfDay,
                            lte: endOfDay,
                        },
                    },
                },
            },
        });
        return result.reduce((sum, item) => sum + (item.tiempoCalculado ?? 0), 0);
    }
};
exports.SedeDAO = SedeDAO;
exports.SedeDAO = SedeDAO = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SedeDAO);
//# sourceMappingURL=sede.dao.js.map