import { CatalogoServicioFacade } from './catalogo-servicio.facade';
import { CreateCatalogoServicioDto, UpdateCatalogoServicioDto, CatalogoServicioResponseDto } from './catalogo-servicio.dto';
export declare class CatalogoServicioService {
    private readonly facade;
    constructor(facade: CatalogoServicioFacade);
    getServicios(tipoPrendaId?: number): Promise<CatalogoServicioResponseDto[]>;
    getServicioById(id: number): Promise<CatalogoServicioResponseDto>;
    createServicio(dto: CreateCatalogoServicioDto): Promise<CatalogoServicioResponseDto>;
    updateServicio(id: number, dto: UpdateCatalogoServicioDto): Promise<CatalogoServicioResponseDto>;
    deleteServicio(id: number): Promise<CatalogoServicioResponseDto>;
}
