import { PrendaFacade } from './prenda.facade';
import { CreatePrendaDto, AsignarServicioDto, CambiarEstadoDto, SubirFotoDto, PrendaResponseDto, PrendaServicioResponseDto } from './prenda.dto';
import { EstadoPrenda } from '../../../generated/prisma/client';
export declare class PrendaService {
    private readonly prendaFacade;
    constructor(prendaFacade: PrendaFacade);
    createPrenda(dto: CreatePrendaDto): Promise<PrendaResponseDto>;
    getPrendas(estadoActual?: EstadoPrenda, usuarioTallerId?: number, facturaId?: number): Promise<PrendaResponseDto[]>;
    getPrendaById(id: number): Promise<PrendaResponseDto>;
    updatePrenda(id: number, dto: any, usuarioId: number): Promise<PrendaResponseDto>;
    asignarServicio(prendaId: number, dto: AsignarServicioDto, usuarioId: number): Promise<PrendaServicioResponseDto>;
    eliminarServicio(prendaId: number, prendaServicioId: number, usuarioId: number): Promise<void>;
    cambiarEstado(id: number, dto: CambiarEstadoDto, usuarioId: number): Promise<PrendaResponseDto>;
    cambiarTipoExpress(id: number, tipoExpress: any, usuarioId: number): Promise<PrendaResponseDto>;
    subirFoto(id: number, dto: SubirFotoDto, usuarioId: number): Promise<PrendaResponseDto>;
    deletePrenda(id: number, usuarioId: number): Promise<PrendaResponseDto>;
}
