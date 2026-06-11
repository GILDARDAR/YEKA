import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClienteModel = runtime.Types.Result.DefaultSelection<Prisma.$ClientePayload>;
export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null;
    _avg: ClienteAvgAggregateOutputType | null;
    _sum: ClienteSumAggregateOutputType | null;
    _min: ClienteMinAggregateOutputType | null;
    _max: ClienteMaxAggregateOutputType | null;
};
export type ClienteAvgAggregateOutputType = {
    id: number | null;
    sedeOrigenId: number | null;
    nivelPremium: number | null;
};
export type ClienteSumAggregateOutputType = {
    id: number | null;
    sedeOrigenId: number | null;
    nivelPremium: number | null;
};
export type ClienteMinAggregateOutputType = {
    id: number | null;
    sedeOrigenId: number | null;
    nombre: string | null;
    dni: string | null;
    celular: string | null;
    email: string | null;
    nivelPremium: number | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClienteMaxAggregateOutputType = {
    id: number | null;
    sedeOrigenId: number | null;
    nombre: string | null;
    dni: string | null;
    celular: string | null;
    email: string | null;
    nivelPremium: number | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClienteCountAggregateOutputType = {
    id: number;
    sedeOrigenId: number;
    nombre: number;
    dni: number;
    celular: number;
    email: number;
    nivelPremium: number;
    tallasMedidas: number;
    preferenciasHistorial: number;
    activo: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ClienteAvgAggregateInputType = {
    id?: true;
    sedeOrigenId?: true;
    nivelPremium?: true;
};
export type ClienteSumAggregateInputType = {
    id?: true;
    sedeOrigenId?: true;
    nivelPremium?: true;
};
export type ClienteMinAggregateInputType = {
    id?: true;
    sedeOrigenId?: true;
    nombre?: true;
    dni?: true;
    celular?: true;
    email?: true;
    nivelPremium?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClienteMaxAggregateInputType = {
    id?: true;
    sedeOrigenId?: true;
    nombre?: true;
    dni?: true;
    celular?: true;
    email?: true;
    nivelPremium?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClienteCountAggregateInputType = {
    id?: true;
    sedeOrigenId?: true;
    nombre?: true;
    dni?: true;
    celular?: true;
    email?: true;
    nivelPremium?: true;
    tallasMedidas?: true;
    preferenciasHistorial?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ClienteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    cursor?: Prisma.ClienteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClienteCountAggregateInputType;
    _avg?: ClienteAvgAggregateInputType;
    _sum?: ClienteSumAggregateInputType;
    _min?: ClienteMinAggregateInputType;
    _max?: ClienteMaxAggregateInputType;
};
export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
    [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCliente[P]> : Prisma.GetScalarType<T[P], AggregateCliente[P]>;
};
export type ClienteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithAggregationInput | Prisma.ClienteOrderByWithAggregationInput[];
    by: Prisma.ClienteScalarFieldEnum[] | Prisma.ClienteScalarFieldEnum;
    having?: Prisma.ClienteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClienteCountAggregateInputType | true;
    _avg?: ClienteAvgAggregateInputType;
    _sum?: ClienteSumAggregateInputType;
    _min?: ClienteMinAggregateInputType;
    _max?: ClienteMaxAggregateInputType;
};
export type ClienteGroupByOutputType = {
    id: number;
    sedeOrigenId: number;
    nombre: string;
    dni: string | null;
    celular: string | null;
    email: string | null;
    nivelPremium: number;
    tallasMedidas: runtime.JsonValue | null;
    preferenciasHistorial: runtime.JsonValue | null;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ClienteCountAggregateOutputType | null;
    _avg: ClienteAvgAggregateOutputType | null;
    _sum: ClienteSumAggregateOutputType | null;
    _min: ClienteMinAggregateOutputType | null;
    _max: ClienteMaxAggregateOutputType | null;
};
export type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClienteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClienteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClienteGroupByOutputType[P]>;
}>>;
export type ClienteWhereInput = {
    AND?: Prisma.ClienteWhereInput | Prisma.ClienteWhereInput[];
    OR?: Prisma.ClienteWhereInput[];
    NOT?: Prisma.ClienteWhereInput | Prisma.ClienteWhereInput[];
    id?: Prisma.IntFilter<"Cliente"> | number;
    sedeOrigenId?: Prisma.IntFilter<"Cliente"> | number;
    nombre?: Prisma.StringFilter<"Cliente"> | string;
    dni?: Prisma.StringNullableFilter<"Cliente"> | string | null;
    celular?: Prisma.StringNullableFilter<"Cliente"> | string | null;
    email?: Prisma.StringNullableFilter<"Cliente"> | string | null;
    nivelPremium?: Prisma.IntFilter<"Cliente"> | number;
    tallasMedidas?: Prisma.JsonNullableFilter<"Cliente">;
    preferenciasHistorial?: Prisma.JsonNullableFilter<"Cliente">;
    activo?: Prisma.BoolFilter<"Cliente"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Cliente"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Cliente"> | Date | string;
    sedeOrigen?: Prisma.XOR<Prisma.SedeScalarRelationFilter, Prisma.SedeWhereInput>;
    facturas?: Prisma.FacturaListRelationFilter;
};
export type ClienteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sedeOrigenId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    dni?: Prisma.SortOrderInput | Prisma.SortOrder;
    celular?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivelPremium?: Prisma.SortOrder;
    tallasMedidas?: Prisma.SortOrderInput | Prisma.SortOrder;
    preferenciasHistorial?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    sedeOrigen?: Prisma.SedeOrderByWithRelationInput;
    facturas?: Prisma.FacturaOrderByRelationAggregateInput;
};
export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ClienteWhereInput | Prisma.ClienteWhereInput[];
    OR?: Prisma.ClienteWhereInput[];
    NOT?: Prisma.ClienteWhereInput | Prisma.ClienteWhereInput[];
    sedeOrigenId?: Prisma.IntFilter<"Cliente"> | number;
    nombre?: Prisma.StringFilter<"Cliente"> | string;
    dni?: Prisma.StringNullableFilter<"Cliente"> | string | null;
    celular?: Prisma.StringNullableFilter<"Cliente"> | string | null;
    email?: Prisma.StringNullableFilter<"Cliente"> | string | null;
    nivelPremium?: Prisma.IntFilter<"Cliente"> | number;
    tallasMedidas?: Prisma.JsonNullableFilter<"Cliente">;
    preferenciasHistorial?: Prisma.JsonNullableFilter<"Cliente">;
    activo?: Prisma.BoolFilter<"Cliente"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Cliente"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Cliente"> | Date | string;
    sedeOrigen?: Prisma.XOR<Prisma.SedeScalarRelationFilter, Prisma.SedeWhereInput>;
    facturas?: Prisma.FacturaListRelationFilter;
}, "id">;
export type ClienteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sedeOrigenId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    dni?: Prisma.SortOrderInput | Prisma.SortOrder;
    celular?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivelPremium?: Prisma.SortOrder;
    tallasMedidas?: Prisma.SortOrderInput | Prisma.SortOrder;
    preferenciasHistorial?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ClienteCountOrderByAggregateInput;
    _avg?: Prisma.ClienteAvgOrderByAggregateInput;
    _max?: Prisma.ClienteMaxOrderByAggregateInput;
    _min?: Prisma.ClienteMinOrderByAggregateInput;
    _sum?: Prisma.ClienteSumOrderByAggregateInput;
};
export type ClienteScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClienteScalarWhereWithAggregatesInput | Prisma.ClienteScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClienteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClienteScalarWhereWithAggregatesInput | Prisma.ClienteScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Cliente"> | number;
    sedeOrigenId?: Prisma.IntWithAggregatesFilter<"Cliente"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Cliente"> | string;
    dni?: Prisma.StringNullableWithAggregatesFilter<"Cliente"> | string | null;
    celular?: Prisma.StringNullableWithAggregatesFilter<"Cliente"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"Cliente"> | string | null;
    nivelPremium?: Prisma.IntWithAggregatesFilter<"Cliente"> | number;
    tallasMedidas?: Prisma.JsonNullableWithAggregatesFilter<"Cliente">;
    preferenciasHistorial?: Prisma.JsonNullableWithAggregatesFilter<"Cliente">;
    activo?: Prisma.BoolWithAggregatesFilter<"Cliente"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Cliente"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Cliente"> | Date | string;
};
export type ClienteCreateInput = {
    nombre: string;
    dni?: string | null;
    celular?: string | null;
    email?: string | null;
    nivelPremium?: number;
    tallasMedidas?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    preferenciasHistorial?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sedeOrigen: Prisma.SedeCreateNestedOneWithoutClientesInput;
    facturas?: Prisma.FacturaCreateNestedManyWithoutClienteInput;
};
export type ClienteUncheckedCreateInput = {
    id?: number;
    sedeOrigenId: number;
    nombre: string;
    dni?: string | null;
    celular?: string | null;
    email?: string | null;
    nivelPremium?: number;
    tallasMedidas?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    preferenciasHistorial?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    facturas?: Prisma.FacturaUncheckedCreateNestedManyWithoutClienteInput;
};
export type ClienteUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    celular?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivelPremium?: Prisma.IntFieldUpdateOperationsInput | number;
    tallasMedidas?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    preferenciasHistorial?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sedeOrigen?: Prisma.SedeUpdateOneRequiredWithoutClientesNestedInput;
    facturas?: Prisma.FacturaUpdateManyWithoutClienteNestedInput;
};
export type ClienteUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeOrigenId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    celular?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivelPremium?: Prisma.IntFieldUpdateOperationsInput | number;
    tallasMedidas?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    preferenciasHistorial?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturas?: Prisma.FacturaUncheckedUpdateManyWithoutClienteNestedInput;
};
export type ClienteCreateManyInput = {
    id?: number;
    sedeOrigenId: number;
    nombre: string;
    dni?: string | null;
    celular?: string | null;
    email?: string | null;
    nivelPremium?: number;
    tallasMedidas?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    preferenciasHistorial?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClienteUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    celular?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivelPremium?: Prisma.IntFieldUpdateOperationsInput | number;
    tallasMedidas?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    preferenciasHistorial?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClienteUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeOrigenId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    celular?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivelPremium?: Prisma.IntFieldUpdateOperationsInput | number;
    tallasMedidas?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    preferenciasHistorial?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClienteListRelationFilter = {
    every?: Prisma.ClienteWhereInput;
    some?: Prisma.ClienteWhereInput;
    none?: Prisma.ClienteWhereInput;
};
export type ClienteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ClienteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sedeOrigenId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    dni?: Prisma.SortOrder;
    celular?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nivelPremium?: Prisma.SortOrder;
    tallasMedidas?: Prisma.SortOrder;
    preferenciasHistorial?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClienteAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sedeOrigenId?: Prisma.SortOrder;
    nivelPremium?: Prisma.SortOrder;
};
export type ClienteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sedeOrigenId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    dni?: Prisma.SortOrder;
    celular?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nivelPremium?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClienteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sedeOrigenId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    dni?: Prisma.SortOrder;
    celular?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nivelPremium?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClienteSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sedeOrigenId?: Prisma.SortOrder;
    nivelPremium?: Prisma.SortOrder;
};
export type ClienteNullableScalarRelationFilter = {
    is?: Prisma.ClienteWhereInput | null;
    isNot?: Prisma.ClienteWhereInput | null;
};
export type ClienteCreateNestedManyWithoutSedeOrigenInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutSedeOrigenInput, Prisma.ClienteUncheckedCreateWithoutSedeOrigenInput> | Prisma.ClienteCreateWithoutSedeOrigenInput[] | Prisma.ClienteUncheckedCreateWithoutSedeOrigenInput[];
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutSedeOrigenInput | Prisma.ClienteCreateOrConnectWithoutSedeOrigenInput[];
    createMany?: Prisma.ClienteCreateManySedeOrigenInputEnvelope;
    connect?: Prisma.ClienteWhereUniqueInput | Prisma.ClienteWhereUniqueInput[];
};
export type ClienteUncheckedCreateNestedManyWithoutSedeOrigenInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutSedeOrigenInput, Prisma.ClienteUncheckedCreateWithoutSedeOrigenInput> | Prisma.ClienteCreateWithoutSedeOrigenInput[] | Prisma.ClienteUncheckedCreateWithoutSedeOrigenInput[];
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutSedeOrigenInput | Prisma.ClienteCreateOrConnectWithoutSedeOrigenInput[];
    createMany?: Prisma.ClienteCreateManySedeOrigenInputEnvelope;
    connect?: Prisma.ClienteWhereUniqueInput | Prisma.ClienteWhereUniqueInput[];
};
export type ClienteUpdateManyWithoutSedeOrigenNestedInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutSedeOrigenInput, Prisma.ClienteUncheckedCreateWithoutSedeOrigenInput> | Prisma.ClienteCreateWithoutSedeOrigenInput[] | Prisma.ClienteUncheckedCreateWithoutSedeOrigenInput[];
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutSedeOrigenInput | Prisma.ClienteCreateOrConnectWithoutSedeOrigenInput[];
    upsert?: Prisma.ClienteUpsertWithWhereUniqueWithoutSedeOrigenInput | Prisma.ClienteUpsertWithWhereUniqueWithoutSedeOrigenInput[];
    createMany?: Prisma.ClienteCreateManySedeOrigenInputEnvelope;
    set?: Prisma.ClienteWhereUniqueInput | Prisma.ClienteWhereUniqueInput[];
    disconnect?: Prisma.ClienteWhereUniqueInput | Prisma.ClienteWhereUniqueInput[];
    delete?: Prisma.ClienteWhereUniqueInput | Prisma.ClienteWhereUniqueInput[];
    connect?: Prisma.ClienteWhereUniqueInput | Prisma.ClienteWhereUniqueInput[];
    update?: Prisma.ClienteUpdateWithWhereUniqueWithoutSedeOrigenInput | Prisma.ClienteUpdateWithWhereUniqueWithoutSedeOrigenInput[];
    updateMany?: Prisma.ClienteUpdateManyWithWhereWithoutSedeOrigenInput | Prisma.ClienteUpdateManyWithWhereWithoutSedeOrigenInput[];
    deleteMany?: Prisma.ClienteScalarWhereInput | Prisma.ClienteScalarWhereInput[];
};
export type ClienteUncheckedUpdateManyWithoutSedeOrigenNestedInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutSedeOrigenInput, Prisma.ClienteUncheckedCreateWithoutSedeOrigenInput> | Prisma.ClienteCreateWithoutSedeOrigenInput[] | Prisma.ClienteUncheckedCreateWithoutSedeOrigenInput[];
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutSedeOrigenInput | Prisma.ClienteCreateOrConnectWithoutSedeOrigenInput[];
    upsert?: Prisma.ClienteUpsertWithWhereUniqueWithoutSedeOrigenInput | Prisma.ClienteUpsertWithWhereUniqueWithoutSedeOrigenInput[];
    createMany?: Prisma.ClienteCreateManySedeOrigenInputEnvelope;
    set?: Prisma.ClienteWhereUniqueInput | Prisma.ClienteWhereUniqueInput[];
    disconnect?: Prisma.ClienteWhereUniqueInput | Prisma.ClienteWhereUniqueInput[];
    delete?: Prisma.ClienteWhereUniqueInput | Prisma.ClienteWhereUniqueInput[];
    connect?: Prisma.ClienteWhereUniqueInput | Prisma.ClienteWhereUniqueInput[];
    update?: Prisma.ClienteUpdateWithWhereUniqueWithoutSedeOrigenInput | Prisma.ClienteUpdateWithWhereUniqueWithoutSedeOrigenInput[];
    updateMany?: Prisma.ClienteUpdateManyWithWhereWithoutSedeOrigenInput | Prisma.ClienteUpdateManyWithWhereWithoutSedeOrigenInput[];
    deleteMany?: Prisma.ClienteScalarWhereInput | Prisma.ClienteScalarWhereInput[];
};
export type ClienteCreateNestedOneWithoutFacturasInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutFacturasInput, Prisma.ClienteUncheckedCreateWithoutFacturasInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutFacturasInput;
    connect?: Prisma.ClienteWhereUniqueInput;
};
export type ClienteUpdateOneWithoutFacturasNestedInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutFacturasInput, Prisma.ClienteUncheckedCreateWithoutFacturasInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutFacturasInput;
    upsert?: Prisma.ClienteUpsertWithoutFacturasInput;
    disconnect?: Prisma.ClienteWhereInput | boolean;
    delete?: Prisma.ClienteWhereInput | boolean;
    connect?: Prisma.ClienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClienteUpdateToOneWithWhereWithoutFacturasInput, Prisma.ClienteUpdateWithoutFacturasInput>, Prisma.ClienteUncheckedUpdateWithoutFacturasInput>;
};
export type ClienteCreateWithoutSedeOrigenInput = {
    nombre: string;
    dni?: string | null;
    celular?: string | null;
    email?: string | null;
    nivelPremium?: number;
    tallasMedidas?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    preferenciasHistorial?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    facturas?: Prisma.FacturaCreateNestedManyWithoutClienteInput;
};
export type ClienteUncheckedCreateWithoutSedeOrigenInput = {
    id?: number;
    nombre: string;
    dni?: string | null;
    celular?: string | null;
    email?: string | null;
    nivelPremium?: number;
    tallasMedidas?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    preferenciasHistorial?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    facturas?: Prisma.FacturaUncheckedCreateNestedManyWithoutClienteInput;
};
export type ClienteCreateOrConnectWithoutSedeOrigenInput = {
    where: Prisma.ClienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutSedeOrigenInput, Prisma.ClienteUncheckedCreateWithoutSedeOrigenInput>;
};
export type ClienteCreateManySedeOrigenInputEnvelope = {
    data: Prisma.ClienteCreateManySedeOrigenInput | Prisma.ClienteCreateManySedeOrigenInput[];
    skipDuplicates?: boolean;
};
export type ClienteUpsertWithWhereUniqueWithoutSedeOrigenInput = {
    where: Prisma.ClienteWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClienteUpdateWithoutSedeOrigenInput, Prisma.ClienteUncheckedUpdateWithoutSedeOrigenInput>;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutSedeOrigenInput, Prisma.ClienteUncheckedCreateWithoutSedeOrigenInput>;
};
export type ClienteUpdateWithWhereUniqueWithoutSedeOrigenInput = {
    where: Prisma.ClienteWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClienteUpdateWithoutSedeOrigenInput, Prisma.ClienteUncheckedUpdateWithoutSedeOrigenInput>;
};
export type ClienteUpdateManyWithWhereWithoutSedeOrigenInput = {
    where: Prisma.ClienteScalarWhereInput;
    data: Prisma.XOR<Prisma.ClienteUpdateManyMutationInput, Prisma.ClienteUncheckedUpdateManyWithoutSedeOrigenInput>;
};
export type ClienteScalarWhereInput = {
    AND?: Prisma.ClienteScalarWhereInput | Prisma.ClienteScalarWhereInput[];
    OR?: Prisma.ClienteScalarWhereInput[];
    NOT?: Prisma.ClienteScalarWhereInput | Prisma.ClienteScalarWhereInput[];
    id?: Prisma.IntFilter<"Cliente"> | number;
    sedeOrigenId?: Prisma.IntFilter<"Cliente"> | number;
    nombre?: Prisma.StringFilter<"Cliente"> | string;
    dni?: Prisma.StringNullableFilter<"Cliente"> | string | null;
    celular?: Prisma.StringNullableFilter<"Cliente"> | string | null;
    email?: Prisma.StringNullableFilter<"Cliente"> | string | null;
    nivelPremium?: Prisma.IntFilter<"Cliente"> | number;
    tallasMedidas?: Prisma.JsonNullableFilter<"Cliente">;
    preferenciasHistorial?: Prisma.JsonNullableFilter<"Cliente">;
    activo?: Prisma.BoolFilter<"Cliente"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Cliente"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Cliente"> | Date | string;
};
export type ClienteCreateWithoutFacturasInput = {
    nombre: string;
    dni?: string | null;
    celular?: string | null;
    email?: string | null;
    nivelPremium?: number;
    tallasMedidas?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    preferenciasHistorial?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sedeOrigen: Prisma.SedeCreateNestedOneWithoutClientesInput;
};
export type ClienteUncheckedCreateWithoutFacturasInput = {
    id?: number;
    sedeOrigenId: number;
    nombre: string;
    dni?: string | null;
    celular?: string | null;
    email?: string | null;
    nivelPremium?: number;
    tallasMedidas?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    preferenciasHistorial?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClienteCreateOrConnectWithoutFacturasInput = {
    where: Prisma.ClienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutFacturasInput, Prisma.ClienteUncheckedCreateWithoutFacturasInput>;
};
export type ClienteUpsertWithoutFacturasInput = {
    update: Prisma.XOR<Prisma.ClienteUpdateWithoutFacturasInput, Prisma.ClienteUncheckedUpdateWithoutFacturasInput>;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutFacturasInput, Prisma.ClienteUncheckedCreateWithoutFacturasInput>;
    where?: Prisma.ClienteWhereInput;
};
export type ClienteUpdateToOneWithWhereWithoutFacturasInput = {
    where?: Prisma.ClienteWhereInput;
    data: Prisma.XOR<Prisma.ClienteUpdateWithoutFacturasInput, Prisma.ClienteUncheckedUpdateWithoutFacturasInput>;
};
export type ClienteUpdateWithoutFacturasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    celular?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivelPremium?: Prisma.IntFieldUpdateOperationsInput | number;
    tallasMedidas?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    preferenciasHistorial?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sedeOrigen?: Prisma.SedeUpdateOneRequiredWithoutClientesNestedInput;
};
export type ClienteUncheckedUpdateWithoutFacturasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeOrigenId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    celular?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivelPremium?: Prisma.IntFieldUpdateOperationsInput | number;
    tallasMedidas?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    preferenciasHistorial?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClienteCreateManySedeOrigenInput = {
    id?: number;
    nombre: string;
    dni?: string | null;
    celular?: string | null;
    email?: string | null;
    nivelPremium?: number;
    tallasMedidas?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    preferenciasHistorial?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClienteUpdateWithoutSedeOrigenInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    celular?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivelPremium?: Prisma.IntFieldUpdateOperationsInput | number;
    tallasMedidas?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    preferenciasHistorial?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturas?: Prisma.FacturaUpdateManyWithoutClienteNestedInput;
};
export type ClienteUncheckedUpdateWithoutSedeOrigenInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    celular?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivelPremium?: Prisma.IntFieldUpdateOperationsInput | number;
    tallasMedidas?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    preferenciasHistorial?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturas?: Prisma.FacturaUncheckedUpdateManyWithoutClienteNestedInput;
};
export type ClienteUncheckedUpdateManyWithoutSedeOrigenInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    celular?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivelPremium?: Prisma.IntFieldUpdateOperationsInput | number;
    tallasMedidas?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    preferenciasHistorial?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClienteCountOutputType = {
    facturas: number;
};
export type ClienteCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    facturas?: boolean | ClienteCountOutputTypeCountFacturasArgs;
};
export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteCountOutputTypeSelect<ExtArgs> | null;
};
export type ClienteCountOutputTypeCountFacturasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FacturaWhereInput;
};
export type ClienteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sedeOrigenId?: boolean;
    nombre?: boolean;
    dni?: boolean;
    celular?: boolean;
    email?: boolean;
    nivelPremium?: boolean;
    tallasMedidas?: boolean;
    preferenciasHistorial?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sedeOrigen?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
    facturas?: boolean | Prisma.Cliente$facturasArgs<ExtArgs>;
    _count?: boolean | Prisma.ClienteCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cliente"]>;
export type ClienteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sedeOrigenId?: boolean;
    nombre?: boolean;
    dni?: boolean;
    celular?: boolean;
    email?: boolean;
    nivelPremium?: boolean;
    tallasMedidas?: boolean;
    preferenciasHistorial?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sedeOrigen?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cliente"]>;
export type ClienteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sedeOrigenId?: boolean;
    nombre?: boolean;
    dni?: boolean;
    celular?: boolean;
    email?: boolean;
    nivelPremium?: boolean;
    tallasMedidas?: boolean;
    preferenciasHistorial?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sedeOrigen?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cliente"]>;
export type ClienteSelectScalar = {
    id?: boolean;
    sedeOrigenId?: boolean;
    nombre?: boolean;
    dni?: boolean;
    celular?: boolean;
    email?: boolean;
    nivelPremium?: boolean;
    tallasMedidas?: boolean;
    preferenciasHistorial?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ClienteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sedeOrigenId" | "nombre" | "dni" | "celular" | "email" | "nivelPremium" | "tallasMedidas" | "preferenciasHistorial" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["cliente"]>;
export type ClienteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sedeOrigen?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
    facturas?: boolean | Prisma.Cliente$facturasArgs<ExtArgs>;
    _count?: boolean | Prisma.ClienteCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ClienteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sedeOrigen?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
};
export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sedeOrigen?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
};
export type $ClientePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Cliente";
    objects: {
        sedeOrigen: Prisma.$SedePayload<ExtArgs>;
        facturas: Prisma.$FacturaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        sedeOrigenId: number;
        nombre: string;
        dni: string | null;
        celular: string | null;
        email: string | null;
        nivelPremium: number;
        tallasMedidas: runtime.JsonValue | null;
        preferenciasHistorial: runtime.JsonValue | null;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["cliente"]>;
    composites: {};
};
export type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClientePayload, S>;
export type ClienteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClienteCountAggregateInputType | true;
};
export interface ClienteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Cliente'];
        meta: {
            name: 'Cliente';
        };
    };
    findUnique<T extends ClienteFindUniqueArgs>(args: Prisma.SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClienteFindFirstArgs>(args?: Prisma.SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClienteFindManyArgs>(args?: Prisma.SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClienteCreateArgs>(args: Prisma.SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClienteCreateManyArgs>(args?: Prisma.SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClienteDeleteArgs>(args: Prisma.SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClienteUpdateArgs>(args: Prisma.SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClienteDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClienteUpdateManyArgs>(args: Prisma.SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClienteUpsertArgs>(args: Prisma.SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClienteCountArgs>(args?: Prisma.Subset<T, ClienteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClienteCountAggregateOutputType> : number>;
    aggregate<T extends ClienteAggregateArgs>(args: Prisma.Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>;
    groupBy<T extends ClienteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClienteGroupByArgs['orderBy'];
    } : {
        orderBy?: ClienteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClienteFieldRefs;
}
export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sedeOrigen<T extends Prisma.SedeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SedeDefaultArgs<ExtArgs>>): Prisma.Prisma__SedeClient<runtime.Types.Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    facturas<T extends Prisma.Cliente$facturasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cliente$facturasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClienteFieldRefs {
    readonly id: Prisma.FieldRef<"Cliente", 'Int'>;
    readonly sedeOrigenId: Prisma.FieldRef<"Cliente", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Cliente", 'String'>;
    readonly dni: Prisma.FieldRef<"Cliente", 'String'>;
    readonly celular: Prisma.FieldRef<"Cliente", 'String'>;
    readonly email: Prisma.FieldRef<"Cliente", 'String'>;
    readonly nivelPremium: Prisma.FieldRef<"Cliente", 'Int'>;
    readonly tallasMedidas: Prisma.FieldRef<"Cliente", 'Json'>;
    readonly preferenciasHistorial: Prisma.FieldRef<"Cliente", 'Json'>;
    readonly activo: Prisma.FieldRef<"Cliente", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Cliente", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Cliente", 'DateTime'>;
}
export type ClienteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where: Prisma.ClienteWhereUniqueInput;
};
export type ClienteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where: Prisma.ClienteWhereUniqueInput;
};
export type ClienteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    cursor?: Prisma.ClienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClienteScalarFieldEnum | Prisma.ClienteScalarFieldEnum[];
};
export type ClienteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    cursor?: Prisma.ClienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClienteScalarFieldEnum | Prisma.ClienteScalarFieldEnum[];
};
export type ClienteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    cursor?: Prisma.ClienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClienteScalarFieldEnum | Prisma.ClienteScalarFieldEnum[];
};
export type ClienteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClienteCreateInput, Prisma.ClienteUncheckedCreateInput>;
};
export type ClienteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClienteCreateManyInput | Prisma.ClienteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClienteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    data: Prisma.ClienteCreateManyInput | Prisma.ClienteCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ClienteIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ClienteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClienteUpdateInput, Prisma.ClienteUncheckedUpdateInput>;
    where: Prisma.ClienteWhereUniqueInput;
};
export type ClienteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClienteUpdateManyMutationInput, Prisma.ClienteUncheckedUpdateManyInput>;
    where?: Prisma.ClienteWhereInput;
    limit?: number;
};
export type ClienteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClienteUpdateManyMutationInput, Prisma.ClienteUncheckedUpdateManyInput>;
    where?: Prisma.ClienteWhereInput;
    limit?: number;
    include?: Prisma.ClienteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ClienteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where: Prisma.ClienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClienteCreateInput, Prisma.ClienteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClienteUpdateInput, Prisma.ClienteUncheckedUpdateInput>;
};
export type ClienteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where: Prisma.ClienteWhereUniqueInput;
};
export type ClienteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClienteWhereInput;
    limit?: number;
};
export type Cliente$facturasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacturaSelect<ExtArgs> | null;
    omit?: Prisma.FacturaOmit<ExtArgs> | null;
    include?: Prisma.FacturaInclude<ExtArgs> | null;
    where?: Prisma.FacturaWhereInput;
    orderBy?: Prisma.FacturaOrderByWithRelationInput | Prisma.FacturaOrderByWithRelationInput[];
    cursor?: Prisma.FacturaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FacturaScalarFieldEnum | Prisma.FacturaScalarFieldEnum[];
};
export type ClienteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
};
