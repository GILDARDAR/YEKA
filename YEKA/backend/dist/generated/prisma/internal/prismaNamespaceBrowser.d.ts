import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Sede: "Sede";
    readonly Usuario: "Usuario";
    readonly RegistroJornada: "RegistroJornada";
    readonly Cliente: "Cliente";
    readonly Factura: "Factura";
    readonly Abono: "Abono";
    readonly TipoPrenda: "TipoPrenda";
    readonly Prenda: "Prenda";
    readonly CatalogoServicio: "CatalogoServicio";
    readonly PrecioServicio: "PrecioServicio";
    readonly PrendaServicio: "PrendaServicio";
    readonly Inventario: "Inventario";
    readonly AuditLog: "AuditLog";
    readonly Configuracion: "Configuracion";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const SedeScalarFieldEnum: {
    readonly id: "id";
    readonly codigoSede: "codigoSede";
    readonly nombre: "nombre";
    readonly direccion: "direccion";
    readonly capacidadDiariaMax: "capacidadDiariaMax";
    readonly activa: "activa";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SedeScalarFieldEnum = (typeof SedeScalarFieldEnum)[keyof typeof SedeScalarFieldEnum];
export declare const UsuarioScalarFieldEnum: {
    readonly id: "id";
    readonly sedeId: "sedeId";
    readonly nombre: "nombre";
    readonly dni: "dni";
    readonly telefono: "telefono";
    readonly email: "email";
    readonly password: "password";
    readonly pinAcceso: "pinAcceso";
    readonly rol: "rol";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];
export declare const RegistroJornadaScalarFieldEnum: {
    readonly id: "id";
    readonly usuarioId: "usuarioId";
    readonly tipo: "tipo";
    readonly timestamp: "timestamp";
};
export type RegistroJornadaScalarFieldEnum = (typeof RegistroJornadaScalarFieldEnum)[keyof typeof RegistroJornadaScalarFieldEnum];
export declare const ClienteScalarFieldEnum: {
    readonly id: "id";
    readonly sedeOrigenId: "sedeOrigenId";
    readonly nombre: "nombre";
    readonly dni: "dni";
    readonly celular: "celular";
    readonly email: "email";
    readonly nivelPremium: "nivelPremium";
    readonly tallasMedidas: "tallasMedidas";
    readonly preferenciasHistorial: "preferenciasHistorial";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum];
export declare const FacturaScalarFieldEnum: {
    readonly id: "id";
    readonly numero: "numero";
    readonly clienteId: "clienteId";
    readonly usuarioCreadorId: "usuarioCreadorId";
    readonly sedeId: "sedeId";
    readonly subtotal: "subtotal";
    readonly impuestosJson: "impuestosJson";
    readonly total: "total";
    readonly estadoPago: "estadoPago";
    readonly notas: "notas";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FacturaScalarFieldEnum = (typeof FacturaScalarFieldEnum)[keyof typeof FacturaScalarFieldEnum];
export declare const AbonoScalarFieldEnum: {
    readonly id: "id";
    readonly facturaId: "facturaId";
    readonly monto: "monto";
    readonly metodoPago: "metodoPago";
    readonly notas: "notas";
    readonly fecha: "fecha";
};
export type AbonoScalarFieldEnum = (typeof AbonoScalarFieldEnum)[keyof typeof AbonoScalarFieldEnum];
export declare const TipoPrendaScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TipoPrendaScalarFieldEnum = (typeof TipoPrendaScalarFieldEnum)[keyof typeof TipoPrendaScalarFieldEnum];
export declare const PrendaScalarFieldEnum: {
    readonly id: "id";
    readonly facturaId: "facturaId";
    readonly codigoQR: "codigoQR";
    readonly estadoActual: "estadoActual";
    readonly fechaCompromiso: "fechaCompromiso";
    readonly esLujo: "esLujo";
    readonly fotoUrl: "fotoUrl";
    readonly usuarioTallerId: "usuarioTallerId";
    readonly fechaUltimaNotificacion: "fechaUltimaNotificacion";
    readonly notas: "notas";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly tipoPrendaId: "tipoPrendaId";
    readonly color: "color";
    readonly marca: "marca";
    readonly talla: "talla";
    readonly tipoExpress: "tipoExpress";
};
export type PrendaScalarFieldEnum = (typeof PrendaScalarFieldEnum)[keyof typeof PrendaScalarFieldEnum];
export declare const CatalogoServicioScalarFieldEnum: {
    readonly id: "id";
    readonly categoria: "categoria";
    readonly tipoEspecifico: "tipoEspecifico";
    readonly pesoPuntos: "pesoPuntos";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CatalogoServicioScalarFieldEnum = (typeof CatalogoServicioScalarFieldEnum)[keyof typeof CatalogoServicioScalarFieldEnum];
export declare const PrecioServicioScalarFieldEnum: {
    readonly id: "id";
    readonly catalogoServicioId: "catalogoServicioId";
    readonly tipoPrendaId: "tipoPrendaId";
    readonly medidaBase: "medidaBase";
    readonly precioBase: "precioBase";
    readonly medidaExtra: "medidaExtra";
    readonly precioExtra: "precioExtra";
    readonly activo: "activo";
};
export type PrecioServicioScalarFieldEnum = (typeof PrecioServicioScalarFieldEnum)[keyof typeof PrecioServicioScalarFieldEnum];
export declare const PrendaServicioScalarFieldEnum: {
    readonly id: "id";
    readonly prendaId: "prendaId";
    readonly servicioId: "servicioId";
    readonly tipoExpress: "tipoExpress";
    readonly precioFinal: "precioFinal";
    readonly createdAt: "createdAt";
    readonly medidaEntregada: "medidaEntregada";
    readonly observaciones: "observaciones";
};
export type PrendaServicioScalarFieldEnum = (typeof PrendaServicioScalarFieldEnum)[keyof typeof PrendaServicioScalarFieldEnum];
export declare const InventarioScalarFieldEnum: {
    readonly id: "id";
    readonly sedeId: "sedeId";
    readonly nombreInsumo: "nombreInsumo";
    readonly unidad: "unidad";
    readonly cantidadActual: "cantidadActual";
    readonly puntoReorden: "puntoReorden";
    readonly updatedAt: "updatedAt";
};
export type InventarioScalarFieldEnum = (typeof InventarioScalarFieldEnum)[keyof typeof InventarioScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly usuarioId: "usuarioId";
    readonly accion: "accion";
    readonly entidadAfectada: "entidadAfectada";
    readonly entidadId: "entidadId";
    readonly valorAnterior: "valorAnterior";
    readonly valorNuevo: "valorNuevo";
    readonly leido: "leido";
    readonly timestamp: "timestamp";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const ConfiguracionScalarFieldEnum: {
    readonly id: "id";
    readonly clave: "clave";
    readonly valor: "valor";
    readonly updatedAt: "updatedAt";
};
export type ConfiguracionScalarFieldEnum = (typeof ConfiguracionScalarFieldEnum)[keyof typeof ConfiguracionScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
