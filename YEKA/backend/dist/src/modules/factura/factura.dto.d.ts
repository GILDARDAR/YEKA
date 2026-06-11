import { EstadoPago, MetodoPago } from '../../../generated/prisma/client';
export declare class CreateFacturaDto {
    clienteId?: number;
    sedeId: number;
    notas?: string;
}
export declare class AddAbonoDto {
    monto: number;
    metodoPago: MetodoPago;
    notas?: string;
}
export declare class UpdateFacturaDto {
    notas?: string;
}
export declare class AbonoResponseDto {
    id: number;
    facturaId: number;
    monto: number;
    metodoPago: MetodoPago;
    notas: string | null;
    fecha: Date;
}
export declare class FacturaResponseDto {
    id: number;
    numero: string;
    clienteId: number | null;
    usuarioCreadorId: number;
    sedeId: number;
    subtotal: number;
    impuestosJson: Record<string, any> | null;
    total: number;
    estadoPago: EstadoPago;
    notas: string | null;
    createdAt: Date;
    updatedAt: Date;
    abonos?: AbonoResponseDto[];
    cliente?: any;
    prendas?: any[];
}
