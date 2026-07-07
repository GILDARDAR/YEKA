import { PrismaService } from '../../prisma/prisma.service';
export declare class AnunciosDao {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createAnuncio(data: any): Promise<{
        sede: {
            id: number;
            updatedAt: Date;
            codigoSede: string;
            nombre: string;
            direccion: string | null;
            capacidadDiariaMax: number;
            activa: boolean;
            createdAt: Date;
        };
        admin: {
            id: number;
            updatedAt: Date;
            nombre: string;
            createdAt: Date;
            dni: string | null;
            email: string;
            sedeId: number;
            telefono: string | null;
            password: string;
            pinAcceso: string | null;
            rol: import("../../../generated/prisma/enums").Rol;
            activo: boolean;
        };
    } & {
        id: number;
        createdAt: Date;
        sedeId: number;
        mensaje: string;
        adminId: number;
    }>;
    getAnunciosBySede(sedeId: number): Promise<({
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
    getAnuncioRespuesta(anuncioId: number, usuarioId: number): Promise<{
        id: number;
        usuarioId: number;
        anuncioId: number;
        respuesta: string;
        leidoAt: Date;
    } | null>;
    createAnuncioRespuesta(data: any): Promise<{
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
