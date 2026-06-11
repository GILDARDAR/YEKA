import { PrismaService } from '../../prisma/prisma.service';
import { Cliente } from '../../../generated/prisma/client';
export declare class ClienteDAO {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(sedeId?: number): Promise<Cliente[]>;
    findById(id: number): Promise<Cliente | null>;
    search(q: string): Promise<Cliente[]>;
    findByDni(dni: string): Promise<Cliente | null>;
    findByCelular(cel: string): Promise<Cliente | null>;
    create(data: {
        sedeOrigenId: number;
        nombre: string;
        dni?: string;
        celular?: string;
        email?: string;
        tallasMedidas?: any;
        preferenciasHistorial?: any;
    }): Promise<Cliente>;
    update(id: number, data: any): Promise<Cliente>;
    softDelete(id: number): Promise<Cliente>;
    getFacturaCount(clienteId: number): Promise<number>;
}
