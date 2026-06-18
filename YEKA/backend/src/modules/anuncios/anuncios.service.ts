import { Injectable } from '@nestjs/common';
import { AnunciosFacade } from './anuncios.facade';
import { CreateAnuncioDto, ResponderAnuncioDto } from './anuncios.dto';

@Injectable()
export class AnunciosService {
  constructor(private readonly facade: AnunciosFacade) {}

  async createAnuncio(adminId: number, dto: CreateAnuncioDto) {
    return this.facade.createAnuncio(adminId, dto);
  }

  async getPendientes(sedeId: number, usuarioId: number) {
    return this.facade.getPendientes(sedeId, usuarioId);
  }

  async responderAnuncio(anuncioId: number, usuarioId: number, dto: ResponderAnuncioDto) {
    return this.facade.responderAnuncio(anuncioId, usuarioId, dto);
  }

  async getHistorial(search?: string) {
    return this.facade.getHistorial(search);
  }
}
