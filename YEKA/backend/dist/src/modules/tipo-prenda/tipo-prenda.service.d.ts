import { TipoPrendaDao } from './tipo-prenda.dao';
import { CreateTipoPrendaDto, UpdateTipoPrendaDto } from './tipo-prenda.dto';
export declare class TipoPrendaService {
    private readonly tipoPrendaDao;
    constructor(tipoPrendaDao: TipoPrendaDao);
    create(dto: CreateTipoPrendaDto): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        descripcion: string | null;
        porcentajeDificultad: import("@prisma/client-runtime-utils").Decimal;
    }>;
    findAll(): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        descripcion: string | null;
        porcentajeDificultad: import("@prisma/client-runtime-utils").Decimal;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        descripcion: string | null;
        porcentajeDificultad: import("@prisma/client-runtime-utils").Decimal;
    }>;
    update(id: number, dto: UpdateTipoPrendaDto): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        descripcion: string | null;
        porcentajeDificultad: import("@prisma/client-runtime-utils").Decimal;
    }>;
    remove(id: number): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
        descripcion: string | null;
        porcentajeDificultad: import("@prisma/client-runtime-utils").Decimal;
    }>;
}
