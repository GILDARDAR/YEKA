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
exports.FacturaService = void 0;
const common_1 = require("@nestjs/common");
const factura_facade_1 = require("./factura.facade");
let FacturaService = class FacturaService {
    facturaFacade;
    constructor(facturaFacade) {
        this.facturaFacade = facturaFacade;
    }
    async getFacturas(sedeId, estadoPago) {
        return this.facturaFacade.getFacturas(sedeId, estadoPago);
    }
    async getFacturaById(id) {
        return this.facturaFacade.getFacturaById(id);
    }
    async createFactura(dto, usuarioId) {
        return this.facturaFacade.createFactura(dto, usuarioId);
    }
    async addAbono(facturaId, dto, usuarioId) {
        return this.facturaFacade.addAbono(facturaId, dto, usuarioId);
    }
    async anularFactura(facturaId, usuarioId) {
        return this.facturaFacade.anularFactura(facturaId, usuarioId);
    }
    async updateAbono(abonoId, dto, usuarioId) {
        return this.facturaFacade.updateAbono(abonoId, dto, usuarioId);
    }
    async deleteAbono(abonoId, usuarioId) {
        return this.facturaFacade.deleteAbono(abonoId, usuarioId);
    }
    async recalcularFactura(facturaId) {
        return this.facturaFacade.recalcularFactura(facturaId);
    }
    async generatePdf(id) {
        return this.facturaFacade.generatePdf(id);
    }
};
exports.FacturaService = FacturaService;
exports.FacturaService = FacturaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [factura_facade_1.FacturaFacade])
], FacturaService);
//# sourceMappingURL=factura.service.js.map