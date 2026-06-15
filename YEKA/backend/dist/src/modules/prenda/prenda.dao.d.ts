import { PrismaService } from '../../prisma/prisma.service';
import { Prenda, PrendaServicio, EstadoPrenda, TipoExpress, Prisma } from '../../../generated/prisma/client';
export declare class PrendaDAO {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(filters?: {
        estadoActual?: EstadoPrenda;
        usuarioTallerId?: number;
        facturaId?: number;
    }): Promise<Prenda[]>;
    findById(id: number): Promise<(Prenda & {
        servicios: (PrendaServicio & {
            servicio: any;
        })[];
    }) | null>;
    findByQr(codigoQR: string): Promise<Prenda | null>;
    create(data: {
        facturaId: number;
        tipoPrendaId: number;
        talla: string;
        color: string;
        marca?: string;
        esLujo?: boolean;
        notas?: string;
        codigoQR: string;
    }): Promise<Prenda>;
    update(id: number, data: Partial<Prenda>): Promise<Prenda>;
    delete(id: number): Promise<Prenda>;
    asignarServicio(data: {
        prendaId: number;
        servicioId: number;
        medidaEntregada?: number;
        tipoExpress: TipoExpress;
        precioFinal: Prisma.Decimal | number;
        observaciones?: string;
    }): Promise<PrendaServicio>;
    getServiciosByPrenda(prendaId: number): Promise<PrendaServicio[]>;
    deletePrendaServicio(id: number): Promise<PrendaServicio>;
}
