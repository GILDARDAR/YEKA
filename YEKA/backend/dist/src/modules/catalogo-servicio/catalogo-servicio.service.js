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
exports.CatalogoServicioService = void 0;
const common_1 = require("@nestjs/common");
const catalogo_servicio_facade_1 = require("./catalogo-servicio.facade");
let CatalogoServicioService = class CatalogoServicioService {
    constructor(facade) {
        this.facade = facade;
    }
    async getServicios(categoria) {
        return this.facade.getServicios(categoria);
    }
    async getServicioById(id) {
        return this.facade.getServicioById(id);
    }
    async createServicio(dto) {
        return this.facade.createServicio(dto);
    }
    async updateServicio(id, dto) {
        return this.facade.updateServicio(id, dto);
    }
    async deleteServicio(id) {
        return this.facade.deleteServicio(id);
    }
};
exports.CatalogoServicioService = CatalogoServicioService;
exports.CatalogoServicioService = CatalogoServicioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [catalogo_servicio_facade_1.CatalogoServicioFacade])
], CatalogoServicioService);
//# sourceMappingURL=catalogo-servicio.service.js.map