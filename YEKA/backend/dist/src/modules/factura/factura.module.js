"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../../prisma/prisma.module");
const sede_module_1 = require("../sede/sede.module");
const cliente_module_1 = require("../cliente/cliente.module");
const factura_controller_1 = require("./factura.controller");
const factura_service_1 = require("./factura.service");
const factura_facade_1 = require("./factura.facade");
const factura_dao_1 = require("./factura.dao");
let FacturaModule = class FacturaModule {
};
exports.FacturaModule = FacturaModule;
exports.FacturaModule = FacturaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            sede_module_1.SedeModule,
            (0, common_1.forwardRef)(() => cliente_module_1.ClienteModule),
        ],
        controllers: [factura_controller_1.FacturaController],
        providers: [factura_dao_1.FacturaDAO, factura_facade_1.FacturaFacade, factura_service_1.FacturaService],
        exports: [factura_service_1.FacturaService, factura_facade_1.FacturaFacade, factura_dao_1.FacturaDAO],
    })
], FacturaModule);
//# sourceMappingURL=factura.module.js.map