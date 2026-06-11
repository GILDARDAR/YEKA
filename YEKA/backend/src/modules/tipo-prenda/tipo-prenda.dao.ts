import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, TipoPrenda } from '../../../generated/prisma/client';

@Injectable()
export class TipoPrendaDao {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.TipoPrendaCreateInput): Promise<TipoPrenda> {
    return this.prisma.tipoPrenda.create({ data });
  }

  async findAll(): Promise<TipoPrenda[]> {
    return this.prisma.tipoPrenda.findMany({
      orderBy: { nombre: 'asc' }
    });
  }

  async findById(id: number): Promise<TipoPrenda | null> {
    return this.prisma.tipoPrenda.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.TipoPrendaUpdateInput): Promise<TipoPrenda> {
    return this.prisma.tipoPrenda.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<TipoPrenda> {
    return this.prisma.tipoPrenda.delete({ where: { id } });
  }
}
