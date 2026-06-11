import { FacturaFacade } from './factura.facade';
import { CreateFacturaDto, AddAbonoDto, FacturaResponseDto } from './factura.dto';
import { EstadoPago } from '../../../generated/prisma/client';
export declare class FacturaService {
    private readonly facturaFacade;
    constructor(facturaFacade: FacturaFacade);
    getFacturas(sedeId?: number, estadoPago?: EstadoPago): Promise<FacturaResponseDto[]>;
    getFacturaById(id: number): Promise<FacturaResponseDto>;
    createFactura(dto: CreateFacturaDto, usuarioId: number): Promise<FacturaResponseDto>;
    addAbono(facturaId: number, dto: AddAbonoDto, usuarioId: number): Promise<FacturaResponseDto>;
    anularFactura(facturaId: number, usuarioId: number): Promise<FacturaResponseDto>;
    recalcularFactura(facturaId: number): Promise<FacturaResponseDto>;
}
