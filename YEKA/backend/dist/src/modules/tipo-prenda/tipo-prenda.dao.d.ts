import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, TipoPrenda } from '../../../generated/prisma/client';
export declare class TipoPrendaDao {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.TipoPrendaCreateInput): Promise<{
        materiales: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            activo: boolean;
            descripcion: string;
        }[];
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        descripcion: string | null;
        porcentajeDificultad: import("@prisma/client-runtime-utils").Decimal;
    }>;
    findAll(): Promise<({
        materiales: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            activo: boolean;
            descripcion: string;
        }[];
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        descripcion: string | null;
        porcentajeDificultad: import("@prisma/client-runtime-utils").Decimal;
    })[]>;
    findById(id: number): Promise<({
        materiales: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            activo: boolean;
            descripcion: string;
        }[];
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        descripcion: string | null;
        porcentajeDificultad: import("@prisma/client-runtime-utils").Decimal;
    }) | null>;
    update(id: number, data: Prisma.TipoPrendaUpdateInput): Promise<{
        materiales: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            activo: boolean;
            descripcion: string;
        }[];
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        descripcion: string | null;
        porcentajeDificultad: import("@prisma/client-runtime-utils").Decimal;
    }>;
    delete(id: number): Promise<TipoPrenda>;
}
