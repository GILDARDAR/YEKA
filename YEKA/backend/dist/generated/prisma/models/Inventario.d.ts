import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type InventarioModel = runtime.Types.Result.DefaultSelection<Prisma.$InventarioPayload>;
export type AggregateInventario = {
    _count: InventarioCountAggregateOutputType | null;
    _avg: InventarioAvgAggregateOutputType | null;
    _sum: InventarioSumAggregateOutputType | null;
    _min: InventarioMinAggregateOutputType | null;
    _max: InventarioMaxAggregateOutputType | null;
};
export type InventarioAvgAggregateOutputType = {
    id: number | null;
    sedeId: number | null;
    cantidadActual: runtime.Decimal | null;
    puntoReorden: runtime.Decimal | null;
};
export type InventarioSumAggregateOutputType = {
    id: number | null;
    sedeId: number | null;
    cantidadActual: runtime.Decimal | null;
    puntoReorden: runtime.Decimal | null;
};
export type InventarioMinAggregateOutputType = {
    id: number | null;
    sedeId: number | null;
    nombreInsumo: string | null;
    unidad: string | null;
    cantidadActual: runtime.Decimal | null;
    puntoReorden: runtime.Decimal | null;
    updatedAt: Date | null;
};
export type InventarioMaxAggregateOutputType = {
    id: number | null;
    sedeId: number | null;
    nombreInsumo: string | null;
    unidad: string | null;
    cantidadActual: runtime.Decimal | null;
    puntoReorden: runtime.Decimal | null;
    updatedAt: Date | null;
};
export type InventarioCountAggregateOutputType = {
    id: number;
    sedeId: number;
    nombreInsumo: number;
    unidad: number;
    cantidadActual: number;
    puntoReorden: number;
    updatedAt: number;
    _all: number;
};
export type InventarioAvgAggregateInputType = {
    id?: true;
    sedeId?: true;
    cantidadActual?: true;
    puntoReorden?: true;
};
export type InventarioSumAggregateInputType = {
    id?: true;
    sedeId?: true;
    cantidadActual?: true;
    puntoReorden?: true;
};
export type InventarioMinAggregateInputType = {
    id?: true;
    sedeId?: true;
    nombreInsumo?: true;
    unidad?: true;
    cantidadActual?: true;
    puntoReorden?: true;
    updatedAt?: true;
};
export type InventarioMaxAggregateInputType = {
    id?: true;
    sedeId?: true;
    nombreInsumo?: true;
    unidad?: true;
    cantidadActual?: true;
    puntoReorden?: true;
    updatedAt?: true;
};
export type InventarioCountAggregateInputType = {
    id?: true;
    sedeId?: true;
    nombreInsumo?: true;
    unidad?: true;
    cantidadActual?: true;
    puntoReorden?: true;
    updatedAt?: true;
    _all?: true;
};
export type InventarioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventarioWhereInput;
    orderBy?: Prisma.InventarioOrderByWithRelationInput | Prisma.InventarioOrderByWithRelationInput[];
    cursor?: Prisma.InventarioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InventarioCountAggregateInputType;
    _avg?: InventarioAvgAggregateInputType;
    _sum?: InventarioSumAggregateInputType;
    _min?: InventarioMinAggregateInputType;
    _max?: InventarioMaxAggregateInputType;
};
export type GetInventarioAggregateType<T extends InventarioAggregateArgs> = {
    [P in keyof T & keyof AggregateInventario]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInventario[P]> : Prisma.GetScalarType<T[P], AggregateInventario[P]>;
};
export type InventarioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventarioWhereInput;
    orderBy?: Prisma.InventarioOrderByWithAggregationInput | Prisma.InventarioOrderByWithAggregationInput[];
    by: Prisma.InventarioScalarFieldEnum[] | Prisma.InventarioScalarFieldEnum;
    having?: Prisma.InventarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InventarioCountAggregateInputType | true;
    _avg?: InventarioAvgAggregateInputType;
    _sum?: InventarioSumAggregateInputType;
    _min?: InventarioMinAggregateInputType;
    _max?: InventarioMaxAggregateInputType;
};
export type InventarioGroupByOutputType = {
    id: number;
    sedeId: number;
    nombreInsumo: string;
    unidad: string;
    cantidadActual: runtime.Decimal;
    puntoReorden: runtime.Decimal;
    updatedAt: Date;
    _count: InventarioCountAggregateOutputType | null;
    _avg: InventarioAvgAggregateOutputType | null;
    _sum: InventarioSumAggregateOutputType | null;
    _min: InventarioMinAggregateOutputType | null;
    _max: InventarioMaxAggregateOutputType | null;
};
export type GetInventarioGroupByPayload<T extends InventarioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InventarioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InventarioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InventarioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InventarioGroupByOutputType[P]>;
}>>;
export type InventarioWhereInput = {
    AND?: Prisma.InventarioWhereInput | Prisma.InventarioWhereInput[];
    OR?: Prisma.InventarioWhereInput[];
    NOT?: Prisma.InventarioWhereInput | Prisma.InventarioWhereInput[];
    id?: Prisma.IntFilter<"Inventario"> | number;
    sedeId?: Prisma.IntFilter<"Inventario"> | number;
    nombreInsumo?: Prisma.StringFilter<"Inventario"> | string;
    unidad?: Prisma.StringFilter<"Inventario"> | string;
    cantidadActual?: Prisma.DecimalFilter<"Inventario"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    puntoReorden?: Prisma.DecimalFilter<"Inventario"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFilter<"Inventario"> | Date | string;
    sede?: Prisma.XOR<Prisma.SedeScalarRelationFilter, Prisma.SedeWhereInput>;
};
export type InventarioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    nombreInsumo?: Prisma.SortOrder;
    unidad?: Prisma.SortOrder;
    cantidadActual?: Prisma.SortOrder;
    puntoReorden?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    sede?: Prisma.SedeOrderByWithRelationInput;
};
export type InventarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.InventarioWhereInput | Prisma.InventarioWhereInput[];
    OR?: Prisma.InventarioWhereInput[];
    NOT?: Prisma.InventarioWhereInput | Prisma.InventarioWhereInput[];
    sedeId?: Prisma.IntFilter<"Inventario"> | number;
    nombreInsumo?: Prisma.StringFilter<"Inventario"> | string;
    unidad?: Prisma.StringFilter<"Inventario"> | string;
    cantidadActual?: Prisma.DecimalFilter<"Inventario"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    puntoReorden?: Prisma.DecimalFilter<"Inventario"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFilter<"Inventario"> | Date | string;
    sede?: Prisma.XOR<Prisma.SedeScalarRelationFilter, Prisma.SedeWhereInput>;
}, "id">;
export type InventarioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    nombreInsumo?: Prisma.SortOrder;
    unidad?: Prisma.SortOrder;
    cantidadActual?: Prisma.SortOrder;
    puntoReorden?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.InventarioCountOrderByAggregateInput;
    _avg?: Prisma.InventarioAvgOrderByAggregateInput;
    _max?: Prisma.InventarioMaxOrderByAggregateInput;
    _min?: Prisma.InventarioMinOrderByAggregateInput;
    _sum?: Prisma.InventarioSumOrderByAggregateInput;
};
export type InventarioScalarWhereWithAggregatesInput = {
    AND?: Prisma.InventarioScalarWhereWithAggregatesInput | Prisma.InventarioScalarWhereWithAggregatesInput[];
    OR?: Prisma.InventarioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InventarioScalarWhereWithAggregatesInput | Prisma.InventarioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Inventario"> | number;
    sedeId?: Prisma.IntWithAggregatesFilter<"Inventario"> | number;
    nombreInsumo?: Prisma.StringWithAggregatesFilter<"Inventario"> | string;
    unidad?: Prisma.StringWithAggregatesFilter<"Inventario"> | string;
    cantidadActual?: Prisma.DecimalWithAggregatesFilter<"Inventario"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    puntoReorden?: Prisma.DecimalWithAggregatesFilter<"Inventario"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Inventario"> | Date | string;
};
export type InventarioCreateInput = {
    nombreInsumo: string;
    unidad?: string;
    cantidadActual?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    puntoReorden?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Date | string;
    sede: Prisma.SedeCreateNestedOneWithoutInventariosInput;
};
export type InventarioUncheckedCreateInput = {
    id?: number;
    sedeId: number;
    nombreInsumo: string;
    unidad?: string;
    cantidadActual?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    puntoReorden?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Date | string;
};
export type InventarioUpdateInput = {
    nombreInsumo?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidadActual?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    puntoReorden?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sede?: Prisma.SedeUpdateOneRequiredWithoutInventariosNestedInput;
};
export type InventarioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombreInsumo?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidadActual?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    puntoReorden?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventarioCreateManyInput = {
    id?: number;
    sedeId: number;
    nombreInsumo: string;
    unidad?: string;
    cantidadActual?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    puntoReorden?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Date | string;
};
export type InventarioUpdateManyMutationInput = {
    nombreInsumo?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidadActual?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    puntoReorden?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventarioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombreInsumo?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidadActual?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    puntoReorden?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventarioListRelationFilter = {
    every?: Prisma.InventarioWhereInput;
    some?: Prisma.InventarioWhereInput;
    none?: Prisma.InventarioWhereInput;
};
export type InventarioOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InventarioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    nombreInsumo?: Prisma.SortOrder;
    unidad?: Prisma.SortOrder;
    cantidadActual?: Prisma.SortOrder;
    puntoReorden?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InventarioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    cantidadActual?: Prisma.SortOrder;
    puntoReorden?: Prisma.SortOrder;
};
export type InventarioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    nombreInsumo?: Prisma.SortOrder;
    unidad?: Prisma.SortOrder;
    cantidadActual?: Prisma.SortOrder;
    puntoReorden?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InventarioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    nombreInsumo?: Prisma.SortOrder;
    unidad?: Prisma.SortOrder;
    cantidadActual?: Prisma.SortOrder;
    puntoReorden?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InventarioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    cantidadActual?: Prisma.SortOrder;
    puntoReorden?: Prisma.SortOrder;
};
export type InventarioCreateNestedManyWithoutSedeInput = {
    create?: Prisma.XOR<Prisma.InventarioCreateWithoutSedeInput, Prisma.InventarioUncheckedCreateWithoutSedeInput> | Prisma.InventarioCreateWithoutSedeInput[] | Prisma.InventarioUncheckedCreateWithoutSedeInput[];
    connectOrCreate?: Prisma.InventarioCreateOrConnectWithoutSedeInput | Prisma.InventarioCreateOrConnectWithoutSedeInput[];
    createMany?: Prisma.InventarioCreateManySedeInputEnvelope;
    connect?: Prisma.InventarioWhereUniqueInput | Prisma.InventarioWhereUniqueInput[];
};
export type InventarioUncheckedCreateNestedManyWithoutSedeInput = {
    create?: Prisma.XOR<Prisma.InventarioCreateWithoutSedeInput, Prisma.InventarioUncheckedCreateWithoutSedeInput> | Prisma.InventarioCreateWithoutSedeInput[] | Prisma.InventarioUncheckedCreateWithoutSedeInput[];
    connectOrCreate?: Prisma.InventarioCreateOrConnectWithoutSedeInput | Prisma.InventarioCreateOrConnectWithoutSedeInput[];
    createMany?: Prisma.InventarioCreateManySedeInputEnvelope;
    connect?: Prisma.InventarioWhereUniqueInput | Prisma.InventarioWhereUniqueInput[];
};
export type InventarioUpdateManyWithoutSedeNestedInput = {
    create?: Prisma.XOR<Prisma.InventarioCreateWithoutSedeInput, Prisma.InventarioUncheckedCreateWithoutSedeInput> | Prisma.InventarioCreateWithoutSedeInput[] | Prisma.InventarioUncheckedCreateWithoutSedeInput[];
    connectOrCreate?: Prisma.InventarioCreateOrConnectWithoutSedeInput | Prisma.InventarioCreateOrConnectWithoutSedeInput[];
    upsert?: Prisma.InventarioUpsertWithWhereUniqueWithoutSedeInput | Prisma.InventarioUpsertWithWhereUniqueWithoutSedeInput[];
    createMany?: Prisma.InventarioCreateManySedeInputEnvelope;
    set?: Prisma.InventarioWhereUniqueInput | Prisma.InventarioWhereUniqueInput[];
    disconnect?: Prisma.InventarioWhereUniqueInput | Prisma.InventarioWhereUniqueInput[];
    delete?: Prisma.InventarioWhereUniqueInput | Prisma.InventarioWhereUniqueInput[];
    connect?: Prisma.InventarioWhereUniqueInput | Prisma.InventarioWhereUniqueInput[];
    update?: Prisma.InventarioUpdateWithWhereUniqueWithoutSedeInput | Prisma.InventarioUpdateWithWhereUniqueWithoutSedeInput[];
    updateMany?: Prisma.InventarioUpdateManyWithWhereWithoutSedeInput | Prisma.InventarioUpdateManyWithWhereWithoutSedeInput[];
    deleteMany?: Prisma.InventarioScalarWhereInput | Prisma.InventarioScalarWhereInput[];
};
export type InventarioUncheckedUpdateManyWithoutSedeNestedInput = {
    create?: Prisma.XOR<Prisma.InventarioCreateWithoutSedeInput, Prisma.InventarioUncheckedCreateWithoutSedeInput> | Prisma.InventarioCreateWithoutSedeInput[] | Prisma.InventarioUncheckedCreateWithoutSedeInput[];
    connectOrCreate?: Prisma.InventarioCreateOrConnectWithoutSedeInput | Prisma.InventarioCreateOrConnectWithoutSedeInput[];
    upsert?: Prisma.InventarioUpsertWithWhereUniqueWithoutSedeInput | Prisma.InventarioUpsertWithWhereUniqueWithoutSedeInput[];
    createMany?: Prisma.InventarioCreateManySedeInputEnvelope;
    set?: Prisma.InventarioWhereUniqueInput | Prisma.InventarioWhereUniqueInput[];
    disconnect?: Prisma.InventarioWhereUniqueInput | Prisma.InventarioWhereUniqueInput[];
    delete?: Prisma.InventarioWhereUniqueInput | Prisma.InventarioWhereUniqueInput[];
    connect?: Prisma.InventarioWhereUniqueInput | Prisma.InventarioWhereUniqueInput[];
    update?: Prisma.InventarioUpdateWithWhereUniqueWithoutSedeInput | Prisma.InventarioUpdateWithWhereUniqueWithoutSedeInput[];
    updateMany?: Prisma.InventarioUpdateManyWithWhereWithoutSedeInput | Prisma.InventarioUpdateManyWithWhereWithoutSedeInput[];
    deleteMany?: Prisma.InventarioScalarWhereInput | Prisma.InventarioScalarWhereInput[];
};
export type InventarioCreateWithoutSedeInput = {
    nombreInsumo: string;
    unidad?: string;
    cantidadActual?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    puntoReorden?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Date | string;
};
export type InventarioUncheckedCreateWithoutSedeInput = {
    id?: number;
    nombreInsumo: string;
    unidad?: string;
    cantidadActual?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    puntoReorden?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Date | string;
};
export type InventarioCreateOrConnectWithoutSedeInput = {
    where: Prisma.InventarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.InventarioCreateWithoutSedeInput, Prisma.InventarioUncheckedCreateWithoutSedeInput>;
};
export type InventarioCreateManySedeInputEnvelope = {
    data: Prisma.InventarioCreateManySedeInput | Prisma.InventarioCreateManySedeInput[];
    skipDuplicates?: boolean;
};
export type InventarioUpsertWithWhereUniqueWithoutSedeInput = {
    where: Prisma.InventarioWhereUniqueInput;
    update: Prisma.XOR<Prisma.InventarioUpdateWithoutSedeInput, Prisma.InventarioUncheckedUpdateWithoutSedeInput>;
    create: Prisma.XOR<Prisma.InventarioCreateWithoutSedeInput, Prisma.InventarioUncheckedCreateWithoutSedeInput>;
};
export type InventarioUpdateWithWhereUniqueWithoutSedeInput = {
    where: Prisma.InventarioWhereUniqueInput;
    data: Prisma.XOR<Prisma.InventarioUpdateWithoutSedeInput, Prisma.InventarioUncheckedUpdateWithoutSedeInput>;
};
export type InventarioUpdateManyWithWhereWithoutSedeInput = {
    where: Prisma.InventarioScalarWhereInput;
    data: Prisma.XOR<Prisma.InventarioUpdateManyMutationInput, Prisma.InventarioUncheckedUpdateManyWithoutSedeInput>;
};
export type InventarioScalarWhereInput = {
    AND?: Prisma.InventarioScalarWhereInput | Prisma.InventarioScalarWhereInput[];
    OR?: Prisma.InventarioScalarWhereInput[];
    NOT?: Prisma.InventarioScalarWhereInput | Prisma.InventarioScalarWhereInput[];
    id?: Prisma.IntFilter<"Inventario"> | number;
    sedeId?: Prisma.IntFilter<"Inventario"> | number;
    nombreInsumo?: Prisma.StringFilter<"Inventario"> | string;
    unidad?: Prisma.StringFilter<"Inventario"> | string;
    cantidadActual?: Prisma.DecimalFilter<"Inventario"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    puntoReorden?: Prisma.DecimalFilter<"Inventario"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFilter<"Inventario"> | Date | string;
};
export type InventarioCreateManySedeInput = {
    id?: number;
    nombreInsumo: string;
    unidad?: string;
    cantidadActual?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    puntoReorden?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Date | string;
};
export type InventarioUpdateWithoutSedeInput = {
    nombreInsumo?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidadActual?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    puntoReorden?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventarioUncheckedUpdateWithoutSedeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombreInsumo?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidadActual?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    puntoReorden?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventarioUncheckedUpdateManyWithoutSedeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombreInsumo?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidadActual?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    puntoReorden?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventarioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sedeId?: boolean;
    nombreInsumo?: boolean;
    unidad?: boolean;
    cantidadActual?: boolean;
    puntoReorden?: boolean;
    updatedAt?: boolean;
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventario"]>;
export type InventarioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sedeId?: boolean;
    nombreInsumo?: boolean;
    unidad?: boolean;
    cantidadActual?: boolean;
    puntoReorden?: boolean;
    updatedAt?: boolean;
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventario"]>;
export type InventarioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sedeId?: boolean;
    nombreInsumo?: boolean;
    unidad?: boolean;
    cantidadActual?: boolean;
    puntoReorden?: boolean;
    updatedAt?: boolean;
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventario"]>;
export type InventarioSelectScalar = {
    id?: boolean;
    sedeId?: boolean;
    nombreInsumo?: boolean;
    unidad?: boolean;
    cantidadActual?: boolean;
    puntoReorden?: boolean;
    updatedAt?: boolean;
};
export type InventarioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sedeId" | "nombreInsumo" | "unidad" | "cantidadActual" | "puntoReorden" | "updatedAt", ExtArgs["result"]["inventario"]>;
export type InventarioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
};
export type InventarioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
};
export type InventarioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
};
export type $InventarioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Inventario";
    objects: {
        sede: Prisma.$SedePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        sedeId: number;
        nombreInsumo: string;
        unidad: string;
        cantidadActual: runtime.Decimal;
        puntoReorden: runtime.Decimal;
        updatedAt: Date;
    }, ExtArgs["result"]["inventario"]>;
    composites: {};
};
export type InventarioGetPayload<S extends boolean | null | undefined | InventarioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InventarioPayload, S>;
export type InventarioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InventarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InventarioCountAggregateInputType | true;
};
export interface InventarioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Inventario'];
        meta: {
            name: 'Inventario';
        };
    };
    findUnique<T extends InventarioFindUniqueArgs>(args: Prisma.SelectSubset<T, InventarioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InventarioClient<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InventarioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InventarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InventarioClient<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InventarioFindFirstArgs>(args?: Prisma.SelectSubset<T, InventarioFindFirstArgs<ExtArgs>>): Prisma.Prisma__InventarioClient<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InventarioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InventarioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InventarioClient<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InventarioFindManyArgs>(args?: Prisma.SelectSubset<T, InventarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InventarioCreateArgs>(args: Prisma.SelectSubset<T, InventarioCreateArgs<ExtArgs>>): Prisma.Prisma__InventarioClient<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InventarioCreateManyArgs>(args?: Prisma.SelectSubset<T, InventarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InventarioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InventarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InventarioDeleteArgs>(args: Prisma.SelectSubset<T, InventarioDeleteArgs<ExtArgs>>): Prisma.Prisma__InventarioClient<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InventarioUpdateArgs>(args: Prisma.SelectSubset<T, InventarioUpdateArgs<ExtArgs>>): Prisma.Prisma__InventarioClient<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InventarioDeleteManyArgs>(args?: Prisma.SelectSubset<T, InventarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InventarioUpdateManyArgs>(args: Prisma.SelectSubset<T, InventarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InventarioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InventarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InventarioUpsertArgs>(args: Prisma.SelectSubset<T, InventarioUpsertArgs<ExtArgs>>): Prisma.Prisma__InventarioClient<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InventarioCountArgs>(args?: Prisma.Subset<T, InventarioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InventarioCountAggregateOutputType> : number>;
    aggregate<T extends InventarioAggregateArgs>(args: Prisma.Subset<T, InventarioAggregateArgs>): Prisma.PrismaPromise<GetInventarioAggregateType<T>>;
    groupBy<T extends InventarioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InventarioGroupByArgs['orderBy'];
    } : {
        orderBy?: InventarioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InventarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InventarioFieldRefs;
}
export interface Prisma__InventarioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sede<T extends Prisma.SedeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SedeDefaultArgs<ExtArgs>>): Prisma.Prisma__SedeClient<runtime.Types.Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InventarioFieldRefs {
    readonly id: Prisma.FieldRef<"Inventario", 'Int'>;
    readonly sedeId: Prisma.FieldRef<"Inventario", 'Int'>;
    readonly nombreInsumo: Prisma.FieldRef<"Inventario", 'String'>;
    readonly unidad: Prisma.FieldRef<"Inventario", 'String'>;
    readonly cantidadActual: Prisma.FieldRef<"Inventario", 'Decimal'>;
    readonly puntoReorden: Prisma.FieldRef<"Inventario", 'Decimal'>;
    readonly updatedAt: Prisma.FieldRef<"Inventario", 'DateTime'>;
}
export type InventarioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
    where: Prisma.InventarioWhereUniqueInput;
};
export type InventarioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
    where: Prisma.InventarioWhereUniqueInput;
};
export type InventarioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
    where?: Prisma.InventarioWhereInput;
    orderBy?: Prisma.InventarioOrderByWithRelationInput | Prisma.InventarioOrderByWithRelationInput[];
    cursor?: Prisma.InventarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventarioScalarFieldEnum | Prisma.InventarioScalarFieldEnum[];
};
export type InventarioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
    where?: Prisma.InventarioWhereInput;
    orderBy?: Prisma.InventarioOrderByWithRelationInput | Prisma.InventarioOrderByWithRelationInput[];
    cursor?: Prisma.InventarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventarioScalarFieldEnum | Prisma.InventarioScalarFieldEnum[];
};
export type InventarioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
    where?: Prisma.InventarioWhereInput;
    orderBy?: Prisma.InventarioOrderByWithRelationInput | Prisma.InventarioOrderByWithRelationInput[];
    cursor?: Prisma.InventarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventarioScalarFieldEnum | Prisma.InventarioScalarFieldEnum[];
};
export type InventarioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventarioCreateInput, Prisma.InventarioUncheckedCreateInput>;
};
export type InventarioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InventarioCreateManyInput | Prisma.InventarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InventarioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    data: Prisma.InventarioCreateManyInput | Prisma.InventarioCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InventarioIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InventarioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventarioUpdateInput, Prisma.InventarioUncheckedUpdateInput>;
    where: Prisma.InventarioWhereUniqueInput;
};
export type InventarioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InventarioUpdateManyMutationInput, Prisma.InventarioUncheckedUpdateManyInput>;
    where?: Prisma.InventarioWhereInput;
    limit?: number;
};
export type InventarioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventarioUpdateManyMutationInput, Prisma.InventarioUncheckedUpdateManyInput>;
    where?: Prisma.InventarioWhereInput;
    limit?: number;
    include?: Prisma.InventarioIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InventarioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
    where: Prisma.InventarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.InventarioCreateInput, Prisma.InventarioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InventarioUpdateInput, Prisma.InventarioUncheckedUpdateInput>;
};
export type InventarioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
    where: Prisma.InventarioWhereUniqueInput;
};
export type InventarioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventarioWhereInput;
    limit?: number;
};
export type InventarioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
};
