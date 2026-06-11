import { Injectable, NotFoundException } from '@nestjs/common';
import { CatalogoServicioDAO } from './catalogo-servicio.dao';
import { CreateCatalogoServicioDto, UpdateCatalogoServicioDto } from './catalogo-servicio.dto';

function toResponseDto(item: any) {
  return {
    id: item.id,
    categoria: item.categoria,
    tipoEspecifico: item.tipoEspecifico,
    pesoPuntos: item.pesoPuntos,
    activo: item.activo,
    preciosPorPrenda: item.preciosServicios?.map((p: any) => ({
      id: p.id,
      tipoPrendaId: p.tipoPrendaId,
      medidaBase: p.medidaBase.toString(),
      precioBase: p.precioBase.toString(),
      medidaExtra: p.medidaExtra.toString(),
      precioExtra: p.precioExtra.toString(),
    })) || [],
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  };
}

@Injectable()
export class CatalogoServicioFacade {
  constructor(private readonly dao: CatalogoServicioDAO) {}

  async getServicios(categoria?: string) {
    const list = await this.dao.findAll(categoria);
    return list.map(toResponseDto);
  }

  async getServicioById(id: number) {
    const item = await this.dao.findById(id);
    if (!item) {
      throw new NotFoundException(`Servicio de catálogo con id ${id} no encontrado`);
    }
    return toResponseDto(item);
  }

  async createServicio(dto: CreateCatalogoServicioDto) {
    const item = await this.dao.create(dto);
    return toResponseDto(item);
  }

  async updateServicio(id: number, dto: UpdateCatalogoServicioDto) {
    const existing = await this.dao.findById(id);
    if (!existing) {
      throw new NotFoundException(`Servicio de catálogo con id ${id} no encontrado`);
    }
    const updated = await this.dao.update(id, dto);
    return toResponseDto(updated);
  }

  async deleteServicio(id: number) {
    const existing = await this.dao.findById(id);
    if (!existing) {
      throw new NotFoundException(`Servicio de catálogo con id ${id} no encontrado`);
    }
    const deleted = await this.dao.softDelete(id);
    return toResponseDto(deleted);
  }
}
