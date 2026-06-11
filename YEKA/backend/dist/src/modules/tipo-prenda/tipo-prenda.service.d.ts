import { TipoPrendaDao } from './tipo-prenda.dao';
import { CreateTipoPrendaDto, UpdateTipoPrendaDto } from './tipo-prenda.dto';
export declare class TipoPrendaService {
    private readonly tipoPrendaDao;
    constructor(tipoPrendaDao: TipoPrendaDao);
    create(dto: CreateTipoPrendaDto): Promise<{
        nombre: string;
        id: number;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
    }>;
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
