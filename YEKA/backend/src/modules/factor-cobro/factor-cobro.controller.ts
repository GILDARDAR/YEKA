import { Controller, Get, Post, Patch, Body, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { FactorCobroService } from './factor-cobro.service';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';

@Controller('factores-cobro')
@UseGuards(JwtAuthGuard, RolesGuard)
export class FactorCobroController {
  constructor(private readonly service: FactorCobroService) {}

  @Get()
  async findAll() {
    return this.service.findAll();
  }

  @Get('categorias')
  async findAllCategorias() {
    return this.service.findAll();
  }

  @Post('categorias')
  async createCategoria(@Body() body: { nombre: string }) {
    return this.service.createCategoria(body);
  }

  @Patch('categorias/:id')
  async updateCategoria(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return this.service.updateCategoria(id, body);
  }

  @Post('factores')
  async createFactor(@Body() body: any) {
    return this.service.createFactor(body);
  }

  @Patch('factores/:id')
  async updateFactor(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return this.service.updateFactor(id, body);
  }
}
