import { UsuarioFacade } from './usuario.facade';
import { CreateUsuarioDto, UpdateUsuarioDto, UsuarioResponseDto } from './usuario.dto';
import { RegistroJornada, TipoJornada } from '../../../generated/prisma/client';
export declare class UsuarioService {
    private readonly usuarioFacade;
    constructor(usuarioFacade: UsuarioFacade);
    getUsuarios(sedeId?: number): Promise<UsuarioResponseDto[]>;
    getUsuarioById(id: number): Promise<UsuarioResponseDto>;
    createUsuario(dto: CreateUsuarioDto): Promise<UsuarioResponseDto>;
    updateUsuario(id: number, dto: UpdateUsuarioDto): Promise<UsuarioResponseDto>;
    deleteUsuario(id: number): Promise<UsuarioResponseDto>;
    registrarJornada(usuarioId: number, tipo: TipoJornada): Promise<RegistroJornada>;
    getAuditLogs(): Promise<({
        usuario: {
            nombre: string;
            rol: import("../../../generated/prisma/enums").Rol;
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
