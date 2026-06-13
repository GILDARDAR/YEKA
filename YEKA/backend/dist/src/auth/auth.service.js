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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
const client_1 = require("../../generated/prisma/client");
let AuthService = class AuthService {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async register(dto) {
        const existingUser = await this.prisma.usuario.findUnique({
            where: { email: dto.email },
        });
        if (existingUser) {
            throw new common_1.ConflictException('El correo electrónico ya está registrado');
        }
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        let targetSedeId = dto.sedeId;
        if (!targetSedeId) {
            let sede = await this.prisma.sede.findFirst();
            if (!sede) {
                sede = await this.prisma.sede.create({
                    data: {
                        codigoSede: 'DFL',
                        nombre: 'Sede Principal',
                    },
                });
            }
            targetSedeId = sede.id;
        }
        const role = dto.rol || client_1.Rol.RECEPCION;
        const user = await this.prisma.usuario.create({
            data: {
                email: dto.email,
                password: hashedPassword,
                nombre: dto.nombre,
                rol: role,
                sedeId: targetSedeId,
            },
        });
        const token = this.generateToken(user.id, user.email, user.rol);
        return {
            message: 'Usuario registrado exitosamente',
            token,
            user: {
                id: user.id,
                email: user.email,
                nombre: user.nombre,
                rol: user.rol,
                sedeId: user.sedeId,
            },
        };
    }
    async login(dto) {
        console.log(`[LOGIN DEBUG] Iniciando sesión para: ${dto.email}`);
        const user = await this.prisma.usuario.findUnique({
            where: { email: dto.email },
        });
        if (!user) {
            console.log(`[LOGIN DEBUG] Fallo: El usuario con email ${dto.email} no existe en la base de datos.`);
            throw new common_1.UnauthorizedException('El usuario no existe');
        }
        console.log(`[LOGIN DEBUG] Comparando contraseñas para ${dto.email}:`);
        console.log(` -> Contraseña ingresada (texto claro): "${dto.password}"`);
        console.log(` -> Hash de contraseña en Base de Datos:  "${user.password}"`);
        const isPasswordValid = await bcrypt.compare(dto.password, user.password);
        if (!isPasswordValid) {
            console.log(`[LOGIN DEBUG] Fallo: La contraseña ingresada no coincide con el hash guardado.`);
            throw new common_1.UnauthorizedException('La contraseña es incorrecta');
        }
        console.log(`[LOGIN DEBUG] Éxito: Contraseña válida. Iniciando sesión para ${user.nombre} (${user.rol}).`);
        const token = this.generateToken(user.id, user.email, user.rol);
        return {
            message: 'Logueado satisfactoriamente',
            token,
            user: {
                id: user.id,
                email: user.email,
                nombre: user.nombre,
                rol: user.rol,
                sedeId: user.sedeId,
            },
        };
    }
    generateToken(userId, email, rol) {
        const payload = { sub: userId, email, rol };
        return this.jwtService.sign(payload);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map