import { FactorCobroService } from './factor-cobro.service';
export declare class FactorCobroController {
    private readonly service;
    constructor(service: FactorCobroService);
    findAll(): Promise<({
        factores: {
            id: number;
            nombre: string;
            createdAt: Date;
            updatedAt: Date;
            activo: boolean;
            tipo: import("../../../generated/prisma/enums").TipoFactor;
            categoriaId: number;
            valor: import("@prisma/client-runtime-utils").Decimal;
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
    findAllCategorias(): Promise<({
        factores: {
            id: number;
            nombre: string;
            createdAt: Date;
            updatedAt: Date;
            activo: boolean;
            tipo: import("../../../generated/prisma/enums").TipoFactor;
            categoriaId: number;
            valor: import("@prisma/client-runtime-utils").Decimal;
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
    createCategoria(body: {
        nombre: string;
    }): Promise<{
        id: number;
        nombre: string;
        activa: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateCategoria(id: number, body: any): Promise<{
        id: number;
        nombre: string;
        activa: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createFactor(body: any): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        tipo: import("../../../generated/prisma/enums").TipoFactor;
        categoriaId: number;
        valor: import("@prisma/client-runtime-utils").Decimal;
        fechaInicio: Date | null;
        fechaFin: Date | null;
    }>;
    updateFactor(id: number, body: any): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        tipo: import("../../../generated/prisma/enums").TipoFactor;
        categoriaId: number;
        valor: import("@prisma/client-runtime-utils").Decimal;
        fechaInicio: Date | null;
        fechaFin: Date | null;
    }>;
}
