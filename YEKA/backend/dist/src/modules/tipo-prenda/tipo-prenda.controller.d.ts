import { TipoPrendaService } from './tipo-prenda.service';
import { CreateTipoPrendaDto, UpdateTipoPrendaDto } from './tipo-prenda.dto';
export declare class TipoPrendaController {
    private readonly tipoPrendaService;
    constructor(tipoPrendaService: TipoPrendaService);
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
    create(dto: CreateTipoPrendaDto): Promise<{
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
