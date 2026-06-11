"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteFacade = void 0;
const common_1 = require("@nestjs/common");
const cliente_dao_1 = require("./cliente.dao");
function toResponseDto(cliente, facturasCount) {
    return {
        id: cliente.id,
        sedeOrigenId: cliente.sedeOrigenId,
        nombre: cliente.nombre,
        dni: cliente.dni ?? null,
        celular: cliente.celular ?? null,
        email: cliente.email ?? null,
        nivelPremium: cliente.nivelPremium,
        tallasMedidas: cliente.tallasMedidas ?? null,
        preferenciasHistorial: cliente.preferenciasHistorial ?? null,
        activo: cliente.activo,
        createdAt: cliente.createdAt,
        updatedAt: cliente.updatedAt,
        ...(facturasCount !== undefined ? { facturasCount } : {}),
    };
}
let ClienteFacade = class ClienteFacade {
    clienteDAO;
    constructor(clienteDAO) {
        this.clienteDAO = clienteDAO;
    }
    async getClientes(sedeId) {
        const clientes = await this.clienteDAO.findAll(sedeId);
        return clientes.map((c) => toResponseDto(c));
    }
    async createCliente(dto) {
        if (dto.dni) {
            const existingDni = await this.clienteDAO.findByDni(dto.dni);
            if (existingDni) {
                throw new common_1.ConflictException(`Ya existe un cliente con el DNI ${dto.dni}`);
            }
        }
        if (dto.celular) {
            const existingCelular = await this.clienteDAO.findByCelular(dto.celular);
            if (existingCelular) {
                throw new common_1.ConflictException(`Ya existe un cliente con el celular ${dto.celular}`);
            }
        }
        const cliente = await this.clienteDAO.create({
            sedeOrigenId: dto.sedeOrigenId,
            nombre: dto.nombre,
            dni: dto.dni || undefined,
            celular: dto.celular || undefined,
            email: dto.email || undefined,
            tallasMedidas: dto.tallasMedidas || null,
            preferenciasHistorial: dto.preferenciasHistorial || null,
        });
        return toResponseDto(cliente);
    }
    async updateCliente(id, dto) {
        const cliente = await this.clienteDAO.findById(id);
        if (!cliente) {
            throw new common_1.NotFoundException(`Cliente con id ${id} no encontrado`);
        }
        if (dto.dni && dto.dni !== cliente.dni) {
            const existingDni = await this.clienteDAO.findByDni(dto.dni);
            if (existingDni) {
                throw new common_1.ConflictException(`Ya existe un cliente con el DNI ${dto.dni}`);
            }
        }
        if (dto.celular && dto.celular !== cliente.celular) {
            const existingCelular = await this.clienteDAO.findByCelular(dto.celular);
            if (existingCelular) {
                throw new common_1.ConflictException(`Ya existe un cliente con el celular ${dto.celular}`);
            }
        }
        const updated = await this.clienteDAO.update(id, dto);
        return toResponseDto(updated);
    }
    async getClienteById(id) {
        const cliente = await this.clienteDAO.findById(id);
        if (!cliente) {
            throw new common_1.NotFoundException(`Cliente con id ${id} no encontrado`);
        }
        const count = await this.clienteDAO.getFacturaCount(id);
        return toResponseDto(cliente, count);
    }
    async deleteCliente(id) {
        const cliente = await this.clienteDAO.findById(id);
        if (!cliente) {
            throw new common_1.NotFoundException(`Cliente con id ${id} no encontrado`);
        }
        const deleted = await this.clienteDAO.softDelete(id);
        return toResponseDto(deleted);
    }
    async buscarClientes(q) {
        const clientes = await this.clienteDAO.search(q);
        return clientes.map((c) => toResponseDto(c));
    }
    async recalcularNivelPremium(clienteId) {
        const cliente = await this.clienteDAO.findById(clienteId);
        if (!cliente) {
            throw new common_1.NotFoundException(`Cliente con id ${clienteId} no encontrado`);
        }
        const facturasPagadas = await this.clienteDAO.getFacturaCount(clienteId);
        let nuevoNivel = 1;
        if (facturasPagadas >= 21) {
            nuevoNivel = 5;
        }
        else if (facturasPagadas >= 11) {
            nuevoNivel = 4;
        }
        else if (facturasPagadas >= 6) {
            nuevoNivel = 3;
        }
        else if (facturasPagadas >= 3) {
            nuevoNivel = 2;
        }
        else {
            nuevoNivel = 1;
        }
        if (cliente.nivelPremium !== nuevoNivel) {
            await this.clienteDAO.update(clienteId, { nivelPremium: nuevoNivel });
        }
        return nuevoNivel;
    }
};
exports.ClienteFacade = ClienteFacade;
exports.ClienteFacade = ClienteFacade = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cliente_dao_1.ClienteDAO])
], ClienteFacade);
//# sourceMappingURL=cliente.facade.js.map