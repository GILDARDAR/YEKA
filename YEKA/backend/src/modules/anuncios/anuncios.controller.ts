import { Controller, Post, Get, Body, Param, Query, UseGuards, ParseIntPipe } from '@nestjs/common';
import { AnunciosService } from './anuncios.service';
import { CreateAnuncioDto, ResponderAnuncioDto } from './anuncios.dto';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Rol } from '../../../generated/prisma/client';

@Controller('anuncios')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AnunciosController {
  constructor(private readonly anunciosService: AnunciosService) {}

  @Post()
  @Roles(Rol.ADMIN)
  async createAnuncio(
    @CurrentUser('id') adminId: number,
    @Body() dto: CreateAnuncioDto,
  ) {
    return this.anunciosService.createAnuncio(adminId, dto);
  }

  @Get('pendientes')
  async getPendientes(
    @CurrentUser('id') usuarioId: number,
    @CurrentUser('sedeId') sedeId: number,
  ) {
    return this.anunciosService.getPendientes(sedeId, usuarioId);
  }

  @Post(':id/responder')
  async responderAnuncio(
    @Param('id', ParseIntPipe) anuncioId: number,
    @CurrentUser('id') usuarioId: number,
    @Body() dto: ResponderAnuncioDto,
  ) {
    return this.anunciosService.responderAnuncio(anuncioId, usuarioId, dto);
  }

  @Get()
  @Roles(Rol.ADMIN)
  async getHistorial(@Query('search') search?: string) {
    return this.anunciosService.getHistorial(search);
  }
}
