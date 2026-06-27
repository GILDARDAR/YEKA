import { Injectable } from '@nestjs/common';
import { PrendaFacade } from './prenda.facade';
import {
  CreatePrendaDto,
  AsignarServicioDto,
  CambiarEstadoDto,
  SubirFotoDto,
  PrendaResponseDto,
  PrendaServicioResponseDto,
} from './prenda.dto';
import { EstadoPrenda } from '../../../generated/prisma/client';

@Injectable()
export class PrendaService {
  constructor(private readonly prendaFacade: PrendaFacade) {}

  async createPrenda(dto: CreatePrendaDto): Promise<PrendaResponseDto> {
    return this.prendaFacade.createPrenda(dto);
  }

  async getPrendas(
    estadoActual?: EstadoPrenda,
    usuarioTallerId?: number,
    facturaId?: number,
  ): Promise<PrendaResponseDto[]> {
    return this.prendaFacade.getPrendas({ estadoActual, usuarioTallerId, facturaId });
  }

  async getPrendaById(id: number): Promise<PrendaResponseDto> {
    return this.prendaFacade.getPrendaById(id);
  }

  async calcularFechaCompromiso(tiempoNuevasPrendas: number): Promise<Date> {
    return this.prendaFacade.calcularFechaCompromiso(tiempoNuevasPrendas);
  }

  async updatePrenda(id: number, dto: any, usuarioId: number): Promise<PrendaResponseDto> {
    return this.prendaFacade.updatePrenda(id, dto, usuarioId);
  }

  async asignarServicio(
    prendaId: number,
    dto: AsignarServicioDto,
    usuarioId: number,
  ): Promise<PrendaServicioResponseDto> {
    return this.prendaFacade.asignarServicio(prendaId, dto, usuarioId);
  }

  async eliminarServicio(
    prendaId: number,
    prendaServicioId: number,
    usuarioId: number,
  ): Promise<void> {
    return this.prendaFacade.eliminarServicio(prendaId, prendaServicioId, usuarioId);
  }

  async cambiarEstado(
    id: number,
    dto: CambiarEstadoDto,
    usuarioId: number,
  ): Promise<PrendaResponseDto> {
    return this.prendaFacade.cambiarEstado(id, dto, usuarioId);
  }


  async subirFoto(
    id: number,
    dto: SubirFotoDto,
    usuarioId: number,
  ): Promise<PrendaResponseDto> {
    return this.prendaFacade.subirFoto(id, dto, usuarioId);
  }

  async deletePrenda(id: number, usuarioId: number): Promise<PrendaResponseDto> {
    return this.prendaFacade.deletePrenda(id, usuarioId);
  }
}
