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
exports.FacturaController = void 0;
const common_1 = require("@nestjs/common");
const factura_service_1 = require("./factura.service");
const factura_dto_1 = require("./factura.dto");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const client_1 = require("../../../generated/prisma/client");
let FacturaController = class FacturaController {
    facturaService;
    constructor(facturaService) {
        this.facturaService = facturaService;
    }
    async getFacturas(sedeIdQuery, estadoPago) {
        const sedeId = sedeIdQuery ? parseInt(sedeIdQuery, 10) : undefined;
        return this.facturaService.getFacturas(sedeId, estadoPago);
    }
    async getFacturaById(id) {
        return this.facturaService.getFacturaById(id);
    }
    async createFactura(dto, usuarioId) {
        return this.facturaService.createFactura(dto, usuarioId);
    }
    async anularFactura(id, usuarioId) {
        return this.facturaService.anularFactura(id, usuarioId);
    }
    async addAbono(id, dto, usuarioId) {
        return this.facturaService.addAbono(id, dto, usuarioId);
    }
    async downloadPdf(id, res) {
        const pdfBuffer = await this.facturaService.generatePdf(id);
        const factura = await this.facturaService.getFacturaById(id);
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="${factura.numero}.pdf"`,
            'Content-Length': pdfBuffer.length,
        });
        res.end(pdfBuffer);
    }
};
exports.FacturaController = FacturaController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('sedeId')),
    __param(1, (0, common_1.Query)('estadoPago')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FacturaController.prototype, "getFacturas", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FacturaController.prototype, "getFacturaById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [factura_dto_1.CreateFacturaDto, Number]),
    __metadata("design:returntype", Promise)
], FacturaController.prototype, "createFactura", null);
__decorate([
    (0, common_1.Patch)(':id/anular'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], FacturaController.prototype, "anularFactura", null);
__decorate([
    (0, common_1.Post)(':id/abonos'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, factura_dto_1.AddAbonoDto, Number]),
    __metadata("design:returntype", Promise)
], FacturaController.prototype, "addAbono", null);
__decorate([
    (0, common_1.Get)(':id/pdf'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FacturaController.prototype, "downloadPdf", null);
exports.FacturaController = FacturaController = __decorate([
    (0, common_1.Controller)('facturas'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [factura_service_1.FacturaService])
], FacturaController);
//# sourceMappingURL=factura.controller.js.map