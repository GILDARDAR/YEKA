import { Module } from '@nestjs/common';
import { TipoPrendaController } from './tipo-prenda.controller';
import { TipoPrendaService } from './tipo-prenda.service';
import { TipoPrendaDao } from './tipo-prenda.dao';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TipoPrendaController],
  providers: [TipoPrendaService, TipoPrendaDao],
  exports: [TipoPrendaService, TipoPrendaDao],
})
export class TipoPrendaModule {}
