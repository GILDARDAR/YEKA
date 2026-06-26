import { PrendaService } from './prenda.service';
import { CreatePrendaDto, AsignarServicioDto, CambiarEstadoDto, SubirFotoDto, PrendaResponseDto, PrendaServicioResponseDto } from './prenda.dto';
import { EstadoPrenda } from '../../../generated/prisma/client';
export declare class PrendaController {
    private readonly prendaService;
    constructor(prendaService: PrendaService);
    createPrenda(dto: CreatePrendaDto): Promise<PrendaResponseDto>;
    getPrendas(estadoActual?: EstadoPrenda, usuarioTallerIdQuery?: string, facturaIdQuery?: string): Promise<PrendaResponseDto[]>;
    getPrendaById(id: number): Promise<PrendaResponseDto>;
    updatePrenda(id: number, dto: any, usuarioId: number): Promise<PrendaResponseDto>;
    asignarServicio(prendaId: number, dto: AsignarServicioDto, usuarioId: number): Promise<PrendaServicioResponseDto>;
    eliminarServicio(prendaId: number, servicioId: number, usuarioId: number): Promise<void>;
    cambiarEstado(id: number, dto: CambiarEstadoDto, usuarioId: number): Promise<PrendaResponseDto>;
    subirFoto(id: number, dto: SubirFotoDto, usuarioId: number): Promise<PrendaResponseDto>;
    deletePrenda(id: number, usuarioId: number): Promise<PrendaResponseDto>;
}
