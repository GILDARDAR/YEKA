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
exports.UsuarioDAO = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let UsuarioDAO = class UsuarioDAO {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(sedeId) {
        return this.prisma.usuario.findMany({
            where: {
                activo: true,
                ...(sedeId ? { sedeId } : {}),
            },
            orderBy: { nombre: 'asc' },
        });
    }
    async findById(id) {
        return this.prisma.usuario.findUnique({
            where: { id },
            include: { sede: true },
        });
    }
    async findByEmail(email) {
        return this.prisma.usuario.findUnique({
            where: { email },
        });
    }
    async findByDni(dni) {
        return this.prisma.usuario.findUnique({
            where: { dni },
        });
    }
    async create(data) {
        return this.prisma.usuario.create({
            data,
        });
    }
    async update(id, data) {
        return this.prisma.usuario.update({
            where: { id },
            data,
        });
    }
    async softDelete(id) {
        return this.prisma.usuario.update({
            where: { id },
            data: { activo: false },
        });
    }
    async registrarJornada(usuarioId, tipo) {
        return this.prisma.registroJornada.create({
            data: {
                usuarioId,
                tipo,
            },
        });
    }
    async getJornadasHoy(usuarioId) {
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);
        const todayEnd = new Date();
        todayEnd.setHours(23, 59, 59, 999);
        return this.prisma.registroJornada.findMany({
            where: {
                usuarioId,
                timestamp: {
                    gte: todayStart,
                    lte: todayEnd,
                },
            },
            orderBy: { timestamp: 'asc' },
        });
    }
};
exports.UsuarioDAO = UsuarioDAO;
exports.UsuarioDAO = UsuarioDAO = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuarioDAO);
//# sourceMappingURL=usuario.dao.js.map