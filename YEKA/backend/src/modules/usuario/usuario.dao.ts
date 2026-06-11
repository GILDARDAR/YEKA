import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Usuario, RegistroJornada, Rol, TipoJornada } from '../../../generated/prisma/client';

@Injectable()
export class UsuarioDAO {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(sedeId?: number): Promise<Usuario[]> {
    return this.prisma.usuario.findMany({
      where: {
        activo: true,
        ...(sedeId ? { sedeId } : {}),
      },
      orderBy: { nombre: 'asc' },
    });
  }

  async findById(id: number): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: { id },
      include: { sede: true },
    });
  }

  async findByEmail(email: string): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: { email },
    });
  }

  async findByDni(dni: string): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: { dni },
    });
  }

  async create(data: any): Promise<Usuario> {
    return this.prisma.usuario.create({
      data,
    });
  }

  async update(id: number, data: any): Promise<Usuario> {
    return this.prisma.usuario.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number): Promise<Usuario> {
    return this.prisma.usuario.update({
      where: { id },
      data: { activo: false },
    });
  }

  async registrarJornada(usuarioId: number, tipo: TipoJornada): Promise<RegistroJornada> {
    return this.prisma.registroJornada.create({
      data: {
        usuarioId,
        tipo,
      },
    });
  }

  async getJornadasHoy(usuarioId: number): Promise<RegistroJornada[]> {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    return this.prisma.registroJornada.findMany({
      where: {
        usuarioId,
        timestamp: {
          gte: todayStart,
          lte: todayEnd,
        },
      },
      orderBy: { timestamp: 'asc' },
    });
  }
}
