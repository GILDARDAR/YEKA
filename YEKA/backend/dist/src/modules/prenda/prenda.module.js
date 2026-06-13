"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrendaModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../../prisma/prisma.module");
const factura_module_1 = require("../factura/factura.module");
const configuracion_module_1 = require("../configuracion/configuracion.module");
const prenda_controller_1 = require("./prenda.controller");
const prenda_service_1 = require("./prenda.service");
const prenda_facade_1 = require("./prenda.facade");
const prenda_dao_1 = require("./prenda.dao");
let PrendaModule = class PrendaModule {
};
exports.PrendaModule = PrendaModule;
exports.PrendaModule = PrendaModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, factura_module_1.FacturaModule, configuracion_module_1.ConfiguracionModule],
        controllers: [prenda_controller_1.PrendaController],
        providers: [prenda_dao_1.PrendaDAO, prenda_facade_1.PrendaFacade, prenda_service_1.PrendaService],
        exports: [prenda_service_1.PrendaService, prenda_facade_1.PrendaFacade, prenda_dao_1.PrendaDAO],
    })
], PrendaModule);
//# sourceMappingURL=prenda.module.js.map