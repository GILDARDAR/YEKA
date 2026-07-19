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
exports.FactorCobroService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const client_1 = require("../../../generated/prisma/client");
let FactorCobroService = class FactorCobroService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.categoriaFactorCobro.findMany({
            where: { activa: true },
            include: {
                factores: {
                    where: { activo: true }
                }
            }
        });
    }
    async createCategoria(data) {
        return this.prisma.categoriaFactorCobro.create({ data });
    }
    async updateCategoria(id, data) {
        return this.prisma.categoriaFactorCobro.update({ where: { id }, data });
    }
    async createFactor(data) {
        return this.prisma.factorCobro.create({
            data: {
                categoriaId: data.categoriaId,
                nombre: data.nombre,
                valor: new client_1.Prisma.Decimal(data.valor),
                tipo: data.tipo,
                activo: true,
            }
        });
    }
    async updateFactor(id, data) {
        return this.prisma.factorCobro.update({
            where: { id },
            data: {
                ...data,
                ...(data.valor !== undefined ? { valor: new client_1.Prisma.Decimal(data.valor) } : {})
            }
        });
    }
};
exports.FactorCobroService = FactorCobroService;
exports.FactorCobroService = FactorCobroService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FactorCobroService);
//# sourceMappingURL=factor-cobro.service.js.map