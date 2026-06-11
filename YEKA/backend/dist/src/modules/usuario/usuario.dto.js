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
exports.UsuarioResponseDto = exports.RegistrarJornadaDto = exports.UpdateUsuarioDto = exports.CreateUsuarioDto = void 0;
const class_validator_1 = require("class-validator");
const client_1 = require("../../../generated/prisma/client");
class CreateUsuarioDto {
    sedeId;
    nombre;
    dni;
    telefono;
    email;
    password;
    pinAcceso;
    rol;
}
exports.CreateUsuarioDto = CreateUsuarioDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El ID de la sede es requerido' }),
    __metadata("design:type", Number)
], CreateUsuarioDto.prototype, "sedeId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre es requerido' }),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "dni", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'El correo electrónico debe ser válido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El correo electrónico es requerido' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(4, 4, { message: 'El PIN de acceso debe tener exactamente 4 dígitos' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "pinAcceso", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.Rol, { message: 'El rol debe ser ADMIN, RECEPCION o TALLER' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El rol es requerido' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "rol", void 0);
class UpdateUsuarioDto {
    sedeId;
    nombre;
    dni;
    telefono;
    email;
    password;
    pinAcceso;
    rol;
    activo;
}
exports.UpdateUsuarioDto = UpdateUsuarioDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateUsuarioDto.prototype, "sedeId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], UpdateUsuarioDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], UpdateUsuarioDto.prototype, "dni", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], UpdateUsuarioDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)({}, { message: 'El correo electrónico debe ser válido' }),
    __metadata("design:type", String)
], UpdateUsuarioDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
    __metadata("design:type", String)
], UpdateUsuarioDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(4, 4, { message: 'El PIN de acceso debe tener exactamente 4 dígitos' }),
    __metadata("design:type", String)
], UpdateUsuarioDto.prototype, "pinAcceso", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.Rol),
    __metadata("design:type", String)
], UpdateUsuarioDto.prototype, "rol", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateUsuarioDto.prototype, "activo", void 0);
class RegistrarJornadaDto {
    tipo;
}
exports.RegistrarJornadaDto = RegistrarJornadaDto;
__decorate([
    (0, class_validator_1.IsEnum)(client_1.TipoJornada, { message: 'El tipo debe ser ENTRADA o SALIDA' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegistrarJornadaDto.prototype, "tipo", void 0);
class UsuarioResponseDto {
    id;
    sedeId;
    nombre;
    dni;
    telefono;
    email;
    rol;
    activo;
    createdAt;
    updatedAt;
}
exports.UsuarioResponseDto = UsuarioResponseDto;
//# sourceMappingURL=usuario.dto.js.map