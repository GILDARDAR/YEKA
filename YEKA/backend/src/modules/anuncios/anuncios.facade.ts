import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { AnunciosDao } from './anuncios.dao';
import { CreateAnuncioDto, ResponderAnuncioDto } from './anuncios.dto';

@Injectable()
export class AnunciosFacade {
  constructor(private readonly dao: AnunciosDao) {}

  async createAnuncio(adminId: number, dto: CreateAnuncioDto) {
    return this.dao.createAnuncio({
      ...dto,
      adminId,
    });
  }

  async getPendientes(sedeId: number, usuarioId: number) {
    const anuncios = await this.dao.getAnunciosBySede(sedeId);
    
    // Filter out announcements that this user has already answered/read
    const pendientes = [];
    for (const anuncio of anuncios) {
      const respuesta = await this.dao.getAnuncioRespuesta(anuncio.id, usuarioId);
      if (!respuesta) {
        pendientes.push(anuncio);
      }
    }
    
    return pendientes;
  }

  async responderAnuncio(anuncioId: number, usuarioId: number, dto: ResponderAnuncioDto) {
    const existe = await this.dao.getAnuncioRespuesta(anuncioId, usuarioId);
    if (existe) {
      throw new BadRequestException('Ya has respondido a este anuncio');
    }
    return this.dao.createAnuncioRespuesta({
      anuncioId,
      usuarioId,
      respuesta: dto.respuesta,
    });
  }

  async getHistorial(search?: string) {
    return this.dao.getHistorial(search);
  }
}
