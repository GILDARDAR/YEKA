import { Controller, UseGuards, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { TipoArregloService } from './tipo-arreglo.service';
import { CreateTipoArregloDto } from './dto/create-tipo-arreglo.dto';
import { UpdateTipoArregloDto } from './dto/update-tipo-arreglo.dto';

@Controller('tipo-arreglo')
@UseGuards(JwtAuthGuard, RolesGuard)
export class TipoArregloController {
  constructor(private readonly tipoArregloService: TipoArregloService) {}

  @Post()
  create(@Body() createTipoArregloDto: CreateTipoArregloDto) {
    return this.tipoArregloService.create(createTipoArregloDto);
  }

  @Get()
  findAll() {
    return this.tipoArregloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoArregloService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoArregloDto: UpdateTipoArregloDto) {
    return this.tipoArregloService.update(+id, updateTipoArregloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoArregloService.remove(+id);
  }
}
