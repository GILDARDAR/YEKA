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
exports.FacturaResponseDto = exports.AbonoResponseDto = exports.UpdateFacturaDto = exports.AddAbonoDto = exports.CreateFacturaDto = void 0;
const class_validator_1 = require("class-validator");
const client_1 = require("../../../generated/prisma/client");
class CreateFacturaDto {
    clienteId;
    sedeId;
    notas;
}
exports.CreateFacturaDto = CreateFacturaDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "clienteId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El ID de la sede es requerido' }),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "sedeId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFacturaDto.prototype, "notas", void 0);
class AddAbonoDto {
    monto;
    metodoPago;
    notas;
}
exports.AddAbonoDto = AddAbonoDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0.01, { message: 'El monto del abono debe ser mayor a cero' }),
    __metadata("design:type", Number)
], AddAbonoDto.prototype, "monto", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.MetodoPago, { message: 'El método de pago debe ser válido' }),
    __metadata("design:type", String)
], AddAbonoDto.prototype, "metodoPago", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddAbonoDto.prototype, "notas", void 0);
class UpdateFacturaDto {
    notas;
}
exports.UpdateFacturaDto = UpdateFacturaDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFacturaDto.prototype, "notas", void 0);
class AbonoResponseDto {
    id;
    facturaId;
    monto;
    metodoPago;
    notas;
    fecha;
}
exports.AbonoResponseDto = AbonoResponseDto;
class FacturaResponseDto {
    id;
    numero;
    clienteId;
    usuarioCreadorId;
    sedeId;
    subtotal;
    impuestosJson;
    total;
    estadoPago;
    notas;
    createdAt;
    updatedAt;
    abonos;
    cliente;
    prendas;
}
exports.FacturaResponseDto = FacturaResponseDto;
//# sourceMappingURL=factura.dto.js.map