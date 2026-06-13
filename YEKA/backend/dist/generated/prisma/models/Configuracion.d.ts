import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ConfiguracionModel = runtime.Types.Result.DefaultSelection<Prisma.$ConfiguracionPayload>;
export type AggregateConfiguracion = {
    _count: ConfiguracionCountAggregateOutputType | null;
    _avg: ConfiguracionAvgAggregateOutputType | null;
    _sum: ConfiguracionSumAggregateOutputType | null;
    _min: ConfiguracionMinAggregateOutputType | null;
    _max: ConfiguracionMaxAggregateOutputType | null;
};
export type ConfiguracionAvgAggregateOutputType = {
    id: number | null;
};
export type ConfiguracionSumAggregateOutputType = {
    id: number | null;
};
export type ConfiguracionMinAggregateOutputType = {
    id: number | null;
    clave: string | null;
    valor: string | null;
    updatedAt: Date | null;
};
export type ConfiguracionMaxAggregateOutputType = {
    id: number | null;
    clave: string | null;
    valor: string | null;
    updatedAt: Date | null;
};
export type ConfiguracionCountAggregateOutputType = {
    id: number;
    clave: number;
    valor: number;
    updatedAt: number;
    _all: number;
};
export type ConfiguracionAvgAggregateInputType = {
    id?: true;
};
export type ConfiguracionSumAggregateInputType = {
    id?: true;
};
export type ConfiguracionMinAggregateInputType = {
    id?: true;
    clave?: true;
    valor?: true;
    updatedAt?: true;
};
export type ConfiguracionMaxAggregateInputType = {
    id?: true;
    clave?: true;
    valor?: true;
    updatedAt?: true;
};
export type ConfiguracionCountAggregateInputType = {
    id?: true;
    clave?: true;
    valor?: true;
    updatedAt?: true;
    _all?: true;
};
export type ConfiguracionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConfiguracionWhereInput;
    orderBy?: Prisma.ConfiguracionOrderByWithRelationInput | Prisma.ConfiguracionOrderByWithRelationInput[];
    cursor?: Prisma.ConfiguracionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ConfiguracionCountAggregateInputType;
    _avg?: ConfiguracionAvgAggregateInputType;
    _sum?: ConfiguracionSumAggregateInputType;
    _min?: ConfiguracionMinAggregateInputType;
    _max?: ConfiguracionMaxAggregateInputType;
};
export type GetConfiguracionAggregateType<T extends ConfiguracionAggregateArgs> = {
    [P in keyof T & keyof AggregateConfiguracion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConfiguracion[P]> : Prisma.GetScalarType<T[P], AggregateConfiguracion[P]>;
};
export type ConfiguracionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConfiguracionWhereInput;
    orderBy?: Prisma.ConfiguracionOrderByWithAggregationInput | Prisma.ConfiguracionOrderByWithAggregationInput[];
    by: Prisma.ConfiguracionScalarFieldEnum[] | Prisma.ConfiguracionScalarFieldEnum;
    having?: Prisma.ConfiguracionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConfiguracionCountAggregateInputType | true;
    _avg?: ConfiguracionAvgAggregateInputType;
    _sum?: ConfiguracionSumAggregateInputType;
    _min?: ConfiguracionMinAggregateInputType;
    _max?: ConfiguracionMaxAggregateInputType;
};
export type ConfiguracionGroupByOutputType = {
    id: number;
    clave: string;
    valor: string;
    updatedAt: Date;
    _count: ConfiguracionCountAggregateOutputType | null;
    _avg: ConfiguracionAvgAggregateOutputType | null;
    _sum: ConfiguracionSumAggregateOutputType | null;
    _min: ConfiguracionMinAggregateOutputType | null;
    _max: ConfiguracionMaxAggregateOutputType | null;
};
export type GetConfiguracionGroupByPayload<T extends ConfiguracionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConfiguracionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConfiguracionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConfiguracionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConfiguracionGroupByOutputType[P]>;
}>>;
export type ConfiguracionWhereInput = {
    AND?: Prisma.ConfiguracionWhereInput | Prisma.ConfiguracionWhereInput[];
    OR?: Prisma.ConfiguracionWhereInput[];
    NOT?: Prisma.ConfiguracionWhereInput | Prisma.ConfiguracionWhereInput[];
    id?: Prisma.IntFilter<"Configuracion"> | number;
    clave?: Prisma.StringFilter<"Configuracion"> | string;
    valor?: Prisma.StringFilter<"Configuracion"> | string;
    updatedAt?: Prisma.DateTimeFilter<"Configuracion"> | Date | string;
};
export type ConfiguracionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clave?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConfiguracionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    clave?: string;
    AND?: Prisma.ConfiguracionWhereInput | Prisma.ConfiguracionWhereInput[];
    OR?: Prisma.ConfiguracionWhereInput[];
    NOT?: Prisma.ConfiguracionWhereInput | Prisma.ConfiguracionWhereInput[];
    valor?: Prisma.StringFilter<"Configuracion"> | string;
    updatedAt?: Prisma.DateTimeFilter<"Configuracion"> | Date | string;
}, "id" | "clave">;
export type ConfiguracionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clave?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ConfiguracionCountOrderByAggregateInput;
    _avg?: Prisma.ConfiguracionAvgOrderByAggregateInput;
    _max?: Prisma.ConfiguracionMaxOrderByAggregateInput;
    _min?: Prisma.ConfiguracionMinOrderByAggregateInput;
    _sum?: Prisma.ConfiguracionSumOrderByAggregateInput;
};
export type ConfiguracionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConfiguracionScalarWhereWithAggregatesInput | Prisma.ConfiguracionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConfiguracionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConfiguracionScalarWhereWithAggregatesInput | Prisma.ConfiguracionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Configuracion"> | number;
    clave?: Prisma.StringWithAggregatesFilter<"Configuracion"> | string;
    valor?: Prisma.StringWithAggregatesFilter<"Configuracion"> | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Configuracion"> | Date | string;
};
export type ConfiguracionCreateInput = {
    clave: string;
    valor: string;
    updatedAt?: Date | string;
};
export type ConfiguracionUncheckedCreateInput = {
    id?: number;
    clave: string;
    valor: string;
    updatedAt?: Date | string;
};
export type ConfiguracionUpdateInput = {
    clave?: Prisma.StringFieldUpdateOperationsInput | string;
    valor?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConfiguracionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clave?: Prisma.StringFieldUpdateOperationsInput | string;
    valor?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConfiguracionCreateManyInput = {
    id?: number;
    clave: string;
    valor: string;
    updatedAt?: Date | string;
};
export type ConfiguracionUpdateManyMutationInput = {
    clave?: Prisma.StringFieldUpdateOperationsInput | string;
    valor?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConfiguracionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clave?: Prisma.StringFieldUpdateOperationsInput | string;
    valor?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConfiguracionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clave?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConfiguracionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ConfiguracionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clave?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConfiguracionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clave?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConfiguracionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ConfiguracionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clave?: boolean;
    valor?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["configuracion"]>;
export type ConfiguracionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clave?: boolean;
    valor?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["configuracion"]>;
export type ConfiguracionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clave?: boolean;
    valor?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["configuracion"]>;
export type ConfiguracionSelectScalar = {
    id?: boolean;
    clave?: boolean;
    valor?: boolean;
    updatedAt?: boolean;
};
export type ConfiguracionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clave" | "valor" | "updatedAt", ExtArgs["result"]["configuracion"]>;
export type $ConfiguracionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Configuracion";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        clave: string;
        valor: string;
        updatedAt: Date;
    }, ExtArgs["result"]["configuracion"]>;
    composites: {};
};
export type ConfiguracionGetPayload<S extends boolean | null | undefined | ConfiguracionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConfiguracionPayload, S>;
export type ConfiguracionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConfiguracionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConfiguracionCountAggregateInputType | true;
};
export interface ConfiguracionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Configuracion'];
        meta: {
            name: 'Configuracion';
        };
    };
    findUnique<T extends ConfiguracionFindUniqueArgs>(args: Prisma.SelectSubset<T, ConfiguracionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConfiguracionClient<runtime.Types.Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ConfiguracionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConfiguracionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConfiguracionClient<runtime.Types.Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ConfiguracionFindFirstArgs>(args?: Prisma.SelectSubset<T, ConfiguracionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConfiguracionClient<runtime.Types.Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ConfiguracionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConfiguracionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConfiguracionClient<runtime.Types.Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ConfiguracionFindManyArgs>(args?: Prisma.SelectSubset<T, ConfiguracionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ConfiguracionCreateArgs>(args: Prisma.SelectSubset<T, ConfiguracionCreateArgs<ExtArgs>>): Prisma.Prisma__ConfiguracionClient<runtime.Types.Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ConfiguracionCreateManyArgs>(args?: Prisma.SelectSubset<T, ConfiguracionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ConfiguracionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConfiguracionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ConfiguracionDeleteArgs>(args: Prisma.SelectSubset<T, ConfiguracionDeleteArgs<ExtArgs>>): Prisma.Prisma__ConfiguracionClient<runtime.Types.Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ConfiguracionUpdateArgs>(args: Prisma.SelectSubset<T, ConfiguracionUpdateArgs<ExtArgs>>): Prisma.Prisma__ConfiguracionClient<runtime.Types.Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ConfiguracionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConfiguracionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ConfiguracionUpdateManyArgs>(args: Prisma.SelectSubset<T, ConfiguracionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ConfiguracionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConfiguracionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ConfiguracionUpsertArgs>(args: Prisma.SelectSubset<T, ConfiguracionUpsertArgs<ExtArgs>>): Prisma.Prisma__ConfiguracionClient<runtime.Types.Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ConfiguracionCountArgs>(args?: Prisma.Subset<T, ConfiguracionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConfiguracionCountAggregateOutputType> : number>;
    aggregate<T extends ConfiguracionAggregateArgs>(args: Prisma.Subset<T, ConfiguracionAggregateArgs>): Prisma.PrismaPromise<GetConfiguracionAggregateType<T>>;
    groupBy<T extends ConfiguracionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConfiguracionGroupByArgs['orderBy'];
    } : {
        orderBy?: ConfiguracionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConfiguracionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ConfiguracionFieldRefs;
}
export interface Prisma__ConfiguracionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ConfiguracionFieldRefs {
    readonly id: Prisma.FieldRef<"Configuracion", 'Int'>;
    readonly clave: Prisma.FieldRef<"Configuracion", 'String'>;
    readonly valor: Prisma.FieldRef<"Configuracion", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"Configuracion", 'DateTime'>;
}
export type ConfiguracionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfiguracionSelect<ExtArgs> | null;
    omit?: Prisma.ConfiguracionOmit<ExtArgs> | null;
    where: Prisma.ConfiguracionWhereUniqueInput;
};
export type ConfiguracionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfiguracionSelect<ExtArgs> | null;
    omit?: Prisma.ConfiguracionOmit<ExtArgs> | null;
    where: Prisma.ConfiguracionWhereUniqueInput;
};
export type ConfiguracionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfiguracionSelect<ExtArgs> | null;
    omit?: Prisma.ConfiguracionOmit<ExtArgs> | null;
    where?: Prisma.ConfiguracionWhereInput;
    orderBy?: Prisma.ConfiguracionOrderByWithRelationInput | Prisma.ConfiguracionOrderByWithRelationInput[];
    cursor?: Prisma.ConfiguracionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConfiguracionScalarFieldEnum | Prisma.ConfiguracionScalarFieldEnum[];
};
export type ConfiguracionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfiguracionSelect<ExtArgs> | null;
    omit?: Prisma.ConfiguracionOmit<ExtArgs> | null;
    where?: Prisma.ConfiguracionWhereInput;
    orderBy?: Prisma.ConfiguracionOrderByWithRelationInput | Prisma.ConfiguracionOrderByWithRelationInput[];
    cursor?: Prisma.ConfiguracionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConfiguracionScalarFieldEnum | Prisma.ConfiguracionScalarFieldEnum[];
};
export type ConfiguracionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfiguracionSelect<ExtArgs> | null;
    omit?: Prisma.ConfiguracionOmit<ExtArgs> | null;
    where?: Prisma.ConfiguracionWhereInput;
    orderBy?: Prisma.ConfiguracionOrderByWithRelationInput | Prisma.ConfiguracionOrderByWithRelationInput[];
    cursor?: Prisma.ConfiguracionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConfiguracionScalarFieldEnum | Prisma.ConfiguracionScalarFieldEnum[];
};
export type ConfiguracionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfiguracionSelect<ExtArgs> | null;
    omit?: Prisma.ConfiguracionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConfiguracionCreateInput, Prisma.ConfiguracionUncheckedCreateInput>;
};
export type ConfiguracionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ConfiguracionCreateManyInput | Prisma.ConfiguracionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConfiguracionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfiguracionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConfiguracionOmit<ExtArgs> | null;
    data: Prisma.ConfiguracionCreateManyInput | Prisma.ConfiguracionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConfiguracionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfiguracionSelect<ExtArgs> | null;
    omit?: Prisma.ConfiguracionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConfiguracionUpdateInput, Prisma.ConfiguracionUncheckedUpdateInput>;
    where: Prisma.ConfiguracionWhereUniqueInput;
};
export type ConfiguracionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ConfiguracionUpdateManyMutationInput, Prisma.ConfiguracionUncheckedUpdateManyInput>;
    where?: Prisma.ConfiguracionWhereInput;
    limit?: number;
};
export type ConfiguracionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfiguracionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConfiguracionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConfiguracionUpdateManyMutationInput, Prisma.ConfiguracionUncheckedUpdateManyInput>;
    where?: Prisma.ConfiguracionWhereInput;
    limit?: number;
};
export type ConfiguracionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfiguracionSelect<ExtArgs> | null;
    omit?: Prisma.ConfiguracionOmit<ExtArgs> | null;
    where: Prisma.ConfiguracionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConfiguracionCreateInput, Prisma.ConfiguracionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ConfiguracionUpdateInput, Prisma.ConfiguracionUncheckedUpdateInput>;
};
export type ConfiguracionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfiguracionSelect<ExtArgs> | null;
    omit?: Prisma.ConfiguracionOmit<ExtArgs> | null;
    where: Prisma.ConfiguracionWhereUniqueInput;
};
export type ConfiguracionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConfiguracionWhereInput;
    limit?: number;
};
export type ConfiguracionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConfiguracionSelect<ExtArgs> | null;
    omit?: Prisma.ConfiguracionOmit<ExtArgs> | null;
};
