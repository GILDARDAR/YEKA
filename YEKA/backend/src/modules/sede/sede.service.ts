import { Injectable } from '@nestjs/common';
import { SedeFacade } from './sede.facade';
import { CreateSedeDto, UpdateSedeDto, SedeResponseDto, CapacidadResponseDto } from './sede.dto';

@Injectable()
export class SedeService {
  constructor(private readonly SedeFacade: SedeFacade) {}

  async getSedes(): Promise<SedeResponseDto[]> {
    return this.SedeFacade.getSedes();
  }

  async getSedeById(id: number): Promise<SedeResponseDto> {
    return this.SedeFacade.getSedeById(id);
  }

  async createSede(dto: CreateSedeDto): Promise<SedeResponseDto> {
    return this.SedeFacade.createSede(dto);
  }

  async updateSede(id: number, dto: UpdateSedeDto): Promise<SedeResponseDto> {
    return this.SedeFacade.updateSede(id, dto);
  }

  async deleteSede(id: number): Promise<SedeResponseDto> {
    return this.SedeFacade.deleteSede(id);
  }

  async getCapacidadDisponible(sedeId: number, fecha: Date): Promise<CapacidadResponseDto> {
    return this.SedeFacade.getCapacidadDisponible(sedeId, fecha);
  }
}
