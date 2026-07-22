import { PrismaService } from '../../prisma/prisma.service';
import { CreateCatalogoServicioDto, UpdateCatalogoServicioDto } from './catalogo-servicio.dto';
export declare class CatalogoServicioDAO {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(tipoPrendaId?: number): Promise<({
        tipoPrenda: {
            id: number;
            nombre: string;
            createdAt: Date;
            updatedAt: Date;
            activo: boolean;
            descripcion: string | null;
            porcentajeDificultad: import("@prisma/client-runtime-utils").Decimal;
        } | null;
        categoriasFactores: {
            id: number;
            nombre: string;
            activa: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
        materiales: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            activo: boolean;
            descripcion: string;
        }[];
        tiposArreglo: {
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
        zonaId: number | null;
        tipoPrendaId: number | null;
        tipoEspecifico: string;
        medidaBase: import("@prisma/client-runtime-utils").Decimal;
        tiempoBase: number;
    })[]>;
    findById(id: number): Promise<({
        tipoPrenda: {
            id: number;
            nombre: string;
            createdAt: Date;
            updatedAt: Date;
            activo: boolean;
            descripcion: string | null;
            porcentajeDificultad: import("@prisma/client-runtime-utils").Decimal;
        } | null;
        categoriasFactores: {
            id: number;
            nombre: string;
            activa: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
        materiales: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            activo: boolean;
            descripcion: string;
        }[];
        tiposArreglo: {
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
        zonaId: number | null;
        tipoPrendaId: number | null;
        tipoEspecifico: string;
        medidaBase: import("@prisma/client-runtime-utils").Decimal;
        tiempoBase: number;
    }) | null>;
    create(data: CreateCatalogoServicioDto): Promise<{
        tipoPrenda: {
            id: number;
            nombre: string;
            createdAt: Date;
            updatedAt: Date;
            activo: boolean;
            descripcion: string | null;
            porcentajeDificultad: import("@prisma/client-runtime-utils").Decimal;
        } | null;
        categoriasFactores: {
            id: number;
            nombre: string;
            activa: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
        materiales: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            activo: boolean;
            descripcion: string;
        }[];
        tiposArreglo: {
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
        zonaId: number | null;
        tipoPrendaId: number | null;
        tipoEspecifico: string;
        medidaBase: import("@prisma/client-runtime-utils").Decimal;
        tiempoBase: number;
    }>;
    update(id: number, data: UpdateCatalogoServicioDto): Promise<{
        tipoPrenda: {
            id: number;
            nombre: string;
            createdAt: Date;
            updatedAt: Date;
            activo: boolean;
            descripcion: string | null;
            porcentajeDificultad: import("@prisma/client-runtime-utils").Decimal;
        } | null;
        categoriasFactores: {
            id: number;
            nombre: string;
            activa: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
        materiales: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            activo: boolean;
            descripcion: string;
        }[];
        tiposArreglo: {
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
        zonaId: number | null;
        tipoPrendaId: number | null;
        tipoEspecifico: string;
        medidaBase: import("@prisma/client-runtime-utils").Decimal;
        tiempoBase: number;
    }>;
    softDelete(id: number): Promise<{
        tipoPrenda: {
            id: number;
            nombre: string;
            createdAt: Date;
            updatedAt: Date;
            activo: boolean;
            descripcion: string | null;
            porcentajeDificultad: import("@prisma/client-runtime-utils").Decimal;
        } | null;
        categoriasFactores: {
            id: number;
            nombre: string;
            activa: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
        materiales: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            activo: boolean;
            descripcion: string;
        }[];
        tiposArreglo: {
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
        zonaId: number | null;
        tipoPrendaId: number | null;
        tipoEspecifico: string;
        medidaBase: import("@prisma/client-runtime-utils").Decimal;
        tiempoBase: number;
    }>;
}
