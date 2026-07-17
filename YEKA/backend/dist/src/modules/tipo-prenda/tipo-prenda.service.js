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
exports.TipoPrendaService = void 0;
const common_1 = require("@nestjs/common");
const tipo_prenda_dao_1 = require("./tipo-prenda.dao");
let TipoPrendaService = class TipoPrendaService {
    tipoPrendaDao;
    constructor(tipoPrendaDao) {
        this.tipoPrendaDao = tipoPrendaDao;
    }
    async create(dto) {
        const { materialesIds, ...rest } = dto;
        const data = { ...rest };
        if (materialesIds && materialesIds.length > 0) {
            data.materiales = { connect: materialesIds.map((id) => ({ id })) };
        }
        return this.tipoPrendaDao.create(data);
    }
    async findAll() {
        return this.tipoPrendaDao.findAll();
    }
    async findOne(id) {
        const tipo = await this.tipoPrendaDao.findById(id);
        if (!tipo)
            throw new common_1.NotFoundException('Tipo de prenda no encontrado');
        return tipo;
    }
    async update(id, dto) {
        await this.findOne(id);
        const { materialesIds, ...rest } = dto;
        const data = { ...rest };
        if (materialesIds !== undefined) {
            data.materiales = { set: materialesIds.map((mid) => ({ id: mid })) };
        }
        return this.tipoPrendaDao.update(id, data);
    }
    async remove(id) {
        await this.findOne(id);
        return this.tipoPrendaDao.delete(id);
    }
};
exports.TipoPrendaService = TipoPrendaService;
exports.TipoPrendaService = TipoPrendaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [tipo_prenda_dao_1.TipoPrendaDao])
], TipoPrendaService);
//# sourceMappingURL=tipo-prenda.service.js.map