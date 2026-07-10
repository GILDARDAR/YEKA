import { OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
export interface AppConfig {
    EXPRESS_24H_MULTIPLIER: string;
    EXPRESS_48H_MULTIPLIER: string;
    VALOR_HORA_PUNTOS: string;
    MINUTOS_PRODUCTIVOS_MES: string;
    MARGEN_UTILIDAD_GLOBAL: string;
    EMPRESA_NOMBRE: string;
    EMPRESA_NIF: string;
    EMPRESA_TELEFONO: string;
    EMPRESA_WHATSAPP: string;
    EMPRESA_DIRECCION: string;
    IVA_PORCENTAJE: string;
}
export declare class ConfiguracionService implements OnModuleInit {
    private readonly prisma;
    constructor(prisma: PrismaService);
    onModuleInit(): Promise<void>;
    private seedDefaults;
    getAll(): Promise<AppConfig>;
    get(clave: keyof AppConfig): Promise<string>;
    update(dto: Partial<AppConfig>): Promise<AppConfig>;
}
