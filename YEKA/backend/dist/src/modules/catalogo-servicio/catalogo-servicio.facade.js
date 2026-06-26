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
exports.CatalogoServicioFacade = void 0;
const common_1 = require("@nestjs/common");
const catalogo_servicio_dao_1 = require("./catalogo-servicio.dao");
function toResponseDto(item) {
    return {
        id: item.id,
        nombre: item.nombre,
        categoria: item.categoria,
        tipoEspecifico: item.tipoEspecifico,
        medidaBase: item.medidaBase?.toNumber() ?? 0,
        tiempoBase: item.tiempoBase,
        activo: item.activo,
        categoriasFactores: item.categoriasFactores?.map((c) => ({
            id: c.id,
            nombre: c.nombre,
        })) || [],
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
    };
}
let CatalogoServicioFacade = class CatalogoServicioFacade {
    dao;
    constructor(dao) {
        this.dao = dao;
    }
    async getServicios(categoria) {
        const list = await this.dao.findAll(categoria);
        return list.map(toResponseDto);
    }
    async getServicioById(id) {
        const item = await this.dao.findById(id);
        if (!item) {
            throw new common_1.NotFoundException(`Servicio de catálogo con id ${id} no encontrado`);
        }
        return toResponseDto(item);
    }
    async createServicio(dto) {
        const item = await this.dao.create(dto);
        return toResponseDto(item);
    }
    async updateServicio(id, dto) {
        const existing = await this.dao.findById(id);
        if (!existing) {
            throw new common_1.NotFoundException(`Servicio de catálogo con id ${id} no encontrado`);
        }
        const updated = await this.dao.update(id, dto);
        return toResponseDto(updated);
    }
    async deleteServicio(id) {
        const existing = await this.dao.findById(id);
        if (!existing) {
            throw new common_1.NotFoundException(`Servicio de catálogo con id ${id} no encontrado`);
        }
        const deleted = await this.dao.softDelete(id);
        return toResponseDto(deleted);
    }
};
exports.CatalogoServicioFacade = CatalogoServicioFacade;
exports.CatalogoServicioFacade = CatalogoServicioFacade = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [catalogo_servicio_dao_1.CatalogoServicioDAO])
], CatalogoServicioFacade);
//# sourceMappingURL=catalogo-servicio.facade.js.map