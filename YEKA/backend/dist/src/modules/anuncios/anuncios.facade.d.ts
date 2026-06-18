import { AnunciosDao } from './anuncios.dao';
import { CreateAnuncioDto, ResponderAnuncioDto } from './anuncios.dto';
export declare class AnunciosFacade {
    private readonly dao;
    constructor(dao: AnunciosDao);
    createAnuncio(adminId: number, dto: CreateAnuncioDto): Promise<{
        sede: {
            nombre: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            codigoSede: string;
            direccion: string | null;
            capacidadDiariaMax: number;
            activa: boolean;
        };
        admin: {
            email: string;
            password: string;
            nombre: string;
            rol: import("../../../generated/prisma/enums").Rol;
            sedeId: number;
            id: number;
            dni: string | null;
            telefono: string | null;
            pinAcceso: string | null;
            activo: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        sedeId: number;
        id: number;
        createdAt: Date;
        mensaje: string;
        adminId: number;
    }>;
    getPendientes(sedeId: number, usuarioId: number): Promise<({
        admin: {
            nombre: string;
            id: number;
        };
    } & {
        sedeId: number;
        id: number;
        createdAt: Date;
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
            nombre: string;
            id: number;
        };
        admin: {
            nombre: string;
            id: number;
        };
        respuestas: ({
            usuario: {
                nombre: string;
                id: number;
            };
        } & {
            id: number;
            usuarioId: number;
            anuncioId: number;
            respuesta: string;
            leidoAt: Date;
        })[];
    } & {
        sedeId: number;
        id: number;
        createdAt: Date;
        mensaje: string;
        adminId: number;
    })[]>;
}
