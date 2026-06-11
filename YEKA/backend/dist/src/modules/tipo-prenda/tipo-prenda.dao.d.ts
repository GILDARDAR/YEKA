import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, TipoPrenda } from '../../../generated/prisma/client';
export declare class TipoPrendaDao {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.TipoPrendaCreateInput): Promise<TipoPrenda>;
    findAll(): Promise<TipoPrenda[]>;
    findById(id: number): Promise<TipoPrenda | null>;
    update(id: number, data: Prisma.TipoPrendaUpdateInput): Promise<TipoPrenda>;
    delete(id: number): Promise<TipoPrenda>;
}
