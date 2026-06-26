import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
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
        categoriasFactores: true,
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
        categoriasFactores: true,
      },
    });
  }

  async create(data: CreateCatalogoServicioDto) {
    return this.prisma.catalogoServicio.create({
      data: {
        nombre: data.nombre ?? '',
        categoria: data.categoria,
        tipoEspecifico: data.tipoEspecifico,
        medidaBase: data.medidaBase,
        tiempoBase: data.tiempoBase,
        activo: true,
        ...(data.categoriasFactoresIds ? {
          categoriasFactores: {
            connect: data.categoriasFactoresIds.map(id => ({ id }))
          }
        } : {})
      },
      include: { categoriasFactores: true }
    });
  }

  async update(id: number, data: UpdateCatalogoServicioDto) {
    return this.prisma.catalogoServicio.update({
      where: { id },
      data: {
        ...(data.nombre !== undefined ? { nombre: data.nombre } : {}),
        ...(data.categoria ? { categoria: data.categoria } : {}),
        ...(data.tipoEspecifico ? { tipoEspecifico: data.tipoEspecifico } : {}),
        ...(data.medidaBase !== undefined ? { medidaBase: data.medidaBase } : {}),
        ...(data.tiempoBase !== undefined ? { tiempoBase: data.tiempoBase } : {}),
        ...(data.activo !== undefined ? { activo: data.activo } : {}),
        ...(data.categoriasFactoresIds ? {
          categoriasFactores: {
            set: data.categoriasFactoresIds.map(id => ({ id }))
          }
        } : {})
      },
      include: { categoriasFactores: true }
    });
  }

  async softDelete(id: number) {
    return this.prisma.catalogoServicio.update({
      where: { id },
      data: { activo: false },
      include: { categoriasFactores: true }
    });
  }
}
