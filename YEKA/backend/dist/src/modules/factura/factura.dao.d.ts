import { PrismaService } from '../../prisma/prisma.service';
import { Factura, Abono, EstadoPago, MetodoPago } from '../../../generated/prisma/client';
export declare class FacturaDAO {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(sedeId?: number, estadoPago?: EstadoPago): Promise<Factura[]>;
    findById(id: number): Promise<Factura | null>;
    findByNumero(numero: string): Promise<Factura | null>;
    create(data: {
        numero: string;
        clienteId?: number;
        usuarioCreadorId: number;
        sedeId: number;
        notas?: string;
    }): Promise<Factura>;
    update(id: number, data: Partial<Factura>): Promise<Factura>;
    addAbono(facturaId: number, data: {
        monto: number;
        metodoPago: MetodoPago;
        notas?: string;
    }): Promise<Abono>;
    getAbonos(facturaId: number): Promise<Abono[]>;
    recalcularTotales(facturaId: number): Promise<Factura>;
}
