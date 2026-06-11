import { ClienteService } from './cliente.service';
import { CreateClienteDto, UpdateClienteDto, ClienteResponseDto } from './cliente.dto';
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    getClientes(q?: string, sedeIdQuery?: string): Promise<ClienteResponseDto[]>;
    getClienteById(id: number): Promise<ClienteResponseDto>;
    createCliente(dto: CreateClienteDto): Promise<ClienteResponseDto>;
    updateCliente(id: number, dto: UpdateClienteDto): Promise<ClienteResponseDto>;
    deleteCliente(id: number): Promise<ClienteResponseDto>;
}
