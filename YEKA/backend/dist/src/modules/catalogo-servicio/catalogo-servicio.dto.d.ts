export declare class CreateCatalogoServicioDto {
    nombre?: string;
    tipoPrendaId?: number;
    tipoEspecifico: string;
    medidaBase: number;
    tiempoBase: number;
    categoriasFactoresIds?: number[];
    materialesIds?: number[];
    tiposArregloIds?: number[];
}
export declare class UpdateCatalogoServicioDto {
    nombre?: string;
    tipoPrendaId?: number;
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
    tipoPrendaId?: number;
    tipoPrenda?: any;
    tipoEspecifico: string;
    medidaBase: number;
    tiempoBase: number;
    activo: boolean;
    categoriasFactores: any[];
    materiales?: any[];
    tiposArreglo?: any[];
    createdAt: Date;
    updatedAt: Date;
}
