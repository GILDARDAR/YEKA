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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SedeController = void 0;
const common_1 = require("@nestjs/common");
const sede_service_1 = require("./sede.service");
const sede_dto_1 = require("./sede.dto");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
let SedeController = class SedeController {
    SedeService;
    constructor(SedeService) {
        this.SedeService = SedeService;
    }
    async getSedes() {
        return this.SedeService.getSedes();
    }
    async getSedeById(id) {
        return this.SedeService.getSedeById(id);
    }
    async createSede(dto) {
        return this.SedeService.createSede(dto);
    }
    async updateSede(id, dto) {
        return this.SedeService.updateSede(id, dto);
    }
    async deleteSede(id) {
        return this.SedeService.deleteSede(id);
    }
    async getCapacidad(id, fechaQuery) {
        const fecha = fechaQuery ? new Date(fechaQuery) : new Date();
        return this.SedeService.getCapacidadDisponible(id, fecha);
    }
};
exports.SedeController = SedeController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SedeController.prototype, "getSedes", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SedeController.prototype, "getSedeById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sede_dto_1.CreateSedeDto]),
    __metadata("design:returntype", Promise)
], SedeController.prototype, "createSede", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, sede_dto_1.UpdateSedeDto]),
    __metadata("design:returntype", Promise)
], SedeController.prototype, "updateSede", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SedeController.prototype, "deleteSede", null);
__decorate([
    (0, common_1.Get)(':id/capacidad'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('fecha')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], SedeController.prototype, "getCapacidad", null);
exports.SedeController = SedeController = __decorate([
    (0, common_1.Controller)('sedes'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [sede_service_1.SedeService])
], SedeController);
//# sourceMappingURL=sede.controller.js.map