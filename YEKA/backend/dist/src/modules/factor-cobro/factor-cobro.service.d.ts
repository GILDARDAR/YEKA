import { PrismaService } from '../../prisma/prisma.service';
import { TipoFactor } from '../../../generated/prisma/client';
export declare class FactorCobroService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        factores: {
            id: number;
            nombre: string;
            createdAt: Date;
            updatedAt: Date;
            activo: boolean;
            tipo: TipoFactor;
            valor: import("@prisma/client-runtime-utils").Decimal;
            categoriaId: number;
            fechaInicio: Date | null;
            fechaFin: Date | null;
        }[];
    } & {
        id: number;
        nombre: string;
        activa: boolean;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    createCategoria(data: {
        nombre: string;
    }): Promise<{
        id: number;
        nombre: string;
        activa: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateCategoria(id: number, data: {
        nombre?: string;
        activa?: boolean;
    }): Promise<{
        id: number;
        nombre: string;
        activa: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createFactor(data: {
        categoriaId: number;
        nombre: string;
        valor: number;
        tipo: TipoFactor;
    }): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        tipo: TipoFactor;
        valor: import("@prisma/client-runtime-utils").Decimal;
        categoriaId: number;
        fechaInicio: Date | null;
        fechaFin: Date | null;
    }>;
    updateFactor(id: number, data: {
        nombre?: string;
        valor?: number;
        tipo?: TipoFactor;
        activo?: boolean;
    }): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        tipo: TipoFactor;
        valor: import("@prisma/client-runtime-utils").Decimal;
        categoriaId: number;
        fechaInicio: Date | null;
        fechaFin: Date | null;
    }>;
}
