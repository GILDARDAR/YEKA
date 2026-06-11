import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto, UpdateUsuarioDto, UsuarioResponseDto, RegistrarJornadaDto } from './usuario.dto';
import { RegistroJornada } from '../../../generated/prisma/client';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    getUsuarios(sedeIdQuery?: string): Promise<UsuarioResponseDto[]>;
    getUsuarioById(id: number): Promise<UsuarioResponseDto>;
    createUsuario(dto: CreateUsuarioDto): Promise<UsuarioResponseDto>;
    updateUsuario(id: number, dto: UpdateUsuarioDto): Promise<UsuarioResponseDto>;
    deleteUsuario(id: number): Promise<UsuarioResponseDto>;
    registrarJornada(id: number, dto: RegistrarJornadaDto): Promise<RegistroJornada>;
}
