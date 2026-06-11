import { UsuarioDAO } from './usuario.dao';
import { CreateUsuarioDto, UpdateUsuarioDto, UsuarioResponseDto } from './usuario.dto';
import { Usuario, RegistroJornada, TipoJornada } from '../../../generated/prisma/client';
export declare class UsuarioFacade {
    private readonly usuarioDAO;
    constructor(usuarioDAO: UsuarioDAO);
    getUsuarios(sedeId?: number): Promise<UsuarioResponseDto[]>;
    getUsuarioById(id: number): Promise<UsuarioResponseDto>;
    createUsuario(dto: CreateUsuarioDto): Promise<UsuarioResponseDto>;
    updateUsuario(id: number, dto: UpdateUsuarioDto): Promise<UsuarioResponseDto>;
    deleteUsuario(id: number): Promise<UsuarioResponseDto>;
    registrarJornada(usuarioId: number, tipo: TipoJornada): Promise<RegistroJornada>;
    validateCredentials(email: string, password: string): Promise<Usuario | null>;
    validatePin(usuarioId: number, pin: string): Promise<boolean>;
}
