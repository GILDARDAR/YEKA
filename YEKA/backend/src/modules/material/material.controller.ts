import { Controller, UseGuards, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { MaterialService } from './material.service';
import { CreateMaterialDto, UpdateMaterialDto } from './material.dto';

@Controller('material')
@UseGuards(JwtAuthGuard, RolesGuard)
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Post()
  create(@Body() dto: CreateMaterialDto) {
    return this.materialService.create(dto);
  }

  @Get()
  findAll() {
    return this.materialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.materialService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateMaterialDto) {
    return this.materialService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.materialService.remove(id);
  }
}
