export declare class CreateClienteDto {
    sedeOrigenId: number;
    nombre: string;
    dni?: string;
    celular?: string;
    email?: string;
    tallasMedidas?: Record<string, unknown>;
    preferenciasHistorial?: Record<string, unknown>;
}
export declare class UpdateClienteDto {
    sedeOrigenId?: number;
    nombre?: string;
    dni?: string;
    celular?: string;
    email?: string;
    tallasMedidas?: Record<string, unknown>;
    preferenciasHistorial?: Record<string, unknown>;
    activo?: boolean;
}
export declare class BuscarClienteDto {
    q: string;
}
export declare class ClienteResponseDto {
    id: number;
    sedeOrigenId: number;
    nombre: string;
    dni: string | null;
    celular: string | null;
    email: string | null;
    nivelPremium: number;
    tallasMedidas: Record<string, unknown> | null;
    preferenciasHistorial: Record<string, unknown> | null;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    facturasCount?: number;
}
