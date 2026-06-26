import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, TipoFactor } from '../../../generated/prisma/client';

@Injectable()
export class FactorCobroService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.categoriaFactorCobro.findMany({
      where: { activa: true },
      include: {
        factores: {
          where: { activo: true }
        }
      }
    });
  }

  async createCategoria(data: { nombre: string }) {
    return this.prisma.categoriaFactorCobro.create({ data });
  }

  async updateCategoria(id: number, data: { nombre?: string; activa?: boolean }) {
    return this.prisma.categoriaFactorCobro.update({ where: { id }, data });
  }

  async createFactor(data: { categoriaId: number; nombre: string; valor: number; tipo: TipoFactor }) {
    return this.prisma.factorCobro.create({
      data: {
        categoriaId: data.categoriaId,
        nombre: data.nombre,
        valor: new Prisma.Decimal(data.valor),
        tipo: data.tipo,
        activo: true,
      }
    });
  }

  async updateFactor(id: number, data: { nombre?: string; valor?: number; tipo?: TipoFactor; activo?: boolean }) {
    return this.prisma.factorCobro.update({
      where: { id },
      data: {
        ...data,
        ...(data.valor !== undefined ? { valor: new Prisma.Decimal(data.valor) } : {})
      }
    });
  }
}
