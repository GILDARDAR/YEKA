"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoExpress = exports.MetodoPago = exports.AccionAuditoria = exports.TipoJornada = exports.EstadoPrenda = exports.EstadoPago = exports.Rol = void 0;
exports.Rol = {
    ADMIN: 'ADMIN',
    RECEPCION: 'RECEPCION',
    TALLER: 'TALLER'
};
exports.EstadoPago = {
    PENDIENTE: 'PENDIENTE',
    PARCIAL: 'PARCIAL',
    PAGADO: 'PAGADO',
    ANULADO: 'ANULADO'
};
exports.EstadoPrenda = {
    RECIBIDA: 'RECIBIDA',
    PENDIENTE_VALORACION: 'PENDIENTE_VALORACION',
    EN_PRODUCCION: 'EN_PRODUCCION',
    ESPERANDO_PRUEBA: 'ESPERANDO_PRUEBA',
    PENDIENTE_RECOGIDA: 'PENDIENTE_RECOGIDA',
    ENTREGADA: 'ENTREGADA',
    PROPIEDAD_TALLER: 'PROPIEDAD_TALLER'
};
exports.TipoJornada = {
    ENTRADA: 'ENTRADA',
    SALIDA: 'SALIDA'
};
exports.AccionAuditoria = {
    CREACION: 'CREACION',
    MODIFICACION: 'MODIFICACION',
    ANULACION: 'ANULACION',
    CAMBIO_ESTADO: 'CAMBIO_ESTADO',
    ABONO: 'ABONO'
};
exports.MetodoPago = {
    EFECTIVO: 'EFECTIVO',
    TARJETA: 'TARJETA',
    TRANSFERENCIA: 'TRANSFERENCIA',
    BIZUM: 'BIZUM'
};
exports.TipoExpress = {
    NORMAL: 'NORMAL',
    EXPRESS_48H: 'EXPRESS_48H',
    EXPRESS_24H: 'EXPRESS_24H'
};
//# sourceMappingURL=enums.js.map