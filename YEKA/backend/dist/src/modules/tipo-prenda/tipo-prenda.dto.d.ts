export declare class CreateTipoPrendaDto {
    nombre: string;
    descripcion?: string;
    activo?: boolean;
    porcentajeDificultad?: number;
    materialesIds?: number[];
}
export declare class UpdateTipoPrendaDto {
    nombre?: string;
    descripcion?: string;
    activo?: boolean;
    porcentajeDificultad?: number;
    materialesIds?: number[];
}
