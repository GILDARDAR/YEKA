import { EstadoPrenda } from '../../../generated/prisma/client';
export declare class CreatePrendaDto {
    facturaId: number;
    tipoPrendaId: number;
    talla: string;
    color: string;
    esLujo?: boolean;
    marca?: string;
    notas?: string;
    tipoUrgenciaId?: number;
}
export declare class UpdatePrendaDto {
    tipoPrendaId?: number;
    talla?: string;
    color?: string;
    esLujo?: boolean;
    marca?: string;
    notas?: string;
    tipoUrgenciaId?: number;
}
export declare class AsignarServicioDto {
    servicioId: number;
    medidaEntregada?: number;
    observaciones?: string;
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
    tipoUrgenciaId: number | null;
    tipoUrgencia?: any;
    porcentajeAtencionAplicado?: string | null;
    factura?: any;
}
export declare class PrendaServicioResponseDto {
    id: number;
    prendaId: number;
    servicioId: number;
    medidaEntregada: string | null;
    tiempoCalculado: number | null;
    valorPorTiempo: string | null;
    valorFactoresCobro: string | null;
    precioBruto: string | null;
    precioFinal: string;
    observaciones: string | null;
    detallesCalculo?: any;
    createdAt: Date;
}
