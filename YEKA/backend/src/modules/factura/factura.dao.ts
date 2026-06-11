import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Factura, Abono, EstadoPago, MetodoPago, Prisma } from '../../../generated/prisma/client';

@Injectable()
export class FacturaDAO {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(sedeId?: number, estadoPago?: EstadoPago): Promise<Factura[]> {
    return this.prisma.factura.findMany({
      where: {
        ...(sedeId ? { sedeId } : {}),
        ...(estadoPago ? { estadoPago } : {}),
      },
      orderBy: { createdAt: 'desc' },
      include: { cliente: true },
    });
  }

  async findById(id: number): Promise<Factura | null> {
    return this.prisma.factura.findUnique({
      where: { id },
      include: {
        cliente: true,
        abonos: true,
        prendas: {
          include: {
            servicios: {
              include: {
                servicio: true,
              },
            },
          },
        },
      },
    });
  }

  async findByNumero(numero: string): Promise<Factura | null> {
    return this.prisma.factura.findUnique({
      where: { numero },
    });
  }

  async create(data: {
    numero: string;
    clienteId?: number;
    usuarioCreadorId: number;
    sedeId: number;
    notas?: string;
  }): Promise<Factura> {
    return this.prisma.factura.create({
      data: {
        ...data,
        subtotal: 0,
        total: 0,
        estadoPago: EstadoPago.PENDIENTE,
        impuestosJson: { iva: 21, monto: 0 },
      },
    });
  }

  async update(id: number, data: Partial<Factura>): Promise<Factura> {
    return this.prisma.factura.update({
      where: { id },
      data: data as any,
    });
  }

  async addAbono(
    facturaId: number,
    data: {
      monto: number;
      metodoPago: MetodoPago;
      notas?: string;
    },
  ): Promise<Abono> {
    return this.prisma.abono.create({
      data: {
        facturaId,
        monto: new Prisma.Decimal(data.monto),
        metodoPago: data.metodoPago,
        notas: data.notas || null,
      },
    });
  }

  async getAbonos(facturaId: number): Promise<Abono[]> {
    return this.prisma.abono.findMany({
      where: { facturaId },
      orderBy: { fecha: 'asc' },
    });
  }

  /**
   * Recalculates subtotal and total based on the sum of precioFinal
   * in all PrendaServicio records associated with all Prendas in this Factura.
   */
  async recalcularTotales(facturaId: number): Promise<Factura> {
    // 1. Get all PrendaServicio records for all garments in this invoice
    const asignaciones = await this.prisma.prendaServicio.findMany({
      where: {
        prenda: {
          facturaId,
        },
      },
    });

    // 2. Sum the final prices
    const subtotal = asignaciones.reduce(
      (sum, item) => sum.add(item.precioFinal),
      new Prisma.Decimal(0),
    );

    // 3. Calculate taxes (21% IVA is default)
    const ivaPorcentaje = 21;
    // subtotal = total sin iva, total = subtotal * 1.21? Or total is the sum and subtotal is base?
    // Let's assume total = subtotal (sum of services) and base is subtotal / 1.21.
    // Or let's assume subtotal is base (sum of services) and total is subtotal + iva.
    // Let's go with: subtotal is sum of services (base), total = subtotal * 1.21.
    const ivaMonto = subtotal.mul(ivaPorcentaje).div(100);
    const total = subtotal.add(ivaMonto);

    const impuestosJson = {
      iva: ivaPorcentaje,
      monto: ivaMonto.toNumber(),
    };

    // 4. Update the invoice in DB
    return this.prisma.factura.update({
      where: { id: facturaId },
      data: {
        subtotal,
        total,
        impuestosJson: impuestosJson as any,
      },
    });
  }
}
