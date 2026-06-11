import { EstadoPrenda, TipoExpress } from '../../../generated/prisma/client';
export declare class CreatePrendaDto {
    facturaId: number;
    tipoPrendaId: number;
    talla: string;
    color: string;
    esLujo?: boolean;
    marca?: string;
    notas?: string;
}
export declare class UpdatePrendaDto {
    tipoPrendaId?: number;
    talla?: string;
    color?: string;
    esLujo?: boolean;
    marca?: string;
    notas?: string;
}
export declare class AsignarServicioDto {
    servicioId: number;
    medidaEntregada?: number;
    tipoExpress: TipoExpress;
}
export declare class CambiarEstadoDto {
    nuevoEstado: EstadoPrenda;
    usuarioTallerId?: number;
}
export declare class SubirFotoDto {
    fotoUrl: string;
}
export declare class PrendaResponseDto {
    id: number;
    facturaId: number;
    codigoQR: string;
    tipoPrendaId: number;
    talla: string;
    color: string;
    marca: string | null;
    estadoActual: EstadoPrenda;
    fechaCompromiso: Date | null;
    esLujo: boolean;
    fotoUrl: string | null;
    usuarioTallerId: number | null;
    fechaUltimaNotificacion: Date | null;
    notas: string | null;
    createdAt: Date;
    updatedAt: Date;
}
export declare class PrendaServicioResponseDto {
    id: number;
    prendaId: number;
    servicioId: number;
    medidaEntregada: string | null;
    tipoExpress: TipoExpress;
    precioFinal: string;
    createdAt: Date;
}
