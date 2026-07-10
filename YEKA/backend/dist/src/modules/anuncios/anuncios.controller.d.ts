import { AnunciosService } from './anuncios.service';
import { CreateAnuncioDto, ResponderAnuncioDto } from './anuncios.dto';
import { Rol } from '../../../generated/prisma/client';
export declare class AnunciosController {
    private readonly anunciosService;
    constructor(anunciosService: AnunciosService);
    createAnuncio(adminId: number, dto: CreateAnuncioDto): Promise<{
        sede: {
            id: number;
            codigoSede: string;
            nombre: string;
            direccion: string | null;
            capacidadDiariaMax: number;
            activa: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
        admin: {
            id: number;
            nombre: string;
            createdAt: Date;
            updatedAt: Date;
            dni: string | null;
            email: string;
            sedeId: number;
            telefono: string | null;
            password: string;
            pinAcceso: string | null;
            rol: Rol;
            activo: boolean;
        };
    } & {
        id: number;
        createdAt: Date;
        sedeId: number;
        mensaje: string;
        adminId: number;
    }>;
    getPendientes(usuarioId: number, sedeId: number): Promise<({
        admin: {
            id: number;
            nombre: string;
        };
    } & {
        id: number;
        createdAt: Date;
        sedeId: number;
        mensaje: string;
        adminId: number;
    })[]>;
    responderAnuncio(anuncioId: number, usuarioId: number, dto: ResponderAnuncioDto): Promise<{
        id: number;
        usuarioId: number;
        anuncioId: number;
        respuesta: string;
        leidoAt: Date;
    }>;
    getHistorial(search?: string): Promise<({
        sede: {
            id: number;
            nombre: string;
        };
        admin: {
            id: number;
            nombre: string;
        };
        respuestas: ({
            usuario: {
                id: number;
                nombre: string;
            };
        } & {
            id: number;
            usuarioId: number;
            anuncioId: number;
            respuesta: string;
            leidoAt: Date;
        })[];
    } & {
        id: number;
        createdAt: Date;
        sedeId: number;
        mensaje: string;
        adminId: number;
    })[]>;
}
