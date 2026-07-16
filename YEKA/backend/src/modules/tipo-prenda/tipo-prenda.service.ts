import { Injectable, NotFoundException } from '@nestjs/common';
import { TipoPrendaDao } from './tipo-prenda.dao';
import { CreateTipoPrendaDto, UpdateTipoPrendaDto } from './tipo-prenda.dto';

@Injectable()
export class TipoPrendaService {
  constructor(private readonly tipoPrendaDao: TipoPrendaDao) {}

  async create(dto: CreateTipoPrendaDto) {
    const { materialesIds, ...rest } = dto;
    const data: any = { ...rest };
    if (materialesIds && materialesIds.length > 0) {
      data.materiales = { connect: materialesIds.map((id) => ({ id })) };
    }
    return this.tipoPrendaDao.create(data);
  }

  async findAll() {
    return this.tipoPrendaDao.findAll();
  }

  async findOne(id: number) {
    const tipo = await this.tipoPrendaDao.findById(id);
    if (!tipo) throw new NotFoundException('Tipo de prenda no encontrado');
    return tipo;
  }

  async update(id: number, dto: UpdateTipoPrendaDto) {
    await this.findOne(id);
    const { materialesIds, ...rest } = dto;
    const data: any = { ...rest };
    if (materialesIds !== undefined) {
      // "set" reemplaza completamente la lista de materiales asociados
      data.materiales = { set: materialesIds.map((mid) => ({ id: mid })) };
    }
    return this.tipoPrendaDao.update(id, data);
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.tipoPrendaDao.delete(id);
  }
}
