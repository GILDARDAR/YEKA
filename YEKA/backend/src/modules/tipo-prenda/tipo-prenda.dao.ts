import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, TipoPrenda } from '../../../generated/prisma/client';

const materialesInclude = { include: { materiales: true } } as const;

@Injectable()
export class TipoPrendaDao {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.TipoPrendaCreateInput) {
    return this.prisma.tipoPrenda.create({ data, ...materialesInclude });
  }

  async findAll() {
    return this.prisma.tipoPrenda.findMany({
      orderBy: { nombre: 'asc' },
      ...materialesInclude,
    });
  }

  async findById(id: number) {
    return this.prisma.tipoPrenda.findUnique({
      where: { id },
      ...materialesInclude,
    });
  }

  async update(id: number, data: Prisma.TipoPrendaUpdateInput) {
    return this.prisma.tipoPrenda.update({
      where: { id },
      data,
      ...materialesInclude,
    });
  }

  async delete(id: number): Promise<TipoPrenda> {
    return this.prisma.tipoPrenda.delete({ where: { id } });
  }
}
