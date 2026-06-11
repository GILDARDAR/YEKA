import { Injectable } from '@nestjs/common';
import { CatalogoServicioFacade } from './catalogo-servicio.facade';
import {
  CreateCatalogoServicioDto,
  UpdateCatalogoServicioDto,
  CatalogoServicioResponseDto,
} from './catalogo-servicio.dto';

@Injectable()
export class CatalogoServicioService {
  constructor(private readonly facade: CatalogoServicioFacade) {}

  async getServicios(categoria?: string): Promise<CatalogoServicioResponseDto[]> {
    return this.facade.getServicios(categoria);
  }

  async getServicioById(id: number): Promise<CatalogoServicioResponseDto> {
    return this.facade.getServicioById(id);
  }

  async createServicio(dto: CreateCatalogoServicioDto): Promise<CatalogoServicioResponseDto> {
    return this.facade.createServicio(dto);
  }

  async updateServicio(id: number, dto: UpdateCatalogoServicioDto): Promise<CatalogoServicioResponseDto> {
    return this.facade.updateServicio(id, dto);
  }

  async deleteServicio(id: number): Promise<CatalogoServicioResponseDto> {
    return this.facade.deleteServicio(id);
  }
}
