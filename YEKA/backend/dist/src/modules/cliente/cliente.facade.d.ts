import { ClienteDAO } from './cliente.dao';
import { CreateClienteDto, UpdateClienteDto, ClienteResponseDto } from './cliente.dto';
export declare class ClienteFacade {
    private readonly clienteDAO;
    constructor(clienteDAO: ClienteDAO);
    getClientes(sedeId?: number): Promise<ClienteResponseDto[]>;
    createCliente(dto: CreateClienteDto): Promise<ClienteResponseDto>;
    updateCliente(id: number, dto: UpdateClienteDto): Promise<ClienteResponseDto>;
    getClienteById(id: number): Promise<ClienteResponseDto>;
    deleteCliente(id: number): Promise<ClienteResponseDto>;
    buscarClientes(q: string): Promise<ClienteResponseDto[]>;
    recalcularNivelPremium(clienteId: number): Promise<number>;
}
