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
exports.FactorCobroController = void 0;
const common_1 = require("@nestjs/common");
const factor_cobro_service_1 = require("./factor-cobro.service");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
let FactorCobroController = class FactorCobroController {
    service;
    constructor(service) {
        this.service = service;
    }
    async findAll() {
        return this.service.findAll();
    }
    async findAllCategorias() {
        return this.service.findAll();
    }
    async createCategoria(body) {
        return this.service.createCategoria(body);
    }
    async updateCategoria(id, body) {
        return this.service.updateCategoria(id, body);
    }
    async createFactor(body) {
        return this.service.createFactor(body);
    }
    async updateFactor(id, body) {
        return this.service.updateFactor(id, body);
    }
};
exports.FactorCobroController = FactorCobroController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FactorCobroController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('categorias'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FactorCobroController.prototype, "findAllCategorias", null);
__decorate([
    (0, common_1.Post)('categorias'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FactorCobroController.prototype, "createCategoria", null);
__decorate([
    (0, common_1.Patch)('categorias/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FactorCobroController.prototype, "updateCategoria", null);
__decorate([
    (0, common_1.Post)('factores'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FactorCobroController.prototype, "createFactor", null);
__decorate([
    (0, common_1.Patch)('factores/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FactorCobroController.prototype, "updateFactor", null);
exports.FactorCobroController = FactorCobroController = __decorate([
    (0, common_1.Controller)('factores-cobro'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [factor_cobro_service_1.FactorCobroService])
], FactorCobroController);
//# sourceMappingURL=factor-cobro.controller.js.map