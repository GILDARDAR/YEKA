export declare class CreateCatalogoServicioDto {
    nombre?: string;
    categoria: string;
    tipoEspecifico: string;
    medidaBase: number;
    tiempoBase: number;
    categoriasFactoresIds?: number[];
    materialesIds?: number[];
    tiposArregloIds?: number[];
}
export declare class UpdateCatalogoServicioDto {
    nombre?: string;
    categoria?: string;
    tipoEspecifico?: string;
    medidaBase?: number;
    tiempoBase?: number;
    activo?: boolean;
    categoriasFactoresIds?: number[];
    materialesIds?: number[];
    tiposArregloIds?: number[];
}
export declare class CatalogoServicioResponseDto {
    id: number;
    nombre: string;
    categoria: string;
    tipoEspecifico: string;
    medidaBase: number;
    tiempoBase: number;
    activo: boolean;
    categoriasFactores: any[];
    createdAt: Date;
    updatedAt: Date;
}
