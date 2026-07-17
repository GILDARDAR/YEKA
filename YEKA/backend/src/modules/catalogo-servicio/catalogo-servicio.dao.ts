import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCatalogoServicioDto, UpdateCatalogoServicioDto } from './catalogo-servicio.dto';

const servicioInclude = {
  categoriasFactores: true,
  materiales: true,
  tiposArreglo: true,
} as const;

@Injectable()
export class CatalogoServicioDAO {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(categoria?: string) {
    return this.prisma.catalogoServicio.findMany({
      where: {
        activo: true,
        ...(categoria ? { categoria } : {}),
      },
      include: servicioInclude,
      orderBy: [
        { categoria: 'asc' },
        { tipoEspecifico: 'asc' },
      ],
    });
  }

  async findById(id: number) {
    return this.prisma.catalogoServicio.findUnique({
      where: { id },
      include: servicioInclude,
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
        ...(data.categoriasFactoresIds?.length ? {
          categoriasFactores: { connect: data.categoriasFactoresIds.map(id => ({ id })) }
        } : {}),
        ...(data.materialesIds?.length ? {
          materiales: { connect: data.materialesIds.map(id => ({ id })) }
        } : {}),
        ...(data.tiposArregloIds?.length ? {
          tiposArreglo: { connect: data.tiposArregloIds.map(id => ({ id })) }
        } : {}),
      },
      include: servicioInclude,
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
        ...(data.categoriasFactoresIds !== undefined ? {
          categoriasFactores: { set: data.categoriasFactoresIds.map(id => ({ id })) }
        } : {}),
        ...(data.materialesIds !== undefined ? {
          materiales: { set: data.materialesIds.map(id => ({ id })) }
        } : {}),
        ...(data.tiposArregloIds !== undefined ? {
          tiposArreglo: { set: data.tiposArregloIds.map(id => ({ id })) }
        } : {}),
      },
      include: servicioInclude,
    });
  }

  async softDelete(id: number) {
    return this.prisma.catalogoServicio.update({
      where: { id },
      data: { activo: false },
      include: servicioInclude,
    });
  }
}
