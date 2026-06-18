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
exports.AnunciosFacade = void 0;
const common_1 = require("@nestjs/common");
const anuncios_dao_1 = require("./anuncios.dao");
let AnunciosFacade = class AnunciosFacade {
    dao;
    constructor(dao) {
        this.dao = dao;
    }
    async createAnuncio(adminId, dto) {
        return this.dao.createAnuncio({
            ...dto,
            adminId,
        });
    }
    async getPendientes(sedeId, usuarioId) {
        const anuncios = await this.dao.getAnunciosBySede(sedeId);
        const pendientes = [];
        for (const anuncio of anuncios) {
            const respuesta = await this.dao.getAnuncioRespuesta(anuncio.id, usuarioId);
            if (!respuesta) {
                pendientes.push(anuncio);
            }
        }
        return pendientes;
    }
    async responderAnuncio(anuncioId, usuarioId, dto) {
        const existe = await this.dao.getAnuncioRespuesta(anuncioId, usuarioId);
        if (existe) {
            throw new common_1.BadRequestException('Ya has respondido a este anuncio');
        }
        return this.dao.createAnuncioRespuesta({
            anuncioId,
            usuarioId,
            respuesta: dto.respuesta,
        });
    }
    async getHistorial(search) {
        return this.dao.getHistorial(search);
    }
};
exports.AnunciosFacade = AnunciosFacade;
exports.AnunciosFacade = AnunciosFacade = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [anuncios_dao_1.AnunciosDao])
], AnunciosFacade);
//# sourceMappingURL=anuncios.facade.js.map