import { Module } from '@nestjs/common';
import { TipoUrgenciaController } from './tipo-urgencia.controller';
import { TipoUrgenciaService } from './tipo-urgencia.service';

@Module({
  controllers: [TipoUrgenciaController],
  providers: [TipoUrgenciaService],
})
export class TipoUrgenciaModule {}
