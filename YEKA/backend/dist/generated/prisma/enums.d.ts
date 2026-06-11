export declare const Rol: {
    readonly ADMIN: "ADMIN";
    readonly RECEPCION: "RECEPCION";
    readonly TALLER: "TALLER";
};
export type Rol = (typeof Rol)[keyof typeof Rol];
export declare const EstadoPago: {
    readonly PENDIENTE: "PENDIENTE";
    readonly PARCIAL: "PARCIAL";
    readonly PAGADO: "PAGADO";
    readonly ANULADO: "ANULADO";
};
export type EstadoPago = (typeof EstadoPago)[keyof typeof EstadoPago];
export declare const EstadoPrenda: {
    readonly RECIBIDA: "RECIBIDA";
    readonly PENDIENTE_VALORACION: "PENDIENTE_VALORACION";
    readonly EN_PRODUCCION: "EN_PRODUCCION";
    readonly ESPERANDO_PRUEBA: "ESPERANDO_PRUEBA";
    readonly PENDIENTE_RECOGIDA: "PENDIENTE_RECOGIDA";
    readonly ENTREGADA: "ENTREGADA";
    readonly PROPIEDAD_TALLER: "PROPIEDAD_TALLER";
};
export type EstadoPrenda = (typeof EstadoPrenda)[keyof typeof EstadoPrenda];
export declare const TipoJornada: {
    readonly ENTRADA: "ENTRADA";
    readonly SALIDA: "SALIDA";
};
export type TipoJornada = (typeof TipoJornada)[keyof typeof TipoJornada];
export declare const AccionAuditoria: {
    readonly CREACION: "CREACION";
    readonly MODIFICACION: "MODIFICACION";
    readonly ANULACION: "ANULACION";
    readonly CAMBIO_ESTADO: "CAMBIO_ESTADO";
    readonly ABONO: "ABONO";
};
export type AccionAuditoria = (typeof AccionAuditoria)[keyof typeof AccionAuditoria];
export declare const MetodoPago: {
    readonly EFECTIVO: "EFECTIVO";
    readonly TARJETA: "TARJETA";
    readonly TRANSFERENCIA: "TRANSFERENCIA";
    readonly BIZUM: "BIZUM";
};
export type MetodoPago = (typeof MetodoPago)[keyof typeof MetodoPago];
export declare const TipoExpress: {
    readonly NORMAL: "NORMAL";
    readonly EXPRESS_48H: "EXPRESS_48H";
    readonly EXPRESS_24H: "EXPRESS_24H";
};
export type TipoExpress = (typeof TipoExpress)[keyof typeof TipoExpress];
