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
exports.CatalogoServicioDAO = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const client_1 = require("../../../generated/prisma/client");
let CatalogoServicioDAO = class CatalogoServicioDAO {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(categoria) {
        return this.prisma.catalogoServicio.findMany({
            where: {
                activo: true,
                ...(categoria ? { categoria } : {}),
            },
            include: {
                preciosServicios: true,
            },
            orderBy: [
                { categoria: 'asc' },
                { tipoEspecifico: 'asc' },
            ],
        });
    }
    async findById(id) {
        return this.prisma.catalogoServicio.findUnique({
            where: { id },
            include: {
                preciosServicios: true,
            },
        });
    }
    async create(data) {
        return this.prisma.catalogoServicio.create({
            data: {
                categoria: data.categoria,
                tipoEspecifico: data.tipoEspecifico,
                pesoPuntos: data.pesoPuntos,
                activo: true,
                preciosServicios: {
                    create: data.preciosPorPrenda.map(p => ({
                        tipoPrendaId: p.tipoPrendaId,
                        medidaBase: new client_1.Prisma.Decimal(p.medidaBase),
                        precioBase: new client_1.Prisma.Decimal(p.precioBase),
                        medidaExtra: new client_1.Prisma.Decimal(p.medidaExtra),
                        precioExtra: new client_1.Prisma.Decimal(p.precioExtra),
                    }))
                }
            },
            include: { preciosServicios: true }
        });
    }
    async update(id, data) {
        if (data.preciosPorPrenda) {
            await this.prisma.precioServicio.deleteMany({
                where: { catalogoServicioId: id }
            });
        }
        return this.prisma.catalogoServicio.update({
            where: { id },
            data: {
                ...(data.categoria ? { categoria: data.categoria } : {}),
                ...(data.tipoEspecifico ? { tipoEspecifico: data.tipoEspecifico } : {}),
                ...(data.pesoPuntos ? { pesoPuntos: data.pesoPuntos } : {}),
                ...(data.activo !== undefined ? { activo: data.activo } : {}),
                ...(data.preciosPorPrenda ? {
                    preciosServicios: {
                        create: data.preciosPorPrenda.map(p => ({
                            tipoPrendaId: p.tipoPrendaId,
                            medidaBase: new client_1.Prisma.Decimal(p.medidaBase),
                            precioBase: new client_1.Prisma.Decimal(p.precioBase),
                            medidaExtra: new client_1.Prisma.Decimal(p.medidaExtra),
                            precioExtra: new client_1.Prisma.Decimal(p.precioExtra),
                        }))
                    }
                } : {})
            },
            include: { preciosServicios: true }
        });
    }
    async softDelete(id) {
        return this.prisma.catalogoServicio.update({
            where: { id },
            data: { activo: false },
            include: { preciosServicios: true }
        });
    }
};
exports.CatalogoServicioDAO = CatalogoServicioDAO;
exports.CatalogoServicioDAO = CatalogoServicioDAO = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CatalogoServicioDAO);
//# sourceMappingURL=catalogo-servicio.dao.js.map