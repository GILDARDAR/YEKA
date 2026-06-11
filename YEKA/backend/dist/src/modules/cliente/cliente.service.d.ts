import { ClienteFacade } from './cliente.facade';
import { CreateClienteDto, UpdateClienteDto, ClienteResponseDto } from './cliente.dto';
export declare class ClienteService {
    private readonly clienteFacade;
    constructor(clienteFacade: ClienteFacade);
    getClientes(sedeId?: number): Promise<ClienteResponseDto[]>;
    createCliente(dto: CreateClienteDto): Promise<ClienteResponseDto>;
    updateCliente(id: number, dto: UpdateClienteDto): Promise<ClienteResponseDto>;
    getClienteById(id: number): Promise<ClienteResponseDto>;
    deleteCliente(id: number): Promise<ClienteResponseDto>;
    buscarClientes(q: string): Promise<ClienteResponseDto[]>;
    recalcularNivelPremium(clienteId: number): Promise<number>;
}
