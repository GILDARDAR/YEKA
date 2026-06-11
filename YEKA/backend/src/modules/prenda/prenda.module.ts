import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { FacturaModule } from '../factura/factura.module';
import { PrendaController } from './prenda.controller';
import { PrendaService } from './prenda.service';
import { PrendaFacade } from './prenda.facade';
import { PrendaDAO } from './prenda.dao';

@Module({
  imports: [PrismaModule, FacturaModule],
  controllers: [PrendaController],
  providers: [PrendaDAO, PrendaFacade, PrendaService],
  exports: [PrendaService, PrendaFacade, PrendaDAO],
})
export class PrendaModule {}
