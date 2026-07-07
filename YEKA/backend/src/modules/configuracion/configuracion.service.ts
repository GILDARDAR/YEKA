import { Injectable, OnModuleInit } from '@nestjs/common';
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
}

const DEFAULT_CONFIG: AppConfig = {
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
      (config as any)[r.clave] = r.valor;
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
}
