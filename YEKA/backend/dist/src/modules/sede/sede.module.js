"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SedeModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../../prisma/prisma.module");
const sede_controller_1 = require("./sede.controller");
const sede_service_1 = require("./sede.service");
const sede_facade_1 = require("./sede.facade");
const sede_dao_1 = require("./sede.dao");
let SedeModule = class SedeModule {
};
exports.SedeModule = SedeModule;
exports.SedeModule = SedeModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [sede_controller_1.SedeController],
        providers: [sede_dao_1.SedeDAO, sede_facade_1.SedeFacade, sede_service_1.SedeService],
        exports: [sede_service_1.SedeService, sede_facade_1.SedeFacade, sede_dao_1.SedeDAO],
    })
], SedeModule);
//# sourceMappingURL=sede.module.js.map