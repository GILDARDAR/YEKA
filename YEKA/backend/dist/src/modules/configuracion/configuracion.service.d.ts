import { OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
export interface AppConfig {
    EXPRESS_24H_MULTIPLIER: string;
    EXPRESS_48H_MULTIPLIER: string;
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
