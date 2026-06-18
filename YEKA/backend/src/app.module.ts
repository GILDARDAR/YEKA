import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { SedeModule } from './modules/sede/sede.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { FacturaModule } from './modules/factura/factura.module';
import { CatalogoServicioModule } from './modules/catalogo-servicio/catalogo-servicio.module';
import { PrendaModule } from './modules/prenda/prenda.module';
import { TipoPrendaModule } from './modules/tipo-prenda/tipo-prenda.module';
import { ConfiguracionModule } from './modules/configuracion/configuracion.module';
import { AnunciosModule } from './modules/anuncios/anuncios.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsuarioModule,
    SedeModule,
    ClienteModule,
    FacturaModule,
    CatalogoServicioModule,
    PrendaModule,
    TipoPrendaModule,
    ConfiguracionModule,
    AnunciosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
