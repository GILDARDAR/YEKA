import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type RegistroJornadaModel = runtime.Types.Result.DefaultSelection<Prisma.$RegistroJornadaPayload>;
export type AggregateRegistroJornada = {
    _count: RegistroJornadaCountAggregateOutputType | null;
    _avg: RegistroJornadaAvgAggregateOutputType | null;
    _sum: RegistroJornadaSumAggregateOutputType | null;
    _min: RegistroJornadaMinAggregateOutputType | null;
    _max: RegistroJornadaMaxAggregateOutputType | null;
};
export type RegistroJornadaAvgAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
};
export type RegistroJornadaSumAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
};
export type RegistroJornadaMinAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
    tipo: $Enums.TipoJornada | null;
    timestamp: Date | null;
};
export type RegistroJornadaMaxAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
    tipo: $Enums.TipoJornada | null;
    timestamp: Date | null;
};
export type RegistroJornadaCountAggregateOutputType = {
    id: number;
    usuarioId: number;
    tipo: number;
    timestamp: number;
    _all: number;
};
export type RegistroJornadaAvgAggregateInputType = {
    id?: true;
    usuarioId?: true;
};
export type RegistroJornadaSumAggregateInputType = {
    id?: true;
    usuarioId?: true;
};
export type RegistroJornadaMinAggregateInputType = {
    id?: true;
    usuarioId?: true;
    tipo?: true;
    timestamp?: true;
};
export type RegistroJornadaMaxAggregateInputType = {
    id?: true;
    usuarioId?: true;
    tipo?: true;
    timestamp?: true;
};
export type RegistroJornadaCountAggregateInputType = {
    id?: true;
    usuarioId?: true;
    tipo?: true;
    timestamp?: true;
    _all?: true;
};
export type RegistroJornadaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegistroJornadaWhereInput;
    orderBy?: Prisma.RegistroJornadaOrderByWithRelationInput | Prisma.RegistroJornadaOrderByWithRelationInput[];
    cursor?: Prisma.RegistroJornadaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RegistroJornadaCountAggregateInputType;
    _avg?: RegistroJornadaAvgAggregateInputType;
    _sum?: RegistroJornadaSumAggregateInputType;
    _min?: RegistroJornadaMinAggregateInputType;
    _max?: RegistroJornadaMaxAggregateInputType;
};
export type GetRegistroJornadaAggregateType<T extends RegistroJornadaAggregateArgs> = {
    [P in keyof T & keyof AggregateRegistroJornada]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRegistroJornada[P]> : Prisma.GetScalarType<T[P], AggregateRegistroJornada[P]>;
};
export type RegistroJornadaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegistroJornadaWhereInput;
    orderBy?: Prisma.RegistroJornadaOrderByWithAggregationInput | Prisma.RegistroJornadaOrderByWithAggregationInput[];
    by: Prisma.RegistroJornadaScalarFieldEnum[] | Prisma.RegistroJornadaScalarFieldEnum;
    having?: Prisma.RegistroJornadaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RegistroJornadaCountAggregateInputType | true;
    _avg?: RegistroJornadaAvgAggregateInputType;
    _sum?: RegistroJornadaSumAggregateInputType;
    _min?: RegistroJornadaMinAggregateInputType;
    _max?: RegistroJornadaMaxAggregateInputType;
};
export type RegistroJornadaGroupByOutputType = {
    id: number;
    usuarioId: number;
    tipo: $Enums.TipoJornada;
    timestamp: Date;
    _count: RegistroJornadaCountAggregateOutputType | null;
    _avg: RegistroJornadaAvgAggregateOutputType | null;
    _sum: RegistroJornadaSumAggregateOutputType | null;
    _min: RegistroJornadaMinAggregateOutputType | null;
    _max: RegistroJornadaMaxAggregateOutputType | null;
};
export type GetRegistroJornadaGroupByPayload<T extends RegistroJornadaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RegistroJornadaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RegistroJornadaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RegistroJornadaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RegistroJornadaGroupByOutputType[P]>;
}>>;
export type RegistroJornadaWhereInput = {
    AND?: Prisma.RegistroJornadaWhereInput | Prisma.RegistroJornadaWhereInput[];
    OR?: Prisma.RegistroJornadaWhereInput[];
    NOT?: Prisma.RegistroJornadaWhereInput | Prisma.RegistroJornadaWhereInput[];
    id?: Prisma.IntFilter<"RegistroJornada"> | number;
    usuarioId?: Prisma.IntFilter<"RegistroJornada"> | number;
    tipo?: Prisma.EnumTipoJornadaFilter<"RegistroJornada"> | $Enums.TipoJornada;
    timestamp?: Prisma.DateTimeFilter<"RegistroJornada"> | Date | string;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
};
export type RegistroJornadaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    usuario?: Prisma.UsuarioOrderByWithRelationInput;
};
export type RegistroJornadaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.RegistroJornadaWhereInput | Prisma.RegistroJornadaWhereInput[];
    OR?: Prisma.RegistroJornadaWhereInput[];
    NOT?: Prisma.RegistroJornadaWhereInput | Prisma.RegistroJornadaWhereInput[];
    usuarioId?: Prisma.IntFilter<"RegistroJornada"> | number;
    tipo?: Prisma.EnumTipoJornadaFilter<"RegistroJornada"> | $Enums.TipoJornada;
    timestamp?: Prisma.DateTimeFilter<"RegistroJornada"> | Date | string;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
}, "id">;
export type RegistroJornadaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    _count?: Prisma.RegistroJornadaCountOrderByAggregateInput;
    _avg?: Prisma.RegistroJornadaAvgOrderByAggregateInput;
    _max?: Prisma.RegistroJornadaMaxOrderByAggregateInput;
    _min?: Prisma.RegistroJornadaMinOrderByAggregateInput;
    _sum?: Prisma.RegistroJornadaSumOrderByAggregateInput;
};
export type RegistroJornadaScalarWhereWithAggregatesInput = {
    AND?: Prisma.RegistroJornadaScalarWhereWithAggregatesInput | Prisma.RegistroJornadaScalarWhereWithAggregatesInput[];
    OR?: Prisma.RegistroJornadaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RegistroJornadaScalarWhereWithAggregatesInput | Prisma.RegistroJornadaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"RegistroJornada"> | number;
    usuarioId?: Prisma.IntWithAggregatesFilter<"RegistroJornada"> | number;
    tipo?: Prisma.EnumTipoJornadaWithAggregatesFilter<"RegistroJornada"> | $Enums.TipoJornada;
    timestamp?: Prisma.DateTimeWithAggregatesFilter<"RegistroJornada"> | Date | string;
};
export type RegistroJornadaCreateInput = {
    tipo: $Enums.TipoJornada;
    timestamp?: Date | string;
    usuario: Prisma.UsuarioCreateNestedOneWithoutJornadasInput;
};
export type RegistroJornadaUncheckedCreateInput = {
    id?: number;
    usuarioId: number;
    tipo: $Enums.TipoJornada;
    timestamp?: Date | string;
};
export type RegistroJornadaUpdateInput = {
    tipo?: Prisma.EnumTipoJornadaFieldUpdateOperationsInput | $Enums.TipoJornada;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutJornadasNestedInput;
};
export type RegistroJornadaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoJornadaFieldUpdateOperationsInput | $Enums.TipoJornada;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegistroJornadaCreateManyInput = {
    id?: number;
    usuarioId: number;
    tipo: $Enums.TipoJornada;
    timestamp?: Date | string;
};
export type RegistroJornadaUpdateManyMutationInput = {
    tipo?: Prisma.EnumTipoJornadaFieldUpdateOperationsInput | $Enums.TipoJornada;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegistroJornadaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoJornadaFieldUpdateOperationsInput | $Enums.TipoJornada;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegistroJornadaListRelationFilter = {
    every?: Prisma.RegistroJornadaWhereInput;
    some?: Prisma.RegistroJornadaWhereInput;
    none?: Prisma.RegistroJornadaWhereInput;
};
export type RegistroJornadaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RegistroJornadaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
};
export type RegistroJornadaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type RegistroJornadaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
};
export type RegistroJornadaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
};
export type RegistroJornadaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type RegistroJornadaCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.RegistroJornadaCreateWithoutUsuarioInput, Prisma.RegistroJornadaUncheckedCreateWithoutUsuarioInput> | Prisma.RegistroJornadaCreateWithoutUsuarioInput[] | Prisma.RegistroJornadaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.RegistroJornadaCreateOrConnectWithoutUsuarioInput | Prisma.RegistroJornadaCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.RegistroJornadaCreateManyUsuarioInputEnvelope;
    connect?: Prisma.RegistroJornadaWhereUniqueInput | Prisma.RegistroJornadaWhereUniqueInput[];
};
export type RegistroJornadaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.RegistroJornadaCreateWithoutUsuarioInput, Prisma.RegistroJornadaUncheckedCreateWithoutUsuarioInput> | Prisma.RegistroJornadaCreateWithoutUsuarioInput[] | Prisma.RegistroJornadaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.RegistroJornadaCreateOrConnectWithoutUsuarioInput | Prisma.RegistroJornadaCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.RegistroJornadaCreateManyUsuarioInputEnvelope;
    connect?: Prisma.RegistroJornadaWhereUniqueInput | Prisma.RegistroJornadaWhereUniqueInput[];
};
export type RegistroJornadaUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.RegistroJornadaCreateWithoutUsuarioInput, Prisma.RegistroJornadaUncheckedCreateWithoutUsuarioInput> | Prisma.RegistroJornadaCreateWithoutUsuarioInput[] | Prisma.RegistroJornadaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.RegistroJornadaCreateOrConnectWithoutUsuarioInput | Prisma.RegistroJornadaCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.RegistroJornadaUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.RegistroJornadaUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.RegistroJornadaCreateManyUsuarioInputEnvelope;
    set?: Prisma.RegistroJornadaWhereUniqueInput | Prisma.RegistroJornadaWhereUniqueInput[];
    disconnect?: Prisma.RegistroJornadaWhereUniqueInput | Prisma.RegistroJornadaWhereUniqueInput[];
    delete?: Prisma.RegistroJornadaWhereUniqueInput | Prisma.RegistroJornadaWhereUniqueInput[];
    connect?: Prisma.RegistroJornadaWhereUniqueInput | Prisma.RegistroJornadaWhereUniqueInput[];
    update?: Prisma.RegistroJornadaUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.RegistroJornadaUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.RegistroJornadaUpdateManyWithWhereWithoutUsuarioInput | Prisma.RegistroJornadaUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.RegistroJornadaScalarWhereInput | Prisma.RegistroJornadaScalarWhereInput[];
};
export type RegistroJornadaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.RegistroJornadaCreateWithoutUsuarioInput, Prisma.RegistroJornadaUncheckedCreateWithoutUsuarioInput> | Prisma.RegistroJornadaCreateWithoutUsuarioInput[] | Prisma.RegistroJornadaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.RegistroJornadaCreateOrConnectWithoutUsuarioInput | Prisma.RegistroJornadaCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.RegistroJornadaUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.RegistroJornadaUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.RegistroJornadaCreateManyUsuarioInputEnvelope;
    set?: Prisma.RegistroJornadaWhereUniqueInput | Prisma.RegistroJornadaWhereUniqueInput[];
    disconnect?: Prisma.RegistroJornadaWhereUniqueInput | Prisma.RegistroJornadaWhereUniqueInput[];
    delete?: Prisma.RegistroJornadaWhereUniqueInput | Prisma.RegistroJornadaWhereUniqueInput[];
    connect?: Prisma.RegistroJornadaWhereUniqueInput | Prisma.RegistroJornadaWhereUniqueInput[];
    update?: Prisma.RegistroJornadaUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.RegistroJornadaUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.RegistroJornadaUpdateManyWithWhereWithoutUsuarioInput | Prisma.RegistroJornadaUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.RegistroJornadaScalarWhereInput | Prisma.RegistroJornadaScalarWhereInput[];
};
export type EnumTipoJornadaFieldUpdateOperationsInput = {
    set?: $Enums.TipoJornada;
};
export type RegistroJornadaCreateWithoutUsuarioInput = {
    tipo: $Enums.TipoJornada;
    timestamp?: Date | string;
};
export type RegistroJornadaUncheckedCreateWithoutUsuarioInput = {
    id?: number;
    tipo: $Enums.TipoJornada;
    timestamp?: Date | string;
};
export type RegistroJornadaCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.RegistroJornadaWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegistroJornadaCreateWithoutUsuarioInput, Prisma.RegistroJornadaUncheckedCreateWithoutUsuarioInput>;
};
export type RegistroJornadaCreateManyUsuarioInputEnvelope = {
    data: Prisma.RegistroJornadaCreateManyUsuarioInput | Prisma.RegistroJornadaCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type RegistroJornadaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.RegistroJornadaWhereUniqueInput;
    update: Prisma.XOR<Prisma.RegistroJornadaUpdateWithoutUsuarioInput, Prisma.RegistroJornadaUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.RegistroJornadaCreateWithoutUsuarioInput, Prisma.RegistroJornadaUncheckedCreateWithoutUsuarioInput>;
};
export type RegistroJornadaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.RegistroJornadaWhereUniqueInput;
    data: Prisma.XOR<Prisma.RegistroJornadaUpdateWithoutUsuarioInput, Prisma.RegistroJornadaUncheckedUpdateWithoutUsuarioInput>;
};
export type RegistroJornadaUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.RegistroJornadaScalarWhereInput;
    data: Prisma.XOR<Prisma.RegistroJornadaUpdateManyMutationInput, Prisma.RegistroJornadaUncheckedUpdateManyWithoutUsuarioInput>;
};
export type RegistroJornadaScalarWhereInput = {
    AND?: Prisma.RegistroJornadaScalarWhereInput | Prisma.RegistroJornadaScalarWhereInput[];
    OR?: Prisma.RegistroJornadaScalarWhereInput[];
    NOT?: Prisma.RegistroJornadaScalarWhereInput | Prisma.RegistroJornadaScalarWhereInput[];
    id?: Prisma.IntFilter<"RegistroJornada"> | number;
    usuarioId?: Prisma.IntFilter<"RegistroJornada"> | number;
    tipo?: Prisma.EnumTipoJornadaFilter<"RegistroJornada"> | $Enums.TipoJornada;
    timestamp?: Prisma.DateTimeFilter<"RegistroJornada"> | Date | string;
};
export type RegistroJornadaCreateManyUsuarioInput = {
    id?: number;
    tipo: $Enums.TipoJornada;
    timestamp?: Date | string;
};
export type RegistroJornadaUpdateWithoutUsuarioInput = {
    tipo?: Prisma.EnumTipoJornadaFieldUpdateOperationsInput | $Enums.TipoJornada;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegistroJornadaUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoJornadaFieldUpdateOperationsInput | $Enums.TipoJornada;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegistroJornadaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoJornadaFieldUpdateOperationsInput | $Enums.TipoJornada;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegistroJornadaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    tipo?: boolean;
    timestamp?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["registroJornada"]>;
export type RegistroJornadaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    tipo?: boolean;
    timestamp?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["registroJornada"]>;
export type RegistroJornadaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    tipo?: boolean;
    timestamp?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["registroJornada"]>;
export type RegistroJornadaSelectScalar = {
    id?: boolean;
    usuarioId?: boolean;
    tipo?: boolean;
    timestamp?: boolean;
};
export type RegistroJornadaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "usuarioId" | "tipo" | "timestamp", ExtArgs["result"]["registroJornada"]>;
export type RegistroJornadaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type RegistroJornadaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type RegistroJornadaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $RegistroJornadaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RegistroJornada";
    objects: {
        usuario: Prisma.$UsuarioPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        usuarioId: number;
        tipo: $Enums.TipoJornada;
        timestamp: Date;
    }, ExtArgs["result"]["registroJornada"]>;
    composites: {};
};
export type RegistroJornadaGetPayload<S extends boolean | null | undefined | RegistroJornadaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RegistroJornadaPayload, S>;
export type RegistroJornadaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RegistroJornadaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RegistroJornadaCountAggregateInputType | true;
};
export interface RegistroJornadaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RegistroJornada'];
        meta: {
            name: 'RegistroJornada';
        };
    };
    findUnique<T extends RegistroJornadaFindUniqueArgs>(args: Prisma.SelectSubset<T, RegistroJornadaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RegistroJornadaClient<runtime.Types.Result.GetResult<Prisma.$RegistroJornadaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RegistroJornadaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RegistroJornadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegistroJornadaClient<runtime.Types.Result.GetResult<Prisma.$RegistroJornadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RegistroJornadaFindFirstArgs>(args?: Prisma.SelectSubset<T, RegistroJornadaFindFirstArgs<ExtArgs>>): Prisma.Prisma__RegistroJornadaClient<runtime.Types.Result.GetResult<Prisma.$RegistroJornadaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RegistroJornadaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RegistroJornadaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegistroJornadaClient<runtime.Types.Result.GetResult<Prisma.$RegistroJornadaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RegistroJornadaFindManyArgs>(args?: Prisma.SelectSubset<T, RegistroJornadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistroJornadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RegistroJornadaCreateArgs>(args: Prisma.SelectSubset<T, RegistroJornadaCreateArgs<ExtArgs>>): Prisma.Prisma__RegistroJornadaClient<runtime.Types.Result.GetResult<Prisma.$RegistroJornadaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RegistroJornadaCreateManyArgs>(args?: Prisma.SelectSubset<T, RegistroJornadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RegistroJornadaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RegistroJornadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistroJornadaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RegistroJornadaDeleteArgs>(args: Prisma.SelectSubset<T, RegistroJornadaDeleteArgs<ExtArgs>>): Prisma.Prisma__RegistroJornadaClient<runtime.Types.Result.GetResult<Prisma.$RegistroJornadaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RegistroJornadaUpdateArgs>(args: Prisma.SelectSubset<T, RegistroJornadaUpdateArgs<ExtArgs>>): Prisma.Prisma__RegistroJornadaClient<runtime.Types.Result.GetResult<Prisma.$RegistroJornadaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RegistroJornadaDeleteManyArgs>(args?: Prisma.SelectSubset<T, RegistroJornadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RegistroJornadaUpdateManyArgs>(args: Prisma.SelectSubset<T, RegistroJornadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RegistroJornadaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RegistroJornadaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistroJornadaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RegistroJornadaUpsertArgs>(args: Prisma.SelectSubset<T, RegistroJornadaUpsertArgs<ExtArgs>>): Prisma.Prisma__RegistroJornadaClient<runtime.Types.Result.GetResult<Prisma.$RegistroJornadaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RegistroJornadaCountArgs>(args?: Prisma.Subset<T, RegistroJornadaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RegistroJornadaCountAggregateOutputType> : number>;
    aggregate<T extends RegistroJornadaAggregateArgs>(args: Prisma.Subset<T, RegistroJornadaAggregateArgs>): Prisma.PrismaPromise<GetRegistroJornadaAggregateType<T>>;
    groupBy<T extends RegistroJornadaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RegistroJornadaGroupByArgs['orderBy'];
    } : {
        orderBy?: RegistroJornadaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RegistroJornadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroJornadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RegistroJornadaFieldRefs;
}
export interface Prisma__RegistroJornadaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuario<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RegistroJornadaFieldRefs {
    readonly id: Prisma.FieldRef<"RegistroJornada", 'Int'>;
    readonly usuarioId: Prisma.FieldRef<"RegistroJornada", 'Int'>;
    readonly tipo: Prisma.FieldRef<"RegistroJornada", 'TipoJornada'>;
    readonly timestamp: Prisma.FieldRef<"RegistroJornada", 'DateTime'>;
}
export type RegistroJornadaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroJornadaSelect<ExtArgs> | null;
    omit?: Prisma.RegistroJornadaOmit<ExtArgs> | null;
    include?: Prisma.RegistroJornadaInclude<ExtArgs> | null;
    where: Prisma.RegistroJornadaWhereUniqueInput;
};
export type RegistroJornadaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroJornadaSelect<ExtArgs> | null;
    omit?: Prisma.RegistroJornadaOmit<ExtArgs> | null;
    include?: Prisma.RegistroJornadaInclude<ExtArgs> | null;
    where: Prisma.RegistroJornadaWhereUniqueInput;
};
export type RegistroJornadaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RegistroJornadaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RegistroJornadaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RegistroJornadaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroJornadaSelect<ExtArgs> | null;
    omit?: Prisma.RegistroJornadaOmit<ExtArgs> | null;
    include?: Prisma.RegistroJornadaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegistroJornadaCreateInput, Prisma.RegistroJornadaUncheckedCreateInput>;
};
export type RegistroJornadaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RegistroJornadaCreateManyInput | Prisma.RegistroJornadaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RegistroJornadaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroJornadaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RegistroJornadaOmit<ExtArgs> | null;
    data: Prisma.RegistroJornadaCreateManyInput | Prisma.RegistroJornadaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RegistroJornadaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RegistroJornadaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroJornadaSelect<ExtArgs> | null;
    omit?: Prisma.RegistroJornadaOmit<ExtArgs> | null;
    include?: Prisma.RegistroJornadaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegistroJornadaUpdateInput, Prisma.RegistroJornadaUncheckedUpdateInput>;
    where: Prisma.RegistroJornadaWhereUniqueInput;
};
export type RegistroJornadaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RegistroJornadaUpdateManyMutationInput, Prisma.RegistroJornadaUncheckedUpdateManyInput>;
    where?: Prisma.RegistroJornadaWhereInput;
    limit?: number;
};
export type RegistroJornadaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroJornadaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RegistroJornadaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegistroJornadaUpdateManyMutationInput, Prisma.RegistroJornadaUncheckedUpdateManyInput>;
    where?: Prisma.RegistroJornadaWhereInput;
    limit?: number;
    include?: Prisma.RegistroJornadaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RegistroJornadaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroJornadaSelect<ExtArgs> | null;
    omit?: Prisma.RegistroJornadaOmit<ExtArgs> | null;
    include?: Prisma.RegistroJornadaInclude<ExtArgs> | null;
    where: Prisma.RegistroJornadaWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegistroJornadaCreateInput, Prisma.RegistroJornadaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RegistroJornadaUpdateInput, Prisma.RegistroJornadaUncheckedUpdateInput>;
};
export type RegistroJornadaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroJornadaSelect<ExtArgs> | null;
    omit?: Prisma.RegistroJornadaOmit<ExtArgs> | null;
    include?: Prisma.RegistroJornadaInclude<ExtArgs> | null;
    where: Prisma.RegistroJornadaWhereUniqueInput;
};
export type RegistroJornadaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegistroJornadaWhereInput;
    limit?: number;
};
export type RegistroJornadaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistroJornadaSelect<ExtArgs> | null;
    omit?: Prisma.RegistroJornadaOmit<ExtArgs> | null;
    include?: Prisma.RegistroJornadaInclude<ExtArgs> | null;
};
