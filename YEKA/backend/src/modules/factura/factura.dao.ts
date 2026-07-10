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
      include: { cliente: true, abonos: true },
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
            tipoPrenda: true,
            tipoUrgencia: true,
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

  async getAbonoById(abonoId: number): Promise<Abono | null> {
    return this.prisma.abono.findUnique({
      where: { id: abonoId },
    });
  }

  async updateAbono(
    abonoId: number,
    data: { monto?: number; metodoPago?: MetodoPago; notas?: string },
  ): Promise<Abono> {
    return this.prisma.abono.update({
      where: { id: abonoId },
      data: {
        ...(data.monto !== undefined && { monto: new Prisma.Decimal(data.monto) }),
        ...(data.metodoPago && { metodoPago: data.metodoPago }),
        ...(data.notas !== undefined && { notas: data.notas }),
      },
    });
  }

  async deleteAbono(abonoId: number): Promise<Abono> {
    return this.prisma.abono.delete({
      where: { id: abonoId },
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

    // 3. Calculate taxes (fetch IVA from config or default to 21)
    const confIva = await this.prisma.configuracion.findUnique({
      where: { clave: 'IVA_PORCENTAJE' }
    });
    const ivaPorcentaje = confIva ? parseFloat(confIva.valor) : 21.0;

    // Como el precioFinal de cada servicio ahora es = TotalRedondeado - (TotalRedondeado * iva/100)
    // Matemáticamente: precioFinal = TotalRedondeado * (1 - iva/100)
    // Entonces la suma de todos los totales redondeados es = subtotal / (1 - iva/100)
    const subtotalNum = subtotal.toNumber();
    const factor = 1 - (ivaPorcentaje / 100);
    const totalNum = factor > 0 ? (subtotalNum / factor) : subtotalNum;

    // Redondear a 2 decimales para evitar problemas de precisión en JS
    const totalRedondeado = Math.round(totalNum * 100) / 100;
    const total = new Prisma.Decimal(totalRedondeado);
    
    // El monto del IVA será la diferencia entre el Total de la Factura y el Subtotal de la Factura
    const ivaMonto = new Prisma.Decimal(totalRedondeado - subtotalNum);

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
