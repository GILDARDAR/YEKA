import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Sede: "Sede";
    readonly Usuario: "Usuario";
    readonly RegistroJornada: "RegistroJornada";
    readonly Cliente: "Cliente";
    readonly Factura: "Factura";
    readonly Abono: "Abono";
    readonly TipoPrenda: "TipoPrenda";
    readonly TipoUrgencia: "TipoUrgencia";
    readonly Prenda: "Prenda";
    readonly CatalogoServicio: "CatalogoServicio";
    readonly CategoriaFactorCobro: "CategoriaFactorCobro";
    readonly FactorCobro: "FactorCobro";
    readonly PrendaServicio: "PrendaServicio";
    readonly Inventario: "Inventario";
    readonly AuditLog: "AuditLog";
    readonly Configuracion: "Configuracion";
    readonly Anuncio: "Anuncio";
    readonly AnuncioRespuesta: "AnuncioRespuesta";
    readonly Material: "Material";
    readonly TipoArreglo: "TipoArreglo";
    readonly Zona: "Zona";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "sede" | "usuario" | "registroJornada" | "cliente" | "factura" | "abono" | "tipoPrenda" | "tipoUrgencia" | "prenda" | "catalogoServicio" | "categoriaFactorCobro" | "factorCobro" | "prendaServicio" | "inventario" | "auditLog" | "configuracion" | "anuncio" | "anuncioRespuesta" | "material" | "tipoArreglo" | "zona";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Sede: {
            payload: Prisma.$SedePayload<ExtArgs>;
            fields: Prisma.SedeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SedeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SedePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SedeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SedePayload>;
                };
                findFirst: {
                    args: Prisma.SedeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SedePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SedeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SedePayload>;
                };
                findMany: {
                    args: Prisma.SedeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SedePayload>[];
                };
                create: {
                    args: Prisma.SedeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SedePayload>;
                };
                createMany: {
                    args: Prisma.SedeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SedeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SedePayload>[];
                };
                delete: {
                    args: Prisma.SedeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SedePayload>;
                };
                update: {
                    args: Prisma.SedeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SedePayload>;
                };
                deleteMany: {
                    args: Prisma.SedeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SedeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SedeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SedePayload>[];
                };
                upsert: {
                    args: Prisma.SedeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SedePayload>;
                };
                aggregate: {
                    args: Prisma.SedeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSede>;
                };
                groupBy: {
                    args: Prisma.SedeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SedeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SedeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SedeCountAggregateOutputType> | number;
                };
            };
        };
        Usuario: {
            payload: Prisma.$UsuarioPayload<ExtArgs>;
            fields: Prisma.UsuarioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UsuarioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                findFirst: {
                    args: Prisma.UsuarioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                findMany: {
                    args: Prisma.UsuarioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                create: {
                    args: Prisma.UsuarioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                createMany: {
                    args: Prisma.UsuarioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                delete: {
                    args: Prisma.UsuarioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                update: {
                    args: Prisma.UsuarioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                deleteMany: {
                    args: Prisma.UsuarioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UsuarioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                upsert: {
                    args: Prisma.UsuarioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                aggregate: {
                    args: Prisma.UsuarioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsuario>;
                };
                groupBy: {
                    args: Prisma.UsuarioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UsuarioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioCountAggregateOutputType> | number;
                };
            };
        };
        RegistroJornada: {
            payload: Prisma.$RegistroJornadaPayload<ExtArgs>;
            fields: Prisma.RegistroJornadaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RegistroJornadaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroJornadaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RegistroJornadaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroJornadaPayload>;
                };
                findFirst: {
                    args: Prisma.RegistroJornadaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroJornadaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RegistroJornadaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroJornadaPayload>;
                };
                findMany: {
                    args: Prisma.RegistroJornadaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroJornadaPayload>[];
                };
                create: {
                    args: Prisma.RegistroJornadaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroJornadaPayload>;
                };
                createMany: {
                    args: Prisma.RegistroJornadaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RegistroJornadaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroJornadaPayload>[];
                };
                delete: {
                    args: Prisma.RegistroJornadaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroJornadaPayload>;
                };
                update: {
                    args: Prisma.RegistroJornadaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroJornadaPayload>;
                };
                deleteMany: {
                    args: Prisma.RegistroJornadaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RegistroJornadaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RegistroJornadaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroJornadaPayload>[];
                };
                upsert: {
                    args: Prisma.RegistroJornadaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegistroJornadaPayload>;
                };
                aggregate: {
                    args: Prisma.RegistroJornadaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRegistroJornada>;
                };
                groupBy: {
                    args: Prisma.RegistroJornadaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RegistroJornadaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RegistroJornadaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RegistroJornadaCountAggregateOutputType> | number;
                };
            };
        };
        Cliente: {
            payload: Prisma.$ClientePayload<ExtArgs>;
            fields: Prisma.ClienteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClienteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                findFirst: {
                    args: Prisma.ClienteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                findMany: {
                    args: Prisma.ClienteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>[];
                };
                create: {
                    args: Prisma.ClienteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                createMany: {
                    args: Prisma.ClienteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>[];
                };
                delete: {
                    args: Prisma.ClienteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                update: {
                    args: Prisma.ClienteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                deleteMany: {
                    args: Prisma.ClienteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClienteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>[];
                };
                upsert: {
                    args: Prisma.ClienteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                aggregate: {
                    args: Prisma.ClienteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCliente>;
                };
                groupBy: {
                    args: Prisma.ClienteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClienteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClienteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClienteCountAggregateOutputType> | number;
                };
            };
        };
        Factura: {
            payload: Prisma.$FacturaPayload<ExtArgs>;
            fields: Prisma.FacturaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FacturaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FacturaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturaPayload>;
                };
                findFirst: {
                    args: Prisma.FacturaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FacturaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturaPayload>;
                };
                findMany: {
                    args: Prisma.FacturaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturaPayload>[];
                };
                create: {
                    args: Prisma.FacturaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturaPayload>;
                };
                createMany: {
                    args: Prisma.FacturaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FacturaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturaPayload>[];
                };
                delete: {
                    args: Prisma.FacturaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturaPayload>;
                };
                update: {
                    args: Prisma.FacturaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturaPayload>;
                };
                deleteMany: {
                    args: Prisma.FacturaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FacturaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FacturaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturaPayload>[];
                };
                upsert: {
                    args: Prisma.FacturaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturaPayload>;
                };
                aggregate: {
                    args: Prisma.FacturaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFactura>;
                };
                groupBy: {
                    args: Prisma.FacturaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FacturaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FacturaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FacturaCountAggregateOutputType> | number;
                };
            };
        };
        Abono: {
            payload: Prisma.$AbonoPayload<ExtArgs>;
            fields: Prisma.AbonoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AbonoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbonoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AbonoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbonoPayload>;
                };
                findFirst: {
                    args: Prisma.AbonoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbonoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AbonoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbonoPayload>;
                };
                findMany: {
                    args: Prisma.AbonoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbonoPayload>[];
                };
                create: {
                    args: Prisma.AbonoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbonoPayload>;
                };
                createMany: {
                    args: Prisma.AbonoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AbonoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbonoPayload>[];
                };
                delete: {
                    args: Prisma.AbonoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbonoPayload>;
                };
                update: {
                    args: Prisma.AbonoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbonoPayload>;
                };
                deleteMany: {
                    args: Prisma.AbonoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AbonoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AbonoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbonoPayload>[];
                };
                upsert: {
                    args: Prisma.AbonoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbonoPayload>;
                };
                aggregate: {
                    args: Prisma.AbonoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAbono>;
                };
                groupBy: {
                    args: Prisma.AbonoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AbonoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AbonoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AbonoCountAggregateOutputType> | number;
                };
            };
        };
        TipoPrenda: {
            payload: Prisma.$TipoPrendaPayload<ExtArgs>;
            fields: Prisma.TipoPrendaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TipoPrendaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoPrendaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TipoPrendaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoPrendaPayload>;
                };
                findFirst: {
                    args: Prisma.TipoPrendaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoPrendaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TipoPrendaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoPrendaPayload>;
                };
                findMany: {
                    args: Prisma.TipoPrendaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoPrendaPayload>[];
                };
                create: {
                    args: Prisma.TipoPrendaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoPrendaPayload>;
                };
                createMany: {
                    args: Prisma.TipoPrendaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TipoPrendaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoPrendaPayload>[];
                };
                delete: {
                    args: Prisma.TipoPrendaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoPrendaPayload>;
                };
                update: {
                    args: Prisma.TipoPrendaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoPrendaPayload>;
                };
                deleteMany: {
                    args: Prisma.TipoPrendaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TipoPrendaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TipoPrendaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoPrendaPayload>[];
                };
                upsert: {
                    args: Prisma.TipoPrendaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoPrendaPayload>;
                };
                aggregate: {
                    args: Prisma.TipoPrendaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTipoPrenda>;
                };
                groupBy: {
                    args: Prisma.TipoPrendaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TipoPrendaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TipoPrendaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TipoPrendaCountAggregateOutputType> | number;
                };
            };
        };
        TipoUrgencia: {
            payload: Prisma.$TipoUrgenciaPayload<ExtArgs>;
            fields: Prisma.TipoUrgenciaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TipoUrgenciaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoUrgenciaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TipoUrgenciaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoUrgenciaPayload>;
                };
                findFirst: {
                    args: Prisma.TipoUrgenciaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoUrgenciaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TipoUrgenciaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoUrgenciaPayload>;
                };
                findMany: {
                    args: Prisma.TipoUrgenciaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoUrgenciaPayload>[];
                };
                create: {
                    args: Prisma.TipoUrgenciaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoUrgenciaPayload>;
                };
                createMany: {
                    args: Prisma.TipoUrgenciaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TipoUrgenciaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoUrgenciaPayload>[];
                };
                delete: {
                    args: Prisma.TipoUrgenciaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoUrgenciaPayload>;
                };
                update: {
                    args: Prisma.TipoUrgenciaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoUrgenciaPayload>;
                };
                deleteMany: {
                    args: Prisma.TipoUrgenciaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TipoUrgenciaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TipoUrgenciaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoUrgenciaPayload>[];
                };
                upsert: {
                    args: Prisma.TipoUrgenciaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoUrgenciaPayload>;
                };
                aggregate: {
                    args: Prisma.TipoUrgenciaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTipoUrgencia>;
                };
                groupBy: {
                    args: Prisma.TipoUrgenciaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TipoUrgenciaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TipoUrgenciaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TipoUrgenciaCountAggregateOutputType> | number;
                };
            };
        };
        Prenda: {
            payload: Prisma.$PrendaPayload<ExtArgs>;
            fields: Prisma.PrendaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PrendaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PrendaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaPayload>;
                };
                findFirst: {
                    args: Prisma.PrendaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PrendaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaPayload>;
                };
                findMany: {
                    args: Prisma.PrendaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaPayload>[];
                };
                create: {
                    args: Prisma.PrendaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaPayload>;
                };
                createMany: {
                    args: Prisma.PrendaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PrendaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaPayload>[];
                };
                delete: {
                    args: Prisma.PrendaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaPayload>;
                };
                update: {
                    args: Prisma.PrendaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaPayload>;
                };
                deleteMany: {
                    args: Prisma.PrendaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PrendaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PrendaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaPayload>[];
                };
                upsert: {
                    args: Prisma.PrendaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaPayload>;
                };
                aggregate: {
                    args: Prisma.PrendaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePrenda>;
                };
                groupBy: {
                    args: Prisma.PrendaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PrendaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PrendaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PrendaCountAggregateOutputType> | number;
                };
            };
        };
        CatalogoServicio: {
            payload: Prisma.$CatalogoServicioPayload<ExtArgs>;
            fields: Prisma.CatalogoServicioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CatalogoServicioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CatalogoServicioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CatalogoServicioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CatalogoServicioPayload>;
                };
                findFirst: {
                    args: Prisma.CatalogoServicioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CatalogoServicioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CatalogoServicioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CatalogoServicioPayload>;
                };
                findMany: {
                    args: Prisma.CatalogoServicioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CatalogoServicioPayload>[];
                };
                create: {
                    args: Prisma.CatalogoServicioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CatalogoServicioPayload>;
                };
                createMany: {
                    args: Prisma.CatalogoServicioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CatalogoServicioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CatalogoServicioPayload>[];
                };
                delete: {
                    args: Prisma.CatalogoServicioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CatalogoServicioPayload>;
                };
                update: {
                    args: Prisma.CatalogoServicioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CatalogoServicioPayload>;
                };
                deleteMany: {
                    args: Prisma.CatalogoServicioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CatalogoServicioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CatalogoServicioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CatalogoServicioPayload>[];
                };
                upsert: {
                    args: Prisma.CatalogoServicioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CatalogoServicioPayload>;
                };
                aggregate: {
                    args: Prisma.CatalogoServicioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCatalogoServicio>;
                };
                groupBy: {
                    args: Prisma.CatalogoServicioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CatalogoServicioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CatalogoServicioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CatalogoServicioCountAggregateOutputType> | number;
                };
            };
        };
        CategoriaFactorCobro: {
            payload: Prisma.$CategoriaFactorCobroPayload<ExtArgs>;
            fields: Prisma.CategoriaFactorCobroFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CategoriaFactorCobroFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaFactorCobroPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CategoriaFactorCobroFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaFactorCobroPayload>;
                };
                findFirst: {
                    args: Prisma.CategoriaFactorCobroFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaFactorCobroPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CategoriaFactorCobroFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaFactorCobroPayload>;
                };
                findMany: {
                    args: Prisma.CategoriaFactorCobroFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaFactorCobroPayload>[];
                };
                create: {
                    args: Prisma.CategoriaFactorCobroCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaFactorCobroPayload>;
                };
                createMany: {
                    args: Prisma.CategoriaFactorCobroCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CategoriaFactorCobroCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaFactorCobroPayload>[];
                };
                delete: {
                    args: Prisma.CategoriaFactorCobroDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaFactorCobroPayload>;
                };
                update: {
                    args: Prisma.CategoriaFactorCobroUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaFactorCobroPayload>;
                };
                deleteMany: {
                    args: Prisma.CategoriaFactorCobroDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CategoriaFactorCobroUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CategoriaFactorCobroUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaFactorCobroPayload>[];
                };
                upsert: {
                    args: Prisma.CategoriaFactorCobroUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaFactorCobroPayload>;
                };
                aggregate: {
                    args: Prisma.CategoriaFactorCobroAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategoriaFactorCobro>;
                };
                groupBy: {
                    args: Prisma.CategoriaFactorCobroGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriaFactorCobroGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CategoriaFactorCobroCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriaFactorCobroCountAggregateOutputType> | number;
                };
            };
        };
        FactorCobro: {
            payload: Prisma.$FactorCobroPayload<ExtArgs>;
            fields: Prisma.FactorCobroFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FactorCobroFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FactorCobroPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FactorCobroFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FactorCobroPayload>;
                };
                findFirst: {
                    args: Prisma.FactorCobroFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FactorCobroPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FactorCobroFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FactorCobroPayload>;
                };
                findMany: {
                    args: Prisma.FactorCobroFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FactorCobroPayload>[];
                };
                create: {
                    args: Prisma.FactorCobroCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FactorCobroPayload>;
                };
                createMany: {
                    args: Prisma.FactorCobroCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FactorCobroCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FactorCobroPayload>[];
                };
                delete: {
                    args: Prisma.FactorCobroDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FactorCobroPayload>;
                };
                update: {
                    args: Prisma.FactorCobroUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FactorCobroPayload>;
                };
                deleteMany: {
                    args: Prisma.FactorCobroDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FactorCobroUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FactorCobroUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FactorCobroPayload>[];
                };
                upsert: {
                    args: Prisma.FactorCobroUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FactorCobroPayload>;
                };
                aggregate: {
                    args: Prisma.FactorCobroAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFactorCobro>;
                };
                groupBy: {
                    args: Prisma.FactorCobroGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FactorCobroGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FactorCobroCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FactorCobroCountAggregateOutputType> | number;
                };
            };
        };
        PrendaServicio: {
            payload: Prisma.$PrendaServicioPayload<ExtArgs>;
            fields: Prisma.PrendaServicioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PrendaServicioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaServicioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PrendaServicioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaServicioPayload>;
                };
                findFirst: {
                    args: Prisma.PrendaServicioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaServicioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PrendaServicioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaServicioPayload>;
                };
                findMany: {
                    args: Prisma.PrendaServicioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaServicioPayload>[];
                };
                create: {
                    args: Prisma.PrendaServicioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaServicioPayload>;
                };
                createMany: {
                    args: Prisma.PrendaServicioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PrendaServicioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaServicioPayload>[];
                };
                delete: {
                    args: Prisma.PrendaServicioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaServicioPayload>;
                };
                update: {
                    args: Prisma.PrendaServicioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaServicioPayload>;
                };
                deleteMany: {
                    args: Prisma.PrendaServicioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PrendaServicioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PrendaServicioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaServicioPayload>[];
                };
                upsert: {
                    args: Prisma.PrendaServicioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrendaServicioPayload>;
                };
                aggregate: {
                    args: Prisma.PrendaServicioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePrendaServicio>;
                };
                groupBy: {
                    args: Prisma.PrendaServicioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PrendaServicioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PrendaServicioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PrendaServicioCountAggregateOutputType> | number;
                };
            };
        };
        Inventario: {
            payload: Prisma.$InventarioPayload<ExtArgs>;
            fields: Prisma.InventarioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InventarioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InventarioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload>;
                };
                findFirst: {
                    args: Prisma.InventarioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InventarioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload>;
                };
                findMany: {
                    args: Prisma.InventarioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload>[];
                };
                create: {
                    args: Prisma.InventarioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload>;
                };
                createMany: {
                    args: Prisma.InventarioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InventarioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload>[];
                };
                delete: {
                    args: Prisma.InventarioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload>;
                };
                update: {
                    args: Prisma.InventarioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload>;
                };
                deleteMany: {
                    args: Prisma.InventarioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InventarioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InventarioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload>[];
                };
                upsert: {
                    args: Prisma.InventarioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload>;
                };
                aggregate: {
                    args: Prisma.InventarioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInventario>;
                };
                groupBy: {
                    args: Prisma.InventarioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InventarioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InventarioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InventarioCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
        Configuracion: {
            payload: Prisma.$ConfiguracionPayload<ExtArgs>;
            fields: Prisma.ConfiguracionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConfiguracionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConfiguracionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload>;
                };
                findFirst: {
                    args: Prisma.ConfiguracionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConfiguracionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload>;
                };
                findMany: {
                    args: Prisma.ConfiguracionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload>[];
                };
                create: {
                    args: Prisma.ConfiguracionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload>;
                };
                createMany: {
                    args: Prisma.ConfiguracionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConfiguracionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload>[];
                };
                delete: {
                    args: Prisma.ConfiguracionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload>;
                };
                update: {
                    args: Prisma.ConfiguracionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload>;
                };
                deleteMany: {
                    args: Prisma.ConfiguracionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConfiguracionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConfiguracionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload>[];
                };
                upsert: {
                    args: Prisma.ConfiguracionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfiguracionPayload>;
                };
                aggregate: {
                    args: Prisma.ConfiguracionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConfiguracion>;
                };
                groupBy: {
                    args: Prisma.ConfiguracionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConfiguracionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConfiguracionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConfiguracionCountAggregateOutputType> | number;
                };
            };
        };
        Anuncio: {
            payload: Prisma.$AnuncioPayload<ExtArgs>;
            fields: Prisma.AnuncioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AnuncioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AnuncioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioPayload>;
                };
                findFirst: {
                    args: Prisma.AnuncioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AnuncioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioPayload>;
                };
                findMany: {
                    args: Prisma.AnuncioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioPayload>[];
                };
                create: {
                    args: Prisma.AnuncioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioPayload>;
                };
                createMany: {
                    args: Prisma.AnuncioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AnuncioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioPayload>[];
                };
                delete: {
                    args: Prisma.AnuncioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioPayload>;
                };
                update: {
                    args: Prisma.AnuncioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioPayload>;
                };
                deleteMany: {
                    args: Prisma.AnuncioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AnuncioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AnuncioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioPayload>[];
                };
                upsert: {
                    args: Prisma.AnuncioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioPayload>;
                };
                aggregate: {
                    args: Prisma.AnuncioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnuncio>;
                };
                groupBy: {
                    args: Prisma.AnuncioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnuncioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AnuncioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnuncioCountAggregateOutputType> | number;
                };
            };
        };
        AnuncioRespuesta: {
            payload: Prisma.$AnuncioRespuestaPayload<ExtArgs>;
            fields: Prisma.AnuncioRespuestaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AnuncioRespuestaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioRespuestaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AnuncioRespuestaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioRespuestaPayload>;
                };
                findFirst: {
                    args: Prisma.AnuncioRespuestaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioRespuestaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AnuncioRespuestaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioRespuestaPayload>;
                };
                findMany: {
                    args: Prisma.AnuncioRespuestaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioRespuestaPayload>[];
                };
                create: {
                    args: Prisma.AnuncioRespuestaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioRespuestaPayload>;
                };
                createMany: {
                    args: Prisma.AnuncioRespuestaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AnuncioRespuestaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioRespuestaPayload>[];
                };
                delete: {
                    args: Prisma.AnuncioRespuestaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioRespuestaPayload>;
                };
                update: {
                    args: Prisma.AnuncioRespuestaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioRespuestaPayload>;
                };
                deleteMany: {
                    args: Prisma.AnuncioRespuestaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AnuncioRespuestaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AnuncioRespuestaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioRespuestaPayload>[];
                };
                upsert: {
                    args: Prisma.AnuncioRespuestaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnuncioRespuestaPayload>;
                };
                aggregate: {
                    args: Prisma.AnuncioRespuestaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnuncioRespuesta>;
                };
                groupBy: {
                    args: Prisma.AnuncioRespuestaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnuncioRespuestaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AnuncioRespuestaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnuncioRespuestaCountAggregateOutputType> | number;
                };
            };
        };
        Material: {
            payload: Prisma.$MaterialPayload<ExtArgs>;
            fields: Prisma.MaterialFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MaterialFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload>;
                };
                findFirst: {
                    args: Prisma.MaterialFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload>;
                };
                findMany: {
                    args: Prisma.MaterialFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload>[];
                };
                create: {
                    args: Prisma.MaterialCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload>;
                };
                createMany: {
                    args: Prisma.MaterialCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MaterialCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload>[];
                };
                delete: {
                    args: Prisma.MaterialDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload>;
                };
                update: {
                    args: Prisma.MaterialUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload>;
                };
                deleteMany: {
                    args: Prisma.MaterialDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MaterialUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MaterialUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload>[];
                };
                upsert: {
                    args: Prisma.MaterialUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialPayload>;
                };
                aggregate: {
                    args: Prisma.MaterialAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMaterial>;
                };
                groupBy: {
                    args: Prisma.MaterialGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MaterialGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MaterialCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MaterialCountAggregateOutputType> | number;
                };
            };
        };
        TipoArreglo: {
            payload: Prisma.$TipoArregloPayload<ExtArgs>;
            fields: Prisma.TipoArregloFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TipoArregloFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoArregloPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TipoArregloFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoArregloPayload>;
                };
                findFirst: {
                    args: Prisma.TipoArregloFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoArregloPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TipoArregloFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoArregloPayload>;
                };
                findMany: {
                    args: Prisma.TipoArregloFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoArregloPayload>[];
                };
                create: {
                    args: Prisma.TipoArregloCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoArregloPayload>;
                };
                createMany: {
                    args: Prisma.TipoArregloCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TipoArregloCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoArregloPayload>[];
                };
                delete: {
                    args: Prisma.TipoArregloDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoArregloPayload>;
                };
                update: {
                    args: Prisma.TipoArregloUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoArregloPayload>;
                };
                deleteMany: {
                    args: Prisma.TipoArregloDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TipoArregloUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TipoArregloUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoArregloPayload>[];
                };
                upsert: {
                    args: Prisma.TipoArregloUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TipoArregloPayload>;
                };
                aggregate: {
                    args: Prisma.TipoArregloAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTipoArreglo>;
                };
                groupBy: {
                    args: Prisma.TipoArregloGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TipoArregloGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TipoArregloCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TipoArregloCountAggregateOutputType> | number;
                };
            };
        };
        Zona: {
            payload: Prisma.$ZonaPayload<ExtArgs>;
            fields: Prisma.ZonaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ZonaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZonaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ZonaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZonaPayload>;
                };
                findFirst: {
                    args: Prisma.ZonaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZonaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ZonaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZonaPayload>;
                };
                findMany: {
                    args: Prisma.ZonaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZonaPayload>[];
                };
                create: {
                    args: Prisma.ZonaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZonaPayload>;
                };
                createMany: {
                    args: Prisma.ZonaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ZonaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZonaPayload>[];
                };
                delete: {
                    args: Prisma.ZonaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZonaPayload>;
                };
                update: {
                    args: Prisma.ZonaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZonaPayload>;
                };
                deleteMany: {
                    args: Prisma.ZonaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ZonaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ZonaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZonaPayload>[];
                };
                upsert: {
                    args: Prisma.ZonaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZonaPayload>;
                };
                aggregate: {
                    args: Prisma.ZonaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateZona>;
                };
                groupBy: {
                    args: Prisma.ZonaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ZonaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ZonaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ZonaCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
    readonly porcentajeDificultad: "porcentajeDificultad";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TipoPrendaScalarFieldEnum = (typeof TipoPrendaScalarFieldEnum)[keyof typeof TipoPrendaScalarFieldEnum];
export declare const TipoUrgenciaScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly porcentajeRecargo: "porcentajeRecargo";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TipoUrgenciaScalarFieldEnum = (typeof TipoUrgenciaScalarFieldEnum)[keyof typeof TipoUrgenciaScalarFieldEnum];
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
    readonly tipoUrgenciaId: "tipoUrgenciaId";
    readonly porcentajeAtencionAplicado: "porcentajeAtencionAplicado";
};
export type PrendaScalarFieldEnum = (typeof PrendaScalarFieldEnum)[keyof typeof PrendaScalarFieldEnum];
export declare const CatalogoServicioScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly categoria: "categoria";
    readonly tipoEspecifico: "tipoEspecifico";
    readonly medidaBase: "medidaBase";
    readonly tiempoBase: "tiempoBase";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly zonaId: "zonaId";
};
export type CatalogoServicioScalarFieldEnum = (typeof CatalogoServicioScalarFieldEnum)[keyof typeof CatalogoServicioScalarFieldEnum];
export declare const CategoriaFactorCobroScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly activa: "activa";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CategoriaFactorCobroScalarFieldEnum = (typeof CategoriaFactorCobroScalarFieldEnum)[keyof typeof CategoriaFactorCobroScalarFieldEnum];
export declare const FactorCobroScalarFieldEnum: {
    readonly id: "id";
    readonly categoriaId: "categoriaId";
    readonly nombre: "nombre";
    readonly valor: "valor";
    readonly tipo: "tipo";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FactorCobroScalarFieldEnum = (typeof FactorCobroScalarFieldEnum)[keyof typeof FactorCobroScalarFieldEnum];
export declare const PrendaServicioScalarFieldEnum: {
    readonly id: "id";
    readonly prendaId: "prendaId";
    readonly servicioId: "servicioId";
    readonly medidaEntregada: "medidaEntregada";
    readonly tiempoCalculado: "tiempoCalculado";
    readonly valorPorTiempo: "valorPorTiempo";
    readonly valorFactoresCobro: "valorFactoresCobro";
    readonly precioBruto: "precioBruto";
    readonly precioFinal: "precioFinal";
    readonly observaciones: "observaciones";
    readonly detallesCalculo: "detallesCalculo";
    readonly createdAt: "createdAt";
    readonly materialId: "materialId";
    readonly tipoArregloId: "tipoArregloId";
    readonly zonaId: "zonaId";
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
export declare const AnuncioScalarFieldEnum: {
    readonly id: "id";
    readonly sedeId: "sedeId";
    readonly adminId: "adminId";
    readonly mensaje: "mensaje";
    readonly createdAt: "createdAt";
};
export type AnuncioScalarFieldEnum = (typeof AnuncioScalarFieldEnum)[keyof typeof AnuncioScalarFieldEnum];
export declare const AnuncioRespuestaScalarFieldEnum: {
    readonly id: "id";
    readonly anuncioId: "anuncioId";
    readonly usuarioId: "usuarioId";
    readonly respuesta: "respuesta";
    readonly leidoAt: "leidoAt";
};
export type AnuncioRespuestaScalarFieldEnum = (typeof AnuncioRespuestaScalarFieldEnum)[keyof typeof AnuncioRespuestaScalarFieldEnum];
export declare const MaterialScalarFieldEnum: {
    readonly id: "id";
    readonly descripcion: "descripcion";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum];
export declare const TipoArregloScalarFieldEnum: {
    readonly id: "id";
    readonly descripcion: "descripcion";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TipoArregloScalarFieldEnum = (typeof TipoArregloScalarFieldEnum)[keyof typeof TipoArregloScalarFieldEnum];
export declare const ZonaScalarFieldEnum: {
    readonly id: "id";
    readonly descripcion: "descripcion";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ZonaScalarFieldEnum = (typeof ZonaScalarFieldEnum)[keyof typeof ZonaScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>;
export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>;
export type EnumTipoJornadaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoJornada'>;
export type ListEnumTipoJornadaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoJornada[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type EnumEstadoPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoPago'>;
export type ListEnumEstadoPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoPago[]'>;
export type EnumMetodoPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoPago'>;
export type ListEnumMetodoPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoPago[]'>;
export type EnumEstadoPrendaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoPrenda'>;
export type ListEnumEstadoPrendaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoPrenda[]'>;
export type EnumTipoFactorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoFactor'>;
export type ListEnumTipoFactorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoFactor[]'>;
export type EnumAccionAuditoriaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccionAuditoria'>;
export type ListEnumAccionAuditoriaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccionAuditoria[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    sede?: Prisma.SedeOmit;
    usuario?: Prisma.UsuarioOmit;
    registroJornada?: Prisma.RegistroJornadaOmit;
    cliente?: Prisma.ClienteOmit;
    factura?: Prisma.FacturaOmit;
    abono?: Prisma.AbonoOmit;
    tipoPrenda?: Prisma.TipoPrendaOmit;
    tipoUrgencia?: Prisma.TipoUrgenciaOmit;
    prenda?: Prisma.PrendaOmit;
    catalogoServicio?: Prisma.CatalogoServicioOmit;
    categoriaFactorCobro?: Prisma.CategoriaFactorCobroOmit;
    factorCobro?: Prisma.FactorCobroOmit;
    prendaServicio?: Prisma.PrendaServicioOmit;
    inventario?: Prisma.InventarioOmit;
    auditLog?: Prisma.AuditLogOmit;
    configuracion?: Prisma.ConfiguracionOmit;
    anuncio?: Prisma.AnuncioOmit;
    anuncioRespuesta?: Prisma.AnuncioRespuestaOmit;
    material?: Prisma.MaterialOmit;
    tipoArreglo?: Prisma.TipoArregloOmit;
    zona?: Prisma.ZonaOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
