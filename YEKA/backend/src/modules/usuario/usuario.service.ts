import { Injectable } from '@nestjs/common';
import { UsuarioFacade } from './usuario.facade';
import { CreateUsuarioDto, UpdateUsuarioDto, UsuarioResponseDto, RegistrarJornadaDto } from './usuario.dto';
import { RegistroJornada, TipoJornada } from '../../../generated/prisma/client';

@Injectable()
export class UsuarioService {
  constructor(private readonly usuarioFacade: UsuarioFacade) {}

  async getUsuarios(sedeId?: number): Promise<UsuarioResponseDto[]> {
    return this.usuarioFacade.getUsuarios(sedeId);
  }

  async getUsuarioById(id: number): Promise<UsuarioResponseDto> {
    return this.usuarioFacade.getUsuarioById(id);
  }

  async createUsuario(dto: CreateUsuarioDto): Promise<UsuarioResponseDto> {
    return this.usuarioFacade.createUsuario(dto);
  }

  async updateUsuario(id: number, dto: UpdateUsuarioDto): Promise<UsuarioResponseDto> {
    return this.usuarioFacade.updateUsuario(id, dto);
  }

  async deleteUsuario(id: number): Promise<UsuarioResponseDto> {
    return this.usuarioFacade.deleteUsuario(id);
  }

  async registrarJornada(usuarioId: number, tipo: TipoJornada): Promise<RegistroJornada> {
    return this.usuarioFacade.registrarJornada(usuarioId, tipo);
  }
}
