import { PrismaService } from '../../prisma/prisma.service';
export declare class TipoUrgenciaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        porcentajeRecargo: import("@prisma/client-runtime-utils").Decimal;
    }[]>;
    create(data: {
        nombre: string;
        porcentajeRecargo: number;
    }): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        porcentajeRecargo: import("@prisma/client-runtime-utils").Decimal;
    }>;
    update(id: number, data: {
        nombre?: string;
        porcentajeRecargo?: number;
        activo?: boolean;
    }): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        porcentajeRecargo: import("@prisma/client-runtime-utils").Decimal;
    }>;
    delete(id: number): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        porcentajeRecargo: import("@prisma/client-runtime-utils").Decimal;
    }>;
}
