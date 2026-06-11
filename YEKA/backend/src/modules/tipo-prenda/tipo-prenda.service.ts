import { Injectable, NotFoundException } from '@nestjs/common';
import { TipoPrendaDao } from './tipo-prenda.dao';
import { CreateTipoPrendaDto, UpdateTipoPrendaDto } from './tipo-prenda.dto';

@Injectable()
export class TipoPrendaService {
  constructor(private readonly tipoPrendaDao: TipoPrendaDao) {}

  async create(dto: CreateTipoPrendaDto) {
    return this.tipoPrendaDao.create(dto);
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
    return this.tipoPrendaDao.update(id, dto);
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.tipoPrendaDao.delete(id);
  }
}
