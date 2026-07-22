import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type TipoPrendaModel = runtime.Types.Result.DefaultSelection<Prisma.$TipoPrendaPayload>;
export type AggregateTipoPrenda = {
    _count: TipoPrendaCountAggregateOutputType | null;
    _avg: TipoPrendaAvgAggregateOutputType | null;
    _sum: TipoPrendaSumAggregateOutputType | null;
    _min: TipoPrendaMinAggregateOutputType | null;
    _max: TipoPrendaMaxAggregateOutputType | null;
};
export type TipoPrendaAvgAggregateOutputType = {
    id: number | null;
    porcentajeDificultad: runtime.Decimal | null;
};
export type TipoPrendaSumAggregateOutputType = {
    id: number | null;
    porcentajeDificultad: runtime.Decimal | null;
};
export type TipoPrendaMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    descripcion: string | null;
    porcentajeDificultad: runtime.Decimal | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TipoPrendaMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    descripcion: string | null;
    porcentajeDificultad: runtime.Decimal | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TipoPrendaCountAggregateOutputType = {
    id: number;
    nombre: number;
    descripcion: number;
    porcentajeDificultad: number;
    activo: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TipoPrendaAvgAggregateInputType = {
    id?: true;
    porcentajeDificultad?: true;
};
export type TipoPrendaSumAggregateInputType = {
    id?: true;
    porcentajeDificultad?: true;
};
export type TipoPrendaMinAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    porcentajeDificultad?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TipoPrendaMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    porcentajeDificultad?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TipoPrendaCountAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    porcentajeDificultad?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TipoPrendaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TipoPrendaWhereInput;
    orderBy?: Prisma.TipoPrendaOrderByWithRelationInput | Prisma.TipoPrendaOrderByWithRelationInput[];
    cursor?: Prisma.TipoPrendaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TipoPrendaCountAggregateInputType;
    _avg?: TipoPrendaAvgAggregateInputType;
    _sum?: TipoPrendaSumAggregateInputType;
    _min?: TipoPrendaMinAggregateInputType;
    _max?: TipoPrendaMaxAggregateInputType;
};
export type GetTipoPrendaAggregateType<T extends TipoPrendaAggregateArgs> = {
    [P in keyof T & keyof AggregateTipoPrenda]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTipoPrenda[P]> : Prisma.GetScalarType<T[P], AggregateTipoPrenda[P]>;
};
export type TipoPrendaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TipoPrendaWhereInput;
    orderBy?: Prisma.TipoPrendaOrderByWithAggregationInput | Prisma.TipoPrendaOrderByWithAggregationInput[];
    by: Prisma.TipoPrendaScalarFieldEnum[] | Prisma.TipoPrendaScalarFieldEnum;
    having?: Prisma.TipoPrendaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TipoPrendaCountAggregateInputType | true;
    _avg?: TipoPrendaAvgAggregateInputType;
    _sum?: TipoPrendaSumAggregateInputType;
    _min?: TipoPrendaMinAggregateInputType;
    _max?: TipoPrendaMaxAggregateInputType;
};
export type TipoPrendaGroupByOutputType = {
    id: number;
    nombre: string;
    descripcion: string | null;
    porcentajeDificultad: runtime.Decimal;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: TipoPrendaCountAggregateOutputType | null;
    _avg: TipoPrendaAvgAggregateOutputType | null;
    _sum: TipoPrendaSumAggregateOutputType | null;
    _min: TipoPrendaMinAggregateOutputType | null;
    _max: TipoPrendaMaxAggregateOutputType | null;
};
export type GetTipoPrendaGroupByPayload<T extends TipoPrendaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TipoPrendaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TipoPrendaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TipoPrendaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TipoPrendaGroupByOutputType[P]>;
}>>;
export type TipoPrendaWhereInput = {
    AND?: Prisma.TipoPrendaWhereInput | Prisma.TipoPrendaWhereInput[];
    OR?: Prisma.TipoPrendaWhereInput[];
    NOT?: Prisma.TipoPrendaWhereInput | Prisma.TipoPrendaWhereInput[];
    id?: Prisma.IntFilter<"TipoPrenda"> | number;
    nombre?: Prisma.StringFilter<"TipoPrenda"> | string;
    descripcion?: Prisma.StringNullableFilter<"TipoPrenda"> | string | null;
    porcentajeDificultad?: Prisma.DecimalFilter<"TipoPrenda"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFilter<"TipoPrenda"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TipoPrenda"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TipoPrenda"> | Date | string;
    prendas?: Prisma.PrendaListRelationFilter;
    materiales?: Prisma.MaterialListRelationFilter;
    servicios?: Prisma.CatalogoServicioListRelationFilter;
};
export type TipoPrendaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentajeDificultad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    prendas?: Prisma.PrendaOrderByRelationAggregateInput;
    materiales?: Prisma.MaterialOrderByRelationAggregateInput;
    servicios?: Prisma.CatalogoServicioOrderByRelationAggregateInput;
};
export type TipoPrendaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    nombre?: string;
    AND?: Prisma.TipoPrendaWhereInput | Prisma.TipoPrendaWhereInput[];
    OR?: Prisma.TipoPrendaWhereInput[];
    NOT?: Prisma.TipoPrendaWhereInput | Prisma.TipoPrendaWhereInput[];
    descripcion?: Prisma.StringNullableFilter<"TipoPrenda"> | string | null;
    porcentajeDificultad?: Prisma.DecimalFilter<"TipoPrenda"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFilter<"TipoPrenda"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TipoPrenda"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TipoPrenda"> | Date | string;
    prendas?: Prisma.PrendaListRelationFilter;
    materiales?: Prisma.MaterialListRelationFilter;
    servicios?: Prisma.CatalogoServicioListRelationFilter;
}, "id" | "nombre">;
export type TipoPrendaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentajeDificultad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TipoPrendaCountOrderByAggregateInput;
    _avg?: Prisma.TipoPrendaAvgOrderByAggregateInput;
    _max?: Prisma.TipoPrendaMaxOrderByAggregateInput;
    _min?: Prisma.TipoPrendaMinOrderByAggregateInput;
    _sum?: Prisma.TipoPrendaSumOrderByAggregateInput;
};
export type TipoPrendaScalarWhereWithAggregatesInput = {
    AND?: Prisma.TipoPrendaScalarWhereWithAggregatesInput | Prisma.TipoPrendaScalarWhereWithAggregatesInput[];
    OR?: Prisma.TipoPrendaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TipoPrendaScalarWhereWithAggregatesInput | Prisma.TipoPrendaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"TipoPrenda"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"TipoPrenda"> | string;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"TipoPrenda"> | string | null;
    porcentajeDificultad?: Prisma.DecimalWithAggregatesFilter<"TipoPrenda"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolWithAggregatesFilter<"TipoPrenda"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TipoPrenda"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TipoPrenda"> | Date | string;
};
export type TipoPrendaCreateInput = {
    nombre: string;
    descripcion?: string | null;
    porcentajeDificultad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prendas?: Prisma.PrendaCreateNestedManyWithoutTipoPrendaInput;
    materiales?: Prisma.MaterialCreateNestedManyWithoutTiposPrendaInput;
    servicios?: Prisma.CatalogoServicioCreateNestedManyWithoutTipoPrendaInput;
};
export type TipoPrendaUncheckedCreateInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    porcentajeDificultad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prendas?: Prisma.PrendaUncheckedCreateNestedManyWithoutTipoPrendaInput;
    materiales?: Prisma.MaterialUncheckedCreateNestedManyWithoutTiposPrendaInput;
    servicios?: Prisma.CatalogoServicioUncheckedCreateNestedManyWithoutTipoPrendaInput;
};
export type TipoPrendaUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porcentajeDificultad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prendas?: Prisma.PrendaUpdateManyWithoutTipoPrendaNestedInput;
    materiales?: Prisma.MaterialUpdateManyWithoutTiposPrendaNestedInput;
    servicios?: Prisma.CatalogoServicioUpdateManyWithoutTipoPrendaNestedInput;
};
export type TipoPrendaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porcentajeDificultad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prendas?: Prisma.PrendaUncheckedUpdateManyWithoutTipoPrendaNestedInput;
    materiales?: Prisma.MaterialUncheckedUpdateManyWithoutTiposPrendaNestedInput;
    servicios?: Prisma.CatalogoServicioUncheckedUpdateManyWithoutTipoPrendaNestedInput;
};
export type TipoPrendaCreateManyInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    porcentajeDificultad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TipoPrendaUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porcentajeDificultad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TipoPrendaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porcentajeDificultad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TipoPrendaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    porcentajeDificultad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TipoPrendaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    porcentajeDificultad?: Prisma.SortOrder;
};
export type TipoPrendaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    porcentajeDificultad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TipoPrendaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    porcentajeDificultad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TipoPrendaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    porcentajeDificultad?: Prisma.SortOrder;
};
export type TipoPrendaScalarRelationFilter = {
    is?: Prisma.TipoPrendaWhereInput;
    isNot?: Prisma.TipoPrendaWhereInput;
};
export type TipoPrendaNullableScalarRelationFilter = {
    is?: Prisma.TipoPrendaWhereInput | null;
    isNot?: Prisma.TipoPrendaWhereInput | null;
};
export type TipoPrendaListRelationFilter = {
    every?: Prisma.TipoPrendaWhereInput;
    some?: Prisma.TipoPrendaWhereInput;
    none?: Prisma.TipoPrendaWhereInput;
};
export type TipoPrendaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TipoPrendaCreateNestedOneWithoutPrendasInput = {
    create?: Prisma.XOR<Prisma.TipoPrendaCreateWithoutPrendasInput, Prisma.TipoPrendaUncheckedCreateWithoutPrendasInput>;
    connectOrCreate?: Prisma.TipoPrendaCreateOrConnectWithoutPrendasInput;
    connect?: Prisma.TipoPrendaWhereUniqueInput;
};
export type TipoPrendaUpdateOneRequiredWithoutPrendasNestedInput = {
    create?: Prisma.XOR<Prisma.TipoPrendaCreateWithoutPrendasInput, Prisma.TipoPrendaUncheckedCreateWithoutPrendasInput>;
    connectOrCreate?: Prisma.TipoPrendaCreateOrConnectWithoutPrendasInput;
    upsert?: Prisma.TipoPrendaUpsertWithoutPrendasInput;
    connect?: Prisma.TipoPrendaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TipoPrendaUpdateToOneWithWhereWithoutPrendasInput, Prisma.TipoPrendaUpdateWithoutPrendasInput>, Prisma.TipoPrendaUncheckedUpdateWithoutPrendasInput>;
};
export type TipoPrendaCreateNestedOneWithoutServiciosInput = {
    create?: Prisma.XOR<Prisma.TipoPrendaCreateWithoutServiciosInput, Prisma.TipoPrendaUncheckedCreateWithoutServiciosInput>;
    connectOrCreate?: Prisma.TipoPrendaCreateOrConnectWithoutServiciosInput;
    connect?: Prisma.TipoPrendaWhereUniqueInput;
};
export type TipoPrendaUpdateOneWithoutServiciosNestedInput = {
    create?: Prisma.XOR<Prisma.TipoPrendaCreateWithoutServiciosInput, Prisma.TipoPrendaUncheckedCreateWithoutServiciosInput>;
    connectOrCreate?: Prisma.TipoPrendaCreateOrConnectWithoutServiciosInput;
    upsert?: Prisma.TipoPrendaUpsertWithoutServiciosInput;
    disconnect?: Prisma.TipoPrendaWhereInput | boolean;
    delete?: Prisma.TipoPrendaWhereInput | boolean;
    connect?: Prisma.TipoPrendaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TipoPrendaUpdateToOneWithWhereWithoutServiciosInput, Prisma.TipoPrendaUpdateWithoutServiciosInput>, Prisma.TipoPrendaUncheckedUpdateWithoutServiciosInput>;
};
export type TipoPrendaCreateNestedManyWithoutMaterialesInput = {
    create?: Prisma.XOR<Prisma.TipoPrendaCreateWithoutMaterialesInput, Prisma.TipoPrendaUncheckedCreateWithoutMaterialesInput> | Prisma.TipoPrendaCreateWithoutMaterialesInput[] | Prisma.TipoPrendaUncheckedCreateWithoutMaterialesInput[];
    connectOrCreate?: Prisma.TipoPrendaCreateOrConnectWithoutMaterialesInput | Prisma.TipoPrendaCreateOrConnectWithoutMaterialesInput[];
    connect?: Prisma.TipoPrendaWhereUniqueInput | Prisma.TipoPrendaWhereUniqueInput[];
};
export type TipoPrendaUncheckedCreateNestedManyWithoutMaterialesInput = {
    create?: Prisma.XOR<Prisma.TipoPrendaCreateWithoutMaterialesInput, Prisma.TipoPrendaUncheckedCreateWithoutMaterialesInput> | Prisma.TipoPrendaCreateWithoutMaterialesInput[] | Prisma.TipoPrendaUncheckedCreateWithoutMaterialesInput[];
    connectOrCreate?: Prisma.TipoPrendaCreateOrConnectWithoutMaterialesInput | Prisma.TipoPrendaCreateOrConnectWithoutMaterialesInput[];
    connect?: Prisma.TipoPrendaWhereUniqueInput | Prisma.TipoPrendaWhereUniqueInput[];
};
export type TipoPrendaUpdateManyWithoutMaterialesNestedInput = {
    create?: Prisma.XOR<Prisma.TipoPrendaCreateWithoutMaterialesInput, Prisma.TipoPrendaUncheckedCreateWithoutMaterialesInput> | Prisma.TipoPrendaCreateWithoutMaterialesInput[] | Prisma.TipoPrendaUncheckedCreateWithoutMaterialesInput[];
    connectOrCreate?: Prisma.TipoPrendaCreateOrConnectWithoutMaterialesInput | Prisma.TipoPrendaCreateOrConnectWithoutMaterialesInput[];
    upsert?: Prisma.TipoPrendaUpsertWithWhereUniqueWithoutMaterialesInput | Prisma.TipoPrendaUpsertWithWhereUniqueWithoutMaterialesInput[];
    set?: Prisma.TipoPrendaWhereUniqueInput | Prisma.TipoPrendaWhereUniqueInput[];
    disconnect?: Prisma.TipoPrendaWhereUniqueInput | Prisma.TipoPrendaWhereUniqueInput[];
    delete?: Prisma.TipoPrendaWhereUniqueInput | Prisma.TipoPrendaWhereUniqueInput[];
    connect?: Prisma.TipoPrendaWhereUniqueInput | Prisma.TipoPrendaWhereUniqueInput[];
    update?: Prisma.TipoPrendaUpdateWithWhereUniqueWithoutMaterialesInput | Prisma.TipoPrendaUpdateWithWhereUniqueWithoutMaterialesInput[];
    updateMany?: Prisma.TipoPrendaUpdateManyWithWhereWithoutMaterialesInput | Prisma.TipoPrendaUpdateManyWithWhereWithoutMaterialesInput[];
    deleteMany?: Prisma.TipoPrendaScalarWhereInput | Prisma.TipoPrendaScalarWhereInput[];
};
export type TipoPrendaUncheckedUpdateManyWithoutMaterialesNestedInput = {
    create?: Prisma.XOR<Prisma.TipoPrendaCreateWithoutMaterialesInput, Prisma.TipoPrendaUncheckedCreateWithoutMaterialesInput> | Prisma.TipoPrendaCreateWithoutMaterialesInput[] | Prisma.TipoPrendaUncheckedCreateWithoutMaterialesInput[];
    connectOrCreate?: Prisma.TipoPrendaCreateOrConnectWithoutMaterialesInput | Prisma.TipoPrendaCreateOrConnectWithoutMaterialesInput[];
    upsert?: Prisma.TipoPrendaUpsertWithWhereUniqueWithoutMaterialesInput | Prisma.TipoPrendaUpsertWithWhereUniqueWithoutMaterialesInput[];
    set?: Prisma.TipoPrendaWhereUniqueInput | Prisma.TipoPrendaWhereUniqueInput[];
    disconnect?: Prisma.TipoPrendaWhereUniqueInput | Prisma.TipoPrendaWhereUniqueInput[];
    delete?: Prisma.TipoPrendaWhereUniqueInput | Prisma.TipoPrendaWhereUniqueInput[];
    connect?: Prisma.TipoPrendaWhereUniqueInput | Prisma.TipoPrendaWhereUniqueInput[];
    update?: Prisma.TipoPrendaUpdateWithWhereUniqueWithoutMaterialesInput | Prisma.TipoPrendaUpdateWithWhereUniqueWithoutMaterialesInput[];
    updateMany?: Prisma.TipoPrendaUpdateManyWithWhereWithoutMaterialesInput | Prisma.TipoPrendaUpdateManyWithWhereWithoutMaterialesInput[];
    deleteMany?: Prisma.TipoPrendaScalarWhereInput | Prisma.TipoPrendaScalarWhereInput[];
};
export type TipoPrendaCreateWithoutPrendasInput = {
    nombre: string;
    descripcion?: string | null;
    porcentajeDificultad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    materiales?: Prisma.MaterialCreateNestedManyWithoutTiposPrendaInput;
    servicios?: Prisma.CatalogoServicioCreateNestedManyWithoutTipoPrendaInput;
};
export type TipoPrendaUncheckedCreateWithoutPrendasInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    porcentajeDificultad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    materiales?: Prisma.MaterialUncheckedCreateNestedManyWithoutTiposPrendaInput;
    servicios?: Prisma.CatalogoServicioUncheckedCreateNestedManyWithoutTipoPrendaInput;
};
export type TipoPrendaCreateOrConnectWithoutPrendasInput = {
    where: Prisma.TipoPrendaWhereUniqueInput;
    create: Prisma.XOR<Prisma.TipoPrendaCreateWithoutPrendasInput, Prisma.TipoPrendaUncheckedCreateWithoutPrendasInput>;
};
export type TipoPrendaUpsertWithoutPrendasInput = {
    update: Prisma.XOR<Prisma.TipoPrendaUpdateWithoutPrendasInput, Prisma.TipoPrendaUncheckedUpdateWithoutPrendasInput>;
    create: Prisma.XOR<Prisma.TipoPrendaCreateWithoutPrendasInput, Prisma.TipoPrendaUncheckedCreateWithoutPrendasInput>;
    where?: Prisma.TipoPrendaWhereInput;
};
export type TipoPrendaUpdateToOneWithWhereWithoutPrendasInput = {
    where?: Prisma.TipoPrendaWhereInput;
    data: Prisma.XOR<Prisma.TipoPrendaUpdateWithoutPrendasInput, Prisma.TipoPrendaUncheckedUpdateWithoutPrendasInput>;
};
export type TipoPrendaUpdateWithoutPrendasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porcentajeDificultad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    materiales?: Prisma.MaterialUpdateManyWithoutTiposPrendaNestedInput;
    servicios?: Prisma.CatalogoServicioUpdateManyWithoutTipoPrendaNestedInput;
};
export type TipoPrendaUncheckedUpdateWithoutPrendasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porcentajeDificultad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    materiales?: Prisma.MaterialUncheckedUpdateManyWithoutTiposPrendaNestedInput;
    servicios?: Prisma.CatalogoServicioUncheckedUpdateManyWithoutTipoPrendaNestedInput;
};
export type TipoPrendaCreateWithoutServiciosInput = {
    nombre: string;
    descripcion?: string | null;
    porcentajeDificultad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prendas?: Prisma.PrendaCreateNestedManyWithoutTipoPrendaInput;
    materiales?: Prisma.MaterialCreateNestedManyWithoutTiposPrendaInput;
};
export type TipoPrendaUncheckedCreateWithoutServiciosInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    porcentajeDificultad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prendas?: Prisma.PrendaUncheckedCreateNestedManyWithoutTipoPrendaInput;
    materiales?: Prisma.MaterialUncheckedCreateNestedManyWithoutTiposPrendaInput;
};
export type TipoPrendaCreateOrConnectWithoutServiciosInput = {
    where: Prisma.TipoPrendaWhereUniqueInput;
    create: Prisma.XOR<Prisma.TipoPrendaCreateWithoutServiciosInput, Prisma.TipoPrendaUncheckedCreateWithoutServiciosInput>;
};
export type TipoPrendaUpsertWithoutServiciosInput = {
    update: Prisma.XOR<Prisma.TipoPrendaUpdateWithoutServiciosInput, Prisma.TipoPrendaUncheckedUpdateWithoutServiciosInput>;
    create: Prisma.XOR<Prisma.TipoPrendaCreateWithoutServiciosInput, Prisma.TipoPrendaUncheckedCreateWithoutServiciosInput>;
    where?: Prisma.TipoPrendaWhereInput;
};
export type TipoPrendaUpdateToOneWithWhereWithoutServiciosInput = {
    where?: Prisma.TipoPrendaWhereInput;
    data: Prisma.XOR<Prisma.TipoPrendaUpdateWithoutServiciosInput, Prisma.TipoPrendaUncheckedUpdateWithoutServiciosInput>;
};
export type TipoPrendaUpdateWithoutServiciosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porcentajeDificultad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prendas?: Prisma.PrendaUpdateManyWithoutTipoPrendaNestedInput;
    materiales?: Prisma.MaterialUpdateManyWithoutTiposPrendaNestedInput;
};
export type TipoPrendaUncheckedUpdateWithoutServiciosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porcentajeDificultad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prendas?: Prisma.PrendaUncheckedUpdateManyWithoutTipoPrendaNestedInput;
    materiales?: Prisma.MaterialUncheckedUpdateManyWithoutTiposPrendaNestedInput;
};
export type TipoPrendaCreateWithoutMaterialesInput = {
    nombre: string;
    descripcion?: string | null;
    porcentajeDificultad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prendas?: Prisma.PrendaCreateNestedManyWithoutTipoPrendaInput;
    servicios?: Prisma.CatalogoServicioCreateNestedManyWithoutTipoPrendaInput;
};
export type TipoPrendaUncheckedCreateWithoutMaterialesInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    porcentajeDificultad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prendas?: Prisma.PrendaUncheckedCreateNestedManyWithoutTipoPrendaInput;
    servicios?: Prisma.CatalogoServicioUncheckedCreateNestedManyWithoutTipoPrendaInput;
};
export type TipoPrendaCreateOrConnectWithoutMaterialesInput = {
    where: Prisma.TipoPrendaWhereUniqueInput;
    create: Prisma.XOR<Prisma.TipoPrendaCreateWithoutMaterialesInput, Prisma.TipoPrendaUncheckedCreateWithoutMaterialesInput>;
};
export type TipoPrendaUpsertWithWhereUniqueWithoutMaterialesInput = {
    where: Prisma.TipoPrendaWhereUniqueInput;
    update: Prisma.XOR<Prisma.TipoPrendaUpdateWithoutMaterialesInput, Prisma.TipoPrendaUncheckedUpdateWithoutMaterialesInput>;
    create: Prisma.XOR<Prisma.TipoPrendaCreateWithoutMaterialesInput, Prisma.TipoPrendaUncheckedCreateWithoutMaterialesInput>;
};
export type TipoPrendaUpdateWithWhereUniqueWithoutMaterialesInput = {
    where: Prisma.TipoPrendaWhereUniqueInput;
    data: Prisma.XOR<Prisma.TipoPrendaUpdateWithoutMaterialesInput, Prisma.TipoPrendaUncheckedUpdateWithoutMaterialesInput>;
};
export type TipoPrendaUpdateManyWithWhereWithoutMaterialesInput = {
    where: Prisma.TipoPrendaScalarWhereInput;
    data: Prisma.XOR<Prisma.TipoPrendaUpdateManyMutationInput, Prisma.TipoPrendaUncheckedUpdateManyWithoutMaterialesInput>;
};
export type TipoPrendaScalarWhereInput = {
    AND?: Prisma.TipoPrendaScalarWhereInput | Prisma.TipoPrendaScalarWhereInput[];
    OR?: Prisma.TipoPrendaScalarWhereInput[];
    NOT?: Prisma.TipoPrendaScalarWhereInput | Prisma.TipoPrendaScalarWhereInput[];
    id?: Prisma.IntFilter<"TipoPrenda"> | number;
    nombre?: Prisma.StringFilter<"TipoPrenda"> | string;
    descripcion?: Prisma.StringNullableFilter<"TipoPrenda"> | string | null;
    porcentajeDificultad?: Prisma.DecimalFilter<"TipoPrenda"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFilter<"TipoPrenda"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TipoPrenda"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TipoPrenda"> | Date | string;
};
export type TipoPrendaUpdateWithoutMaterialesInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porcentajeDificultad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prendas?: Prisma.PrendaUpdateManyWithoutTipoPrendaNestedInput;
    servicios?: Prisma.CatalogoServicioUpdateManyWithoutTipoPrendaNestedInput;
};
export type TipoPrendaUncheckedUpdateWithoutMaterialesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porcentajeDificultad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prendas?: Prisma.PrendaUncheckedUpdateManyWithoutTipoPrendaNestedInput;
    servicios?: Prisma.CatalogoServicioUncheckedUpdateManyWithoutTipoPrendaNestedInput;
};
export type TipoPrendaUncheckedUpdateManyWithoutMaterialesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porcentajeDificultad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TipoPrendaCountOutputType = {
    prendas: number;
    materiales: number;
    servicios: number;
};
export type TipoPrendaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prendas?: boolean | TipoPrendaCountOutputTypeCountPrendasArgs;
    materiales?: boolean | TipoPrendaCountOutputTypeCountMaterialesArgs;
    servicios?: boolean | TipoPrendaCountOutputTypeCountServiciosArgs;
};
export type TipoPrendaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoPrendaCountOutputTypeSelect<ExtArgs> | null;
};
export type TipoPrendaCountOutputTypeCountPrendasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrendaWhereInput;
};
export type TipoPrendaCountOutputTypeCountMaterialesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaterialWhereInput;
};
export type TipoPrendaCountOutputTypeCountServiciosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CatalogoServicioWhereInput;
};
export type TipoPrendaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    porcentajeDificultad?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    prendas?: boolean | Prisma.TipoPrenda$prendasArgs<ExtArgs>;
    materiales?: boolean | Prisma.TipoPrenda$materialesArgs<ExtArgs>;
    servicios?: boolean | Prisma.TipoPrenda$serviciosArgs<ExtArgs>;
    _count?: boolean | Prisma.TipoPrendaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tipoPrenda"]>;
export type TipoPrendaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    porcentajeDificultad?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["tipoPrenda"]>;
export type TipoPrendaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    porcentajeDificultad?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["tipoPrenda"]>;
export type TipoPrendaSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    porcentajeDificultad?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TipoPrendaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "descripcion" | "porcentajeDificultad" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["tipoPrenda"]>;
export type TipoPrendaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prendas?: boolean | Prisma.TipoPrenda$prendasArgs<ExtArgs>;
    materiales?: boolean | Prisma.TipoPrenda$materialesArgs<ExtArgs>;
    servicios?: boolean | Prisma.TipoPrenda$serviciosArgs<ExtArgs>;
    _count?: boolean | Prisma.TipoPrendaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TipoPrendaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TipoPrendaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TipoPrendaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TipoPrenda";
    objects: {
        prendas: Prisma.$PrendaPayload<ExtArgs>[];
        materiales: Prisma.$MaterialPayload<ExtArgs>[];
        servicios: Prisma.$CatalogoServicioPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        descripcion: string | null;
        porcentajeDificultad: runtime.Decimal;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["tipoPrenda"]>;
    composites: {};
};
export type TipoPrendaGetPayload<S extends boolean | null | undefined | TipoPrendaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TipoPrendaPayload, S>;
export type TipoPrendaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TipoPrendaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TipoPrendaCountAggregateInputType | true;
};
export interface TipoPrendaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TipoPrenda'];
        meta: {
            name: 'TipoPrenda';
        };
    };
    findUnique<T extends TipoPrendaFindUniqueArgs>(args: Prisma.SelectSubset<T, TipoPrendaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TipoPrendaClient<runtime.Types.Result.GetResult<Prisma.$TipoPrendaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TipoPrendaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TipoPrendaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TipoPrendaClient<runtime.Types.Result.GetResult<Prisma.$TipoPrendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TipoPrendaFindFirstArgs>(args?: Prisma.SelectSubset<T, TipoPrendaFindFirstArgs<ExtArgs>>): Prisma.Prisma__TipoPrendaClient<runtime.Types.Result.GetResult<Prisma.$TipoPrendaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TipoPrendaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TipoPrendaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TipoPrendaClient<runtime.Types.Result.GetResult<Prisma.$TipoPrendaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TipoPrendaFindManyArgs>(args?: Prisma.SelectSubset<T, TipoPrendaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TipoPrendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TipoPrendaCreateArgs>(args: Prisma.SelectSubset<T, TipoPrendaCreateArgs<ExtArgs>>): Prisma.Prisma__TipoPrendaClient<runtime.Types.Result.GetResult<Prisma.$TipoPrendaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TipoPrendaCreateManyArgs>(args?: Prisma.SelectSubset<T, TipoPrendaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TipoPrendaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TipoPrendaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TipoPrendaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TipoPrendaDeleteArgs>(args: Prisma.SelectSubset<T, TipoPrendaDeleteArgs<ExtArgs>>): Prisma.Prisma__TipoPrendaClient<runtime.Types.Result.GetResult<Prisma.$TipoPrendaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TipoPrendaUpdateArgs>(args: Prisma.SelectSubset<T, TipoPrendaUpdateArgs<ExtArgs>>): Prisma.Prisma__TipoPrendaClient<runtime.Types.Result.GetResult<Prisma.$TipoPrendaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TipoPrendaDeleteManyArgs>(args?: Prisma.SelectSubset<T, TipoPrendaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TipoPrendaUpdateManyArgs>(args: Prisma.SelectSubset<T, TipoPrendaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TipoPrendaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TipoPrendaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TipoPrendaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TipoPrendaUpsertArgs>(args: Prisma.SelectSubset<T, TipoPrendaUpsertArgs<ExtArgs>>): Prisma.Prisma__TipoPrendaClient<runtime.Types.Result.GetResult<Prisma.$TipoPrendaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TipoPrendaCountArgs>(args?: Prisma.Subset<T, TipoPrendaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TipoPrendaCountAggregateOutputType> : number>;
    aggregate<T extends TipoPrendaAggregateArgs>(args: Prisma.Subset<T, TipoPrendaAggregateArgs>): Prisma.PrismaPromise<GetTipoPrendaAggregateType<T>>;
    groupBy<T extends TipoPrendaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TipoPrendaGroupByArgs['orderBy'];
    } : {
        orderBy?: TipoPrendaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TipoPrendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoPrendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TipoPrendaFieldRefs;
}
export interface Prisma__TipoPrendaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    prendas<T extends Prisma.TipoPrenda$prendasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TipoPrenda$prendasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    materiales<T extends Prisma.TipoPrenda$materialesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TipoPrenda$materialesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    servicios<T extends Prisma.TipoPrenda$serviciosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TipoPrenda$serviciosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CatalogoServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TipoPrendaFieldRefs {
    readonly id: Prisma.FieldRef<"TipoPrenda", 'Int'>;
    readonly nombre: Prisma.FieldRef<"TipoPrenda", 'String'>;
    readonly descripcion: Prisma.FieldRef<"TipoPrenda", 'String'>;
    readonly porcentajeDificultad: Prisma.FieldRef<"TipoPrenda", 'Decimal'>;
    readonly activo: Prisma.FieldRef<"TipoPrenda", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"TipoPrenda", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TipoPrenda", 'DateTime'>;
}
export type TipoPrendaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoPrendaSelect<ExtArgs> | null;
    omit?: Prisma.TipoPrendaOmit<ExtArgs> | null;
    include?: Prisma.TipoPrendaInclude<ExtArgs> | null;
    where: Prisma.TipoPrendaWhereUniqueInput;
};
export type TipoPrendaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoPrendaSelect<ExtArgs> | null;
    omit?: Prisma.TipoPrendaOmit<ExtArgs> | null;
    include?: Prisma.TipoPrendaInclude<ExtArgs> | null;
    where: Prisma.TipoPrendaWhereUniqueInput;
};
export type TipoPrendaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoPrendaSelect<ExtArgs> | null;
    omit?: Prisma.TipoPrendaOmit<ExtArgs> | null;
    include?: Prisma.TipoPrendaInclude<ExtArgs> | null;
    where?: Prisma.TipoPrendaWhereInput;
    orderBy?: Prisma.TipoPrendaOrderByWithRelationInput | Prisma.TipoPrendaOrderByWithRelationInput[];
    cursor?: Prisma.TipoPrendaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TipoPrendaScalarFieldEnum | Prisma.TipoPrendaScalarFieldEnum[];
};
export type TipoPrendaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoPrendaSelect<ExtArgs> | null;
    omit?: Prisma.TipoPrendaOmit<ExtArgs> | null;
    include?: Prisma.TipoPrendaInclude<ExtArgs> | null;
    where?: Prisma.TipoPrendaWhereInput;
    orderBy?: Prisma.TipoPrendaOrderByWithRelationInput | Prisma.TipoPrendaOrderByWithRelationInput[];
    cursor?: Prisma.TipoPrendaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TipoPrendaScalarFieldEnum | Prisma.TipoPrendaScalarFieldEnum[];
};
export type TipoPrendaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoPrendaSelect<ExtArgs> | null;
    omit?: Prisma.TipoPrendaOmit<ExtArgs> | null;
    include?: Prisma.TipoPrendaInclude<ExtArgs> | null;
    where?: Prisma.TipoPrendaWhereInput;
    orderBy?: Prisma.TipoPrendaOrderByWithRelationInput | Prisma.TipoPrendaOrderByWithRelationInput[];
    cursor?: Prisma.TipoPrendaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TipoPrendaScalarFieldEnum | Prisma.TipoPrendaScalarFieldEnum[];
};
export type TipoPrendaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoPrendaSelect<ExtArgs> | null;
    omit?: Prisma.TipoPrendaOmit<ExtArgs> | null;
    include?: Prisma.TipoPrendaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TipoPrendaCreateInput, Prisma.TipoPrendaUncheckedCreateInput>;
};
export type TipoPrendaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TipoPrendaCreateManyInput | Prisma.TipoPrendaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TipoPrendaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoPrendaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TipoPrendaOmit<ExtArgs> | null;
    data: Prisma.TipoPrendaCreateManyInput | Prisma.TipoPrendaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TipoPrendaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoPrendaSelect<ExtArgs> | null;
    omit?: Prisma.TipoPrendaOmit<ExtArgs> | null;
    include?: Prisma.TipoPrendaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TipoPrendaUpdateInput, Prisma.TipoPrendaUncheckedUpdateInput>;
    where: Prisma.TipoPrendaWhereUniqueInput;
};
export type TipoPrendaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TipoPrendaUpdateManyMutationInput, Prisma.TipoPrendaUncheckedUpdateManyInput>;
    where?: Prisma.TipoPrendaWhereInput;
    limit?: number;
};
export type TipoPrendaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoPrendaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TipoPrendaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TipoPrendaUpdateManyMutationInput, Prisma.TipoPrendaUncheckedUpdateManyInput>;
    where?: Prisma.TipoPrendaWhereInput;
    limit?: number;
};
export type TipoPrendaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoPrendaSelect<ExtArgs> | null;
    omit?: Prisma.TipoPrendaOmit<ExtArgs> | null;
    include?: Prisma.TipoPrendaInclude<ExtArgs> | null;
    where: Prisma.TipoPrendaWhereUniqueInput;
    create: Prisma.XOR<Prisma.TipoPrendaCreateInput, Prisma.TipoPrendaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TipoPrendaUpdateInput, Prisma.TipoPrendaUncheckedUpdateInput>;
};
export type TipoPrendaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoPrendaSelect<ExtArgs> | null;
    omit?: Prisma.TipoPrendaOmit<ExtArgs> | null;
    include?: Prisma.TipoPrendaInclude<ExtArgs> | null;
    where: Prisma.TipoPrendaWhereUniqueInput;
};
export type TipoPrendaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TipoPrendaWhereInput;
    limit?: number;
};
export type TipoPrenda$prendasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TipoPrenda$materialesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TipoPrenda$serviciosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TipoPrendaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoPrendaSelect<ExtArgs> | null;
    omit?: Prisma.TipoPrendaOmit<ExtArgs> | null;
    include?: Prisma.TipoPrendaInclude<ExtArgs> | null;
};
