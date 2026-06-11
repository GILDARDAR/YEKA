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
import { SedeService } from './sede.service';
import { CreateSedeDto, UpdateSedeDto, SedeResponseDto, CapacidadResponseDto } from './sede.dto';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Rol } from '../../../generated/prisma/client';

@Controller('sedes')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SedeController {
  constructor(private readonly SedeService: SedeService) {}

  @Get()
  async getSedes(): Promise<SedeResponseDto[]> {
    return this.SedeService.getSedes();
  }

  @Get(':id')
  async getSedeById(@Param('id', ParseIntPipe) id: number): Promise<SedeResponseDto> {
    return this.SedeService.getSedeById(id);
  }

  @Post()
  @Roles(Rol.ADMIN)
  async createSede(@Body() dto: CreateSedeDto): Promise<SedeResponseDto> {
    return this.SedeService.createSede(dto);
  }

  @Patch(':id')
  @Roles(Rol.ADMIN)
  async updateSede(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateSedeDto,
  ): Promise<SedeResponseDto> {
    return this.SedeService.updateSede(id, dto);
  }

  @Delete(':id')
  @Roles(Rol.ADMIN)
  async deleteSede(@Param('id', ParseIntPipe) id: number): Promise<SedeResponseDto> {
    return this.SedeService.deleteSede(id);
  }

  @Get(':id/capacidad')
  async getCapacidad(
    @Param('id', ParseIntPipe) id: number,
    @Query('fecha') fechaQuery?: string,
  ): Promise<CapacidadResponseDto> {
    const fecha = fechaQuery ? new Date(fechaQuery) : new Date();
    return this.SedeService.getCapacidadDisponible(id, fecha);
  }
}
