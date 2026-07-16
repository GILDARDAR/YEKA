import { PrismaService } from '../../prisma/prisma.service';
import { CreateCatalogoServicioDto, UpdateCatalogoServicioDto } from './catalogo-servicio.dto';
export declare class CatalogoServicioDAO {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(categoria?: string): Promise<({
        categoriasFactores: {
            id: number;
            nombre: string;
            activa: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        zonaId: number | null;
        categoria: string;
        tipoEspecifico: string;
        medidaBase: import("@prisma/client-runtime-utils").Decimal;
        tiempoBase: number;
    })[]>;
    findById(id: number): Promise<({
        categoriasFactores: {
            id: number;
            nombre: string;
            activa: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        zonaId: number | null;
        categoria: string;
        tipoEspecifico: string;
        medidaBase: import("@prisma/client-runtime-utils").Decimal;
        tiempoBase: number;
    }) | null>;
    create(data: CreateCatalogoServicioDto): Promise<{
        categoriasFactores: {
            id: number;
            nombre: string;
            activa: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        zonaId: number | null;
        categoria: string;
        tipoEspecifico: string;
        medidaBase: import("@prisma/client-runtime-utils").Decimal;
        tiempoBase: number;
    }>;
    update(id: number, data: UpdateCatalogoServicioDto): Promise<{
        categoriasFactores: {
            id: number;
            nombre: string;
            activa: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        zonaId: number | null;
        categoria: string;
        tipoEspecifico: string;
        medidaBase: import("@prisma/client-runtime-utils").Decimal;
        tiempoBase: number;
    }>;
    softDelete(id: number): Promise<{
        categoriasFactores: {
            id: number;
            nombre: string;
            activa: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        zonaId: number | null;
        categoria: string;
        tipoEspecifico: string;
        medidaBase: import("@prisma/client-runtime-utils").Decimal;
        tiempoBase: number;
    }>;
}
