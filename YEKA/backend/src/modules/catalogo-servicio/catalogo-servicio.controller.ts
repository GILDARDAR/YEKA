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
import { CatalogoServicioService } from './catalogo-servicio.service';
import {
  CreateCatalogoServicioDto,
  UpdateCatalogoServicioDto,
  CatalogoServicioResponseDto,
} from './catalogo-servicio.dto';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Rol } from '../../../generated/prisma/client';

@Controller('catalogo-servicios')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CatalogoServicioController {
  constructor(private readonly service: CatalogoServicioService) {}

  @Get()
  async getServicios(@Query('categoria') categoria?: string): Promise<CatalogoServicioResponseDto[]> {
    return this.service.getServicios(categoria);
  }

  @Get(':id')
  async getServicioById(@Param('id', ParseIntPipe) id: number): Promise<CatalogoServicioResponseDto> {
    return this.service.getServicioById(id);
  }

  @Post()
  async createServicio(@Body() dto: CreateCatalogoServicioDto): Promise<CatalogoServicioResponseDto> {
    return this.service.createServicio(dto);
  }

  @Patch(':id')
  async updateServicio(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCatalogoServicioDto,
  ): Promise<CatalogoServicioResponseDto> {
    return this.service.updateServicio(id, dto);
  }

  @Delete(':id')
  async deleteServicio(@Param('id', ParseIntPipe) id: number): Promise<CatalogoServicioResponseDto> {
    return this.service.deleteServicio(id);
  }
}
