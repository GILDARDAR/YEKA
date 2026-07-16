import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, TipoPrenda } from '../../../generated/prisma/client';

const tipoPrendaWithMateriales = Prisma.validator<Prisma.TipoPrendaDefaultArgs>()({
  include: { materiales: true },
});

export type TipoPrendaWithMateriales = Prisma.TipoPrendaGetPayload<typeof tipoPrendaWithMateriales>;

@Injectable()
export class TipoPrendaDao {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.TipoPrendaCreateInput): Promise<TipoPrendaWithMateriales> {
    return this.prisma.tipoPrenda.create({ data, include: { materiales: true } });
  }

  async findAll(): Promise<TipoPrendaWithMateriales[]> {
    return this.prisma.tipoPrenda.findMany({
      orderBy: { nombre: 'asc' },
      include: { materiales: true },
    });
  }

  async findById(id: number): Promise<TipoPrendaWithMateriales | null> {
    return this.prisma.tipoPrenda.findUnique({
      where: { id },
      include: { materiales: true },
    });
  }

  async update(id: number, data: Prisma.TipoPrendaUpdateInput): Promise<TipoPrendaWithMateriales> {
    return this.prisma.tipoPrenda.update({
      where: { id },
      data,
      include: { materiales: true },
    });
  }

  async delete(id: number): Promise<TipoPrenda> {
    return this.prisma.tipoPrenda.delete({ where: { id } });
  }
}
