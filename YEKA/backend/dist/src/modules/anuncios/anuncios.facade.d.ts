import { AnunciosDao } from './anuncios.dao';
import { CreateAnuncioDto, ResponderAnuncioDto } from './anuncios.dto';
export declare class AnunciosFacade {
    private readonly dao;
    constructor(dao: AnunciosDao);
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
            sedeId: number;
            dni: string | null;
            telefono: string | null;
            email: string;
            password: string;
            pinAcceso: string | null;
            rol: import("../../../generated/prisma/enums").Rol;
            activo: boolean;
        };
    } & {
        id: number;
        createdAt: Date;
        sedeId: number;
        adminId: number;
        mensaje: string;
    }>;
    getPendientes(sedeId: number, usuarioId: number): Promise<({
        admin: {
            id: number;
            nombre: string;
        };
    } & {
        id: number;
        createdAt: Date;
        sedeId: number;
        adminId: number;
        mensaje: string;
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
        adminId: number;
        mensaje: string;
    })[]>;
}
