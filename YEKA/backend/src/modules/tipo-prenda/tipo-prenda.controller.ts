import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { TipoPrendaService } from './tipo-prenda.service';
import { CreateTipoPrendaDto, UpdateTipoPrendaDto } from './tipo-prenda.dto';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Rol } from '../../../generated/prisma/client';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('tipos-prenda')
export class TipoPrendaController {
  constructor(private readonly tipoPrendaService: TipoPrendaService) {}

  @Roles(Rol.ADMIN, Rol.RECEPCION, Rol.TALLER)
  @Get()
  findAll() {
    return this.tipoPrendaService.findAll();
  }

  @Roles(Rol.ADMIN, Rol.RECEPCION, Rol.TALLER)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tipoPrendaService.findOne(id);
  }

  @Roles(Rol.ADMIN)
  @Post()
  create(@Body() dto: CreateTipoPrendaDto) {
    return this.tipoPrendaService.create(dto);
  }

  @Roles(Rol.ADMIN)
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateTipoPrendaDto) {
    return this.tipoPrendaService.update(id, dto);
  }

  @Roles(Rol.ADMIN)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tipoPrendaService.remove(id);
  }
}
