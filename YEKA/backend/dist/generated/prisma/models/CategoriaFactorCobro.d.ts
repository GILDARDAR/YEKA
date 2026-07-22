import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type CategoriaFactorCobroModel = runtime.Types.Result.DefaultSelection<Prisma.$CategoriaFactorCobroPayload>;
export type AggregateCategoriaFactorCobro = {
    _count: CategoriaFactorCobroCountAggregateOutputType | null;
    _avg: CategoriaFactorCobroAvgAggregateOutputType | null;
    _sum: CategoriaFactorCobroSumAggregateOutputType | null;
    _min: CategoriaFactorCobroMinAggregateOutputType | null;
    _max: CategoriaFactorCobroMaxAggregateOutputType | null;
};
export type CategoriaFactorCobroAvgAggregateOutputType = {
    id: number | null;
};
export type CategoriaFactorCobroSumAggregateOutputType = {
    id: number | null;
};
export type CategoriaFactorCobroMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    activa: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CategoriaFactorCobroMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    activa: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CategoriaFactorCobroCountAggregateOutputType = {
    id: number;
    nombre: number;
    activa: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CategoriaFactorCobroAvgAggregateInputType = {
    id?: true;
};
export type CategoriaFactorCobroSumAggregateInputType = {
    id?: true;
};
export type CategoriaFactorCobroMinAggregateInputType = {
    id?: true;
    nombre?: true;
    activa?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CategoriaFactorCobroMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    activa?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CategoriaFactorCobroCountAggregateInputType = {
    id?: true;
    nombre?: true;
    activa?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CategoriaFactorCobroAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoriaFactorCobroWhereInput;
    orderBy?: Prisma.CategoriaFactorCobroOrderByWithRelationInput | Prisma.CategoriaFactorCobroOrderByWithRelationInput[];
    cursor?: Prisma.CategoriaFactorCobroWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CategoriaFactorCobroCountAggregateInputType;
    _avg?: CategoriaFactorCobroAvgAggregateInputType;
    _sum?: CategoriaFactorCobroSumAggregateInputType;
    _min?: CategoriaFactorCobroMinAggregateInputType;
    _max?: CategoriaFactorCobroMaxAggregateInputType;
};
export type GetCategoriaFactorCobroAggregateType<T extends CategoriaFactorCobroAggregateArgs> = {
    [P in keyof T & keyof AggregateCategoriaFactorCobro]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCategoriaFactorCobro[P]> : Prisma.GetScalarType<T[P], AggregateCategoriaFactorCobro[P]>;
};
export type CategoriaFactorCobroGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoriaFactorCobroWhereInput;
    orderBy?: Prisma.CategoriaFactorCobroOrderByWithAggregationInput | Prisma.CategoriaFactorCobroOrderByWithAggregationInput[];
    by: Prisma.CategoriaFactorCobroScalarFieldEnum[] | Prisma.CategoriaFactorCobroScalarFieldEnum;
    having?: Prisma.CategoriaFactorCobroScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoriaFactorCobroCountAggregateInputType | true;
    _avg?: CategoriaFactorCobroAvgAggregateInputType;
    _sum?: CategoriaFactorCobroSumAggregateInputType;
    _min?: CategoriaFactorCobroMinAggregateInputType;
    _max?: CategoriaFactorCobroMaxAggregateInputType;
};
export type CategoriaFactorCobroGroupByOutputType = {
    id: number;
    nombre: string;
    activa: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: CategoriaFactorCobroCountAggregateOutputType | null;
    _avg: CategoriaFactorCobroAvgAggregateOutputType | null;
    _sum: CategoriaFactorCobroSumAggregateOutputType | null;
    _min: CategoriaFactorCobroMinAggregateOutputType | null;
    _max: CategoriaFactorCobroMaxAggregateOutputType | null;
};
export type GetCategoriaFactorCobroGroupByPayload<T extends CategoriaFactorCobroGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CategoriaFactorCobroGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CategoriaFactorCobroGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CategoriaFactorCobroGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CategoriaFactorCobroGroupByOutputType[P]>;
}>>;
export type CategoriaFactorCobroWhereInput = {
    AND?: Prisma.CategoriaFactorCobroWhereInput | Prisma.CategoriaFactorCobroWhereInput[];
    OR?: Prisma.CategoriaFactorCobroWhereInput[];
    NOT?: Prisma.CategoriaFactorCobroWhereInput | Prisma.CategoriaFactorCobroWhereInput[];
    id?: Prisma.IntFilter<"CategoriaFactorCobro"> | number;
    nombre?: Prisma.StringFilter<"CategoriaFactorCobro"> | string;
    activa?: Prisma.BoolFilter<"CategoriaFactorCobro"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"CategoriaFactorCobro"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CategoriaFactorCobro"> | Date | string;
    factores?: Prisma.FactorCobroListRelationFilter;
    servicios?: Prisma.CatalogoServicioListRelationFilter;
};
export type CategoriaFactorCobroOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    factores?: Prisma.FactorCobroOrderByRelationAggregateInput;
    servicios?: Prisma.CatalogoServicioOrderByRelationAggregateInput;
};
export type CategoriaFactorCobroWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    nombre?: string;
    AND?: Prisma.CategoriaFactorCobroWhereInput | Prisma.CategoriaFactorCobroWhereInput[];
    OR?: Prisma.CategoriaFactorCobroWhereInput[];
    NOT?: Prisma.CategoriaFactorCobroWhereInput | Prisma.CategoriaFactorCobroWhereInput[];
    activa?: Prisma.BoolFilter<"CategoriaFactorCobro"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"CategoriaFactorCobro"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CategoriaFactorCobro"> | Date | string;
    factores?: Prisma.FactorCobroListRelationFilter;
    servicios?: Prisma.CatalogoServicioListRelationFilter;
}, "id" | "nombre">;
export type CategoriaFactorCobroOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CategoriaFactorCobroCountOrderByAggregateInput;
    _avg?: Prisma.CategoriaFactorCobroAvgOrderByAggregateInput;
    _max?: Prisma.CategoriaFactorCobroMaxOrderByAggregateInput;
    _min?: Prisma.CategoriaFactorCobroMinOrderByAggregateInput;
    _sum?: Prisma.CategoriaFactorCobroSumOrderByAggregateInput;
};
export type CategoriaFactorCobroScalarWhereWithAggregatesInput = {
    AND?: Prisma.CategoriaFactorCobroScalarWhereWithAggregatesInput | Prisma.CategoriaFactorCobroScalarWhereWithAggregatesInput[];
    OR?: Prisma.CategoriaFactorCobroScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CategoriaFactorCobroScalarWhereWithAggregatesInput | Prisma.CategoriaFactorCobroScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"CategoriaFactorCobro"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"CategoriaFactorCobro"> | string;
    activa?: Prisma.BoolWithAggregatesFilter<"CategoriaFactorCobro"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CategoriaFactorCobro"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CategoriaFactorCobro"> | Date | string;
};
export type CategoriaFactorCobroCreateInput = {
    nombre: string;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    factores?: Prisma.FactorCobroCreateNestedManyWithoutCategoriaInput;
    servicios?: Prisma.CatalogoServicioCreateNestedManyWithoutCategoriasFactoresInput;
};
export type CategoriaFactorCobroUncheckedCreateInput = {
    id?: number;
    nombre: string;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    factores?: Prisma.FactorCobroUncheckedCreateNestedManyWithoutCategoriaInput;
    servicios?: Prisma.CatalogoServicioUncheckedCreateNestedManyWithoutCategoriasFactoresInput;
};
export type CategoriaFactorCobroUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    factores?: Prisma.FactorCobroUpdateManyWithoutCategoriaNestedInput;
    servicios?: Prisma.CatalogoServicioUpdateManyWithoutCategoriasFactoresNestedInput;
};
export type CategoriaFactorCobroUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    factores?: Prisma.FactorCobroUncheckedUpdateManyWithoutCategoriaNestedInput;
    servicios?: Prisma.CatalogoServicioUncheckedUpdateManyWithoutCategoriasFactoresNestedInput;
};
export type CategoriaFactorCobroCreateManyInput = {
    id?: number;
    nombre: string;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CategoriaFactorCobroUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategoriaFactorCobroUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategoriaFactorCobroListRelationFilter = {
    every?: Prisma.CategoriaFactorCobroWhereInput;
    some?: Prisma.CategoriaFactorCobroWhereInput;
    none?: Prisma.CategoriaFactorCobroWhereInput;
};
export type CategoriaFactorCobroOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CategoriaFactorCobroCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CategoriaFactorCobroAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type CategoriaFactorCobroMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CategoriaFactorCobroMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CategoriaFactorCobroSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type CategoriaFactorCobroScalarRelationFilter = {
    is?: Prisma.CategoriaFactorCobroWhereInput;
    isNot?: Prisma.CategoriaFactorCobroWhereInput;
};
export type CategoriaFactorCobroCreateNestedManyWithoutServiciosInput = {
    create?: Prisma.XOR<Prisma.CategoriaFactorCobroCreateWithoutServiciosInput, Prisma.CategoriaFactorCobroUncheckedCreateWithoutServiciosInput> | Prisma.CategoriaFactorCobroCreateWithoutServiciosInput[] | Prisma.CategoriaFactorCobroUncheckedCreateWithoutServiciosInput[];
    connectOrCreate?: Prisma.CategoriaFactorCobroCreateOrConnectWithoutServiciosInput | Prisma.CategoriaFactorCobroCreateOrConnectWithoutServiciosInput[];
    connect?: Prisma.CategoriaFactorCobroWhereUniqueInput | Prisma.CategoriaFactorCobroWhereUniqueInput[];
};
export type CategoriaFactorCobroUncheckedCreateNestedManyWithoutServiciosInput = {
    create?: Prisma.XOR<Prisma.CategoriaFactorCobroCreateWithoutServiciosInput, Prisma.CategoriaFactorCobroUncheckedCreateWithoutServiciosInput> | Prisma.CategoriaFactorCobroCreateWithoutServiciosInput[] | Prisma.CategoriaFactorCobroUncheckedCreateWithoutServiciosInput[];
    connectOrCreate?: Prisma.CategoriaFactorCobroCreateOrConnectWithoutServiciosInput | Prisma.CategoriaFactorCobroCreateOrConnectWithoutServiciosInput[];
    connect?: Prisma.CategoriaFactorCobroWhereUniqueInput | Prisma.CategoriaFactorCobroWhereUniqueInput[];
};
export type CategoriaFactorCobroUpdateManyWithoutServiciosNestedInput = {
    create?: Prisma.XOR<Prisma.CategoriaFactorCobroCreateWithoutServiciosInput, Prisma.CategoriaFactorCobroUncheckedCreateWithoutServiciosInput> | Prisma.CategoriaFactorCobroCreateWithoutServiciosInput[] | Prisma.CategoriaFactorCobroUncheckedCreateWithoutServiciosInput[];
    connectOrCreate?: Prisma.CategoriaFactorCobroCreateOrConnectWithoutServiciosInput | Prisma.CategoriaFactorCobroCreateOrConnectWithoutServiciosInput[];
    upsert?: Prisma.CategoriaFactorCobroUpsertWithWhereUniqueWithoutServiciosInput | Prisma.CategoriaFactorCobroUpsertWithWhereUniqueWithoutServiciosInput[];
    set?: Prisma.CategoriaFactorCobroWhereUniqueInput | Prisma.CategoriaFactorCobroWhereUniqueInput[];
    disconnect?: Prisma.CategoriaFactorCobroWhereUniqueInput | Prisma.CategoriaFactorCobroWhereUniqueInput[];
    delete?: Prisma.CategoriaFactorCobroWhereUniqueInput | Prisma.CategoriaFactorCobroWhereUniqueInput[];
    connect?: Prisma.CategoriaFactorCobroWhereUniqueInput | Prisma.CategoriaFactorCobroWhereUniqueInput[];
    update?: Prisma.CategoriaFactorCobroUpdateWithWhereUniqueWithoutServiciosInput | Prisma.CategoriaFactorCobroUpdateWithWhereUniqueWithoutServiciosInput[];
    updateMany?: Prisma.CategoriaFactorCobroUpdateManyWithWhereWithoutServiciosInput | Prisma.CategoriaFactorCobroUpdateManyWithWhereWithoutServiciosInput[];
    deleteMany?: Prisma.CategoriaFactorCobroScalarWhereInput | Prisma.CategoriaFactorCobroScalarWhereInput[];
};
export type CategoriaFactorCobroUncheckedUpdateManyWithoutServiciosNestedInput = {
    create?: Prisma.XOR<Prisma.CategoriaFactorCobroCreateWithoutServiciosInput, Prisma.CategoriaFactorCobroUncheckedCreateWithoutServiciosInput> | Prisma.CategoriaFactorCobroCreateWithoutServiciosInput[] | Prisma.CategoriaFactorCobroUncheckedCreateWithoutServiciosInput[];
    connectOrCreate?: Prisma.CategoriaFactorCobroCreateOrConnectWithoutServiciosInput | Prisma.CategoriaFactorCobroCreateOrConnectWithoutServiciosInput[];
    upsert?: Prisma.CategoriaFactorCobroUpsertWithWhereUniqueWithoutServiciosInput | Prisma.CategoriaFactorCobroUpsertWithWhereUniqueWithoutServiciosInput[];
    set?: Prisma.CategoriaFactorCobroWhereUniqueInput | Prisma.CategoriaFactorCobroWhereUniqueInput[];
    disconnect?: Prisma.CategoriaFactorCobroWhereUniqueInput | Prisma.CategoriaFactorCobroWhereUniqueInput[];
    delete?: Prisma.CategoriaFactorCobroWhereUniqueInput | Prisma.CategoriaFactorCobroWhereUniqueInput[];
    connect?: Prisma.CategoriaFactorCobroWhereUniqueInput | Prisma.CategoriaFactorCobroWhereUniqueInput[];
    update?: Prisma.CategoriaFactorCobroUpdateWithWhereUniqueWithoutServiciosInput | Prisma.CategoriaFactorCobroUpdateWithWhereUniqueWithoutServiciosInput[];
    updateMany?: Prisma.CategoriaFactorCobroUpdateManyWithWhereWithoutServiciosInput | Prisma.CategoriaFactorCobroUpdateManyWithWhereWithoutServiciosInput[];
    deleteMany?: Prisma.CategoriaFactorCobroScalarWhereInput | Prisma.CategoriaFactorCobroScalarWhereInput[];
};
export type CategoriaFactorCobroCreateNestedOneWithoutFactoresInput = {
    create?: Prisma.XOR<Prisma.CategoriaFactorCobroCreateWithoutFactoresInput, Prisma.CategoriaFactorCobroUncheckedCreateWithoutFactoresInput>;
    connectOrCreate?: Prisma.CategoriaFactorCobroCreateOrConnectWithoutFactoresInput;
    connect?: Prisma.CategoriaFactorCobroWhereUniqueInput;
};
export type CategoriaFactorCobroUpdateOneRequiredWithoutFactoresNestedInput = {
    create?: Prisma.XOR<Prisma.CategoriaFactorCobroCreateWithoutFactoresInput, Prisma.CategoriaFactorCobroUncheckedCreateWithoutFactoresInput>;
    connectOrCreate?: Prisma.CategoriaFactorCobroCreateOrConnectWithoutFactoresInput;
    upsert?: Prisma.CategoriaFactorCobroUpsertWithoutFactoresInput;
    connect?: Prisma.CategoriaFactorCobroWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CategoriaFactorCobroUpdateToOneWithWhereWithoutFactoresInput, Prisma.CategoriaFactorCobroUpdateWithoutFactoresInput>, Prisma.CategoriaFactorCobroUncheckedUpdateWithoutFactoresInput>;
};
export type CategoriaFactorCobroCreateWithoutServiciosInput = {
    nombre: string;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    factores?: Prisma.FactorCobroCreateNestedManyWithoutCategoriaInput;
};
export type CategoriaFactorCobroUncheckedCreateWithoutServiciosInput = {
    id?: number;
    nombre: string;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    factores?: Prisma.FactorCobroUncheckedCreateNestedManyWithoutCategoriaInput;
};
export type CategoriaFactorCobroCreateOrConnectWithoutServiciosInput = {
    where: Prisma.CategoriaFactorCobroWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoriaFactorCobroCreateWithoutServiciosInput, Prisma.CategoriaFactorCobroUncheckedCreateWithoutServiciosInput>;
};
export type CategoriaFactorCobroUpsertWithWhereUniqueWithoutServiciosInput = {
    where: Prisma.CategoriaFactorCobroWhereUniqueInput;
    update: Prisma.XOR<Prisma.CategoriaFactorCobroUpdateWithoutServiciosInput, Prisma.CategoriaFactorCobroUncheckedUpdateWithoutServiciosInput>;
    create: Prisma.XOR<Prisma.CategoriaFactorCobroCreateWithoutServiciosInput, Prisma.CategoriaFactorCobroUncheckedCreateWithoutServiciosInput>;
};
export type CategoriaFactorCobroUpdateWithWhereUniqueWithoutServiciosInput = {
    where: Prisma.CategoriaFactorCobroWhereUniqueInput;
    data: Prisma.XOR<Prisma.CategoriaFactorCobroUpdateWithoutServiciosInput, Prisma.CategoriaFactorCobroUncheckedUpdateWithoutServiciosInput>;
};
export type CategoriaFactorCobroUpdateManyWithWhereWithoutServiciosInput = {
    where: Prisma.CategoriaFactorCobroScalarWhereInput;
    data: Prisma.XOR<Prisma.CategoriaFactorCobroUpdateManyMutationInput, Prisma.CategoriaFactorCobroUncheckedUpdateManyWithoutServiciosInput>;
};
export type CategoriaFactorCobroScalarWhereInput = {
    AND?: Prisma.CategoriaFactorCobroScalarWhereInput | Prisma.CategoriaFactorCobroScalarWhereInput[];
    OR?: Prisma.CategoriaFactorCobroScalarWhereInput[];
    NOT?: Prisma.CategoriaFactorCobroScalarWhereInput | Prisma.CategoriaFactorCobroScalarWhereInput[];
    id?: Prisma.IntFilter<"CategoriaFactorCobro"> | number;
    nombre?: Prisma.StringFilter<"CategoriaFactorCobro"> | string;
    activa?: Prisma.BoolFilter<"CategoriaFactorCobro"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"CategoriaFactorCobro"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CategoriaFactorCobro"> | Date | string;
};
export type CategoriaFactorCobroCreateWithoutFactoresInput = {
    nombre: string;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    servicios?: Prisma.CatalogoServicioCreateNestedManyWithoutCategoriasFactoresInput;
};
export type CategoriaFactorCobroUncheckedCreateWithoutFactoresInput = {
    id?: number;
    nombre: string;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    servicios?: Prisma.CatalogoServicioUncheckedCreateNestedManyWithoutCategoriasFactoresInput;
};
export type CategoriaFactorCobroCreateOrConnectWithoutFactoresInput = {
    where: Prisma.CategoriaFactorCobroWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoriaFactorCobroCreateWithoutFactoresInput, Prisma.CategoriaFactorCobroUncheckedCreateWithoutFactoresInput>;
};
export type CategoriaFactorCobroUpsertWithoutFactoresInput = {
    update: Prisma.XOR<Prisma.CategoriaFactorCobroUpdateWithoutFactoresInput, Prisma.CategoriaFactorCobroUncheckedUpdateWithoutFactoresInput>;
    create: Prisma.XOR<Prisma.CategoriaFactorCobroCreateWithoutFactoresInput, Prisma.CategoriaFactorCobroUncheckedCreateWithoutFactoresInput>;
    where?: Prisma.CategoriaFactorCobroWhereInput;
};
export type CategoriaFactorCobroUpdateToOneWithWhereWithoutFactoresInput = {
    where?: Prisma.CategoriaFactorCobroWhereInput;
    data: Prisma.XOR<Prisma.CategoriaFactorCobroUpdateWithoutFactoresInput, Prisma.CategoriaFactorCobroUncheckedUpdateWithoutFactoresInput>;
};
export type CategoriaFactorCobroUpdateWithoutFactoresInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    servicios?: Prisma.CatalogoServicioUpdateManyWithoutCategoriasFactoresNestedInput;
};
export type CategoriaFactorCobroUncheckedUpdateWithoutFactoresInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    servicios?: Prisma.CatalogoServicioUncheckedUpdateManyWithoutCategoriasFactoresNestedInput;
};
export type CategoriaFactorCobroUpdateWithoutServiciosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    factores?: Prisma.FactorCobroUpdateManyWithoutCategoriaNestedInput;
};
export type CategoriaFactorCobroUncheckedUpdateWithoutServiciosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    factores?: Prisma.FactorCobroUncheckedUpdateManyWithoutCategoriaNestedInput;
};
export type CategoriaFactorCobroUncheckedUpdateManyWithoutServiciosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategoriaFactorCobroCountOutputType = {
    factores: number;
    servicios: number;
};
export type CategoriaFactorCobroCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    factores?: boolean | CategoriaFactorCobroCountOutputTypeCountFactoresArgs;
    servicios?: boolean | CategoriaFactorCobroCountOutputTypeCountServiciosArgs;
};
export type CategoriaFactorCobroCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaFactorCobroCountOutputTypeSelect<ExtArgs> | null;
};
export type CategoriaFactorCobroCountOutputTypeCountFactoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FactorCobroWhereInput;
};
export type CategoriaFactorCobroCountOutputTypeCountServiciosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CatalogoServicioWhereInput;
};
export type CategoriaFactorCobroSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    activa?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    factores?: boolean | Prisma.CategoriaFactorCobro$factoresArgs<ExtArgs>;
    servicios?: boolean | Prisma.CategoriaFactorCobro$serviciosArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriaFactorCobroCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["categoriaFactorCobro"]>;
export type CategoriaFactorCobroSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    activa?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["categoriaFactorCobro"]>;
export type CategoriaFactorCobroSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    activa?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["categoriaFactorCobro"]>;
export type CategoriaFactorCobroSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    activa?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CategoriaFactorCobroOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "activa" | "createdAt" | "updatedAt", ExtArgs["result"]["categoriaFactorCobro"]>;
export type CategoriaFactorCobroInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    factores?: boolean | Prisma.CategoriaFactorCobro$factoresArgs<ExtArgs>;
    servicios?: boolean | Prisma.CategoriaFactorCobro$serviciosArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriaFactorCobroCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CategoriaFactorCobroIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CategoriaFactorCobroIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CategoriaFactorCobroPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CategoriaFactorCobro";
    objects: {
        factores: Prisma.$FactorCobroPayload<ExtArgs>[];
        servicios: Prisma.$CatalogoServicioPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        activa: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["categoriaFactorCobro"]>;
    composites: {};
};
export type CategoriaFactorCobroGetPayload<S extends boolean | null | undefined | CategoriaFactorCobroDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CategoriaFactorCobroPayload, S>;
export type CategoriaFactorCobroCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CategoriaFactorCobroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoriaFactorCobroCountAggregateInputType | true;
};
export interface CategoriaFactorCobroDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CategoriaFactorCobro'];
        meta: {
            name: 'CategoriaFactorCobro';
        };
    };
    findUnique<T extends CategoriaFactorCobroFindUniqueArgs>(args: Prisma.SelectSubset<T, CategoriaFactorCobroFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CategoriaFactorCobroClient<runtime.Types.Result.GetResult<Prisma.$CategoriaFactorCobroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CategoriaFactorCobroFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CategoriaFactorCobroFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategoriaFactorCobroClient<runtime.Types.Result.GetResult<Prisma.$CategoriaFactorCobroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CategoriaFactorCobroFindFirstArgs>(args?: Prisma.SelectSubset<T, CategoriaFactorCobroFindFirstArgs<ExtArgs>>): Prisma.Prisma__CategoriaFactorCobroClient<runtime.Types.Result.GetResult<Prisma.$CategoriaFactorCobroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CategoriaFactorCobroFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CategoriaFactorCobroFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategoriaFactorCobroClient<runtime.Types.Result.GetResult<Prisma.$CategoriaFactorCobroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CategoriaFactorCobroFindManyArgs>(args?: Prisma.SelectSubset<T, CategoriaFactorCobroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoriaFactorCobroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CategoriaFactorCobroCreateArgs>(args: Prisma.SelectSubset<T, CategoriaFactorCobroCreateArgs<ExtArgs>>): Prisma.Prisma__CategoriaFactorCobroClient<runtime.Types.Result.GetResult<Prisma.$CategoriaFactorCobroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CategoriaFactorCobroCreateManyArgs>(args?: Prisma.SelectSubset<T, CategoriaFactorCobroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CategoriaFactorCobroCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CategoriaFactorCobroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoriaFactorCobroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CategoriaFactorCobroDeleteArgs>(args: Prisma.SelectSubset<T, CategoriaFactorCobroDeleteArgs<ExtArgs>>): Prisma.Prisma__CategoriaFactorCobroClient<runtime.Types.Result.GetResult<Prisma.$CategoriaFactorCobroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CategoriaFactorCobroUpdateArgs>(args: Prisma.SelectSubset<T, CategoriaFactorCobroUpdateArgs<ExtArgs>>): Prisma.Prisma__CategoriaFactorCobroClient<runtime.Types.Result.GetResult<Prisma.$CategoriaFactorCobroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CategoriaFactorCobroDeleteManyArgs>(args?: Prisma.SelectSubset<T, CategoriaFactorCobroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CategoriaFactorCobroUpdateManyArgs>(args: Prisma.SelectSubset<T, CategoriaFactorCobroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CategoriaFactorCobroUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CategoriaFactorCobroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoriaFactorCobroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CategoriaFactorCobroUpsertArgs>(args: Prisma.SelectSubset<T, CategoriaFactorCobroUpsertArgs<ExtArgs>>): Prisma.Prisma__CategoriaFactorCobroClient<runtime.Types.Result.GetResult<Prisma.$CategoriaFactorCobroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CategoriaFactorCobroCountArgs>(args?: Prisma.Subset<T, CategoriaFactorCobroCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CategoriaFactorCobroCountAggregateOutputType> : number>;
    aggregate<T extends CategoriaFactorCobroAggregateArgs>(args: Prisma.Subset<T, CategoriaFactorCobroAggregateArgs>): Prisma.PrismaPromise<GetCategoriaFactorCobroAggregateType<T>>;
    groupBy<T extends CategoriaFactorCobroGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CategoriaFactorCobroGroupByArgs['orderBy'];
    } : {
        orderBy?: CategoriaFactorCobroGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CategoriaFactorCobroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaFactorCobroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CategoriaFactorCobroFieldRefs;
}
export interface Prisma__CategoriaFactorCobroClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    factores<T extends Prisma.CategoriaFactorCobro$factoresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoriaFactorCobro$factoresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FactorCobroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    servicios<T extends Prisma.CategoriaFactorCobro$serviciosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoriaFactorCobro$serviciosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CatalogoServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CategoriaFactorCobroFieldRefs {
    readonly id: Prisma.FieldRef<"CategoriaFactorCobro", 'Int'>;
    readonly nombre: Prisma.FieldRef<"CategoriaFactorCobro", 'String'>;
    readonly activa: Prisma.FieldRef<"CategoriaFactorCobro", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"CategoriaFactorCobro", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CategoriaFactorCobro", 'DateTime'>;
}
export type CategoriaFactorCobroFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaFactorCobroSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaFactorCobroOmit<ExtArgs> | null;
    include?: Prisma.CategoriaFactorCobroInclude<ExtArgs> | null;
    where: Prisma.CategoriaFactorCobroWhereUniqueInput;
};
export type CategoriaFactorCobroFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaFactorCobroSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaFactorCobroOmit<ExtArgs> | null;
    include?: Prisma.CategoriaFactorCobroInclude<ExtArgs> | null;
    where: Prisma.CategoriaFactorCobroWhereUniqueInput;
};
export type CategoriaFactorCobroFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaFactorCobroSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaFactorCobroOmit<ExtArgs> | null;
    include?: Prisma.CategoriaFactorCobroInclude<ExtArgs> | null;
    where?: Prisma.CategoriaFactorCobroWhereInput;
    orderBy?: Prisma.CategoriaFactorCobroOrderByWithRelationInput | Prisma.CategoriaFactorCobroOrderByWithRelationInput[];
    cursor?: Prisma.CategoriaFactorCobroWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriaFactorCobroScalarFieldEnum | Prisma.CategoriaFactorCobroScalarFieldEnum[];
};
export type CategoriaFactorCobroFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaFactorCobroSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaFactorCobroOmit<ExtArgs> | null;
    include?: Prisma.CategoriaFactorCobroInclude<ExtArgs> | null;
    where?: Prisma.CategoriaFactorCobroWhereInput;
    orderBy?: Prisma.CategoriaFactorCobroOrderByWithRelationInput | Prisma.CategoriaFactorCobroOrderByWithRelationInput[];
    cursor?: Prisma.CategoriaFactorCobroWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriaFactorCobroScalarFieldEnum | Prisma.CategoriaFactorCobroScalarFieldEnum[];
};
export type CategoriaFactorCobroFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaFactorCobroSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaFactorCobroOmit<ExtArgs> | null;
    include?: Prisma.CategoriaFactorCobroInclude<ExtArgs> | null;
    where?: Prisma.CategoriaFactorCobroWhereInput;
    orderBy?: Prisma.CategoriaFactorCobroOrderByWithRelationInput | Prisma.CategoriaFactorCobroOrderByWithRelationInput[];
    cursor?: Prisma.CategoriaFactorCobroWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriaFactorCobroScalarFieldEnum | Prisma.CategoriaFactorCobroScalarFieldEnum[];
};
export type CategoriaFactorCobroCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaFactorCobroSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaFactorCobroOmit<ExtArgs> | null;
    include?: Prisma.CategoriaFactorCobroInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategoriaFactorCobroCreateInput, Prisma.CategoriaFactorCobroUncheckedCreateInput>;
};
export type CategoriaFactorCobroCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CategoriaFactorCobroCreateManyInput | Prisma.CategoriaFactorCobroCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CategoriaFactorCobroCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaFactorCobroSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CategoriaFactorCobroOmit<ExtArgs> | null;
    data: Prisma.CategoriaFactorCobroCreateManyInput | Prisma.CategoriaFactorCobroCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CategoriaFactorCobroUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaFactorCobroSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaFactorCobroOmit<ExtArgs> | null;
    include?: Prisma.CategoriaFactorCobroInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategoriaFactorCobroUpdateInput, Prisma.CategoriaFactorCobroUncheckedUpdateInput>;
    where: Prisma.CategoriaFactorCobroWhereUniqueInput;
};
export type CategoriaFactorCobroUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CategoriaFactorCobroUpdateManyMutationInput, Prisma.CategoriaFactorCobroUncheckedUpdateManyInput>;
    where?: Prisma.CategoriaFactorCobroWhereInput;
    limit?: number;
};
export type CategoriaFactorCobroUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaFactorCobroSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CategoriaFactorCobroOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategoriaFactorCobroUpdateManyMutationInput, Prisma.CategoriaFactorCobroUncheckedUpdateManyInput>;
    where?: Prisma.CategoriaFactorCobroWhereInput;
    limit?: number;
};
export type CategoriaFactorCobroUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaFactorCobroSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaFactorCobroOmit<ExtArgs> | null;
    include?: Prisma.CategoriaFactorCobroInclude<ExtArgs> | null;
    where: Prisma.CategoriaFactorCobroWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoriaFactorCobroCreateInput, Prisma.CategoriaFactorCobroUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CategoriaFactorCobroUpdateInput, Prisma.CategoriaFactorCobroUncheckedUpdateInput>;
};
export type CategoriaFactorCobroDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaFactorCobroSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaFactorCobroOmit<ExtArgs> | null;
    include?: Prisma.CategoriaFactorCobroInclude<ExtArgs> | null;
    where: Prisma.CategoriaFactorCobroWhereUniqueInput;
};
export type CategoriaFactorCobroDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoriaFactorCobroWhereInput;
    limit?: number;
};
export type CategoriaFactorCobro$factoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CategoriaFactorCobro$serviciosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CatalogoServicioSelect<ExtArgs> | null;
    omit?: Prisma.CatalogoServicioOmit<ExtArgs> | null;
    include?: Prisma.CatalogoServicioInclude<ExtArgs> | null;
    where?: Prisma.CatalogoServicioWhereInput;
    orderBy?: Prisma.CatalogoServicioOrderByWithRelationInput | Prisma.CatalogoServicioOrderByWithRelationInput[];
    cursor?: Prisma.CatalogoServicioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CatalogoServicioScalarFieldEnum | Prisma.CatalogoServicioScalarFieldEnum[];
};
export type CategoriaFactorCobroDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaFactorCobroSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaFactorCobroOmit<ExtArgs> | null;
    include?: Prisma.CategoriaFactorCobroInclude<ExtArgs> | null;
};
