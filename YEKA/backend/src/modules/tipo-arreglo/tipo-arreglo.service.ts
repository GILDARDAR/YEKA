import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTipoArregloDto, UpdateTipoArregloDto } from './tipo-arreglo.dto';

@Injectable()
export class TipoArregloService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateTipoArregloDto) {
    return this.prisma.tipoArreglo.create({ data: dto });
  }

  findAll() {
    return this.prisma.tipoArreglo.findMany({ orderBy: { descripcion: 'asc' } });
  }

  findOne(id: number) {
    return this.prisma.tipoArreglo.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateTipoArregloDto) {
    return this.prisma.tipoArreglo.update({ where: { id }, data: dto });
  }

  remove(id: number) {
    return this.prisma.tipoArreglo.delete({ where: { id } });
  }
}
