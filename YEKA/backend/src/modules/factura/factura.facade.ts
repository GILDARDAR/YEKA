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
import { join } from 'path';

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
    prendas: factura.prendas?.map((p) => ({
      id: p.id,
      facturaId: p.facturaId,
      codigoQR: p.codigoQR,
      tipoPrendaId: p.tipoPrendaId,
      talla: p.talla || '',
      color: p.color || '',
      marca: p.marca || null,
      estadoActual: p.estadoActual,
      fechaCompromiso: p.fechaCompromiso,
      esLujo: p.esLujo,
      fotoUrl: p.fotoUrl,
      usuarioTallerId: p.usuarioTallerId,
      fechaUltimaNotificacion: p.fechaUltimaNotificacion,
      notas: p.notas,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt,
      servicios: p.servicios?.map((s: any) => ({
        id: s.id,
        prendaId: s.prendaId,
        servicioId: s.servicioId,
        medidaEntregada: s.medidaEntregada ? s.medidaEntregada.toString() : null,
        tipoExpress: s.tipoExpress,
        precioFinal: s.precioFinal?.toString() ?? '0',
        observaciones: s.observaciones || null,
        createdAt: s.createdAt,
      })),
    })),
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

  async updateAbono(abonoId: number, dto: any, usuarioId: number): Promise<FacturaResponseDto> {
    const abono = await this.facturaDAO.getAbonoById(abonoId);
    if (!abono) {
      throw new NotFoundException(`Abono con id ${abonoId} no encontrado`);
    }

    const facturaId = abono.facturaId;
    const factura = await this.facturaDAO.findById(facturaId);
    if (!factura) {
      throw new NotFoundException(`Factura con id ${facturaId} no encontrada`);
    }

    if (factura.estadoPago === EstadoPago.ANULADO) {
      throw new BadRequestException('No se puede modificar un abono en una factura anulada');
    }

    const abonos = await this.facturaDAO.getAbonos(facturaId);
    const totalAbonadoActual = abonos.reduce((sum, item) => sum + item.monto.toNumber(), 0);
    const totalFactura = factura.total.toNumber();

    if (dto.monto !== undefined) {
      const nuevoTotalAbonado = totalAbonadoActual - abono.monto.toNumber() + dto.monto;
      if (nuevoTotalAbonado > totalFactura + 0.001) {
        throw new BadRequestException(
          `El monto del abono modificado superaría el saldo total de la factura.`,
        );
      }
    }

    const valorAnterior = { ...factura };
    await this.facturaDAO.updateAbono(abonoId, dto);

    // Recalculate status
    const nuevosAbonos = await this.facturaDAO.getAbonos(facturaId);
    const nuevoTotalAbonado = nuevosAbonos.reduce((sum, item) => sum + item.monto.toNumber(), 0);
    let nuevoEstado: EstadoPago = EstadoPago.PENDIENTE;

    if (Math.abs(nuevoTotalAbonado - totalFactura) < 0.01) {
      nuevoEstado = EstadoPago.PAGADO;
    } else if (nuevoTotalAbonado > 0) {
      nuevoEstado = EstadoPago.PARCIAL;
    }

    const updatedFactura = await this.facturaDAO.update(facturaId, {
      estadoPago: nuevoEstado,
    });

    await this.prismaService.auditLog.create({
      data: {
        usuarioId,
        accion: 'MODIFICACION_ABONO' as any,
        entidadAfectada: 'Factura',
        entidadId: facturaId,
        valorAnterior: valorAnterior as any,
        valorNuevo: updatedFactura as any,
      },
    });

    if (nuevoEstado === EstadoPago.PAGADO && factura.clienteId) {
      await this.clienteFacade.recalcularNivelPremium(factura.clienteId);
    }

    const freshFactura = await this.facturaDAO.findById(facturaId);
    return toResponseDto(freshFactura!);
  }

  async deleteAbono(abonoId: number, usuarioId: number): Promise<FacturaResponseDto> {
    const abono = await this.facturaDAO.getAbonoById(abonoId);
    if (!abono) {
      throw new NotFoundException(`Abono con id ${abonoId} no encontrado`);
    }

    const facturaId = abono.facturaId;
    const factura = await this.facturaDAO.findById(facturaId);
    if (!factura) {
      throw new NotFoundException(`Factura con id ${facturaId} no encontrada`);
    }

    if (factura.estadoPago === EstadoPago.ANULADO) {
      throw new BadRequestException('No se puede eliminar un abono en una factura anulada');
    }

    const valorAnterior = { ...factura };
    await this.facturaDAO.deleteAbono(abonoId);

    // Recalculate status
    const nuevosAbonos = await this.facturaDAO.getAbonos(facturaId);
    const nuevoTotalAbonado = nuevosAbonos.reduce((sum, item) => sum + item.monto.toNumber(), 0);
    let nuevoEstado: EstadoPago = EstadoPago.PENDIENTE;

    if (Math.abs(nuevoTotalAbonado - factura.total.toNumber()) < 0.01) {
      nuevoEstado = EstadoPago.PAGADO;
    } else if (nuevoTotalAbonado > 0) {
      nuevoEstado = EstadoPago.PARCIAL;
    }

    const updatedFactura = await this.facturaDAO.update(facturaId, {
      estadoPago: nuevoEstado,
    });

    await this.prismaService.auditLog.create({
      data: {
        usuarioId,
        accion: 'ELIMINACION_ABONO' as any,
        entidadAfectada: 'Factura',
        entidadId: facturaId,
        valorAnterior: valorAnterior as any,
        valorNuevo: updatedFactura as any,
      },
    });

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

  async generatePdf(id: number): Promise<Buffer> {
    const factura: any = await this.facturaDAO.findById(id);
    if (!factura) {
      throw new NotFoundException(`Factura con id ${id} no encontrada`);
    }

    const sede = await this.prismaService.sede.findUnique({
      where: { id: factura.sedeId },
    });

    const fonts = {
      Roboto: {
        normal: join(process.cwd(), 'node_modules/pdfmake/fonts/Roboto/Roboto-Regular.ttf'),
        bold: join(process.cwd(), 'node_modules/pdfmake/fonts/Roboto/Roboto-Medium.ttf'),
        italic: join(process.cwd(), 'node_modules/pdfmake/fonts/Roboto/Roboto-Italic.ttf'),
        bolditalic: join(process.cwd(), 'node_modules/pdfmake/fonts/Roboto/Roboto-MediumItalic.ttf'),
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const PdfPrinterClass = require('pdfmake/js/Printer').default;
    const printer = new PdfPrinterClass(fonts);

    // Format dates nicely
    const fechaRecepcion = new Date(factura.createdAt).toLocaleString('es-ES', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });

    const clientInfo = factura.cliente ? [
      { text: `Nombre: ${factura.cliente.nombre}`, style: 'body' },
      { text: `DNI/NIF: ${factura.cliente.dni || 'N/A'}`, style: 'body' },
      { text: `Teléfono: ${factura.cliente.celular || 'N/A'}`, style: 'body' },
      { text: `Email: ${factura.cliente.email || 'N/A'}`, style: 'body' },
    ] : [
      { text: 'Cliente: Consumidor Final', style: 'body' }
    ];

    const bodyContent: any[] = [
      // Header section
      {
        columns: [
          {
            text: [
              { text: 'YEKA ERP\n', style: 'businessName' },
              { text: `Sede: ${sede?.nombre || 'General'}\n`, style: 'businessSub' },
              { text: `Dirección: ${sede?.direccion || 'N/A'}\n`, style: 'businessSub' },
            ]
          },
          {
            alignment: 'right',
            text: [
              { text: `FACTURA: ${factura.numero}\n`, style: 'invoiceTitle' },
              { text: `Fecha Recepción: ${fechaRecepcion}\n`, style: 'invoiceSub' },
              { text: `Estado: ${factura.estadoPago}\n`, style: 'invoiceSub' },
            ]
          }
        ]
      },
      { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 1.5, lineColor: '#4f46e5' }], margin: [0, 10, 0, 15] },

      // Client Info Block
      { text: 'INFORMACIÓN DEL CLIENTE', style: 'sectionHeader' },
      {
        background: '#f8fafc',
        padding: [10, 10],
        margin: [0, 5, 0, 15],
        stack: clientInfo
      },

      // Garment details
      { text: 'DETALLE DEL PEDIDO', style: 'sectionHeader', margin: [0, 0, 0, 10] }
    ];

    // Add each garment
    factura.prendas?.forEach((prenda: any, index: number) => {
      const tipo = prenda.tipoPrenda?.nombre || 'Prenda';
      const fechaCompromisoStr = prenda.fechaCompromiso
        ? new Date(prenda.fechaCompromiso).toLocaleDateString('es-ES')
        : 'Sin fecha estimada';

      const servicesRows: any[][] = [
        [
          { text: 'Servicio', style: 'tableHeader' },
          { text: 'Medida (cm)', style: 'tableHeader' },
          { text: 'Prioridad', style: 'tableHeader' },
          { text: 'Precio', style: 'tableHeader', alignment: 'right' }
        ]
      ];

      prenda.servicios?.forEach((s: any) => {
        servicesRows.push([
          { text: `${s.servicio?.categoria || 'Servicio'} — ${s.servicio?.tipoEspecifico || ''}`, style: 'tableBody' },
          { text: s.medidaEntregada ? `${s.medidaEntregada.toString()} cm` : 'N/A', style: 'tableBody' },
          { text: s.tipoExpress, style: 'tableBody' },
          { text: `€${Number(s.precioFinal).toFixed(2)}`, style: 'tableBody', alignment: 'right' }
        ]);
      });

      const totalPrenda = prenda.servicios?.reduce((sum: number, s: any) => sum + Number(s.precioFinal), 0) || 0;

      bodyContent.push({
        keepWithNext: true,
        stack: [
          {
            margin: [0, 10, 0, 5],
            columns: [
              {
                text: [
                  { text: `Prenda ${index + 1}: ${tipo.toUpperCase()}\n`, style: 'prendaTitle' },
                  { text: `Color: ${prenda.color} | Talla: ${prenda.talla}${prenda.marca ? ` | Marca: ${prenda.marca}` : ''}\n`, style: 'prendaDetails' },
                  { text: `QR: ${prenda.codigoQR} | F. Estimada: ${fechaCompromisoStr}`, style: 'prendaDetails' },
                ]
              },
              {
                text: `Total Prenda: €${totalPrenda.toFixed(2)}`,
                style: 'prendaTotal',
                alignment: 'right'
              }
            ]
          },
          {
            table: {
              headerRows: 1,
              widths: ['*', 'auto', 'auto', 'auto'],
              body: servicesRows
            },
            layout: 'lightHorizontalLines',
            margin: [0, 5, 0, 15]
          }
        ]
      });
    });

    // Totals section
    const totalAbonado = factura.abonos?.reduce((sum: number, a: any) => sum + Number(a.monto), 0) || 0;
    const totalRestante = Math.max(0, factura.total.toNumber() - totalAbonado);

    bodyContent.push(
      { canvas: [{ type: 'line', x1: 300, y1: 5, x2: 515, y2: 5, lineWidth: 1, lineColor: '#cbd5e1' }], margin: [0, 10, 0, 10] },
      {
        columns: [
          { text: '' },
          {
            width: 200,
            alignment: 'right',
            stack: [
              {
                columns: [
                  { text: 'Subtotal:', style: 'totalLabel' },
                  { text: `€${factura.subtotal.toNumber().toFixed(2)}`, style: 'totalVal' }
                ]
              },
              {
                columns: [
                  { text: `IVA (${(factura.impuestosJson as any)?.iva || 21}%):`, style: 'totalLabel' },
                  { text: `€${((factura.impuestosJson as any)?.monto || 0).toFixed(2)}`, style: 'totalVal' }
                ]
              },
              {
                columns: [
                  { text: 'Total Factura:', style: 'totalLabelBold' },
                  { text: `€${factura.total.toNumber().toFixed(2)}`, style: 'totalValBold' }
                ],
                margin: [0, 5, 0, 5]
              },
              {
                columns: [
                  { text: 'Total Abonado:', style: 'totalLabel' },
                  { text: `€${totalAbonado.toFixed(2)}`, style: 'totalValSuccess' }
                ]
              },
              {
                columns: [
                  { text: 'Pendiente:', style: 'totalLabelBold' },
                  { text: `€${totalRestante.toFixed(2)}`, style: 'totalValWarning' }
                ],
                margin: [0, 5, 0, 0]
              }
            ]
          }
        ]
      }
    );

    const docDefinition: any = {
      content: bodyContent,
      styles: {
        businessName: { fontSize: 16, bold: true, color: '#4f46e5' },
        businessSub: { fontSize: 9, color: '#64748b' },
        invoiceTitle: { fontSize: 16, bold: true, color: '#1e293b' },
        invoiceSub: { fontSize: 9, color: '#64748b' },
        sectionHeader: { fontSize: 11, bold: true, color: '#4f46e5', letterSpacing: 0.5, margin: [0, 10, 0, 5] },
        body: { fontSize: 10, color: '#334155', margin: [0, 2, 0, 2] },
        prendaTitle: { fontSize: 11, bold: true, color: '#1e293b' },
        prendaDetails: { fontSize: 9, color: '#64748b' },
        prendaTotal: { fontSize: 11, bold: true, color: '#4f46e5' },
        tableHeader: { fontSize: 9, bold: true, color: '#475569', fillColor: '#f1f5f9', margin: [5, 3, 5, 3] },
        tableBody: { fontSize: 9, color: '#334155', margin: [5, 3, 5, 3] },
        totalLabel: { fontSize: 10, color: '#64748b' },
        totalVal: { fontSize: 10, color: '#334155', width: 80 },
        totalLabelBold: { fontSize: 10, bold: true, color: '#1e293b' },
        totalValBold: { fontSize: 12, bold: true, color: '#4f46e5', width: 80 },
        totalValSuccess: { fontSize: 10, bold: true, color: '#10b981', width: 80 },
        totalValWarning: { fontSize: 10, bold: true, color: '#f59e0b', width: 80 }
      },
      defaultStyle: {
        font: 'Roboto'
      }
    };

    const doc = printer.createPdfKitDocument(docDefinition);
    const chunks: any[] = [];
    doc.on('data', (chunk: any) => chunks.push(chunk));
    doc.end();

    return new Promise<Buffer>((resolve, reject) => {
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', (err: any) => reject(err));
    });
  }
}
