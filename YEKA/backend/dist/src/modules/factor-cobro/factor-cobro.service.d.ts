import { PrismaService } from '../../prisma/prisma.service';
import { TipoFactor } from '../../../generated/prisma/client';
export declare class FactorCobroService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        factores: {
            id: number;
            valor: import("@prisma/client-runtime-utils").Decimal;
            updatedAt: Date;
            nombre: string;
            createdAt: Date;
            activo: boolean;
            tipo: TipoFactor;
            categoriaId: number;
            fechaInicio: Date | null;
            fechaFin: Date | null;
        }[];
    } & {
        id: number;
        updatedAt: Date;
        nombre: string;
        activa: boolean;
        createdAt: Date;
    })[]>;
    createCategoria(data: {
        nombre: string;
    }): Promise<{
        id: number;
        updatedAt: Date;
        nombre: string;
        activa: boolean;
        createdAt: Date;
    }>;
    updateCategoria(id: number, data: {
        nombre?: string;
        activa?: boolean;
    }): Promise<{
        id: number;
        updatedAt: Date;
        nombre: string;
        activa: boolean;
        createdAt: Date;
    }>;
    createFactor(data: {
        categoriaId: number;
        nombre: string;
        valor: number;
        tipo: TipoFactor;
    }): Promise<{
        id: number;
        valor: import("@prisma/client-runtime-utils").Decimal;
        updatedAt: Date;
        nombre: string;
        createdAt: Date;
        activo: boolean;
        tipo: TipoFactor;
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
        valor: import("@prisma/client-runtime-utils").Decimal;
        updatedAt: Date;
        nombre: string;
        createdAt: Date;
        activo: boolean;
        tipo: TipoFactor;
        categoriaId: number;
        fechaInicio: Date | null;
        fechaFin: Date | null;
    }>;
}
