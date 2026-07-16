import { Module } from '@nestjs/common';
import { ZonaService } from './zona.service';
import { ZonaController } from './zona.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ZonaController],
  providers: [ZonaService],
})
export class ZonaModule {}
