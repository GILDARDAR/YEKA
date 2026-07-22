import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type TipoUrgenciaModel = runtime.Types.Result.DefaultSelection<Prisma.$TipoUrgenciaPayload>;
export type AggregateTipoUrgencia = {
    _count: TipoUrgenciaCountAggregateOutputType | null;
    _avg: TipoUrgenciaAvgAggregateOutputType | null;
    _sum: TipoUrgenciaSumAggregateOutputType | null;
    _min: TipoUrgenciaMinAggregateOutputType | null;
    _max: TipoUrgenciaMaxAggregateOutputType | null;
};
export type TipoUrgenciaAvgAggregateOutputType = {
    id: number | null;
    porcentajeRecargo: runtime.Decimal | null;
};
export type TipoUrgenciaSumAggregateOutputType = {
    id: number | null;
    porcentajeRecargo: runtime.Decimal | null;
};
export type TipoUrgenciaMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    porcentajeRecargo: runtime.Decimal | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TipoUrgenciaMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    porcentajeRecargo: runtime.Decimal | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TipoUrgenciaCountAggregateOutputType = {
    id: number;
    nombre: number;
    porcentajeRecargo: number;
    activo: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TipoUrgenciaAvgAggregateInputType = {
    id?: true;
    porcentajeRecargo?: true;
};
export type TipoUrgenciaSumAggregateInputType = {
    id?: true;
    porcentajeRecargo?: true;
};
export type TipoUrgenciaMinAggregateInputType = {
    id?: true;
    nombre?: true;
    porcentajeRecargo?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TipoUrgenciaMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    porcentajeRecargo?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TipoUrgenciaCountAggregateInputType = {
    id?: true;
    nombre?: true;
    porcentajeRecargo?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TipoUrgenciaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TipoUrgenciaWhereInput;
    orderBy?: Prisma.TipoUrgenciaOrderByWithRelationInput | Prisma.TipoUrgenciaOrderByWithRelationInput[];
    cursor?: Prisma.TipoUrgenciaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TipoUrgenciaCountAggregateInputType;
    _avg?: TipoUrgenciaAvgAggregateInputType;
    _sum?: TipoUrgenciaSumAggregateInputType;
    _min?: TipoUrgenciaMinAggregateInputType;
    _max?: TipoUrgenciaMaxAggregateInputType;
};
export type GetTipoUrgenciaAggregateType<T extends TipoUrgenciaAggregateArgs> = {
    [P in keyof T & keyof AggregateTipoUrgencia]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTipoUrgencia[P]> : Prisma.GetScalarType<T[P], AggregateTipoUrgencia[P]>;
};
export type TipoUrgenciaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TipoUrgenciaWhereInput;
    orderBy?: Prisma.TipoUrgenciaOrderByWithAggregationInput | Prisma.TipoUrgenciaOrderByWithAggregationInput[];
    by: Prisma.TipoUrgenciaScalarFieldEnum[] | Prisma.TipoUrgenciaScalarFieldEnum;
    having?: Prisma.TipoUrgenciaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TipoUrgenciaCountAggregateInputType | true;
    _avg?: TipoUrgenciaAvgAggregateInputType;
    _sum?: TipoUrgenciaSumAggregateInputType;
    _min?: TipoUrgenciaMinAggregateInputType;
    _max?: TipoUrgenciaMaxAggregateInputType;
};
export type TipoUrgenciaGroupByOutputType = {
    id: number;
    nombre: string;
    porcentajeRecargo: runtime.Decimal;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: TipoUrgenciaCountAggregateOutputType | null;
    _avg: TipoUrgenciaAvgAggregateOutputType | null;
    _sum: TipoUrgenciaSumAggregateOutputType | null;
    _min: TipoUrgenciaMinAggregateOutputType | null;
    _max: TipoUrgenciaMaxAggregateOutputType | null;
};
export type GetTipoUrgenciaGroupByPayload<T extends TipoUrgenciaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TipoUrgenciaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TipoUrgenciaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TipoUrgenciaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TipoUrgenciaGroupByOutputType[P]>;
}>>;
export type TipoUrgenciaWhereInput = {
    AND?: Prisma.TipoUrgenciaWhereInput | Prisma.TipoUrgenciaWhereInput[];
    OR?: Prisma.TipoUrgenciaWhereInput[];
    NOT?: Prisma.TipoUrgenciaWhereInput | Prisma.TipoUrgenciaWhereInput[];
    id?: Prisma.IntFilter<"TipoUrgencia"> | number;
    nombre?: Prisma.StringFilter<"TipoUrgencia"> | string;
    porcentajeRecargo?: Prisma.DecimalFilter<"TipoUrgencia"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFilter<"TipoUrgencia"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TipoUrgencia"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TipoUrgencia"> | Date | string;
    prendas?: Prisma.PrendaListRelationFilter;
};
export type TipoUrgenciaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    porcentajeRecargo?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    prendas?: Prisma.PrendaOrderByRelationAggregateInput;
};
export type TipoUrgenciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    nombre?: string;
    AND?: Prisma.TipoUrgenciaWhereInput | Prisma.TipoUrgenciaWhereInput[];
    OR?: Prisma.TipoUrgenciaWhereInput[];
    NOT?: Prisma.TipoUrgenciaWhereInput | Prisma.TipoUrgenciaWhereInput[];
    porcentajeRecargo?: Prisma.DecimalFilter<"TipoUrgencia"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFilter<"TipoUrgencia"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TipoUrgencia"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TipoUrgencia"> | Date | string;
    prendas?: Prisma.PrendaListRelationFilter;
}, "id" | "nombre">;
export type TipoUrgenciaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    porcentajeRecargo?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TipoUrgenciaCountOrderByAggregateInput;
    _avg?: Prisma.TipoUrgenciaAvgOrderByAggregateInput;
    _max?: Prisma.TipoUrgenciaMaxOrderByAggregateInput;
    _min?: Prisma.TipoUrgenciaMinOrderByAggregateInput;
    _sum?: Prisma.TipoUrgenciaSumOrderByAggregateInput;
};
export type TipoUrgenciaScalarWhereWithAggregatesInput = {
    AND?: Prisma.TipoUrgenciaScalarWhereWithAggregatesInput | Prisma.TipoUrgenciaScalarWhereWithAggregatesInput[];
    OR?: Prisma.TipoUrgenciaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TipoUrgenciaScalarWhereWithAggregatesInput | Prisma.TipoUrgenciaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"TipoUrgencia"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"TipoUrgencia"> | string;
    porcentajeRecargo?: Prisma.DecimalWithAggregatesFilter<"TipoUrgencia"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolWithAggregatesFilter<"TipoUrgencia"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TipoUrgencia"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TipoUrgencia"> | Date | string;
};
export type TipoUrgenciaCreateInput = {
    nombre: string;
    porcentajeRecargo?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prendas?: Prisma.PrendaCreateNestedManyWithoutTipoUrgenciaInput;
};
export type TipoUrgenciaUncheckedCreateInput = {
    id?: number;
    nombre: string;
    porcentajeRecargo?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prendas?: Prisma.PrendaUncheckedCreateNestedManyWithoutTipoUrgenciaInput;
};
export type TipoUrgenciaUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    porcentajeRecargo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prendas?: Prisma.PrendaUpdateManyWithoutTipoUrgenciaNestedInput;
};
export type TipoUrgenciaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    porcentajeRecargo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prendas?: Prisma.PrendaUncheckedUpdateManyWithoutTipoUrgenciaNestedInput;
};
export type TipoUrgenciaCreateManyInput = {
    id?: number;
    nombre: string;
    porcentajeRecargo?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TipoUrgenciaUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    porcentajeRecargo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TipoUrgenciaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    porcentajeRecargo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TipoUrgenciaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    porcentajeRecargo?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TipoUrgenciaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    porcentajeRecargo?: Prisma.SortOrder;
};
export type TipoUrgenciaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    porcentajeRecargo?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TipoUrgenciaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    porcentajeRecargo?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TipoUrgenciaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    porcentajeRecargo?: Prisma.SortOrder;
};
export type TipoUrgenciaNullableScalarRelationFilter = {
    is?: Prisma.TipoUrgenciaWhereInput | null;
    isNot?: Prisma.TipoUrgenciaWhereInput | null;
};
export type TipoUrgenciaCreateNestedOneWithoutPrendasInput = {
    create?: Prisma.XOR<Prisma.TipoUrgenciaCreateWithoutPrendasInput, Prisma.TipoUrgenciaUncheckedCreateWithoutPrendasInput>;
    connectOrCreate?: Prisma.TipoUrgenciaCreateOrConnectWithoutPrendasInput;
    connect?: Prisma.TipoUrgenciaWhereUniqueInput;
};
export type TipoUrgenciaUpdateOneWithoutPrendasNestedInput = {
    create?: Prisma.XOR<Prisma.TipoUrgenciaCreateWithoutPrendasInput, Prisma.TipoUrgenciaUncheckedCreateWithoutPrendasInput>;
    connectOrCreate?: Prisma.TipoUrgenciaCreateOrConnectWithoutPrendasInput;
    upsert?: Prisma.TipoUrgenciaUpsertWithoutPrendasInput;
    disconnect?: Prisma.TipoUrgenciaWhereInput | boolean;
    delete?: Prisma.TipoUrgenciaWhereInput | boolean;
    connect?: Prisma.TipoUrgenciaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TipoUrgenciaUpdateToOneWithWhereWithoutPrendasInput, Prisma.TipoUrgenciaUpdateWithoutPrendasInput>, Prisma.TipoUrgenciaUncheckedUpdateWithoutPrendasInput>;
};
export type TipoUrgenciaCreateWithoutPrendasInput = {
    nombre: string;
    porcentajeRecargo?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TipoUrgenciaUncheckedCreateWithoutPrendasInput = {
    id?: number;
    nombre: string;
    porcentajeRecargo?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TipoUrgenciaCreateOrConnectWithoutPrendasInput = {
    where: Prisma.TipoUrgenciaWhereUniqueInput;
    create: Prisma.XOR<Prisma.TipoUrgenciaCreateWithoutPrendasInput, Prisma.TipoUrgenciaUncheckedCreateWithoutPrendasInput>;
};
export type TipoUrgenciaUpsertWithoutPrendasInput = {
    update: Prisma.XOR<Prisma.TipoUrgenciaUpdateWithoutPrendasInput, Prisma.TipoUrgenciaUncheckedUpdateWithoutPrendasInput>;
    create: Prisma.XOR<Prisma.TipoUrgenciaCreateWithoutPrendasInput, Prisma.TipoUrgenciaUncheckedCreateWithoutPrendasInput>;
    where?: Prisma.TipoUrgenciaWhereInput;
};
export type TipoUrgenciaUpdateToOneWithWhereWithoutPrendasInput = {
    where?: Prisma.TipoUrgenciaWhereInput;
    data: Prisma.XOR<Prisma.TipoUrgenciaUpdateWithoutPrendasInput, Prisma.TipoUrgenciaUncheckedUpdateWithoutPrendasInput>;
};
export type TipoUrgenciaUpdateWithoutPrendasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    porcentajeRecargo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TipoUrgenciaUncheckedUpdateWithoutPrendasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    porcentajeRecargo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TipoUrgenciaCountOutputType = {
    prendas: number;
};
export type TipoUrgenciaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prendas?: boolean | TipoUrgenciaCountOutputTypeCountPrendasArgs;
};
export type TipoUrgenciaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoUrgenciaCountOutputTypeSelect<ExtArgs> | null;
};
export type TipoUrgenciaCountOutputTypeCountPrendasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrendaWhereInput;
};
export type TipoUrgenciaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    porcentajeRecargo?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    prendas?: boolean | Prisma.TipoUrgencia$prendasArgs<ExtArgs>;
    _count?: boolean | Prisma.TipoUrgenciaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tipoUrgencia"]>;
export type TipoUrgenciaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    porcentajeRecargo?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["tipoUrgencia"]>;
export type TipoUrgenciaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    porcentajeRecargo?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["tipoUrgencia"]>;
export type TipoUrgenciaSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    porcentajeRecargo?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TipoUrgenciaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "porcentajeRecargo" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["tipoUrgencia"]>;
export type TipoUrgenciaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prendas?: boolean | Prisma.TipoUrgencia$prendasArgs<ExtArgs>;
    _count?: boolean | Prisma.TipoUrgenciaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TipoUrgenciaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TipoUrgenciaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TipoUrgenciaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TipoUrgencia";
    objects: {
        prendas: Prisma.$PrendaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        porcentajeRecargo: runtime.Decimal;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["tipoUrgencia"]>;
    composites: {};
};
export type TipoUrgenciaGetPayload<S extends boolean | null | undefined | TipoUrgenciaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TipoUrgenciaPayload, S>;
export type TipoUrgenciaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TipoUrgenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TipoUrgenciaCountAggregateInputType | true;
};
export interface TipoUrgenciaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TipoUrgencia'];
        meta: {
            name: 'TipoUrgencia';
        };
    };
    findUnique<T extends TipoUrgenciaFindUniqueArgs>(args: Prisma.SelectSubset<T, TipoUrgenciaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TipoUrgenciaClient<runtime.Types.Result.GetResult<Prisma.$TipoUrgenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TipoUrgenciaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TipoUrgenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TipoUrgenciaClient<runtime.Types.Result.GetResult<Prisma.$TipoUrgenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TipoUrgenciaFindFirstArgs>(args?: Prisma.SelectSubset<T, TipoUrgenciaFindFirstArgs<ExtArgs>>): Prisma.Prisma__TipoUrgenciaClient<runtime.Types.Result.GetResult<Prisma.$TipoUrgenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TipoUrgenciaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TipoUrgenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TipoUrgenciaClient<runtime.Types.Result.GetResult<Prisma.$TipoUrgenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TipoUrgenciaFindManyArgs>(args?: Prisma.SelectSubset<T, TipoUrgenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TipoUrgenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TipoUrgenciaCreateArgs>(args: Prisma.SelectSubset<T, TipoUrgenciaCreateArgs<ExtArgs>>): Prisma.Prisma__TipoUrgenciaClient<runtime.Types.Result.GetResult<Prisma.$TipoUrgenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TipoUrgenciaCreateManyArgs>(args?: Prisma.SelectSubset<T, TipoUrgenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TipoUrgenciaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TipoUrgenciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TipoUrgenciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TipoUrgenciaDeleteArgs>(args: Prisma.SelectSubset<T, TipoUrgenciaDeleteArgs<ExtArgs>>): Prisma.Prisma__TipoUrgenciaClient<runtime.Types.Result.GetResult<Prisma.$TipoUrgenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TipoUrgenciaUpdateArgs>(args: Prisma.SelectSubset<T, TipoUrgenciaUpdateArgs<ExtArgs>>): Prisma.Prisma__TipoUrgenciaClient<runtime.Types.Result.GetResult<Prisma.$TipoUrgenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TipoUrgenciaDeleteManyArgs>(args?: Prisma.SelectSubset<T, TipoUrgenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TipoUrgenciaUpdateManyArgs>(args: Prisma.SelectSubset<T, TipoUrgenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TipoUrgenciaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TipoUrgenciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TipoUrgenciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TipoUrgenciaUpsertArgs>(args: Prisma.SelectSubset<T, TipoUrgenciaUpsertArgs<ExtArgs>>): Prisma.Prisma__TipoUrgenciaClient<runtime.Types.Result.GetResult<Prisma.$TipoUrgenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TipoUrgenciaCountArgs>(args?: Prisma.Subset<T, TipoUrgenciaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TipoUrgenciaCountAggregateOutputType> : number>;
    aggregate<T extends TipoUrgenciaAggregateArgs>(args: Prisma.Subset<T, TipoUrgenciaAggregateArgs>): Prisma.PrismaPromise<GetTipoUrgenciaAggregateType<T>>;
    groupBy<T extends TipoUrgenciaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TipoUrgenciaGroupByArgs['orderBy'];
    } : {
        orderBy?: TipoUrgenciaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TipoUrgenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoUrgenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TipoUrgenciaFieldRefs;
}
export interface Prisma__TipoUrgenciaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    prendas<T extends Prisma.TipoUrgencia$prendasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TipoUrgencia$prendasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TipoUrgenciaFieldRefs {
    readonly id: Prisma.FieldRef<"TipoUrgencia", 'Int'>;
    readonly nombre: Prisma.FieldRef<"TipoUrgencia", 'String'>;
    readonly porcentajeRecargo: Prisma.FieldRef<"TipoUrgencia", 'Decimal'>;
    readonly activo: Prisma.FieldRef<"TipoUrgencia", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"TipoUrgencia", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TipoUrgencia", 'DateTime'>;
}
export type TipoUrgenciaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoUrgenciaSelect<ExtArgs> | null;
    omit?: Prisma.TipoUrgenciaOmit<ExtArgs> | null;
    include?: Prisma.TipoUrgenciaInclude<ExtArgs> | null;
    where: Prisma.TipoUrgenciaWhereUniqueInput;
};
export type TipoUrgenciaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoUrgenciaSelect<ExtArgs> | null;
    omit?: Prisma.TipoUrgenciaOmit<ExtArgs> | null;
    include?: Prisma.TipoUrgenciaInclude<ExtArgs> | null;
    where: Prisma.TipoUrgenciaWhereUniqueInput;
};
export type TipoUrgenciaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoUrgenciaSelect<ExtArgs> | null;
    omit?: Prisma.TipoUrgenciaOmit<ExtArgs> | null;
    include?: Prisma.TipoUrgenciaInclude<ExtArgs> | null;
    where?: Prisma.TipoUrgenciaWhereInput;
    orderBy?: Prisma.TipoUrgenciaOrderByWithRelationInput | Prisma.TipoUrgenciaOrderByWithRelationInput[];
    cursor?: Prisma.TipoUrgenciaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TipoUrgenciaScalarFieldEnum | Prisma.TipoUrgenciaScalarFieldEnum[];
};
export type TipoUrgenciaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoUrgenciaSelect<ExtArgs> | null;
    omit?: Prisma.TipoUrgenciaOmit<ExtArgs> | null;
    include?: Prisma.TipoUrgenciaInclude<ExtArgs> | null;
    where?: Prisma.TipoUrgenciaWhereInput;
    orderBy?: Prisma.TipoUrgenciaOrderByWithRelationInput | Prisma.TipoUrgenciaOrderByWithRelationInput[];
    cursor?: Prisma.TipoUrgenciaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TipoUrgenciaScalarFieldEnum | Prisma.TipoUrgenciaScalarFieldEnum[];
};
export type TipoUrgenciaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoUrgenciaSelect<ExtArgs> | null;
    omit?: Prisma.TipoUrgenciaOmit<ExtArgs> | null;
    include?: Prisma.TipoUrgenciaInclude<ExtArgs> | null;
    where?: Prisma.TipoUrgenciaWhereInput;
    orderBy?: Prisma.TipoUrgenciaOrderByWithRelationInput | Prisma.TipoUrgenciaOrderByWithRelationInput[];
    cursor?: Prisma.TipoUrgenciaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TipoUrgenciaScalarFieldEnum | Prisma.TipoUrgenciaScalarFieldEnum[];
};
export type TipoUrgenciaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoUrgenciaSelect<ExtArgs> | null;
    omit?: Prisma.TipoUrgenciaOmit<ExtArgs> | null;
    include?: Prisma.TipoUrgenciaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TipoUrgenciaCreateInput, Prisma.TipoUrgenciaUncheckedCreateInput>;
};
export type TipoUrgenciaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TipoUrgenciaCreateManyInput | Prisma.TipoUrgenciaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TipoUrgenciaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoUrgenciaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TipoUrgenciaOmit<ExtArgs> | null;
    data: Prisma.TipoUrgenciaCreateManyInput | Prisma.TipoUrgenciaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TipoUrgenciaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoUrgenciaSelect<ExtArgs> | null;
    omit?: Prisma.TipoUrgenciaOmit<ExtArgs> | null;
    include?: Prisma.TipoUrgenciaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TipoUrgenciaUpdateInput, Prisma.TipoUrgenciaUncheckedUpdateInput>;
    where: Prisma.TipoUrgenciaWhereUniqueInput;
};
export type TipoUrgenciaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TipoUrgenciaUpdateManyMutationInput, Prisma.TipoUrgenciaUncheckedUpdateManyInput>;
    where?: Prisma.TipoUrgenciaWhereInput;
    limit?: number;
};
export type TipoUrgenciaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoUrgenciaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TipoUrgenciaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TipoUrgenciaUpdateManyMutationInput, Prisma.TipoUrgenciaUncheckedUpdateManyInput>;
    where?: Prisma.TipoUrgenciaWhereInput;
    limit?: number;
};
export type TipoUrgenciaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoUrgenciaSelect<ExtArgs> | null;
    omit?: Prisma.TipoUrgenciaOmit<ExtArgs> | null;
    include?: Prisma.TipoUrgenciaInclude<ExtArgs> | null;
    where: Prisma.TipoUrgenciaWhereUniqueInput;
    create: Prisma.XOR<Prisma.TipoUrgenciaCreateInput, Prisma.TipoUrgenciaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TipoUrgenciaUpdateInput, Prisma.TipoUrgenciaUncheckedUpdateInput>;
};
export type TipoUrgenciaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoUrgenciaSelect<ExtArgs> | null;
    omit?: Prisma.TipoUrgenciaOmit<ExtArgs> | null;
    include?: Prisma.TipoUrgenciaInclude<ExtArgs> | null;
    where: Prisma.TipoUrgenciaWhereUniqueInput;
};
export type TipoUrgenciaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TipoUrgenciaWhereInput;
    limit?: number;
};
export type TipoUrgencia$prendasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TipoUrgenciaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoUrgenciaSelect<ExtArgs> | null;
    omit?: Prisma.TipoUrgenciaOmit<ExtArgs> | null;
    include?: Prisma.TipoUrgenciaInclude<ExtArgs> | null;
};
