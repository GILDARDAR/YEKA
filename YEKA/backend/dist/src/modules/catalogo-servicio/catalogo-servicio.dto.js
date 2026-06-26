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
exports.CatalogoServicioResponseDto = exports.UpdateCatalogoServicioDto = exports.CreateCatalogoServicioDto = void 0;
const class_validator_1 = require("class-validator");
class CreateCatalogoServicioDto {
    nombre;
    categoria;
    tipoEspecifico;
    medidaBase;
    tiempoBase;
    categoriasFactoresIds;
}
exports.CreateCatalogoServicioDto = CreateCatalogoServicioDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCatalogoServicioDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCatalogoServicioDto.prototype, "categoria", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCatalogoServicioDto.prototype, "tipoEspecifico", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateCatalogoServicioDto.prototype, "medidaBase", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateCatalogoServicioDto.prototype, "tiempoBase", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateCatalogoServicioDto.prototype, "categoriasFactoresIds", void 0);
class UpdateCatalogoServicioDto {
    nombre;
    categoria;
    tipoEspecifico;
    medidaBase;
    tiempoBase;
    activo;
    categoriasFactoresIds;
}
exports.UpdateCatalogoServicioDto = UpdateCatalogoServicioDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCatalogoServicioDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCatalogoServicioDto.prototype, "categoria", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCatalogoServicioDto.prototype, "tipoEspecifico", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateCatalogoServicioDto.prototype, "medidaBase", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateCatalogoServicioDto.prototype, "tiempoBase", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateCatalogoServicioDto.prototype, "activo", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateCatalogoServicioDto.prototype, "categoriasFactoresIds", void 0);
class CatalogoServicioResponseDto {
    id;
    nombre;
    categoria;
    tipoEspecifico;
    medidaBase;
    tiempoBase;
    activo;
    categoriasFactores;
    createdAt;
    updatedAt;
}
exports.CatalogoServicioResponseDto = CatalogoServicioResponseDto;
//# sourceMappingURL=catalogo-servicio.dto.js.map