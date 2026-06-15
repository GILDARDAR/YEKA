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
exports.PrendaServicioResponseDto = exports.PrendaResponseDto = exports.SubirFotoDto = exports.CambiarEstadoDto = exports.AsignarServicioDto = exports.UpdatePrendaDto = exports.CreatePrendaDto = void 0;
const class_validator_1 = require("class-validator");
const client_1 = require("../../../generated/prisma/client");
class CreatePrendaDto {
    facturaId;
    tipoPrendaId;
    talla;
    color;
    esLujo;
    marca;
    notas;
}
exports.CreatePrendaDto = CreatePrendaDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreatePrendaDto.prototype, "facturaId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreatePrendaDto.prototype, "tipoPrendaId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePrendaDto.prototype, "talla", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePrendaDto.prototype, "color", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreatePrendaDto.prototype, "esLujo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePrendaDto.prototype, "marca", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePrendaDto.prototype, "notas", void 0);
class UpdatePrendaDto {
    tipoPrendaId;
    talla;
    color;
    esLujo;
    marca;
    notas;
}
exports.UpdatePrendaDto = UpdatePrendaDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdatePrendaDto.prototype, "tipoPrendaId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePrendaDto.prototype, "talla", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePrendaDto.prototype, "color", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdatePrendaDto.prototype, "esLujo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePrendaDto.prototype, "marca", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePrendaDto.prototype, "notas", void 0);
class AsignarServicioDto {
    servicioId;
    medidaEntregada;
    tipoExpress;
    observaciones;
}
exports.AsignarServicioDto = AsignarServicioDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], AsignarServicioDto.prototype, "servicioId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AsignarServicioDto.prototype, "medidaEntregada", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.TipoExpress),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AsignarServicioDto.prototype, "tipoExpress", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AsignarServicioDto.prototype, "observaciones", void 0);
class CambiarEstadoDto {
    nuevoEstado;
    usuarioTallerId;
}
exports.CambiarEstadoDto = CambiarEstadoDto;
__decorate([
    (0, class_validator_1.IsEnum)(client_1.EstadoPrenda),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CambiarEstadoDto.prototype, "nuevoEstado", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CambiarEstadoDto.prototype, "usuarioTallerId", void 0);
class SubirFotoDto {
    fotoUrl;
}
exports.SubirFotoDto = SubirFotoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SubirFotoDto.prototype, "fotoUrl", void 0);
class PrendaResponseDto {
    id;
    facturaId;
    codigoQR;
    tipoPrendaId;
    talla;
    color;
    marca;
    estadoActual;
    fechaCompromiso;
    esLujo;
    fotoUrl;
    usuarioTallerId;
    fechaUltimaNotificacion;
    notas;
    createdAt;
    updatedAt;
    tipoExpress;
    factura;
}
exports.PrendaResponseDto = PrendaResponseDto;
class PrendaServicioResponseDto {
    id;
    prendaId;
    servicioId;
    medidaEntregada;
    tipoExpress;
    precioFinal;
    observaciones;
    createdAt;
}
exports.PrendaServicioResponseDto = PrendaServicioResponseDto;
//# sourceMappingURL=prenda.dto.js.map