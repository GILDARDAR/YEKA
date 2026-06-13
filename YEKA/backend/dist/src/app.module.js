"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const usuario_module_1 = require("./modules/usuario/usuario.module");
const sede_module_1 = require("./modules/sede/sede.module");
const cliente_module_1 = require("./modules/cliente/cliente.module");
const factura_module_1 = require("./modules/factura/factura.module");
const catalogo_servicio_module_1 = require("./modules/catalogo-servicio/catalogo-servicio.module");
const prenda_module_1 = require("./modules/prenda/prenda.module");
const tipo_prenda_module_1 = require("./modules/tipo-prenda/tipo-prenda.module");
const configuracion_module_1 = require("./modules/configuracion/configuracion.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            usuario_module_1.UsuarioModule,
            sede_module_1.SedeModule,
            cliente_module_1.ClienteModule,
            factura_module_1.FacturaModule,
            catalogo_servicio_module_1.CatalogoServicioModule,
            prenda_module_1.PrendaModule,
            tipo_prenda_module_1.TipoPrendaModule,
            configuracion_module_1.ConfiguracionModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map