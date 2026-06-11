"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogoServicioModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../../prisma/prisma.module");
const catalogo_servicio_controller_1 = require("./catalogo-servicio.controller");
const catalogo_servicio_service_1 = require("./catalogo-servicio.service");
const catalogo_servicio_facade_1 = require("./catalogo-servicio.facade");
const catalogo_servicio_dao_1 = require("./catalogo-servicio.dao");
let CatalogoServicioModule = class CatalogoServicioModule {
};
exports.CatalogoServicioModule = CatalogoServicioModule;
exports.CatalogoServicioModule = CatalogoServicioModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [catalogo_servicio_controller_1.CatalogoServicioController],
        providers: [catalogo_servicio_dao_1.CatalogoServicioDAO, catalogo_servicio_facade_1.CatalogoServicioFacade, catalogo_servicio_service_1.CatalogoServicioService],
        exports: [catalogo_servicio_service_1.CatalogoServicioService, catalogo_servicio_facade_1.CatalogoServicioFacade, catalogo_servicio_dao_1.CatalogoServicioDAO],
    })
], CatalogoServicioModule);
//# sourceMappingURL=catalogo-servicio.module.js.map