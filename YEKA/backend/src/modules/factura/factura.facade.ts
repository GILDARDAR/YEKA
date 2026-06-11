import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { FacturaDAO } from './factura.dao';
import { CreateFacturaDto, AddAbonoDto, FacturaResponseDto } from './factura.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { SedeFacade } from '../sede/sede.facade';
import { ClienteFacade } from '../cliente/cliente.facade';
import { Factura, Abono, EstadoPago, MetodoPago, AccionAuditoria } from '../../../generated/prisma/client';

function toResponseDto(factura: Factura & { abonos?: Abono[]; cliente?: any; prendas?: any[] }): FacturaResponseDto {
  return {
    id: factura.id,
    numero: factura.numero,
    clienteId: factura.clienteId,
    usuarioCreadorId: factura.usuarioCreadorId,
    sedeId: factura.sedeId,
    subtotal: factura.subtotal.toNumber(),
    impuestosJson: factura.impuestosJson as Record<string, any> | null,
    total: factura.total.toNumber(),
    estadoPago: factura.estadoPago,
    notas: factura.notas,
    createdAt: factura.createdAt,
    updatedAt: factura.updatedAt,
    abonos: factura.abonos?.map((a) => ({
      id: a.id,
      facturaId: a.facturaId,
      monto: a.monto.toNumber(),
      metodoPago: a.metodoPago,
      notas: a.notas,
      fecha: a.fecha,
    })),
    cliente: factura.cliente,
    prendas: factura.prendas,
  };
}

@Injectable()
export class FacturaFacade {
  constructor(
    private readonly facturaDAO: FacturaDAO,
    private readonly prismaService: PrismaService,
    private readonly SedeFacade: SedeFacade,
    @Inject(forwardRef(() => ClienteFacade))
    private readonly clienteFacade: ClienteFacade,
  ) {}

  async getFacturas(sedeId?: number, estadoPago?: EstadoPago): Promise<FacturaResponseDto[]> {
    const facturas = await this.facturaDAO.findAll(sedeId, estadoPago);
    return facturas.map((f) => toResponseDto(f));
  }

  async getFacturaById(id: number): Promise<FacturaResponseDto> {
    const factura = await this.facturaDAO.findById(id);
    if (!factura) {
      throw new NotFoundException(`Factura con id ${id} no encontrada`);
    }
    return toResponseDto(factura);
  }

  async createFactura(dto: CreateFacturaDto, usuarioId: number): Promise<FacturaResponseDto> {
    const sede = await this.SedeFacade.getSedeById(dto.sedeId);
    const year = new Date().getFullYear();
    const codigoSede = sede.codigoSede;

    // Find latest invoice for this Sede and Year
    const latestFactura = await this.prismaService.factura.findFirst({
      where: {
        numero: {
          startsWith: `${codigoSede}-${year}-`,
        },
      },
      orderBy: {
        numero: 'desc',
      },
    });

    let seq = 1;
    if (latestFactura) {
      const parts = latestFactura.numero.split('-');
      const lastSeq = parseInt(parts[parts.length - 1], 10);
      if (!isNaN(lastSeq)) {
        seq = lastSeq + 1;
      }
    }

    const numero = `${codigoSede}-${year}-${String(seq).padStart(5, '0')}`;

    const factura = await this.facturaDAO.create({
      numero,
      clienteId: dto.clienteId,
      usuarioCreadorId: usuarioId,
      sedeId: dto.sedeId,
      notas: dto.notas,
    });

    // Write audit log
    await this.prismaService.auditLog.create({
      data: {
        usuarioId,
        accion: AccionAuditoria.CREACION,
        entidadAfectada: 'Factura',
        entidadId: factura.id,
        valorNuevo: factura as any,
      },
    });

    return toResponseDto(factura);
  }

  async addAbono(facturaId: number, dto: AddAbonoDto, usuarioId: number): Promise<FacturaResponseDto> {
    const factura = await this.facturaDAO.findById(facturaId);
    if (!factura) {
      throw new NotFoundException(`Factura con id ${facturaId} no encontrada`);
    }

    if (factura.estadoPago === EstadoPago.ANULADO) {
      throw new BadRequestException('No se puede registrar un abono en una factura anulada');
    }

    const abonos = await this.facturaDAO.getAbonos(facturaId);
    const totalAbonado = abonos.reduce((sum, item) => sum + item.monto.toNumber(), 0);
    const totalFactura = factura.total.toNumber();

    if (totalAbonado + dto.monto > totalFactura + 0.001) {
      throw new BadRequestException(
        `El monto del abono (${dto.monto}) supera el saldo pendiente (${totalFactura - totalAbonado})`,
      );
    }

    const valorAnterior = { ...factura };

    // Add abono
    await this.facturaDAO.addAbono(facturaId, dto);

    // Calculate new status
    const nuevoTotalAbonado = totalAbonado + dto.monto;
    let nuevoEstado: EstadoPago = EstadoPago.PENDIENTE;

    if (Math.abs(nuevoTotalAbonado - totalFactura) < 0.01) {
      nuevoEstado = EstadoPago.PAGADO;
    } else if (nuevoTotalAbonado > 0) {
      nuevoEstado = EstadoPago.PARCIAL;
    }

    const updatedFactura = await this.facturaDAO.update(facturaId, {
      estadoPago: nuevoEstado,
    });

    // Write audit log
    await this.prismaService.auditLog.create({
      data: {
        usuarioId,
        accion: AccionAuditoria.ABONO,
        entidadAfectada: 'Factura',
        entidadId: facturaId,
        valorAnterior: valorAnterior as any,
        valorNuevo: updatedFactura as any,
      },
    });

    // If paid and has customer, recalculate customer premium level
    if (nuevoEstado === EstadoPago.PAGADO && factura.clienteId) {
      await this.clienteFacade.recalcularNivelPremium(factura.clienteId);
    }

    const freshFactura = await this.facturaDAO.findById(facturaId);
    return toResponseDto(freshFactura!);
  }

  async anularFactura(facturaId: number, usuarioId: number): Promise<FacturaResponseDto> {
    const factura = await this.facturaDAO.findById(facturaId);
    if (!factura) {
      throw new NotFoundException(`Factura con id ${facturaId} no encontrada`);
    }

    if (factura.estadoPago === EstadoPago.ANULADO) {
      throw new BadRequestException('La factura ya está anulada');
    }

    const valorAnterior = { ...factura };

    const updated = await this.facturaDAO.update(facturaId, {
      estadoPago: EstadoPago.ANULADO,
    });

    // Write audit log
    await this.prismaService.auditLog.create({
      data: {
        usuarioId,
        accion: AccionAuditoria.ANULACION,
        entidadAfectada: 'Factura',
        entidadId: facturaId,
        valorAnterior: valorAnterior as any,
        valorNuevo: updated as any,
      },
    });

    // If has customer, recalculate customer premium level
    if (factura.clienteId) {
      await this.clienteFacade.recalcularNivelPremium(factura.clienteId);
    }

    return toResponseDto(updated);
  }

  async recalcularFactura(facturaId: number): Promise<FacturaResponseDto> {
    const updated = await this.facturaDAO.recalcularTotales(facturaId);
    const freshFactura = await this.facturaDAO.findById(facturaId);
    return toResponseDto(freshFactura!);
  }
}
