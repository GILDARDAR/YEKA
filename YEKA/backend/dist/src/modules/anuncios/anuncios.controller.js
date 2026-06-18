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
exports.AnunciosController = void 0;
const common_1 = require("@nestjs/common");
const anuncios_service_1 = require("./anuncios.service");
const anuncios_dto_1 = require("./anuncios.dto");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const client_1 = require("../../../generated/prisma/client");
let AnunciosController = class AnunciosController {
    anunciosService;
    constructor(anunciosService) {
        this.anunciosService = anunciosService;
    }
    async createAnuncio(adminId, dto) {
        return this.anunciosService.createAnuncio(adminId, dto);
    }
    async getPendientes(usuarioId, sedeId) {
        return this.anunciosService.getPendientes(sedeId, usuarioId);
    }
    async responderAnuncio(anuncioId, usuarioId, dto) {
        return this.anunciosService.responderAnuncio(anuncioId, usuarioId, dto);
    }
    async getHistorial(search) {
        return this.anunciosService.getHistorial(search);
    }
};
exports.AnunciosController = AnunciosController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(client_1.Rol.ADMIN),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, anuncios_dto_1.CreateAnuncioDto]),
    __metadata("design:returntype", Promise)
], AnunciosController.prototype, "createAnuncio", null);
__decorate([
    (0, common_1.Get)('pendientes'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)('sedeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AnunciosController.prototype, "getPendientes", null);
__decorate([
    (0, common_1.Post)(':id/responder'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, anuncios_dto_1.ResponderAnuncioDto]),
    __metadata("design:returntype", Promise)
], AnunciosController.prototype, "responderAnuncio", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(client_1.Rol.ADMIN),
    __param(0, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AnunciosController.prototype, "getHistorial", null);
exports.AnunciosController = AnunciosController = __decorate([
    (0, common_1.Controller)('anuncios'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [anuncios_service_1.AnunciosService])
], AnunciosController);
//# sourceMappingURL=anuncios.controller.js.map