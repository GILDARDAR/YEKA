import { Injectable, NotFoundException } from '@nestjs/common';
import { CatalogoServicioDAO } from './catalogo-servicio.dao';
import { CreateCatalogoServicioDto, UpdateCatalogoServicioDto, CatalogoServicioResponseDto } from './catalogo-servicio.dto';

function toResponseDto(item: any): CatalogoServicioResponseDto {
  return {
    id: item.id,
    nombre: item.nombre,
    categoria: item.categoria,
    tipoEspecifico: item.tipoEspecifico,
    medidaBase: item.medidaBase?.toNumber() ?? 0,
    tiempoBase: item.tiempoBase,
    activo: item.activo,
    categoriasFactores: item.categoriasFactores?.map((c: any) => ({
      id: c.id,
      nombre: c.nombre,
    })) || [],
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  };
}

@Injectable()
export class CatalogoServicioFacade {
  constructor(private readonly dao: CatalogoServicioDAO) {}

  async getServicios(categoria?: string): Promise<CatalogoServicioResponseDto[]> {
    const list = await this.dao.findAll(categoria);
    return list.map(toResponseDto);
  }

  async getServicioById(id: number): Promise<CatalogoServicioResponseDto> {
    const item = await this.dao.findById(id);
    if (!item) {
      throw new NotFoundException(`Servicio de catálogo con id ${id} no encontrado`);
    }
    return toResponseDto(item);
  }

  async createServicio(dto: CreateCatalogoServicioDto): Promise<CatalogoServicioResponseDto> {
    const item = await this.dao.create(dto);
    return toResponseDto(item);
  }

  async updateServicio(id: number, dto: UpdateCatalogoServicioDto): Promise<CatalogoServicioResponseDto> {
    const existing = await this.dao.findById(id);
    if (!existing) {
      throw new NotFoundException(`Servicio de catálogo con id ${id} no encontrado`);
    }
    const updated = await this.dao.update(id, dto);
    return toResponseDto(updated);
  }

  async deleteServicio(id: number): Promise<CatalogoServicioResponseDto> {
    const existing = await this.dao.findById(id);
    if (!existing) {
      throw new NotFoundException(`Servicio de catálogo con id ${id} no encontrado`);
    }
    const deleted = await this.dao.softDelete(id);
    return toResponseDto(deleted);
  }
}
