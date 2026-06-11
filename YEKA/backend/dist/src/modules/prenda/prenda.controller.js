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
exports.PrendaController = void 0;
const common_1 = require("@nestjs/common");
const prenda_service_1 = require("./prenda.service");
const prenda_dto_1 = require("./prenda.dto");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const client_1 = require("../../../generated/prisma/client");
let PrendaController = class PrendaController {
    prendaService;
    constructor(prendaService) {
        this.prendaService = prendaService;
    }
    async createPrenda(dto) {
        return this.prendaService.createPrenda(dto);
    }
    async getPrendas(estadoActual, usuarioTallerIdQuery, facturaIdQuery) {
        const usuarioTallerId = usuarioTallerIdQuery ? parseInt(usuarioTallerIdQuery, 10) : undefined;
        const facturaId = facturaIdQuery ? parseInt(facturaIdQuery, 10) : undefined;
        return this.prendaService.getPrendas(estadoActual, usuarioTallerId, facturaId);
    }
    async getPrendaById(id) {
        return this.prendaService.getPrendaById(id);
    }
    async updatePrenda(id, dto, usuarioId) {
        return this.prendaService.updatePrenda(id, dto, usuarioId);
    }
    async asignarServicio(prendaId, dto, usuarioId) {
        return this.prendaService.asignarServicio(prendaId, dto, usuarioId);
    }
    async cambiarEstado(id, dto, usuarioId) {
        return this.prendaService.cambiarEstado(id, dto, usuarioId);
    }
    async subirFoto(id, dto, usuarioId) {
        return this.prendaService.subirFoto(id, dto, usuarioId);
    }
    async deletePrenda(id, usuarioId) {
        return this.prendaService.deletePrenda(id, usuarioId);
    }
};
exports.PrendaController = PrendaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [prenda_dto_1.CreatePrendaDto]),
    __metadata("design:returntype", Promise)
], PrendaController.prototype, "createPrenda", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('estadoActual')),
    __param(1, (0, common_1.Query)('usuarioTallerId')),
    __param(2, (0, common_1.Query)('facturaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], PrendaController.prototype, "getPrendas", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PrendaController.prototype, "getPrendaById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Number]),
    __metadata("design:returntype", Promise)
], PrendaController.prototype, "updatePrenda", null);
__decorate([
    (0, common_1.Post)(':id/servicios'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, prenda_dto_1.AsignarServicioDto, Number]),
    __metadata("design:returntype", Promise)
], PrendaController.prototype, "asignarServicio", null);
__decorate([
    (0, common_1.Patch)(':id/estado'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, prenda_dto_1.CambiarEstadoDto, Number]),
    __metadata("design:returntype", Promise)
], PrendaController.prototype, "cambiarEstado", null);
__decorate([
    (0, common_1.Patch)(':id/foto'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, prenda_dto_1.SubirFotoDto, Number]),
    __metadata("design:returntype", Promise)
], PrendaController.prototype, "subirFoto", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(client_1.Rol.ADMIN),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PrendaController.prototype, "deletePrenda", null);
exports.PrendaController = PrendaController = __decorate([
    (0, common_1.Controller)('prendas'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [prenda_service_1.PrendaService])
], PrendaController);
//# sourceMappingURL=prenda.controller.js.map