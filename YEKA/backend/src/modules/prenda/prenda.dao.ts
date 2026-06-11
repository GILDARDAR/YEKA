import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prenda, PrendaServicio, EstadoPrenda, TipoExpress, Prisma } from '../../../generated/prisma/client';

@Injectable()
export class PrendaDAO {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(filters?: {
    estadoActual?: EstadoPrenda;
    usuarioTallerId?: number;
    facturaId?: number;
  }): Promise<Prenda[]> {
    return this.prisma.prenda.findMany({
      where: {
        ...(filters?.estadoActual ? { estadoActual: filters.estadoActual } : {}),
        ...(filters?.usuarioTallerId ? { usuarioTallerId: filters.usuarioTallerId } : {}),
        ...(filters?.facturaId ? { facturaId: filters.facturaId } : {}),
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: number): Promise<(Prenda & { servicios: (PrendaServicio & { servicio: any })[] }) | null> {
    return this.prisma.prenda.findUnique({
      where: { id },
      include: {
        servicios: {
          include: {
            servicio: true,
          },
        },
      },
    });
  }

  async findByQr(codigoQR: string): Promise<Prenda | null> {
    return this.prisma.prenda.findUnique({
      where: { codigoQR },
    });
  }

  async create(data: {
    facturaId: number;
    tipoPrendaId: number;
    talla: string;
    color: string;
    marca?: string;
    esLujo?: boolean;
    notas?: string;
    codigoQR: string;
  }): Promise<Prenda> {
    return this.prisma.prenda.create({
      data: {
        facturaId: data.facturaId,
        tipoPrendaId: data.tipoPrendaId,
        talla: data.talla,
        color: data.color,
        marca: data.marca || null,
        esLujo: data.esLujo ?? false,
        notas: data.notas || null,
        codigoQR: data.codigoQR,
      },
    });
  }

  async update(id: number, data: Partial<Prenda>): Promise<Prenda> {
    return this.prisma.prenda.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Prenda> {
    return this.prisma.prenda.delete({
      where: { id },
    });
  }

  async asignarServicio(data: {
    prendaId: number;
    servicioId: number;
    medidaEntregada?: number;
    tipoExpress: TipoExpress;
    precioFinal: Prisma.Decimal | number;
  }): Promise<PrendaServicio> {
    return this.prisma.prendaServicio.create({
      data: {
        prendaId: data.prendaId,
        servicioId: data.servicioId,
        medidaEntregada: data.medidaEntregada !== undefined ? new Prisma.Decimal(data.medidaEntregada) : null,
        tipoExpress: data.tipoExpress,
        precioFinal: new Prisma.Decimal(data.precioFinal),
      },
    });
  }

  async getServiciosByPrenda(prendaId: number): Promise<PrendaServicio[]> {
    return this.prisma.prendaServicio.findMany({
      where: { prendaId },
      orderBy: { createdAt: 'asc' },
    });
  }
}
