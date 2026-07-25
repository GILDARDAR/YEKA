import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
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
import { TipoUrgenciaModule } from './modules/tipo-urgencia/tipo-urgencia.module';
import { FactorCobroModule } from './modules/factor-cobro/factor-cobro.module';
import { MaterialModule } from './modules/material/material.module';
import { TipoArregloModule } from './modules/tipo-arreglo/tipo-arreglo.module';
import { ZonaModule } from './modules/zona/zona.module';
import { UploadModule } from './modules/upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'uploads'),
      serveRoot: '/uploads',
      serveStaticOptions: { index: false },
    }),
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
    TipoUrgenciaModule,
    FactorCobroModule,
    MaterialModule,
    TipoArregloModule,
    ZonaModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
