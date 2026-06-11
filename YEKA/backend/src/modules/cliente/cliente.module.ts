import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { ClienteFacade } from './cliente.facade';
import { ClienteDAO } from './cliente.dao';

@Module({
  imports: [PrismaModule],
  controllers: [ClienteController],
  providers: [ClienteDAO, ClienteFacade, ClienteService], // Wait, "ClientService" or "ClienteService"? Typo check! Let's use ClienteService.
  exports: [ClienteService, ClienteFacade, ClienteDAO],
})
export class ClienteModule {}
