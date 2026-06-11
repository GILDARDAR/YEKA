export declare class CreateSedeDto {
    codigoSede: string;
    nombre: string;
    direccion?: string;
    capacidadDiariaMax?: number;
}
export declare class UpdateSedeDto {
    codigoSede?: string;
    nombre?: string;
    direccion?: string;
    capacidadDiariaMax?: number;
    activa?: boolean;
}
export declare class SedeResponseDto {
    id: number;
    codigoSede: string;
    nombre: string;
    direccion: string | null;
    capacidadDiariaMax: number | null;
    activa: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare class CapacidadResponseDto {
    sedeId: number;
    fecha: string;
    capacidadDiariaMax: number | null;
    usado: number;
    disponible: number | null;
    porcentaje: number | null;
}
