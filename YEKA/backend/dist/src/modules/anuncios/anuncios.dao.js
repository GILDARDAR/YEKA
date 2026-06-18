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
exports.AnunciosDao = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let AnunciosDao = class AnunciosDao {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createAnuncio(data) {
        return this.prisma.anuncio.create({
            data,
            include: {
                sede: true,
                admin: true,
            },
        });
    }
    async getAnunciosBySede(sedeId) {
        return this.prisma.anuncio.findMany({
            where: { sedeId },
            include: {
                admin: { select: { id: true, nombre: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getAnuncioRespuesta(anuncioId, usuarioId) {
        return this.prisma.anuncioRespuesta.findUnique({
            where: {
                anuncioId_usuarioId: {
                    anuncioId,
                    usuarioId,
                },
            },
        });
    }
    async createAnuncioRespuesta(data) {
        return this.prisma.anuncioRespuesta.create({
            data,
        });
    }
    async getHistorial(search) {
        const where = search
            ? {
                mensaje: {
                    contains: search,
                    mode: 'insensitive',
                },
            }
            : {};
        return this.prisma.anuncio.findMany({
            where,
            include: {
                sede: { select: { id: true, nombre: true } },
                admin: { select: { id: true, nombre: true } },
                respuestas: {
                    include: {
                        usuario: { select: { id: true, nombre: true } },
                    },
                    orderBy: { leidoAt: 'desc' },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
};
exports.AnunciosDao = AnunciosDao;
exports.AnunciosDao = AnunciosDao = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AnunciosDao);
//# sourceMappingURL=anuncios.dao.js.map