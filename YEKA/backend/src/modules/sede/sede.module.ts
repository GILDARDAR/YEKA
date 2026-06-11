import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { SedeController } from './sede.controller';
import { SedeService } from './sede.service';
import { SedeFacade } from './sede.facade';
import { SedeDAO } from './sede.dao';

@Module({
  imports: [PrismaModule],
  controllers: [SedeController],
  providers: [SedeDAO, SedeFacade, SedeService],
  exports: [SedeService, SedeFacade, SedeDAO],
})
export class SedeModule {}
