import { ConfigService } from '@nestjs/config';
import { PrendaDAO } from './prenda.dao';
import { FacturaFacade } from '../factura/factura.facade';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePrendaDto, AsignarServicioDto, CambiarEstadoDto, SubirFotoDto, PrendaResponseDto, PrendaServicioResponseDto } from './prenda.dto';
import { EstadoPrenda } from '../../../generated/prisma/client';
export declare class PrendaFacade {
    private readonly prendaDAO;
    private readonly prismaService;
    private readonly facturaFacade;
    private readonly configService;
    constructor(prendaDAO: PrendaDAO, prismaService: PrismaService, facturaFacade: FacturaFacade, configService: ConfigService);
    createPrenda(dto: CreatePrendaDto): Promise<PrendaResponseDto>;
    getPrendas(filters?: {
        estadoActual?: EstadoPrenda;
        usuarioTallerId?: number;
        facturaId?: number;
    }): Promise<PrendaResponseDto[]>;
    getPrendaById(id: number): Promise<PrendaResponseDto>;
    updatePrenda(id: number, dto: any, usuarioId: number): Promise<PrendaResponseDto>;
    asignarServicio(prendaId: number, dto: AsignarServicioDto, usuarioId: number): Promise<PrendaServicioResponseDto>;
    cambiarEstado(id: number, dto: CambiarEstadoDto, usuarioId: number): Promise<PrendaResponseDto>;
    subirFoto(id: number, dto: SubirFotoDto, usuarioId: number): Promise<PrendaResponseDto>;
    deletePrenda(id: number, usuarioId: number): Promise<PrendaResponseDto>;
}
