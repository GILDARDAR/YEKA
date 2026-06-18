import { PrismaService } from '../../prisma/prisma.service';
export declare class AnunciosDao {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createAnuncio(data: any): Promise<{
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
    getAnunciosBySede(sedeId: number): Promise<({
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
