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
exports.SedeService = void 0;
const common_1 = require("@nestjs/common");
const sede_facade_1 = require("./sede.facade");
let SedeService = class SedeService {
    constructor(SedeFacade) {
        this.SedeFacade = SedeFacade;
    }
    async getSedes() {
        return this.SedeFacade.getSedes();
    }
    async getSedeById(id) {
        return this.SedeFacade.getSedeById(id);
    }
    async createSede(dto) {
        return this.SedeFacade.createSede(dto);
    }
    async updateSede(id, dto) {
        return this.SedeFacade.updateSede(id, dto);
    }
    async deleteSede(id) {
        return this.SedeFacade.deleteSede(id);
    }
    async getCapacidadDisponible(sedeId, fecha) {
        return this.SedeFacade.getCapacidadDisponible(sedeId, fecha);
    }
};
exports.SedeService = SedeService;
exports.SedeService = SedeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [sede_facade_1.SedeFacade])
], SedeService);
//# sourceMappingURL=sede.service.js.map