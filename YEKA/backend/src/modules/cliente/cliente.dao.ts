import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Cliente } from '../../../generated/prisma/client';

@Injectable()
export class ClienteDAO {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(sedeId?: number): Promise<Cliente[]> {
    return this.prisma.cliente.findMany({
      where: {
        activo: true,
        ...(sedeId ? { sedeOrigenId: sedeId } : {}),
      },
      orderBy: { nombre: 'asc' },
    });
  }

  async findById(id: number): Promise<Cliente | null> {
    return this.prisma.cliente.findUnique({
      where: { id },
    });
  }

  async search(q: string): Promise<Cliente[]> {
    return this.prisma.cliente.findMany({
      where: {
        activo: true,
        OR: [
          { nombre: { contains: q, mode: 'insensitive' } },
          { celular: { contains: q, mode: 'insensitive' } },
          { dni: { contains: q, mode: 'insensitive' } },
        ],
      },
      orderBy: { nombre: 'asc' },
      take: 50,
    });
  }

  async findByDni(dni: string): Promise<Cliente | null> {
    return this.prisma.cliente.findFirst({
      where: { dni, activo: true },
    });
  }

  async findByCelular(cel: string): Promise<Cliente | null> {
    return this.prisma.cliente.findFirst({
      where: { celular: cel, activo: true },
    });
  }

  async create(data: {
    sedeOrigenId: number;
    nombre: string;
    dni?: string;
    celular?: string;
    email?: string;
    tallasMedidas?: any;
    preferenciasHistorial?: any;
  }): Promise<Cliente> {
    return this.prisma.cliente.create({
      data: {
        ...data,
        nivelPremium: 1,
        activo: true,
      },
    });
  }

  async update(id: number, data: any): Promise<Cliente> {
    return this.prisma.cliente.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number): Promise<Cliente> {
    return this.prisma.cliente.update({
      where: { id },
      data: { activo: false },
    });
  }

  async getFacturaCount(clienteId: number): Promise<number> {
    // Return count of PAGADO facturas for premium calculation
    return this.prisma.factura.count({
      where: {
        clienteId,
        estadoPago: 'PAGADO',
      },
    });
  }
}
