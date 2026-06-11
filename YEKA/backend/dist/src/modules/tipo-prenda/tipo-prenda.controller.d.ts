import { TipoPrendaService } from './tipo-prenda.service';
import { CreateTipoPrendaDto, UpdateTipoPrendaDto } from './tipo-prenda.dto';
export declare class TipoPrendaController {
    private readonly tipoPrendaService;
    constructor(tipoPrendaService: TipoPrendaService);
    findAll(): Promise<{
        nombre: string;
        id: number;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
    }[]>;
    findOne(id: number): Promise<{
        nombre: string;
        id: number;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
    }>;
    create(dto: CreateTipoPrendaDto): Promise<{
        nombre: string;
        id: number;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
    }>;
    update(id: number, dto: UpdateTipoPrendaDto): Promise<{
        nombre: string;
        id: number;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
    }>;
    remove(id: number): Promise<{
        nombre: string;
        id: number;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
    }>;
}
