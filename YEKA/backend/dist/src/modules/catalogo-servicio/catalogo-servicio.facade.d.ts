import { CatalogoServicioDAO } from './catalogo-servicio.dao';
import { CreateCatalogoServicioDto, UpdateCatalogoServicioDto } from './catalogo-servicio.dto';
export declare class CatalogoServicioFacade {
    private readonly dao;
    constructor(dao: CatalogoServicioDAO);
    getServicios(categoria?: string): Promise<{
        id: any;
        categoria: any;
        tipoEspecifico: any;
        pesoPuntos: any;
        activo: any;
        preciosPorPrenda: any;
        createdAt: any;
        updatedAt: any;
    }[]>;
    getServicioById(id: number): Promise<{
        id: any;
        categoria: any;
        tipoEspecifico: any;
        pesoPuntos: any;
        activo: any;
        preciosPorPrenda: any;
        createdAt: any;
        updatedAt: any;
    }>;
    createServicio(dto: CreateCatalogoServicioDto): Promise<{
        id: any;
        categoria: any;
        tipoEspecifico: any;
        pesoPuntos: any;
        activo: any;
        preciosPorPrenda: any;
        createdAt: any;
        updatedAt: any;
    }>;
    updateServicio(id: number, dto: UpdateCatalogoServicioDto): Promise<{
        id: any;
        categoria: any;
        tipoEspecifico: any;
        pesoPuntos: any;
        activo: any;
        preciosPorPrenda: any;
        createdAt: any;
        updatedAt: any;
    }>;
    deleteServicio(id: number): Promise<{
        id: any;
        categoria: any;
        tipoEspecifico: any;
        pesoPuntos: any;
        activo: any;
        preciosPorPrenda: any;
        createdAt: any;
        updatedAt: any;
    }>;
}
