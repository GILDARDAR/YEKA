import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AbonoModel = runtime.Types.Result.DefaultSelection<Prisma.$AbonoPayload>;
export type AggregateAbono = {
    _count: AbonoCountAggregateOutputType | null;
    _avg: AbonoAvgAggregateOutputType | null;
    _sum: AbonoSumAggregateOutputType | null;
    _min: AbonoMinAggregateOutputType | null;
    _max: AbonoMaxAggregateOutputType | null;
};
export type AbonoAvgAggregateOutputType = {
    id: number | null;
    facturaId: number | null;
    monto: runtime.Decimal | null;
};
export type AbonoSumAggregateOutputType = {
    id: number | null;
    facturaId: number | null;
    monto: runtime.Decimal | null;
};
export type AbonoMinAggregateOutputType = {
    id: number | null;
    facturaId: number | null;
    monto: runtime.Decimal | null;
    metodoPago: $Enums.MetodoPago | null;
    notas: string | null;
    fecha: Date | null;
};
export type AbonoMaxAggregateOutputType = {
    id: number | null;
    facturaId: number | null;
    monto: runtime.Decimal | null;
    metodoPago: $Enums.MetodoPago | null;
    notas: string | null;
    fecha: Date | null;
};
export type AbonoCountAggregateOutputType = {
    id: number;
    facturaId: number;
    monto: number;
    metodoPago: number;
    notas: number;
    fecha: number;
    _all: number;
};
export type AbonoAvgAggregateInputType = {
    id?: true;
    facturaId?: true;
    monto?: true;
};
export type AbonoSumAggregateInputType = {
    id?: true;
    facturaId?: true;
    monto?: true;
};
export type AbonoMinAggregateInputType = {
    id?: true;
    facturaId?: true;
    monto?: true;
    metodoPago?: true;
    notas?: true;
    fecha?: true;
};
export type AbonoMaxAggregateInputType = {
    id?: true;
    facturaId?: true;
    monto?: true;
    metodoPago?: true;
    notas?: true;
    fecha?: true;
};
export type AbonoCountAggregateInputType = {
    id?: true;
    facturaId?: true;
    monto?: true;
    metodoPago?: true;
    notas?: true;
    fecha?: true;
    _all?: true;
};
export type AbonoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AbonoWhereInput;
    orderBy?: Prisma.AbonoOrderByWithRelationInput | Prisma.AbonoOrderByWithRelationInput[];
    cursor?: Prisma.AbonoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AbonoCountAggregateInputType;
    _avg?: AbonoAvgAggregateInputType;
    _sum?: AbonoSumAggregateInputType;
    _min?: AbonoMinAggregateInputType;
    _max?: AbonoMaxAggregateInputType;
};
export type GetAbonoAggregateType<T extends AbonoAggregateArgs> = {
    [P in keyof T & keyof AggregateAbono]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAbono[P]> : Prisma.GetScalarType<T[P], AggregateAbono[P]>;
};
export type AbonoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AbonoWhereInput;
    orderBy?: Prisma.AbonoOrderByWithAggregationInput | Prisma.AbonoOrderByWithAggregationInput[];
    by: Prisma.AbonoScalarFieldEnum[] | Prisma.AbonoScalarFieldEnum;
    having?: Prisma.AbonoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AbonoCountAggregateInputType | true;
    _avg?: AbonoAvgAggregateInputType;
    _sum?: AbonoSumAggregateInputType;
    _min?: AbonoMinAggregateInputType;
    _max?: AbonoMaxAggregateInputType;
};
export type AbonoGroupByOutputType = {
    id: number;
    facturaId: number;
    monto: runtime.Decimal;
    metodoPago: $Enums.MetodoPago;
    notas: string | null;
    fecha: Date;
    _count: AbonoCountAggregateOutputType | null;
    _avg: AbonoAvgAggregateOutputType | null;
    _sum: AbonoSumAggregateOutputType | null;
    _min: AbonoMinAggregateOutputType | null;
    _max: AbonoMaxAggregateOutputType | null;
};
export type GetAbonoGroupByPayload<T extends AbonoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AbonoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AbonoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AbonoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AbonoGroupByOutputType[P]>;
}>>;
export type AbonoWhereInput = {
    AND?: Prisma.AbonoWhereInput | Prisma.AbonoWhereInput[];
    OR?: Prisma.AbonoWhereInput[];
    NOT?: Prisma.AbonoWhereInput | Prisma.AbonoWhereInput[];
    id?: Prisma.IntFilter<"Abono"> | number;
    facturaId?: Prisma.IntFilter<"Abono"> | number;
    monto?: Prisma.DecimalFilter<"Abono"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFilter<"Abono"> | $Enums.MetodoPago;
    notas?: Prisma.StringNullableFilter<"Abono"> | string | null;
    fecha?: Prisma.DateTimeFilter<"Abono"> | Date | string;
    factura?: Prisma.XOR<Prisma.FacturaScalarRelationFilter, Prisma.FacturaWhereInput>;
};
export type AbonoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    facturaId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    notas?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    factura?: Prisma.FacturaOrderByWithRelationInput;
};
export type AbonoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AbonoWhereInput | Prisma.AbonoWhereInput[];
    OR?: Prisma.AbonoWhereInput[];
    NOT?: Prisma.AbonoWhereInput | Prisma.AbonoWhereInput[];
    facturaId?: Prisma.IntFilter<"Abono"> | number;
    monto?: Prisma.DecimalFilter<"Abono"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFilter<"Abono"> | $Enums.MetodoPago;
    notas?: Prisma.StringNullableFilter<"Abono"> | string | null;
    fecha?: Prisma.DateTimeFilter<"Abono"> | Date | string;
    factura?: Prisma.XOR<Prisma.FacturaScalarRelationFilter, Prisma.FacturaWhereInput>;
}, "id">;
export type AbonoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    facturaId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    notas?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    _count?: Prisma.AbonoCountOrderByAggregateInput;
    _avg?: Prisma.AbonoAvgOrderByAggregateInput;
    _max?: Prisma.AbonoMaxOrderByAggregateInput;
    _min?: Prisma.AbonoMinOrderByAggregateInput;
    _sum?: Prisma.AbonoSumOrderByAggregateInput;
};
export type AbonoScalarWhereWithAggregatesInput = {
    AND?: Prisma.AbonoScalarWhereWithAggregatesInput | Prisma.AbonoScalarWhereWithAggregatesInput[];
    OR?: Prisma.AbonoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AbonoScalarWhereWithAggregatesInput | Prisma.AbonoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Abono"> | number;
    facturaId?: Prisma.IntWithAggregatesFilter<"Abono"> | number;
    monto?: Prisma.DecimalWithAggregatesFilter<"Abono"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoWithAggregatesFilter<"Abono"> | $Enums.MetodoPago;
    notas?: Prisma.StringNullableWithAggregatesFilter<"Abono"> | string | null;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"Abono"> | Date | string;
};
export type AbonoCreateInput = {
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    notas?: string | null;
    fecha?: Date | string;
    factura: Prisma.FacturaCreateNestedOneWithoutAbonosInput;
};
export type AbonoUncheckedCreateInput = {
    id?: number;
    facturaId: number;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    notas?: string | null;
    fecha?: Date | string;
};
export type AbonoUpdateInput = {
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    factura?: Prisma.FacturaUpdateOneRequiredWithoutAbonosNestedInput;
};
export type AbonoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    facturaId?: Prisma.IntFieldUpdateOperationsInput | number;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AbonoCreateManyInput = {
    id?: number;
    facturaId: number;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    notas?: string | null;
    fecha?: Date | string;
};
export type AbonoUpdateManyMutationInput = {
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AbonoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    facturaId?: Prisma.IntFieldUpdateOperationsInput | number;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AbonoListRelationFilter = {
    every?: Prisma.AbonoWhereInput;
    some?: Prisma.AbonoWhereInput;
    none?: Prisma.AbonoWhereInput;
};
export type AbonoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AbonoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    facturaId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    notas?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type AbonoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    facturaId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
};
export type AbonoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    facturaId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    notas?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type AbonoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    facturaId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    notas?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type AbonoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    facturaId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
};
export type AbonoCreateNestedManyWithoutFacturaInput = {
    create?: Prisma.XOR<Prisma.AbonoCreateWithoutFacturaInput, Prisma.AbonoUncheckedCreateWithoutFacturaInput> | Prisma.AbonoCreateWithoutFacturaInput[] | Prisma.AbonoUncheckedCreateWithoutFacturaInput[];
    connectOrCreate?: Prisma.AbonoCreateOrConnectWithoutFacturaInput | Prisma.AbonoCreateOrConnectWithoutFacturaInput[];
    createMany?: Prisma.AbonoCreateManyFacturaInputEnvelope;
    connect?: Prisma.AbonoWhereUniqueInput | Prisma.AbonoWhereUniqueInput[];
};
export type AbonoUncheckedCreateNestedManyWithoutFacturaInput = {
    create?: Prisma.XOR<Prisma.AbonoCreateWithoutFacturaInput, Prisma.AbonoUncheckedCreateWithoutFacturaInput> | Prisma.AbonoCreateWithoutFacturaInput[] | Prisma.AbonoUncheckedCreateWithoutFacturaInput[];
    connectOrCreate?: Prisma.AbonoCreateOrConnectWithoutFacturaInput | Prisma.AbonoCreateOrConnectWithoutFacturaInput[];
    createMany?: Prisma.AbonoCreateManyFacturaInputEnvelope;
    connect?: Prisma.AbonoWhereUniqueInput | Prisma.AbonoWhereUniqueInput[];
};
export type AbonoUpdateManyWithoutFacturaNestedInput = {
    create?: Prisma.XOR<Prisma.AbonoCreateWithoutFacturaInput, Prisma.AbonoUncheckedCreateWithoutFacturaInput> | Prisma.AbonoCreateWithoutFacturaInput[] | Prisma.AbonoUncheckedCreateWithoutFacturaInput[];
    connectOrCreate?: Prisma.AbonoCreateOrConnectWithoutFacturaInput | Prisma.AbonoCreateOrConnectWithoutFacturaInput[];
    upsert?: Prisma.AbonoUpsertWithWhereUniqueWithoutFacturaInput | Prisma.AbonoUpsertWithWhereUniqueWithoutFacturaInput[];
    createMany?: Prisma.AbonoCreateManyFacturaInputEnvelope;
    set?: Prisma.AbonoWhereUniqueInput | Prisma.AbonoWhereUniqueInput[];
    disconnect?: Prisma.AbonoWhereUniqueInput | Prisma.AbonoWhereUniqueInput[];
    delete?: Prisma.AbonoWhereUniqueInput | Prisma.AbonoWhereUniqueInput[];
    connect?: Prisma.AbonoWhereUniqueInput | Prisma.AbonoWhereUniqueInput[];
    update?: Prisma.AbonoUpdateWithWhereUniqueWithoutFacturaInput | Prisma.AbonoUpdateWithWhereUniqueWithoutFacturaInput[];
    updateMany?: Prisma.AbonoUpdateManyWithWhereWithoutFacturaInput | Prisma.AbonoUpdateManyWithWhereWithoutFacturaInput[];
    deleteMany?: Prisma.AbonoScalarWhereInput | Prisma.AbonoScalarWhereInput[];
};
export type AbonoUncheckedUpdateManyWithoutFacturaNestedInput = {
    create?: Prisma.XOR<Prisma.AbonoCreateWithoutFacturaInput, Prisma.AbonoUncheckedCreateWithoutFacturaInput> | Prisma.AbonoCreateWithoutFacturaInput[] | Prisma.AbonoUncheckedCreateWithoutFacturaInput[];
    connectOrCreate?: Prisma.AbonoCreateOrConnectWithoutFacturaInput | Prisma.AbonoCreateOrConnectWithoutFacturaInput[];
    upsert?: Prisma.AbonoUpsertWithWhereUniqueWithoutFacturaInput | Prisma.AbonoUpsertWithWhereUniqueWithoutFacturaInput[];
    createMany?: Prisma.AbonoCreateManyFacturaInputEnvelope;
    set?: Prisma.AbonoWhereUniqueInput | Prisma.AbonoWhereUniqueInput[];
    disconnect?: Prisma.AbonoWhereUniqueInput | Prisma.AbonoWhereUniqueInput[];
    delete?: Prisma.AbonoWhereUniqueInput | Prisma.AbonoWhereUniqueInput[];
    connect?: Prisma.AbonoWhereUniqueInput | Prisma.AbonoWhereUniqueInput[];
    update?: Prisma.AbonoUpdateWithWhereUniqueWithoutFacturaInput | Prisma.AbonoUpdateWithWhereUniqueWithoutFacturaInput[];
    updateMany?: Prisma.AbonoUpdateManyWithWhereWithoutFacturaInput | Prisma.AbonoUpdateManyWithWhereWithoutFacturaInput[];
    deleteMany?: Prisma.AbonoScalarWhereInput | Prisma.AbonoScalarWhereInput[];
};
export type EnumMetodoPagoFieldUpdateOperationsInput = {
    set?: $Enums.MetodoPago;
};
export type AbonoCreateWithoutFacturaInput = {
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    notas?: string | null;
    fecha?: Date | string;
};
export type AbonoUncheckedCreateWithoutFacturaInput = {
    id?: number;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    notas?: string | null;
    fecha?: Date | string;
};
export type AbonoCreateOrConnectWithoutFacturaInput = {
    where: Prisma.AbonoWhereUniqueInput;
    create: Prisma.XOR<Prisma.AbonoCreateWithoutFacturaInput, Prisma.AbonoUncheckedCreateWithoutFacturaInput>;
};
export type AbonoCreateManyFacturaInputEnvelope = {
    data: Prisma.AbonoCreateManyFacturaInput | Prisma.AbonoCreateManyFacturaInput[];
    skipDuplicates?: boolean;
};
export type AbonoUpsertWithWhereUniqueWithoutFacturaInput = {
    where: Prisma.AbonoWhereUniqueInput;
    update: Prisma.XOR<Prisma.AbonoUpdateWithoutFacturaInput, Prisma.AbonoUncheckedUpdateWithoutFacturaInput>;
    create: Prisma.XOR<Prisma.AbonoCreateWithoutFacturaInput, Prisma.AbonoUncheckedCreateWithoutFacturaInput>;
};
export type AbonoUpdateWithWhereUniqueWithoutFacturaInput = {
    where: Prisma.AbonoWhereUniqueInput;
    data: Prisma.XOR<Prisma.AbonoUpdateWithoutFacturaInput, Prisma.AbonoUncheckedUpdateWithoutFacturaInput>;
};
export type AbonoUpdateManyWithWhereWithoutFacturaInput = {
    where: Prisma.AbonoScalarWhereInput;
    data: Prisma.XOR<Prisma.AbonoUpdateManyMutationInput, Prisma.AbonoUncheckedUpdateManyWithoutFacturaInput>;
};
export type AbonoScalarWhereInput = {
    AND?: Prisma.AbonoScalarWhereInput | Prisma.AbonoScalarWhereInput[];
    OR?: Prisma.AbonoScalarWhereInput[];
    NOT?: Prisma.AbonoScalarWhereInput | Prisma.AbonoScalarWhereInput[];
    id?: Prisma.IntFilter<"Abono"> | number;
    facturaId?: Prisma.IntFilter<"Abono"> | number;
    monto?: Prisma.DecimalFilter<"Abono"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFilter<"Abono"> | $Enums.MetodoPago;
    notas?: Prisma.StringNullableFilter<"Abono"> | string | null;
    fecha?: Prisma.DateTimeFilter<"Abono"> | Date | string;
};
export type AbonoCreateManyFacturaInput = {
    id?: number;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    notas?: string | null;
    fecha?: Date | string;
};
export type AbonoUpdateWithoutFacturaInput = {
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AbonoUncheckedUpdateWithoutFacturaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AbonoUncheckedUpdateManyWithoutFacturaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AbonoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    facturaId?: boolean;
    monto?: boolean;
    metodoPago?: boolean;
    notas?: boolean;
    fecha?: boolean;
    factura?: boolean | Prisma.FacturaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["abono"]>;
export type AbonoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    facturaId?: boolean;
    monto?: boolean;
    metodoPago?: boolean;
    notas?: boolean;
    fecha?: boolean;
    factura?: boolean | Prisma.FacturaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["abono"]>;
export type AbonoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    facturaId?: boolean;
    monto?: boolean;
    metodoPago?: boolean;
    notas?: boolean;
    fecha?: boolean;
    factura?: boolean | Prisma.FacturaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["abono"]>;
export type AbonoSelectScalar = {
    id?: boolean;
    facturaId?: boolean;
    monto?: boolean;
    metodoPago?: boolean;
    notas?: boolean;
    fecha?: boolean;
};
export type AbonoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "facturaId" | "monto" | "metodoPago" | "notas" | "fecha", ExtArgs["result"]["abono"]>;
export type AbonoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    factura?: boolean | Prisma.FacturaDefaultArgs<ExtArgs>;
};
export type AbonoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    factura?: boolean | Prisma.FacturaDefaultArgs<ExtArgs>;
};
export type AbonoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    factura?: boolean | Prisma.FacturaDefaultArgs<ExtArgs>;
};
export type $AbonoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Abono";
    objects: {
        factura: Prisma.$FacturaPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        facturaId: number;
        monto: runtime.Decimal;
        metodoPago: $Enums.MetodoPago;
        notas: string | null;
        fecha: Date;
    }, ExtArgs["result"]["abono"]>;
    composites: {};
};
export type AbonoGetPayload<S extends boolean | null | undefined | AbonoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AbonoPayload, S>;
export type AbonoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AbonoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AbonoCountAggregateInputType | true;
};
export interface AbonoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Abono'];
        meta: {
            name: 'Abono';
        };
    };
    findUnique<T extends AbonoFindUniqueArgs>(args: Prisma.SelectSubset<T, AbonoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AbonoClient<runtime.Types.Result.GetResult<Prisma.$AbonoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AbonoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AbonoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AbonoClient<runtime.Types.Result.GetResult<Prisma.$AbonoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AbonoFindFirstArgs>(args?: Prisma.SelectSubset<T, AbonoFindFirstArgs<ExtArgs>>): Prisma.Prisma__AbonoClient<runtime.Types.Result.GetResult<Prisma.$AbonoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AbonoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AbonoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AbonoClient<runtime.Types.Result.GetResult<Prisma.$AbonoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AbonoFindManyArgs>(args?: Prisma.SelectSubset<T, AbonoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AbonoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AbonoCreateArgs>(args: Prisma.SelectSubset<T, AbonoCreateArgs<ExtArgs>>): Prisma.Prisma__AbonoClient<runtime.Types.Result.GetResult<Prisma.$AbonoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AbonoCreateManyArgs>(args?: Prisma.SelectSubset<T, AbonoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AbonoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AbonoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AbonoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AbonoDeleteArgs>(args: Prisma.SelectSubset<T, AbonoDeleteArgs<ExtArgs>>): Prisma.Prisma__AbonoClient<runtime.Types.Result.GetResult<Prisma.$AbonoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AbonoUpdateArgs>(args: Prisma.SelectSubset<T, AbonoUpdateArgs<ExtArgs>>): Prisma.Prisma__AbonoClient<runtime.Types.Result.GetResult<Prisma.$AbonoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AbonoDeleteManyArgs>(args?: Prisma.SelectSubset<T, AbonoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AbonoUpdateManyArgs>(args: Prisma.SelectSubset<T, AbonoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AbonoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AbonoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AbonoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AbonoUpsertArgs>(args: Prisma.SelectSubset<T, AbonoUpsertArgs<ExtArgs>>): Prisma.Prisma__AbonoClient<runtime.Types.Result.GetResult<Prisma.$AbonoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AbonoCountArgs>(args?: Prisma.Subset<T, AbonoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AbonoCountAggregateOutputType> : number>;
    aggregate<T extends AbonoAggregateArgs>(args: Prisma.Subset<T, AbonoAggregateArgs>): Prisma.PrismaPromise<GetAbonoAggregateType<T>>;
    groupBy<T extends AbonoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AbonoGroupByArgs['orderBy'];
    } : {
        orderBy?: AbonoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AbonoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbonoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AbonoFieldRefs;
}
export interface Prisma__AbonoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    factura<T extends Prisma.FacturaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FacturaDefaultArgs<ExtArgs>>): Prisma.Prisma__FacturaClient<runtime.Types.Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AbonoFieldRefs {
    readonly id: Prisma.FieldRef<"Abono", 'Int'>;
    readonly facturaId: Prisma.FieldRef<"Abono", 'Int'>;
    readonly monto: Prisma.FieldRef<"Abono", 'Decimal'>;
    readonly metodoPago: Prisma.FieldRef<"Abono", 'MetodoPago'>;
    readonly notas: Prisma.FieldRef<"Abono", 'String'>;
    readonly fecha: Prisma.FieldRef<"Abono", 'DateTime'>;
}
export type AbonoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AbonoSelect<ExtArgs> | null;
    omit?: Prisma.AbonoOmit<ExtArgs> | null;
    include?: Prisma.AbonoInclude<ExtArgs> | null;
    where: Prisma.AbonoWhereUniqueInput;
};
export type AbonoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AbonoSelect<ExtArgs> | null;
    omit?: Prisma.AbonoOmit<ExtArgs> | null;
    include?: Prisma.AbonoInclude<ExtArgs> | null;
    where: Prisma.AbonoWhereUniqueInput;
};
export type AbonoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AbonoSelect<ExtArgs> | null;
    omit?: Prisma.AbonoOmit<ExtArgs> | null;
    include?: Prisma.AbonoInclude<ExtArgs> | null;
    where?: Prisma.AbonoWhereInput;
    orderBy?: Prisma.AbonoOrderByWithRelationInput | Prisma.AbonoOrderByWithRelationInput[];
    cursor?: Prisma.AbonoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AbonoScalarFieldEnum | Prisma.AbonoScalarFieldEnum[];
};
export type AbonoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AbonoSelect<ExtArgs> | null;
    omit?: Prisma.AbonoOmit<ExtArgs> | null;
    include?: Prisma.AbonoInclude<ExtArgs> | null;
    where?: Prisma.AbonoWhereInput;
    orderBy?: Prisma.AbonoOrderByWithRelationInput | Prisma.AbonoOrderByWithRelationInput[];
    cursor?: Prisma.AbonoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AbonoScalarFieldEnum | Prisma.AbonoScalarFieldEnum[];
};
export type AbonoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AbonoSelect<ExtArgs> | null;
    omit?: Prisma.AbonoOmit<ExtArgs> | null;
    include?: Prisma.AbonoInclude<ExtArgs> | null;
    where?: Prisma.AbonoWhereInput;
    orderBy?: Prisma.AbonoOrderByWithRelationInput | Prisma.AbonoOrderByWithRelationInput[];
    cursor?: Prisma.AbonoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AbonoScalarFieldEnum | Prisma.AbonoScalarFieldEnum[];
};
export type AbonoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AbonoSelect<ExtArgs> | null;
    omit?: Prisma.AbonoOmit<ExtArgs> | null;
    include?: Prisma.AbonoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AbonoCreateInput, Prisma.AbonoUncheckedCreateInput>;
};
export type AbonoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AbonoCreateManyInput | Prisma.AbonoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AbonoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AbonoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AbonoOmit<ExtArgs> | null;
    data: Prisma.AbonoCreateManyInput | Prisma.AbonoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AbonoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AbonoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AbonoSelect<ExtArgs> | null;
    omit?: Prisma.AbonoOmit<ExtArgs> | null;
    include?: Prisma.AbonoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AbonoUpdateInput, Prisma.AbonoUncheckedUpdateInput>;
    where: Prisma.AbonoWhereUniqueInput;
};
export type AbonoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AbonoUpdateManyMutationInput, Prisma.AbonoUncheckedUpdateManyInput>;
    where?: Prisma.AbonoWhereInput;
    limit?: number;
};
export type AbonoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AbonoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AbonoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AbonoUpdateManyMutationInput, Prisma.AbonoUncheckedUpdateManyInput>;
    where?: Prisma.AbonoWhereInput;
    limit?: number;
    include?: Prisma.AbonoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AbonoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AbonoSelect<ExtArgs> | null;
    omit?: Prisma.AbonoOmit<ExtArgs> | null;
    include?: Prisma.AbonoInclude<ExtArgs> | null;
    where: Prisma.AbonoWhereUniqueInput;
    create: Prisma.XOR<Prisma.AbonoCreateInput, Prisma.AbonoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AbonoUpdateInput, Prisma.AbonoUncheckedUpdateInput>;
};
export type AbonoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AbonoSelect<ExtArgs> | null;
    omit?: Prisma.AbonoOmit<ExtArgs> | null;
    include?: Prisma.AbonoInclude<ExtArgs> | null;
    where: Prisma.AbonoWhereUniqueInput;
};
export type AbonoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AbonoWhereInput;
    limit?: number;
};
export type AbonoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AbonoSelect<ExtArgs> | null;
    omit?: Prisma.AbonoOmit<ExtArgs> | null;
    include?: Prisma.AbonoInclude<ExtArgs> | null;
};
