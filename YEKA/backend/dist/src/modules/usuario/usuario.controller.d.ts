import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto, UpdateUsuarioDto, UsuarioResponseDto, RegistrarJornadaDto } from './usuario.dto';
import { Rol, RegistroJornada } from '../../../generated/prisma/client';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    getUsuarios(sedeIdQuery?: string): Promise<UsuarioResponseDto[]>;
    getUsuarioById(id: number): Promise<UsuarioResponseDto>;
    createUsuario(dto: CreateUsuarioDto): Promise<UsuarioResponseDto>;
    updateUsuario(id: number, dto: UpdateUsuarioDto): Promise<UsuarioResponseDto>;
    deleteUsuario(id: number): Promise<UsuarioResponseDto>;
    registrarJornada(id: number, dto: RegistrarJornadaDto): Promise<RegistroJornada>;
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
