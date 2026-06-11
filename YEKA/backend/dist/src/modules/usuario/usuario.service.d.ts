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
}
