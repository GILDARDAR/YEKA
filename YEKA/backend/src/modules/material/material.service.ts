import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateMaterialDto, UpdateMaterialDto } from './material.dto';

@Injectable()
export class MaterialService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateMaterialDto) {
    return this.prisma.material.create({ data: dto });
  }

  findAll() {
    return this.prisma.material.findMany({ orderBy: { descripcion: 'asc' } });
  }

  findOne(id: number) {
    return this.prisma.material.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateMaterialDto) {
    return this.prisma.material.update({ where: { id }, data: dto });
  }

  remove(id: number) {
    return this.prisma.material.delete({ where: { id } });
  }
}
