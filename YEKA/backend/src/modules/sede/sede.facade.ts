import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { SedeDAO } from './sede.dao';
import {
  CreateSedeDto,
  UpdateSedeDto,
  SedeResponseDto,
  CapacidadResponseDto,
} from './sede.dto';
import { Sede } from '../../../generated/prisma/client';

function toResponseDto(sede: Sede): SedeResponseDto {
  return {
    id: sede.id,
    codigoSede: sede.codigoSede,
    nombre: sede.nombre,
    direccion: sede.direccion,
    capacidadDiariaMax: sede.capacidadDiariaMax,
    activa: sede.activa,
    createdAt: sede.createdAt,
    updatedAt: sede.updatedAt,
  };
}

@Injectable()
export class SedeFacade {
  constructor(private readonly sedeDAO: SedeDAO) {}

  async getSedes(): Promise<SedeResponseDto[]> {
    const sedes = await this.sedeDAO.findAll();
    return sedes.map(toResponseDto);
  }

  async getSedeById(id: number): Promise<SedeResponseDto> {
    const sede = await this.sedeDAO.findById(id);
    if (!sede) {
      throw new NotFoundException(`Sede con id ${id} no encontrada`);
    }
    return toResponseDto(sede);
  }

  async createSede(dto: CreateSedeDto): Promise<SedeResponseDto> {
    const existing = await this.sedeDAO.findByCodigo(dto.codigoSede);
    if (existing) {
      throw new ConflictException(
        `Ya existe una sede con el código '${dto.codigoSede}'`,
      );
    }
    const sede = await this.sedeDAO.create({
      codigoSede: dto.codigoSede,
      nombre: dto.nombre,
      direccion: dto.direccion,
      capacidadDiariaMax: dto.capacidadDiariaMax,
    });
    return toResponseDto(sede);
  }

  async updateSede(id: number, dto: UpdateSedeDto): Promise<SedeResponseDto> {
    const sede = await this.sedeDAO.findById(id);
    if (!sede) {
      throw new NotFoundException(`Sede con id ${id} no encontrada`);
    }

    if (dto.codigoSede && dto.codigoSede !== sede.codigoSede) {
      const existing = await this.sedeDAO.findByCodigo(dto.codigoSede);
      if (existing) {
        throw new ConflictException(
          `Ya existe una sede con el código '${dto.codigoSede}'`,
        );
      }
    }

    const updated = await this.sedeDAO.update(id, {
      codigoSede: dto.codigoSede,
      nombre: dto.nombre,
      direccion: dto.direccion,
      capacidadDiariaMax: dto.capacidadDiariaMax,
      activa: dto.activa,
    });
    return toResponseDto(updated);
  }

  async deleteSede(id: number): Promise<SedeResponseDto> {
    const sede = await this.sedeDAO.findById(id);
    if (!sede) {
      throw new NotFoundException(`Sede con id ${id} no encontrada`);
    }
    const updated = await this.sedeDAO.softDelete(id);
    return toResponseDto(updated);
  }

  async getCapacidadDisponible(
    sedeId: number,
    fecha: Date,
  ): Promise<CapacidadResponseDto> {
    const sede = await this.sedeDAO.findById(sedeId);
    if (!sede) {
      throw new NotFoundException(`Sede con id ${sedeId} no encontrada`);
    }

    const startOfDay = new Date(fecha);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(fecha);
    endOfDay.setHours(23, 59, 59, 999);

    const usado = await this.sedeDAO.getUsadoEnFecha(
      sedeId,
      startOfDay,
      endOfDay,
    );

    const capacidadDiariaMax = sede.capacidadDiariaMax;
    const disponible =
      capacidadDiariaMax !== null ? capacidadDiariaMax - usado : null;
    const porcentaje =
      capacidadDiariaMax !== null && capacidadDiariaMax > 0
        ? Math.round((usado / capacidadDiariaMax) * 100)
        : null;

    return {
      sedeId,
      fecha: startOfDay.toISOString().split('T')[0],
      capacidadDiariaMax,
      usado,
      disponible,
      porcentaje,
    };
  }
}
