import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CatalogoServicioModel = runtime.Types.Result.DefaultSelection<Prisma.$CatalogoServicioPayload>;
export type AggregateCatalogoServicio = {
    _count: CatalogoServicioCountAggregateOutputType | null;
    _avg: CatalogoServicioAvgAggregateOutputType | null;
    _sum: CatalogoServicioSumAggregateOutputType | null;
    _min: CatalogoServicioMinAggregateOutputType | null;
    _max: CatalogoServicioMaxAggregateOutputType | null;
};
export type CatalogoServicioAvgAggregateOutputType = {
    id: number | null;
    medidaBase: runtime.Decimal | null;
    tiempoBase: number | null;
    zonaId: number | null;
};
export type CatalogoServicioSumAggregateOutputType = {
    id: number | null;
    medidaBase: runtime.Decimal | null;
    tiempoBase: number | null;
    zonaId: number | null;
};
export type CatalogoServicioMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    categoria: string | null;
    tipoEspecifico: string | null;
    medidaBase: runtime.Decimal | null;
    tiempoBase: number | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    zonaId: number | null;
};
export type CatalogoServicioMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    categoria: string | null;
    tipoEspecifico: string | null;
    medidaBase: runtime.Decimal | null;
    tiempoBase: number | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    zonaId: number | null;
};
export type CatalogoServicioCountAggregateOutputType = {
    id: number;
    nombre: number;
    categoria: number;
    tipoEspecifico: number;
    medidaBase: number;
    tiempoBase: number;
    activo: number;
    createdAt: number;
    updatedAt: number;
    zonaId: number;
    _all: number;
};
export type CatalogoServicioAvgAggregateInputType = {
    id?: true;
    medidaBase?: true;
    tiempoBase?: true;
    zonaId?: true;
};
export type CatalogoServicioSumAggregateInputType = {
    id?: true;
    medidaBase?: true;
    tiempoBase?: true;
    zonaId?: true;
};
export type CatalogoServicioMinAggregateInputType = {
    id?: true;
    nombre?: true;
    categoria?: true;
    tipoEspecifico?: true;
    medidaBase?: true;
    tiempoBase?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    zonaId?: true;
};
export type CatalogoServicioMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    categoria?: true;
    tipoEspecifico?: true;
    medidaBase?: true;
    tiempoBase?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    zonaId?: true;
};
export type CatalogoServicioCountAggregateInputType = {
    id?: true;
    nombre?: true;
    categoria?: true;
    tipoEspecifico?: true;
    medidaBase?: true;
    tiempoBase?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    zonaId?: true;
    _all?: true;
};
export type CatalogoServicioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CatalogoServicioWhereInput;
    orderBy?: Prisma.CatalogoServicioOrderByWithRelationInput | Prisma.CatalogoServicioOrderByWithRelationInput[];
    cursor?: Prisma.CatalogoServicioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CatalogoServicioCountAggregateInputType;
    _avg?: CatalogoServicioAvgAggregateInputType;
    _sum?: CatalogoServicioSumAggregateInputType;
    _min?: CatalogoServicioMinAggregateInputType;
    _max?: CatalogoServicioMaxAggregateInputType;
};
export type GetCatalogoServicioAggregateType<T extends CatalogoServicioAggregateArgs> = {
    [P in keyof T & keyof AggregateCatalogoServicio]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCatalogoServicio[P]> : Prisma.GetScalarType<T[P], AggregateCatalogoServicio[P]>;
};
export type CatalogoServicioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CatalogoServicioWhereInput;
    orderBy?: Prisma.CatalogoServicioOrderByWithAggregationInput | Prisma.CatalogoServicioOrderByWithAggregationInput[];
    by: Prisma.CatalogoServicioScalarFieldEnum[] | Prisma.CatalogoServicioScalarFieldEnum;
    having?: Prisma.CatalogoServicioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CatalogoServicioCountAggregateInputType | true;
    _avg?: CatalogoServicioAvgAggregateInputType;
    _sum?: CatalogoServicioSumAggregateInputType;
    _min?: CatalogoServicioMinAggregateInputType;
    _max?: CatalogoServicioMaxAggregateInputType;
};
export type CatalogoServicioGroupByOutputType = {
    id: number;
    nombre: string;
    categoria: string;
    tipoEspecifico: string;
    medidaBase: runtime.Decimal;
    tiempoBase: number;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    zonaId: number | null;
    _count: CatalogoServicioCountAggregateOutputType | null;
    _avg: CatalogoServicioAvgAggregateOutputType | null;
    _sum: CatalogoServicioSumAggregateOutputType | null;
    _min: CatalogoServicioMinAggregateOutputType | null;
    _max: CatalogoServicioMaxAggregateOutputType | null;
};
export type GetCatalogoServicioGroupByPayload<T extends CatalogoServicioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CatalogoServicioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CatalogoServicioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CatalogoServicioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CatalogoServicioGroupByOutputType[P]>;
}>>;
export type CatalogoServicioWhereInput = {
    AND?: Prisma.CatalogoServicioWhereInput | Prisma.CatalogoServicioWhereInput[];
    OR?: Prisma.CatalogoServicioWhereInput[];
    NOT?: Prisma.CatalogoServicioWhereInput | Prisma.CatalogoServicioWhereInput[];
    id?: Prisma.IntFilter<"CatalogoServicio"> | number;
    nombre?: Prisma.StringFilter<"CatalogoServicio"> | string;
    categoria?: Prisma.StringFilter<"CatalogoServicio"> | string;
    tipoEspecifico?: Prisma.StringFilter<"CatalogoServicio"> | string;
    medidaBase?: Prisma.DecimalFilter<"CatalogoServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFilter<"CatalogoServicio"> | number;
    activo?: Prisma.BoolFilter<"CatalogoServicio"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"CatalogoServicio"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CatalogoServicio"> | Date | string;
    zonaId?: Prisma.IntNullableFilter<"CatalogoServicio"> | number | null;
    categoriasFactores?: Prisma.CategoriaFactorCobroListRelationFilter;
    asignaciones?: Prisma.PrendaServicioListRelationFilter;
    materiales?: Prisma.MaterialListRelationFilter;
    tiposArreglo?: Prisma.TipoArregloListRelationFilter;
    zona?: Prisma.XOR<Prisma.ZonaNullableScalarRelationFilter, Prisma.ZonaWhereInput> | null;
};
export type CatalogoServicioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    tipoEspecifico?: Prisma.SortOrder;
    medidaBase?: Prisma.SortOrder;
    tiempoBase?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    zonaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoriasFactores?: Prisma.CategoriaFactorCobroOrderByRelationAggregateInput;
    asignaciones?: Prisma.PrendaServicioOrderByRelationAggregateInput;
    materiales?: Prisma.MaterialOrderByRelationAggregateInput;
    tiposArreglo?: Prisma.TipoArregloOrderByRelationAggregateInput;
    zona?: Prisma.ZonaOrderByWithRelationInput;
};
export type CatalogoServicioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.CatalogoServicioWhereInput | Prisma.CatalogoServicioWhereInput[];
    OR?: Prisma.CatalogoServicioWhereInput[];
    NOT?: Prisma.CatalogoServicioWhereInput | Prisma.CatalogoServicioWhereInput[];
    nombre?: Prisma.StringFilter<"CatalogoServicio"> | string;
    categoria?: Prisma.StringFilter<"CatalogoServicio"> | string;
    tipoEspecifico?: Prisma.StringFilter<"CatalogoServicio"> | string;
    medidaBase?: Prisma.DecimalFilter<"CatalogoServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFilter<"CatalogoServicio"> | number;
    activo?: Prisma.BoolFilter<"CatalogoServicio"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"CatalogoServicio"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CatalogoServicio"> | Date | string;
    zonaId?: Prisma.IntNullableFilter<"CatalogoServicio"> | number | null;
    categoriasFactores?: Prisma.CategoriaFactorCobroListRelationFilter;
    asignaciones?: Prisma.PrendaServicioListRelationFilter;
    materiales?: Prisma.MaterialListRelationFilter;
    tiposArreglo?: Prisma.TipoArregloListRelationFilter;
    zona?: Prisma.XOR<Prisma.ZonaNullableScalarRelationFilter, Prisma.ZonaWhereInput> | null;
}, "id">;
export type CatalogoServicioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    tipoEspecifico?: Prisma.SortOrder;
    medidaBase?: Prisma.SortOrder;
    tiempoBase?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    zonaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CatalogoServicioCountOrderByAggregateInput;
    _avg?: Prisma.CatalogoServicioAvgOrderByAggregateInput;
    _max?: Prisma.CatalogoServicioMaxOrderByAggregateInput;
    _min?: Prisma.CatalogoServicioMinOrderByAggregateInput;
    _sum?: Prisma.CatalogoServicioSumOrderByAggregateInput;
};
export type CatalogoServicioScalarWhereWithAggregatesInput = {
    AND?: Prisma.CatalogoServicioScalarWhereWithAggregatesInput | Prisma.CatalogoServicioScalarWhereWithAggregatesInput[];
    OR?: Prisma.CatalogoServicioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CatalogoServicioScalarWhereWithAggregatesInput | Prisma.CatalogoServicioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"CatalogoServicio"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"CatalogoServicio"> | string;
    categoria?: Prisma.StringWithAggregatesFilter<"CatalogoServicio"> | string;
    tipoEspecifico?: Prisma.StringWithAggregatesFilter<"CatalogoServicio"> | string;
    medidaBase?: Prisma.DecimalWithAggregatesFilter<"CatalogoServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntWithAggregatesFilter<"CatalogoServicio"> | number;
    activo?: Prisma.BoolWithAggregatesFilter<"CatalogoServicio"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CatalogoServicio"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CatalogoServicio"> | Date | string;
    zonaId?: Prisma.IntNullableWithAggregatesFilter<"CatalogoServicio"> | number | null;
};
export type CatalogoServicioCreateInput = {
    nombre?: string;
    categoria: string;
    tipoEspecifico: string;
    medidaBase?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: number;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categoriasFactores?: Prisma.CategoriaFactorCobroCreateNestedManyWithoutServiciosInput;
    asignaciones?: Prisma.PrendaServicioCreateNestedManyWithoutServicioInput;
    materiales?: Prisma.MaterialCreateNestedManyWithoutServiciosInput;
    tiposArreglo?: Prisma.TipoArregloCreateNestedManyWithoutServiciosInput;
    zona?: Prisma.ZonaCreateNestedOneWithoutServiciosInput;
};
export type CatalogoServicioUncheckedCreateInput = {
    id?: number;
    nombre?: string;
    categoria: string;
    tipoEspecifico: string;
    medidaBase?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: number;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zonaId?: number | null;
    categoriasFactores?: Prisma.CategoriaFactorCobroUncheckedCreateNestedManyWithoutServiciosInput;
    asignaciones?: Prisma.PrendaServicioUncheckedCreateNestedManyWithoutServicioInput;
    materiales?: Prisma.MaterialUncheckedCreateNestedManyWithoutServiciosInput;
    tiposArreglo?: Prisma.TipoArregloUncheckedCreateNestedManyWithoutServiciosInput;
};
export type CatalogoServicioUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoEspecifico?: Prisma.StringFieldUpdateOperationsInput | string;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoriasFactores?: Prisma.CategoriaFactorCobroUpdateManyWithoutServiciosNestedInput;
    asignaciones?: Prisma.PrendaServicioUpdateManyWithoutServicioNestedInput;
    materiales?: Prisma.MaterialUpdateManyWithoutServiciosNestedInput;
    tiposArreglo?: Prisma.TipoArregloUpdateManyWithoutServiciosNestedInput;
    zona?: Prisma.ZonaUpdateOneWithoutServiciosNestedInput;
};
export type CatalogoServicioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoEspecifico?: Prisma.StringFieldUpdateOperationsInput | string;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    zonaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoriasFactores?: Prisma.CategoriaFactorCobroUncheckedUpdateManyWithoutServiciosNestedInput;
    asignaciones?: Prisma.PrendaServicioUncheckedUpdateManyWithoutServicioNestedInput;
    materiales?: Prisma.MaterialUncheckedUpdateManyWithoutServiciosNestedInput;
    tiposArreglo?: Prisma.TipoArregloUncheckedUpdateManyWithoutServiciosNestedInput;
};
export type CatalogoServicioCreateManyInput = {
    id?: number;
    nombre?: string;
    categoria: string;
    tipoEspecifico: string;
    medidaBase?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: number;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zonaId?: number | null;
};
export type CatalogoServicioUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoEspecifico?: Prisma.StringFieldUpdateOperationsInput | string;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CatalogoServicioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoEspecifico?: Prisma.StringFieldUpdateOperationsInput | string;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    zonaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type CatalogoServicioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    tipoEspecifico?: Prisma.SortOrder;
    medidaBase?: Prisma.SortOrder;
    tiempoBase?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    zonaId?: Prisma.SortOrder;
};
export type CatalogoServicioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    medidaBase?: Prisma.SortOrder;
    tiempoBase?: Prisma.SortOrder;
    zonaId?: Prisma.SortOrder;
};
export type CatalogoServicioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    tipoEspecifico?: Prisma.SortOrder;
    medidaBase?: Prisma.SortOrder;
    tiempoBase?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    zonaId?: Prisma.SortOrder;
};
export type CatalogoServicioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    tipoEspecifico?: Prisma.SortOrder;
    medidaBase?: Prisma.SortOrder;
    tiempoBase?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    zonaId?: Prisma.SortOrder;
};
export type CatalogoServicioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    medidaBase?: Prisma.SortOrder;
    tiempoBase?: Prisma.SortOrder;
    zonaId?: Prisma.SortOrder;
};
export type CatalogoServicioListRelationFilter = {
    every?: Prisma.CatalogoServicioWhereInput;
    some?: Prisma.CatalogoServicioWhereInput;
    none?: Prisma.CatalogoServicioWhereInput;
};
export type CatalogoServicioOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CatalogoServicioScalarRelationFilter = {
    is?: Prisma.CatalogoServicioWhereInput;
    isNot?: Prisma.CatalogoServicioWhereInput;
};
export type CatalogoServicioCreateNestedManyWithoutCategoriasFactoresInput = {
    create?: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutCategoriasFactoresInput, Prisma.CatalogoServicioUncheckedCreateWithoutCategoriasFactoresInput> | Prisma.CatalogoServicioCreateWithoutCategoriasFactoresInput[] | Prisma.CatalogoServicioUncheckedCreateWithoutCategoriasFactoresInput[];
    connectOrCreate?: Prisma.CatalogoServicioCreateOrConnectWithoutCategoriasFactoresInput | Prisma.CatalogoServicioCreateOrConnectWithoutCategoriasFactoresInput[];
    connect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
};
export type CatalogoServicioUncheckedCreateNestedManyWithoutCategoriasFactoresInput = {
    create?: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutCategoriasFactoresInput, Prisma.CatalogoServicioUncheckedCreateWithoutCategoriasFactoresInput> | Prisma.CatalogoServicioCreateWithoutCategoriasFactoresInput[] | Prisma.CatalogoServicioUncheckedCreateWithoutCategoriasFactoresInput[];
    connectOrCreate?: Prisma.CatalogoServicioCreateOrConnectWithoutCategoriasFactoresInput | Prisma.CatalogoServicioCreateOrConnectWithoutCategoriasFactoresInput[];
    connect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
};
export type CatalogoServicioUpdateManyWithoutCategoriasFactoresNestedInput = {
    create?: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutCategoriasFactoresInput, Prisma.CatalogoServicioUncheckedCreateWithoutCategoriasFactoresInput> | Prisma.CatalogoServicioCreateWithoutCategoriasFactoresInput[] | Prisma.CatalogoServicioUncheckedCreateWithoutCategoriasFactoresInput[];
    connectOrCreate?: Prisma.CatalogoServicioCreateOrConnectWithoutCategoriasFactoresInput | Prisma.CatalogoServicioCreateOrConnectWithoutCategoriasFactoresInput[];
    upsert?: Prisma.CatalogoServicioUpsertWithWhereUniqueWithoutCategoriasFactoresInput | Prisma.CatalogoServicioUpsertWithWhereUniqueWithoutCategoriasFactoresInput[];
    set?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    disconnect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    delete?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    connect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    update?: Prisma.CatalogoServicioUpdateWithWhereUniqueWithoutCategoriasFactoresInput | Prisma.CatalogoServicioUpdateWithWhereUniqueWithoutCategoriasFactoresInput[];
    updateMany?: Prisma.CatalogoServicioUpdateManyWithWhereWithoutCategoriasFactoresInput | Prisma.CatalogoServicioUpdateManyWithWhereWithoutCategoriasFactoresInput[];
    deleteMany?: Prisma.CatalogoServicioScalarWhereInput | Prisma.CatalogoServicioScalarWhereInput[];
};
export type CatalogoServicioUncheckedUpdateManyWithoutCategoriasFactoresNestedInput = {
    create?: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutCategoriasFactoresInput, Prisma.CatalogoServicioUncheckedCreateWithoutCategoriasFactoresInput> | Prisma.CatalogoServicioCreateWithoutCategoriasFactoresInput[] | Prisma.CatalogoServicioUncheckedCreateWithoutCategoriasFactoresInput[];
    connectOrCreate?: Prisma.CatalogoServicioCreateOrConnectWithoutCategoriasFactoresInput | Prisma.CatalogoServicioCreateOrConnectWithoutCategoriasFactoresInput[];
    upsert?: Prisma.CatalogoServicioUpsertWithWhereUniqueWithoutCategoriasFactoresInput | Prisma.CatalogoServicioUpsertWithWhereUniqueWithoutCategoriasFactoresInput[];
    set?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    disconnect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    delete?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    connect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    update?: Prisma.CatalogoServicioUpdateWithWhereUniqueWithoutCategoriasFactoresInput | Prisma.CatalogoServicioUpdateWithWhereUniqueWithoutCategoriasFactoresInput[];
    updateMany?: Prisma.CatalogoServicioUpdateManyWithWhereWithoutCategoriasFactoresInput | Prisma.CatalogoServicioUpdateManyWithWhereWithoutCategoriasFactoresInput[];
    deleteMany?: Prisma.CatalogoServicioScalarWhereInput | Prisma.CatalogoServicioScalarWhereInput[];
};
export type CatalogoServicioCreateNestedOneWithoutAsignacionesInput = {
    create?: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutAsignacionesInput, Prisma.CatalogoServicioUncheckedCreateWithoutAsignacionesInput>;
    connectOrCreate?: Prisma.CatalogoServicioCreateOrConnectWithoutAsignacionesInput;
    connect?: Prisma.CatalogoServicioWhereUniqueInput;
};
export type CatalogoServicioUpdateOneRequiredWithoutAsignacionesNestedInput = {
    create?: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutAsignacionesInput, Prisma.CatalogoServicioUncheckedCreateWithoutAsignacionesInput>;
    connectOrCreate?: Prisma.CatalogoServicioCreateOrConnectWithoutAsignacionesInput;
    upsert?: Prisma.CatalogoServicioUpsertWithoutAsignacionesInput;
    connect?: Prisma.CatalogoServicioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CatalogoServicioUpdateToOneWithWhereWithoutAsignacionesInput, Prisma.CatalogoServicioUpdateWithoutAsignacionesInput>, Prisma.CatalogoServicioUncheckedUpdateWithoutAsignacionesInput>;
};
export type CatalogoServicioCreateNestedManyWithoutMaterialesInput = {
    create?: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutMaterialesInput, Prisma.CatalogoServicioUncheckedCreateWithoutMaterialesInput> | Prisma.CatalogoServicioCreateWithoutMaterialesInput[] | Prisma.CatalogoServicioUncheckedCreateWithoutMaterialesInput[];
    connectOrCreate?: Prisma.CatalogoServicioCreateOrConnectWithoutMaterialesInput | Prisma.CatalogoServicioCreateOrConnectWithoutMaterialesInput[];
    connect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
};
export type CatalogoServicioUncheckedCreateNestedManyWithoutMaterialesInput = {
    create?: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutMaterialesInput, Prisma.CatalogoServicioUncheckedCreateWithoutMaterialesInput> | Prisma.CatalogoServicioCreateWithoutMaterialesInput[] | Prisma.CatalogoServicioUncheckedCreateWithoutMaterialesInput[];
    connectOrCreate?: Prisma.CatalogoServicioCreateOrConnectWithoutMaterialesInput | Prisma.CatalogoServicioCreateOrConnectWithoutMaterialesInput[];
    connect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
};
export type CatalogoServicioUpdateManyWithoutMaterialesNestedInput = {
    create?: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutMaterialesInput, Prisma.CatalogoServicioUncheckedCreateWithoutMaterialesInput> | Prisma.CatalogoServicioCreateWithoutMaterialesInput[] | Prisma.CatalogoServicioUncheckedCreateWithoutMaterialesInput[];
    connectOrCreate?: Prisma.CatalogoServicioCreateOrConnectWithoutMaterialesInput | Prisma.CatalogoServicioCreateOrConnectWithoutMaterialesInput[];
    upsert?: Prisma.CatalogoServicioUpsertWithWhereUniqueWithoutMaterialesInput | Prisma.CatalogoServicioUpsertWithWhereUniqueWithoutMaterialesInput[];
    set?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    disconnect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    delete?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    connect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    update?: Prisma.CatalogoServicioUpdateWithWhereUniqueWithoutMaterialesInput | Prisma.CatalogoServicioUpdateWithWhereUniqueWithoutMaterialesInput[];
    updateMany?: Prisma.CatalogoServicioUpdateManyWithWhereWithoutMaterialesInput | Prisma.CatalogoServicioUpdateManyWithWhereWithoutMaterialesInput[];
    deleteMany?: Prisma.CatalogoServicioScalarWhereInput | Prisma.CatalogoServicioScalarWhereInput[];
};
export type CatalogoServicioUncheckedUpdateManyWithoutMaterialesNestedInput = {
    create?: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutMaterialesInput, Prisma.CatalogoServicioUncheckedCreateWithoutMaterialesInput> | Prisma.CatalogoServicioCreateWithoutMaterialesInput[] | Prisma.CatalogoServicioUncheckedCreateWithoutMaterialesInput[];
    connectOrCreate?: Prisma.CatalogoServicioCreateOrConnectWithoutMaterialesInput | Prisma.CatalogoServicioCreateOrConnectWithoutMaterialesInput[];
    upsert?: Prisma.CatalogoServicioUpsertWithWhereUniqueWithoutMaterialesInput | Prisma.CatalogoServicioUpsertWithWhereUniqueWithoutMaterialesInput[];
    set?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    disconnect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    delete?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    connect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    update?: Prisma.CatalogoServicioUpdateWithWhereUniqueWithoutMaterialesInput | Prisma.CatalogoServicioUpdateWithWhereUniqueWithoutMaterialesInput[];
    updateMany?: Prisma.CatalogoServicioUpdateManyWithWhereWithoutMaterialesInput | Prisma.CatalogoServicioUpdateManyWithWhereWithoutMaterialesInput[];
    deleteMany?: Prisma.CatalogoServicioScalarWhereInput | Prisma.CatalogoServicioScalarWhereInput[];
};
export type CatalogoServicioCreateNestedManyWithoutTiposArregloInput = {
    create?: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutTiposArregloInput, Prisma.CatalogoServicioUncheckedCreateWithoutTiposArregloInput> | Prisma.CatalogoServicioCreateWithoutTiposArregloInput[] | Prisma.CatalogoServicioUncheckedCreateWithoutTiposArregloInput[];
    connectOrCreate?: Prisma.CatalogoServicioCreateOrConnectWithoutTiposArregloInput | Prisma.CatalogoServicioCreateOrConnectWithoutTiposArregloInput[];
    connect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
};
export type CatalogoServicioUncheckedCreateNestedManyWithoutTiposArregloInput = {
    create?: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutTiposArregloInput, Prisma.CatalogoServicioUncheckedCreateWithoutTiposArregloInput> | Prisma.CatalogoServicioCreateWithoutTiposArregloInput[] | Prisma.CatalogoServicioUncheckedCreateWithoutTiposArregloInput[];
    connectOrCreate?: Prisma.CatalogoServicioCreateOrConnectWithoutTiposArregloInput | Prisma.CatalogoServicioCreateOrConnectWithoutTiposArregloInput[];
    connect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
};
export type CatalogoServicioUpdateManyWithoutTiposArregloNestedInput = {
    create?: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutTiposArregloInput, Prisma.CatalogoServicioUncheckedCreateWithoutTiposArregloInput> | Prisma.CatalogoServicioCreateWithoutTiposArregloInput[] | Prisma.CatalogoServicioUncheckedCreateWithoutTiposArregloInput[];
    connectOrCreate?: Prisma.CatalogoServicioCreateOrConnectWithoutTiposArregloInput | Prisma.CatalogoServicioCreateOrConnectWithoutTiposArregloInput[];
    upsert?: Prisma.CatalogoServicioUpsertWithWhereUniqueWithoutTiposArregloInput | Prisma.CatalogoServicioUpsertWithWhereUniqueWithoutTiposArregloInput[];
    set?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    disconnect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    delete?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    connect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    update?: Prisma.CatalogoServicioUpdateWithWhereUniqueWithoutTiposArregloInput | Prisma.CatalogoServicioUpdateWithWhereUniqueWithoutTiposArregloInput[];
    updateMany?: Prisma.CatalogoServicioUpdateManyWithWhereWithoutTiposArregloInput | Prisma.CatalogoServicioUpdateManyWithWhereWithoutTiposArregloInput[];
    deleteMany?: Prisma.CatalogoServicioScalarWhereInput | Prisma.CatalogoServicioScalarWhereInput[];
};
export type CatalogoServicioUncheckedUpdateManyWithoutTiposArregloNestedInput = {
    create?: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutTiposArregloInput, Prisma.CatalogoServicioUncheckedCreateWithoutTiposArregloInput> | Prisma.CatalogoServicioCreateWithoutTiposArregloInput[] | Prisma.CatalogoServicioUncheckedCreateWithoutTiposArregloInput[];
    connectOrCreate?: Prisma.CatalogoServicioCreateOrConnectWithoutTiposArregloInput | Prisma.CatalogoServicioCreateOrConnectWithoutTiposArregloInput[];
    upsert?: Prisma.CatalogoServicioUpsertWithWhereUniqueWithoutTiposArregloInput | Prisma.CatalogoServicioUpsertWithWhereUniqueWithoutTiposArregloInput[];
    set?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    disconnect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    delete?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    connect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    update?: Prisma.CatalogoServicioUpdateWithWhereUniqueWithoutTiposArregloInput | Prisma.CatalogoServicioUpdateWithWhereUniqueWithoutTiposArregloInput[];
    updateMany?: Prisma.CatalogoServicioUpdateManyWithWhereWithoutTiposArregloInput | Prisma.CatalogoServicioUpdateManyWithWhereWithoutTiposArregloInput[];
    deleteMany?: Prisma.CatalogoServicioScalarWhereInput | Prisma.CatalogoServicioScalarWhereInput[];
};
export type CatalogoServicioCreateNestedManyWithoutZonaInput = {
    create?: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutZonaInput, Prisma.CatalogoServicioUncheckedCreateWithoutZonaInput> | Prisma.CatalogoServicioCreateWithoutZonaInput[] | Prisma.CatalogoServicioUncheckedCreateWithoutZonaInput[];
    connectOrCreate?: Prisma.CatalogoServicioCreateOrConnectWithoutZonaInput | Prisma.CatalogoServicioCreateOrConnectWithoutZonaInput[];
    createMany?: Prisma.CatalogoServicioCreateManyZonaInputEnvelope;
    connect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
};
export type CatalogoServicioUncheckedCreateNestedManyWithoutZonaInput = {
    create?: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutZonaInput, Prisma.CatalogoServicioUncheckedCreateWithoutZonaInput> | Prisma.CatalogoServicioCreateWithoutZonaInput[] | Prisma.CatalogoServicioUncheckedCreateWithoutZonaInput[];
    connectOrCreate?: Prisma.CatalogoServicioCreateOrConnectWithoutZonaInput | Prisma.CatalogoServicioCreateOrConnectWithoutZonaInput[];
    createMany?: Prisma.CatalogoServicioCreateManyZonaInputEnvelope;
    connect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
};
export type CatalogoServicioUpdateManyWithoutZonaNestedInput = {
    create?: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutZonaInput, Prisma.CatalogoServicioUncheckedCreateWithoutZonaInput> | Prisma.CatalogoServicioCreateWithoutZonaInput[] | Prisma.CatalogoServicioUncheckedCreateWithoutZonaInput[];
    connectOrCreate?: Prisma.CatalogoServicioCreateOrConnectWithoutZonaInput | Prisma.CatalogoServicioCreateOrConnectWithoutZonaInput[];
    upsert?: Prisma.CatalogoServicioUpsertWithWhereUniqueWithoutZonaInput | Prisma.CatalogoServicioUpsertWithWhereUniqueWithoutZonaInput[];
    createMany?: Prisma.CatalogoServicioCreateManyZonaInputEnvelope;
    set?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    disconnect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    delete?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    connect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    update?: Prisma.CatalogoServicioUpdateWithWhereUniqueWithoutZonaInput | Prisma.CatalogoServicioUpdateWithWhereUniqueWithoutZonaInput[];
    updateMany?: Prisma.CatalogoServicioUpdateManyWithWhereWithoutZonaInput | Prisma.CatalogoServicioUpdateManyWithWhereWithoutZonaInput[];
    deleteMany?: Prisma.CatalogoServicioScalarWhereInput | Prisma.CatalogoServicioScalarWhereInput[];
};
export type CatalogoServicioUncheckedUpdateManyWithoutZonaNestedInput = {
    create?: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutZonaInput, Prisma.CatalogoServicioUncheckedCreateWithoutZonaInput> | Prisma.CatalogoServicioCreateWithoutZonaInput[] | Prisma.CatalogoServicioUncheckedCreateWithoutZonaInput[];
    connectOrCreate?: Prisma.CatalogoServicioCreateOrConnectWithoutZonaInput | Prisma.CatalogoServicioCreateOrConnectWithoutZonaInput[];
    upsert?: Prisma.CatalogoServicioUpsertWithWhereUniqueWithoutZonaInput | Prisma.CatalogoServicioUpsertWithWhereUniqueWithoutZonaInput[];
    createMany?: Prisma.CatalogoServicioCreateManyZonaInputEnvelope;
    set?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    disconnect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    delete?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    connect?: Prisma.CatalogoServicioWhereUniqueInput | Prisma.CatalogoServicioWhereUniqueInput[];
    update?: Prisma.CatalogoServicioUpdateWithWhereUniqueWithoutZonaInput | Prisma.CatalogoServicioUpdateWithWhereUniqueWithoutZonaInput[];
    updateMany?: Prisma.CatalogoServicioUpdateManyWithWhereWithoutZonaInput | Prisma.CatalogoServicioUpdateManyWithWhereWithoutZonaInput[];
    deleteMany?: Prisma.CatalogoServicioScalarWhereInput | Prisma.CatalogoServicioScalarWhereInput[];
};
export type CatalogoServicioCreateWithoutCategoriasFactoresInput = {
    nombre?: string;
    categoria: string;
    tipoEspecifico: string;
    medidaBase?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: number;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    asignaciones?: Prisma.PrendaServicioCreateNestedManyWithoutServicioInput;
    materiales?: Prisma.MaterialCreateNestedManyWithoutServiciosInput;
    tiposArreglo?: Prisma.TipoArregloCreateNestedManyWithoutServiciosInput;
    zona?: Prisma.ZonaCreateNestedOneWithoutServiciosInput;
};
export type CatalogoServicioUncheckedCreateWithoutCategoriasFactoresInput = {
    id?: number;
    nombre?: string;
    categoria: string;
    tipoEspecifico: string;
    medidaBase?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: number;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zonaId?: number | null;
    asignaciones?: Prisma.PrendaServicioUncheckedCreateNestedManyWithoutServicioInput;
    materiales?: Prisma.MaterialUncheckedCreateNestedManyWithoutServiciosInput;
    tiposArreglo?: Prisma.TipoArregloUncheckedCreateNestedManyWithoutServiciosInput;
};
export type CatalogoServicioCreateOrConnectWithoutCategoriasFactoresInput = {
    where: Prisma.CatalogoServicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutCategoriasFactoresInput, Prisma.CatalogoServicioUncheckedCreateWithoutCategoriasFactoresInput>;
};
export type CatalogoServicioUpsertWithWhereUniqueWithoutCategoriasFactoresInput = {
    where: Prisma.CatalogoServicioWhereUniqueInput;
    update: Prisma.XOR<Prisma.CatalogoServicioUpdateWithoutCategoriasFactoresInput, Prisma.CatalogoServicioUncheckedUpdateWithoutCategoriasFactoresInput>;
    create: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutCategoriasFactoresInput, Prisma.CatalogoServicioUncheckedCreateWithoutCategoriasFactoresInput>;
};
export type CatalogoServicioUpdateWithWhereUniqueWithoutCategoriasFactoresInput = {
    where: Prisma.CatalogoServicioWhereUniqueInput;
    data: Prisma.XOR<Prisma.CatalogoServicioUpdateWithoutCategoriasFactoresInput, Prisma.CatalogoServicioUncheckedUpdateWithoutCategoriasFactoresInput>;
};
export type CatalogoServicioUpdateManyWithWhereWithoutCategoriasFactoresInput = {
    where: Prisma.CatalogoServicioScalarWhereInput;
    data: Prisma.XOR<Prisma.CatalogoServicioUpdateManyMutationInput, Prisma.CatalogoServicioUncheckedUpdateManyWithoutCategoriasFactoresInput>;
};
export type CatalogoServicioScalarWhereInput = {
    AND?: Prisma.CatalogoServicioScalarWhereInput | Prisma.CatalogoServicioScalarWhereInput[];
    OR?: Prisma.CatalogoServicioScalarWhereInput[];
    NOT?: Prisma.CatalogoServicioScalarWhereInput | Prisma.CatalogoServicioScalarWhereInput[];
    id?: Prisma.IntFilter<"CatalogoServicio"> | number;
    nombre?: Prisma.StringFilter<"CatalogoServicio"> | string;
    categoria?: Prisma.StringFilter<"CatalogoServicio"> | string;
    tipoEspecifico?: Prisma.StringFilter<"CatalogoServicio"> | string;
    medidaBase?: Prisma.DecimalFilter<"CatalogoServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFilter<"CatalogoServicio"> | number;
    activo?: Prisma.BoolFilter<"CatalogoServicio"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"CatalogoServicio"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CatalogoServicio"> | Date | string;
    zonaId?: Prisma.IntNullableFilter<"CatalogoServicio"> | number | null;
};
export type CatalogoServicioCreateWithoutAsignacionesInput = {
    nombre?: string;
    categoria: string;
    tipoEspecifico: string;
    medidaBase?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: number;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categoriasFactores?: Prisma.CategoriaFactorCobroCreateNestedManyWithoutServiciosInput;
    materiales?: Prisma.MaterialCreateNestedManyWithoutServiciosInput;
    tiposArreglo?: Prisma.TipoArregloCreateNestedManyWithoutServiciosInput;
    zona?: Prisma.ZonaCreateNestedOneWithoutServiciosInput;
};
export type CatalogoServicioUncheckedCreateWithoutAsignacionesInput = {
    id?: number;
    nombre?: string;
    categoria: string;
    tipoEspecifico: string;
    medidaBase?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: number;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zonaId?: number | null;
    categoriasFactores?: Prisma.CategoriaFactorCobroUncheckedCreateNestedManyWithoutServiciosInput;
    materiales?: Prisma.MaterialUncheckedCreateNestedManyWithoutServiciosInput;
    tiposArreglo?: Prisma.TipoArregloUncheckedCreateNestedManyWithoutServiciosInput;
};
export type CatalogoServicioCreateOrConnectWithoutAsignacionesInput = {
    where: Prisma.CatalogoServicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutAsignacionesInput, Prisma.CatalogoServicioUncheckedCreateWithoutAsignacionesInput>;
};
export type CatalogoServicioUpsertWithoutAsignacionesInput = {
    update: Prisma.XOR<Prisma.CatalogoServicioUpdateWithoutAsignacionesInput, Prisma.CatalogoServicioUncheckedUpdateWithoutAsignacionesInput>;
    create: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutAsignacionesInput, Prisma.CatalogoServicioUncheckedCreateWithoutAsignacionesInput>;
    where?: Prisma.CatalogoServicioWhereInput;
};
export type CatalogoServicioUpdateToOneWithWhereWithoutAsignacionesInput = {
    where?: Prisma.CatalogoServicioWhereInput;
    data: Prisma.XOR<Prisma.CatalogoServicioUpdateWithoutAsignacionesInput, Prisma.CatalogoServicioUncheckedUpdateWithoutAsignacionesInput>;
};
export type CatalogoServicioUpdateWithoutAsignacionesInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoEspecifico?: Prisma.StringFieldUpdateOperationsInput | string;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoriasFactores?: Prisma.CategoriaFactorCobroUpdateManyWithoutServiciosNestedInput;
    materiales?: Prisma.MaterialUpdateManyWithoutServiciosNestedInput;
    tiposArreglo?: Prisma.TipoArregloUpdateManyWithoutServiciosNestedInput;
    zona?: Prisma.ZonaUpdateOneWithoutServiciosNestedInput;
};
export type CatalogoServicioUncheckedUpdateWithoutAsignacionesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoEspecifico?: Prisma.StringFieldUpdateOperationsInput | string;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    zonaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoriasFactores?: Prisma.CategoriaFactorCobroUncheckedUpdateManyWithoutServiciosNestedInput;
    materiales?: Prisma.MaterialUncheckedUpdateManyWithoutServiciosNestedInput;
    tiposArreglo?: Prisma.TipoArregloUncheckedUpdateManyWithoutServiciosNestedInput;
};
export type CatalogoServicioCreateWithoutMaterialesInput = {
    nombre?: string;
    categoria: string;
    tipoEspecifico: string;
    medidaBase?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: number;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categoriasFactores?: Prisma.CategoriaFactorCobroCreateNestedManyWithoutServiciosInput;
    asignaciones?: Prisma.PrendaServicioCreateNestedManyWithoutServicioInput;
    tiposArreglo?: Prisma.TipoArregloCreateNestedManyWithoutServiciosInput;
    zona?: Prisma.ZonaCreateNestedOneWithoutServiciosInput;
};
export type CatalogoServicioUncheckedCreateWithoutMaterialesInput = {
    id?: number;
    nombre?: string;
    categoria: string;
    tipoEspecifico: string;
    medidaBase?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: number;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zonaId?: number | null;
    categoriasFactores?: Prisma.CategoriaFactorCobroUncheckedCreateNestedManyWithoutServiciosInput;
    asignaciones?: Prisma.PrendaServicioUncheckedCreateNestedManyWithoutServicioInput;
    tiposArreglo?: Prisma.TipoArregloUncheckedCreateNestedManyWithoutServiciosInput;
};
export type CatalogoServicioCreateOrConnectWithoutMaterialesInput = {
    where: Prisma.CatalogoServicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutMaterialesInput, Prisma.CatalogoServicioUncheckedCreateWithoutMaterialesInput>;
};
export type CatalogoServicioUpsertWithWhereUniqueWithoutMaterialesInput = {
    where: Prisma.CatalogoServicioWhereUniqueInput;
    update: Prisma.XOR<Prisma.CatalogoServicioUpdateWithoutMaterialesInput, Prisma.CatalogoServicioUncheckedUpdateWithoutMaterialesInput>;
    create: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutMaterialesInput, Prisma.CatalogoServicioUncheckedCreateWithoutMaterialesInput>;
};
export type CatalogoServicioUpdateWithWhereUniqueWithoutMaterialesInput = {
    where: Prisma.CatalogoServicioWhereUniqueInput;
    data: Prisma.XOR<Prisma.CatalogoServicioUpdateWithoutMaterialesInput, Prisma.CatalogoServicioUncheckedUpdateWithoutMaterialesInput>;
};
export type CatalogoServicioUpdateManyWithWhereWithoutMaterialesInput = {
    where: Prisma.CatalogoServicioScalarWhereInput;
    data: Prisma.XOR<Prisma.CatalogoServicioUpdateManyMutationInput, Prisma.CatalogoServicioUncheckedUpdateManyWithoutMaterialesInput>;
};
export type CatalogoServicioCreateWithoutTiposArregloInput = {
    nombre?: string;
    categoria: string;
    tipoEspecifico: string;
    medidaBase?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: number;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categoriasFactores?: Prisma.CategoriaFactorCobroCreateNestedManyWithoutServiciosInput;
    asignaciones?: Prisma.PrendaServicioCreateNestedManyWithoutServicioInput;
    materiales?: Prisma.MaterialCreateNestedManyWithoutServiciosInput;
    zona?: Prisma.ZonaCreateNestedOneWithoutServiciosInput;
};
export type CatalogoServicioUncheckedCreateWithoutTiposArregloInput = {
    id?: number;
    nombre?: string;
    categoria: string;
    tipoEspecifico: string;
    medidaBase?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: number;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zonaId?: number | null;
    categoriasFactores?: Prisma.CategoriaFactorCobroUncheckedCreateNestedManyWithoutServiciosInput;
    asignaciones?: Prisma.PrendaServicioUncheckedCreateNestedManyWithoutServicioInput;
    materiales?: Prisma.MaterialUncheckedCreateNestedManyWithoutServiciosInput;
};
export type CatalogoServicioCreateOrConnectWithoutTiposArregloInput = {
    where: Prisma.CatalogoServicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutTiposArregloInput, Prisma.CatalogoServicioUncheckedCreateWithoutTiposArregloInput>;
};
export type CatalogoServicioUpsertWithWhereUniqueWithoutTiposArregloInput = {
    where: Prisma.CatalogoServicioWhereUniqueInput;
    update: Prisma.XOR<Prisma.CatalogoServicioUpdateWithoutTiposArregloInput, Prisma.CatalogoServicioUncheckedUpdateWithoutTiposArregloInput>;
    create: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutTiposArregloInput, Prisma.CatalogoServicioUncheckedCreateWithoutTiposArregloInput>;
};
export type CatalogoServicioUpdateWithWhereUniqueWithoutTiposArregloInput = {
    where: Prisma.CatalogoServicioWhereUniqueInput;
    data: Prisma.XOR<Prisma.CatalogoServicioUpdateWithoutTiposArregloInput, Prisma.CatalogoServicioUncheckedUpdateWithoutTiposArregloInput>;
};
export type CatalogoServicioUpdateManyWithWhereWithoutTiposArregloInput = {
    where: Prisma.CatalogoServicioScalarWhereInput;
    data: Prisma.XOR<Prisma.CatalogoServicioUpdateManyMutationInput, Prisma.CatalogoServicioUncheckedUpdateManyWithoutTiposArregloInput>;
};
export type CatalogoServicioCreateWithoutZonaInput = {
    nombre?: string;
    categoria: string;
    tipoEspecifico: string;
    medidaBase?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: number;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categoriasFactores?: Prisma.CategoriaFactorCobroCreateNestedManyWithoutServiciosInput;
    asignaciones?: Prisma.PrendaServicioCreateNestedManyWithoutServicioInput;
    materiales?: Prisma.MaterialCreateNestedManyWithoutServiciosInput;
    tiposArreglo?: Prisma.TipoArregloCreateNestedManyWithoutServiciosInput;
};
export type CatalogoServicioUncheckedCreateWithoutZonaInput = {
    id?: number;
    nombre?: string;
    categoria: string;
    tipoEspecifico: string;
    medidaBase?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: number;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categoriasFactores?: Prisma.CategoriaFactorCobroUncheckedCreateNestedManyWithoutServiciosInput;
    asignaciones?: Prisma.PrendaServicioUncheckedCreateNestedManyWithoutServicioInput;
    materiales?: Prisma.MaterialUncheckedCreateNestedManyWithoutServiciosInput;
    tiposArreglo?: Prisma.TipoArregloUncheckedCreateNestedManyWithoutServiciosInput;
};
export type CatalogoServicioCreateOrConnectWithoutZonaInput = {
    where: Prisma.CatalogoServicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutZonaInput, Prisma.CatalogoServicioUncheckedCreateWithoutZonaInput>;
};
export type CatalogoServicioCreateManyZonaInputEnvelope = {
    data: Prisma.CatalogoServicioCreateManyZonaInput | Prisma.CatalogoServicioCreateManyZonaInput[];
    skipDuplicates?: boolean;
};
export type CatalogoServicioUpsertWithWhereUniqueWithoutZonaInput = {
    where: Prisma.CatalogoServicioWhereUniqueInput;
    update: Prisma.XOR<Prisma.CatalogoServicioUpdateWithoutZonaInput, Prisma.CatalogoServicioUncheckedUpdateWithoutZonaInput>;
    create: Prisma.XOR<Prisma.CatalogoServicioCreateWithoutZonaInput, Prisma.CatalogoServicioUncheckedCreateWithoutZonaInput>;
};
export type CatalogoServicioUpdateWithWhereUniqueWithoutZonaInput = {
    where: Prisma.CatalogoServicioWhereUniqueInput;
    data: Prisma.XOR<Prisma.CatalogoServicioUpdateWithoutZonaInput, Prisma.CatalogoServicioUncheckedUpdateWithoutZonaInput>;
};
export type CatalogoServicioUpdateManyWithWhereWithoutZonaInput = {
    where: Prisma.CatalogoServicioScalarWhereInput;
    data: Prisma.XOR<Prisma.CatalogoServicioUpdateManyMutationInput, Prisma.CatalogoServicioUncheckedUpdateManyWithoutZonaInput>;
};
export type CatalogoServicioUpdateWithoutCategoriasFactoresInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoEspecifico?: Prisma.StringFieldUpdateOperationsInput | string;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asignaciones?: Prisma.PrendaServicioUpdateManyWithoutServicioNestedInput;
    materiales?: Prisma.MaterialUpdateManyWithoutServiciosNestedInput;
    tiposArreglo?: Prisma.TipoArregloUpdateManyWithoutServiciosNestedInput;
    zona?: Prisma.ZonaUpdateOneWithoutServiciosNestedInput;
};
export type CatalogoServicioUncheckedUpdateWithoutCategoriasFactoresInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoEspecifico?: Prisma.StringFieldUpdateOperationsInput | string;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    zonaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    asignaciones?: Prisma.PrendaServicioUncheckedUpdateManyWithoutServicioNestedInput;
    materiales?: Prisma.MaterialUncheckedUpdateManyWithoutServiciosNestedInput;
    tiposArreglo?: Prisma.TipoArregloUncheckedUpdateManyWithoutServiciosNestedInput;
};
export type CatalogoServicioUncheckedUpdateManyWithoutCategoriasFactoresInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoEspecifico?: Prisma.StringFieldUpdateOperationsInput | string;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    zonaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type CatalogoServicioUpdateWithoutMaterialesInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoEspecifico?: Prisma.StringFieldUpdateOperationsInput | string;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoriasFactores?: Prisma.CategoriaFactorCobroUpdateManyWithoutServiciosNestedInput;
    asignaciones?: Prisma.PrendaServicioUpdateManyWithoutServicioNestedInput;
    tiposArreglo?: Prisma.TipoArregloUpdateManyWithoutServiciosNestedInput;
    zona?: Prisma.ZonaUpdateOneWithoutServiciosNestedInput;
};
export type CatalogoServicioUncheckedUpdateWithoutMaterialesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoEspecifico?: Prisma.StringFieldUpdateOperationsInput | string;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    zonaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoriasFactores?: Prisma.CategoriaFactorCobroUncheckedUpdateManyWithoutServiciosNestedInput;
    asignaciones?: Prisma.PrendaServicioUncheckedUpdateManyWithoutServicioNestedInput;
    tiposArreglo?: Prisma.TipoArregloUncheckedUpdateManyWithoutServiciosNestedInput;
};
export type CatalogoServicioUncheckedUpdateManyWithoutMaterialesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoEspecifico?: Prisma.StringFieldUpdateOperationsInput | string;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    zonaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type CatalogoServicioUpdateWithoutTiposArregloInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoEspecifico?: Prisma.StringFieldUpdateOperationsInput | string;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoriasFactores?: Prisma.CategoriaFactorCobroUpdateManyWithoutServiciosNestedInput;
    asignaciones?: Prisma.PrendaServicioUpdateManyWithoutServicioNestedInput;
    materiales?: Prisma.MaterialUpdateManyWithoutServiciosNestedInput;
    zona?: Prisma.ZonaUpdateOneWithoutServiciosNestedInput;
};
export type CatalogoServicioUncheckedUpdateWithoutTiposArregloInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoEspecifico?: Prisma.StringFieldUpdateOperationsInput | string;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    zonaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoriasFactores?: Prisma.CategoriaFactorCobroUncheckedUpdateManyWithoutServiciosNestedInput;
    asignaciones?: Prisma.PrendaServicioUncheckedUpdateManyWithoutServicioNestedInput;
    materiales?: Prisma.MaterialUncheckedUpdateManyWithoutServiciosNestedInput;
};
export type CatalogoServicioUncheckedUpdateManyWithoutTiposArregloInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoEspecifico?: Prisma.StringFieldUpdateOperationsInput | string;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    zonaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type CatalogoServicioCreateManyZonaInput = {
    id?: number;
    nombre?: string;
    categoria: string;
    tipoEspecifico: string;
    medidaBase?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: number;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CatalogoServicioUpdateWithoutZonaInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoEspecifico?: Prisma.StringFieldUpdateOperationsInput | string;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoriasFactores?: Prisma.CategoriaFactorCobroUpdateManyWithoutServiciosNestedInput;
    asignaciones?: Prisma.PrendaServicioUpdateManyWithoutServicioNestedInput;
    materiales?: Prisma.MaterialUpdateManyWithoutServiciosNestedInput;
    tiposArreglo?: Prisma.TipoArregloUpdateManyWithoutServiciosNestedInput;
};
export type CatalogoServicioUncheckedUpdateWithoutZonaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoEspecifico?: Prisma.StringFieldUpdateOperationsInput | string;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoriasFactores?: Prisma.CategoriaFactorCobroUncheckedUpdateManyWithoutServiciosNestedInput;
    asignaciones?: Prisma.PrendaServicioUncheckedUpdateManyWithoutServicioNestedInput;
    materiales?: Prisma.MaterialUncheckedUpdateManyWithoutServiciosNestedInput;
    tiposArreglo?: Prisma.TipoArregloUncheckedUpdateManyWithoutServiciosNestedInput;
};
export type CatalogoServicioUncheckedUpdateManyWithoutZonaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoEspecifico?: Prisma.StringFieldUpdateOperationsInput | string;
    medidaBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tiempoBase?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CatalogoServicioCountOutputType = {
    categoriasFactores: number;
    asignaciones: number;
    materiales: number;
    tiposArreglo: number;
};
export type CatalogoServicioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categoriasFactores?: boolean | CatalogoServicioCountOutputTypeCountCategoriasFactoresArgs;
    asignaciones?: boolean | CatalogoServicioCountOutputTypeCountAsignacionesArgs;
    materiales?: boolean | CatalogoServicioCountOutputTypeCountMaterialesArgs;
    tiposArreglo?: boolean | CatalogoServicioCountOutputTypeCountTiposArregloArgs;
};
export type CatalogoServicioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CatalogoServicioCountOutputTypeSelect<ExtArgs> | null;
};
export type CatalogoServicioCountOutputTypeCountCategoriasFactoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoriaFactorCobroWhereInput;
};
export type CatalogoServicioCountOutputTypeCountAsignacionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrendaServicioWhereInput;
};
export type CatalogoServicioCountOutputTypeCountMaterialesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaterialWhereInput;
};
export type CatalogoServicioCountOutputTypeCountTiposArregloArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TipoArregloWhereInput;
};
export type CatalogoServicioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    categoria?: boolean;
    tipoEspecifico?: boolean;
    medidaBase?: boolean;
    tiempoBase?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    zonaId?: boolean;
    categoriasFactores?: boolean | Prisma.CatalogoServicio$categoriasFactoresArgs<ExtArgs>;
    asignaciones?: boolean | Prisma.CatalogoServicio$asignacionesArgs<ExtArgs>;
    materiales?: boolean | Prisma.CatalogoServicio$materialesArgs<ExtArgs>;
    tiposArreglo?: boolean | Prisma.CatalogoServicio$tiposArregloArgs<ExtArgs>;
    zona?: boolean | Prisma.CatalogoServicio$zonaArgs<ExtArgs>;
    _count?: boolean | Prisma.CatalogoServicioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["catalogoServicio"]>;
export type CatalogoServicioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    categoria?: boolean;
    tipoEspecifico?: boolean;
    medidaBase?: boolean;
    tiempoBase?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    zonaId?: boolean;
    zona?: boolean | Prisma.CatalogoServicio$zonaArgs<ExtArgs>;
}, ExtArgs["result"]["catalogoServicio"]>;
export type CatalogoServicioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    categoria?: boolean;
    tipoEspecifico?: boolean;
    medidaBase?: boolean;
    tiempoBase?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    zonaId?: boolean;
    zona?: boolean | Prisma.CatalogoServicio$zonaArgs<ExtArgs>;
}, ExtArgs["result"]["catalogoServicio"]>;
export type CatalogoServicioSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    categoria?: boolean;
    tipoEspecifico?: boolean;
    medidaBase?: boolean;
    tiempoBase?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    zonaId?: boolean;
};
export type CatalogoServicioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "categoria" | "tipoEspecifico" | "medidaBase" | "tiempoBase" | "activo" | "createdAt" | "updatedAt" | "zonaId", ExtArgs["result"]["catalogoServicio"]>;
export type CatalogoServicioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categoriasFactores?: boolean | Prisma.CatalogoServicio$categoriasFactoresArgs<ExtArgs>;
    asignaciones?: boolean | Prisma.CatalogoServicio$asignacionesArgs<ExtArgs>;
    materiales?: boolean | Prisma.CatalogoServicio$materialesArgs<ExtArgs>;
    tiposArreglo?: boolean | Prisma.CatalogoServicio$tiposArregloArgs<ExtArgs>;
    zona?: boolean | Prisma.CatalogoServicio$zonaArgs<ExtArgs>;
    _count?: boolean | Prisma.CatalogoServicioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CatalogoServicioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    zona?: boolean | Prisma.CatalogoServicio$zonaArgs<ExtArgs>;
};
export type CatalogoServicioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    zona?: boolean | Prisma.CatalogoServicio$zonaArgs<ExtArgs>;
};
export type $CatalogoServicioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CatalogoServicio";
    objects: {
        categoriasFactores: Prisma.$CategoriaFactorCobroPayload<ExtArgs>[];
        asignaciones: Prisma.$PrendaServicioPayload<ExtArgs>[];
        materiales: Prisma.$MaterialPayload<ExtArgs>[];
        tiposArreglo: Prisma.$TipoArregloPayload<ExtArgs>[];
        zona: Prisma.$ZonaPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        categoria: string;
        tipoEspecifico: string;
        medidaBase: runtime.Decimal;
        tiempoBase: number;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
        zonaId: number | null;
    }, ExtArgs["result"]["catalogoServicio"]>;
    composites: {};
};
export type CatalogoServicioGetPayload<S extends boolean | null | undefined | CatalogoServicioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CatalogoServicioPayload, S>;
export type CatalogoServicioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CatalogoServicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CatalogoServicioCountAggregateInputType | true;
};
export interface CatalogoServicioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CatalogoServicio'];
        meta: {
            name: 'CatalogoServicio';
        };
    };
    findUnique<T extends CatalogoServicioFindUniqueArgs>(args: Prisma.SelectSubset<T, CatalogoServicioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CatalogoServicioClient<runtime.Types.Result.GetResult<Prisma.$CatalogoServicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CatalogoServicioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CatalogoServicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CatalogoServicioClient<runtime.Types.Result.GetResult<Prisma.$CatalogoServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CatalogoServicioFindFirstArgs>(args?: Prisma.SelectSubset<T, CatalogoServicioFindFirstArgs<ExtArgs>>): Prisma.Prisma__CatalogoServicioClient<runtime.Types.Result.GetResult<Prisma.$CatalogoServicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CatalogoServicioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CatalogoServicioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CatalogoServicioClient<runtime.Types.Result.GetResult<Prisma.$CatalogoServicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CatalogoServicioFindManyArgs>(args?: Prisma.SelectSubset<T, CatalogoServicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CatalogoServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CatalogoServicioCreateArgs>(args: Prisma.SelectSubset<T, CatalogoServicioCreateArgs<ExtArgs>>): Prisma.Prisma__CatalogoServicioClient<runtime.Types.Result.GetResult<Prisma.$CatalogoServicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CatalogoServicioCreateManyArgs>(args?: Prisma.SelectSubset<T, CatalogoServicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CatalogoServicioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CatalogoServicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CatalogoServicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CatalogoServicioDeleteArgs>(args: Prisma.SelectSubset<T, CatalogoServicioDeleteArgs<ExtArgs>>): Prisma.Prisma__CatalogoServicioClient<runtime.Types.Result.GetResult<Prisma.$CatalogoServicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CatalogoServicioUpdateArgs>(args: Prisma.SelectSubset<T, CatalogoServicioUpdateArgs<ExtArgs>>): Prisma.Prisma__CatalogoServicioClient<runtime.Types.Result.GetResult<Prisma.$CatalogoServicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CatalogoServicioDeleteManyArgs>(args?: Prisma.SelectSubset<T, CatalogoServicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CatalogoServicioUpdateManyArgs>(args: Prisma.SelectSubset<T, CatalogoServicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CatalogoServicioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CatalogoServicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CatalogoServicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CatalogoServicioUpsertArgs>(args: Prisma.SelectSubset<T, CatalogoServicioUpsertArgs<ExtArgs>>): Prisma.Prisma__CatalogoServicioClient<runtime.Types.Result.GetResult<Prisma.$CatalogoServicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CatalogoServicioCountArgs>(args?: Prisma.Subset<T, CatalogoServicioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CatalogoServicioCountAggregateOutputType> : number>;
    aggregate<T extends CatalogoServicioAggregateArgs>(args: Prisma.Subset<T, CatalogoServicioAggregateArgs>): Prisma.PrismaPromise<GetCatalogoServicioAggregateType<T>>;
    groupBy<T extends CatalogoServicioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CatalogoServicioGroupByArgs['orderBy'];
    } : {
        orderBy?: CatalogoServicioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CatalogoServicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCatalogoServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CatalogoServicioFieldRefs;
}
export interface Prisma__CatalogoServicioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    categoriasFactores<T extends Prisma.CatalogoServicio$categoriasFactoresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CatalogoServicio$categoriasFactoresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoriaFactorCobroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    asignaciones<T extends Prisma.CatalogoServicio$asignacionesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CatalogoServicio$asignacionesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrendaServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    materiales<T extends Prisma.CatalogoServicio$materialesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CatalogoServicio$materialesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tiposArreglo<T extends Prisma.CatalogoServicio$tiposArregloArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CatalogoServicio$tiposArregloArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TipoArregloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    zona<T extends Prisma.CatalogoServicio$zonaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CatalogoServicio$zonaArgs<ExtArgs>>): Prisma.Prisma__ZonaClient<runtime.Types.Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CatalogoServicioFieldRefs {
    readonly id: Prisma.FieldRef<"CatalogoServicio", 'Int'>;
    readonly nombre: Prisma.FieldRef<"CatalogoServicio", 'String'>;
    readonly categoria: Prisma.FieldRef<"CatalogoServicio", 'String'>;
    readonly tipoEspecifico: Prisma.FieldRef<"CatalogoServicio", 'String'>;
    readonly medidaBase: Prisma.FieldRef<"CatalogoServicio", 'Decimal'>;
    readonly tiempoBase: Prisma.FieldRef<"CatalogoServicio", 'Int'>;
    readonly activo: Prisma.FieldRef<"CatalogoServicio", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"CatalogoServicio", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CatalogoServicio", 'DateTime'>;
    readonly zonaId: Prisma.FieldRef<"CatalogoServicio", 'Int'>;
}
export type CatalogoServicioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CatalogoServicioSelect<ExtArgs> | null;
    omit?: Prisma.CatalogoServicioOmit<ExtArgs> | null;
    include?: Prisma.CatalogoServicioInclude<ExtArgs> | null;
    where: Prisma.CatalogoServicioWhereUniqueInput;
};
export type CatalogoServicioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CatalogoServicioSelect<ExtArgs> | null;
    omit?: Prisma.CatalogoServicioOmit<ExtArgs> | null;
    include?: Prisma.CatalogoServicioInclude<ExtArgs> | null;
    where: Prisma.CatalogoServicioWhereUniqueInput;
};
export type CatalogoServicioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CatalogoServicioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CatalogoServicioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CatalogoServicioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CatalogoServicioSelect<ExtArgs> | null;
    omit?: Prisma.CatalogoServicioOmit<ExtArgs> | null;
    include?: Prisma.CatalogoServicioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CatalogoServicioCreateInput, Prisma.CatalogoServicioUncheckedCreateInput>;
};
export type CatalogoServicioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CatalogoServicioCreateManyInput | Prisma.CatalogoServicioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CatalogoServicioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CatalogoServicioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CatalogoServicioOmit<ExtArgs> | null;
    data: Prisma.CatalogoServicioCreateManyInput | Prisma.CatalogoServicioCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CatalogoServicioIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CatalogoServicioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CatalogoServicioSelect<ExtArgs> | null;
    omit?: Prisma.CatalogoServicioOmit<ExtArgs> | null;
    include?: Prisma.CatalogoServicioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CatalogoServicioUpdateInput, Prisma.CatalogoServicioUncheckedUpdateInput>;
    where: Prisma.CatalogoServicioWhereUniqueInput;
};
export type CatalogoServicioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CatalogoServicioUpdateManyMutationInput, Prisma.CatalogoServicioUncheckedUpdateManyInput>;
    where?: Prisma.CatalogoServicioWhereInput;
    limit?: number;
};
export type CatalogoServicioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CatalogoServicioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CatalogoServicioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CatalogoServicioUpdateManyMutationInput, Prisma.CatalogoServicioUncheckedUpdateManyInput>;
    where?: Prisma.CatalogoServicioWhereInput;
    limit?: number;
    include?: Prisma.CatalogoServicioIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CatalogoServicioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CatalogoServicioSelect<ExtArgs> | null;
    omit?: Prisma.CatalogoServicioOmit<ExtArgs> | null;
    include?: Prisma.CatalogoServicioInclude<ExtArgs> | null;
    where: Prisma.CatalogoServicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.CatalogoServicioCreateInput, Prisma.CatalogoServicioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CatalogoServicioUpdateInput, Prisma.CatalogoServicioUncheckedUpdateInput>;
};
export type CatalogoServicioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CatalogoServicioSelect<ExtArgs> | null;
    omit?: Prisma.CatalogoServicioOmit<ExtArgs> | null;
    include?: Prisma.CatalogoServicioInclude<ExtArgs> | null;
    where: Prisma.CatalogoServicioWhereUniqueInput;
};
export type CatalogoServicioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CatalogoServicioWhereInput;
    limit?: number;
};
export type CatalogoServicio$categoriasFactoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CatalogoServicio$asignacionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrendaServicioSelect<ExtArgs> | null;
    omit?: Prisma.PrendaServicioOmit<ExtArgs> | null;
    include?: Prisma.PrendaServicioInclude<ExtArgs> | null;
    where?: Prisma.PrendaServicioWhereInput;
    orderBy?: Prisma.PrendaServicioOrderByWithRelationInput | Prisma.PrendaServicioOrderByWithRelationInput[];
    cursor?: Prisma.PrendaServicioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrendaServicioScalarFieldEnum | Prisma.PrendaServicioScalarFieldEnum[];
};
export type CatalogoServicio$materialesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    where?: Prisma.MaterialWhereInput;
    orderBy?: Prisma.MaterialOrderByWithRelationInput | Prisma.MaterialOrderByWithRelationInput[];
    cursor?: Prisma.MaterialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MaterialScalarFieldEnum | Prisma.MaterialScalarFieldEnum[];
};
export type CatalogoServicio$tiposArregloArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoArregloSelect<ExtArgs> | null;
    omit?: Prisma.TipoArregloOmit<ExtArgs> | null;
    include?: Prisma.TipoArregloInclude<ExtArgs> | null;
    where?: Prisma.TipoArregloWhereInput;
    orderBy?: Prisma.TipoArregloOrderByWithRelationInput | Prisma.TipoArregloOrderByWithRelationInput[];
    cursor?: Prisma.TipoArregloWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TipoArregloScalarFieldEnum | Prisma.TipoArregloScalarFieldEnum[];
};
export type CatalogoServicio$zonaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZonaSelect<ExtArgs> | null;
    omit?: Prisma.ZonaOmit<ExtArgs> | null;
    include?: Prisma.ZonaInclude<ExtArgs> | null;
    where?: Prisma.ZonaWhereInput;
};
export type CatalogoServicioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CatalogoServicioSelect<ExtArgs> | null;
    omit?: Prisma.CatalogoServicioOmit<ExtArgs> | null;
    include?: Prisma.CatalogoServicioInclude<ExtArgs> | null;
};
