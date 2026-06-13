import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { PrendaService } from './prenda.service';
import {
  CreatePrendaDto,
  AsignarServicioDto,
  CambiarEstadoDto,
  SubirFotoDto,
  PrendaResponseDto,
  PrendaServicioResponseDto,
} from './prenda.dto';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { EstadoPrenda, Rol } from '../../../generated/prisma/client';

@Controller('prendas')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PrendaController {
  constructor(private readonly prendaService: PrendaService) {}

  @Post()
  async createPrenda(@Body() dto: CreatePrendaDto): Promise<PrendaResponseDto> {
    return this.prendaService.createPrenda(dto);
  }

  @Get()
  async getPrendas(
    @Query('estadoActual') estadoActual?: EstadoPrenda,
    @Query('usuarioTallerId') usuarioTallerIdQuery?: string,
    @Query('facturaId') facturaIdQuery?: string,
  ): Promise<PrendaResponseDto[]> {
    const usuarioTallerId = usuarioTallerIdQuery ? parseInt(usuarioTallerIdQuery, 10) : undefined;
    const facturaId = facturaIdQuery ? parseInt(facturaIdQuery, 10) : undefined;
    return this.prendaService.getPrendas(estadoActual, usuarioTallerId, facturaId);
  }

  @Get(':id')
  async getPrendaById(@Param('id', ParseIntPipe) id: number): Promise<PrendaResponseDto> {
    return this.prendaService.getPrendaById(id);
  }

  @Patch(':id')
  async updatePrenda(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: any,
    @CurrentUser('id') usuarioId: number,
  ): Promise<PrendaResponseDto> {
    return this.prendaService.updatePrenda(id, dto, usuarioId);
  }

  @Post(':id/servicios')
  async asignarServicio(
    @Param('id', ParseIntPipe) prendaId: number,
    @Body() dto: AsignarServicioDto,
    @CurrentUser('id') usuarioId: number,
  ): Promise<PrendaServicioResponseDto> {
    return this.prendaService.asignarServicio(prendaId, dto, usuarioId);
  }

  @Delete(':id/servicios/:servicioId')
  async eliminarServicio(
    @Param('id', ParseIntPipe) prendaId: number,
    @Param('servicioId', ParseIntPipe) servicioId: number,
    @CurrentUser('id') usuarioId: number,
  ): Promise<void> {
    return this.prendaService.eliminarServicio(prendaId, servicioId, usuarioId);
  }

  @Patch(':id/estado')
  async cambiarEstado(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CambiarEstadoDto,
    @CurrentUser('id') usuarioId: number,
  ): Promise<PrendaResponseDto> {
    return this.prendaService.cambiarEstado(id, dto, usuarioId);
  }

  @Patch(':id/express')
  async cambiarTipoExpress(
    @Param('id', ParseIntPipe) id: number,
    @Body('tipoExpress') tipoExpress: any,
    @CurrentUser('id') usuarioId: number,
  ): Promise<PrendaResponseDto> {
    return this.prendaService.cambiarTipoExpress(id, tipoExpress, usuarioId);
  }

  @Patch(':id/foto')
  async subirFoto(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: SubirFotoDto,
    @CurrentUser('id') usuarioId: number,
  ): Promise<PrendaResponseDto> {
    return this.prendaService.subirFoto(id, dto, usuarioId);
  }

  @Delete(':id')
  @Roles(Rol.ADMIN)
  async deletePrenda(
    @Param('id', ParseIntPipe) id: number,
    @CurrentUser('id') usuarioId: number,
  ): Promise<PrendaResponseDto> {
    return this.prendaService.deletePrenda(id, usuarioId);
  }
}
