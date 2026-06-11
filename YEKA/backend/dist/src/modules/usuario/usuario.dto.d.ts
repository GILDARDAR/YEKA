import { Rol, TipoJornada } from '../../../generated/prisma/client';
export declare class CreateUsuarioDto {
    sedeId: number;
    nombre: string;
    dni?: string;
    telefono?: string;
    email: string;
    password: string;
    pinAcceso?: string;
    rol: Rol;
}
export declare class UpdateUsuarioDto {
    sedeId?: number;
    nombre?: string;
    dni?: string;
    telefono?: string;
    email?: string;
    password?: string;
    pinAcceso?: string;
    rol?: Rol;
    activo?: boolean;
}
export declare class RegistrarJornadaDto {
    tipo: TipoJornada;
}
export declare class UsuarioResponseDto {
    id: number;
    sedeId: number;
    nombre: string;
    dni: string | null;
    telefono: string | null;
    email: string;
    rol: Rol;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
}
