import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '../../../generated/prisma/client';
import { CreateCatalogoServicioDto, UpdateCatalogoServicioDto } from './catalogo-servicio.dto';

@Injectable()
export class CatalogoServicioDAO {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(categoria?: string) {
    return this.prisma.catalogoServicio.findMany({
      where: {
        activo: true,
        ...(categoria ? { categoria } : {}),
      },
      include: {
        preciosServicios: true,
      },
      orderBy: [
        { categoria: 'asc' },
        { tipoEspecifico: 'asc' },
      ],
    });
  }

  async findById(id: number) {
    return this.prisma.catalogoServicio.findUnique({
      where: { id },
      include: {
        preciosServicios: true,
      },
    });
  }

  async create(data: CreateCatalogoServicioDto) {
    return this.prisma.catalogoServicio.create({
      data: {
        categoria: data.categoria,
        tipoEspecifico: data.tipoEspecifico,
        pesoPuntos: data.pesoPuntos,
        activo: true,
        preciosServicios: {
          create: data.preciosPorPrenda.map(p => ({
            tipoPrendaId: p.tipoPrendaId,
            medidaBase: new Prisma.Decimal(p.medidaBase),
            precioBase: new Prisma.Decimal(p.precioBase),
            medidaExtra: new Prisma.Decimal(p.medidaExtra),
            precioExtra: new Prisma.Decimal(p.precioExtra),
          }))
        }
      },
      include: { preciosServicios: true }
    });
  }

  async update(id: number, data: UpdateCatalogoServicioDto) {
    // Si envían preciosPorPrenda, borramos los existentes y creamos los nuevos
    // Una opción más robusta sería hacer upsert, pero esto es más simple y efectivo
    if (data.preciosPorPrenda) {
      await this.prisma.precioServicio.deleteMany({
        where: { catalogoServicioId: id }
      });
    }

    return this.prisma.catalogoServicio.update({
      where: { id },
      data: {
        ...(data.categoria ? { categoria: data.categoria } : {}),
        ...(data.tipoEspecifico ? { tipoEspecifico: data.tipoEspecifico } : {}),
        ...(data.pesoPuntos ? { pesoPuntos: data.pesoPuntos } : {}),
        ...(data.activo !== undefined ? { activo: data.activo } : {}),
        ...(data.preciosPorPrenda ? {
          preciosServicios: {
            create: data.preciosPorPrenda.map(p => ({
              tipoPrendaId: p.tipoPrendaId,
              medidaBase: new Prisma.Decimal(p.medidaBase),
              precioBase: new Prisma.Decimal(p.precioBase),
              medidaExtra: new Prisma.Decimal(p.medidaExtra),
              precioExtra: new Prisma.Decimal(p.precioExtra),
            }))
          }
        } : {})
      },
      include: { preciosServicios: true }
    });
  }

  async softDelete(id: number) {
    return this.prisma.catalogoServicio.update({
      where: { id },
      data: { activo: false },
      include: { preciosServicios: true }
    });
  }
}
