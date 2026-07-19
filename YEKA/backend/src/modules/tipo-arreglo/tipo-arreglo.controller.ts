import { Controller, UseGuards, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { TipoArregloService } from './tipo-arreglo.service';
import { CreateTipoArregloDto, UpdateTipoArregloDto } from './tipo-arreglo.dto';

@Controller('tipo-arreglo')
@UseGuards(JwtAuthGuard, RolesGuard)
export class TipoArregloController {
  constructor(private readonly tipoArregloService: TipoArregloService) {}

  @Post()
  create(@Body() dto: CreateTipoArregloDto) {
    return this.tipoArregloService.create(dto);
  }

  @Get()
  findAll() {
    return this.tipoArregloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tipoArregloService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateTipoArregloDto) {
    return this.tipoArregloService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tipoArregloService.remove(id);
  }
}
