import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTipoArregloDto, UpdateTipoArregloDto } from './tipo-arreglo.dto';

@Injectable()
export class TipoArregloService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateTipoArregloDto) {
    const { zonasIds, ...data } = dto;
    return this.prisma.tipoArreglo.create({ 
      data: {
        ...data,
        ...(zonasIds && {
          zonas: {
            connect: zonasIds.map(id => ({ id }))
          }
        })
      },
      include: { zonas: true }
    });
  }

  findAll() {
    return this.prisma.tipoArreglo.findMany({ 
      orderBy: { descripcion: 'asc' },
      include: { zonas: true }
    });
  }

  findOne(id: number) {
    return this.prisma.tipoArreglo.findUnique({ 
      where: { id },
      include: { zonas: true }
    });
  }

  update(id: number, dto: UpdateTipoArregloDto) {
    const { zonasIds, ...data } = dto;
    return this.prisma.tipoArreglo.update({ 
      where: { id }, 
      data: {
        ...data,
        ...(zonasIds !== undefined && {
          zonas: {
            set: zonasIds.map(zid => ({ id: zid }))
          }
        })
      },
      include: { zonas: true }
    });
  }

  remove(id: number) {
    return this.prisma.tipoArreglo.delete({ where: { id } });
  }
}
