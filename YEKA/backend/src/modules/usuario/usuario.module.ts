import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { UsuarioFacade } from './usuario.facade';
import { UsuarioDAO } from './usuario.dao';

@Module({
  imports: [PrismaModule],
  controllers: [UsuarioController],
  providers: [UsuarioDAO, UsuarioFacade, UsuarioService],
  exports: [UsuarioService, UsuarioFacade, UsuarioDAO],
})
export class UsuarioModule {}
