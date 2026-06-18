import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AnunciosDao {
  constructor(private readonly prisma: PrismaService) {}

  async createAnuncio(data: any) {
    return this.prisma.anuncio.create({
      data,
      include: {
        sede: true,
        admin: true,
      },
    });
  }

  async getAnunciosBySede(sedeId: number) {
    return this.prisma.anuncio.findMany({
      where: { sedeId },
      include: {
        admin: { select: { id: true, nombre: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getAnuncioRespuesta(anuncioId: number, usuarioId: number) {
    return this.prisma.anuncioRespuesta.findUnique({
      where: {
        anuncioId_usuarioId: {
          anuncioId,
          usuarioId,
        },
      },
    });
  }

  async createAnuncioRespuesta(data: any) {
    return this.prisma.anuncioRespuesta.create({
      data,
    });
  }

  async getHistorial(search?: string) {
    const where = search
      ? {
          mensaje: {
            contains: search,
            mode: 'insensitive' as const,
          },
        }
      : {};

    return this.prisma.anuncio.findMany({
      where,
      include: {
        sede: { select: { id: true, nombre: true } },
        admin: { select: { id: true, nombre: true } },
        respuestas: {
          include: {
            usuario: { select: { id: true, nombre: true } },
          },
          orderBy: { leidoAt: 'desc' },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
