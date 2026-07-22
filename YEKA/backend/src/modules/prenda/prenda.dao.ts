import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prenda, PrendaServicio, EstadoPrenda, Prisma } from '../../../generated/prisma/client';

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
      include: {
        factura: true,
        material: true,
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
        material: true,
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
    tipoUrgenciaId?: number;
    porcentajeAtencionAplicado?: Prisma.Decimal | number;
    fechaCompromiso?: Date | string | null;
    materialId?: number;
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
        tipoUrgenciaId: data.tipoUrgenciaId || null,
        porcentajeAtencionAplicado: data.porcentajeAtencionAplicado !== undefined ? new Prisma.Decimal(data.porcentajeAtencionAplicado) : null,
        fechaCompromiso: data.fechaCompromiso || null,
        materialId: data.materialId || null,
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
    tiempoCalculado?: number;
    valorPorTiempo?: Prisma.Decimal | number;
    valorFactoresCobro?: Prisma.Decimal | number;
    precioBruto?: Prisma.Decimal | number;
    precioFinal: Prisma.Decimal | number;
    observaciones?: string;
    detallesCalculo?: any;
    materialId?: number;
    tipoArregloId?: number;
    zonaId?: number;
  }): Promise<PrendaServicio> {
    return this.prisma.prendaServicio.create({
      data: {
        prendaId: data.prendaId,
        servicioId: data.servicioId,
        medidaEntregada: data.medidaEntregada !== undefined ? new Prisma.Decimal(data.medidaEntregada) : null,
        tiempoCalculado: data.tiempoCalculado !== undefined ? data.tiempoCalculado : null,
        valorPorTiempo: data.valorPorTiempo !== undefined ? new Prisma.Decimal(data.valorPorTiempo) : null,
        valorFactoresCobro: data.valorFactoresCobro !== undefined ? new Prisma.Decimal(data.valorFactoresCobro) : null,
        precioBruto: data.precioBruto !== undefined ? new Prisma.Decimal(data.precioBruto) : null,
        precioFinal: new Prisma.Decimal(data.precioFinal),
        observaciones: data.observaciones || null,
        detallesCalculo: data.detallesCalculo ? data.detallesCalculo : Prisma.JsonNull,
        materialId: data.materialId || null,
        tipoArregloId: data.tipoArregloId || null,
        zonaId: data.zonaId || null,
      },
    });
  }

  async getServiciosByPrenda(prendaId: number): Promise<PrendaServicio[]> {
    return this.prisma.prendaServicio.findMany({
      where: { prendaId },
      orderBy: { createdAt: 'asc' },
    });
  }

  async deletePrendaServicio(id: number): Promise<PrendaServicio> {
    return this.prisma.prendaServicio.delete({
      where: { id },
    });
  }
}
