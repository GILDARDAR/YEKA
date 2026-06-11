import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { CatalogoServicioController } from './catalogo-servicio.controller';
import { CatalogoServicioService } from './catalogo-servicio.service';
import { CatalogoServicioFacade } from './catalogo-servicio.facade';
import { CatalogoServicioDAO } from './catalogo-servicio.dao';

@Module({
  imports: [PrismaModule],
  controllers: [CatalogoServicioController],
  providers: [CatalogoServicioDAO, CatalogoServicioFacade, CatalogoServicioService],
  exports: [CatalogoServicioService, CatalogoServicioFacade, CatalogoServicioDAO],
})
export class CatalogoServicioModule {}
