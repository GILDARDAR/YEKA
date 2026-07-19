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
exports.SedeFacade = void 0;
const common_1 = require("@nestjs/common");
const sede_dao_1 = require("./sede.dao");
function toResponseDto(sede) {
    return {
        id: sede.id,
        codigoSede: sede.codigoSede,
        nombre: sede.nombre,
        direccion: sede.direccion,
        capacidadDiariaMax: sede.capacidadDiariaMax,
        activa: sede.activa,
        createdAt: sede.createdAt,
        updatedAt: sede.updatedAt,
    };
}
let SedeFacade = class SedeFacade {
    constructor(sedeDAO) {
        this.sedeDAO = sedeDAO;
    }
    async getSedes() {
        const sedes = await this.sedeDAO.findAll();
        return sedes.map(toResponseDto);
    }
    async getSedeById(id) {
        const sede = await this.sedeDAO.findById(id);
        if (!sede) {
            throw new common_1.NotFoundException(`Sede con id ${id} no encontrada`);
        }
        return toResponseDto(sede);
    }
    async createSede(dto) {
        const existing = await this.sedeDAO.findByCodigo(dto.codigoSede);
        if (existing) {
            throw new common_1.ConflictException(`Ya existe una sede con el código '${dto.codigoSede}'`);
        }
        const sede = await this.sedeDAO.create({
            codigoSede: dto.codigoSede,
            nombre: dto.nombre,
            direccion: dto.direccion,
            capacidadDiariaMax: dto.capacidadDiariaMax,
        });
        return toResponseDto(sede);
    }
    async updateSede(id, dto) {
        const sede = await this.sedeDAO.findById(id);
        if (!sede) {
            throw new common_1.NotFoundException(`Sede con id ${id} no encontrada`);
        }
        if (dto.codigoSede && dto.codigoSede !== sede.codigoSede) {
            const existing = await this.sedeDAO.findByCodigo(dto.codigoSede);
            if (existing) {
                throw new common_1.ConflictException(`Ya existe una sede con el código '${dto.codigoSede}'`);
            }
        }
        const updated = await this.sedeDAO.update(id, {
            codigoSede: dto.codigoSede,
            nombre: dto.nombre,
            direccion: dto.direccion,
            capacidadDiariaMax: dto.capacidadDiariaMax,
            activa: dto.activa,
        });
        return toResponseDto(updated);
    }
    async deleteSede(id) {
        const sede = await this.sedeDAO.findById(id);
        if (!sede) {
            throw new common_1.NotFoundException(`Sede con id ${id} no encontrada`);
        }
        const updated = await this.sedeDAO.softDelete(id);
        return toResponseDto(updated);
    }
    async getCapacidadDisponible(sedeId, fecha) {
        const sede = await this.sedeDAO.findById(sedeId);
        if (!sede) {
            throw new common_1.NotFoundException(`Sede con id ${sedeId} no encontrada`);
        }
        const startOfDay = new Date(fecha);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(fecha);
        endOfDay.setHours(23, 59, 59, 999);
        const usado = await this.sedeDAO.getUsadoEnFecha(sedeId, startOfDay, endOfDay);
        const capacidadDiariaMax = sede.capacidadDiariaMax;
        const disponible = capacidadDiariaMax !== null ? capacidadDiariaMax - usado : null;
        const porcentaje = capacidadDiariaMax !== null && capacidadDiariaMax > 0
            ? Math.round((usado / capacidadDiariaMax) * 100)
            : null;
        return {
            sedeId,
            fecha: startOfDay.toISOString().split('T')[0],
            capacidadDiariaMax,
            usado,
            disponible,
            porcentaje,
        };
    }
};
exports.SedeFacade = SedeFacade;
exports.SedeFacade = SedeFacade = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [sede_dao_1.SedeDAO])
], SedeFacade);
//# sourceMappingURL=sede.facade.js.map