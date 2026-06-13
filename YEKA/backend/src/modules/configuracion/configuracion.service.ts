import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

export interface AppConfig {
  EXPRESS_24H_MULTIPLIER: string;
  EXPRESS_48H_MULTIPLIER: string;
}

const DEFAULT_CONFIG: AppConfig = {
  EXPRESS_24H_MULTIPLIER: '1.50',
  EXPRESS_48H_MULTIPLIER: '1.30',
};

@Injectable()
export class ConfiguracionService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    await this.seedDefaults();
  }

  private async seedDefaults() {
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

  async getAll(): Promise<AppConfig> {
    const records = await this.prisma.configuracion.findMany();
    const config = { ...DEFAULT_CONFIG };
    records.forEach(r => {
      if (r.clave in config) {
        (config as any)[r.clave] = r.valor;
      }
    });
    return config;
  }

  async get(clave: keyof AppConfig): Promise<string> {
    const record = await this.prisma.configuracion.findUnique({
      where: { clave },
    });
    return record?.valor ?? DEFAULT_CONFIG[clave];
  }

  async update(dto: Partial<AppConfig>): Promise<AppConfig> {
    for (const [clave, valor] of Object.entries(dto)) {
      if (clave in DEFAULT_CONFIG && valor) {
        await this.prisma.configuracion.upsert({
          where: { clave },
          update: { valor },
          create: { clave, valor },
        });
      }
    }
    return this.getAll();
  }
}
