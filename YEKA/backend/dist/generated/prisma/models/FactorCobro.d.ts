import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type FactorCobroModel = runtime.Types.Result.DefaultSelection<Prisma.$FactorCobroPayload>;
export type AggregateFactorCobro = {
    _count: FactorCobroCountAggregateOutputType | null;
    _avg: FactorCobroAvgAggregateOutputType | null;
    _sum: FactorCobroSumAggregateOutputType | null;
    _min: FactorCobroMinAggregateOutputType | null;
    _max: FactorCobroMaxAggregateOutputType | null;
};
export type FactorCobroAvgAggregateOutputType = {
    id: number | null;
    categoriaId: number | null;
    valor: runtime.Decimal | null;
};
export type FactorCobroSumAggregateOutputType = {
    id: number | null;
    categoriaId: number | null;
    valor: runtime.Decimal | null;
};
export type FactorCobroMinAggregateOutputType = {
    id: number | null;
    categoriaId: number | null;
    nombre: string | null;
    valor: runtime.Decimal | null;
    tipo: $Enums.TipoFactor | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FactorCobroMaxAggregateOutputType = {
    id: number | null;
    categoriaId: number | null;
    nombre: string | null;
    valor: runtime.Decimal | null;
    tipo: $Enums.TipoFactor | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FactorCobroCountAggregateOutputType = {
    id: number;
    categoriaId: number;
    nombre: number;
    valor: number;
    tipo: number;
    fechaInicio: number;
    fechaFin: number;
    activo: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FactorCobroAvgAggregateInputType = {
    id?: true;
    categoriaId?: true;
    valor?: true;
};
export type FactorCobroSumAggregateInputType = {
    id?: true;
    categoriaId?: true;
    valor?: true;
};
export type FactorCobroMinAggregateInputType = {
    id?: true;
    categoriaId?: true;
    nombre?: true;
    valor?: true;
    tipo?: true;
    fechaInicio?: true;
    fechaFin?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FactorCobroMaxAggregateInputType = {
    id?: true;
    categoriaId?: true;
    nombre?: true;
    valor?: true;
    tipo?: true;
    fechaInicio?: true;
    fechaFin?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FactorCobroCountAggregateInputType = {
    id?: true;
    categoriaId?: true;
    nombre?: true;
    valor?: true;
    tipo?: true;
    fechaInicio?: true;
    fechaFin?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FactorCobroAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FactorCobroWhereInput;
    orderBy?: Prisma.FactorCobroOrderByWithRelationInput | Prisma.FactorCobroOrderByWithRelationInput[];
    cursor?: Prisma.FactorCobroWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FactorCobroCountAggregateInputType;
    _avg?: FactorCobroAvgAggregateInputType;
    _sum?: FactorCobroSumAggregateInputType;
    _min?: FactorCobroMinAggregateInputType;
    _max?: FactorCobroMaxAggregateInputType;
};
export type GetFactorCobroAggregateType<T extends FactorCobroAggregateArgs> = {
    [P in keyof T & keyof AggregateFactorCobro]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFactorCobro[P]> : Prisma.GetScalarType<T[P], AggregateFactorCobro[P]>;
};
export type FactorCobroGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FactorCobroWhereInput;
    orderBy?: Prisma.FactorCobroOrderByWithAggregationInput | Prisma.FactorCobroOrderByWithAggregationInput[];
    by: Prisma.FactorCobroScalarFieldEnum[] | Prisma.FactorCobroScalarFieldEnum;
    having?: Prisma.FactorCobroScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FactorCobroCountAggregateInputType | true;
    _avg?: FactorCobroAvgAggregateInputType;
    _sum?: FactorCobroSumAggregateInputType;
    _min?: FactorCobroMinAggregateInputType;
    _max?: FactorCobroMaxAggregateInputType;
};
export type FactorCobroGroupByOutputType = {
    id: number;
    categoriaId: number;
    nombre: string;
    valor: runtime.Decimal;
    tipo: $Enums.TipoFactor;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: FactorCobroCountAggregateOutputType | null;
    _avg: FactorCobroAvgAggregateOutputType | null;
    _sum: FactorCobroSumAggregateOutputType | null;
    _min: FactorCobroMinAggregateOutputType | null;
    _max: FactorCobroMaxAggregateOutputType | null;
};
export type GetFactorCobroGroupByPayload<T extends FactorCobroGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FactorCobroGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FactorCobroGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FactorCobroGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FactorCobroGroupByOutputType[P]>;
}>>;
export type FactorCobroWhereInput = {
    AND?: Prisma.FactorCobroWhereInput | Prisma.FactorCobroWhereInput[];
    OR?: Prisma.FactorCobroWhereInput[];
    NOT?: Prisma.FactorCobroWhereInput | Prisma.FactorCobroWhereInput[];
    id?: Prisma.IntFilter<"FactorCobro"> | number;
    categoriaId?: Prisma.IntFilter<"FactorCobro"> | number;
    nombre?: Prisma.StringFilter<"FactorCobro"> | string;
    valor?: Prisma.DecimalFilter<"FactorCobro"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoFactorFilter<"FactorCobro"> | $Enums.TipoFactor;
    fechaInicio?: Prisma.DateTimeNullableFilter<"FactorCobro"> | Date | string | null;
    fechaFin?: Prisma.DateTimeNullableFilter<"FactorCobro"> | Date | string | null;
    activo?: Prisma.BoolFilter<"FactorCobro"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"FactorCobro"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FactorCobro"> | Date | string;
    categoria?: Prisma.XOR<Prisma.CategoriaFactorCobroScalarRelationFilter, Prisma.CategoriaFactorCobroWhereInput>;
};
export type FactorCobroOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    categoria?: Prisma.CategoriaFactorCobroOrderByWithRelationInput;
};
export type FactorCobroWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.FactorCobroWhereInput | Prisma.FactorCobroWhereInput[];
    OR?: Prisma.FactorCobroWhereInput[];
    NOT?: Prisma.FactorCobroWhereInput | Prisma.FactorCobroWhereInput[];
    categoriaId?: Prisma.IntFilter<"FactorCobro"> | number;
    nombre?: Prisma.StringFilter<"FactorCobro"> | string;
    valor?: Prisma.DecimalFilter<"FactorCobro"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoFactorFilter<"FactorCobro"> | $Enums.TipoFactor;
    fechaInicio?: Prisma.DateTimeNullableFilter<"FactorCobro"> | Date | string | null;
    fechaFin?: Prisma.DateTimeNullableFilter<"FactorCobro"> | Date | string | null;
    activo?: Prisma.BoolFilter<"FactorCobro"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"FactorCobro"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FactorCobro"> | Date | string;
    categoria?: Prisma.XOR<Prisma.CategoriaFactorCobroScalarRelationFilter, Prisma.CategoriaFactorCobroWhereInput>;
}, "id">;
export type FactorCobroOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FactorCobroCountOrderByAggregateInput;
    _avg?: Prisma.FactorCobroAvgOrderByAggregateInput;
    _max?: Prisma.FactorCobroMaxOrderByAggregateInput;
    _min?: Prisma.FactorCobroMinOrderByAggregateInput;
    _sum?: Prisma.FactorCobroSumOrderByAggregateInput;
};
export type FactorCobroScalarWhereWithAggregatesInput = {
    AND?: Prisma.FactorCobroScalarWhereWithAggregatesInput | Prisma.FactorCobroScalarWhereWithAggregatesInput[];
    OR?: Prisma.FactorCobroScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FactorCobroScalarWhereWithAggregatesInput | Prisma.FactorCobroScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"FactorCobro"> | number;
    categoriaId?: Prisma.IntWithAggregatesFilter<"FactorCobro"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"FactorCobro"> | string;
    valor?: Prisma.DecimalWithAggregatesFilter<"FactorCobro"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoFactorWithAggregatesFilter<"FactorCobro"> | $Enums.TipoFactor;
    fechaInicio?: Prisma.DateTimeNullableWithAggregatesFilter<"FactorCobro"> | Date | string | null;
    fechaFin?: Prisma.DateTimeNullableWithAggregatesFilter<"FactorCobro"> | Date | string | null;
    activo?: Prisma.BoolWithAggregatesFilter<"FactorCobro"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FactorCobro"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FactorCobro"> | Date | string;
};
export type FactorCobroCreateInput = {
    nombre: string;
    valor: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: $Enums.TipoFactor;
    fechaInicio?: Date | string | null;
    fechaFin?: Date | string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categoria: Prisma.CategoriaFactorCobroCreateNestedOneWithoutFactoresInput;
};
export type FactorCobroUncheckedCreateInput = {
    id?: number;
    categoriaId: number;
    nombre: string;
    valor: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: $Enums.TipoFactor;
    fechaInicio?: Date | string | null;
    fechaFin?: Date | string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FactorCobroUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    valor?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoFactorFieldUpdateOperationsInput | $Enums.TipoFactor;
    fechaInicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoria?: Prisma.CategoriaFactorCobroUpdateOneRequiredWithoutFactoresNestedInput;
};
export type FactorCobroUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoriaId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    valor?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoFactorFieldUpdateOperationsInput | $Enums.TipoFactor;
    fechaInicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FactorCobroCreateManyInput = {
    id?: number;
    categoriaId: number;
    nombre: string;
    valor: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: $Enums.TipoFactor;
    fechaInicio?: Date | string | null;
    fechaFin?: Date | string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FactorCobroUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    valor?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoFactorFieldUpdateOperationsInput | $Enums.TipoFactor;
    fechaInicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FactorCobroUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoriaId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    valor?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoFactorFieldUpdateOperationsInput | $Enums.TipoFactor;
    fechaInicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FactorCobroListRelationFilter = {
    every?: Prisma.FactorCobroWhereInput;
    some?: Prisma.FactorCobroWhereInput;
    none?: Prisma.FactorCobroWhereInput;
};
export type FactorCobroOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FactorCobroCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FactorCobroAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
};
export type FactorCobroMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FactorCobroMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FactorCobroSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
};
export type FactorCobroCreateNestedManyWithoutCategoriaInput = {
    create?: Prisma.XOR<Prisma.FactorCobroCreateWithoutCategoriaInput, Prisma.FactorCobroUncheckedCreateWithoutCategoriaInput> | Prisma.FactorCobroCreateWithoutCategoriaInput[] | Prisma.FactorCobroUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.FactorCobroCreateOrConnectWithoutCategoriaInput | Prisma.FactorCobroCreateOrConnectWithoutCategoriaInput[];
    createMany?: Prisma.FactorCobroCreateManyCategoriaInputEnvelope;
    connect?: Prisma.FactorCobroWhereUniqueInput | Prisma.FactorCobroWhereUniqueInput[];
};
export type FactorCobroUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: Prisma.XOR<Prisma.FactorCobroCreateWithoutCategoriaInput, Prisma.FactorCobroUncheckedCreateWithoutCategoriaInput> | Prisma.FactorCobroCreateWithoutCategoriaInput[] | Prisma.FactorCobroUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.FactorCobroCreateOrConnectWithoutCategoriaInput | Prisma.FactorCobroCreateOrConnectWithoutCategoriaInput[];
    createMany?: Prisma.FactorCobroCreateManyCategoriaInputEnvelope;
    connect?: Prisma.FactorCobroWhereUniqueInput | Prisma.FactorCobroWhereUniqueInput[];
};
export type FactorCobroUpdateManyWithoutCategoriaNestedInput = {
    create?: Prisma.XOR<Prisma.FactorCobroCreateWithoutCategoriaInput, Prisma.FactorCobroUncheckedCreateWithoutCategoriaInput> | Prisma.FactorCobroCreateWithoutCategoriaInput[] | Prisma.FactorCobroUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.FactorCobroCreateOrConnectWithoutCategoriaInput | Prisma.FactorCobroCreateOrConnectWithoutCategoriaInput[];
    upsert?: Prisma.FactorCobroUpsertWithWhereUniqueWithoutCategoriaInput | Prisma.FactorCobroUpsertWithWhereUniqueWithoutCategoriaInput[];
    createMany?: Prisma.FactorCobroCreateManyCategoriaInputEnvelope;
    set?: Prisma.FactorCobroWhereUniqueInput | Prisma.FactorCobroWhereUniqueInput[];
    disconnect?: Prisma.FactorCobroWhereUniqueInput | Prisma.FactorCobroWhereUniqueInput[];
    delete?: Prisma.FactorCobroWhereUniqueInput | Prisma.FactorCobroWhereUniqueInput[];
    connect?: Prisma.FactorCobroWhereUniqueInput | Prisma.FactorCobroWhereUniqueInput[];
    update?: Prisma.FactorCobroUpdateWithWhereUniqueWithoutCategoriaInput | Prisma.FactorCobroUpdateWithWhereUniqueWithoutCategoriaInput[];
    updateMany?: Prisma.FactorCobroUpdateManyWithWhereWithoutCategoriaInput | Prisma.FactorCobroUpdateManyWithWhereWithoutCategoriaInput[];
    deleteMany?: Prisma.FactorCobroScalarWhereInput | Prisma.FactorCobroScalarWhereInput[];
};
export type FactorCobroUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: Prisma.XOR<Prisma.FactorCobroCreateWithoutCategoriaInput, Prisma.FactorCobroUncheckedCreateWithoutCategoriaInput> | Prisma.FactorCobroCreateWithoutCategoriaInput[] | Prisma.FactorCobroUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.FactorCobroCreateOrConnectWithoutCategoriaInput | Prisma.FactorCobroCreateOrConnectWithoutCategoriaInput[];
    upsert?: Prisma.FactorCobroUpsertWithWhereUniqueWithoutCategoriaInput | Prisma.FactorCobroUpsertWithWhereUniqueWithoutCategoriaInput[];
    createMany?: Prisma.FactorCobroCreateManyCategoriaInputEnvelope;
    set?: Prisma.FactorCobroWhereUniqueInput | Prisma.FactorCobroWhereUniqueInput[];
    disconnect?: Prisma.FactorCobroWhereUniqueInput | Prisma.FactorCobroWhereUniqueInput[];
    delete?: Prisma.FactorCobroWhereUniqueInput | Prisma.FactorCobroWhereUniqueInput[];
    connect?: Prisma.FactorCobroWhereUniqueInput | Prisma.FactorCobroWhereUniqueInput[];
    update?: Prisma.FactorCobroUpdateWithWhereUniqueWithoutCategoriaInput | Prisma.FactorCobroUpdateWithWhereUniqueWithoutCategoriaInput[];
    updateMany?: Prisma.FactorCobroUpdateManyWithWhereWithoutCategoriaInput | Prisma.FactorCobroUpdateManyWithWhereWithoutCategoriaInput[];
    deleteMany?: Prisma.FactorCobroScalarWhereInput | Prisma.FactorCobroScalarWhereInput[];
};
export type EnumTipoFactorFieldUpdateOperationsInput = {
    set?: $Enums.TipoFactor;
};
export type FactorCobroCreateWithoutCategoriaInput = {
    nombre: string;
    valor: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: $Enums.TipoFactor;
    fechaInicio?: Date | string | null;
    fechaFin?: Date | string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FactorCobroUncheckedCreateWithoutCategoriaInput = {
    id?: number;
    nombre: string;
    valor: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: $Enums.TipoFactor;
    fechaInicio?: Date | string | null;
    fechaFin?: Date | string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FactorCobroCreateOrConnectWithoutCategoriaInput = {
    where: Prisma.FactorCobroWhereUniqueInput;
    create: Prisma.XOR<Prisma.FactorCobroCreateWithoutCategoriaInput, Prisma.FactorCobroUncheckedCreateWithoutCategoriaInput>;
};
export type FactorCobroCreateManyCategoriaInputEnvelope = {
    data: Prisma.FactorCobroCreateManyCategoriaInput | Prisma.FactorCobroCreateManyCategoriaInput[];
    skipDuplicates?: boolean;
};
export type FactorCobroUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: Prisma.FactorCobroWhereUniqueInput;
    update: Prisma.XOR<Prisma.FactorCobroUpdateWithoutCategoriaInput, Prisma.FactorCobroUncheckedUpdateWithoutCategoriaInput>;
    create: Prisma.XOR<Prisma.FactorCobroCreateWithoutCategoriaInput, Prisma.FactorCobroUncheckedCreateWithoutCategoriaInput>;
};
export type FactorCobroUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: Prisma.FactorCobroWhereUniqueInput;
    data: Prisma.XOR<Prisma.FactorCobroUpdateWithoutCategoriaInput, Prisma.FactorCobroUncheckedUpdateWithoutCategoriaInput>;
};
export type FactorCobroUpdateManyWithWhereWithoutCategoriaInput = {
    where: Prisma.FactorCobroScalarWhereInput;
    data: Prisma.XOR<Prisma.FactorCobroUpdateManyMutationInput, Prisma.FactorCobroUncheckedUpdateManyWithoutCategoriaInput>;
};
export type FactorCobroScalarWhereInput = {
    AND?: Prisma.FactorCobroScalarWhereInput | Prisma.FactorCobroScalarWhereInput[];
    OR?: Prisma.FactorCobroScalarWhereInput[];
    NOT?: Prisma.FactorCobroScalarWhereInput | Prisma.FactorCobroScalarWhereInput[];
    id?: Prisma.IntFilter<"FactorCobro"> | number;
    categoriaId?: Prisma.IntFilter<"FactorCobro"> | number;
    nombre?: Prisma.StringFilter<"FactorCobro"> | string;
    valor?: Prisma.DecimalFilter<"FactorCobro"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoFactorFilter<"FactorCobro"> | $Enums.TipoFactor;
    fechaInicio?: Prisma.DateTimeNullableFilter<"FactorCobro"> | Date | string | null;
    fechaFin?: Prisma.DateTimeNullableFilter<"FactorCobro"> | Date | string | null;
    activo?: Prisma.BoolFilter<"FactorCobro"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"FactorCobro"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FactorCobro"> | Date | string;
};
export type FactorCobroCreateManyCategoriaInput = {
    id?: number;
    nombre: string;
    valor: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: $Enums.TipoFactor;
    fechaInicio?: Date | string | null;
    fechaFin?: Date | string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FactorCobroUpdateWithoutCategoriaInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    valor?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoFactorFieldUpdateOperationsInput | $Enums.TipoFactor;
    fechaInicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FactorCobroUncheckedUpdateWithoutCategoriaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    valor?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoFactorFieldUpdateOperationsInput | $Enums.TipoFactor;
    fechaInicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FactorCobroUncheckedUpdateManyWithoutCategoriaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    valor?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo?: Prisma.EnumTipoFactorFieldUpdateOperationsInput | $Enums.TipoFactor;
    fechaInicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FactorCobroSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categoriaId?: boolean;
    nombre?: boolean;
    valor?: boolean;
    tipo?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    categoria?: boolean | Prisma.CategoriaFactorCobroDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["factorCobro"]>;
export type FactorCobroSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categoriaId?: boolean;
    nombre?: boolean;
    valor?: boolean;
    tipo?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    categoria?: boolean | Prisma.CategoriaFactorCobroDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["factorCobro"]>;
export type FactorCobroSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categoriaId?: boolean;
    nombre?: boolean;
    valor?: boolean;
    tipo?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    categoria?: boolean | Prisma.CategoriaFactorCobroDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["factorCobro"]>;
export type FactorCobroSelectScalar = {
    id?: boolean;
    categoriaId?: boolean;
    nombre?: boolean;
    valor?: boolean;
    tipo?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FactorCobroOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "categoriaId" | "nombre" | "valor" | "tipo" | "fechaInicio" | "fechaFin" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["factorCobro"]>;
export type FactorCobroInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categoria?: boolean | Prisma.CategoriaFactorCobroDefaultArgs<ExtArgs>;
};
export type FactorCobroIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categoria?: boolean | Prisma.CategoriaFactorCobroDefaultArgs<ExtArgs>;
};
export type FactorCobroIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categoria?: boolean | Prisma.CategoriaFactorCobroDefaultArgs<ExtArgs>;
};
export type $FactorCobroPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FactorCobro";
    objects: {
        categoria: Prisma.$CategoriaFactorCobroPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        categoriaId: number;
        nombre: string;
        valor: runtime.Decimal;
        tipo: $Enums.TipoFactor;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["factorCobro"]>;
    composites: {};
};
export type FactorCobroGetPayload<S extends boolean | null | undefined | FactorCobroDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FactorCobroPayload, S>;
export type FactorCobroCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FactorCobroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FactorCobroCountAggregateInputType | true;
};
export interface FactorCobroDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FactorCobro'];
        meta: {
            name: 'FactorCobro';
        };
    };
    findUnique<T extends FactorCobroFindUniqueArgs>(args: Prisma.SelectSubset<T, FactorCobroFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FactorCobroClient<runtime.Types.Result.GetResult<Prisma.$FactorCobroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FactorCobroFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FactorCobroFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FactorCobroClient<runtime.Types.Result.GetResult<Prisma.$FactorCobroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FactorCobroFindFirstArgs>(args?: Prisma.SelectSubset<T, FactorCobroFindFirstArgs<ExtArgs>>): Prisma.Prisma__FactorCobroClient<runtime.Types.Result.GetResult<Prisma.$FactorCobroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FactorCobroFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FactorCobroFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FactorCobroClient<runtime.Types.Result.GetResult<Prisma.$FactorCobroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FactorCobroFindManyArgs>(args?: Prisma.SelectSubset<T, FactorCobroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FactorCobroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FactorCobroCreateArgs>(args: Prisma.SelectSubset<T, FactorCobroCreateArgs<ExtArgs>>): Prisma.Prisma__FactorCobroClient<runtime.Types.Result.GetResult<Prisma.$FactorCobroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FactorCobroCreateManyArgs>(args?: Prisma.SelectSubset<T, FactorCobroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FactorCobroCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FactorCobroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FactorCobroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FactorCobroDeleteArgs>(args: Prisma.SelectSubset<T, FactorCobroDeleteArgs<ExtArgs>>): Prisma.Prisma__FactorCobroClient<runtime.Types.Result.GetResult<Prisma.$FactorCobroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FactorCobroUpdateArgs>(args: Prisma.SelectSubset<T, FactorCobroUpdateArgs<ExtArgs>>): Prisma.Prisma__FactorCobroClient<runtime.Types.Result.GetResult<Prisma.$FactorCobroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FactorCobroDeleteManyArgs>(args?: Prisma.SelectSubset<T, FactorCobroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FactorCobroUpdateManyArgs>(args: Prisma.SelectSubset<T, FactorCobroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FactorCobroUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FactorCobroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FactorCobroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FactorCobroUpsertArgs>(args: Prisma.SelectSubset<T, FactorCobroUpsertArgs<ExtArgs>>): Prisma.Prisma__FactorCobroClient<runtime.Types.Result.GetResult<Prisma.$FactorCobroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FactorCobroCountArgs>(args?: Prisma.Subset<T, FactorCobroCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FactorCobroCountAggregateOutputType> : number>;
    aggregate<T extends FactorCobroAggregateArgs>(args: Prisma.Subset<T, FactorCobroAggregateArgs>): Prisma.PrismaPromise<GetFactorCobroAggregateType<T>>;
    groupBy<T extends FactorCobroGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FactorCobroGroupByArgs['orderBy'];
    } : {
        orderBy?: FactorCobroGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FactorCobroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFactorCobroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FactorCobroFieldRefs;
}
export interface Prisma__FactorCobroClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    categoria<T extends Prisma.CategoriaFactorCobroDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoriaFactorCobroDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoriaFactorCobroClient<runtime.Types.Result.GetResult<Prisma.$CategoriaFactorCobroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FactorCobroFieldRefs {
    readonly id: Prisma.FieldRef<"FactorCobro", 'Int'>;
    readonly categoriaId: Prisma.FieldRef<"FactorCobro", 'Int'>;
    readonly nombre: Prisma.FieldRef<"FactorCobro", 'String'>;
    readonly valor: Prisma.FieldRef<"FactorCobro", 'Decimal'>;
    readonly tipo: Prisma.FieldRef<"FactorCobro", 'TipoFactor'>;
    readonly fechaInicio: Prisma.FieldRef<"FactorCobro", 'DateTime'>;
    readonly fechaFin: Prisma.FieldRef<"FactorCobro", 'DateTime'>;
    readonly activo: Prisma.FieldRef<"FactorCobro", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"FactorCobro", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"FactorCobro", 'DateTime'>;
}
export type FactorCobroFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactorCobroSelect<ExtArgs> | null;
    omit?: Prisma.FactorCobroOmit<ExtArgs> | null;
    include?: Prisma.FactorCobroInclude<ExtArgs> | null;
    where: Prisma.FactorCobroWhereUniqueInput;
};
export type FactorCobroFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactorCobroSelect<ExtArgs> | null;
    omit?: Prisma.FactorCobroOmit<ExtArgs> | null;
    include?: Prisma.FactorCobroInclude<ExtArgs> | null;
    where: Prisma.FactorCobroWhereUniqueInput;
};
export type FactorCobroFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactorCobroSelect<ExtArgs> | null;
    omit?: Prisma.FactorCobroOmit<ExtArgs> | null;
    include?: Prisma.FactorCobroInclude<ExtArgs> | null;
    where?: Prisma.FactorCobroWhereInput;
    orderBy?: Prisma.FactorCobroOrderByWithRelationInput | Prisma.FactorCobroOrderByWithRelationInput[];
    cursor?: Prisma.FactorCobroWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FactorCobroScalarFieldEnum | Prisma.FactorCobroScalarFieldEnum[];
};
export type FactorCobroFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactorCobroSelect<ExtArgs> | null;
    omit?: Prisma.FactorCobroOmit<ExtArgs> | null;
    include?: Prisma.FactorCobroInclude<ExtArgs> | null;
    where?: Prisma.FactorCobroWhereInput;
    orderBy?: Prisma.FactorCobroOrderByWithRelationInput | Prisma.FactorCobroOrderByWithRelationInput[];
    cursor?: Prisma.FactorCobroWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FactorCobroScalarFieldEnum | Prisma.FactorCobroScalarFieldEnum[];
};
export type FactorCobroFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactorCobroSelect<ExtArgs> | null;
    omit?: Prisma.FactorCobroOmit<ExtArgs> | null;
    include?: Prisma.FactorCobroInclude<ExtArgs> | null;
    where?: Prisma.FactorCobroWhereInput;
    orderBy?: Prisma.FactorCobroOrderByWithRelationInput | Prisma.FactorCobroOrderByWithRelationInput[];
    cursor?: Prisma.FactorCobroWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FactorCobroScalarFieldEnum | Prisma.FactorCobroScalarFieldEnum[];
};
export type FactorCobroCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactorCobroSelect<ExtArgs> | null;
    omit?: Prisma.FactorCobroOmit<ExtArgs> | null;
    include?: Prisma.FactorCobroInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FactorCobroCreateInput, Prisma.FactorCobroUncheckedCreateInput>;
};
export type FactorCobroCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FactorCobroCreateManyInput | Prisma.FactorCobroCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FactorCobroCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactorCobroSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FactorCobroOmit<ExtArgs> | null;
    data: Prisma.FactorCobroCreateManyInput | Prisma.FactorCobroCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FactorCobroIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FactorCobroUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactorCobroSelect<ExtArgs> | null;
    omit?: Prisma.FactorCobroOmit<ExtArgs> | null;
    include?: Prisma.FactorCobroInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FactorCobroUpdateInput, Prisma.FactorCobroUncheckedUpdateInput>;
    where: Prisma.FactorCobroWhereUniqueInput;
};
export type FactorCobroUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FactorCobroUpdateManyMutationInput, Prisma.FactorCobroUncheckedUpdateManyInput>;
    where?: Prisma.FactorCobroWhereInput;
    limit?: number;
};
export type FactorCobroUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactorCobroSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FactorCobroOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FactorCobroUpdateManyMutationInput, Prisma.FactorCobroUncheckedUpdateManyInput>;
    where?: Prisma.FactorCobroWhereInput;
    limit?: number;
    include?: Prisma.FactorCobroIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FactorCobroUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactorCobroSelect<ExtArgs> | null;
    omit?: Prisma.FactorCobroOmit<ExtArgs> | null;
    include?: Prisma.FactorCobroInclude<ExtArgs> | null;
    where: Prisma.FactorCobroWhereUniqueInput;
    create: Prisma.XOR<Prisma.FactorCobroCreateInput, Prisma.FactorCobroUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FactorCobroUpdateInput, Prisma.FactorCobroUncheckedUpdateInput>;
};
export type FactorCobroDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactorCobroSelect<ExtArgs> | null;
    omit?: Prisma.FactorCobroOmit<ExtArgs> | null;
    include?: Prisma.FactorCobroInclude<ExtArgs> | null;
    where: Prisma.FactorCobroWhereUniqueInput;
};
export type FactorCobroDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FactorCobroWhereInput;
    limit?: number;
};
export type FactorCobroDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactorCobroSelect<ExtArgs> | null;
    omit?: Prisma.FactorCobroOmit<ExtArgs> | null;
    include?: Prisma.FactorCobroInclude<ExtArgs> | null;
};
