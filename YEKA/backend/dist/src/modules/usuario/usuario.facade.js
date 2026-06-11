"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioFacade = void 0;
const common_1 = require("@nestjs/common");
const usuario_dao_1 = require("./usuario.dao");
const bcrypt = __importStar(require("bcrypt"));
const client_1 = require("../../../generated/prisma/client");
function toResponseDto(user) {
    return {
        id: user.id,
        sedeId: user.sedeId,
        nombre: user.nombre,
        dni: user.dni,
        telefono: user.telefono,
        email: user.email,
        rol: user.rol,
        activo: user.activo,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    };
}
let UsuarioFacade = class UsuarioFacade {
    usuarioDAO;
    constructor(usuarioDAO) {
        this.usuarioDAO = usuarioDAO;
    }
    async getUsuarios(sedeId) {
        const users = await this.usuarioDAO.findAll(sedeId);
        return users.map(toResponseDto);
    }
    async getUsuarioById(id) {
        const user = await this.usuarioDAO.findById(id);
        if (!user) {
            throw new common_1.NotFoundException(`Usuario con id ${id} no encontrado`);
        }
        return toResponseDto(user);
    }
    async createUsuario(dto) {
        const existingEmail = await this.usuarioDAO.findByEmail(dto.email);
        if (existingEmail) {
            throw new common_1.ConflictException('El correo electrónico ya está registrado');
        }
        if (dto.dni) {
            const existingDni = await this.usuarioDAO.findByDni(dto.dni);
            if (existingDni) {
                throw new common_1.ConflictException('El DNI ya está registrado');
            }
        }
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        let hashedPin;
        if (dto.pinAcceso) {
            hashedPin = await bcrypt.hash(dto.pinAcceso, 10);
        }
        const user = await this.usuarioDAO.create({
            sedeId: dto.sedeId,
            nombre: dto.nombre,
            dni: dto.dni || null,
            telefono: dto.telefono || null,
            email: dto.email,
            password: hashedPassword,
            pinAcceso: hashedPin || null,
            rol: dto.rol,
        });
        return toResponseDto(user);
    }
    async updateUsuario(id, dto) {
        const user = await this.usuarioDAO.findById(id);
        if (!user) {
            throw new common_1.NotFoundException(`Usuario con id ${id} no encontrado`);
        }
        const updateData = { ...dto };
        if (dto.email && dto.email !== user.email) {
            const existingEmail = await this.usuarioDAO.findByEmail(dto.email);
            if (existingEmail) {
                throw new common_1.ConflictException('El correo electrónico ya está registrado');
            }
        }
        if (dto.dni && dto.dni !== user.dni) {
            const existingDni = await this.usuarioDAO.findByDni(dto.dni);
            if (existingDni) {
                throw new common_1.ConflictException('El DNI ya está registrado');
            }
        }
        if (dto.password) {
            updateData.password = await bcrypt.hash(dto.password, 10);
        }
        if (dto.pinAcceso) {
            updateData.pinAcceso = await bcrypt.hash(dto.pinAcceso, 10);
        }
        const updated = await this.usuarioDAO.update(id, updateData);
        return toResponseDto(updated);
    }
    async deleteUsuario(id) {
        const user = await this.usuarioDAO.findById(id);
        if (!user) {
            throw new common_1.NotFoundException(`Usuario con id ${id} no encontrado`);
        }
        const deleted = await this.usuarioDAO.softDelete(id);
        return toResponseDto(deleted);
    }
    async registrarJornada(usuarioId, tipo) {
        const user = await this.usuarioDAO.findById(usuarioId);
        if (!user) {
            throw new common_1.NotFoundException(`Usuario con id ${usuarioId} no encontrado`);
        }
        const jornadasHoy = await this.usuarioDAO.getJornadasHoy(usuarioId);
        if (tipo === client_1.TipoJornada.ENTRADA) {
            if (jornadasHoy.length > 0 && jornadasHoy[jornadasHoy.length - 1].tipo === client_1.TipoJornada.ENTRADA) {
                throw new common_1.BadRequestException('Ya se ha registrado una entrada sin salida correspondiente');
            }
        }
        else {
            if (jornadasHoy.length === 0) {
                throw new common_1.BadRequestException('No se puede registrar salida sin haber registrado entrada hoy');
            }
            if (jornadasHoy[jornadasHoy.length - 1].tipo === client_1.TipoJornada.SALIDA) {
                throw new common_1.BadRequestException('Ya se ha registrado una salida para la última entrada');
            }
        }
        return this.usuarioDAO.registrarJornada(usuarioId, tipo);
    }
    async validateCredentials(email, password) {
        const user = await this.usuarioDAO.findByEmail(email);
        if (!user || !user.activo) {
            return null;
        }
        const isValid = await bcrypt.compare(password, user.password);
        return isValid ? user : null;
    }
    async validatePin(usuarioId, pin) {
        const user = await this.usuarioDAO.findById(usuarioId);
        if (!user || !user.activo || !user.pinAcceso) {
            return false;
        }
        return bcrypt.compare(pin, user.pinAcceso);
    }
};
exports.UsuarioFacade = UsuarioFacade;
exports.UsuarioFacade = UsuarioFacade = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuario_dao_1.UsuarioDAO])
], UsuarioFacade);
//# sourceMappingURL=usuario.facade.js.map