import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type AnuncioModel = runtime.Types.Result.DefaultSelection<Prisma.$AnuncioPayload>;
export type AggregateAnuncio = {
    _count: AnuncioCountAggregateOutputType | null;
    _avg: AnuncioAvgAggregateOutputType | null;
    _sum: AnuncioSumAggregateOutputType | null;
    _min: AnuncioMinAggregateOutputType | null;
    _max: AnuncioMaxAggregateOutputType | null;
};
export type AnuncioAvgAggregateOutputType = {
    id: number | null;
    sedeId: number | null;
    adminId: number | null;
};
export type AnuncioSumAggregateOutputType = {
    id: number | null;
    sedeId: number | null;
    adminId: number | null;
};
export type AnuncioMinAggregateOutputType = {
    id: number | null;
    sedeId: number | null;
    adminId: number | null;
    mensaje: string | null;
    createdAt: Date | null;
};
export type AnuncioMaxAggregateOutputType = {
    id: number | null;
    sedeId: number | null;
    adminId: number | null;
    mensaje: string | null;
    createdAt: Date | null;
};
export type AnuncioCountAggregateOutputType = {
    id: number;
    sedeId: number;
    adminId: number;
    mensaje: number;
    createdAt: number;
    _all: number;
};
export type AnuncioAvgAggregateInputType = {
    id?: true;
    sedeId?: true;
    adminId?: true;
};
export type AnuncioSumAggregateInputType = {
    id?: true;
    sedeId?: true;
    adminId?: true;
};
export type AnuncioMinAggregateInputType = {
    id?: true;
    sedeId?: true;
    adminId?: true;
    mensaje?: true;
    createdAt?: true;
};
export type AnuncioMaxAggregateInputType = {
    id?: true;
    sedeId?: true;
    adminId?: true;
    mensaje?: true;
    createdAt?: true;
};
export type AnuncioCountAggregateInputType = {
    id?: true;
    sedeId?: true;
    adminId?: true;
    mensaje?: true;
    createdAt?: true;
    _all?: true;
};
export type AnuncioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnuncioWhereInput;
    orderBy?: Prisma.AnuncioOrderByWithRelationInput | Prisma.AnuncioOrderByWithRelationInput[];
    cursor?: Prisma.AnuncioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AnuncioCountAggregateInputType;
    _avg?: AnuncioAvgAggregateInputType;
    _sum?: AnuncioSumAggregateInputType;
    _min?: AnuncioMinAggregateInputType;
    _max?: AnuncioMaxAggregateInputType;
};
export type GetAnuncioAggregateType<T extends AnuncioAggregateArgs> = {
    [P in keyof T & keyof AggregateAnuncio]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnuncio[P]> : Prisma.GetScalarType<T[P], AggregateAnuncio[P]>;
};
export type AnuncioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnuncioWhereInput;
    orderBy?: Prisma.AnuncioOrderByWithAggregationInput | Prisma.AnuncioOrderByWithAggregationInput[];
    by: Prisma.AnuncioScalarFieldEnum[] | Prisma.AnuncioScalarFieldEnum;
    having?: Prisma.AnuncioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnuncioCountAggregateInputType | true;
    _avg?: AnuncioAvgAggregateInputType;
    _sum?: AnuncioSumAggregateInputType;
    _min?: AnuncioMinAggregateInputType;
    _max?: AnuncioMaxAggregateInputType;
};
export type AnuncioGroupByOutputType = {
    id: number;
    sedeId: number;
    adminId: number;
    mensaje: string;
    createdAt: Date;
    _count: AnuncioCountAggregateOutputType | null;
    _avg: AnuncioAvgAggregateOutputType | null;
    _sum: AnuncioSumAggregateOutputType | null;
    _min: AnuncioMinAggregateOutputType | null;
    _max: AnuncioMaxAggregateOutputType | null;
};
export type GetAnuncioGroupByPayload<T extends AnuncioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnuncioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnuncioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnuncioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnuncioGroupByOutputType[P]>;
}>>;
export type AnuncioWhereInput = {
    AND?: Prisma.AnuncioWhereInput | Prisma.AnuncioWhereInput[];
    OR?: Prisma.AnuncioWhereInput[];
    NOT?: Prisma.AnuncioWhereInput | Prisma.AnuncioWhereInput[];
    id?: Prisma.IntFilter<"Anuncio"> | number;
    sedeId?: Prisma.IntFilter<"Anuncio"> | number;
    adminId?: Prisma.IntFilter<"Anuncio"> | number;
    mensaje?: Prisma.StringFilter<"Anuncio"> | string;
    createdAt?: Prisma.DateTimeFilter<"Anuncio"> | Date | string;
    sede?: Prisma.XOR<Prisma.SedeScalarRelationFilter, Prisma.SedeWhereInput>;
    admin?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    respuestas?: Prisma.AnuncioRespuestaListRelationFilter;
};
export type AnuncioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    mensaje?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    sede?: Prisma.SedeOrderByWithRelationInput;
    admin?: Prisma.UsuarioOrderByWithRelationInput;
    respuestas?: Prisma.AnuncioRespuestaOrderByRelationAggregateInput;
};
export type AnuncioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AnuncioWhereInput | Prisma.AnuncioWhereInput[];
    OR?: Prisma.AnuncioWhereInput[];
    NOT?: Prisma.AnuncioWhereInput | Prisma.AnuncioWhereInput[];
    sedeId?: Prisma.IntFilter<"Anuncio"> | number;
    adminId?: Prisma.IntFilter<"Anuncio"> | number;
    mensaje?: Prisma.StringFilter<"Anuncio"> | string;
    createdAt?: Prisma.DateTimeFilter<"Anuncio"> | Date | string;
    sede?: Prisma.XOR<Prisma.SedeScalarRelationFilter, Prisma.SedeWhereInput>;
    admin?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    respuestas?: Prisma.AnuncioRespuestaListRelationFilter;
}, "id">;
export type AnuncioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    mensaje?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AnuncioCountOrderByAggregateInput;
    _avg?: Prisma.AnuncioAvgOrderByAggregateInput;
    _max?: Prisma.AnuncioMaxOrderByAggregateInput;
    _min?: Prisma.AnuncioMinOrderByAggregateInput;
    _sum?: Prisma.AnuncioSumOrderByAggregateInput;
};
export type AnuncioScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnuncioScalarWhereWithAggregatesInput | Prisma.AnuncioScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnuncioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnuncioScalarWhereWithAggregatesInput | Prisma.AnuncioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Anuncio"> | number;
    sedeId?: Prisma.IntWithAggregatesFilter<"Anuncio"> | number;
    adminId?: Prisma.IntWithAggregatesFilter<"Anuncio"> | number;
    mensaje?: Prisma.StringWithAggregatesFilter<"Anuncio"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Anuncio"> | Date | string;
};
export type AnuncioCreateInput = {
    mensaje: string;
    createdAt?: Date | string;
    sede: Prisma.SedeCreateNestedOneWithoutAnunciosInput;
    admin: Prisma.UsuarioCreateNestedOneWithoutAnunciosCreadosInput;
    respuestas?: Prisma.AnuncioRespuestaCreateNestedManyWithoutAnuncioInput;
};
export type AnuncioUncheckedCreateInput = {
    id?: number;
    sedeId: number;
    adminId: number;
    mensaje: string;
    createdAt?: Date | string;
    respuestas?: Prisma.AnuncioRespuestaUncheckedCreateNestedManyWithoutAnuncioInput;
};
export type AnuncioUpdateInput = {
    mensaje?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sede?: Prisma.SedeUpdateOneRequiredWithoutAnunciosNestedInput;
    admin?: Prisma.UsuarioUpdateOneRequiredWithoutAnunciosCreadosNestedInput;
    respuestas?: Prisma.AnuncioRespuestaUpdateManyWithoutAnuncioNestedInput;
};
export type AnuncioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeId?: Prisma.IntFieldUpdateOperationsInput | number;
    adminId?: Prisma.IntFieldUpdateOperationsInput | number;
    mensaje?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respuestas?: Prisma.AnuncioRespuestaUncheckedUpdateManyWithoutAnuncioNestedInput;
};
export type AnuncioCreateManyInput = {
    id?: number;
    sedeId: number;
    adminId: number;
    mensaje: string;
    createdAt?: Date | string;
};
export type AnuncioUpdateManyMutationInput = {
    mensaje?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnuncioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeId?: Prisma.IntFieldUpdateOperationsInput | number;
    adminId?: Prisma.IntFieldUpdateOperationsInput | number;
    mensaje?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnuncioListRelationFilter = {
    every?: Prisma.AnuncioWhereInput;
    some?: Prisma.AnuncioWhereInput;
    none?: Prisma.AnuncioWhereInput;
};
export type AnuncioOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AnuncioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    mensaje?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AnuncioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
};
export type AnuncioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    mensaje?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AnuncioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    mensaje?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AnuncioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
};
export type AnuncioScalarRelationFilter = {
    is?: Prisma.AnuncioWhereInput;
    isNot?: Prisma.AnuncioWhereInput;
};
export type AnuncioCreateNestedManyWithoutSedeInput = {
    create?: Prisma.XOR<Prisma.AnuncioCreateWithoutSedeInput, Prisma.AnuncioUncheckedCreateWithoutSedeInput> | Prisma.AnuncioCreateWithoutSedeInput[] | Prisma.AnuncioUncheckedCreateWithoutSedeInput[];
    connectOrCreate?: Prisma.AnuncioCreateOrConnectWithoutSedeInput | Prisma.AnuncioCreateOrConnectWithoutSedeInput[];
    createMany?: Prisma.AnuncioCreateManySedeInputEnvelope;
    connect?: Prisma.AnuncioWhereUniqueInput | Prisma.AnuncioWhereUniqueInput[];
};
export type AnuncioUncheckedCreateNestedManyWithoutSedeInput = {
    create?: Prisma.XOR<Prisma.AnuncioCreateWithoutSedeInput, Prisma.AnuncioUncheckedCreateWithoutSedeInput> | Prisma.AnuncioCreateWithoutSedeInput[] | Prisma.AnuncioUncheckedCreateWithoutSedeInput[];
    connectOrCreate?: Prisma.AnuncioCreateOrConnectWithoutSedeInput | Prisma.AnuncioCreateOrConnectWithoutSedeInput[];
    createMany?: Prisma.AnuncioCreateManySedeInputEnvelope;
    connect?: Prisma.AnuncioWhereUniqueInput | Prisma.AnuncioWhereUniqueInput[];
};
export type AnuncioUpdateManyWithoutSedeNestedInput = {
    create?: Prisma.XOR<Prisma.AnuncioCreateWithoutSedeInput, Prisma.AnuncioUncheckedCreateWithoutSedeInput> | Prisma.AnuncioCreateWithoutSedeInput[] | Prisma.AnuncioUncheckedCreateWithoutSedeInput[];
    connectOrCreate?: Prisma.AnuncioCreateOrConnectWithoutSedeInput | Prisma.AnuncioCreateOrConnectWithoutSedeInput[];
    upsert?: Prisma.AnuncioUpsertWithWhereUniqueWithoutSedeInput | Prisma.AnuncioUpsertWithWhereUniqueWithoutSedeInput[];
    createMany?: Prisma.AnuncioCreateManySedeInputEnvelope;
    set?: Prisma.AnuncioWhereUniqueInput | Prisma.AnuncioWhereUniqueInput[];
    disconnect?: Prisma.AnuncioWhereUniqueInput | Prisma.AnuncioWhereUniqueInput[];
    delete?: Prisma.AnuncioWhereUniqueInput | Prisma.AnuncioWhereUniqueInput[];
    connect?: Prisma.AnuncioWhereUniqueInput | Prisma.AnuncioWhereUniqueInput[];
    update?: Prisma.AnuncioUpdateWithWhereUniqueWithoutSedeInput | Prisma.AnuncioUpdateWithWhereUniqueWithoutSedeInput[];
    updateMany?: Prisma.AnuncioUpdateManyWithWhereWithoutSedeInput | Prisma.AnuncioUpdateManyWithWhereWithoutSedeInput[];
    deleteMany?: Prisma.AnuncioScalarWhereInput | Prisma.AnuncioScalarWhereInput[];
};
export type AnuncioUncheckedUpdateManyWithoutSedeNestedInput = {
    create?: Prisma.XOR<Prisma.AnuncioCreateWithoutSedeInput, Prisma.AnuncioUncheckedCreateWithoutSedeInput> | Prisma.AnuncioCreateWithoutSedeInput[] | Prisma.AnuncioUncheckedCreateWithoutSedeInput[];
    connectOrCreate?: Prisma.AnuncioCreateOrConnectWithoutSedeInput | Prisma.AnuncioCreateOrConnectWithoutSedeInput[];
    upsert?: Prisma.AnuncioUpsertWithWhereUniqueWithoutSedeInput | Prisma.AnuncioUpsertWithWhereUniqueWithoutSedeInput[];
    createMany?: Prisma.AnuncioCreateManySedeInputEnvelope;
    set?: Prisma.AnuncioWhereUniqueInput | Prisma.AnuncioWhereUniqueInput[];
    disconnect?: Prisma.AnuncioWhereUniqueInput | Prisma.AnuncioWhereUniqueInput[];
    delete?: Prisma.AnuncioWhereUniqueInput | Prisma.AnuncioWhereUniqueInput[];
    connect?: Prisma.AnuncioWhereUniqueInput | Prisma.AnuncioWhereUniqueInput[];
    update?: Prisma.AnuncioUpdateWithWhereUniqueWithoutSedeInput | Prisma.AnuncioUpdateWithWhereUniqueWithoutSedeInput[];
    updateMany?: Prisma.AnuncioUpdateManyWithWhereWithoutSedeInput | Prisma.AnuncioUpdateManyWithWhereWithoutSedeInput[];
    deleteMany?: Prisma.AnuncioScalarWhereInput | Prisma.AnuncioScalarWhereInput[];
};
export type AnuncioCreateNestedManyWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.AnuncioCreateWithoutAdminInput, Prisma.AnuncioUncheckedCreateWithoutAdminInput> | Prisma.AnuncioCreateWithoutAdminInput[] | Prisma.AnuncioUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.AnuncioCreateOrConnectWithoutAdminInput | Prisma.AnuncioCreateOrConnectWithoutAdminInput[];
    createMany?: Prisma.AnuncioCreateManyAdminInputEnvelope;
    connect?: Prisma.AnuncioWhereUniqueInput | Prisma.AnuncioWhereUniqueInput[];
};
export type AnuncioUncheckedCreateNestedManyWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.AnuncioCreateWithoutAdminInput, Prisma.AnuncioUncheckedCreateWithoutAdminInput> | Prisma.AnuncioCreateWithoutAdminInput[] | Prisma.AnuncioUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.AnuncioCreateOrConnectWithoutAdminInput | Prisma.AnuncioCreateOrConnectWithoutAdminInput[];
    createMany?: Prisma.AnuncioCreateManyAdminInputEnvelope;
    connect?: Prisma.AnuncioWhereUniqueInput | Prisma.AnuncioWhereUniqueInput[];
};
export type AnuncioUpdateManyWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.AnuncioCreateWithoutAdminInput, Prisma.AnuncioUncheckedCreateWithoutAdminInput> | Prisma.AnuncioCreateWithoutAdminInput[] | Prisma.AnuncioUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.AnuncioCreateOrConnectWithoutAdminInput | Prisma.AnuncioCreateOrConnectWithoutAdminInput[];
    upsert?: Prisma.AnuncioUpsertWithWhereUniqueWithoutAdminInput | Prisma.AnuncioUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: Prisma.AnuncioCreateManyAdminInputEnvelope;
    set?: Prisma.AnuncioWhereUniqueInput | Prisma.AnuncioWhereUniqueInput[];
    disconnect?: Prisma.AnuncioWhereUniqueInput | Prisma.AnuncioWhereUniqueInput[];
    delete?: Prisma.AnuncioWhereUniqueInput | Prisma.AnuncioWhereUniqueInput[];
    connect?: Prisma.AnuncioWhereUniqueInput | Prisma.AnuncioWhereUniqueInput[];
    update?: Prisma.AnuncioUpdateWithWhereUniqueWithoutAdminInput | Prisma.AnuncioUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?: Prisma.AnuncioUpdateManyWithWhereWithoutAdminInput | Prisma.AnuncioUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: Prisma.AnuncioScalarWhereInput | Prisma.AnuncioScalarWhereInput[];
};
export type AnuncioUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.AnuncioCreateWithoutAdminInput, Prisma.AnuncioUncheckedCreateWithoutAdminInput> | Prisma.AnuncioCreateWithoutAdminInput[] | Prisma.AnuncioUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.AnuncioCreateOrConnectWithoutAdminInput | Prisma.AnuncioCreateOrConnectWithoutAdminInput[];
    upsert?: Prisma.AnuncioUpsertWithWhereUniqueWithoutAdminInput | Prisma.AnuncioUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: Prisma.AnuncioCreateManyAdminInputEnvelope;
    set?: Prisma.AnuncioWhereUniqueInput | Prisma.AnuncioWhereUniqueInput[];
    disconnect?: Prisma.AnuncioWhereUniqueInput | Prisma.AnuncioWhereUniqueInput[];
    delete?: Prisma.AnuncioWhereUniqueInput | Prisma.AnuncioWhereUniqueInput[];
    connect?: Prisma.AnuncioWhereUniqueInput | Prisma.AnuncioWhereUniqueInput[];
    update?: Prisma.AnuncioUpdateWithWhereUniqueWithoutAdminInput | Prisma.AnuncioUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?: Prisma.AnuncioUpdateManyWithWhereWithoutAdminInput | Prisma.AnuncioUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: Prisma.AnuncioScalarWhereInput | Prisma.AnuncioScalarWhereInput[];
};
export type AnuncioCreateNestedOneWithoutRespuestasInput = {
    create?: Prisma.XOR<Prisma.AnuncioCreateWithoutRespuestasInput, Prisma.AnuncioUncheckedCreateWithoutRespuestasInput>;
    connectOrCreate?: Prisma.AnuncioCreateOrConnectWithoutRespuestasInput;
    connect?: Prisma.AnuncioWhereUniqueInput;
};
export type AnuncioUpdateOneRequiredWithoutRespuestasNestedInput = {
    create?: Prisma.XOR<Prisma.AnuncioCreateWithoutRespuestasInput, Prisma.AnuncioUncheckedCreateWithoutRespuestasInput>;
    connectOrCreate?: Prisma.AnuncioCreateOrConnectWithoutRespuestasInput;
    upsert?: Prisma.AnuncioUpsertWithoutRespuestasInput;
    connect?: Prisma.AnuncioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnuncioUpdateToOneWithWhereWithoutRespuestasInput, Prisma.AnuncioUpdateWithoutRespuestasInput>, Prisma.AnuncioUncheckedUpdateWithoutRespuestasInput>;
};
export type AnuncioCreateWithoutSedeInput = {
    mensaje: string;
    createdAt?: Date | string;
    admin: Prisma.UsuarioCreateNestedOneWithoutAnunciosCreadosInput;
    respuestas?: Prisma.AnuncioRespuestaCreateNestedManyWithoutAnuncioInput;
};
export type AnuncioUncheckedCreateWithoutSedeInput = {
    id?: number;
    adminId: number;
    mensaje: string;
    createdAt?: Date | string;
    respuestas?: Prisma.AnuncioRespuestaUncheckedCreateNestedManyWithoutAnuncioInput;
};
export type AnuncioCreateOrConnectWithoutSedeInput = {
    where: Prisma.AnuncioWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnuncioCreateWithoutSedeInput, Prisma.AnuncioUncheckedCreateWithoutSedeInput>;
};
export type AnuncioCreateManySedeInputEnvelope = {
    data: Prisma.AnuncioCreateManySedeInput | Prisma.AnuncioCreateManySedeInput[];
    skipDuplicates?: boolean;
};
export type AnuncioUpsertWithWhereUniqueWithoutSedeInput = {
    where: Prisma.AnuncioWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnuncioUpdateWithoutSedeInput, Prisma.AnuncioUncheckedUpdateWithoutSedeInput>;
    create: Prisma.XOR<Prisma.AnuncioCreateWithoutSedeInput, Prisma.AnuncioUncheckedCreateWithoutSedeInput>;
};
export type AnuncioUpdateWithWhereUniqueWithoutSedeInput = {
    where: Prisma.AnuncioWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnuncioUpdateWithoutSedeInput, Prisma.AnuncioUncheckedUpdateWithoutSedeInput>;
};
export type AnuncioUpdateManyWithWhereWithoutSedeInput = {
    where: Prisma.AnuncioScalarWhereInput;
    data: Prisma.XOR<Prisma.AnuncioUpdateManyMutationInput, Prisma.AnuncioUncheckedUpdateManyWithoutSedeInput>;
};
export type AnuncioScalarWhereInput = {
    AND?: Prisma.AnuncioScalarWhereInput | Prisma.AnuncioScalarWhereInput[];
    OR?: Prisma.AnuncioScalarWhereInput[];
    NOT?: Prisma.AnuncioScalarWhereInput | Prisma.AnuncioScalarWhereInput[];
    id?: Prisma.IntFilter<"Anuncio"> | number;
    sedeId?: Prisma.IntFilter<"Anuncio"> | number;
    adminId?: Prisma.IntFilter<"Anuncio"> | number;
    mensaje?: Prisma.StringFilter<"Anuncio"> | string;
    createdAt?: Prisma.DateTimeFilter<"Anuncio"> | Date | string;
};
export type AnuncioCreateWithoutAdminInput = {
    mensaje: string;
    createdAt?: Date | string;
    sede: Prisma.SedeCreateNestedOneWithoutAnunciosInput;
    respuestas?: Prisma.AnuncioRespuestaCreateNestedManyWithoutAnuncioInput;
};
export type AnuncioUncheckedCreateWithoutAdminInput = {
    id?: number;
    sedeId: number;
    mensaje: string;
    createdAt?: Date | string;
    respuestas?: Prisma.AnuncioRespuestaUncheckedCreateNestedManyWithoutAnuncioInput;
};
export type AnuncioCreateOrConnectWithoutAdminInput = {
    where: Prisma.AnuncioWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnuncioCreateWithoutAdminInput, Prisma.AnuncioUncheckedCreateWithoutAdminInput>;
};
export type AnuncioCreateManyAdminInputEnvelope = {
    data: Prisma.AnuncioCreateManyAdminInput | Prisma.AnuncioCreateManyAdminInput[];
    skipDuplicates?: boolean;
};
export type AnuncioUpsertWithWhereUniqueWithoutAdminInput = {
    where: Prisma.AnuncioWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnuncioUpdateWithoutAdminInput, Prisma.AnuncioUncheckedUpdateWithoutAdminInput>;
    create: Prisma.XOR<Prisma.AnuncioCreateWithoutAdminInput, Prisma.AnuncioUncheckedCreateWithoutAdminInput>;
};
export type AnuncioUpdateWithWhereUniqueWithoutAdminInput = {
    where: Prisma.AnuncioWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnuncioUpdateWithoutAdminInput, Prisma.AnuncioUncheckedUpdateWithoutAdminInput>;
};
export type AnuncioUpdateManyWithWhereWithoutAdminInput = {
    where: Prisma.AnuncioScalarWhereInput;
    data: Prisma.XOR<Prisma.AnuncioUpdateManyMutationInput, Prisma.AnuncioUncheckedUpdateManyWithoutAdminInput>;
};
export type AnuncioCreateWithoutRespuestasInput = {
    mensaje: string;
    createdAt?: Date | string;
    sede: Prisma.SedeCreateNestedOneWithoutAnunciosInput;
    admin: Prisma.UsuarioCreateNestedOneWithoutAnunciosCreadosInput;
};
export type AnuncioUncheckedCreateWithoutRespuestasInput = {
    id?: number;
    sedeId: number;
    adminId: number;
    mensaje: string;
    createdAt?: Date | string;
};
export type AnuncioCreateOrConnectWithoutRespuestasInput = {
    where: Prisma.AnuncioWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnuncioCreateWithoutRespuestasInput, Prisma.AnuncioUncheckedCreateWithoutRespuestasInput>;
};
export type AnuncioUpsertWithoutRespuestasInput = {
    update: Prisma.XOR<Prisma.AnuncioUpdateWithoutRespuestasInput, Prisma.AnuncioUncheckedUpdateWithoutRespuestasInput>;
    create: Prisma.XOR<Prisma.AnuncioCreateWithoutRespuestasInput, Prisma.AnuncioUncheckedCreateWithoutRespuestasInput>;
    where?: Prisma.AnuncioWhereInput;
};
export type AnuncioUpdateToOneWithWhereWithoutRespuestasInput = {
    where?: Prisma.AnuncioWhereInput;
    data: Prisma.XOR<Prisma.AnuncioUpdateWithoutRespuestasInput, Prisma.AnuncioUncheckedUpdateWithoutRespuestasInput>;
};
export type AnuncioUpdateWithoutRespuestasInput = {
    mensaje?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sede?: Prisma.SedeUpdateOneRequiredWithoutAnunciosNestedInput;
    admin?: Prisma.UsuarioUpdateOneRequiredWithoutAnunciosCreadosNestedInput;
};
export type AnuncioUncheckedUpdateWithoutRespuestasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeId?: Prisma.IntFieldUpdateOperationsInput | number;
    adminId?: Prisma.IntFieldUpdateOperationsInput | number;
    mensaje?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnuncioCreateManySedeInput = {
    id?: number;
    adminId: number;
    mensaje: string;
    createdAt?: Date | string;
};
export type AnuncioUpdateWithoutSedeInput = {
    mensaje?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    admin?: Prisma.UsuarioUpdateOneRequiredWithoutAnunciosCreadosNestedInput;
    respuestas?: Prisma.AnuncioRespuestaUpdateManyWithoutAnuncioNestedInput;
};
export type AnuncioUncheckedUpdateWithoutSedeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    adminId?: Prisma.IntFieldUpdateOperationsInput | number;
    mensaje?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respuestas?: Prisma.AnuncioRespuestaUncheckedUpdateManyWithoutAnuncioNestedInput;
};
export type AnuncioUncheckedUpdateManyWithoutSedeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    adminId?: Prisma.IntFieldUpdateOperationsInput | number;
    mensaje?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnuncioCreateManyAdminInput = {
    id?: number;
    sedeId: number;
    mensaje: string;
    createdAt?: Date | string;
};
export type AnuncioUpdateWithoutAdminInput = {
    mensaje?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sede?: Prisma.SedeUpdateOneRequiredWithoutAnunciosNestedInput;
    respuestas?: Prisma.AnuncioRespuestaUpdateManyWithoutAnuncioNestedInput;
};
export type AnuncioUncheckedUpdateWithoutAdminInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeId?: Prisma.IntFieldUpdateOperationsInput | number;
    mensaje?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respuestas?: Prisma.AnuncioRespuestaUncheckedUpdateManyWithoutAnuncioNestedInput;
};
export type AnuncioUncheckedUpdateManyWithoutAdminInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeId?: Prisma.IntFieldUpdateOperationsInput | number;
    mensaje?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnuncioCountOutputType = {
    respuestas: number;
};
export type AnuncioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    respuestas?: boolean | AnuncioCountOutputTypeCountRespuestasArgs;
};
export type AnuncioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioCountOutputTypeSelect<ExtArgs> | null;
};
export type AnuncioCountOutputTypeCountRespuestasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnuncioRespuestaWhereInput;
};
export type AnuncioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sedeId?: boolean;
    adminId?: boolean;
    mensaje?: boolean;
    createdAt?: boolean;
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    respuestas?: boolean | Prisma.Anuncio$respuestasArgs<ExtArgs>;
    _count?: boolean | Prisma.AnuncioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["anuncio"]>;
export type AnuncioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sedeId?: boolean;
    adminId?: boolean;
    mensaje?: boolean;
    createdAt?: boolean;
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["anuncio"]>;
export type AnuncioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sedeId?: boolean;
    adminId?: boolean;
    mensaje?: boolean;
    createdAt?: boolean;
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["anuncio"]>;
export type AnuncioSelectScalar = {
    id?: boolean;
    sedeId?: boolean;
    adminId?: boolean;
    mensaje?: boolean;
    createdAt?: boolean;
};
export type AnuncioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sedeId" | "adminId" | "mensaje" | "createdAt", ExtArgs["result"]["anuncio"]>;
export type AnuncioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    respuestas?: boolean | Prisma.Anuncio$respuestasArgs<ExtArgs>;
    _count?: boolean | Prisma.AnuncioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AnuncioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type AnuncioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $AnuncioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Anuncio";
    objects: {
        sede: Prisma.$SedePayload<ExtArgs>;
        admin: Prisma.$UsuarioPayload<ExtArgs>;
        respuestas: Prisma.$AnuncioRespuestaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        sedeId: number;
        adminId: number;
        mensaje: string;
        createdAt: Date;
    }, ExtArgs["result"]["anuncio"]>;
    composites: {};
};
export type AnuncioGetPayload<S extends boolean | null | undefined | AnuncioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnuncioPayload, S>;
export type AnuncioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnuncioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnuncioCountAggregateInputType | true;
};
export interface AnuncioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Anuncio'];
        meta: {
            name: 'Anuncio';
        };
    };
    findUnique<T extends AnuncioFindUniqueArgs>(args: Prisma.SelectSubset<T, AnuncioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnuncioClient<runtime.Types.Result.GetResult<Prisma.$AnuncioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AnuncioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnuncioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnuncioClient<runtime.Types.Result.GetResult<Prisma.$AnuncioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AnuncioFindFirstArgs>(args?: Prisma.SelectSubset<T, AnuncioFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnuncioClient<runtime.Types.Result.GetResult<Prisma.$AnuncioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AnuncioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnuncioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnuncioClient<runtime.Types.Result.GetResult<Prisma.$AnuncioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AnuncioFindManyArgs>(args?: Prisma.SelectSubset<T, AnuncioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnuncioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AnuncioCreateArgs>(args: Prisma.SelectSubset<T, AnuncioCreateArgs<ExtArgs>>): Prisma.Prisma__AnuncioClient<runtime.Types.Result.GetResult<Prisma.$AnuncioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AnuncioCreateManyArgs>(args?: Prisma.SelectSubset<T, AnuncioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AnuncioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnuncioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnuncioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AnuncioDeleteArgs>(args: Prisma.SelectSubset<T, AnuncioDeleteArgs<ExtArgs>>): Prisma.Prisma__AnuncioClient<runtime.Types.Result.GetResult<Prisma.$AnuncioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AnuncioUpdateArgs>(args: Prisma.SelectSubset<T, AnuncioUpdateArgs<ExtArgs>>): Prisma.Prisma__AnuncioClient<runtime.Types.Result.GetResult<Prisma.$AnuncioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AnuncioDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnuncioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AnuncioUpdateManyArgs>(args: Prisma.SelectSubset<T, AnuncioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AnuncioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnuncioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnuncioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AnuncioUpsertArgs>(args: Prisma.SelectSubset<T, AnuncioUpsertArgs<ExtArgs>>): Prisma.Prisma__AnuncioClient<runtime.Types.Result.GetResult<Prisma.$AnuncioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AnuncioCountArgs>(args?: Prisma.Subset<T, AnuncioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnuncioCountAggregateOutputType> : number>;
    aggregate<T extends AnuncioAggregateArgs>(args: Prisma.Subset<T, AnuncioAggregateArgs>): Prisma.PrismaPromise<GetAnuncioAggregateType<T>>;
    groupBy<T extends AnuncioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnuncioGroupByArgs['orderBy'];
    } : {
        orderBy?: AnuncioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnuncioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnuncioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AnuncioFieldRefs;
}
export interface Prisma__AnuncioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sede<T extends Prisma.SedeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SedeDefaultArgs<ExtArgs>>): Prisma.Prisma__SedeClient<runtime.Types.Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    admin<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    respuestas<T extends Prisma.Anuncio$respuestasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Anuncio$respuestasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnuncioRespuestaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AnuncioFieldRefs {
    readonly id: Prisma.FieldRef<"Anuncio", 'Int'>;
    readonly sedeId: Prisma.FieldRef<"Anuncio", 'Int'>;
    readonly adminId: Prisma.FieldRef<"Anuncio", 'Int'>;
    readonly mensaje: Prisma.FieldRef<"Anuncio", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Anuncio", 'DateTime'>;
}
export type AnuncioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioSelect<ExtArgs> | null;
    omit?: Prisma.AnuncioOmit<ExtArgs> | null;
    include?: Prisma.AnuncioInclude<ExtArgs> | null;
    where: Prisma.AnuncioWhereUniqueInput;
};
export type AnuncioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioSelect<ExtArgs> | null;
    omit?: Prisma.AnuncioOmit<ExtArgs> | null;
    include?: Prisma.AnuncioInclude<ExtArgs> | null;
    where: Prisma.AnuncioWhereUniqueInput;
};
export type AnuncioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioSelect<ExtArgs> | null;
    omit?: Prisma.AnuncioOmit<ExtArgs> | null;
    include?: Prisma.AnuncioInclude<ExtArgs> | null;
    where?: Prisma.AnuncioWhereInput;
    orderBy?: Prisma.AnuncioOrderByWithRelationInput | Prisma.AnuncioOrderByWithRelationInput[];
    cursor?: Prisma.AnuncioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnuncioScalarFieldEnum | Prisma.AnuncioScalarFieldEnum[];
};
export type AnuncioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioSelect<ExtArgs> | null;
    omit?: Prisma.AnuncioOmit<ExtArgs> | null;
    include?: Prisma.AnuncioInclude<ExtArgs> | null;
    where?: Prisma.AnuncioWhereInput;
    orderBy?: Prisma.AnuncioOrderByWithRelationInput | Prisma.AnuncioOrderByWithRelationInput[];
    cursor?: Prisma.AnuncioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnuncioScalarFieldEnum | Prisma.AnuncioScalarFieldEnum[];
};
export type AnuncioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioSelect<ExtArgs> | null;
    omit?: Prisma.AnuncioOmit<ExtArgs> | null;
    include?: Prisma.AnuncioInclude<ExtArgs> | null;
    where?: Prisma.AnuncioWhereInput;
    orderBy?: Prisma.AnuncioOrderByWithRelationInput | Prisma.AnuncioOrderByWithRelationInput[];
    cursor?: Prisma.AnuncioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnuncioScalarFieldEnum | Prisma.AnuncioScalarFieldEnum[];
};
export type AnuncioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioSelect<ExtArgs> | null;
    omit?: Prisma.AnuncioOmit<ExtArgs> | null;
    include?: Prisma.AnuncioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnuncioCreateInput, Prisma.AnuncioUncheckedCreateInput>;
};
export type AnuncioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AnuncioCreateManyInput | Prisma.AnuncioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnuncioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnuncioOmit<ExtArgs> | null;
    data: Prisma.AnuncioCreateManyInput | Prisma.AnuncioCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AnuncioIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AnuncioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioSelect<ExtArgs> | null;
    omit?: Prisma.AnuncioOmit<ExtArgs> | null;
    include?: Prisma.AnuncioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnuncioUpdateInput, Prisma.AnuncioUncheckedUpdateInput>;
    where: Prisma.AnuncioWhereUniqueInput;
};
export type AnuncioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AnuncioUpdateManyMutationInput, Prisma.AnuncioUncheckedUpdateManyInput>;
    where?: Prisma.AnuncioWhereInput;
    limit?: number;
};
export type AnuncioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnuncioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnuncioUpdateManyMutationInput, Prisma.AnuncioUncheckedUpdateManyInput>;
    where?: Prisma.AnuncioWhereInput;
    limit?: number;
    include?: Prisma.AnuncioIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AnuncioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioSelect<ExtArgs> | null;
    omit?: Prisma.AnuncioOmit<ExtArgs> | null;
    include?: Prisma.AnuncioInclude<ExtArgs> | null;
    where: Prisma.AnuncioWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnuncioCreateInput, Prisma.AnuncioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AnuncioUpdateInput, Prisma.AnuncioUncheckedUpdateInput>;
};
export type AnuncioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioSelect<ExtArgs> | null;
    omit?: Prisma.AnuncioOmit<ExtArgs> | null;
    include?: Prisma.AnuncioInclude<ExtArgs> | null;
    where: Prisma.AnuncioWhereUniqueInput;
};
export type AnuncioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnuncioWhereInput;
    limit?: number;
};
export type Anuncio$respuestasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioRespuestaSelect<ExtArgs> | null;
    omit?: Prisma.AnuncioRespuestaOmit<ExtArgs> | null;
    include?: Prisma.AnuncioRespuestaInclude<ExtArgs> | null;
    where?: Prisma.AnuncioRespuestaWhereInput;
    orderBy?: Prisma.AnuncioRespuestaOrderByWithRelationInput | Prisma.AnuncioRespuestaOrderByWithRelationInput[];
    cursor?: Prisma.AnuncioRespuestaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnuncioRespuestaScalarFieldEnum | Prisma.AnuncioRespuestaScalarFieldEnum[];
};
export type AnuncioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioSelect<ExtArgs> | null;
    omit?: Prisma.AnuncioOmit<ExtArgs> | null;
    include?: Prisma.AnuncioInclude<ExtArgs> | null;
};
