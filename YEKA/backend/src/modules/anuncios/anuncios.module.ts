import { Module } from '@nestjs/common';
import { AnunciosController } from './anuncios.controller';
import { AnunciosService } from './anuncios.service';
import { AnunciosFacade } from './anuncios.facade';
import { AnunciosDao } from './anuncios.dao';

@Module({
  controllers: [AnunciosController],
  providers: [AnunciosService, AnunciosFacade, AnunciosDao],
  exports: [AnunciosService],
})
export class AnunciosModule {}
