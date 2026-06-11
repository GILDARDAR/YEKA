import { PrismaService } from '../../prisma/prisma.service';
import { CreateCatalogoServicioDto, UpdateCatalogoServicioDto } from './catalogo-servicio.dto';
export declare class CatalogoServicioDAO {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(categoria?: string): Promise<({
        preciosServicios: {
            id: number;
            activo: boolean;
            tipoPrendaId: number;
            medidaBase: import("@prisma/client-runtime-utils").Decimal;
            precioBase: import("@prisma/client-runtime-utils").Decimal;
            medidaExtra: import("@prisma/client-runtime-utils").Decimal;
            precioExtra: import("@prisma/client-runtime-utils").Decimal;
            catalogoServicioId: number;
        }[];
    } & {
        id: number;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoria: string;
        tipoEspecifico: string;
        pesoPuntos: number;
    })[]>;
    findById(id: number): Promise<({
        preciosServicios: {
            id: number;
            activo: boolean;
            tipoPrendaId: number;
            medidaBase: import("@prisma/client-runtime-utils").Decimal;
            precioBase: import("@prisma/client-runtime-utils").Decimal;
            medidaExtra: import("@prisma/client-runtime-utils").Decimal;
            precioExtra: import("@prisma/client-runtime-utils").Decimal;
            catalogoServicioId: number;
        }[];
    } & {
        id: number;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoria: string;
        tipoEspecifico: string;
        pesoPuntos: number;
    }) | null>;
    create(data: CreateCatalogoServicioDto): Promise<{
        preciosServicios: {
            id: number;
            activo: boolean;
            tipoPrendaId: number;
            medidaBase: import("@prisma/client-runtime-utils").Decimal;
            precioBase: import("@prisma/client-runtime-utils").Decimal;
            medidaExtra: import("@prisma/client-runtime-utils").Decimal;
            precioExtra: import("@prisma/client-runtime-utils").Decimal;
            catalogoServicioId: number;
        }[];
    } & {
        id: number;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoria: string;
        tipoEspecifico: string;
        pesoPuntos: number;
    }>;
    update(id: number, data: UpdateCatalogoServicioDto): Promise<{
        preciosServicios: {
            id: number;
            activo: boolean;
            tipoPrendaId: number;
            medidaBase: import("@prisma/client-runtime-utils").Decimal;
            precioBase: import("@prisma/client-runtime-utils").Decimal;
            medidaExtra: import("@prisma/client-runtime-utils").Decimal;
            precioExtra: import("@prisma/client-runtime-utils").Decimal;
            catalogoServicioId: number;
        }[];
    } & {
        id: number;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoria: string;
        tipoEspecifico: string;
        pesoPuntos: number;
    }>;
    softDelete(id: number): Promise<{
        preciosServicios: {
            id: number;
            activo: boolean;
            tipoPrendaId: number;
            medidaBase: import("@prisma/client-runtime-utils").Decimal;
            precioBase: import("@prisma/client-runtime-utils").Decimal;
            medidaExtra: import("@prisma/client-runtime-utils").Decimal;
            precioExtra: import("@prisma/client-runtime-utils").Decimal;
            catalogoServicioId: number;
        }[];
    } & {
        id: number;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoria: string;
        tipoEspecifico: string;
        pesoPuntos: number;
    }>;
}
