import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { ClienteDAO } from './cliente.dao';
import { CreateClienteDto, UpdateClienteDto, ClienteResponseDto } from './cliente.dto';
import { Cliente } from '../../../generated/prisma/client';

function toResponseDto(cliente: Cliente, facturasCount?: number): ClienteResponseDto {
  return {
    id: cliente.id,
    sedeOrigenId: cliente.sedeOrigenId,
    nombre: cliente.nombre,
    dni: cliente.dni ?? null,
    celular: cliente.celular ?? null,
    email: cliente.email ?? null,
    nivelPremium: cliente.nivelPremium,
    tallasMedidas: (cliente.tallasMedidas as Record<string, unknown>) ?? null,
    preferenciasHistorial: (cliente.preferenciasHistorial as Record<string, unknown>) ?? null,
    activo: cliente.activo,
    createdAt: cliente.createdAt,
    updatedAt: cliente.updatedAt,
    ...(facturasCount !== undefined ? { facturasCount } : {}),
  };
}

@Injectable()
export class ClienteFacade {
  constructor(private readonly clienteDAO: ClienteDAO) {}

  async getClientes(sedeId?: number): Promise<ClienteResponseDto[]> {
    const clientes = await this.clienteDAO.findAll(sedeId);
    return clientes.map((c) => toResponseDto(c));
  }

  async createCliente(dto: CreateClienteDto): Promise<ClienteResponseDto> {
    if (dto.dni) {
      const existingDni = await this.clienteDAO.findByDni(dto.dni);
      if (existingDni) {
        throw new ConflictException(`Ya existe un cliente con el DNI ${dto.dni}`);
      }
    }

    if (dto.celular) {
      const existingCelular = await this.clienteDAO.findByCelular(dto.celular);
      if (existingCelular) {
        throw new ConflictException(`Ya existe un cliente con el celular ${dto.celular}`);
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

  async updateCliente(id: number, dto: UpdateClienteDto): Promise<ClienteResponseDto> {
    const cliente = await this.clienteDAO.findById(id);
    if (!cliente) {
      throw new NotFoundException(`Cliente con id ${id} no encontrado`);
    }

    if (dto.dni && dto.dni !== cliente.dni) {
      const existingDni = await this.clienteDAO.findByDni(dto.dni);
      if (existingDni) {
        throw new ConflictException(`Ya existe un cliente con el DNI ${dto.dni}`);
      }
    }

    if (dto.celular && dto.celular !== cliente.celular) {
      const existingCelular = await this.clienteDAO.findByCelular(dto.celular);
      if (existingCelular) {
        throw new ConflictException(`Ya existe un cliente con el celular ${dto.celular}`);
      }
    }

    const updated = await this.clienteDAO.update(id, dto);
    return toResponseDto(updated);
  }

  async getClienteById(id: number): Promise<ClienteResponseDto> {
    const cliente = await this.clienteDAO.findById(id);
    if (!cliente) {
      throw new NotFoundException(`Cliente con id ${id} no encontrado`);
    }
    const count = await this.clienteDAO.getFacturaCount(id);
    return toResponseDto(cliente, count);
  }

  async deleteCliente(id: number): Promise<ClienteResponseDto> {
    const cliente = await this.clienteDAO.findById(id);
    if (!cliente) {
      throw new NotFoundException(`Cliente con id ${id} no encontrado`);
    }
    const deleted = await this.clienteDAO.softDelete(id);
    return toResponseDto(deleted);
  }

  async buscarClientes(q: string): Promise<ClienteResponseDto[]> {
    const clientes = await this.clienteDAO.search(q);
    return clientes.map((c) => toResponseDto(c));
  }

  async recalcularNivelPremium(clienteId: number): Promise<number> {
    const cliente = await this.clienteDAO.findById(clienteId);
    if (!cliente) {
      throw new NotFoundException(`Cliente con id ${clienteId} no encontrado`);
    }

    const facturasPagadas = await this.clienteDAO.getFacturaCount(clienteId);
    let nuevoNivel = 1;

    if (facturasPagadas >= 21) {
      nuevoNivel = 5;
    } else if (facturasPagadas >= 11) {
      nuevoNivel = 4;
    } else if (facturasPagadas >= 6) {
      nuevoNivel = 3;
    } else if (facturasPagadas >= 3) {
      nuevoNivel = 2;
    } else {
      nuevoNivel = 1;
    }

    if (cliente.nivelPremium !== nuevoNivel) {
      await this.clienteDAO.update(clienteId, { nivelPremium: nuevoNivel });
    }

    return nuevoNivel;
  }
}
