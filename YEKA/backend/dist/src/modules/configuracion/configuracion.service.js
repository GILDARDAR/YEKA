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
exports.ConfiguracionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const DEFAULT_CONFIG = {
    EXPRESS_24H_MULTIPLIER: '1.50',
    EXPRESS_48H_MULTIPLIER: '1.30',
    VALOR_HORA_PUNTOS: '60.00',
    MINUTOS_PRODUCTIVOS_MES: '21120',
    MARGEN_UTILIDAD_GLOBAL: '30.00',
    EMPRESA_NOMBRE: 'Nombre del Taller',
    EMPRESA_NIF: 'B00000000',
    EMPRESA_TELEFONO: '+34 600 000 000',
    EMPRESA_WHATSAPP: '+34 600 000 000',
    EMPRESA_DIRECCION: 'Dirección del establecimiento',
    IVA_PORCENTAJE: '21.00',
};
let ConfiguracionService = class ConfiguracionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async onModuleInit() {
        await this.seedDefaults();
    }
    async seedDefaults() {
        for (const [clave, valor] of Object.entries(DEFAULT_CONFIG)) {
            const existing = await this.prisma.configuracion.findUnique({
                where: { clave },
            });
            if (!existing) {
                await this.prisma.configuracion.create({
                    data: { clave, valor },
                });
            }
        }
    }
    async getAll() {
        const records = await this.prisma.configuracion.findMany();
        const config = { ...DEFAULT_CONFIG };
        records.forEach(r => {
            config[r.clave] = r.valor;
        });
        return config;
    }
    async get(clave) {
        const record = await this.prisma.configuracion.findUnique({
            where: { clave },
        });
        return record?.valor ?? DEFAULT_CONFIG[clave];
    }
    async update(dto) {
        for (const [clave, valor] of Object.entries(dto)) {
            if (valor !== undefined) {
                await this.prisma.configuracion.upsert({
                    where: { clave },
                    update: { valor },
                    create: { clave, valor },
                });
            }
        }
        return this.getAll();
    }
};
exports.ConfiguracionService = ConfiguracionService;
exports.ConfiguracionService = ConfiguracionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConfiguracionService);
//# sourceMappingURL=configuracion.service.js.map