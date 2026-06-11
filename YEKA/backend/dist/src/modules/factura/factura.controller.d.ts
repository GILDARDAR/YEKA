import { FacturaService } from './factura.service';
import { CreateFacturaDto, AddAbonoDto, FacturaResponseDto } from './factura.dto';
import { EstadoPago } from '../../../generated/prisma/client';
export declare class FacturaController {
    private readonly facturaService;
    constructor(facturaService: FacturaService);
    getFacturas(sedeIdQuery?: string, estadoPago?: EstadoPago): Promise<FacturaResponseDto[]>;
    getFacturaById(id: number): Promise<FacturaResponseDto>;
    createFactura(dto: CreateFacturaDto, usuarioId: number): Promise<FacturaResponseDto>;
    anularFactura(id: number, usuarioId: number): Promise<FacturaResponseDto>;
    addAbono(id: number, dto: AddAbonoDto, usuarioId: number): Promise<FacturaResponseDto>;
}
