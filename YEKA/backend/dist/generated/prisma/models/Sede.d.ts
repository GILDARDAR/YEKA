import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type SedeModel = runtime.Types.Result.DefaultSelection<Prisma.$SedePayload>;
export type AggregateSede = {
    _count: SedeCountAggregateOutputType | null;
    _avg: SedeAvgAggregateOutputType | null;
    _sum: SedeSumAggregateOutputType | null;
    _min: SedeMinAggregateOutputType | null;
    _max: SedeMaxAggregateOutputType | null;
};
export type SedeAvgAggregateOutputType = {
    id: number | null;
    capacidadDiariaMax: number | null;
};
export type SedeSumAggregateOutputType = {
    id: number | null;
    capacidadDiariaMax: number | null;
};
export type SedeMinAggregateOutputType = {
    id: number | null;
    codigoSede: string | null;
    nombre: string | null;
    direccion: string | null;
    capacidadDiariaMax: number | null;
    activa: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SedeMaxAggregateOutputType = {
    id: number | null;
    codigoSede: string | null;
    nombre: string | null;
    direccion: string | null;
    capacidadDiariaMax: number | null;
    activa: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SedeCountAggregateOutputType = {
    id: number;
    codigoSede: number;
    nombre: number;
    direccion: number;
    capacidadDiariaMax: number;
    activa: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SedeAvgAggregateInputType = {
    id?: true;
    capacidadDiariaMax?: true;
};
export type SedeSumAggregateInputType = {
    id?: true;
    capacidadDiariaMax?: true;
};
export type SedeMinAggregateInputType = {
    id?: true;
    codigoSede?: true;
    nombre?: true;
    direccion?: true;
    capacidadDiariaMax?: true;
    activa?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SedeMaxAggregateInputType = {
    id?: true;
    codigoSede?: true;
    nombre?: true;
    direccion?: true;
    capacidadDiariaMax?: true;
    activa?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SedeCountAggregateInputType = {
    id?: true;
    codigoSede?: true;
    nombre?: true;
    direccion?: true;
    capacidadDiariaMax?: true;
    activa?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SedeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SedeWhereInput;
    orderBy?: Prisma.SedeOrderByWithRelationInput | Prisma.SedeOrderByWithRelationInput[];
    cursor?: Prisma.SedeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SedeCountAggregateInputType;
    _avg?: SedeAvgAggregateInputType;
    _sum?: SedeSumAggregateInputType;
    _min?: SedeMinAggregateInputType;
    _max?: SedeMaxAggregateInputType;
};
export type GetSedeAggregateType<T extends SedeAggregateArgs> = {
    [P in keyof T & keyof AggregateSede]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSede[P]> : Prisma.GetScalarType<T[P], AggregateSede[P]>;
};
export type SedeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SedeWhereInput;
    orderBy?: Prisma.SedeOrderByWithAggregationInput | Prisma.SedeOrderByWithAggregationInput[];
    by: Prisma.SedeScalarFieldEnum[] | Prisma.SedeScalarFieldEnum;
    having?: Prisma.SedeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SedeCountAggregateInputType | true;
    _avg?: SedeAvgAggregateInputType;
    _sum?: SedeSumAggregateInputType;
    _min?: SedeMinAggregateInputType;
    _max?: SedeMaxAggregateInputType;
};
export type SedeGroupByOutputType = {
    id: number;
    codigoSede: string;
    nombre: string;
    direccion: string | null;
    capacidadDiariaMax: number;
    activa: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: SedeCountAggregateOutputType | null;
    _avg: SedeAvgAggregateOutputType | null;
    _sum: SedeSumAggregateOutputType | null;
    _min: SedeMinAggregateOutputType | null;
    _max: SedeMaxAggregateOutputType | null;
};
export type GetSedeGroupByPayload<T extends SedeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SedeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SedeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SedeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SedeGroupByOutputType[P]>;
}>>;
export type SedeWhereInput = {
    AND?: Prisma.SedeWhereInput | Prisma.SedeWhereInput[];
    OR?: Prisma.SedeWhereInput[];
    NOT?: Prisma.SedeWhereInput | Prisma.SedeWhereInput[];
    id?: Prisma.IntFilter<"Sede"> | number;
    codigoSede?: Prisma.StringFilter<"Sede"> | string;
    nombre?: Prisma.StringFilter<"Sede"> | string;
    direccion?: Prisma.StringNullableFilter<"Sede"> | string | null;
    capacidadDiariaMax?: Prisma.IntFilter<"Sede"> | number;
    activa?: Prisma.BoolFilter<"Sede"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Sede"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Sede"> | Date | string;
    clientes?: Prisma.ClienteListRelationFilter;
    facturas?: Prisma.FacturaListRelationFilter;
    inventarios?: Prisma.InventarioListRelationFilter;
    usuarios?: Prisma.UsuarioListRelationFilter;
    anuncios?: Prisma.AnuncioListRelationFilter;
};
export type SedeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    codigoSede?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    capacidadDiariaMax?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    clientes?: Prisma.ClienteOrderByRelationAggregateInput;
    facturas?: Prisma.FacturaOrderByRelationAggregateInput;
    inventarios?: Prisma.InventarioOrderByRelationAggregateInput;
    usuarios?: Prisma.UsuarioOrderByRelationAggregateInput;
    anuncios?: Prisma.AnuncioOrderByRelationAggregateInput;
};
export type SedeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    codigoSede?: string;
    AND?: Prisma.SedeWhereInput | Prisma.SedeWhereInput[];
    OR?: Prisma.SedeWhereInput[];
    NOT?: Prisma.SedeWhereInput | Prisma.SedeWhereInput[];
    nombre?: Prisma.StringFilter<"Sede"> | string;
    direccion?: Prisma.StringNullableFilter<"Sede"> | string | null;
    capacidadDiariaMax?: Prisma.IntFilter<"Sede"> | number;
    activa?: Prisma.BoolFilter<"Sede"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Sede"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Sede"> | Date | string;
    clientes?: Prisma.ClienteListRelationFilter;
    facturas?: Prisma.FacturaListRelationFilter;
    inventarios?: Prisma.InventarioListRelationFilter;
    usuarios?: Prisma.UsuarioListRelationFilter;
    anuncios?: Prisma.AnuncioListRelationFilter;
}, "id" | "codigoSede">;
export type SedeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    codigoSede?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    capacidadDiariaMax?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SedeCountOrderByAggregateInput;
    _avg?: Prisma.SedeAvgOrderByAggregateInput;
    _max?: Prisma.SedeMaxOrderByAggregateInput;
    _min?: Prisma.SedeMinOrderByAggregateInput;
    _sum?: Prisma.SedeSumOrderByAggregateInput;
};
export type SedeScalarWhereWithAggregatesInput = {
    AND?: Prisma.SedeScalarWhereWithAggregatesInput | Prisma.SedeScalarWhereWithAggregatesInput[];
    OR?: Prisma.SedeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SedeScalarWhereWithAggregatesInput | Prisma.SedeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Sede"> | number;
    codigoSede?: Prisma.StringWithAggregatesFilter<"Sede"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"Sede"> | string;
    direccion?: Prisma.StringNullableWithAggregatesFilter<"Sede"> | string | null;
    capacidadDiariaMax?: Prisma.IntWithAggregatesFilter<"Sede"> | number;
    activa?: Prisma.BoolWithAggregatesFilter<"Sede"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Sede"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Sede"> | Date | string;
};
export type SedeCreateInput = {
    codigoSede: string;
    nombre: string;
    direccion?: string | null;
    capacidadDiariaMax?: number;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientes?: Prisma.ClienteCreateNestedManyWithoutSedeOrigenInput;
    facturas?: Prisma.FacturaCreateNestedManyWithoutSedeInput;
    inventarios?: Prisma.InventarioCreateNestedManyWithoutSedeInput;
    usuarios?: Prisma.UsuarioCreateNestedManyWithoutSedeInput;
    anuncios?: Prisma.AnuncioCreateNestedManyWithoutSedeInput;
};
export type SedeUncheckedCreateInput = {
    id?: number;
    codigoSede: string;
    nombre: string;
    direccion?: string | null;
    capacidadDiariaMax?: number;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientes?: Prisma.ClienteUncheckedCreateNestedManyWithoutSedeOrigenInput;
    facturas?: Prisma.FacturaUncheckedCreateNestedManyWithoutSedeInput;
    inventarios?: Prisma.InventarioUncheckedCreateNestedManyWithoutSedeInput;
    usuarios?: Prisma.UsuarioUncheckedCreateNestedManyWithoutSedeInput;
    anuncios?: Prisma.AnuncioUncheckedCreateNestedManyWithoutSedeInput;
};
export type SedeUpdateInput = {
    codigoSede?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidadDiariaMax?: Prisma.IntFieldUpdateOperationsInput | number;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientes?: Prisma.ClienteUpdateManyWithoutSedeOrigenNestedInput;
    facturas?: Prisma.FacturaUpdateManyWithoutSedeNestedInput;
    inventarios?: Prisma.InventarioUpdateManyWithoutSedeNestedInput;
    usuarios?: Prisma.UsuarioUpdateManyWithoutSedeNestedInput;
    anuncios?: Prisma.AnuncioUpdateManyWithoutSedeNestedInput;
};
export type SedeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    codigoSede?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidadDiariaMax?: Prisma.IntFieldUpdateOperationsInput | number;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientes?: Prisma.ClienteUncheckedUpdateManyWithoutSedeOrigenNestedInput;
    facturas?: Prisma.FacturaUncheckedUpdateManyWithoutSedeNestedInput;
    inventarios?: Prisma.InventarioUncheckedUpdateManyWithoutSedeNestedInput;
    usuarios?: Prisma.UsuarioUncheckedUpdateManyWithoutSedeNestedInput;
    anuncios?: Prisma.AnuncioUncheckedUpdateManyWithoutSedeNestedInput;
};
export type SedeCreateManyInput = {
    id?: number;
    codigoSede: string;
    nombre: string;
    direccion?: string | null;
    capacidadDiariaMax?: number;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SedeUpdateManyMutationInput = {
    codigoSede?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidadDiariaMax?: Prisma.IntFieldUpdateOperationsInput | number;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SedeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    codigoSede?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidadDiariaMax?: Prisma.IntFieldUpdateOperationsInput | number;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SedeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigoSede?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    capacidadDiariaMax?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SedeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    capacidadDiariaMax?: Prisma.SortOrder;
};
export type SedeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigoSede?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    capacidadDiariaMax?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SedeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigoSede?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    capacidadDiariaMax?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SedeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    capacidadDiariaMax?: Prisma.SortOrder;
};
export type SedeScalarRelationFilter = {
    is?: Prisma.SedeWhereInput;
    isNot?: Prisma.SedeWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type SedeCreateNestedOneWithoutUsuariosInput = {
    create?: Prisma.XOR<Prisma.SedeCreateWithoutUsuariosInput, Prisma.SedeUncheckedCreateWithoutUsuariosInput>;
    connectOrCreate?: Prisma.SedeCreateOrConnectWithoutUsuariosInput;
    connect?: Prisma.SedeWhereUniqueInput;
};
export type SedeUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: Prisma.XOR<Prisma.SedeCreateWithoutUsuariosInput, Prisma.SedeUncheckedCreateWithoutUsuariosInput>;
    connectOrCreate?: Prisma.SedeCreateOrConnectWithoutUsuariosInput;
    upsert?: Prisma.SedeUpsertWithoutUsuariosInput;
    connect?: Prisma.SedeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SedeUpdateToOneWithWhereWithoutUsuariosInput, Prisma.SedeUpdateWithoutUsuariosInput>, Prisma.SedeUncheckedUpdateWithoutUsuariosInput>;
};
export type SedeCreateNestedOneWithoutClientesInput = {
    create?: Prisma.XOR<Prisma.SedeCreateWithoutClientesInput, Prisma.SedeUncheckedCreateWithoutClientesInput>;
    connectOrCreate?: Prisma.SedeCreateOrConnectWithoutClientesInput;
    connect?: Prisma.SedeWhereUniqueInput;
};
export type SedeUpdateOneRequiredWithoutClientesNestedInput = {
    create?: Prisma.XOR<Prisma.SedeCreateWithoutClientesInput, Prisma.SedeUncheckedCreateWithoutClientesInput>;
    connectOrCreate?: Prisma.SedeCreateOrConnectWithoutClientesInput;
    upsert?: Prisma.SedeUpsertWithoutClientesInput;
    connect?: Prisma.SedeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SedeUpdateToOneWithWhereWithoutClientesInput, Prisma.SedeUpdateWithoutClientesInput>, Prisma.SedeUncheckedUpdateWithoutClientesInput>;
};
export type SedeCreateNestedOneWithoutFacturasInput = {
    create?: Prisma.XOR<Prisma.SedeCreateWithoutFacturasInput, Prisma.SedeUncheckedCreateWithoutFacturasInput>;
    connectOrCreate?: Prisma.SedeCreateOrConnectWithoutFacturasInput;
    connect?: Prisma.SedeWhereUniqueInput;
};
export type SedeUpdateOneRequiredWithoutFacturasNestedInput = {
    create?: Prisma.XOR<Prisma.SedeCreateWithoutFacturasInput, Prisma.SedeUncheckedCreateWithoutFacturasInput>;
    connectOrCreate?: Prisma.SedeCreateOrConnectWithoutFacturasInput;
    upsert?: Prisma.SedeUpsertWithoutFacturasInput;
    connect?: Prisma.SedeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SedeUpdateToOneWithWhereWithoutFacturasInput, Prisma.SedeUpdateWithoutFacturasInput>, Prisma.SedeUncheckedUpdateWithoutFacturasInput>;
};
export type SedeCreateNestedOneWithoutInventariosInput = {
    create?: Prisma.XOR<Prisma.SedeCreateWithoutInventariosInput, Prisma.SedeUncheckedCreateWithoutInventariosInput>;
    connectOrCreate?: Prisma.SedeCreateOrConnectWithoutInventariosInput;
    connect?: Prisma.SedeWhereUniqueInput;
};
export type SedeUpdateOneRequiredWithoutInventariosNestedInput = {
    create?: Prisma.XOR<Prisma.SedeCreateWithoutInventariosInput, Prisma.SedeUncheckedCreateWithoutInventariosInput>;
    connectOrCreate?: Prisma.SedeCreateOrConnectWithoutInventariosInput;
    upsert?: Prisma.SedeUpsertWithoutInventariosInput;
    connect?: Prisma.SedeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SedeUpdateToOneWithWhereWithoutInventariosInput, Prisma.SedeUpdateWithoutInventariosInput>, Prisma.SedeUncheckedUpdateWithoutInventariosInput>;
};
export type SedeCreateNestedOneWithoutAnunciosInput = {
    create?: Prisma.XOR<Prisma.SedeCreateWithoutAnunciosInput, Prisma.SedeUncheckedCreateWithoutAnunciosInput>;
    connectOrCreate?: Prisma.SedeCreateOrConnectWithoutAnunciosInput;
    connect?: Prisma.SedeWhereUniqueInput;
};
export type SedeUpdateOneRequiredWithoutAnunciosNestedInput = {
    create?: Prisma.XOR<Prisma.SedeCreateWithoutAnunciosInput, Prisma.SedeUncheckedCreateWithoutAnunciosInput>;
    connectOrCreate?: Prisma.SedeCreateOrConnectWithoutAnunciosInput;
    upsert?: Prisma.SedeUpsertWithoutAnunciosInput;
    connect?: Prisma.SedeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SedeUpdateToOneWithWhereWithoutAnunciosInput, Prisma.SedeUpdateWithoutAnunciosInput>, Prisma.SedeUncheckedUpdateWithoutAnunciosInput>;
};
export type SedeCreateWithoutUsuariosInput = {
    codigoSede: string;
    nombre: string;
    direccion?: string | null;
    capacidadDiariaMax?: number;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientes?: Prisma.ClienteCreateNestedManyWithoutSedeOrigenInput;
    facturas?: Prisma.FacturaCreateNestedManyWithoutSedeInput;
    inventarios?: Prisma.InventarioCreateNestedManyWithoutSedeInput;
    anuncios?: Prisma.AnuncioCreateNestedManyWithoutSedeInput;
};
export type SedeUncheckedCreateWithoutUsuariosInput = {
    id?: number;
    codigoSede: string;
    nombre: string;
    direccion?: string | null;
    capacidadDiariaMax?: number;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientes?: Prisma.ClienteUncheckedCreateNestedManyWithoutSedeOrigenInput;
    facturas?: Prisma.FacturaUncheckedCreateNestedManyWithoutSedeInput;
    inventarios?: Prisma.InventarioUncheckedCreateNestedManyWithoutSedeInput;
    anuncios?: Prisma.AnuncioUncheckedCreateNestedManyWithoutSedeInput;
};
export type SedeCreateOrConnectWithoutUsuariosInput = {
    where: Prisma.SedeWhereUniqueInput;
    create: Prisma.XOR<Prisma.SedeCreateWithoutUsuariosInput, Prisma.SedeUncheckedCreateWithoutUsuariosInput>;
};
export type SedeUpsertWithoutUsuariosInput = {
    update: Prisma.XOR<Prisma.SedeUpdateWithoutUsuariosInput, Prisma.SedeUncheckedUpdateWithoutUsuariosInput>;
    create: Prisma.XOR<Prisma.SedeCreateWithoutUsuariosInput, Prisma.SedeUncheckedCreateWithoutUsuariosInput>;
    where?: Prisma.SedeWhereInput;
};
export type SedeUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: Prisma.SedeWhereInput;
    data: Prisma.XOR<Prisma.SedeUpdateWithoutUsuariosInput, Prisma.SedeUncheckedUpdateWithoutUsuariosInput>;
};
export type SedeUpdateWithoutUsuariosInput = {
    codigoSede?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidadDiariaMax?: Prisma.IntFieldUpdateOperationsInput | number;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientes?: Prisma.ClienteUpdateManyWithoutSedeOrigenNestedInput;
    facturas?: Prisma.FacturaUpdateManyWithoutSedeNestedInput;
    inventarios?: Prisma.InventarioUpdateManyWithoutSedeNestedInput;
    anuncios?: Prisma.AnuncioUpdateManyWithoutSedeNestedInput;
};
export type SedeUncheckedUpdateWithoutUsuariosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    codigoSede?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidadDiariaMax?: Prisma.IntFieldUpdateOperationsInput | number;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientes?: Prisma.ClienteUncheckedUpdateManyWithoutSedeOrigenNestedInput;
    facturas?: Prisma.FacturaUncheckedUpdateManyWithoutSedeNestedInput;
    inventarios?: Prisma.InventarioUncheckedUpdateManyWithoutSedeNestedInput;
    anuncios?: Prisma.AnuncioUncheckedUpdateManyWithoutSedeNestedInput;
};
export type SedeCreateWithoutClientesInput = {
    codigoSede: string;
    nombre: string;
    direccion?: string | null;
    capacidadDiariaMax?: number;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    facturas?: Prisma.FacturaCreateNestedManyWithoutSedeInput;
    inventarios?: Prisma.InventarioCreateNestedManyWithoutSedeInput;
    usuarios?: Prisma.UsuarioCreateNestedManyWithoutSedeInput;
    anuncios?: Prisma.AnuncioCreateNestedManyWithoutSedeInput;
};
export type SedeUncheckedCreateWithoutClientesInput = {
    id?: number;
    codigoSede: string;
    nombre: string;
    direccion?: string | null;
    capacidadDiariaMax?: number;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    facturas?: Prisma.FacturaUncheckedCreateNestedManyWithoutSedeInput;
    inventarios?: Prisma.InventarioUncheckedCreateNestedManyWithoutSedeInput;
    usuarios?: Prisma.UsuarioUncheckedCreateNestedManyWithoutSedeInput;
    anuncios?: Prisma.AnuncioUncheckedCreateNestedManyWithoutSedeInput;
};
export type SedeCreateOrConnectWithoutClientesInput = {
    where: Prisma.SedeWhereUniqueInput;
    create: Prisma.XOR<Prisma.SedeCreateWithoutClientesInput, Prisma.SedeUncheckedCreateWithoutClientesInput>;
};
export type SedeUpsertWithoutClientesInput = {
    update: Prisma.XOR<Prisma.SedeUpdateWithoutClientesInput, Prisma.SedeUncheckedUpdateWithoutClientesInput>;
    create: Prisma.XOR<Prisma.SedeCreateWithoutClientesInput, Prisma.SedeUncheckedCreateWithoutClientesInput>;
    where?: Prisma.SedeWhereInput;
};
export type SedeUpdateToOneWithWhereWithoutClientesInput = {
    where?: Prisma.SedeWhereInput;
    data: Prisma.XOR<Prisma.SedeUpdateWithoutClientesInput, Prisma.SedeUncheckedUpdateWithoutClientesInput>;
};
export type SedeUpdateWithoutClientesInput = {
    codigoSede?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidadDiariaMax?: Prisma.IntFieldUpdateOperationsInput | number;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturas?: Prisma.FacturaUpdateManyWithoutSedeNestedInput;
    inventarios?: Prisma.InventarioUpdateManyWithoutSedeNestedInput;
    usuarios?: Prisma.UsuarioUpdateManyWithoutSedeNestedInput;
    anuncios?: Prisma.AnuncioUpdateManyWithoutSedeNestedInput;
};
export type SedeUncheckedUpdateWithoutClientesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    codigoSede?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidadDiariaMax?: Prisma.IntFieldUpdateOperationsInput | number;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturas?: Prisma.FacturaUncheckedUpdateManyWithoutSedeNestedInput;
    inventarios?: Prisma.InventarioUncheckedUpdateManyWithoutSedeNestedInput;
    usuarios?: Prisma.UsuarioUncheckedUpdateManyWithoutSedeNestedInput;
    anuncios?: Prisma.AnuncioUncheckedUpdateManyWithoutSedeNestedInput;
};
export type SedeCreateWithoutFacturasInput = {
    codigoSede: string;
    nombre: string;
    direccion?: string | null;
    capacidadDiariaMax?: number;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientes?: Prisma.ClienteCreateNestedManyWithoutSedeOrigenInput;
    inventarios?: Prisma.InventarioCreateNestedManyWithoutSedeInput;
    usuarios?: Prisma.UsuarioCreateNestedManyWithoutSedeInput;
    anuncios?: Prisma.AnuncioCreateNestedManyWithoutSedeInput;
};
export type SedeUncheckedCreateWithoutFacturasInput = {
    id?: number;
    codigoSede: string;
    nombre: string;
    direccion?: string | null;
    capacidadDiariaMax?: number;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientes?: Prisma.ClienteUncheckedCreateNestedManyWithoutSedeOrigenInput;
    inventarios?: Prisma.InventarioUncheckedCreateNestedManyWithoutSedeInput;
    usuarios?: Prisma.UsuarioUncheckedCreateNestedManyWithoutSedeInput;
    anuncios?: Prisma.AnuncioUncheckedCreateNestedManyWithoutSedeInput;
};
export type SedeCreateOrConnectWithoutFacturasInput = {
    where: Prisma.SedeWhereUniqueInput;
    create: Prisma.XOR<Prisma.SedeCreateWithoutFacturasInput, Prisma.SedeUncheckedCreateWithoutFacturasInput>;
};
export type SedeUpsertWithoutFacturasInput = {
    update: Prisma.XOR<Prisma.SedeUpdateWithoutFacturasInput, Prisma.SedeUncheckedUpdateWithoutFacturasInput>;
    create: Prisma.XOR<Prisma.SedeCreateWithoutFacturasInput, Prisma.SedeUncheckedCreateWithoutFacturasInput>;
    where?: Prisma.SedeWhereInput;
};
export type SedeUpdateToOneWithWhereWithoutFacturasInput = {
    where?: Prisma.SedeWhereInput;
    data: Prisma.XOR<Prisma.SedeUpdateWithoutFacturasInput, Prisma.SedeUncheckedUpdateWithoutFacturasInput>;
};
export type SedeUpdateWithoutFacturasInput = {
    codigoSede?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidadDiariaMax?: Prisma.IntFieldUpdateOperationsInput | number;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientes?: Prisma.ClienteUpdateManyWithoutSedeOrigenNestedInput;
    inventarios?: Prisma.InventarioUpdateManyWithoutSedeNestedInput;
    usuarios?: Prisma.UsuarioUpdateManyWithoutSedeNestedInput;
    anuncios?: Prisma.AnuncioUpdateManyWithoutSedeNestedInput;
};
export type SedeUncheckedUpdateWithoutFacturasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    codigoSede?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidadDiariaMax?: Prisma.IntFieldUpdateOperationsInput | number;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientes?: Prisma.ClienteUncheckedUpdateManyWithoutSedeOrigenNestedInput;
    inventarios?: Prisma.InventarioUncheckedUpdateManyWithoutSedeNestedInput;
    usuarios?: Prisma.UsuarioUncheckedUpdateManyWithoutSedeNestedInput;
    anuncios?: Prisma.AnuncioUncheckedUpdateManyWithoutSedeNestedInput;
};
export type SedeCreateWithoutInventariosInput = {
    codigoSede: string;
    nombre: string;
    direccion?: string | null;
    capacidadDiariaMax?: number;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientes?: Prisma.ClienteCreateNestedManyWithoutSedeOrigenInput;
    facturas?: Prisma.FacturaCreateNestedManyWithoutSedeInput;
    usuarios?: Prisma.UsuarioCreateNestedManyWithoutSedeInput;
    anuncios?: Prisma.AnuncioCreateNestedManyWithoutSedeInput;
};
export type SedeUncheckedCreateWithoutInventariosInput = {
    id?: number;
    codigoSede: string;
    nombre: string;
    direccion?: string | null;
    capacidadDiariaMax?: number;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientes?: Prisma.ClienteUncheckedCreateNestedManyWithoutSedeOrigenInput;
    facturas?: Prisma.FacturaUncheckedCreateNestedManyWithoutSedeInput;
    usuarios?: Prisma.UsuarioUncheckedCreateNestedManyWithoutSedeInput;
    anuncios?: Prisma.AnuncioUncheckedCreateNestedManyWithoutSedeInput;
};
export type SedeCreateOrConnectWithoutInventariosInput = {
    where: Prisma.SedeWhereUniqueInput;
    create: Prisma.XOR<Prisma.SedeCreateWithoutInventariosInput, Prisma.SedeUncheckedCreateWithoutInventariosInput>;
};
export type SedeUpsertWithoutInventariosInput = {
    update: Prisma.XOR<Prisma.SedeUpdateWithoutInventariosInput, Prisma.SedeUncheckedUpdateWithoutInventariosInput>;
    create: Prisma.XOR<Prisma.SedeCreateWithoutInventariosInput, Prisma.SedeUncheckedCreateWithoutInventariosInput>;
    where?: Prisma.SedeWhereInput;
};
export type SedeUpdateToOneWithWhereWithoutInventariosInput = {
    where?: Prisma.SedeWhereInput;
    data: Prisma.XOR<Prisma.SedeUpdateWithoutInventariosInput, Prisma.SedeUncheckedUpdateWithoutInventariosInput>;
};
export type SedeUpdateWithoutInventariosInput = {
    codigoSede?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidadDiariaMax?: Prisma.IntFieldUpdateOperationsInput | number;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientes?: Prisma.ClienteUpdateManyWithoutSedeOrigenNestedInput;
    facturas?: Prisma.FacturaUpdateManyWithoutSedeNestedInput;
    usuarios?: Prisma.UsuarioUpdateManyWithoutSedeNestedInput;
    anuncios?: Prisma.AnuncioUpdateManyWithoutSedeNestedInput;
};
export type SedeUncheckedUpdateWithoutInventariosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    codigoSede?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidadDiariaMax?: Prisma.IntFieldUpdateOperationsInput | number;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientes?: Prisma.ClienteUncheckedUpdateManyWithoutSedeOrigenNestedInput;
    facturas?: Prisma.FacturaUncheckedUpdateManyWithoutSedeNestedInput;
    usuarios?: Prisma.UsuarioUncheckedUpdateManyWithoutSedeNestedInput;
    anuncios?: Prisma.AnuncioUncheckedUpdateManyWithoutSedeNestedInput;
};
export type SedeCreateWithoutAnunciosInput = {
    codigoSede: string;
    nombre: string;
    direccion?: string | null;
    capacidadDiariaMax?: number;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientes?: Prisma.ClienteCreateNestedManyWithoutSedeOrigenInput;
    facturas?: Prisma.FacturaCreateNestedManyWithoutSedeInput;
    inventarios?: Prisma.InventarioCreateNestedManyWithoutSedeInput;
    usuarios?: Prisma.UsuarioCreateNestedManyWithoutSedeInput;
};
export type SedeUncheckedCreateWithoutAnunciosInput = {
    id?: number;
    codigoSede: string;
    nombre: string;
    direccion?: string | null;
    capacidadDiariaMax?: number;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientes?: Prisma.ClienteUncheckedCreateNestedManyWithoutSedeOrigenInput;
    facturas?: Prisma.FacturaUncheckedCreateNestedManyWithoutSedeInput;
    inventarios?: Prisma.InventarioUncheckedCreateNestedManyWithoutSedeInput;
    usuarios?: Prisma.UsuarioUncheckedCreateNestedManyWithoutSedeInput;
};
export type SedeCreateOrConnectWithoutAnunciosInput = {
    where: Prisma.SedeWhereUniqueInput;
    create: Prisma.XOR<Prisma.SedeCreateWithoutAnunciosInput, Prisma.SedeUncheckedCreateWithoutAnunciosInput>;
};
export type SedeUpsertWithoutAnunciosInput = {
    update: Prisma.XOR<Prisma.SedeUpdateWithoutAnunciosInput, Prisma.SedeUncheckedUpdateWithoutAnunciosInput>;
    create: Prisma.XOR<Prisma.SedeCreateWithoutAnunciosInput, Prisma.SedeUncheckedCreateWithoutAnunciosInput>;
    where?: Prisma.SedeWhereInput;
};
export type SedeUpdateToOneWithWhereWithoutAnunciosInput = {
    where?: Prisma.SedeWhereInput;
    data: Prisma.XOR<Prisma.SedeUpdateWithoutAnunciosInput, Prisma.SedeUncheckedUpdateWithoutAnunciosInput>;
};
export type SedeUpdateWithoutAnunciosInput = {
    codigoSede?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidadDiariaMax?: Prisma.IntFieldUpdateOperationsInput | number;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientes?: Prisma.ClienteUpdateManyWithoutSedeOrigenNestedInput;
    facturas?: Prisma.FacturaUpdateManyWithoutSedeNestedInput;
    inventarios?: Prisma.InventarioUpdateManyWithoutSedeNestedInput;
    usuarios?: Prisma.UsuarioUpdateManyWithoutSedeNestedInput;
};
export type SedeUncheckedUpdateWithoutAnunciosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    codigoSede?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidadDiariaMax?: Prisma.IntFieldUpdateOperationsInput | number;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientes?: Prisma.ClienteUncheckedUpdateManyWithoutSedeOrigenNestedInput;
    facturas?: Prisma.FacturaUncheckedUpdateManyWithoutSedeNestedInput;
    inventarios?: Prisma.InventarioUncheckedUpdateManyWithoutSedeNestedInput;
    usuarios?: Prisma.UsuarioUncheckedUpdateManyWithoutSedeNestedInput;
};
export type SedeCountOutputType = {
    clientes: number;
    facturas: number;
    inventarios: number;
    usuarios: number;
    anuncios: number;
};
export type SedeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clientes?: boolean | SedeCountOutputTypeCountClientesArgs;
    facturas?: boolean | SedeCountOutputTypeCountFacturasArgs;
    inventarios?: boolean | SedeCountOutputTypeCountInventariosArgs;
    usuarios?: boolean | SedeCountOutputTypeCountUsuariosArgs;
    anuncios?: boolean | SedeCountOutputTypeCountAnunciosArgs;
};
export type SedeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SedeCountOutputTypeSelect<ExtArgs> | null;
};
export type SedeCountOutputTypeCountClientesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClienteWhereInput;
};
export type SedeCountOutputTypeCountFacturasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FacturaWhereInput;
};
export type SedeCountOutputTypeCountInventariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventarioWhereInput;
};
export type SedeCountOutputTypeCountUsuariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
};
export type SedeCountOutputTypeCountAnunciosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnuncioWhereInput;
};
export type SedeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    codigoSede?: boolean;
    nombre?: boolean;
    direccion?: boolean;
    capacidadDiariaMax?: boolean;
    activa?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clientes?: boolean | Prisma.Sede$clientesArgs<ExtArgs>;
    facturas?: boolean | Prisma.Sede$facturasArgs<ExtArgs>;
    inventarios?: boolean | Prisma.Sede$inventariosArgs<ExtArgs>;
    usuarios?: boolean | Prisma.Sede$usuariosArgs<ExtArgs>;
    anuncios?: boolean | Prisma.Sede$anunciosArgs<ExtArgs>;
    _count?: boolean | Prisma.SedeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sede"]>;
export type SedeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    codigoSede?: boolean;
    nombre?: boolean;
    direccion?: boolean;
    capacidadDiariaMax?: boolean;
    activa?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["sede"]>;
export type SedeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    codigoSede?: boolean;
    nombre?: boolean;
    direccion?: boolean;
    capacidadDiariaMax?: boolean;
    activa?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["sede"]>;
export type SedeSelectScalar = {
    id?: boolean;
    codigoSede?: boolean;
    nombre?: boolean;
    direccion?: boolean;
    capacidadDiariaMax?: boolean;
    activa?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SedeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "codigoSede" | "nombre" | "direccion" | "capacidadDiariaMax" | "activa" | "createdAt" | "updatedAt", ExtArgs["result"]["sede"]>;
export type SedeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clientes?: boolean | Prisma.Sede$clientesArgs<ExtArgs>;
    facturas?: boolean | Prisma.Sede$facturasArgs<ExtArgs>;
    inventarios?: boolean | Prisma.Sede$inventariosArgs<ExtArgs>;
    usuarios?: boolean | Prisma.Sede$usuariosArgs<ExtArgs>;
    anuncios?: boolean | Prisma.Sede$anunciosArgs<ExtArgs>;
    _count?: boolean | Prisma.SedeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SedeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type SedeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $SedePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Sede";
    objects: {
        clientes: Prisma.$ClientePayload<ExtArgs>[];
        facturas: Prisma.$FacturaPayload<ExtArgs>[];
        inventarios: Prisma.$InventarioPayload<ExtArgs>[];
        usuarios: Prisma.$UsuarioPayload<ExtArgs>[];
        anuncios: Prisma.$AnuncioPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        codigoSede: string;
        nombre: string;
        direccion: string | null;
        capacidadDiariaMax: number;
        activa: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["sede"]>;
    composites: {};
};
export type SedeGetPayload<S extends boolean | null | undefined | SedeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SedePayload, S>;
export type SedeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SedeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SedeCountAggregateInputType | true;
};
export interface SedeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Sede'];
        meta: {
            name: 'Sede';
        };
    };
    findUnique<T extends SedeFindUniqueArgs>(args: Prisma.SelectSubset<T, SedeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SedeClient<runtime.Types.Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SedeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SedeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SedeClient<runtime.Types.Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SedeFindFirstArgs>(args?: Prisma.SelectSubset<T, SedeFindFirstArgs<ExtArgs>>): Prisma.Prisma__SedeClient<runtime.Types.Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SedeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SedeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SedeClient<runtime.Types.Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SedeFindManyArgs>(args?: Prisma.SelectSubset<T, SedeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SedeCreateArgs>(args: Prisma.SelectSubset<T, SedeCreateArgs<ExtArgs>>): Prisma.Prisma__SedeClient<runtime.Types.Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SedeCreateManyArgs>(args?: Prisma.SelectSubset<T, SedeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SedeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SedeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SedeDeleteArgs>(args: Prisma.SelectSubset<T, SedeDeleteArgs<ExtArgs>>): Prisma.Prisma__SedeClient<runtime.Types.Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SedeUpdateArgs>(args: Prisma.SelectSubset<T, SedeUpdateArgs<ExtArgs>>): Prisma.Prisma__SedeClient<runtime.Types.Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SedeDeleteManyArgs>(args?: Prisma.SelectSubset<T, SedeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SedeUpdateManyArgs>(args: Prisma.SelectSubset<T, SedeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SedeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SedeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SedeUpsertArgs>(args: Prisma.SelectSubset<T, SedeUpsertArgs<ExtArgs>>): Prisma.Prisma__SedeClient<runtime.Types.Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SedeCountArgs>(args?: Prisma.Subset<T, SedeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SedeCountAggregateOutputType> : number>;
    aggregate<T extends SedeAggregateArgs>(args: Prisma.Subset<T, SedeAggregateArgs>): Prisma.PrismaPromise<GetSedeAggregateType<T>>;
    groupBy<T extends SedeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SedeGroupByArgs['orderBy'];
    } : {
        orderBy?: SedeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SedeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSedeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SedeFieldRefs;
}
export interface Prisma__SedeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    clientes<T extends Prisma.Sede$clientesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sede$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    facturas<T extends Prisma.Sede$facturasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sede$facturasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    inventarios<T extends Prisma.Sede$inventariosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sede$inventariosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    usuarios<T extends Prisma.Sede$usuariosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sede$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    anuncios<T extends Prisma.Sede$anunciosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sede$anunciosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnuncioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SedeFieldRefs {
    readonly id: Prisma.FieldRef<"Sede", 'Int'>;
    readonly codigoSede: Prisma.FieldRef<"Sede", 'String'>;
    readonly nombre: Prisma.FieldRef<"Sede", 'String'>;
    readonly direccion: Prisma.FieldRef<"Sede", 'String'>;
    readonly capacidadDiariaMax: Prisma.FieldRef<"Sede", 'Int'>;
    readonly activa: Prisma.FieldRef<"Sede", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Sede", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Sede", 'DateTime'>;
}
export type SedeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SedeSelect<ExtArgs> | null;
    omit?: Prisma.SedeOmit<ExtArgs> | null;
    include?: Prisma.SedeInclude<ExtArgs> | null;
    where: Prisma.SedeWhereUniqueInput;
};
export type SedeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SedeSelect<ExtArgs> | null;
    omit?: Prisma.SedeOmit<ExtArgs> | null;
    include?: Prisma.SedeInclude<ExtArgs> | null;
    where: Prisma.SedeWhereUniqueInput;
};
export type SedeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SedeSelect<ExtArgs> | null;
    omit?: Prisma.SedeOmit<ExtArgs> | null;
    include?: Prisma.SedeInclude<ExtArgs> | null;
    where?: Prisma.SedeWhereInput;
    orderBy?: Prisma.SedeOrderByWithRelationInput | Prisma.SedeOrderByWithRelationInput[];
    cursor?: Prisma.SedeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SedeScalarFieldEnum | Prisma.SedeScalarFieldEnum[];
};
export type SedeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SedeSelect<ExtArgs> | null;
    omit?: Prisma.SedeOmit<ExtArgs> | null;
    include?: Prisma.SedeInclude<ExtArgs> | null;
    where?: Prisma.SedeWhereInput;
    orderBy?: Prisma.SedeOrderByWithRelationInput | Prisma.SedeOrderByWithRelationInput[];
    cursor?: Prisma.SedeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SedeScalarFieldEnum | Prisma.SedeScalarFieldEnum[];
};
export type SedeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SedeSelect<ExtArgs> | null;
    omit?: Prisma.SedeOmit<ExtArgs> | null;
    include?: Prisma.SedeInclude<ExtArgs> | null;
    where?: Prisma.SedeWhereInput;
    orderBy?: Prisma.SedeOrderByWithRelationInput | Prisma.SedeOrderByWithRelationInput[];
    cursor?: Prisma.SedeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SedeScalarFieldEnum | Prisma.SedeScalarFieldEnum[];
};
export type SedeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SedeSelect<ExtArgs> | null;
    omit?: Prisma.SedeOmit<ExtArgs> | null;
    include?: Prisma.SedeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SedeCreateInput, Prisma.SedeUncheckedCreateInput>;
};
export type SedeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SedeCreateManyInput | Prisma.SedeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SedeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SedeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SedeOmit<ExtArgs> | null;
    data: Prisma.SedeCreateManyInput | Prisma.SedeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SedeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SedeSelect<ExtArgs> | null;
    omit?: Prisma.SedeOmit<ExtArgs> | null;
    include?: Prisma.SedeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SedeUpdateInput, Prisma.SedeUncheckedUpdateInput>;
    where: Prisma.SedeWhereUniqueInput;
};
export type SedeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SedeUpdateManyMutationInput, Prisma.SedeUncheckedUpdateManyInput>;
    where?: Prisma.SedeWhereInput;
    limit?: number;
};
export type SedeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SedeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SedeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SedeUpdateManyMutationInput, Prisma.SedeUncheckedUpdateManyInput>;
    where?: Prisma.SedeWhereInput;
    limit?: number;
};
export type SedeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SedeSelect<ExtArgs> | null;
    omit?: Prisma.SedeOmit<ExtArgs> | null;
    include?: Prisma.SedeInclude<ExtArgs> | null;
    where: Prisma.SedeWhereUniqueInput;
    create: Prisma.XOR<Prisma.SedeCreateInput, Prisma.SedeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SedeUpdateInput, Prisma.SedeUncheckedUpdateInput>;
};
export type SedeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SedeSelect<ExtArgs> | null;
    omit?: Prisma.SedeOmit<ExtArgs> | null;
    include?: Prisma.SedeInclude<ExtArgs> | null;
    where: Prisma.SedeWhereUniqueInput;
};
export type SedeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SedeWhereInput;
    limit?: number;
};
export type Sede$clientesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    cursor?: Prisma.ClienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClienteScalarFieldEnum | Prisma.ClienteScalarFieldEnum[];
};
export type Sede$facturasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacturaSelect<ExtArgs> | null;
    omit?: Prisma.FacturaOmit<ExtArgs> | null;
    include?: Prisma.FacturaInclude<ExtArgs> | null;
    where?: Prisma.FacturaWhereInput;
    orderBy?: Prisma.FacturaOrderByWithRelationInput | Prisma.FacturaOrderByWithRelationInput[];
    cursor?: Prisma.FacturaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FacturaScalarFieldEnum | Prisma.FacturaScalarFieldEnum[];
};
export type Sede$inventariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
    where?: Prisma.InventarioWhereInput;
    orderBy?: Prisma.InventarioOrderByWithRelationInput | Prisma.InventarioOrderByWithRelationInput[];
    cursor?: Prisma.InventarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventarioScalarFieldEnum | Prisma.InventarioScalarFieldEnum[];
};
export type Sede$usuariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type Sede$anunciosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SedeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SedeSelect<ExtArgs> | null;
    omit?: Prisma.SedeOmit<ExtArgs> | null;
    include?: Prisma.SedeInclude<ExtArgs> | null;
};
