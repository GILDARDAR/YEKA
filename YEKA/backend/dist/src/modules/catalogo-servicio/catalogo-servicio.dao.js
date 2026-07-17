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
const servicioInclude = {
    categoriasFactores: true,
    materiales: true,
    tiposArreglo: true,
};
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
            include: servicioInclude,
            orderBy: [
                { categoria: 'asc' },
                { tipoEspecifico: 'asc' },
            ],
        });
    }
    async findById(id) {
        return this.prisma.catalogoServicio.findUnique({
            where: { id },
            include: servicioInclude,
        });
    }
    async create(data) {
        return this.prisma.catalogoServicio.create({
            data: {
                nombre: data.nombre ?? '',
                categoria: data.categoria,
                tipoEspecifico: data.tipoEspecifico,
                medidaBase: data.medidaBase,
                tiempoBase: data.tiempoBase,
                activo: true,
                ...(data.categoriasFactoresIds?.length ? {
                    categoriasFactores: { connect: data.categoriasFactoresIds.map(id => ({ id })) }
                } : {}),
                ...(data.materialesIds?.length ? {
                    materiales: { connect: data.materialesIds.map(id => ({ id })) }
                } : {}),
                ...(data.tiposArregloIds?.length ? {
                    tiposArreglo: { connect: data.tiposArregloIds.map(id => ({ id })) }
                } : {}),
            },
            include: servicioInclude,
        });
    }
    async update(id, data) {
        return this.prisma.catalogoServicio.update({
            where: { id },
            data: {
                ...(data.nombre !== undefined ? { nombre: data.nombre } : {}),
                ...(data.categoria ? { categoria: data.categoria } : {}),
                ...(data.tipoEspecifico ? { tipoEspecifico: data.tipoEspecifico } : {}),
                ...(data.medidaBase !== undefined ? { medidaBase: data.medidaBase } : {}),
                ...(data.tiempoBase !== undefined ? { tiempoBase: data.tiempoBase } : {}),
                ...(data.activo !== undefined ? { activo: data.activo } : {}),
                ...(data.categoriasFactoresIds !== undefined ? {
                    categoriasFactores: { set: data.categoriasFactoresIds.map(id => ({ id })) }
                } : {}),
                ...(data.materialesIds !== undefined ? {
                    materiales: { set: data.materialesIds.map(id => ({ id })) }
                } : {}),
                ...(data.tiposArregloIds !== undefined ? {
                    tiposArreglo: { set: data.tiposArregloIds.map(id => ({ id })) }
                } : {}),
            },
            include: servicioInclude,
        });
    }
    async softDelete(id) {
        return this.prisma.catalogoServicio.update({
            where: { id },
            data: { activo: false },
            include: servicioInclude,
        });
    }
};
exports.CatalogoServicioDAO = CatalogoServicioDAO;
exports.CatalogoServicioDAO = CatalogoServicioDAO = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CatalogoServicioDAO);
//# sourceMappingURL=catalogo-servicio.dao.js.map