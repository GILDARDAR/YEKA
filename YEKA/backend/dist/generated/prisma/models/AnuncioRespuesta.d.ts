import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AnuncioRespuestaModel = runtime.Types.Result.DefaultSelection<Prisma.$AnuncioRespuestaPayload>;
export type AggregateAnuncioRespuesta = {
    _count: AnuncioRespuestaCountAggregateOutputType | null;
    _avg: AnuncioRespuestaAvgAggregateOutputType | null;
    _sum: AnuncioRespuestaSumAggregateOutputType | null;
    _min: AnuncioRespuestaMinAggregateOutputType | null;
    _max: AnuncioRespuestaMaxAggregateOutputType | null;
};
export type AnuncioRespuestaAvgAggregateOutputType = {
    id: number | null;
    anuncioId: number | null;
    usuarioId: number | null;
};
export type AnuncioRespuestaSumAggregateOutputType = {
    id: number | null;
    anuncioId: number | null;
    usuarioId: number | null;
};
export type AnuncioRespuestaMinAggregateOutputType = {
    id: number | null;
    anuncioId: number | null;
    usuarioId: number | null;
    respuesta: string | null;
    leidoAt: Date | null;
};
export type AnuncioRespuestaMaxAggregateOutputType = {
    id: number | null;
    anuncioId: number | null;
    usuarioId: number | null;
    respuesta: string | null;
    leidoAt: Date | null;
};
export type AnuncioRespuestaCountAggregateOutputType = {
    id: number;
    anuncioId: number;
    usuarioId: number;
    respuesta: number;
    leidoAt: number;
    _all: number;
};
export type AnuncioRespuestaAvgAggregateInputType = {
    id?: true;
    anuncioId?: true;
    usuarioId?: true;
};
export type AnuncioRespuestaSumAggregateInputType = {
    id?: true;
    anuncioId?: true;
    usuarioId?: true;
};
export type AnuncioRespuestaMinAggregateInputType = {
    id?: true;
    anuncioId?: true;
    usuarioId?: true;
    respuesta?: true;
    leidoAt?: true;
};
export type AnuncioRespuestaMaxAggregateInputType = {
    id?: true;
    anuncioId?: true;
    usuarioId?: true;
    respuesta?: true;
    leidoAt?: true;
};
export type AnuncioRespuestaCountAggregateInputType = {
    id?: true;
    anuncioId?: true;
    usuarioId?: true;
    respuesta?: true;
    leidoAt?: true;
    _all?: true;
};
export type AnuncioRespuestaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnuncioRespuestaWhereInput;
    orderBy?: Prisma.AnuncioRespuestaOrderByWithRelationInput | Prisma.AnuncioRespuestaOrderByWithRelationInput[];
    cursor?: Prisma.AnuncioRespuestaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AnuncioRespuestaCountAggregateInputType;
    _avg?: AnuncioRespuestaAvgAggregateInputType;
    _sum?: AnuncioRespuestaSumAggregateInputType;
    _min?: AnuncioRespuestaMinAggregateInputType;
    _max?: AnuncioRespuestaMaxAggregateInputType;
};
export type GetAnuncioRespuestaAggregateType<T extends AnuncioRespuestaAggregateArgs> = {
    [P in keyof T & keyof AggregateAnuncioRespuesta]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnuncioRespuesta[P]> : Prisma.GetScalarType<T[P], AggregateAnuncioRespuesta[P]>;
};
export type AnuncioRespuestaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnuncioRespuestaWhereInput;
    orderBy?: Prisma.AnuncioRespuestaOrderByWithAggregationInput | Prisma.AnuncioRespuestaOrderByWithAggregationInput[];
    by: Prisma.AnuncioRespuestaScalarFieldEnum[] | Prisma.AnuncioRespuestaScalarFieldEnum;
    having?: Prisma.AnuncioRespuestaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnuncioRespuestaCountAggregateInputType | true;
    _avg?: AnuncioRespuestaAvgAggregateInputType;
    _sum?: AnuncioRespuestaSumAggregateInputType;
    _min?: AnuncioRespuestaMinAggregateInputType;
    _max?: AnuncioRespuestaMaxAggregateInputType;
};
export type AnuncioRespuestaGroupByOutputType = {
    id: number;
    anuncioId: number;
    usuarioId: number;
    respuesta: string;
    leidoAt: Date;
    _count: AnuncioRespuestaCountAggregateOutputType | null;
    _avg: AnuncioRespuestaAvgAggregateOutputType | null;
    _sum: AnuncioRespuestaSumAggregateOutputType | null;
    _min: AnuncioRespuestaMinAggregateOutputType | null;
    _max: AnuncioRespuestaMaxAggregateOutputType | null;
};
export type GetAnuncioRespuestaGroupByPayload<T extends AnuncioRespuestaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnuncioRespuestaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnuncioRespuestaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnuncioRespuestaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnuncioRespuestaGroupByOutputType[P]>;
}>>;
export type AnuncioRespuestaWhereInput = {
    AND?: Prisma.AnuncioRespuestaWhereInput | Prisma.AnuncioRespuestaWhereInput[];
    OR?: Prisma.AnuncioRespuestaWhereInput[];
    NOT?: Prisma.AnuncioRespuestaWhereInput | Prisma.AnuncioRespuestaWhereInput[];
    id?: Prisma.IntFilter<"AnuncioRespuesta"> | number;
    anuncioId?: Prisma.IntFilter<"AnuncioRespuesta"> | number;
    usuarioId?: Prisma.IntFilter<"AnuncioRespuesta"> | number;
    respuesta?: Prisma.StringFilter<"AnuncioRespuesta"> | string;
    leidoAt?: Prisma.DateTimeFilter<"AnuncioRespuesta"> | Date | string;
    anuncio?: Prisma.XOR<Prisma.AnuncioScalarRelationFilter, Prisma.AnuncioWhereInput>;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
};
export type AnuncioRespuestaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    anuncioId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    respuesta?: Prisma.SortOrder;
    leidoAt?: Prisma.SortOrder;
    anuncio?: Prisma.AnuncioOrderByWithRelationInput;
    usuario?: Prisma.UsuarioOrderByWithRelationInput;
};
export type AnuncioRespuestaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    anuncioId_usuarioId?: Prisma.AnuncioRespuestaAnuncioIdUsuarioIdCompoundUniqueInput;
    AND?: Prisma.AnuncioRespuestaWhereInput | Prisma.AnuncioRespuestaWhereInput[];
    OR?: Prisma.AnuncioRespuestaWhereInput[];
    NOT?: Prisma.AnuncioRespuestaWhereInput | Prisma.AnuncioRespuestaWhereInput[];
    anuncioId?: Prisma.IntFilter<"AnuncioRespuesta"> | number;
    usuarioId?: Prisma.IntFilter<"AnuncioRespuesta"> | number;
    respuesta?: Prisma.StringFilter<"AnuncioRespuesta"> | string;
    leidoAt?: Prisma.DateTimeFilter<"AnuncioRespuesta"> | Date | string;
    anuncio?: Prisma.XOR<Prisma.AnuncioScalarRelationFilter, Prisma.AnuncioWhereInput>;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
}, "id" | "anuncioId_usuarioId">;
export type AnuncioRespuestaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    anuncioId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    respuesta?: Prisma.SortOrder;
    leidoAt?: Prisma.SortOrder;
    _count?: Prisma.AnuncioRespuestaCountOrderByAggregateInput;
    _avg?: Prisma.AnuncioRespuestaAvgOrderByAggregateInput;
    _max?: Prisma.AnuncioRespuestaMaxOrderByAggregateInput;
    _min?: Prisma.AnuncioRespuestaMinOrderByAggregateInput;
    _sum?: Prisma.AnuncioRespuestaSumOrderByAggregateInput;
};
export type AnuncioRespuestaScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnuncioRespuestaScalarWhereWithAggregatesInput | Prisma.AnuncioRespuestaScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnuncioRespuestaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnuncioRespuestaScalarWhereWithAggregatesInput | Prisma.AnuncioRespuestaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"AnuncioRespuesta"> | number;
    anuncioId?: Prisma.IntWithAggregatesFilter<"AnuncioRespuesta"> | number;
    usuarioId?: Prisma.IntWithAggregatesFilter<"AnuncioRespuesta"> | number;
    respuesta?: Prisma.StringWithAggregatesFilter<"AnuncioRespuesta"> | string;
    leidoAt?: Prisma.DateTimeWithAggregatesFilter<"AnuncioRespuesta"> | Date | string;
};
export type AnuncioRespuestaCreateInput = {
    respuesta: string;
    leidoAt?: Date | string;
    anuncio: Prisma.AnuncioCreateNestedOneWithoutRespuestasInput;
    usuario: Prisma.UsuarioCreateNestedOneWithoutAnunciosLeidosInput;
};
export type AnuncioRespuestaUncheckedCreateInput = {
    id?: number;
    anuncioId: number;
    usuarioId: number;
    respuesta: string;
    leidoAt?: Date | string;
};
export type AnuncioRespuestaUpdateInput = {
    respuesta?: Prisma.StringFieldUpdateOperationsInput | string;
    leidoAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    anuncio?: Prisma.AnuncioUpdateOneRequiredWithoutRespuestasNestedInput;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutAnunciosLeidosNestedInput;
};
export type AnuncioRespuestaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    anuncioId?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    respuesta?: Prisma.StringFieldUpdateOperationsInput | string;
    leidoAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnuncioRespuestaCreateManyInput = {
    id?: number;
    anuncioId: number;
    usuarioId: number;
    respuesta: string;
    leidoAt?: Date | string;
};
export type AnuncioRespuestaUpdateManyMutationInput = {
    respuesta?: Prisma.StringFieldUpdateOperationsInput | string;
    leidoAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnuncioRespuestaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    anuncioId?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    respuesta?: Prisma.StringFieldUpdateOperationsInput | string;
    leidoAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnuncioRespuestaListRelationFilter = {
    every?: Prisma.AnuncioRespuestaWhereInput;
    some?: Prisma.AnuncioRespuestaWhereInput;
    none?: Prisma.AnuncioRespuestaWhereInput;
};
export type AnuncioRespuestaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AnuncioRespuestaAnuncioIdUsuarioIdCompoundUniqueInput = {
    anuncioId: number;
    usuarioId: number;
};
export type AnuncioRespuestaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    anuncioId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    respuesta?: Prisma.SortOrder;
    leidoAt?: Prisma.SortOrder;
};
export type AnuncioRespuestaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    anuncioId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type AnuncioRespuestaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    anuncioId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    respuesta?: Prisma.SortOrder;
    leidoAt?: Prisma.SortOrder;
};
export type AnuncioRespuestaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    anuncioId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    respuesta?: Prisma.SortOrder;
    leidoAt?: Prisma.SortOrder;
};
export type AnuncioRespuestaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    anuncioId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type AnuncioRespuestaCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.AnuncioRespuestaCreateWithoutUsuarioInput, Prisma.AnuncioRespuestaUncheckedCreateWithoutUsuarioInput> | Prisma.AnuncioRespuestaCreateWithoutUsuarioInput[] | Prisma.AnuncioRespuestaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.AnuncioRespuestaCreateOrConnectWithoutUsuarioInput | Prisma.AnuncioRespuestaCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.AnuncioRespuestaCreateManyUsuarioInputEnvelope;
    connect?: Prisma.AnuncioRespuestaWhereUniqueInput | Prisma.AnuncioRespuestaWhereUniqueInput[];
};
export type AnuncioRespuestaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.AnuncioRespuestaCreateWithoutUsuarioInput, Prisma.AnuncioRespuestaUncheckedCreateWithoutUsuarioInput> | Prisma.AnuncioRespuestaCreateWithoutUsuarioInput[] | Prisma.AnuncioRespuestaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.AnuncioRespuestaCreateOrConnectWithoutUsuarioInput | Prisma.AnuncioRespuestaCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.AnuncioRespuestaCreateManyUsuarioInputEnvelope;
    connect?: Prisma.AnuncioRespuestaWhereUniqueInput | Prisma.AnuncioRespuestaWhereUniqueInput[];
};
export type AnuncioRespuestaUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.AnuncioRespuestaCreateWithoutUsuarioInput, Prisma.AnuncioRespuestaUncheckedCreateWithoutUsuarioInput> | Prisma.AnuncioRespuestaCreateWithoutUsuarioInput[] | Prisma.AnuncioRespuestaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.AnuncioRespuestaCreateOrConnectWithoutUsuarioInput | Prisma.AnuncioRespuestaCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.AnuncioRespuestaUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.AnuncioRespuestaUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.AnuncioRespuestaCreateManyUsuarioInputEnvelope;
    set?: Prisma.AnuncioRespuestaWhereUniqueInput | Prisma.AnuncioRespuestaWhereUniqueInput[];
    disconnect?: Prisma.AnuncioRespuestaWhereUniqueInput | Prisma.AnuncioRespuestaWhereUniqueInput[];
    delete?: Prisma.AnuncioRespuestaWhereUniqueInput | Prisma.AnuncioRespuestaWhereUniqueInput[];
    connect?: Prisma.AnuncioRespuestaWhereUniqueInput | Prisma.AnuncioRespuestaWhereUniqueInput[];
    update?: Prisma.AnuncioRespuestaUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.AnuncioRespuestaUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.AnuncioRespuestaUpdateManyWithWhereWithoutUsuarioInput | Prisma.AnuncioRespuestaUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.AnuncioRespuestaScalarWhereInput | Prisma.AnuncioRespuestaScalarWhereInput[];
};
export type AnuncioRespuestaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.AnuncioRespuestaCreateWithoutUsuarioInput, Prisma.AnuncioRespuestaUncheckedCreateWithoutUsuarioInput> | Prisma.AnuncioRespuestaCreateWithoutUsuarioInput[] | Prisma.AnuncioRespuestaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.AnuncioRespuestaCreateOrConnectWithoutUsuarioInput | Prisma.AnuncioRespuestaCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.AnuncioRespuestaUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.AnuncioRespuestaUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.AnuncioRespuestaCreateManyUsuarioInputEnvelope;
    set?: Prisma.AnuncioRespuestaWhereUniqueInput | Prisma.AnuncioRespuestaWhereUniqueInput[];
    disconnect?: Prisma.AnuncioRespuestaWhereUniqueInput | Prisma.AnuncioRespuestaWhereUniqueInput[];
    delete?: Prisma.AnuncioRespuestaWhereUniqueInput | Prisma.AnuncioRespuestaWhereUniqueInput[];
    connect?: Prisma.AnuncioRespuestaWhereUniqueInput | Prisma.AnuncioRespuestaWhereUniqueInput[];
    update?: Prisma.AnuncioRespuestaUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.AnuncioRespuestaUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.AnuncioRespuestaUpdateManyWithWhereWithoutUsuarioInput | Prisma.AnuncioRespuestaUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.AnuncioRespuestaScalarWhereInput | Prisma.AnuncioRespuestaScalarWhereInput[];
};
export type AnuncioRespuestaCreateNestedManyWithoutAnuncioInput = {
    create?: Prisma.XOR<Prisma.AnuncioRespuestaCreateWithoutAnuncioInput, Prisma.AnuncioRespuestaUncheckedCreateWithoutAnuncioInput> | Prisma.AnuncioRespuestaCreateWithoutAnuncioInput[] | Prisma.AnuncioRespuestaUncheckedCreateWithoutAnuncioInput[];
    connectOrCreate?: Prisma.AnuncioRespuestaCreateOrConnectWithoutAnuncioInput | Prisma.AnuncioRespuestaCreateOrConnectWithoutAnuncioInput[];
    createMany?: Prisma.AnuncioRespuestaCreateManyAnuncioInputEnvelope;
    connect?: Prisma.AnuncioRespuestaWhereUniqueInput | Prisma.AnuncioRespuestaWhereUniqueInput[];
};
export type AnuncioRespuestaUncheckedCreateNestedManyWithoutAnuncioInput = {
    create?: Prisma.XOR<Prisma.AnuncioRespuestaCreateWithoutAnuncioInput, Prisma.AnuncioRespuestaUncheckedCreateWithoutAnuncioInput> | Prisma.AnuncioRespuestaCreateWithoutAnuncioInput[] | Prisma.AnuncioRespuestaUncheckedCreateWithoutAnuncioInput[];
    connectOrCreate?: Prisma.AnuncioRespuestaCreateOrConnectWithoutAnuncioInput | Prisma.AnuncioRespuestaCreateOrConnectWithoutAnuncioInput[];
    createMany?: Prisma.AnuncioRespuestaCreateManyAnuncioInputEnvelope;
    connect?: Prisma.AnuncioRespuestaWhereUniqueInput | Prisma.AnuncioRespuestaWhereUniqueInput[];
};
export type AnuncioRespuestaUpdateManyWithoutAnuncioNestedInput = {
    create?: Prisma.XOR<Prisma.AnuncioRespuestaCreateWithoutAnuncioInput, Prisma.AnuncioRespuestaUncheckedCreateWithoutAnuncioInput> | Prisma.AnuncioRespuestaCreateWithoutAnuncioInput[] | Prisma.AnuncioRespuestaUncheckedCreateWithoutAnuncioInput[];
    connectOrCreate?: Prisma.AnuncioRespuestaCreateOrConnectWithoutAnuncioInput | Prisma.AnuncioRespuestaCreateOrConnectWithoutAnuncioInput[];
    upsert?: Prisma.AnuncioRespuestaUpsertWithWhereUniqueWithoutAnuncioInput | Prisma.AnuncioRespuestaUpsertWithWhereUniqueWithoutAnuncioInput[];
    createMany?: Prisma.AnuncioRespuestaCreateManyAnuncioInputEnvelope;
    set?: Prisma.AnuncioRespuestaWhereUniqueInput | Prisma.AnuncioRespuestaWhereUniqueInput[];
    disconnect?: Prisma.AnuncioRespuestaWhereUniqueInput | Prisma.AnuncioRespuestaWhereUniqueInput[];
    delete?: Prisma.AnuncioRespuestaWhereUniqueInput | Prisma.AnuncioRespuestaWhereUniqueInput[];
    connect?: Prisma.AnuncioRespuestaWhereUniqueInput | Prisma.AnuncioRespuestaWhereUniqueInput[];
    update?: Prisma.AnuncioRespuestaUpdateWithWhereUniqueWithoutAnuncioInput | Prisma.AnuncioRespuestaUpdateWithWhereUniqueWithoutAnuncioInput[];
    updateMany?: Prisma.AnuncioRespuestaUpdateManyWithWhereWithoutAnuncioInput | Prisma.AnuncioRespuestaUpdateManyWithWhereWithoutAnuncioInput[];
    deleteMany?: Prisma.AnuncioRespuestaScalarWhereInput | Prisma.AnuncioRespuestaScalarWhereInput[];
};
export type AnuncioRespuestaUncheckedUpdateManyWithoutAnuncioNestedInput = {
    create?: Prisma.XOR<Prisma.AnuncioRespuestaCreateWithoutAnuncioInput, Prisma.AnuncioRespuestaUncheckedCreateWithoutAnuncioInput> | Prisma.AnuncioRespuestaCreateWithoutAnuncioInput[] | Prisma.AnuncioRespuestaUncheckedCreateWithoutAnuncioInput[];
    connectOrCreate?: Prisma.AnuncioRespuestaCreateOrConnectWithoutAnuncioInput | Prisma.AnuncioRespuestaCreateOrConnectWithoutAnuncioInput[];
    upsert?: Prisma.AnuncioRespuestaUpsertWithWhereUniqueWithoutAnuncioInput | Prisma.AnuncioRespuestaUpsertWithWhereUniqueWithoutAnuncioInput[];
    createMany?: Prisma.AnuncioRespuestaCreateManyAnuncioInputEnvelope;
    set?: Prisma.AnuncioRespuestaWhereUniqueInput | Prisma.AnuncioRespuestaWhereUniqueInput[];
    disconnect?: Prisma.AnuncioRespuestaWhereUniqueInput | Prisma.AnuncioRespuestaWhereUniqueInput[];
    delete?: Prisma.AnuncioRespuestaWhereUniqueInput | Prisma.AnuncioRespuestaWhereUniqueInput[];
    connect?: Prisma.AnuncioRespuestaWhereUniqueInput | Prisma.AnuncioRespuestaWhereUniqueInput[];
    update?: Prisma.AnuncioRespuestaUpdateWithWhereUniqueWithoutAnuncioInput | Prisma.AnuncioRespuestaUpdateWithWhereUniqueWithoutAnuncioInput[];
    updateMany?: Prisma.AnuncioRespuestaUpdateManyWithWhereWithoutAnuncioInput | Prisma.AnuncioRespuestaUpdateManyWithWhereWithoutAnuncioInput[];
    deleteMany?: Prisma.AnuncioRespuestaScalarWhereInput | Prisma.AnuncioRespuestaScalarWhereInput[];
};
export type AnuncioRespuestaCreateWithoutUsuarioInput = {
    respuesta: string;
    leidoAt?: Date | string;
    anuncio: Prisma.AnuncioCreateNestedOneWithoutRespuestasInput;
};
export type AnuncioRespuestaUncheckedCreateWithoutUsuarioInput = {
    id?: number;
    anuncioId: number;
    respuesta: string;
    leidoAt?: Date | string;
};
export type AnuncioRespuestaCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.AnuncioRespuestaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnuncioRespuestaCreateWithoutUsuarioInput, Prisma.AnuncioRespuestaUncheckedCreateWithoutUsuarioInput>;
};
export type AnuncioRespuestaCreateManyUsuarioInputEnvelope = {
    data: Prisma.AnuncioRespuestaCreateManyUsuarioInput | Prisma.AnuncioRespuestaCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type AnuncioRespuestaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.AnuncioRespuestaWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnuncioRespuestaUpdateWithoutUsuarioInput, Prisma.AnuncioRespuestaUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.AnuncioRespuestaCreateWithoutUsuarioInput, Prisma.AnuncioRespuestaUncheckedCreateWithoutUsuarioInput>;
};
export type AnuncioRespuestaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.AnuncioRespuestaWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnuncioRespuestaUpdateWithoutUsuarioInput, Prisma.AnuncioRespuestaUncheckedUpdateWithoutUsuarioInput>;
};
export type AnuncioRespuestaUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.AnuncioRespuestaScalarWhereInput;
    data: Prisma.XOR<Prisma.AnuncioRespuestaUpdateManyMutationInput, Prisma.AnuncioRespuestaUncheckedUpdateManyWithoutUsuarioInput>;
};
export type AnuncioRespuestaScalarWhereInput = {
    AND?: Prisma.AnuncioRespuestaScalarWhereInput | Prisma.AnuncioRespuestaScalarWhereInput[];
    OR?: Prisma.AnuncioRespuestaScalarWhereInput[];
    NOT?: Prisma.AnuncioRespuestaScalarWhereInput | Prisma.AnuncioRespuestaScalarWhereInput[];
    id?: Prisma.IntFilter<"AnuncioRespuesta"> | number;
    anuncioId?: Prisma.IntFilter<"AnuncioRespuesta"> | number;
    usuarioId?: Prisma.IntFilter<"AnuncioRespuesta"> | number;
    respuesta?: Prisma.StringFilter<"AnuncioRespuesta"> | string;
    leidoAt?: Prisma.DateTimeFilter<"AnuncioRespuesta"> | Date | string;
};
export type AnuncioRespuestaCreateWithoutAnuncioInput = {
    respuesta: string;
    leidoAt?: Date | string;
    usuario: Prisma.UsuarioCreateNestedOneWithoutAnunciosLeidosInput;
};
export type AnuncioRespuestaUncheckedCreateWithoutAnuncioInput = {
    id?: number;
    usuarioId: number;
    respuesta: string;
    leidoAt?: Date | string;
};
export type AnuncioRespuestaCreateOrConnectWithoutAnuncioInput = {
    where: Prisma.AnuncioRespuestaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnuncioRespuestaCreateWithoutAnuncioInput, Prisma.AnuncioRespuestaUncheckedCreateWithoutAnuncioInput>;
};
export type AnuncioRespuestaCreateManyAnuncioInputEnvelope = {
    data: Prisma.AnuncioRespuestaCreateManyAnuncioInput | Prisma.AnuncioRespuestaCreateManyAnuncioInput[];
    skipDuplicates?: boolean;
};
export type AnuncioRespuestaUpsertWithWhereUniqueWithoutAnuncioInput = {
    where: Prisma.AnuncioRespuestaWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnuncioRespuestaUpdateWithoutAnuncioInput, Prisma.AnuncioRespuestaUncheckedUpdateWithoutAnuncioInput>;
    create: Prisma.XOR<Prisma.AnuncioRespuestaCreateWithoutAnuncioInput, Prisma.AnuncioRespuestaUncheckedCreateWithoutAnuncioInput>;
};
export type AnuncioRespuestaUpdateWithWhereUniqueWithoutAnuncioInput = {
    where: Prisma.AnuncioRespuestaWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnuncioRespuestaUpdateWithoutAnuncioInput, Prisma.AnuncioRespuestaUncheckedUpdateWithoutAnuncioInput>;
};
export type AnuncioRespuestaUpdateManyWithWhereWithoutAnuncioInput = {
    where: Prisma.AnuncioRespuestaScalarWhereInput;
    data: Prisma.XOR<Prisma.AnuncioRespuestaUpdateManyMutationInput, Prisma.AnuncioRespuestaUncheckedUpdateManyWithoutAnuncioInput>;
};
export type AnuncioRespuestaCreateManyUsuarioInput = {
    id?: number;
    anuncioId: number;
    respuesta: string;
    leidoAt?: Date | string;
};
export type AnuncioRespuestaUpdateWithoutUsuarioInput = {
    respuesta?: Prisma.StringFieldUpdateOperationsInput | string;
    leidoAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    anuncio?: Prisma.AnuncioUpdateOneRequiredWithoutRespuestasNestedInput;
};
export type AnuncioRespuestaUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    anuncioId?: Prisma.IntFieldUpdateOperationsInput | number;
    respuesta?: Prisma.StringFieldUpdateOperationsInput | string;
    leidoAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnuncioRespuestaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    anuncioId?: Prisma.IntFieldUpdateOperationsInput | number;
    respuesta?: Prisma.StringFieldUpdateOperationsInput | string;
    leidoAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnuncioRespuestaCreateManyAnuncioInput = {
    id?: number;
    usuarioId: number;
    respuesta: string;
    leidoAt?: Date | string;
};
export type AnuncioRespuestaUpdateWithoutAnuncioInput = {
    respuesta?: Prisma.StringFieldUpdateOperationsInput | string;
    leidoAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutAnunciosLeidosNestedInput;
};
export type AnuncioRespuestaUncheckedUpdateWithoutAnuncioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    respuesta?: Prisma.StringFieldUpdateOperationsInput | string;
    leidoAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnuncioRespuestaUncheckedUpdateManyWithoutAnuncioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    respuesta?: Prisma.StringFieldUpdateOperationsInput | string;
    leidoAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnuncioRespuestaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    anuncioId?: boolean;
    usuarioId?: boolean;
    respuesta?: boolean;
    leidoAt?: boolean;
    anuncio?: boolean | Prisma.AnuncioDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["anuncioRespuesta"]>;
export type AnuncioRespuestaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    anuncioId?: boolean;
    usuarioId?: boolean;
    respuesta?: boolean;
    leidoAt?: boolean;
    anuncio?: boolean | Prisma.AnuncioDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["anuncioRespuesta"]>;
export type AnuncioRespuestaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    anuncioId?: boolean;
    usuarioId?: boolean;
    respuesta?: boolean;
    leidoAt?: boolean;
    anuncio?: boolean | Prisma.AnuncioDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["anuncioRespuesta"]>;
export type AnuncioRespuestaSelectScalar = {
    id?: boolean;
    anuncioId?: boolean;
    usuarioId?: boolean;
    respuesta?: boolean;
    leidoAt?: boolean;
};
export type AnuncioRespuestaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "anuncioId" | "usuarioId" | "respuesta" | "leidoAt", ExtArgs["result"]["anuncioRespuesta"]>;
export type AnuncioRespuestaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    anuncio?: boolean | Prisma.AnuncioDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type AnuncioRespuestaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    anuncio?: boolean | Prisma.AnuncioDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type AnuncioRespuestaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    anuncio?: boolean | Prisma.AnuncioDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $AnuncioRespuestaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AnuncioRespuesta";
    objects: {
        anuncio: Prisma.$AnuncioPayload<ExtArgs>;
        usuario: Prisma.$UsuarioPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        anuncioId: number;
        usuarioId: number;
        respuesta: string;
        leidoAt: Date;
    }, ExtArgs["result"]["anuncioRespuesta"]>;
    composites: {};
};
export type AnuncioRespuestaGetPayload<S extends boolean | null | undefined | AnuncioRespuestaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnuncioRespuestaPayload, S>;
export type AnuncioRespuestaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnuncioRespuestaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnuncioRespuestaCountAggregateInputType | true;
};
export interface AnuncioRespuestaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AnuncioRespuesta'];
        meta: {
            name: 'AnuncioRespuesta';
        };
    };
    findUnique<T extends AnuncioRespuestaFindUniqueArgs>(args: Prisma.SelectSubset<T, AnuncioRespuestaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnuncioRespuestaClient<runtime.Types.Result.GetResult<Prisma.$AnuncioRespuestaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AnuncioRespuestaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnuncioRespuestaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnuncioRespuestaClient<runtime.Types.Result.GetResult<Prisma.$AnuncioRespuestaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AnuncioRespuestaFindFirstArgs>(args?: Prisma.SelectSubset<T, AnuncioRespuestaFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnuncioRespuestaClient<runtime.Types.Result.GetResult<Prisma.$AnuncioRespuestaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AnuncioRespuestaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnuncioRespuestaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnuncioRespuestaClient<runtime.Types.Result.GetResult<Prisma.$AnuncioRespuestaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AnuncioRespuestaFindManyArgs>(args?: Prisma.SelectSubset<T, AnuncioRespuestaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnuncioRespuestaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AnuncioRespuestaCreateArgs>(args: Prisma.SelectSubset<T, AnuncioRespuestaCreateArgs<ExtArgs>>): Prisma.Prisma__AnuncioRespuestaClient<runtime.Types.Result.GetResult<Prisma.$AnuncioRespuestaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AnuncioRespuestaCreateManyArgs>(args?: Prisma.SelectSubset<T, AnuncioRespuestaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AnuncioRespuestaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnuncioRespuestaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnuncioRespuestaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AnuncioRespuestaDeleteArgs>(args: Prisma.SelectSubset<T, AnuncioRespuestaDeleteArgs<ExtArgs>>): Prisma.Prisma__AnuncioRespuestaClient<runtime.Types.Result.GetResult<Prisma.$AnuncioRespuestaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AnuncioRespuestaUpdateArgs>(args: Prisma.SelectSubset<T, AnuncioRespuestaUpdateArgs<ExtArgs>>): Prisma.Prisma__AnuncioRespuestaClient<runtime.Types.Result.GetResult<Prisma.$AnuncioRespuestaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AnuncioRespuestaDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnuncioRespuestaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AnuncioRespuestaUpdateManyArgs>(args: Prisma.SelectSubset<T, AnuncioRespuestaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AnuncioRespuestaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnuncioRespuestaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnuncioRespuestaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AnuncioRespuestaUpsertArgs>(args: Prisma.SelectSubset<T, AnuncioRespuestaUpsertArgs<ExtArgs>>): Prisma.Prisma__AnuncioRespuestaClient<runtime.Types.Result.GetResult<Prisma.$AnuncioRespuestaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AnuncioRespuestaCountArgs>(args?: Prisma.Subset<T, AnuncioRespuestaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnuncioRespuestaCountAggregateOutputType> : number>;
    aggregate<T extends AnuncioRespuestaAggregateArgs>(args: Prisma.Subset<T, AnuncioRespuestaAggregateArgs>): Prisma.PrismaPromise<GetAnuncioRespuestaAggregateType<T>>;
    groupBy<T extends AnuncioRespuestaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnuncioRespuestaGroupByArgs['orderBy'];
    } : {
        orderBy?: AnuncioRespuestaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnuncioRespuestaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnuncioRespuestaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AnuncioRespuestaFieldRefs;
}
export interface Prisma__AnuncioRespuestaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    anuncio<T extends Prisma.AnuncioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AnuncioDefaultArgs<ExtArgs>>): Prisma.Prisma__AnuncioClient<runtime.Types.Result.GetResult<Prisma.$AnuncioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    usuario<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AnuncioRespuestaFieldRefs {
    readonly id: Prisma.FieldRef<"AnuncioRespuesta", 'Int'>;
    readonly anuncioId: Prisma.FieldRef<"AnuncioRespuesta", 'Int'>;
    readonly usuarioId: Prisma.FieldRef<"AnuncioRespuesta", 'Int'>;
    readonly respuesta: Prisma.FieldRef<"AnuncioRespuesta", 'String'>;
    readonly leidoAt: Prisma.FieldRef<"AnuncioRespuesta", 'DateTime'>;
}
export type AnuncioRespuestaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioRespuestaSelect<ExtArgs> | null;
    omit?: Prisma.AnuncioRespuestaOmit<ExtArgs> | null;
    include?: Prisma.AnuncioRespuestaInclude<ExtArgs> | null;
    where: Prisma.AnuncioRespuestaWhereUniqueInput;
};
export type AnuncioRespuestaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioRespuestaSelect<ExtArgs> | null;
    omit?: Prisma.AnuncioRespuestaOmit<ExtArgs> | null;
    include?: Prisma.AnuncioRespuestaInclude<ExtArgs> | null;
    where: Prisma.AnuncioRespuestaWhereUniqueInput;
};
export type AnuncioRespuestaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AnuncioRespuestaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AnuncioRespuestaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AnuncioRespuestaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioRespuestaSelect<ExtArgs> | null;
    omit?: Prisma.AnuncioRespuestaOmit<ExtArgs> | null;
    include?: Prisma.AnuncioRespuestaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnuncioRespuestaCreateInput, Prisma.AnuncioRespuestaUncheckedCreateInput>;
};
export type AnuncioRespuestaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AnuncioRespuestaCreateManyInput | Prisma.AnuncioRespuestaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnuncioRespuestaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioRespuestaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnuncioRespuestaOmit<ExtArgs> | null;
    data: Prisma.AnuncioRespuestaCreateManyInput | Prisma.AnuncioRespuestaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AnuncioRespuestaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AnuncioRespuestaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioRespuestaSelect<ExtArgs> | null;
    omit?: Prisma.AnuncioRespuestaOmit<ExtArgs> | null;
    include?: Prisma.AnuncioRespuestaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnuncioRespuestaUpdateInput, Prisma.AnuncioRespuestaUncheckedUpdateInput>;
    where: Prisma.AnuncioRespuestaWhereUniqueInput;
};
export type AnuncioRespuestaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AnuncioRespuestaUpdateManyMutationInput, Prisma.AnuncioRespuestaUncheckedUpdateManyInput>;
    where?: Prisma.AnuncioRespuestaWhereInput;
    limit?: number;
};
export type AnuncioRespuestaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioRespuestaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnuncioRespuestaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnuncioRespuestaUpdateManyMutationInput, Prisma.AnuncioRespuestaUncheckedUpdateManyInput>;
    where?: Prisma.AnuncioRespuestaWhereInput;
    limit?: number;
    include?: Prisma.AnuncioRespuestaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AnuncioRespuestaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioRespuestaSelect<ExtArgs> | null;
    omit?: Prisma.AnuncioRespuestaOmit<ExtArgs> | null;
    include?: Prisma.AnuncioRespuestaInclude<ExtArgs> | null;
    where: Prisma.AnuncioRespuestaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnuncioRespuestaCreateInput, Prisma.AnuncioRespuestaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AnuncioRespuestaUpdateInput, Prisma.AnuncioRespuestaUncheckedUpdateInput>;
};
export type AnuncioRespuestaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioRespuestaSelect<ExtArgs> | null;
    omit?: Prisma.AnuncioRespuestaOmit<ExtArgs> | null;
    include?: Prisma.AnuncioRespuestaInclude<ExtArgs> | null;
    where: Prisma.AnuncioRespuestaWhereUniqueInput;
};
export type AnuncioRespuestaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnuncioRespuestaWhereInput;
    limit?: number;
};
export type AnuncioRespuestaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnuncioRespuestaSelect<ExtArgs> | null;
    omit?: Prisma.AnuncioRespuestaOmit<ExtArgs> | null;
    include?: Prisma.AnuncioRespuestaInclude<ExtArgs> | null;
};
