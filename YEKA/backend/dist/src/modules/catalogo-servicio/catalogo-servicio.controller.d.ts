import { CatalogoServicioService } from './catalogo-servicio.service';
import { CreateCatalogoServicioDto, UpdateCatalogoServicioDto, CatalogoServicioResponseDto } from './catalogo-servicio.dto';
export declare class CatalogoServicioController {
    private readonly service;
    constructor(service: CatalogoServicioService);
    getServicios(categoria?: string): Promise<CatalogoServicioResponseDto[]>;
    getServicioById(id: number): Promise<CatalogoServicioResponseDto>;
    createServicio(dto: CreateCatalogoServicioDto): Promise<CatalogoServicioResponseDto>;
    updateServicio(id: number, dto: UpdateCatalogoServicioDto): Promise<CatalogoServicioResponseDto>;
    deleteServicio(id: number): Promise<CatalogoServicioResponseDto>;
}
