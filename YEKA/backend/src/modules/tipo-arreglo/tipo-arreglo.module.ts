import { Module } from '@nestjs/common';
import { TipoArregloService } from './tipo-arreglo.service';
import { TipoArregloController } from './tipo-arreglo.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TipoArregloController],
  providers: [TipoArregloService],
})
export class TipoArregloModule {}
