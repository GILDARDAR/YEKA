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
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto, UpdateUsuarioDto, UsuarioResponseDto, RegistrarJornadaDto } from './usuario.dto';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Rol, RegistroJornada } from '../../../generated/prisma/client';

@Controller('usuarios')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  async getUsuarios(@Query('sedeId') sedeIdQuery?: string): Promise<UsuarioResponseDto[]> {
    const sedeId = sedeIdQuery ? parseInt(sedeIdQuery, 10) : undefined;
    return this.usuarioService.getUsuarios(sedeId);
  }

  @Get(':id')
  async getUsuarioById(@Param('id', ParseIntPipe) id: number): Promise<UsuarioResponseDto> {
    return this.usuarioService.getUsuarioById(id);
  }

  @Post()
  @Roles(Rol.ADMIN)
  async createUsuario(@Body() dto: CreateUsuarioDto): Promise<UsuarioResponseDto> {
    return this.usuarioService.createUsuario(dto);
  }

  @Patch(':id')
  @Roles(Rol.ADMIN)
  async updateUsuario(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUsuarioDto,
  ): Promise<UsuarioResponseDto> {
    return this.usuarioService.updateUsuario(id, dto);
  }

  @Delete(':id')
  @Roles(Rol.ADMIN)
  async deleteUsuario(@Param('id', ParseIntPipe) id: number): Promise<UsuarioResponseDto> {
    return this.usuarioService.deleteUsuario(id);
  }

  @Post(':id/jornada')
  async registrarJornada(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: RegistrarJornadaDto,
  ): Promise<RegistroJornada> {
    return this.usuarioService.registrarJornada(id, dto.tipo);
  }

  @Get('audit/logs')
  @Roles(Rol.ADMIN)
  async getAuditLogs() {
    return this.usuarioService.getAuditLogs();
  }

  @Patch('audit/logs/read-all')
  @Roles(Rol.ADMIN)
  async markAllAuditLogsAsRead() {
    return this.usuarioService.markAllAuditLogsAsRead();
  }

  @Patch('audit/logs/:id/read')
  @Roles(Rol.ADMIN)
  async markAuditLogAsRead(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.markAuditLogAsRead(id);
  }
}
