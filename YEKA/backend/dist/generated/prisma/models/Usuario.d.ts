import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UsuarioModel = runtime.Types.Result.DefaultSelection<Prisma.$UsuarioPayload>;
export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null;
    _avg: UsuarioAvgAggregateOutputType | null;
    _sum: UsuarioSumAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
export type UsuarioAvgAggregateOutputType = {
    id: number | null;
    sedeId: number | null;
};
export type UsuarioSumAggregateOutputType = {
    id: number | null;
    sedeId: number | null;
};
export type UsuarioMinAggregateOutputType = {
    id: number | null;
    sedeId: number | null;
    nombre: string | null;
    dni: string | null;
    telefono: string | null;
    email: string | null;
    password: string | null;
    pinAcceso: string | null;
    rol: $Enums.Rol | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UsuarioMaxAggregateOutputType = {
    id: number | null;
    sedeId: number | null;
    nombre: string | null;
    dni: string | null;
    telefono: string | null;
    email: string | null;
    password: string | null;
    pinAcceso: string | null;
    rol: $Enums.Rol | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UsuarioCountAggregateOutputType = {
    id: number;
    sedeId: number;
    nombre: number;
    dni: number;
    telefono: number;
    email: number;
    password: number;
    pinAcceso: number;
    rol: number;
    activo: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UsuarioAvgAggregateInputType = {
    id?: true;
    sedeId?: true;
};
export type UsuarioSumAggregateInputType = {
    id?: true;
    sedeId?: true;
};
export type UsuarioMinAggregateInputType = {
    id?: true;
    sedeId?: true;
    nombre?: true;
    dni?: true;
    telefono?: true;
    email?: true;
    password?: true;
    pinAcceso?: true;
    rol?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UsuarioMaxAggregateInputType = {
    id?: true;
    sedeId?: true;
    nombre?: true;
    dni?: true;
    telefono?: true;
    email?: true;
    password?: true;
    pinAcceso?: true;
    rol?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UsuarioCountAggregateInputType = {
    id?: true;
    sedeId?: true;
    nombre?: true;
    dni?: true;
    telefono?: true;
    email?: true;
    password?: true;
    pinAcceso?: true;
    rol?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UsuarioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsuarioCountAggregateInputType;
    _avg?: UsuarioAvgAggregateInputType;
    _sum?: UsuarioSumAggregateInputType;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsuario[P]> : Prisma.GetScalarType<T[P], AggregateUsuario[P]>;
};
export type UsuarioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithAggregationInput | Prisma.UsuarioOrderByWithAggregationInput[];
    by: Prisma.UsuarioScalarFieldEnum[] | Prisma.UsuarioScalarFieldEnum;
    having?: Prisma.UsuarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsuarioCountAggregateInputType | true;
    _avg?: UsuarioAvgAggregateInputType;
    _sum?: UsuarioSumAggregateInputType;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type UsuarioGroupByOutputType = {
    id: number;
    sedeId: number;
    nombre: string;
    dni: string | null;
    telefono: string | null;
    email: string;
    password: string;
    pinAcceso: string | null;
    rol: $Enums.Rol;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: UsuarioCountAggregateOutputType | null;
    _avg: UsuarioAvgAggregateOutputType | null;
    _sum: UsuarioSumAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
export type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsuarioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]>;
}>>;
export type UsuarioWhereInput = {
    AND?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    OR?: Prisma.UsuarioWhereInput[];
    NOT?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    id?: Prisma.IntFilter<"Usuario"> | number;
    sedeId?: Prisma.IntFilter<"Usuario"> | number;
    nombre?: Prisma.StringFilter<"Usuario"> | string;
    dni?: Prisma.StringNullableFilter<"Usuario"> | string | null;
    telefono?: Prisma.StringNullableFilter<"Usuario"> | string | null;
    email?: Prisma.StringFilter<"Usuario"> | string;
    password?: Prisma.StringFilter<"Usuario"> | string;
    pinAcceso?: Prisma.StringNullableFilter<"Usuario"> | string | null;
    rol?: Prisma.EnumRolFilter<"Usuario"> | $Enums.Rol;
    activo?: Prisma.BoolFilter<"Usuario"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    sede?: Prisma.XOR<Prisma.SedeScalarRelationFilter, Prisma.SedeWhereInput>;
    jornadas?: Prisma.RegistroJornadaListRelationFilter;
    prendasTaller?: Prisma.PrendaListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
};
export type UsuarioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    dni?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    pinAcceso?: Prisma.SortOrderInput | Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    sede?: Prisma.SedeOrderByWithRelationInput;
    jornadas?: Prisma.RegistroJornadaOrderByRelationAggregateInput;
    prendasTaller?: Prisma.PrendaOrderByRelationAggregateInput;
    auditLogs?: Prisma.AuditLogOrderByRelationAggregateInput;
};
export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    dni?: string;
    email?: string;
    AND?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    OR?: Prisma.UsuarioWhereInput[];
    NOT?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    sedeId?: Prisma.IntFilter<"Usuario"> | number;
    nombre?: Prisma.StringFilter<"Usuario"> | string;
    telefono?: Prisma.StringNullableFilter<"Usuario"> | string | null;
    password?: Prisma.StringFilter<"Usuario"> | string;
    pinAcceso?: Prisma.StringNullableFilter<"Usuario"> | string | null;
    rol?: Prisma.EnumRolFilter<"Usuario"> | $Enums.Rol;
    activo?: Prisma.BoolFilter<"Usuario"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    sede?: Prisma.XOR<Prisma.SedeScalarRelationFilter, Prisma.SedeWhereInput>;
    jornadas?: Prisma.RegistroJornadaListRelationFilter;
    prendasTaller?: Prisma.PrendaListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
}, "id" | "dni" | "email">;
export type UsuarioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    dni?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    pinAcceso?: Prisma.SortOrderInput | Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UsuarioCountOrderByAggregateInput;
    _avg?: Prisma.UsuarioAvgOrderByAggregateInput;
    _max?: Prisma.UsuarioMaxOrderByAggregateInput;
    _min?: Prisma.UsuarioMinOrderByAggregateInput;
    _sum?: Prisma.UsuarioSumOrderByAggregateInput;
};
export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsuarioScalarWhereWithAggregatesInput | Prisma.UsuarioScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsuarioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsuarioScalarWhereWithAggregatesInput | Prisma.UsuarioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Usuario"> | number;
    sedeId?: Prisma.IntWithAggregatesFilter<"Usuario"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    dni?: Prisma.StringNullableWithAggregatesFilter<"Usuario"> | string | null;
    telefono?: Prisma.StringNullableWithAggregatesFilter<"Usuario"> | string | null;
    email?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    password?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    pinAcceso?: Prisma.StringNullableWithAggregatesFilter<"Usuario"> | string | null;
    rol?: Prisma.EnumRolWithAggregatesFilter<"Usuario"> | $Enums.Rol;
    activo?: Prisma.BoolWithAggregatesFilter<"Usuario"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Usuario"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Usuario"> | Date | string;
};
export type UsuarioCreateInput = {
    nombre: string;
    dni?: string | null;
    telefono?: string | null;
    email: string;
    password: string;
    pinAcceso?: string | null;
    rol: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sede: Prisma.SedeCreateNestedOneWithoutUsuariosInput;
    jornadas?: Prisma.RegistroJornadaCreateNestedManyWithoutUsuarioInput;
    prendasTaller?: Prisma.PrendaCreateNestedManyWithoutUsuarioTallerInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateInput = {
    id?: number;
    sedeId: number;
    nombre: string;
    dni?: string | null;
    telefono?: string | null;
    email: string;
    password: string;
    pinAcceso?: string | null;
    rol: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jornadas?: Prisma.RegistroJornadaUncheckedCreateNestedManyWithoutUsuarioInput;
    prendasTaller?: Prisma.PrendaUncheckedCreateNestedManyWithoutUsuarioTallerInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    pinAcceso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sede?: Prisma.SedeUpdateOneRequiredWithoutUsuariosNestedInput;
    jornadas?: Prisma.RegistroJornadaUpdateManyWithoutUsuarioNestedInput;
    prendasTaller?: Prisma.PrendaUpdateManyWithoutUsuarioTallerNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    pinAcceso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jornadas?: Prisma.RegistroJornadaUncheckedUpdateManyWithoutUsuarioNestedInput;
    prendasTaller?: Prisma.PrendaUncheckedUpdateManyWithoutUsuarioTallerNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCreateManyInput = {
    id?: number;
    sedeId: number;
    nombre: string;
    dni?: string | null;
    telefono?: string | null;
    email: string;
    password: string;
    pinAcceso?: string | null;
    rol: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UsuarioUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    pinAcceso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuarioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    pinAcceso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuarioListRelationFilter = {
    every?: Prisma.UsuarioWhereInput;
    some?: Prisma.UsuarioWhereInput;
    none?: Prisma.UsuarioWhereInput;
};
export type UsuarioOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UsuarioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    dni?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    pinAcceso?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UsuarioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
};
export type UsuarioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    dni?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    pinAcceso?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UsuarioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    dni?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    pinAcceso?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UsuarioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
};
export type UsuarioScalarRelationFilter = {
    is?: Prisma.UsuarioWhereInput;
    isNot?: Prisma.UsuarioWhereInput;
};
export type UsuarioNullableScalarRelationFilter = {
    is?: Prisma.UsuarioWhereInput | null;
    isNot?: Prisma.UsuarioWhereInput | null;
};
export type UsuarioCreateNestedManyWithoutSedeInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutSedeInput, Prisma.UsuarioUncheckedCreateWithoutSedeInput> | Prisma.UsuarioCreateWithoutSedeInput[] | Prisma.UsuarioUncheckedCreateWithoutSedeInput[];
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutSedeInput | Prisma.UsuarioCreateOrConnectWithoutSedeInput[];
    createMany?: Prisma.UsuarioCreateManySedeInputEnvelope;
    connect?: Prisma.UsuarioWhereUniqueInput | Prisma.UsuarioWhereUniqueInput[];
};
export type UsuarioUncheckedCreateNestedManyWithoutSedeInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutSedeInput, Prisma.UsuarioUncheckedCreateWithoutSedeInput> | Prisma.UsuarioCreateWithoutSedeInput[] | Prisma.UsuarioUncheckedCreateWithoutSedeInput[];
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutSedeInput | Prisma.UsuarioCreateOrConnectWithoutSedeInput[];
    createMany?: Prisma.UsuarioCreateManySedeInputEnvelope;
    connect?: Prisma.UsuarioWhereUniqueInput | Prisma.UsuarioWhereUniqueInput[];
};
export type UsuarioUpdateManyWithoutSedeNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutSedeInput, Prisma.UsuarioUncheckedCreateWithoutSedeInput> | Prisma.UsuarioCreateWithoutSedeInput[] | Prisma.UsuarioUncheckedCreateWithoutSedeInput[];
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutSedeInput | Prisma.UsuarioCreateOrConnectWithoutSedeInput[];
    upsert?: Prisma.UsuarioUpsertWithWhereUniqueWithoutSedeInput | Prisma.UsuarioUpsertWithWhereUniqueWithoutSedeInput[];
    createMany?: Prisma.UsuarioCreateManySedeInputEnvelope;
    set?: Prisma.UsuarioWhereUniqueInput | Prisma.UsuarioWhereUniqueInput[];
    disconnect?: Prisma.UsuarioWhereUniqueInput | Prisma.UsuarioWhereUniqueInput[];
    delete?: Prisma.UsuarioWhereUniqueInput | Prisma.UsuarioWhereUniqueInput[];
    connect?: Prisma.UsuarioWhereUniqueInput | Prisma.UsuarioWhereUniqueInput[];
    update?: Prisma.UsuarioUpdateWithWhereUniqueWithoutSedeInput | Prisma.UsuarioUpdateWithWhereUniqueWithoutSedeInput[];
    updateMany?: Prisma.UsuarioUpdateManyWithWhereWithoutSedeInput | Prisma.UsuarioUpdateManyWithWhereWithoutSedeInput[];
    deleteMany?: Prisma.UsuarioScalarWhereInput | Prisma.UsuarioScalarWhereInput[];
};
export type UsuarioUncheckedUpdateManyWithoutSedeNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutSedeInput, Prisma.UsuarioUncheckedCreateWithoutSedeInput> | Prisma.UsuarioCreateWithoutSedeInput[] | Prisma.UsuarioUncheckedCreateWithoutSedeInput[];
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutSedeInput | Prisma.UsuarioCreateOrConnectWithoutSedeInput[];
    upsert?: Prisma.UsuarioUpsertWithWhereUniqueWithoutSedeInput | Prisma.UsuarioUpsertWithWhereUniqueWithoutSedeInput[];
    createMany?: Prisma.UsuarioCreateManySedeInputEnvelope;
    set?: Prisma.UsuarioWhereUniqueInput | Prisma.UsuarioWhereUniqueInput[];
    disconnect?: Prisma.UsuarioWhereUniqueInput | Prisma.UsuarioWhereUniqueInput[];
    delete?: Prisma.UsuarioWhereUniqueInput | Prisma.UsuarioWhereUniqueInput[];
    connect?: Prisma.UsuarioWhereUniqueInput | Prisma.UsuarioWhereUniqueInput[];
    update?: Prisma.UsuarioUpdateWithWhereUniqueWithoutSedeInput | Prisma.UsuarioUpdateWithWhereUniqueWithoutSedeInput[];
    updateMany?: Prisma.UsuarioUpdateManyWithWhereWithoutSedeInput | Prisma.UsuarioUpdateManyWithWhereWithoutSedeInput[];
    deleteMany?: Prisma.UsuarioScalarWhereInput | Prisma.UsuarioScalarWhereInput[];
};
export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol;
};
export type UsuarioCreateNestedOneWithoutJornadasInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutJornadasInput, Prisma.UsuarioUncheckedCreateWithoutJornadasInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutJornadasInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneRequiredWithoutJornadasNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutJornadasInput, Prisma.UsuarioUncheckedCreateWithoutJornadasInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutJornadasInput;
    upsert?: Prisma.UsuarioUpsertWithoutJornadasInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutJornadasInput, Prisma.UsuarioUpdateWithoutJornadasInput>, Prisma.UsuarioUncheckedUpdateWithoutJornadasInput>;
};
export type UsuarioCreateNestedOneWithoutPrendasTallerInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutPrendasTallerInput, Prisma.UsuarioUncheckedCreateWithoutPrendasTallerInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutPrendasTallerInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneWithoutPrendasTallerNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutPrendasTallerInput, Prisma.UsuarioUncheckedCreateWithoutPrendasTallerInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutPrendasTallerInput;
    upsert?: Prisma.UsuarioUpsertWithoutPrendasTallerInput;
    disconnect?: Prisma.UsuarioWhereInput | boolean;
    delete?: Prisma.UsuarioWhereInput | boolean;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutPrendasTallerInput, Prisma.UsuarioUpdateWithoutPrendasTallerInput>, Prisma.UsuarioUncheckedUpdateWithoutPrendasTallerInput>;
};
export type UsuarioCreateNestedOneWithoutAuditLogsInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutAuditLogsInput, Prisma.UsuarioUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutAuditLogsInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneWithoutAuditLogsNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutAuditLogsInput, Prisma.UsuarioUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutAuditLogsInput;
    upsert?: Prisma.UsuarioUpsertWithoutAuditLogsInput;
    disconnect?: Prisma.UsuarioWhereInput | boolean;
    delete?: Prisma.UsuarioWhereInput | boolean;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutAuditLogsInput, Prisma.UsuarioUpdateWithoutAuditLogsInput>, Prisma.UsuarioUncheckedUpdateWithoutAuditLogsInput>;
};
export type UsuarioCreateWithoutSedeInput = {
    nombre: string;
    dni?: string | null;
    telefono?: string | null;
    email: string;
    password: string;
    pinAcceso?: string | null;
    rol: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jornadas?: Prisma.RegistroJornadaCreateNestedManyWithoutUsuarioInput;
    prendasTaller?: Prisma.PrendaCreateNestedManyWithoutUsuarioTallerInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutSedeInput = {
    id?: number;
    nombre: string;
    dni?: string | null;
    telefono?: string | null;
    email: string;
    password: string;
    pinAcceso?: string | null;
    rol: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jornadas?: Prisma.RegistroJornadaUncheckedCreateNestedManyWithoutUsuarioInput;
    prendasTaller?: Prisma.PrendaUncheckedCreateNestedManyWithoutUsuarioTallerInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutSedeInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutSedeInput, Prisma.UsuarioUncheckedCreateWithoutSedeInput>;
};
export type UsuarioCreateManySedeInputEnvelope = {
    data: Prisma.UsuarioCreateManySedeInput | Prisma.UsuarioCreateManySedeInput[];
    skipDuplicates?: boolean;
};
export type UsuarioUpsertWithWhereUniqueWithoutSedeInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutSedeInput, Prisma.UsuarioUncheckedUpdateWithoutSedeInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutSedeInput, Prisma.UsuarioUncheckedCreateWithoutSedeInput>;
};
export type UsuarioUpdateWithWhereUniqueWithoutSedeInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutSedeInput, Prisma.UsuarioUncheckedUpdateWithoutSedeInput>;
};
export type UsuarioUpdateManyWithWhereWithoutSedeInput = {
    where: Prisma.UsuarioScalarWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateManyMutationInput, Prisma.UsuarioUncheckedUpdateManyWithoutSedeInput>;
};
export type UsuarioScalarWhereInput = {
    AND?: Prisma.UsuarioScalarWhereInput | Prisma.UsuarioScalarWhereInput[];
    OR?: Prisma.UsuarioScalarWhereInput[];
    NOT?: Prisma.UsuarioScalarWhereInput | Prisma.UsuarioScalarWhereInput[];
    id?: Prisma.IntFilter<"Usuario"> | number;
    sedeId?: Prisma.IntFilter<"Usuario"> | number;
    nombre?: Prisma.StringFilter<"Usuario"> | string;
    dni?: Prisma.StringNullableFilter<"Usuario"> | string | null;
    telefono?: Prisma.StringNullableFilter<"Usuario"> | string | null;
    email?: Prisma.StringFilter<"Usuario"> | string;
    password?: Prisma.StringFilter<"Usuario"> | string;
    pinAcceso?: Prisma.StringNullableFilter<"Usuario"> | string | null;
    rol?: Prisma.EnumRolFilter<"Usuario"> | $Enums.Rol;
    activo?: Prisma.BoolFilter<"Usuario"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
};
export type UsuarioCreateWithoutJornadasInput = {
    nombre: string;
    dni?: string | null;
    telefono?: string | null;
    email: string;
    password: string;
    pinAcceso?: string | null;
    rol: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sede: Prisma.SedeCreateNestedOneWithoutUsuariosInput;
    prendasTaller?: Prisma.PrendaCreateNestedManyWithoutUsuarioTallerInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutJornadasInput = {
    id?: number;
    sedeId: number;
    nombre: string;
    dni?: string | null;
    telefono?: string | null;
    email: string;
    password: string;
    pinAcceso?: string | null;
    rol: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prendasTaller?: Prisma.PrendaUncheckedCreateNestedManyWithoutUsuarioTallerInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutJornadasInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutJornadasInput, Prisma.UsuarioUncheckedCreateWithoutJornadasInput>;
};
export type UsuarioUpsertWithoutJornadasInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutJornadasInput, Prisma.UsuarioUncheckedUpdateWithoutJornadasInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutJornadasInput, Prisma.UsuarioUncheckedCreateWithoutJornadasInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutJornadasInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutJornadasInput, Prisma.UsuarioUncheckedUpdateWithoutJornadasInput>;
};
export type UsuarioUpdateWithoutJornadasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    pinAcceso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sede?: Prisma.SedeUpdateOneRequiredWithoutUsuariosNestedInput;
    prendasTaller?: Prisma.PrendaUpdateManyWithoutUsuarioTallerNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutJornadasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    pinAcceso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prendasTaller?: Prisma.PrendaUncheckedUpdateManyWithoutUsuarioTallerNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCreateWithoutPrendasTallerInput = {
    nombre: string;
    dni?: string | null;
    telefono?: string | null;
    email: string;
    password: string;
    pinAcceso?: string | null;
    rol: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sede: Prisma.SedeCreateNestedOneWithoutUsuariosInput;
    jornadas?: Prisma.RegistroJornadaCreateNestedManyWithoutUsuarioInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutPrendasTallerInput = {
    id?: number;
    sedeId: number;
    nombre: string;
    dni?: string | null;
    telefono?: string | null;
    email: string;
    password: string;
    pinAcceso?: string | null;
    rol: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jornadas?: Prisma.RegistroJornadaUncheckedCreateNestedManyWithoutUsuarioInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutPrendasTallerInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutPrendasTallerInput, Prisma.UsuarioUncheckedCreateWithoutPrendasTallerInput>;
};
export type UsuarioUpsertWithoutPrendasTallerInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutPrendasTallerInput, Prisma.UsuarioUncheckedUpdateWithoutPrendasTallerInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutPrendasTallerInput, Prisma.UsuarioUncheckedCreateWithoutPrendasTallerInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutPrendasTallerInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutPrendasTallerInput, Prisma.UsuarioUncheckedUpdateWithoutPrendasTallerInput>;
};
export type UsuarioUpdateWithoutPrendasTallerInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    pinAcceso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sede?: Prisma.SedeUpdateOneRequiredWithoutUsuariosNestedInput;
    jornadas?: Prisma.RegistroJornadaUpdateManyWithoutUsuarioNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutPrendasTallerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    pinAcceso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jornadas?: Prisma.RegistroJornadaUncheckedUpdateManyWithoutUsuarioNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCreateWithoutAuditLogsInput = {
    nombre: string;
    dni?: string | null;
    telefono?: string | null;
    email: string;
    password: string;
    pinAcceso?: string | null;
    rol: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sede: Prisma.SedeCreateNestedOneWithoutUsuariosInput;
    jornadas?: Prisma.RegistroJornadaCreateNestedManyWithoutUsuarioInput;
    prendasTaller?: Prisma.PrendaCreateNestedManyWithoutUsuarioTallerInput;
};
export type UsuarioUncheckedCreateWithoutAuditLogsInput = {
    id?: number;
    sedeId: number;
    nombre: string;
    dni?: string | null;
    telefono?: string | null;
    email: string;
    password: string;
    pinAcceso?: string | null;
    rol: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jornadas?: Prisma.RegistroJornadaUncheckedCreateNestedManyWithoutUsuarioInput;
    prendasTaller?: Prisma.PrendaUncheckedCreateNestedManyWithoutUsuarioTallerInput;
};
export type UsuarioCreateOrConnectWithoutAuditLogsInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutAuditLogsInput, Prisma.UsuarioUncheckedCreateWithoutAuditLogsInput>;
};
export type UsuarioUpsertWithoutAuditLogsInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutAuditLogsInput, Prisma.UsuarioUncheckedUpdateWithoutAuditLogsInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutAuditLogsInput, Prisma.UsuarioUncheckedCreateWithoutAuditLogsInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutAuditLogsInput, Prisma.UsuarioUncheckedUpdateWithoutAuditLogsInput>;
};
export type UsuarioUpdateWithoutAuditLogsInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    pinAcceso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sede?: Prisma.SedeUpdateOneRequiredWithoutUsuariosNestedInput;
    jornadas?: Prisma.RegistroJornadaUpdateManyWithoutUsuarioNestedInput;
    prendasTaller?: Prisma.PrendaUpdateManyWithoutUsuarioTallerNestedInput;
};
export type UsuarioUncheckedUpdateWithoutAuditLogsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    pinAcceso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jornadas?: Prisma.RegistroJornadaUncheckedUpdateManyWithoutUsuarioNestedInput;
    prendasTaller?: Prisma.PrendaUncheckedUpdateManyWithoutUsuarioTallerNestedInput;
};
export type UsuarioCreateManySedeInput = {
    id?: number;
    nombre: string;
    dni?: string | null;
    telefono?: string | null;
    email: string;
    password: string;
    pinAcceso?: string | null;
    rol: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UsuarioUpdateWithoutSedeInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    pinAcceso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jornadas?: Prisma.RegistroJornadaUpdateManyWithoutUsuarioNestedInput;
    prendasTaller?: Prisma.PrendaUpdateManyWithoutUsuarioTallerNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutSedeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    pinAcceso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jornadas?: Prisma.RegistroJornadaUncheckedUpdateManyWithoutUsuarioNestedInput;
    prendasTaller?: Prisma.PrendaUncheckedUpdateManyWithoutUsuarioTallerNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateManyWithoutSedeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    pinAcceso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuarioCountOutputType = {
    jornadas: number;
    prendasTaller: number;
    auditLogs: number;
};
export type UsuarioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jornadas?: boolean | UsuarioCountOutputTypeCountJornadasArgs;
    prendasTaller?: boolean | UsuarioCountOutputTypeCountPrendasTallerArgs;
    auditLogs?: boolean | UsuarioCountOutputTypeCountAuditLogsArgs;
};
export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioCountOutputTypeSelect<ExtArgs> | null;
};
export type UsuarioCountOutputTypeCountJornadasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegistroJornadaWhereInput;
};
export type UsuarioCountOutputTypeCountPrendasTallerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrendaWhereInput;
};
export type UsuarioCountOutputTypeCountAuditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
};
export type UsuarioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sedeId?: boolean;
    nombre?: boolean;
    dni?: boolean;
    telefono?: boolean;
    email?: boolean;
    password?: boolean;
    pinAcceso?: boolean;
    rol?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
    jornadas?: boolean | Prisma.Usuario$jornadasArgs<ExtArgs>;
    prendasTaller?: boolean | Prisma.Usuario$prendasTallerArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.Usuario$auditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sedeId?: boolean;
    nombre?: boolean;
    dni?: boolean;
    telefono?: boolean;
    email?: boolean;
    password?: boolean;
    pinAcceso?: boolean;
    rol?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sedeId?: boolean;
    nombre?: boolean;
    dni?: boolean;
    telefono?: boolean;
    email?: boolean;
    password?: boolean;
    pinAcceso?: boolean;
    rol?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectScalar = {
    id?: boolean;
    sedeId?: boolean;
    nombre?: boolean;
    dni?: boolean;
    telefono?: boolean;
    email?: boolean;
    password?: boolean;
    pinAcceso?: boolean;
    rol?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UsuarioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sedeId" | "nombre" | "dni" | "telefono" | "email" | "password" | "pinAcceso" | "rol" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>;
export type UsuarioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
    jornadas?: boolean | Prisma.Usuario$jornadasArgs<ExtArgs>;
    prendasTaller?: boolean | Prisma.Usuario$prendasTallerArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.Usuario$auditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
};
export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
};
export type $UsuarioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Usuario";
    objects: {
        sede: Prisma.$SedePayload<ExtArgs>;
        jornadas: Prisma.$RegistroJornadaPayload<ExtArgs>[];
        prendasTaller: Prisma.$PrendaPayload<ExtArgs>[];
        auditLogs: Prisma.$AuditLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        sedeId: number;
        nombre: string;
        dni: string | null;
        telefono: string | null;
        email: string;
        password: string;
        pinAcceso: string | null;
        rol: $Enums.Rol;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["usuario"]>;
    composites: {};
};
export type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsuarioPayload, S>;
export type UsuarioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsuarioCountAggregateInputType | true;
};
export interface UsuarioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Usuario'];
        meta: {
            name: 'Usuario';
        };
    };
    findUnique<T extends UsuarioFindUniqueArgs>(args: Prisma.SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UsuarioFindFirstArgs>(args?: Prisma.SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UsuarioFindManyArgs>(args?: Prisma.SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UsuarioCreateArgs>(args: Prisma.SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UsuarioCreateManyArgs>(args?: Prisma.SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UsuarioDeleteArgs>(args: Prisma.SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UsuarioUpdateArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UsuarioUpdateManyArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UsuarioUpsertArgs>(args: Prisma.SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UsuarioCountArgs>(args?: Prisma.Subset<T, UsuarioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsuarioCountAggregateOutputType> : number>;
    aggregate<T extends UsuarioAggregateArgs>(args: Prisma.Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>;
    groupBy<T extends UsuarioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsuarioGroupByArgs['orderBy'];
    } : {
        orderBy?: UsuarioGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UsuarioFieldRefs;
}
export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sede<T extends Prisma.SedeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SedeDefaultArgs<ExtArgs>>): Prisma.Prisma__SedeClient<runtime.Types.Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    jornadas<T extends Prisma.Usuario$jornadasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$jornadasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistroJornadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    prendasTaller<T extends Prisma.Usuario$prendasTallerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$prendasTallerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    auditLogs<T extends Prisma.Usuario$auditLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UsuarioFieldRefs {
    readonly id: Prisma.FieldRef<"Usuario", 'Int'>;
    readonly sedeId: Prisma.FieldRef<"Usuario", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Usuario", 'String'>;
    readonly dni: Prisma.FieldRef<"Usuario", 'String'>;
    readonly telefono: Prisma.FieldRef<"Usuario", 'String'>;
    readonly email: Prisma.FieldRef<"Usuario", 'String'>;
    readonly password: Prisma.FieldRef<"Usuario", 'String'>;
    readonly pinAcceso: Prisma.FieldRef<"Usuario", 'String'>;
    readonly rol: Prisma.FieldRef<"Usuario", 'Rol'>;
    readonly activo: Prisma.FieldRef<"Usuario", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Usuario", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Usuario", 'DateTime'>;
}
export type UsuarioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioCreateInput, Prisma.UsuarioUncheckedCreateInput>;
};
export type UsuarioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UsuarioCreateManyInput | Prisma.UsuarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsuarioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    data: Prisma.UsuarioCreateManyInput | Prisma.UsuarioCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UsuarioIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UsuarioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioUpdateInput, Prisma.UsuarioUncheckedUpdateInput>;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UsuarioUpdateManyMutationInput, Prisma.UsuarioUncheckedUpdateManyInput>;
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioUpdateManyMutationInput, Prisma.UsuarioUncheckedUpdateManyInput>;
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
    include?: Prisma.UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UsuarioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateInput, Prisma.UsuarioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UsuarioUpdateInput, Prisma.UsuarioUncheckedUpdateInput>;
};
export type UsuarioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type Usuario$jornadasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroJornadaSelect<ExtArgs> | null;
    omit?: Prisma.RegistroJornadaOmit<ExtArgs> | null;
    include?: Prisma.RegistroJornadaInclude<ExtArgs> | null;
    where?: Prisma.RegistroJornadaWhereInput;
    orderBy?: Prisma.RegistroJornadaOrderByWithRelationInput | Prisma.RegistroJornadaOrderByWithRelationInput[];
    cursor?: Prisma.RegistroJornadaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegistroJornadaScalarFieldEnum | Prisma.RegistroJornadaScalarFieldEnum[];
};
export type Usuario$prendasTallerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrendaSelect<ExtArgs> | null;
    omit?: Prisma.PrendaOmit<ExtArgs> | null;
    include?: Prisma.PrendaInclude<ExtArgs> | null;
    where?: Prisma.PrendaWhereInput;
    orderBy?: Prisma.PrendaOrderByWithRelationInput | Prisma.PrendaOrderByWithRelationInput[];
    cursor?: Prisma.PrendaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrendaScalarFieldEnum | Prisma.PrendaScalarFieldEnum[];
};
export type Usuario$auditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where?: Prisma.AuditLogWhereInput;
    orderBy?: Prisma.AuditLogOrderByWithRelationInput | Prisma.AuditLogOrderByWithRelationInput[];
    cursor?: Prisma.AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditLogScalarFieldEnum | Prisma.AuditLogScalarFieldEnum[];
};
export type UsuarioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
};
