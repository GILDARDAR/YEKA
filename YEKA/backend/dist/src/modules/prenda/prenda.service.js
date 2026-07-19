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
exports.PrendaService = void 0;
const common_1 = require("@nestjs/common");
const prenda_facade_1 = require("./prenda.facade");
let PrendaService = class PrendaService {
    constructor(prendaFacade) {
        this.prendaFacade = prendaFacade;
    }
    async createPrenda(dto) {
        return this.prendaFacade.createPrenda(dto);
    }
    async getPrendas(estadoActual, usuarioTallerId, facturaId) {
        return this.prendaFacade.getPrendas({ estadoActual, usuarioTallerId, facturaId });
    }
    async getPrendaById(id) {
        return this.prendaFacade.getPrendaById(id);
    }
    async calcularFechaCompromiso(tiempoNuevasPrendas) {
        return this.prendaFacade.calcularFechaCompromiso(tiempoNuevasPrendas);
    }
    async updatePrenda(id, dto, usuarioId) {
        return this.prendaFacade.updatePrenda(id, dto, usuarioId);
    }
    async asignarServicio(prendaId, dto, usuarioId) {
        return this.prendaFacade.asignarServicio(prendaId, dto, usuarioId);
    }
    async eliminarServicio(prendaId, prendaServicioId, usuarioId) {
        return this.prendaFacade.eliminarServicio(prendaId, prendaServicioId, usuarioId);
    }
    async cambiarEstado(id, dto, usuarioId) {
        return this.prendaFacade.cambiarEstado(id, dto, usuarioId);
    }
    async subirFoto(id, dto, usuarioId) {
        return this.prendaFacade.subirFoto(id, dto, usuarioId);
    }
    async deletePrenda(id, usuarioId) {
        return this.prendaFacade.deletePrenda(id, usuarioId);
    }
};
exports.PrendaService = PrendaService;
exports.PrendaService = PrendaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prenda_facade_1.PrendaFacade])
], PrendaService);
//# sourceMappingURL=prenda.service.js.map