import { CatalogoServicioDAO } from './catalogo-servicio.dao';
import { CreateCatalogoServicioDto, UpdateCatalogoServicioDto, CatalogoServicioResponseDto } from './catalogo-servicio.dto';
export declare class CatalogoServicioFacade {
    private readonly dao;
    constructor(dao: CatalogoServicioDAO);
    getServicios(tipoPrendaId?: number): Promise<CatalogoServicioResponseDto[]>;
    getServicioById(id: number): Promise<CatalogoServicioResponseDto>;
    createServicio(dto: CreateCatalogoServicioDto): Promise<CatalogoServicioResponseDto>;
    updateServicio(id: number, dto: UpdateCatalogoServicioDto): Promise<CatalogoServicioResponseDto>;
    deleteServicio(id: number): Promise<CatalogoServicioResponseDto>;
}
