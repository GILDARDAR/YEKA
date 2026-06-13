import { Injectable } from '@nestjs/common';
import { FacturaFacade } from './factura.facade';
import { CreateFacturaDto, AddAbonoDto, FacturaResponseDto, UpdateFacturaDto } from './factura.dto';
import { EstadoPago } from '../../../generated/prisma/client';

@Injectable()
export class FacturaService {
  constructor(private readonly facturaFacade: FacturaFacade) {}

  async getFacturas(sedeId?: number, estadoPago?: EstadoPago): Promise<FacturaResponseDto[]> {
    return this.facturaFacade.getFacturas(sedeId, estadoPago);
  }

  async getFacturaById(id: number): Promise<FacturaResponseDto> {
    return this.facturaFacade.getFacturaById(id);
  }

  async createFactura(dto: CreateFacturaDto, usuarioId: number): Promise<FacturaResponseDto> {
    return this.facturaFacade.createFactura(dto, usuarioId);
  }

  async addAbono(facturaId: number, dto: AddAbonoDto, usuarioId: number): Promise<FacturaResponseDto> {
    return this.facturaFacade.addAbono(facturaId, dto, usuarioId);
  }

  async anularFactura(facturaId: number, usuarioId: number): Promise<FacturaResponseDto> {
    return this.facturaFacade.anularFactura(facturaId, usuarioId);
  }

  async recalcularFactura(facturaId: number): Promise<FacturaResponseDto> {
    return this.facturaFacade.recalcularFactura(facturaId);
  }

  async generatePdf(id: number): Promise<Buffer> {
    return this.facturaFacade.generatePdf(id);
  }
}
