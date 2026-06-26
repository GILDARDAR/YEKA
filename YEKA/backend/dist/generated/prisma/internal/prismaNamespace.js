"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.NullableJsonNullValueInput = exports.SortOrder = exports.AnuncioRespuestaScalarFieldEnum = exports.AnuncioScalarFieldEnum = exports.ConfiguracionScalarFieldEnum = exports.AuditLogScalarFieldEnum = exports.InventarioScalarFieldEnum = exports.PrendaServicioScalarFieldEnum = exports.FactorCobroScalarFieldEnum = exports.CategoriaFactorCobroScalarFieldEnum = exports.CatalogoServicioScalarFieldEnum = exports.PrendaScalarFieldEnum = exports.TipoUrgenciaScalarFieldEnum = exports.TipoPrendaScalarFieldEnum = exports.AbonoScalarFieldEnum = exports.FacturaScalarFieldEnum = exports.ClienteScalarFieldEnum = exports.RegistroJornadaScalarFieldEnum = exports.UsuarioScalarFieldEnum = exports.SedeScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Sede: 'Sede',
    Usuario: 'Usuario',
    RegistroJornada: 'RegistroJornada',
    Cliente: 'Cliente',
    Factura: 'Factura',
    Abono: 'Abono',
    TipoPrenda: 'TipoPrenda',
    TipoUrgencia: 'TipoUrgencia',
    Prenda: 'Prenda',
    CatalogoServicio: 'CatalogoServicio',
    CategoriaFactorCobro: 'CategoriaFactorCobro',
    FactorCobro: 'FactorCobro',
    PrendaServicio: 'PrendaServicio',
    Inventario: 'Inventario',
    AuditLog: 'AuditLog',
    Configuracion: 'Configuracion',
    Anuncio: 'Anuncio',
    AnuncioRespuesta: 'AnuncioRespuesta'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.SedeScalarFieldEnum = {
    id: 'id',
    codigoSede: 'codigoSede',
    nombre: 'nombre',
    direccion: 'direccion',
    capacidadDiariaMax: 'capacidadDiariaMax',
    activa: 'activa',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UsuarioScalarFieldEnum = {
    id: 'id',
    sedeId: 'sedeId',
    nombre: 'nombre',
    dni: 'dni',
    telefono: 'telefono',
    email: 'email',
    password: 'password',
    pinAcceso: 'pinAcceso',
    rol: 'rol',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RegistroJornadaScalarFieldEnum = {
    id: 'id',
    usuarioId: 'usuarioId',
    tipo: 'tipo',
    timestamp: 'timestamp'
};
exports.ClienteScalarFieldEnum = {
    id: 'id',
    sedeOrigenId: 'sedeOrigenId',
    nombre: 'nombre',
    dni: 'dni',
    celular: 'celular',
    email: 'email',
    nivelPremium: 'nivelPremium',
    tallasMedidas: 'tallasMedidas',
    preferenciasHistorial: 'preferenciasHistorial',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.FacturaScalarFieldEnum = {
    id: 'id',
    numero: 'numero',
    clienteId: 'clienteId',
    usuarioCreadorId: 'usuarioCreadorId',
    sedeId: 'sedeId',
    subtotal: 'subtotal',
    impuestosJson: 'impuestosJson',
    total: 'total',
    estadoPago: 'estadoPago',
    notas: 'notas',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AbonoScalarFieldEnum = {
    id: 'id',
    facturaId: 'facturaId',
    monto: 'monto',
    metodoPago: 'metodoPago',
    notas: 'notas',
    fecha: 'fecha'
};
exports.TipoPrendaScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    porcentajeDificultad: 'porcentajeDificultad',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.TipoUrgenciaScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    porcentajeRecargo: 'porcentajeRecargo',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PrendaScalarFieldEnum = {
    id: 'id',
    facturaId: 'facturaId',
    codigoQR: 'codigoQR',
    estadoActual: 'estadoActual',
    fechaCompromiso: 'fechaCompromiso',
    esLujo: 'esLujo',
    fotoUrl: 'fotoUrl',
    usuarioTallerId: 'usuarioTallerId',
    fechaUltimaNotificacion: 'fechaUltimaNotificacion',
    notas: 'notas',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tipoPrendaId: 'tipoPrendaId',
    color: 'color',
    marca: 'marca',
    talla: 'talla',
    tipoUrgenciaId: 'tipoUrgenciaId',
    porcentajeAtencionAplicado: 'porcentajeAtencionAplicado'
};
exports.CatalogoServicioScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    categoria: 'categoria',
    tipoEspecifico: 'tipoEspecifico',
    medidaBase: 'medidaBase',
    tiempoBase: 'tiempoBase',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CategoriaFactorCobroScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    activa: 'activa',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.FactorCobroScalarFieldEnum = {
    id: 'id',
    categoriaId: 'categoriaId',
    nombre: 'nombre',
    valor: 'valor',
    tipo: 'tipo',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PrendaServicioScalarFieldEnum = {
    id: 'id',
    prendaId: 'prendaId',
    servicioId: 'servicioId',
    medidaEntregada: 'medidaEntregada',
    tiempoCalculado: 'tiempoCalculado',
    valorPorTiempo: 'valorPorTiempo',
    valorFactoresCobro: 'valorFactoresCobro',
    precioBruto: 'precioBruto',
    precioFinal: 'precioFinal',
    observaciones: 'observaciones',
    detallesCalculo: 'detallesCalculo',
    createdAt: 'createdAt'
};
exports.InventarioScalarFieldEnum = {
    id: 'id',
    sedeId: 'sedeId',
    nombreInsumo: 'nombreInsumo',
    unidad: 'unidad',
    cantidadActual: 'cantidadActual',
    puntoReorden: 'puntoReorden',
    updatedAt: 'updatedAt'
};
exports.AuditLogScalarFieldEnum = {
    id: 'id',
    usuarioId: 'usuarioId',
    accion: 'accion',
    entidadAfectada: 'entidadAfectada',
    entidadId: 'entidadId',
    valorAnterior: 'valorAnterior',
    valorNuevo: 'valorNuevo',
    leido: 'leido',
    timestamp: 'timestamp'
};
exports.ConfiguracionScalarFieldEnum = {
    id: 'id',
    clave: 'clave',
    valor: 'valor',
    updatedAt: 'updatedAt'
};
exports.AnuncioScalarFieldEnum = {
    id: 'id',
    sedeId: 'sedeId',
    adminId: 'adminId',
    mensaje: 'mensaje',
    createdAt: 'createdAt'
};
exports.AnuncioRespuestaScalarFieldEnum = {
    id: 'id',
    anuncioId: 'anuncioId',
    usuarioId: 'usuarioId',
    respuesta: 'respuesta',
    leidoAt: 'leidoAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map