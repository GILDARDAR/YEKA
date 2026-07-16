import { Controller, UseGuards, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { ZonaService } from './zona.service';
import { CreateZonaDto } from './dto/create-zona.dto';
import { UpdateZonaDto } from './dto/update-zona.dto';

@Controller('zona')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ZonaController {
  constructor(private readonly zonaService: ZonaService) {}

  @Post()
  create(@Body() createZonaDto: CreateZonaDto) {
    return this.zonaService.create(createZonaDto);
  }

  @Get()
  findAll() {
    return this.zonaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zonaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateZonaDto: UpdateZonaDto) {
    return this.zonaService.update(+id, updateZonaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zonaService.remove(+id);
  }
}
