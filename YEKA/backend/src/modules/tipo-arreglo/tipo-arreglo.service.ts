import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTipoArregloDto } from './dto/create-tipo-arreglo.dto';
import { UpdateTipoArregloDto } from './dto/update-tipo-arreglo.dto';

@Injectable()
export class TipoArregloService {
  constructor(private prisma: PrismaService) {}

  create(createTipoArregloDto: CreateTipoArregloDto) {
    return this.prisma.tipoArreglo.create({
      data: createTipoArregloDto,
    });
  }

  findAll() {
    return this.prisma.tipoArreglo.findMany();
  }

  findOne(id: number) {
    return this.prisma.tipoArreglo.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTipoArregloDto: UpdateTipoArregloDto) {
    return this.prisma.tipoArreglo.update({
      where: { id },
      data: updateTipoArregloDto,
    });
  }

  remove(id: number) {
    return this.prisma.tipoArreglo.delete({
      where: { id },
    });
  }
}
