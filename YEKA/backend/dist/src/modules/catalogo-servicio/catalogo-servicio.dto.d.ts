export declare class PrecioServicioDto {
    tipoPrendaId: number;
    medidaBase: number;
    precioBase: number;
    medidaExtra: number;
    precioExtra: number;
}
export declare class CreateCatalogoServicioDto {
    categoria: string;
    tipoEspecifico: string;
    pesoPuntos: number;
    preciosPorPrenda: PrecioServicioDto[];
}
export declare class UpdateCatalogoServicioDto {
    categoria?: string;
    tipoEspecifico?: string;
    pesoPuntos?: number;
    activo?: boolean;
    preciosPorPrenda?: PrecioServicioDto[];
}
export declare class CatalogoServicioResponseDto {
    id: number;
    categoria: string;
    tipoEspecifico: string;
    pesoPuntos: number;
    activo: boolean;
    preciosPorPrenda: any[];
    createdAt: Date;
    updatedAt: Date;
}
