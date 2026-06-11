import { Module, forwardRef } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { SedeModule } from '../sede/sede.module';
import { ClienteModule } from '../cliente/cliente.module';
import { FacturaController } from './factura.controller';
import { FacturaService } from './factura.service';
import { FacturaFacade } from './factura.facade';
import { FacturaDAO } from './factura.dao';

@Module({
  imports: [
    PrismaModule,
    SedeModule,
    forwardRef(() => ClienteModule),
  ],
  controllers: [FacturaController],
  providers: [FacturaDAO, FacturaFacade, FacturaService],
  exports: [FacturaService, FacturaFacade, FacturaDAO],
})
export class FacturaModule {}
