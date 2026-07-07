import { FactorCobroService } from './factor-cobro.service';
export declare class FactorCobroController {
    private readonly service;
    constructor(service: FactorCobroService);
    findAll(): Promise<({
        factores: {
            id: number;
            valor: import("@prisma/client-runtime-utils").Decimal;
            updatedAt: Date;
            nombre: string;
            createdAt: Date;
            activo: boolean;
            tipo: import("../../../generated/prisma/enums").TipoFactor;
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
    findAllCategorias(): Promise<({
        factores: {
            id: number;
            valor: import("@prisma/client-runtime-utils").Decimal;
            updatedAt: Date;
            nombre: string;
            createdAt: Date;
            activo: boolean;
            tipo: import("../../../generated/prisma/enums").TipoFactor;
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
    createCategoria(body: {
        nombre: string;
    }): Promise<{
        id: number;
        updatedAt: Date;
        nombre: string;
        activa: boolean;
        createdAt: Date;
    }>;
    updateCategoria(id: number, body: any): Promise<{
        id: number;
        updatedAt: Date;
        nombre: string;
        activa: boolean;
        createdAt: Date;
    }>;
    createFactor(body: any): Promise<{
        id: number;
        valor: import("@prisma/client-runtime-utils").Decimal;
        updatedAt: Date;
        nombre: string;
        createdAt: Date;
        activo: boolean;
        tipo: import("../../../generated/prisma/enums").TipoFactor;
        categoriaId: number;
        fechaInicio: Date | null;
        fechaFin: Date | null;
    }>;
    updateFactor(id: number, body: any): Promise<{
        id: number;
        valor: import("@prisma/client-runtime-utils").Decimal;
        updatedAt: Date;
        nombre: string;
        createdAt: Date;
        activo: boolean;
        tipo: import("../../../generated/prisma/enums").TipoFactor;
        categoriaId: number;
        fechaInicio: Date | null;
        fechaFin: Date | null;
    }>;
}
