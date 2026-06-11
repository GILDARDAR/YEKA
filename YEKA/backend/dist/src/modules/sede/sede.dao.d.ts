import { PrismaService } from '../../prisma/prisma.service';
import { Sede } from '../../../generated/prisma/client';
export declare class SedeDAO {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Sede[]>;
    findById(id: number): Promise<Sede | null>;
    findByCodigo(codigo: string): Promise<Sede | null>;
    create(data: {
        codigoSede: string;
        nombre: string;
        direccion?: string;
        capacidadDiariaMax?: number;
    }): Promise<Sede>;
    update(id: number, data: {
        codigoSede?: string;
        nombre?: string;
        direccion?: string;
        capacidadDiariaMax?: number;
        activa?: boolean;
    }): Promise<Sede>;
    softDelete(id: number): Promise<Sede>;
    getUsadoEnFecha(sedeId: number, startOfDay: Date, endOfDay: Date): Promise<number>;
}
