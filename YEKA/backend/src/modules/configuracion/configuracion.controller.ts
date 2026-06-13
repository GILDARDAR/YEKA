import { Controller, Get, Patch, Body, UseGuards } from '@nestjs/common';
import { ConfiguracionService, AppConfig } from './configuracion.service';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Rol } from '../../../generated/prisma/client';

@Controller('configuracion')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ConfiguracionController {
  constructor(private readonly configuracionService: ConfiguracionService) {}

  @Get()
  async getAll(): Promise<AppConfig> {
    return this.configuracionService.getAll();
  }

  @Patch()
  @Roles(Rol.ADMIN)
  async update(@Body() dto: Partial<AppConfig>): Promise<AppConfig> {
    return this.configuracionService.update(dto);
  }
}
