import { PrismaService } from '../../prisma/prisma.service';
import { Usuario, RegistroJornada, TipoJornada } from '../../../generated/prisma/client';
export declare class UsuarioDAO {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(sedeId?: number): Promise<Usuario[]>;
    findById(id: number): Promise<Usuario | null>;
    findByEmail(email: string): Promise<Usuario | null>;
    findByDni(dni: string): Promise<Usuario | null>;
    create(data: any): Promise<Usuario>;
    update(id: number, data: any): Promise<Usuario>;
    softDelete(id: number): Promise<Usuario>;
    registrarJornada(usuarioId: number, tipo: TipoJornada): Promise<RegistroJornada>;
    getJornadasHoy(usuarioId: number): Promise<RegistroJornada[]>;
}
