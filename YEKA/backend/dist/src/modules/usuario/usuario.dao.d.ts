import { PrismaService } from '../../prisma/prisma.service';
import { Usuario, RegistroJornada, Rol, TipoJornada } from '../../../generated/prisma/client';
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
    getAuditLogs(): Promise<({
        usuario: {
            nombre: string;
            rol: Rol;
        } | null;
    } & {
        id: number;
        usuarioId: number | null;
        timestamp: Date;
        accion: import("../../../generated/prisma/enums").AccionAuditoria;
        entidadAfectada: string;
        entidadId: number | null;
        valorAnterior: import("@prisma/client/runtime/client").JsonValue | null;
        valorNuevo: import("@prisma/client/runtime/client").JsonValue | null;
        leido: boolean;
    })[]>;
    markAllAuditLogsAsRead(): Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    markAuditLogAsRead(id: number): Promise<{
        id: number;
        usuarioId: number | null;
        timestamp: Date;
        accion: import("../../../generated/prisma/enums").AccionAuditoria;
        entidadAfectada: string;
        entidadId: number | null;
        valorAnterior: import("@prisma/client/runtime/client").JsonValue | null;
        valorNuevo: import("@prisma/client/runtime/client").JsonValue | null;
        leido: boolean;
    }>;
}
