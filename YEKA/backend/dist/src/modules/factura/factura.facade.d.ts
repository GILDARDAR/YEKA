import { FacturaDAO } from './factura.dao';
import { CreateFacturaDto, AddAbonoDto, FacturaResponseDto } from './factura.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { SedeFacade } from '../sede/sede.facade';
import { ClienteFacade } from '../cliente/cliente.facade';
import { EstadoPago } from '../../../generated/prisma/client';
export declare class FacturaFacade {
    private readonly facturaDAO;
    private readonly prismaService;
    private readonly SedeFacade;
    private readonly clienteFacade;
    constructor(facturaDAO: FacturaDAO, prismaService: PrismaService, SedeFacade: SedeFacade, clienteFacade: ClienteFacade);
    getFacturas(sedeId?: number, estadoPago?: EstadoPago): Promise<FacturaResponseDto[]>;
    getFacturaById(id: number): Promise<FacturaResponseDto>;
    createFactura(dto: CreateFacturaDto, usuarioId: number): Promise<FacturaResponseDto>;
    addAbono(facturaId: number, dto: AddAbonoDto, usuarioId: number): Promise<FacturaResponseDto>;
    updateAbono(abonoId: number, dto: any, usuarioId: number): Promise<FacturaResponseDto>;
    deleteAbono(abonoId: number, usuarioId: number): Promise<FacturaResponseDto>;
    anularFactura(facturaId: number, usuarioId: number): Promise<FacturaResponseDto>;
    recalcularFactura(facturaId: number): Promise<FacturaResponseDto>;
    generatePdf(id: number): Promise<Buffer>;
}
