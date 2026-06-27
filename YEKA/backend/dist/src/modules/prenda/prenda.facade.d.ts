import { ConfigService } from '@nestjs/config';
import { PrendaDAO } from './prenda.dao';
import { FacturaFacade } from '../factura/factura.facade';
import { PrismaService } from '../../prisma/prisma.service';
import { ConfiguracionService } from '../configuracion/configuracion.service';
import { CreatePrendaDto, AsignarServicioDto, CambiarEstadoDto, SubirFotoDto, PrendaResponseDto, PrendaServicioResponseDto } from './prenda.dto';
import { EstadoPrenda } from '../../../generated/prisma/client';
export declare class PrendaFacade {
    private readonly prendaDAO;
    private readonly prismaService;
    private readonly facturaFacade;
    private readonly configService;
    private readonly configuracionService;
    private readonly logger;
    constructor(prendaDAO: PrendaDAO, prismaService: PrismaService, facturaFacade: FacturaFacade, configService: ConfigService, configuracionService: ConfiguracionService);
    createPrenda(dto: CreatePrendaDto): Promise<PrendaResponseDto>;
    getPrendas(filters?: {
        estadoActual?: EstadoPrenda;
        usuarioTallerId?: number;
        facturaId?: number;
    }): Promise<PrendaResponseDto[]>;
    getPrendaById(id: number): Promise<PrendaResponseDto & {
        servicios: any[];
    }>;
    updatePrenda(id: number, dto: any, usuarioId: number): Promise<PrendaResponseDto>;
    private getValorHoraGlobal;
    private recalcularPreciosPrenda;
    private calcularPreciosDeServicio;
    calcularFechaCompromiso(tiempoNuevasPrendas?: number): Promise<Date>;
    asignarServicio(prendaId: number, dto: AsignarServicioDto, usuarioId: number): Promise<PrendaServicioResponseDto>;
    eliminarServicio(prendaId: number, prendaServicioId: number, usuarioId: number): Promise<void>;
    cambiarEstado(id: number, dto: CambiarEstadoDto, usuarioId: number): Promise<PrendaResponseDto>;
    subirFoto(id: number, dto: SubirFotoDto, usuarioId: number): Promise<PrendaResponseDto>;
    deletePrenda(id: number, usuarioId: number): Promise<PrendaResponseDto>;
}
