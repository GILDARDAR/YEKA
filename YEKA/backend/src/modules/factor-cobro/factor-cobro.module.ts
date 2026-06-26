import { Module } from '@nestjs/common';
import { FactorCobroController } from './factor-cobro.controller';
import { FactorCobroService } from './factor-cobro.service';

@Module({
  controllers: [FactorCobroController],
  providers: [FactorCobroService],
})
export class FactorCobroModule {}
