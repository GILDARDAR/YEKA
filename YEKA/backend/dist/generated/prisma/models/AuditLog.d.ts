import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type AuditLogModel = runtime.Types.Result.DefaultSelection<Prisma.$AuditLogPayload>;
export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null;
    _avg: AuditLogAvgAggregateOutputType | null;
    _sum: AuditLogSumAggregateOutputType | null;
    _min: AuditLogMinAggregateOutputType | null;
    _max: AuditLogMaxAggregateOutputType | null;
};
export type AuditLogAvgAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
    entidadId: number | null;
};
export type AuditLogSumAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
    entidadId: number | null;
};
export type AuditLogMinAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
    accion: $Enums.AccionAuditoria | null;
    entidadAfectada: string | null;
    entidadId: number | null;
    leido: boolean | null;
    timestamp: Date | null;
};
export type AuditLogMaxAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
    accion: $Enums.AccionAuditoria | null;
    entidadAfectada: string | null;
    entidadId: number | null;
    leido: boolean | null;
    timestamp: Date | null;
};
export type AuditLogCountAggregateOutputType = {
    id: number;
    usuarioId: number;
    accion: number;
    entidadAfectada: number;
    entidadId: number;
    valorAnterior: number;
    valorNuevo: number;
    leido: number;
    timestamp: number;
    _all: number;
};
export type AuditLogAvgAggregateInputType = {
    id?: true;
    usuarioId?: true;
    entidadId?: true;
};
export type AuditLogSumAggregateInputType = {
    id?: true;
    usuarioId?: true;
    entidadId?: true;
};
export type AuditLogMinAggregateInputType = {
    id?: true;
    usuarioId?: true;
    accion?: true;
    entidadAfectada?: true;
    entidadId?: true;
    leido?: true;
    timestamp?: true;
};
export type AuditLogMaxAggregateInputType = {
    id?: true;
    usuarioId?: true;
    accion?: true;
    entidadAfectada?: true;
    entidadId?: true;
    leido?: true;
    timestamp?: true;
};
export type AuditLogCountAggregateInputType = {
    id?: true;
    usuarioId?: true;
    accion?: true;
    entidadAfectada?: true;
    entidadId?: true;
    valorAnterior?: true;
    valorNuevo?: true;
    leido?: true;
    timestamp?: true;
    _all?: true;
};
export type AuditLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
    orderBy?: Prisma.AuditLogOrderByWithRelationInput | Prisma.AuditLogOrderByWithRelationInput[];
    cursor?: Prisma.AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AuditLogCountAggregateInputType;
    _avg?: AuditLogAvgAggregateInputType;
    _sum?: AuditLogSumAggregateInputType;
    _min?: AuditLogMinAggregateInputType;
    _max?: AuditLogMaxAggregateInputType;
};
export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
    [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuditLog[P]> : Prisma.GetScalarType<T[P], AggregateAuditLog[P]>;
};
export type AuditLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
    orderBy?: Prisma.AuditLogOrderByWithAggregationInput | Prisma.AuditLogOrderByWithAggregationInput[];
    by: Prisma.AuditLogScalarFieldEnum[] | Prisma.AuditLogScalarFieldEnum;
    having?: Prisma.AuditLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuditLogCountAggregateInputType | true;
    _avg?: AuditLogAvgAggregateInputType;
    _sum?: AuditLogSumAggregateInputType;
    _min?: AuditLogMinAggregateInputType;
    _max?: AuditLogMaxAggregateInputType;
};
export type AuditLogGroupByOutputType = {
    id: number;
    usuarioId: number | null;
    accion: $Enums.AccionAuditoria;
    entidadAfectada: string;
    entidadId: number | null;
    valorAnterior: runtime.JsonValue | null;
    valorNuevo: runtime.JsonValue | null;
    leido: boolean;
    timestamp: Date;
    _count: AuditLogCountAggregateOutputType | null;
    _avg: AuditLogAvgAggregateOutputType | null;
    _sum: AuditLogSumAggregateOutputType | null;
    _min: AuditLogMinAggregateOutputType | null;
    _max: AuditLogMaxAggregateOutputType | null;
};
export type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AuditLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AuditLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AuditLogGroupByOutputType[P]>;
}>>;
export type AuditLogWhereInput = {
    AND?: Prisma.AuditLogWhereInput | Prisma.AuditLogWhereInput[];
    OR?: Prisma.AuditLogWhereInput[];
    NOT?: Prisma.AuditLogWhereInput | Prisma.AuditLogWhereInput[];
    id?: Prisma.IntFilter<"AuditLog"> | number;
    usuarioId?: Prisma.IntNullableFilter<"AuditLog"> | number | null;
    accion?: Prisma.EnumAccionAuditoriaFilter<"AuditLog"> | $Enums.AccionAuditoria;
    entidadAfectada?: Prisma.StringFilter<"AuditLog"> | string;
    entidadId?: Prisma.IntNullableFilter<"AuditLog"> | number | null;
    valorAnterior?: Prisma.JsonNullableFilter<"AuditLog">;
    valorNuevo?: Prisma.JsonNullableFilter<"AuditLog">;
    leido?: Prisma.BoolFilter<"AuditLog"> | boolean;
    timestamp?: Prisma.DateTimeFilter<"AuditLog"> | Date | string;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.UsuarioWhereInput> | null;
};
export type AuditLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrderInput | Prisma.SortOrder;
    accion?: Prisma.SortOrder;
    entidadAfectada?: Prisma.SortOrder;
    entidadId?: Prisma.SortOrderInput | Prisma.SortOrder;
    valorAnterior?: Prisma.SortOrderInput | Prisma.SortOrder;
    valorNuevo?: Prisma.SortOrderInput | Prisma.SortOrder;
    leido?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    usuario?: Prisma.UsuarioOrderByWithRelationInput;
};
export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AuditLogWhereInput | Prisma.AuditLogWhereInput[];
    OR?: Prisma.AuditLogWhereInput[];
    NOT?: Prisma.AuditLogWhereInput | Prisma.AuditLogWhereInput[];
    usuarioId?: Prisma.IntNullableFilter<"AuditLog"> | number | null;
    accion?: Prisma.EnumAccionAuditoriaFilter<"AuditLog"> | $Enums.AccionAuditoria;
    entidadAfectada?: Prisma.StringFilter<"AuditLog"> | string;
    entidadId?: Prisma.IntNullableFilter<"AuditLog"> | number | null;
    valorAnterior?: Prisma.JsonNullableFilter<"AuditLog">;
    valorNuevo?: Prisma.JsonNullableFilter<"AuditLog">;
    leido?: Prisma.BoolFilter<"AuditLog"> | boolean;
    timestamp?: Prisma.DateTimeFilter<"AuditLog"> | Date | string;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.UsuarioWhereInput> | null;
}, "id">;
export type AuditLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrderInput | Prisma.SortOrder;
    accion?: Prisma.SortOrder;
    entidadAfectada?: Prisma.SortOrder;
    entidadId?: Prisma.SortOrderInput | Prisma.SortOrder;
    valorAnterior?: Prisma.SortOrderInput | Prisma.SortOrder;
    valorNuevo?: Prisma.SortOrderInput | Prisma.SortOrder;
    leido?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    _count?: Prisma.AuditLogCountOrderByAggregateInput;
    _avg?: Prisma.AuditLogAvgOrderByAggregateInput;
    _max?: Prisma.AuditLogMaxOrderByAggregateInput;
    _min?: Prisma.AuditLogMinOrderByAggregateInput;
    _sum?: Prisma.AuditLogSumOrderByAggregateInput;
};
export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.AuditLogScalarWhereWithAggregatesInput | Prisma.AuditLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.AuditLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AuditLogScalarWhereWithAggregatesInput | Prisma.AuditLogScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"AuditLog"> | number;
    usuarioId?: Prisma.IntNullableWithAggregatesFilter<"AuditLog"> | number | null;
    accion?: Prisma.EnumAccionAuditoriaWithAggregatesFilter<"AuditLog"> | $Enums.AccionAuditoria;
    entidadAfectada?: Prisma.StringWithAggregatesFilter<"AuditLog"> | string;
    entidadId?: Prisma.IntNullableWithAggregatesFilter<"AuditLog"> | number | null;
    valorAnterior?: Prisma.JsonNullableWithAggregatesFilter<"AuditLog">;
    valorNuevo?: Prisma.JsonNullableWithAggregatesFilter<"AuditLog">;
    leido?: Prisma.BoolWithAggregatesFilter<"AuditLog"> | boolean;
    timestamp?: Prisma.DateTimeWithAggregatesFilter<"AuditLog"> | Date | string;
};
export type AuditLogCreateInput = {
    accion: $Enums.AccionAuditoria;
    entidadAfectada: string;
    entidadId?: number | null;
    valorAnterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valorNuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    leido?: boolean;
    timestamp?: Date | string;
    usuario?: Prisma.UsuarioCreateNestedOneWithoutAuditLogsInput;
};
export type AuditLogUncheckedCreateInput = {
    id?: number;
    usuarioId?: number | null;
    accion: $Enums.AccionAuditoria;
    entidadAfectada: string;
    entidadId?: number | null;
    valorAnterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valorNuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    leido?: boolean;
    timestamp?: Date | string;
};
export type AuditLogUpdateInput = {
    accion?: Prisma.EnumAccionAuditoriaFieldUpdateOperationsInput | $Enums.AccionAuditoria;
    entidadAfectada?: Prisma.StringFieldUpdateOperationsInput | string;
    entidadId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valorAnterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valorNuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    leido?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.UsuarioUpdateOneWithoutAuditLogsNestedInput;
};
export type AuditLogUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    accion?: Prisma.EnumAccionAuditoriaFieldUpdateOperationsInput | $Enums.AccionAuditoria;
    entidadAfectada?: Prisma.StringFieldUpdateOperationsInput | string;
    entidadId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valorAnterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valorNuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    leido?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditLogCreateManyInput = {
    id?: number;
    usuarioId?: number | null;
    accion: $Enums.AccionAuditoria;
    entidadAfectada: string;
    entidadId?: number | null;
    valorAnterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valorNuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    leido?: boolean;
    timestamp?: Date | string;
};
export type AuditLogUpdateManyMutationInput = {
    accion?: Prisma.EnumAccionAuditoriaFieldUpdateOperationsInput | $Enums.AccionAuditoria;
    entidadAfectada?: Prisma.StringFieldUpdateOperationsInput | string;
    entidadId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valorAnterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valorNuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    leido?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditLogUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    accion?: Prisma.EnumAccionAuditoriaFieldUpdateOperationsInput | $Enums.AccionAuditoria;
    entidadAfectada?: Prisma.StringFieldUpdateOperationsInput | string;
    entidadId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valorAnterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valorNuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    leido?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditLogListRelationFilter = {
    every?: Prisma.AuditLogWhereInput;
    some?: Prisma.AuditLogWhereInput;
    none?: Prisma.AuditLogWhereInput;
};
export type AuditLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AuditLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    accion?: Prisma.SortOrder;
    entidadAfectada?: Prisma.SortOrder;
    entidadId?: Prisma.SortOrder;
    valorAnterior?: Prisma.SortOrder;
    valorNuevo?: Prisma.SortOrder;
    leido?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
};
export type AuditLogAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    entidadId?: Prisma.SortOrder;
};
export type AuditLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    accion?: Prisma.SortOrder;
    entidadAfectada?: Prisma.SortOrder;
    entidadId?: Prisma.SortOrder;
    leido?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
};
export type AuditLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    accion?: Prisma.SortOrder;
    entidadAfectada?: Prisma.SortOrder;
    entidadId?: Prisma.SortOrder;
    leido?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
};
export type AuditLogSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    entidadId?: Prisma.SortOrder;
};
export type AuditLogCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.AuditLogCreateWithoutUsuarioInput, Prisma.AuditLogUncheckedCreateWithoutUsuarioInput> | Prisma.AuditLogCreateWithoutUsuarioInput[] | Prisma.AuditLogUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.AuditLogCreateOrConnectWithoutUsuarioInput | Prisma.AuditLogCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.AuditLogCreateManyUsuarioInputEnvelope;
    connect?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
};
export type AuditLogUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.AuditLogCreateWithoutUsuarioInput, Prisma.AuditLogUncheckedCreateWithoutUsuarioInput> | Prisma.AuditLogCreateWithoutUsuarioInput[] | Prisma.AuditLogUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.AuditLogCreateOrConnectWithoutUsuarioInput | Prisma.AuditLogCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.AuditLogCreateManyUsuarioInputEnvelope;
    connect?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
};
export type AuditLogUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.AuditLogCreateWithoutUsuarioInput, Prisma.AuditLogUncheckedCreateWithoutUsuarioInput> | Prisma.AuditLogCreateWithoutUsuarioInput[] | Prisma.AuditLogUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.AuditLogCreateOrConnectWithoutUsuarioInput | Prisma.AuditLogCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.AuditLogUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.AuditLogUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.AuditLogCreateManyUsuarioInputEnvelope;
    set?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    disconnect?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    delete?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    connect?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    update?: Prisma.AuditLogUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.AuditLogUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.AuditLogUpdateManyWithWhereWithoutUsuarioInput | Prisma.AuditLogUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.AuditLogScalarWhereInput | Prisma.AuditLogScalarWhereInput[];
};
export type AuditLogUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.AuditLogCreateWithoutUsuarioInput, Prisma.AuditLogUncheckedCreateWithoutUsuarioInput> | Prisma.AuditLogCreateWithoutUsuarioInput[] | Prisma.AuditLogUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.AuditLogCreateOrConnectWithoutUsuarioInput | Prisma.AuditLogCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.AuditLogUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.AuditLogUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.AuditLogCreateManyUsuarioInputEnvelope;
    set?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    disconnect?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    delete?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    connect?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    update?: Prisma.AuditLogUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.AuditLogUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.AuditLogUpdateManyWithWhereWithoutUsuarioInput | Prisma.AuditLogUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.AuditLogScalarWhereInput | Prisma.AuditLogScalarWhereInput[];
};
export type EnumAccionAuditoriaFieldUpdateOperationsInput = {
    set?: $Enums.AccionAuditoria;
};
export type AuditLogCreateWithoutUsuarioInput = {
    accion: $Enums.AccionAuditoria;
    entidadAfectada: string;
    entidadId?: number | null;
    valorAnterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valorNuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    leido?: boolean;
    timestamp?: Date | string;
};
export type AuditLogUncheckedCreateWithoutUsuarioInput = {
    id?: number;
    accion: $Enums.AccionAuditoria;
    entidadAfectada: string;
    entidadId?: number | null;
    valorAnterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valorNuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    leido?: boolean;
    timestamp?: Date | string;
};
export type AuditLogCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.AuditLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditLogCreateWithoutUsuarioInput, Prisma.AuditLogUncheckedCreateWithoutUsuarioInput>;
};
export type AuditLogCreateManyUsuarioInputEnvelope = {
    data: Prisma.AuditLogCreateManyUsuarioInput | Prisma.AuditLogCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type AuditLogUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.AuditLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.AuditLogUpdateWithoutUsuarioInput, Prisma.AuditLogUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.AuditLogCreateWithoutUsuarioInput, Prisma.AuditLogUncheckedCreateWithoutUsuarioInput>;
};
export type AuditLogUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.AuditLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.AuditLogUpdateWithoutUsuarioInput, Prisma.AuditLogUncheckedUpdateWithoutUsuarioInput>;
};
export type AuditLogUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.AuditLogScalarWhereInput;
    data: Prisma.XOR<Prisma.AuditLogUpdateManyMutationInput, Prisma.AuditLogUncheckedUpdateManyWithoutUsuarioInput>;
};
export type AuditLogScalarWhereInput = {
    AND?: Prisma.AuditLogScalarWhereInput | Prisma.AuditLogScalarWhereInput[];
    OR?: Prisma.AuditLogScalarWhereInput[];
    NOT?: Prisma.AuditLogScalarWhereInput | Prisma.AuditLogScalarWhereInput[];
    id?: Prisma.IntFilter<"AuditLog"> | number;
    usuarioId?: Prisma.IntNullableFilter<"AuditLog"> | number | null;
    accion?: Prisma.EnumAccionAuditoriaFilter<"AuditLog"> | $Enums.AccionAuditoria;
    entidadAfectada?: Prisma.StringFilter<"AuditLog"> | string;
    entidadId?: Prisma.IntNullableFilter<"AuditLog"> | number | null;
    valorAnterior?: Prisma.JsonNullableFilter<"AuditLog">;
    valorNuevo?: Prisma.JsonNullableFilter<"AuditLog">;
    leido?: Prisma.BoolFilter<"AuditLog"> | boolean;
    timestamp?: Prisma.DateTimeFilter<"AuditLog"> | Date | string;
};
export type AuditLogCreateManyUsuarioInput = {
    id?: number;
    accion: $Enums.AccionAuditoria;
    entidadAfectada: string;
    entidadId?: number | null;
    valorAnterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valorNuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    leido?: boolean;
    timestamp?: Date | string;
};
export type AuditLogUpdateWithoutUsuarioInput = {
    accion?: Prisma.EnumAccionAuditoriaFieldUpdateOperationsInput | $Enums.AccionAuditoria;
    entidadAfectada?: Prisma.StringFieldUpdateOperationsInput | string;
    entidadId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valorAnterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valorNuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    leido?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditLogUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    accion?: Prisma.EnumAccionAuditoriaFieldUpdateOperationsInput | $Enums.AccionAuditoria;
    entidadAfectada?: Prisma.StringFieldUpdateOperationsInput | string;
    entidadId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valorAnterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valorNuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    leido?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditLogUncheckedUpdateManyWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    accion?: Prisma.EnumAccionAuditoriaFieldUpdateOperationsInput | $Enums.AccionAuditoria;
    entidadAfectada?: Prisma.StringFieldUpdateOperationsInput | string;
    entidadId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valorAnterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valorNuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    leido?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    accion?: boolean;
    entidadAfectada?: boolean;
    entidadId?: boolean;
    valorAnterior?: boolean;
    valorNuevo?: boolean;
    leido?: boolean;
    timestamp?: boolean;
    usuario?: boolean | Prisma.AuditLog$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["auditLog"]>;
export type AuditLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    accion?: boolean;
    entidadAfectada?: boolean;
    entidadId?: boolean;
    valorAnterior?: boolean;
    valorNuevo?: boolean;
    leido?: boolean;
    timestamp?: boolean;
    usuario?: boolean | Prisma.AuditLog$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["auditLog"]>;
export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    accion?: boolean;
    entidadAfectada?: boolean;
    entidadId?: boolean;
    valorAnterior?: boolean;
    valorNuevo?: boolean;
    leido?: boolean;
    timestamp?: boolean;
    usuario?: boolean | Prisma.AuditLog$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["auditLog"]>;
export type AuditLogSelectScalar = {
    id?: boolean;
    usuarioId?: boolean;
    accion?: boolean;
    entidadAfectada?: boolean;
    entidadId?: boolean;
    valorAnterior?: boolean;
    valorNuevo?: boolean;
    leido?: boolean;
    timestamp?: boolean;
};
export type AuditLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "usuarioId" | "accion" | "entidadAfectada" | "entidadId" | "valorAnterior" | "valorNuevo" | "leido" | "timestamp", ExtArgs["result"]["auditLog"]>;
export type AuditLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.AuditLog$usuarioArgs<ExtArgs>;
};
export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.AuditLog$usuarioArgs<ExtArgs>;
};
export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.AuditLog$usuarioArgs<ExtArgs>;
};
export type $AuditLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AuditLog";
    objects: {
        usuario: Prisma.$UsuarioPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        usuarioId: number | null;
        accion: $Enums.AccionAuditoria;
        entidadAfectada: string;
        entidadId: number | null;
        valorAnterior: runtime.JsonValue | null;
        valorNuevo: runtime.JsonValue | null;
        leido: boolean;
        timestamp: Date;
    }, ExtArgs["result"]["auditLog"]>;
    composites: {};
};
export type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AuditLogPayload, S>;
export type AuditLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuditLogCountAggregateInputType | true;
};
export interface AuditLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'];
        meta: {
            name: 'AuditLog';
        };
    };
    findUnique<T extends AuditLogFindUniqueArgs>(args: Prisma.SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AuditLogFindFirstArgs>(args?: Prisma.SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AuditLogFindManyArgs>(args?: Prisma.SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AuditLogCreateArgs>(args: Prisma.SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AuditLogCreateManyArgs>(args?: Prisma.SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AuditLogDeleteArgs>(args: Prisma.SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AuditLogUpdateArgs>(args: Prisma.SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AuditLogUpdateManyArgs>(args: Prisma.SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AuditLogUpsertArgs>(args: Prisma.SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AuditLogCountArgs>(args?: Prisma.Subset<T, AuditLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AuditLogCountAggregateOutputType> : number>;
    aggregate<T extends AuditLogAggregateArgs>(args: Prisma.Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>;
    groupBy<T extends AuditLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AuditLogGroupByArgs['orderBy'];
    } : {
        orderBy?: AuditLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AuditLogFieldRefs;
}
export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuario<T extends Prisma.AuditLog$usuarioArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuditLog$usuarioArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AuditLogFieldRefs {
    readonly id: Prisma.FieldRef<"AuditLog", 'Int'>;
    readonly usuarioId: Prisma.FieldRef<"AuditLog", 'Int'>;
    readonly accion: Prisma.FieldRef<"AuditLog", 'AccionAuditoria'>;
    readonly entidadAfectada: Prisma.FieldRef<"AuditLog", 'String'>;
    readonly entidadId: Prisma.FieldRef<"AuditLog", 'Int'>;
    readonly valorAnterior: Prisma.FieldRef<"AuditLog", 'Json'>;
    readonly valorNuevo: Prisma.FieldRef<"AuditLog", 'Json'>;
    readonly leido: Prisma.FieldRef<"AuditLog", 'Boolean'>;
    readonly timestamp: Prisma.FieldRef<"AuditLog", 'DateTime'>;
}
export type AuditLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where: Prisma.AuditLogWhereUniqueInput;
};
export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where: Prisma.AuditLogWhereUniqueInput;
};
export type AuditLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditLogCreateInput, Prisma.AuditLogUncheckedCreateInput>;
};
export type AuditLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AuditLogCreateManyInput | Prisma.AuditLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AuditLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    data: Prisma.AuditLogCreateManyInput | Prisma.AuditLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AuditLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AuditLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditLogUpdateInput, Prisma.AuditLogUncheckedUpdateInput>;
    where: Prisma.AuditLogWhereUniqueInput;
};
export type AuditLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AuditLogUpdateManyMutationInput, Prisma.AuditLogUncheckedUpdateManyInput>;
    where?: Prisma.AuditLogWhereInput;
    limit?: number;
};
export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditLogUpdateManyMutationInput, Prisma.AuditLogUncheckedUpdateManyInput>;
    where?: Prisma.AuditLogWhereInput;
    limit?: number;
    include?: Prisma.AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AuditLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where: Prisma.AuditLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditLogCreateInput, Prisma.AuditLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AuditLogUpdateInput, Prisma.AuditLogUncheckedUpdateInput>;
};
export type AuditLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where: Prisma.AuditLogWhereUniqueInput;
};
export type AuditLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
    limit?: number;
};
export type AuditLog$usuarioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
};
export type AuditLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
};
