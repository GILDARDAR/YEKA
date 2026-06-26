import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '../../../generated/prisma/client';

@Injectable()
export class TipoUrgenciaService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.tipoUrgencia.findMany({ where: { activo: true }, orderBy: { porcentajeRecargo: 'asc' } });
  }

  async create(data: { nombre: string; porcentajeRecargo: number }) {
    return this.prisma.tipoUrgencia.create({
      data: {
        nombre: data.nombre,
        porcentajeRecargo: new Prisma.Decimal(data.porcentajeRecargo),
        activo: true,
      },
    });
  }

  async update(id: number, data: { nombre?: string; porcentajeRecargo?: number; activo?: boolean }) {
    const existing = await this.prisma.tipoUrgencia.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException(`TipoUrgencia ${id} no encontrado`);
    return this.prisma.tipoUrgencia.update({
      where: { id },
      data: {
        ...data,
        ...(data.porcentajeRecargo !== undefined ? { porcentajeRecargo: new Prisma.Decimal(data.porcentajeRecargo) } : {})
      },
    });
  }

  async delete(id: number) {
    return this.prisma.tipoUrgencia.update({ where: { id }, data: { activo: false } });
  }
}
