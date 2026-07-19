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
exports.TipoUrgenciaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const client_1 = require("../../../generated/prisma/client");
let TipoUrgenciaService = class TipoUrgenciaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.tipoUrgencia.findMany({ where: { activo: true }, orderBy: { porcentajeRecargo: 'asc' } });
    }
    async create(data) {
        return this.prisma.tipoUrgencia.create({
            data: {
                nombre: data.nombre,
                porcentajeRecargo: new client_1.Prisma.Decimal(data.porcentajeRecargo),
                activo: true,
            },
        });
    }
    async update(id, data) {
        const existing = await this.prisma.tipoUrgencia.findUnique({ where: { id } });
        if (!existing)
            throw new common_1.NotFoundException(`TipoUrgencia ${id} no encontrado`);
        return this.prisma.tipoUrgencia.update({
            where: { id },
            data: {
                ...data,
                ...(data.porcentajeRecargo !== undefined ? { porcentajeRecargo: new client_1.Prisma.Decimal(data.porcentajeRecargo) } : {})
            },
        });
    }
    async delete(id) {
        return this.prisma.tipoUrgencia.update({ where: { id }, data: { activo: false } });
    }
};
exports.TipoUrgenciaService = TipoUrgenciaService;
exports.TipoUrgenciaService = TipoUrgenciaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TipoUrgenciaService);
//# sourceMappingURL=tipo-urgencia.service.js.map