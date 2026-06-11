"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoPrendaModule = void 0;
const common_1 = require("@nestjs/common");
const tipo_prenda_controller_1 = require("./tipo-prenda.controller");
const tipo_prenda_service_1 = require("./tipo-prenda.service");
const tipo_prenda_dao_1 = require("./tipo-prenda.dao");
const prisma_module_1 = require("../../prisma/prisma.module");
let TipoPrendaModule = class TipoPrendaModule {
};
exports.TipoPrendaModule = TipoPrendaModule;
exports.TipoPrendaModule = TipoPrendaModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [tipo_prenda_controller_1.TipoPrendaController],
        providers: [tipo_prenda_service_1.TipoPrendaService, tipo_prenda_dao_1.TipoPrendaDao],
        exports: [tipo_prenda_service_1.TipoPrendaService, tipo_prenda_dao_1.TipoPrendaDao],
    })
], TipoPrendaModule);
//# sourceMappingURL=tipo-prenda.module.js.map