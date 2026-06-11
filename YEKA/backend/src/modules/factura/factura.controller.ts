import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { FacturaService } from './factura.service';
import { CreateFacturaDto, AddAbonoDto, FacturaResponseDto } from './factura.dto';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { EstadoPago } from '../../../generated/prisma/client';

@Controller('facturas')
@UseGuards(JwtAuthGuard, RolesGuard)
export class FacturaController {
  constructor(private readonly facturaService: FacturaService) {}

  @Get()
  async getFacturas(
    @Query('sedeId') sedeIdQuery?: string,
    @Query('estadoPago') estadoPago?: EstadoPago,
  ): Promise<FacturaResponseDto[]> {
    const sedeId = sedeIdQuery ? parseInt(sedeIdQuery, 10) : undefined;
    return this.facturaService.getFacturas(sedeId, estadoPago);
  }

  @Get(':id')
  async getFacturaById(@Param('id', ParseIntPipe) id: number): Promise<FacturaResponseDto> {
    return this.facturaService.getFacturaById(id);
  }

  @Post()
  async createFactura(
    @Body() dto: CreateFacturaDto,
    @CurrentUser('sub') usuarioId: number,
  ): Promise<FacturaResponseDto> {
    return this.facturaService.createFactura(dto, usuarioId);
  }

  @Patch(':id/anular')
  async anularFactura(
    @Param('id', ParseIntPipe) id: number,
    @CurrentUser('sub') usuarioId: number,
  ): Promise<FacturaResponseDto> {
    return this.facturaService.anularFactura(id, usuarioId);
  }

  @Post(':id/abonos')
  async addAbono(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: AddAbonoDto,
    @CurrentUser('sub') usuarioId: number,
  ): Promise<FacturaResponseDto> {
    return this.facturaService.addAbono(id, dto, usuarioId);
  }
}
