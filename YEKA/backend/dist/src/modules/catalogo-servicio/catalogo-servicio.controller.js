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
exports.CatalogoServicioController = void 0;
const common_1 = require("@nestjs/common");
const catalogo_servicio_service_1 = require("./catalogo-servicio.service");
const catalogo_servicio_dto_1 = require("./catalogo-servicio.dto");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
let CatalogoServicioController = class CatalogoServicioController {
    constructor(service) {
        this.service = service;
    }
    async getServicios(categoria) {
        return this.service.getServicios(categoria);
    }
    async getServicioById(id) {
        return this.service.getServicioById(id);
    }
    async createServicio(dto) {
        return this.service.createServicio(dto);
    }
    async updateServicio(id, dto) {
        return this.service.updateServicio(id, dto);
    }
    async deleteServicio(id) {
        return this.service.deleteServicio(id);
    }
};
exports.CatalogoServicioController = CatalogoServicioController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('categoria')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CatalogoServicioController.prototype, "getServicios", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CatalogoServicioController.prototype, "getServicioById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [catalogo_servicio_dto_1.CreateCatalogoServicioDto]),
    __metadata("design:returntype", Promise)
], CatalogoServicioController.prototype, "createServicio", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, catalogo_servicio_dto_1.UpdateCatalogoServicioDto]),
    __metadata("design:returntype", Promise)
], CatalogoServicioController.prototype, "updateServicio", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CatalogoServicioController.prototype, "deleteServicio", null);
exports.CatalogoServicioController = CatalogoServicioController = __decorate([
    (0, common_1.Controller)('catalogo-servicios'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [catalogo_servicio_service_1.CatalogoServicioService])
], CatalogoServicioController);
//# sourceMappingURL=catalogo-servicio.controller.js.map