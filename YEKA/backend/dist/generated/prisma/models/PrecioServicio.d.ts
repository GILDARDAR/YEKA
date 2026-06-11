import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PrecioServicioModel = runtime.Types.Result.DefaultSelection<Prisma.$PrecioServicioPayload>;
export type AggregatePrecioServicio = {
    _count: PrecioServicioCountAggregateOutputType | null;
    _avg: PrecioServicioAvgAggregateOutputType | null;
    _sum: PrecioServicioSumAggregateOutputType | null;
    _min: PrecioServicioMinAggregateOutputType | null;
    _max: PrecioServicioMaxAggregateOutputType | null;
};
export type PrecioServicioAvgAggregateOutputType = {
    id: number | null;
    catalogoServicioId: number | null;
    tipoPrendaId: number | null;
    medidaBase: runtime.Decimal | null;
    precioBase: runtime.Decimal | null;
    medidaExtra: runtime.Decimal | null;
    precioExtra: runtime.Decimal | null;
};
export type PrecioServicioSumAggregateOutputType = {
    id: number | null;
    catalogoServicioId: number | null;
    tipoPrendaId: number | null;
    medidaBase: runtime.Decimal | null;
    precioBase: runtime.Decimal | null;
    medidaExtra: runtime.Decimal | null;
    precioExtra: runtime.Decimal | null;
};
export type PrecioServicioMinAggregateOutputType = {
    id: number | null;
    catalogoServicioId: number | null;
    tipoPrendaId: number | null;
    medidaBase: runtime.Decimal | null;
    precioBase: runtime.Decimal | null;
    medidaExtra: runtime.Decimal | null;
    precioExtra: runtime.Decimal | null;
    activo: boolean | null;
};
export type PrecioServicioMaxAggregateOutputType = {
    id: number | null;
    catalogoServicioId: number | null;
    tipoPrendaId: number | null;
    medidaBase: runtime.Decimal | null;
    precioBase: runtime.Decimal | null;
    medidaExtra: runtime.Decimal | null;
    precioExtra: runtime.Decimal | null;
    activo: boolean | null;
};
export type PrecioServicioCountAggregateOutputType = {
    id: number;
    catalogoServicioId: number;
    tipoPrendaId: number;
    medidaBase: number;
    precioBase: number;
    medidaExtra: number;
    precioExtra: number;
    activo: number;
    _all: number;
};
export type PrecioServicioAvgAggregateInputType = {
    id?: true;
    catalogoServicioId?: true;
    tipoPrendaId?: true;
    medidaBase?: true;
    precioBase?: true;
    medidaExtra?: true;
    precioExtra?: true;
};
export type PrecioServicioSumAggregateInputType = {
    id?: true;
    catalogoServicioId?: true;
    tipoPrendaId?: true;
    medidaBase?: true;
    precioBase?: true;
    medidaExtra?: true;
    precioExtra?: true;
};
export type PrecioServicioMinAggregateInputType = {
    id?: true;
    catalogoServicioId?: true;
    tipoPrendaId?: true;
    medidaBase?: true;
    precioBase?: true;
    medidaExtra?: true;
    precioExtra?: true;
    activo?: true;
};
export type PrecioServicioMaxAggregateInputType = {
    id?: true;
    catalogoServicioId?: true;
    tipoPrendaId?: true;
    medidaBase?: true;
    precioBase?: true;
    medidaExtra?: true;
    precioExtra?: true;
    activo?: true;
};
export type PrecioServicioCountAggregateInputType = {
    id?: true;
    catalogoServicioId?: true;
    tipoPrendaId?: true;
    medidaBase?: true;
    precioBase?: true;
    medidaExtra?: true;
    precioExtra?: true;
    activo?: true;
    _all?: true;
};
export type PrecioServicioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrecioServicioWhereInput;
    orderBy?: Prisma.PrecioServicioOrderByWithRelationInput | Prisma.PrecioServicioOrderByWithRelationInput[];
    cursor?: Prisma.PrecioServicioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PrecioServicioCountAggregateInputType;
    _avg?: PrecioServicioAvgAggregateInputType;
    _sum?: PrecioServicioSumAggregateInputType;
    _min?: PrecioServicioMinAggregateInputType;
    _max?: PrecioServicioMaxAggregateInputType;
};
export type GetPrecioServicioAggregateType<T extends PrecioServicioAggregateArgs> = {
    [P in keyof T & keyof AggregatePrecioServicio]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePrecioServicio[P]> : Prisma.GetScalarType<T[P], AggregatePrecioServicio[P]>;
};
export type PrecioServicioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrecioServicioWhereInput;
    orderBy?: Prisma.PrecioServicioOrderByWithAggregationInput | Prisma.PrecioServicioOrderByWithAggregationInput[];
    by: Prisma.PrecioServicioScalarFieldEnum[] | Prisma.PrecioServicioScalarFieldEnum;
    having?: Prisma.PrecioServicioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PrecioServicioCountAggregateInputType | true;
    _avg?: PrecioServicioAvgAggregateInputType;
    _sum?: PrecioServicioSumAggregateInputType;
    _min?: PrecioServicioMinAggregateInputType;
    _max?: PrecioServicioMaxAggregateInputType;
};
export type PrecioServicioGroupByOutputType = {
    id: number;
    catalogoServicioId: number;
    tipoPrendaId: number;
    medidaBase: runtime.Decimal;
    precioBase: runtime.Decimal;
    medidaExtra: runtime.Decimal;
    precioExtra: runtime.Decimal;
    activo: boolean;
    _count: PrecioServicioCountAggregateOutputType | null;
    _avg: PrecioServicioAvgAggregateOutputType | null;
    _sum: PrecioServicioSumAggregateOutputType | null;
    _min: PrecioServicioMinAggregateOutputType | null;
    _max: PrecioServicioMaxAggregateOutputType | null;
};
export type GetPrecioServicioGroupByPayload<T extends PrecioServicioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PrecioServicioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PrecioServicioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PrecioServicioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PrecioServicioGroupByOutputType[P]>;
}>>;
export type PrecioServicioWhereInput = {
    AND?: Prisma.PrecioServicioWhereInput | Prisma.PrecioServicioWhereInput[];
    OR?: Prisma.PrecioServicioWhereInput[];
    NOT?: Prisma.PrecioServicioWhereInput | Prisma.PrecioServicioWhereInput[];
    id?: Prisma.IntFilter<"PrecioServicio"> | number;
    catalogoServicioId?: Prisma.IntFilter<"PrecioServicio"> | number;
    tipoPrendaId?: Prisma.IntFilter<"PrecioServicio"> | number;
    medidaBase?: Prisma.DecimalFilter<"PrecioServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase?: Prisma.DecimalFilter<"PrecioServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra?: Prisma.DecimalFilter<"PrecioServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra?: Prisma.DecimalFilter<"PrecioServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFilter<"PrecioServicio"> | boolean;
    catalogoServicio?: Prisma.XOR<Prisma.CatalogoServicioScalarRelationFilter, Prisma.CatalogoServicioWhereInput>;
    tipoPrenda?: Prisma.XOR<Prisma.TipoPrendaScalarRelationFilter, Prisma.TipoPrendaWhereInput>;
};
export type PrecioServicioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    catalogoServicioId?: Prisma.SortOrder;
    tipoPrendaId?: Prisma.SortOrder;
    medidaBase?: Prisma.SortOrder;
    precioBase?: Prisma.SortOrder;
    medidaExtra?: Prisma.SortOrder;
    precioExtra?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    catalogoServicio?: Prisma.CatalogoServicioOrderByWithRelationInput;
    tipoPrenda?: Prisma.TipoPrendaOrderByWithRelationInput;
};
export type PrecioServicioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    catalogoServicioId_tipoPrendaId?: Prisma.PrecioServicioCatalogoServicioIdTipoPrendaIdCompoundUniqueInput;
    AND?: Prisma.PrecioServicioWhereInput | Prisma.PrecioServicioWhereInput[];
    OR?: Prisma.PrecioServicioWhereInput[];
    NOT?: Prisma.PrecioServicioWhereInput | Prisma.PrecioServicioWhereInput[];
    catalogoServicioId?: Prisma.IntFilter<"PrecioServicio"> | number;
    tipoPrendaId?: Prisma.IntFilter<"PrecioServicio"> | number;
    medidaBase?: Prisma.DecimalFilter<"PrecioServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase?: Prisma.DecimalFilter<"PrecioServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra?: Prisma.DecimalFilter<"PrecioServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra?: Prisma.DecimalFilter<"PrecioServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFilter<"PrecioServicio"> | boolean;
    catalogoServicio?: Prisma.XOR<Prisma.CatalogoServicioScalarRelationFilter, Prisma.CatalogoServicioWhereInput>;
    tipoPrenda?: Prisma.XOR<Prisma.TipoPrendaScalarRelationFilter, Prisma.TipoPrendaWhereInput>;
}, "id" | "catalogoServicioId_tipoPrendaId">;
export type PrecioServicioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    catalogoServicioId?: Prisma.SortOrder;
    tipoPrendaId?: Prisma.SortOrder;
    medidaBase?: Prisma.SortOrder;
    precioBase?: Prisma.SortOrder;
    medidaExtra?: Prisma.SortOrder;
    precioExtra?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    _count?: Prisma.PrecioServicioCountOrderByAggregateInput;
    _avg?: Prisma.PrecioServicioAvgOrderByAggregateInput;
    _max?: Prisma.PrecioServicioMaxOrderByAggregateInput;
    _min?: Prisma.PrecioServicioMinOrderByAggregateInput;
    _sum?: Prisma.PrecioServicioSumOrderByAggregateInput;
};
export type PrecioServicioScalarWhereWithAggregatesInput = {
    AND?: Prisma.PrecioServicioScalarWhereWithAggregatesInput | Prisma.PrecioServicioScalarWhereWithAggregatesInput[];
    OR?: Prisma.PrecioServicioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PrecioServicioScalarWhereWithAggregatesInput | Prisma.PrecioServicioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"PrecioServicio"> | number;
    catalogoServicioId?: Prisma.IntWithAggregatesFilter<"PrecioServicio"> | number;
    tipoPrendaId?: Prisma.IntWithAggregatesFilter<"PrecioServicio"> | number;
    medidaBase?: Prisma.DecimalWithAggregatesFilter<"PrecioServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase?: Prisma.DecimalWithAggregatesFilter<"PrecioServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra?: Prisma.DecimalWithAggregatesFilter<"PrecioServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra?: Prisma.DecimalWithAggregatesFilter<"PrecioServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolWithAggregatesFilter<"PrecioServicio"> | boolean;
};
export type PrecioServicioCreateInput = {
    medidaBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    catalogoServicio: Prisma.CatalogoServicioCreateNestedOneWithoutPreciosServiciosInput;
    tipoPrenda: Prisma.TipoPrendaCreateNestedOneWithoutPreciosServiciosInput;
};
export type PrecioServicioUncheckedCreateInput = {
    id?: number;
    catalogoServicioId: number;
    tipoPrendaId: number;
    medidaBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
};
export type PrecioServicioUpdateInput = {
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    catalogoServicio?: Prisma.CatalogoServicioUpdateOneRequiredWithoutPreciosServiciosNestedInput;
    tipoPrenda?: Prisma.TipoPrendaUpdateOneRequiredWithoutPreciosServiciosNestedInput;
};
export type PrecioServicioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    catalogoServicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipoPrendaId?: Prisma.IntFieldUpdateOperationsInput | number;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PrecioServicioCreateManyInput = {
    id?: number;
    catalogoServicioId: number;
    tipoPrendaId: number;
    medidaBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
};
export type PrecioServicioUpdateManyMutationInput = {
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PrecioServicioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    catalogoServicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipoPrendaId?: Prisma.IntFieldUpdateOperationsInput | number;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PrecioServicioListRelationFilter = {
    every?: Prisma.PrecioServicioWhereInput;
    some?: Prisma.PrecioServicioWhereInput;
    none?: Prisma.PrecioServicioWhereInput;
};
export type PrecioServicioOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PrecioServicioCatalogoServicioIdTipoPrendaIdCompoundUniqueInput = {
    catalogoServicioId: number;
    tipoPrendaId: number;
};
export type PrecioServicioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    catalogoServicioId?: Prisma.SortOrder;
    tipoPrendaId?: Prisma.SortOrder;
    medidaBase?: Prisma.SortOrder;
    precioBase?: Prisma.SortOrder;
    medidaExtra?: Prisma.SortOrder;
    precioExtra?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
};
export type PrecioServicioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    catalogoServicioId?: Prisma.SortOrder;
    tipoPrendaId?: Prisma.SortOrder;
    medidaBase?: Prisma.SortOrder;
    precioBase?: Prisma.SortOrder;
    medidaExtra?: Prisma.SortOrder;
    precioExtra?: Prisma.SortOrder;
};
export type PrecioServicioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    catalogoServicioId?: Prisma.SortOrder;
    tipoPrendaId?: Prisma.SortOrder;
    medidaBase?: Prisma.SortOrder;
    precioBase?: Prisma.SortOrder;
    medidaExtra?: Prisma.SortOrder;
    precioExtra?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
};
export type PrecioServicioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    catalogoServicioId?: Prisma.SortOrder;
    tipoPrendaId?: Prisma.SortOrder;
    medidaBase?: Prisma.SortOrder;
    precioBase?: Prisma.SortOrder;
    medidaExtra?: Prisma.SortOrder;
    precioExtra?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
};
export type PrecioServicioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    catalogoServicioId?: Prisma.SortOrder;
    tipoPrendaId?: Prisma.SortOrder;
    medidaBase?: Prisma.SortOrder;
    precioBase?: Prisma.SortOrder;
    medidaExtra?: Prisma.SortOrder;
    precioExtra?: Prisma.SortOrder;
};
export type PrecioServicioCreateNestedManyWithoutTipoPrendaInput = {
    create?: Prisma.XOR<Prisma.PrecioServicioCreateWithoutTipoPrendaInput, Prisma.PrecioServicioUncheckedCreateWithoutTipoPrendaInput> | Prisma.PrecioServicioCreateWithoutTipoPrendaInput[] | Prisma.PrecioServicioUncheckedCreateWithoutTipoPrendaInput[];
    connectOrCreate?: Prisma.PrecioServicioCreateOrConnectWithoutTipoPrendaInput | Prisma.PrecioServicioCreateOrConnectWithoutTipoPrendaInput[];
    createMany?: Prisma.PrecioServicioCreateManyTipoPrendaInputEnvelope;
    connect?: Prisma.PrecioServicioWhereUniqueInput | Prisma.PrecioServicioWhereUniqueInput[];
};
export type PrecioServicioUncheckedCreateNestedManyWithoutTipoPrendaInput = {
    create?: Prisma.XOR<Prisma.PrecioServicioCreateWithoutTipoPrendaInput, Prisma.PrecioServicioUncheckedCreateWithoutTipoPrendaInput> | Prisma.PrecioServicioCreateWithoutTipoPrendaInput[] | Prisma.PrecioServicioUncheckedCreateWithoutTipoPrendaInput[];
    connectOrCreate?: Prisma.PrecioServicioCreateOrConnectWithoutTipoPrendaInput | Prisma.PrecioServicioCreateOrConnectWithoutTipoPrendaInput[];
    createMany?: Prisma.PrecioServicioCreateManyTipoPrendaInputEnvelope;
    connect?: Prisma.PrecioServicioWhereUniqueInput | Prisma.PrecioServicioWhereUniqueInput[];
};
export type PrecioServicioUpdateManyWithoutTipoPrendaNestedInput = {
    create?: Prisma.XOR<Prisma.PrecioServicioCreateWithoutTipoPrendaInput, Prisma.PrecioServicioUncheckedCreateWithoutTipoPrendaInput> | Prisma.PrecioServicioCreateWithoutTipoPrendaInput[] | Prisma.PrecioServicioUncheckedCreateWithoutTipoPrendaInput[];
    connectOrCreate?: Prisma.PrecioServicioCreateOrConnectWithoutTipoPrendaInput | Prisma.PrecioServicioCreateOrConnectWithoutTipoPrendaInput[];
    upsert?: Prisma.PrecioServicioUpsertWithWhereUniqueWithoutTipoPrendaInput | Prisma.PrecioServicioUpsertWithWhereUniqueWithoutTipoPrendaInput[];
    createMany?: Prisma.PrecioServicioCreateManyTipoPrendaInputEnvelope;
    set?: Prisma.PrecioServicioWhereUniqueInput | Prisma.PrecioServicioWhereUniqueInput[];
    disconnect?: Prisma.PrecioServicioWhereUniqueInput | Prisma.PrecioServicioWhereUniqueInput[];
    delete?: Prisma.PrecioServicioWhereUniqueInput | Prisma.PrecioServicioWhereUniqueInput[];
    connect?: Prisma.PrecioServicioWhereUniqueInput | Prisma.PrecioServicioWhereUniqueInput[];
    update?: Prisma.PrecioServicioUpdateWithWhereUniqueWithoutTipoPrendaInput | Prisma.PrecioServicioUpdateWithWhereUniqueWithoutTipoPrendaInput[];
    updateMany?: Prisma.PrecioServicioUpdateManyWithWhereWithoutTipoPrendaInput | Prisma.PrecioServicioUpdateManyWithWhereWithoutTipoPrendaInput[];
    deleteMany?: Prisma.PrecioServicioScalarWhereInput | Prisma.PrecioServicioScalarWhereInput[];
};
export type PrecioServicioUncheckedUpdateManyWithoutTipoPrendaNestedInput = {
    create?: Prisma.XOR<Prisma.PrecioServicioCreateWithoutTipoPrendaInput, Prisma.PrecioServicioUncheckedCreateWithoutTipoPrendaInput> | Prisma.PrecioServicioCreateWithoutTipoPrendaInput[] | Prisma.PrecioServicioUncheckedCreateWithoutTipoPrendaInput[];
    connectOrCreate?: Prisma.PrecioServicioCreateOrConnectWithoutTipoPrendaInput | Prisma.PrecioServicioCreateOrConnectWithoutTipoPrendaInput[];
    upsert?: Prisma.PrecioServicioUpsertWithWhereUniqueWithoutTipoPrendaInput | Prisma.PrecioServicioUpsertWithWhereUniqueWithoutTipoPrendaInput[];
    createMany?: Prisma.PrecioServicioCreateManyTipoPrendaInputEnvelope;
    set?: Prisma.PrecioServicioWhereUniqueInput | Prisma.PrecioServicioWhereUniqueInput[];
    disconnect?: Prisma.PrecioServicioWhereUniqueInput | Prisma.PrecioServicioWhereUniqueInput[];
    delete?: Prisma.PrecioServicioWhereUniqueInput | Prisma.PrecioServicioWhereUniqueInput[];
    connect?: Prisma.PrecioServicioWhereUniqueInput | Prisma.PrecioServicioWhereUniqueInput[];
    update?: Prisma.PrecioServicioUpdateWithWhereUniqueWithoutTipoPrendaInput | Prisma.PrecioServicioUpdateWithWhereUniqueWithoutTipoPrendaInput[];
    updateMany?: Prisma.PrecioServicioUpdateManyWithWhereWithoutTipoPrendaInput | Prisma.PrecioServicioUpdateManyWithWhereWithoutTipoPrendaInput[];
    deleteMany?: Prisma.PrecioServicioScalarWhereInput | Prisma.PrecioServicioScalarWhereInput[];
};
export type PrecioServicioCreateNestedManyWithoutCatalogoServicioInput = {
    create?: Prisma.XOR<Prisma.PrecioServicioCreateWithoutCatalogoServicioInput, Prisma.PrecioServicioUncheckedCreateWithoutCatalogoServicioInput> | Prisma.PrecioServicioCreateWithoutCatalogoServicioInput[] | Prisma.PrecioServicioUncheckedCreateWithoutCatalogoServicioInput[];
    connectOrCreate?: Prisma.PrecioServicioCreateOrConnectWithoutCatalogoServicioInput | Prisma.PrecioServicioCreateOrConnectWithoutCatalogoServicioInput[];
    createMany?: Prisma.PrecioServicioCreateManyCatalogoServicioInputEnvelope;
    connect?: Prisma.PrecioServicioWhereUniqueInput | Prisma.PrecioServicioWhereUniqueInput[];
};
export type PrecioServicioUncheckedCreateNestedManyWithoutCatalogoServicioInput = {
    create?: Prisma.XOR<Prisma.PrecioServicioCreateWithoutCatalogoServicioInput, Prisma.PrecioServicioUncheckedCreateWithoutCatalogoServicioInput> | Prisma.PrecioServicioCreateWithoutCatalogoServicioInput[] | Prisma.PrecioServicioUncheckedCreateWithoutCatalogoServicioInput[];
    connectOrCreate?: Prisma.PrecioServicioCreateOrConnectWithoutCatalogoServicioInput | Prisma.PrecioServicioCreateOrConnectWithoutCatalogoServicioInput[];
    createMany?: Prisma.PrecioServicioCreateManyCatalogoServicioInputEnvelope;
    connect?: Prisma.PrecioServicioWhereUniqueInput | Prisma.PrecioServicioWhereUniqueInput[];
};
export type PrecioServicioUpdateManyWithoutCatalogoServicioNestedInput = {
    create?: Prisma.XOR<Prisma.PrecioServicioCreateWithoutCatalogoServicioInput, Prisma.PrecioServicioUncheckedCreateWithoutCatalogoServicioInput> | Prisma.PrecioServicioCreateWithoutCatalogoServicioInput[] | Prisma.PrecioServicioUncheckedCreateWithoutCatalogoServicioInput[];
    connectOrCreate?: Prisma.PrecioServicioCreateOrConnectWithoutCatalogoServicioInput | Prisma.PrecioServicioCreateOrConnectWithoutCatalogoServicioInput[];
    upsert?: Prisma.PrecioServicioUpsertWithWhereUniqueWithoutCatalogoServicioInput | Prisma.PrecioServicioUpsertWithWhereUniqueWithoutCatalogoServicioInput[];
    createMany?: Prisma.PrecioServicioCreateManyCatalogoServicioInputEnvelope;
    set?: Prisma.PrecioServicioWhereUniqueInput | Prisma.PrecioServicioWhereUniqueInput[];
    disconnect?: Prisma.PrecioServicioWhereUniqueInput | Prisma.PrecioServicioWhereUniqueInput[];
    delete?: Prisma.PrecioServicioWhereUniqueInput | Prisma.PrecioServicioWhereUniqueInput[];
    connect?: Prisma.PrecioServicioWhereUniqueInput | Prisma.PrecioServicioWhereUniqueInput[];
    update?: Prisma.PrecioServicioUpdateWithWhereUniqueWithoutCatalogoServicioInput | Prisma.PrecioServicioUpdateWithWhereUniqueWithoutCatalogoServicioInput[];
    updateMany?: Prisma.PrecioServicioUpdateManyWithWhereWithoutCatalogoServicioInput | Prisma.PrecioServicioUpdateManyWithWhereWithoutCatalogoServicioInput[];
    deleteMany?: Prisma.PrecioServicioScalarWhereInput | Prisma.PrecioServicioScalarWhereInput[];
};
export type PrecioServicioUncheckedUpdateManyWithoutCatalogoServicioNestedInput = {
    create?: Prisma.XOR<Prisma.PrecioServicioCreateWithoutCatalogoServicioInput, Prisma.PrecioServicioUncheckedCreateWithoutCatalogoServicioInput> | Prisma.PrecioServicioCreateWithoutCatalogoServicioInput[] | Prisma.PrecioServicioUncheckedCreateWithoutCatalogoServicioInput[];
    connectOrCreate?: Prisma.PrecioServicioCreateOrConnectWithoutCatalogoServicioInput | Prisma.PrecioServicioCreateOrConnectWithoutCatalogoServicioInput[];
    upsert?: Prisma.PrecioServicioUpsertWithWhereUniqueWithoutCatalogoServicioInput | Prisma.PrecioServicioUpsertWithWhereUniqueWithoutCatalogoServicioInput[];
    createMany?: Prisma.PrecioServicioCreateManyCatalogoServicioInputEnvelope;
    set?: Prisma.PrecioServicioWhereUniqueInput | Prisma.PrecioServicioWhereUniqueInput[];
    disconnect?: Prisma.PrecioServicioWhereUniqueInput | Prisma.PrecioServicioWhereUniqueInput[];
    delete?: Prisma.PrecioServicioWhereUniqueInput | Prisma.PrecioServicioWhereUniqueInput[];
    connect?: Prisma.PrecioServicioWhereUniqueInput | Prisma.PrecioServicioWhereUniqueInput[];
    update?: Prisma.PrecioServicioUpdateWithWhereUniqueWithoutCatalogoServicioInput | Prisma.PrecioServicioUpdateWithWhereUniqueWithoutCatalogoServicioInput[];
    updateMany?: Prisma.PrecioServicioUpdateManyWithWhereWithoutCatalogoServicioInput | Prisma.PrecioServicioUpdateManyWithWhereWithoutCatalogoServicioInput[];
    deleteMany?: Prisma.PrecioServicioScalarWhereInput | Prisma.PrecioServicioScalarWhereInput[];
};
export type PrecioServicioCreateWithoutTipoPrendaInput = {
    medidaBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    catalogoServicio: Prisma.CatalogoServicioCreateNestedOneWithoutPreciosServiciosInput;
};
export type PrecioServicioUncheckedCreateWithoutTipoPrendaInput = {
    id?: number;
    catalogoServicioId: number;
    medidaBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
};
export type PrecioServicioCreateOrConnectWithoutTipoPrendaInput = {
    where: Prisma.PrecioServicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrecioServicioCreateWithoutTipoPrendaInput, Prisma.PrecioServicioUncheckedCreateWithoutTipoPrendaInput>;
};
export type PrecioServicioCreateManyTipoPrendaInputEnvelope = {
    data: Prisma.PrecioServicioCreateManyTipoPrendaInput | Prisma.PrecioServicioCreateManyTipoPrendaInput[];
    skipDuplicates?: boolean;
};
export type PrecioServicioUpsertWithWhereUniqueWithoutTipoPrendaInput = {
    where: Prisma.PrecioServicioWhereUniqueInput;
    update: Prisma.XOR<Prisma.PrecioServicioUpdateWithoutTipoPrendaInput, Prisma.PrecioServicioUncheckedUpdateWithoutTipoPrendaInput>;
    create: Prisma.XOR<Prisma.PrecioServicioCreateWithoutTipoPrendaInput, Prisma.PrecioServicioUncheckedCreateWithoutTipoPrendaInput>;
};
export type PrecioServicioUpdateWithWhereUniqueWithoutTipoPrendaInput = {
    where: Prisma.PrecioServicioWhereUniqueInput;
    data: Prisma.XOR<Prisma.PrecioServicioUpdateWithoutTipoPrendaInput, Prisma.PrecioServicioUncheckedUpdateWithoutTipoPrendaInput>;
};
export type PrecioServicioUpdateManyWithWhereWithoutTipoPrendaInput = {
    where: Prisma.PrecioServicioScalarWhereInput;
    data: Prisma.XOR<Prisma.PrecioServicioUpdateManyMutationInput, Prisma.PrecioServicioUncheckedUpdateManyWithoutTipoPrendaInput>;
};
export type PrecioServicioScalarWhereInput = {
    AND?: Prisma.PrecioServicioScalarWhereInput | Prisma.PrecioServicioScalarWhereInput[];
    OR?: Prisma.PrecioServicioScalarWhereInput[];
    NOT?: Prisma.PrecioServicioScalarWhereInput | Prisma.PrecioServicioScalarWhereInput[];
    id?: Prisma.IntFilter<"PrecioServicio"> | number;
    catalogoServicioId?: Prisma.IntFilter<"PrecioServicio"> | number;
    tipoPrendaId?: Prisma.IntFilter<"PrecioServicio"> | number;
    medidaBase?: Prisma.DecimalFilter<"PrecioServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase?: Prisma.DecimalFilter<"PrecioServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra?: Prisma.DecimalFilter<"PrecioServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra?: Prisma.DecimalFilter<"PrecioServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFilter<"PrecioServicio"> | boolean;
};
export type PrecioServicioCreateWithoutCatalogoServicioInput = {
    medidaBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    tipoPrenda: Prisma.TipoPrendaCreateNestedOneWithoutPreciosServiciosInput;
};
export type PrecioServicioUncheckedCreateWithoutCatalogoServicioInput = {
    id?: number;
    tipoPrendaId: number;
    medidaBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
};
export type PrecioServicioCreateOrConnectWithoutCatalogoServicioInput = {
    where: Prisma.PrecioServicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrecioServicioCreateWithoutCatalogoServicioInput, Prisma.PrecioServicioUncheckedCreateWithoutCatalogoServicioInput>;
};
export type PrecioServicioCreateManyCatalogoServicioInputEnvelope = {
    data: Prisma.PrecioServicioCreateManyCatalogoServicioInput | Prisma.PrecioServicioCreateManyCatalogoServicioInput[];
    skipDuplicates?: boolean;
};
export type PrecioServicioUpsertWithWhereUniqueWithoutCatalogoServicioInput = {
    where: Prisma.PrecioServicioWhereUniqueInput;
    update: Prisma.XOR<Prisma.PrecioServicioUpdateWithoutCatalogoServicioInput, Prisma.PrecioServicioUncheckedUpdateWithoutCatalogoServicioInput>;
    create: Prisma.XOR<Prisma.PrecioServicioCreateWithoutCatalogoServicioInput, Prisma.PrecioServicioUncheckedCreateWithoutCatalogoServicioInput>;
};
export type PrecioServicioUpdateWithWhereUniqueWithoutCatalogoServicioInput = {
    where: Prisma.PrecioServicioWhereUniqueInput;
    data: Prisma.XOR<Prisma.PrecioServicioUpdateWithoutCatalogoServicioInput, Prisma.PrecioServicioUncheckedUpdateWithoutCatalogoServicioInput>;
};
export type PrecioServicioUpdateManyWithWhereWithoutCatalogoServicioInput = {
    where: Prisma.PrecioServicioScalarWhereInput;
    data: Prisma.XOR<Prisma.PrecioServicioUpdateManyMutationInput, Prisma.PrecioServicioUncheckedUpdateManyWithoutCatalogoServicioInput>;
};
export type PrecioServicioCreateManyTipoPrendaInput = {
    id?: number;
    catalogoServicioId: number;
    medidaBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
};
export type PrecioServicioUpdateWithoutTipoPrendaInput = {
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    catalogoServicio?: Prisma.CatalogoServicioUpdateOneRequiredWithoutPreciosServiciosNestedInput;
};
export type PrecioServicioUncheckedUpdateWithoutTipoPrendaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    catalogoServicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PrecioServicioUncheckedUpdateManyWithoutTipoPrendaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    catalogoServicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PrecioServicioCreateManyCatalogoServicioInput = {
    id?: number;
    tipoPrendaId: number;
    medidaBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
};
export type PrecioServicioUpdateWithoutCatalogoServicioInput = {
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tipoPrenda?: Prisma.TipoPrendaUpdateOneRequiredWithoutPreciosServiciosNestedInput;
};
export type PrecioServicioUncheckedUpdateWithoutCatalogoServicioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipoPrendaId?: Prisma.IntFieldUpdateOperationsInput | number;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PrecioServicioUncheckedUpdateManyWithoutCatalogoServicioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipoPrendaId?: Prisma.IntFieldUpdateOperationsInput | number;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medidaExtra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioExtra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PrecioServicioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    catalogoServicioId?: boolean;
    tipoPrendaId?: boolean;
    medidaBase?: boolean;
    precioBase?: boolean;
    medidaExtra?: boolean;
    precioExtra?: boolean;
    activo?: boolean;
    catalogoServicio?: boolean | Prisma.CatalogoServicioDefaultArgs<ExtArgs>;
    tipoPrenda?: boolean | Prisma.TipoPrendaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["precioServicio"]>;
export type PrecioServicioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    catalogoServicioId?: boolean;
    tipoPrendaId?: boolean;
    medidaBase?: boolean;
    precioBase?: boolean;
    medidaExtra?: boolean;
    precioExtra?: boolean;
    activo?: boolean;
    catalogoServicio?: boolean | Prisma.CatalogoServicioDefaultArgs<ExtArgs>;
    tipoPrenda?: boolean | Prisma.TipoPrendaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["precioServicio"]>;
export type PrecioServicioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    catalogoServicioId?: boolean;
    tipoPrendaId?: boolean;
    medidaBase?: boolean;
    precioBase?: boolean;
    medidaExtra?: boolean;
    precioExtra?: boolean;
    activo?: boolean;
    catalogoServicio?: boolean | Prisma.CatalogoServicioDefaultArgs<ExtArgs>;
    tipoPrenda?: boolean | Prisma.TipoPrendaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["precioServicio"]>;
export type PrecioServicioSelectScalar = {
    id?: boolean;
    catalogoServicioId?: boolean;
    tipoPrendaId?: boolean;
    medidaBase?: boolean;
    precioBase?: boolean;
    medidaExtra?: boolean;
    precioExtra?: boolean;
    activo?: boolean;
};
export type PrecioServicioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "catalogoServicioId" | "tipoPrendaId" | "medidaBase" | "precioBase" | "medidaExtra" | "precioExtra" | "activo", ExtArgs["result"]["precioServicio"]>;
export type PrecioServicioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    catalogoServicio?: boolean | Prisma.CatalogoServicioDefaultArgs<ExtArgs>;
    tipoPrenda?: boolean | Prisma.TipoPrendaDefaultArgs<ExtArgs>;
};
export type PrecioServicioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    catalogoServicio?: boolean | Prisma.CatalogoServicioDefaultArgs<ExtArgs>;
    tipoPrenda?: boolean | Prisma.TipoPrendaDefaultArgs<ExtArgs>;
};
export type PrecioServicioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    catalogoServicio?: boolean | Prisma.CatalogoServicioDefaultArgs<ExtArgs>;
    tipoPrenda?: boolean | Prisma.TipoPrendaDefaultArgs<ExtArgs>;
};
export type $PrecioServicioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PrecioServicio";
    objects: {
        catalogoServicio: Prisma.$CatalogoServicioPayload<ExtArgs>;
        tipoPrenda: Prisma.$TipoPrendaPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        catalogoServicioId: number;
        tipoPrendaId: number;
        medidaBase: runtime.Decimal;
        precioBase: runtime.Decimal;
        medidaExtra: runtime.Decimal;
        precioExtra: runtime.Decimal;
        activo: boolean;
    }, ExtArgs["result"]["precioServicio"]>;
    composites: {};
};
export type PrecioServicioGetPayload<S extends boolean | null | undefined | PrecioServicioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PrecioServicioPayload, S>;
export type PrecioServicioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PrecioServicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PrecioServicioCountAggregateInputType | true;
};
export interface PrecioServicioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PrecioServicio'];
        meta: {
            name: 'PrecioServicio';
        };
    };
    findUnique<T extends PrecioServicioFindUniqueArgs>(args: Prisma.SelectSubset<T, PrecioServicioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PrecioServicioClient<runtime.Types.Result.GetResult<Prisma.$PrecioServicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PrecioServicioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PrecioServicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrecioServicioClient<runtime.Types.Result.GetResult<Prisma.$PrecioServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PrecioServicioFindFirstArgs>(args?: Prisma.SelectSubset<T, PrecioServicioFindFirstArgs<ExtArgs>>): Prisma.Prisma__PrecioServicioClient<runtime.Types.Result.GetResult<Prisma.$PrecioServicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PrecioServicioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PrecioServicioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrecioServicioClient<runtime.Types.Result.GetResult<Prisma.$PrecioServicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PrecioServicioFindManyArgs>(args?: Prisma.SelectSubset<T, PrecioServicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrecioServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PrecioServicioCreateArgs>(args: Prisma.SelectSubset<T, PrecioServicioCreateArgs<ExtArgs>>): Prisma.Prisma__PrecioServicioClient<runtime.Types.Result.GetResult<Prisma.$PrecioServicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PrecioServicioCreateManyArgs>(args?: Prisma.SelectSubset<T, PrecioServicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PrecioServicioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PrecioServicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrecioServicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PrecioServicioDeleteArgs>(args: Prisma.SelectSubset<T, PrecioServicioDeleteArgs<ExtArgs>>): Prisma.Prisma__PrecioServicioClient<runtime.Types.Result.GetResult<Prisma.$PrecioServicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PrecioServicioUpdateArgs>(args: Prisma.SelectSubset<T, PrecioServicioUpdateArgs<ExtArgs>>): Prisma.Prisma__PrecioServicioClient<runtime.Types.Result.GetResult<Prisma.$PrecioServicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PrecioServicioDeleteManyArgs>(args?: Prisma.SelectSubset<T, PrecioServicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PrecioServicioUpdateManyArgs>(args: Prisma.SelectSubset<T, PrecioServicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PrecioServicioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PrecioServicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrecioServicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PrecioServicioUpsertArgs>(args: Prisma.SelectSubset<T, PrecioServicioUpsertArgs<ExtArgs>>): Prisma.Prisma__PrecioServicioClient<runtime.Types.Result.GetResult<Prisma.$PrecioServicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PrecioServicioCountArgs>(args?: Prisma.Subset<T, PrecioServicioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PrecioServicioCountAggregateOutputType> : number>;
    aggregate<T extends PrecioServicioAggregateArgs>(args: Prisma.Subset<T, PrecioServicioAggregateArgs>): Prisma.PrismaPromise<GetPrecioServicioAggregateType<T>>;
    groupBy<T extends PrecioServicioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PrecioServicioGroupByArgs['orderBy'];
    } : {
        orderBy?: PrecioServicioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PrecioServicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrecioServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PrecioServicioFieldRefs;
}
export interface Prisma__PrecioServicioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    catalogoServicio<T extends Prisma.CatalogoServicioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CatalogoServicioDefaultArgs<ExtArgs>>): Prisma.Prisma__CatalogoServicioClient<runtime.Types.Result.GetResult<Prisma.$CatalogoServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tipoPrenda<T extends Prisma.TipoPrendaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TipoPrendaDefaultArgs<ExtArgs>>): Prisma.Prisma__TipoPrendaClient<runtime.Types.Result.GetResult<Prisma.$TipoPrendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PrecioServicioFieldRefs {
    readonly id: Prisma.FieldRef<"PrecioServicio", 'Int'>;
    readonly catalogoServicioId: Prisma.FieldRef<"PrecioServicio", 'Int'>;
    readonly tipoPrendaId: Prisma.FieldRef<"PrecioServicio", 'Int'>;
    readonly medidaBase: Prisma.FieldRef<"PrecioServicio", 'Decimal'>;
    readonly precioBase: Prisma.FieldRef<"PrecioServicio", 'Decimal'>;
    readonly medidaExtra: Prisma.FieldRef<"PrecioServicio", 'Decimal'>;
    readonly precioExtra: Prisma.FieldRef<"PrecioServicio", 'Decimal'>;
    readonly activo: Prisma.FieldRef<"PrecioServicio", 'Boolean'>;
}
export type PrecioServicioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrecioServicioSelect<ExtArgs> | null;
    omit?: Prisma.PrecioServicioOmit<ExtArgs> | null;
    include?: Prisma.PrecioServicioInclude<ExtArgs> | null;
    where: Prisma.PrecioServicioWhereUniqueInput;
};
export type PrecioServicioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrecioServicioSelect<ExtArgs> | null;
    omit?: Prisma.PrecioServicioOmit<ExtArgs> | null;
    include?: Prisma.PrecioServicioInclude<ExtArgs> | null;
    where: Prisma.PrecioServicioWhereUniqueInput;
};
export type PrecioServicioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrecioServicioSelect<ExtArgs> | null;
    omit?: Prisma.PrecioServicioOmit<ExtArgs> | null;
    include?: Prisma.PrecioServicioInclude<ExtArgs> | null;
    where?: Prisma.PrecioServicioWhereInput;
    orderBy?: Prisma.PrecioServicioOrderByWithRelationInput | Prisma.PrecioServicioOrderByWithRelationInput[];
    cursor?: Prisma.PrecioServicioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrecioServicioScalarFieldEnum | Prisma.PrecioServicioScalarFieldEnum[];
};
export type PrecioServicioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrecioServicioSelect<ExtArgs> | null;
    omit?: Prisma.PrecioServicioOmit<ExtArgs> | null;
    include?: Prisma.PrecioServicioInclude<ExtArgs> | null;
    where?: Prisma.PrecioServicioWhereInput;
    orderBy?: Prisma.PrecioServicioOrderByWithRelationInput | Prisma.PrecioServicioOrderByWithRelationInput[];
    cursor?: Prisma.PrecioServicioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrecioServicioScalarFieldEnum | Prisma.PrecioServicioScalarFieldEnum[];
};
export type PrecioServicioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrecioServicioSelect<ExtArgs> | null;
    omit?: Prisma.PrecioServicioOmit<ExtArgs> | null;
    include?: Prisma.PrecioServicioInclude<ExtArgs> | null;
    where?: Prisma.PrecioServicioWhereInput;
    orderBy?: Prisma.PrecioServicioOrderByWithRelationInput | Prisma.PrecioServicioOrderByWithRelationInput[];
    cursor?: Prisma.PrecioServicioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrecioServicioScalarFieldEnum | Prisma.PrecioServicioScalarFieldEnum[];
};
export type PrecioServicioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrecioServicioSelect<ExtArgs> | null;
    omit?: Prisma.PrecioServicioOmit<ExtArgs> | null;
    include?: Prisma.PrecioServicioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrecioServicioCreateInput, Prisma.PrecioServicioUncheckedCreateInput>;
};
export type PrecioServicioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PrecioServicioCreateManyInput | Prisma.PrecioServicioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PrecioServicioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrecioServicioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PrecioServicioOmit<ExtArgs> | null;
    data: Prisma.PrecioServicioCreateManyInput | Prisma.PrecioServicioCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PrecioServicioIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PrecioServicioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrecioServicioSelect<ExtArgs> | null;
    omit?: Prisma.PrecioServicioOmit<ExtArgs> | null;
    include?: Prisma.PrecioServicioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrecioServicioUpdateInput, Prisma.PrecioServicioUncheckedUpdateInput>;
    where: Prisma.PrecioServicioWhereUniqueInput;
};
export type PrecioServicioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PrecioServicioUpdateManyMutationInput, Prisma.PrecioServicioUncheckedUpdateManyInput>;
    where?: Prisma.PrecioServicioWhereInput;
    limit?: number;
};
export type PrecioServicioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrecioServicioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PrecioServicioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrecioServicioUpdateManyMutationInput, Prisma.PrecioServicioUncheckedUpdateManyInput>;
    where?: Prisma.PrecioServicioWhereInput;
    limit?: number;
    include?: Prisma.PrecioServicioIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PrecioServicioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrecioServicioSelect<ExtArgs> | null;
    omit?: Prisma.PrecioServicioOmit<ExtArgs> | null;
    include?: Prisma.PrecioServicioInclude<ExtArgs> | null;
    where: Prisma.PrecioServicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrecioServicioCreateInput, Prisma.PrecioServicioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PrecioServicioUpdateInput, Prisma.PrecioServicioUncheckedUpdateInput>;
};
export type PrecioServicioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrecioServicioSelect<ExtArgs> | null;
    omit?: Prisma.PrecioServicioOmit<ExtArgs> | null;
    include?: Prisma.PrecioServicioInclude<ExtArgs> | null;
    where: Prisma.PrecioServicioWhereUniqueInput;
};
export type PrecioServicioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrecioServicioWhereInput;
    limit?: number;
};
export type PrecioServicioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrecioServicioSelect<ExtArgs> | null;
    omit?: Prisma.PrecioServicioOmit<ExtArgs> | null;
    include?: Prisma.PrecioServicioInclude<ExtArgs> | null;
};
