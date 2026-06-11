import { Injectable } from '@nestjs/common';
import { ClienteFacade } from './cliente.facade';
import { CreateClienteDto, UpdateClienteDto, ClienteResponseDto } from './cliente.dto';

@Injectable()
export class ClienteService {
  constructor(private readonly clienteFacade: ClienteFacade) {}

  async getClientes(sedeId?: number): Promise<ClienteResponseDto[]> {
    return this.clienteFacade.getClientes(sedeId);
  }

  async createCliente(dto: CreateClienteDto): Promise<ClienteResponseDto> {
    return this.clienteFacade.createCliente(dto);
  }

  async updateCliente(id: number, dto: UpdateClienteDto): Promise<ClienteResponseDto> {
    return this.clienteFacade.updateCliente(id, dto);
  }

  async getClienteById(id: number): Promise<ClienteResponseDto> {
    return this.clienteFacade.getClienteById(id);
  }

  async deleteCliente(id: number): Promise<ClienteResponseDto> {
    return this.clienteFacade.deleteCliente(id);
  }

  async buscarClientes(q: string): Promise<ClienteResponseDto[]> {
    return this.clienteFacade.buscarClientes(q);
  }

  async recalcularNivelPremium(clienteId: number): Promise<number> {
    return this.clienteFacade.recalcularNivelPremium(clienteId);
  }
}
