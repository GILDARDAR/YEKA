import { TipoUrgenciaService } from './tipo-urgencia.service';
export declare class TipoUrgenciaController {
    private readonly service;
    constructor(service: TipoUrgenciaService);
    findAll(): Promise<{
        id: number;
        updatedAt: Date;
        nombre: string;
        createdAt: Date;
        activo: boolean;
        porcentajeRecargo: import("@prisma/client-runtime-utils").Decimal;
    }[]>;
    create(body: {
        nombre: string;
        porcentajeRecargo: number;
    }): Promise<{
        id: number;
        updatedAt: Date;
        nombre: string;
        createdAt: Date;
        activo: boolean;
        porcentajeRecargo: import("@prisma/client-runtime-utils").Decimal;
    }>;
    update(id: number, body: any): Promise<{
        id: number;
        updatedAt: Date;
        nombre: string;
        createdAt: Date;
        activo: boolean;
        porcentajeRecargo: import("@prisma/client-runtime-utils").Decimal;
    }>;
    delete(id: number): Promise<{
        id: number;
        updatedAt: Date;
        nombre: string;
        createdAt: Date;
        activo: boolean;
        porcentajeRecargo: import("@prisma/client-runtime-utils").Decimal;
    }>;
}
