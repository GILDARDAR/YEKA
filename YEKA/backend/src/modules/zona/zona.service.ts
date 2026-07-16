import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateZonaDto } from './dto/create-zona.dto';
import { UpdateZonaDto } from './dto/update-zona.dto';

@Injectable()
export class ZonaService {
  constructor(private prisma: PrismaService) {}

  create(createZonaDto: CreateZonaDto) {
    return this.prisma.zona.create({
      data: createZonaDto,
    });
  }

  findAll() {
    return this.prisma.zona.findMany();
  }

  findOne(id: number) {
    return this.prisma.zona.findUnique({
      where: { id },
    });
  }

  update(id: number, updateZonaDto: UpdateZonaDto) {
    return this.prisma.zona.update({
      where: { id },
      data: updateZonaDto,
    });
  }

  remove(id: number) {
    return this.prisma.zona.delete({
      where: { id },
    });
  }
}
