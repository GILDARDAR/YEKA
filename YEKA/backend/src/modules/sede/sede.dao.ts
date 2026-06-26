import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Sede } from '../../../generated/prisma/client';

@Injectable()
export class SedeDAO {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Sede[]> {
    return this.prisma.sede.findMany({
      where: { activa: true },
      orderBy: { nombre: 'asc' },
    });
  }

  async findById(id: number): Promise<Sede | null> {
    return this.prisma.sede.findUnique({ where: { id } });
  }

  async findByCodigo(codigo: string): Promise<Sede | null> {
    return this.prisma.sede.findUnique({ where: { codigoSede: codigo } });
  }

  async create(data: {
    codigoSede: string;
    nombre: string;
    direccion?: string;
    capacidadDiariaMax?: number;
  }): Promise<Sede> {
    return this.prisma.sede.create({ data });
  }

  async update(
    id: number,
    data: {
      codigoSede?: string;
      nombre?: string;
      direccion?: string;
      capacidadDiariaMax?: number;
      activa?: boolean;
    },
  ): Promise<Sede> {
    return this.prisma.sede.update({ where: { id }, data });
  }

  async softDelete(id: number): Promise<Sede> {
    return this.prisma.sede.update({
      where: { id },
      data: { activa: false },
    });
  }

  /**
   * Returns the sum of tiempoCalculado for all PrendaServicio records linked to Prendas
   * that belong to Facturas created on `fecha` for a given Sede.
   */
  async getUsadoEnFecha(
    sedeId: number,
    startOfDay: Date,
    endOfDay: Date,
  ): Promise<number> {
    const result = await this.prisma.prendaServicio.findMany({
      where: {
        prenda: {
          factura: {
            sedeId,
            createdAt: {
              gte: startOfDay,
              lte: endOfDay,
            },
          },
        },
      },
    });
    return result.reduce((sum, item) => sum + (item.tiempoCalculado ?? 0), 0);
  }
}
