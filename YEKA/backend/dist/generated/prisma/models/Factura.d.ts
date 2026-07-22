import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type FacturaModel = runtime.Types.Result.DefaultSelection<Prisma.$FacturaPayload>;
export type AggregateFactura = {
    _count: FacturaCountAggregateOutputType | null;
    _avg: FacturaAvgAggregateOutputType | null;
    _sum: FacturaSumAggregateOutputType | null;
    _min: FacturaMinAggregateOutputType | null;
    _max: FacturaMaxAggregateOutputType | null;
};
export type FacturaAvgAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
    usuarioCreadorId: number | null;
    sedeId: number | null;
    subtotal: runtime.Decimal | null;
    total: runtime.Decimal | null;
};
export type FacturaSumAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
    usuarioCreadorId: number | null;
    sedeId: number | null;
    subtotal: runtime.Decimal | null;
    total: runtime.Decimal | null;
};
export type FacturaMinAggregateOutputType = {
    id: number | null;
    numero: string | null;
    clienteId: number | null;
    usuarioCreadorId: number | null;
    sedeId: number | null;
    subtotal: runtime.Decimal | null;
    total: runtime.Decimal | null;
    estadoPago: $Enums.EstadoPago | null;
    notas: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FacturaMaxAggregateOutputType = {
    id: number | null;
    numero: string | null;
    clienteId: number | null;
    usuarioCreadorId: number | null;
    sedeId: number | null;
    subtotal: runtime.Decimal | null;
    total: runtime.Decimal | null;
    estadoPago: $Enums.EstadoPago | null;
    notas: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FacturaCountAggregateOutputType = {
    id: number;
    numero: number;
    clienteId: number;
    usuarioCreadorId: number;
    sedeId: number;
    subtotal: number;
    impuestosJson: number;
    total: number;
    estadoPago: number;
    notas: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FacturaAvgAggregateInputType = {
    id?: true;
    clienteId?: true;
    usuarioCreadorId?: true;
    sedeId?: true;
    subtotal?: true;
    total?: true;
};
export type FacturaSumAggregateInputType = {
    id?: true;
    clienteId?: true;
    usuarioCreadorId?: true;
    sedeId?: true;
    subtotal?: true;
    total?: true;
};
export type FacturaMinAggregateInputType = {
    id?: true;
    numero?: true;
    clienteId?: true;
    usuarioCreadorId?: true;
    sedeId?: true;
    subtotal?: true;
    total?: true;
    estadoPago?: true;
    notas?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FacturaMaxAggregateInputType = {
    id?: true;
    numero?: true;
    clienteId?: true;
    usuarioCreadorId?: true;
    sedeId?: true;
    subtotal?: true;
    total?: true;
    estadoPago?: true;
    notas?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FacturaCountAggregateInputType = {
    id?: true;
    numero?: true;
    clienteId?: true;
    usuarioCreadorId?: true;
    sedeId?: true;
    subtotal?: true;
    impuestosJson?: true;
    total?: true;
    estadoPago?: true;
    notas?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FacturaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FacturaWhereInput;
    orderBy?: Prisma.FacturaOrderByWithRelationInput | Prisma.FacturaOrderByWithRelationInput[];
    cursor?: Prisma.FacturaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FacturaCountAggregateInputType;
    _avg?: FacturaAvgAggregateInputType;
    _sum?: FacturaSumAggregateInputType;
    _min?: FacturaMinAggregateInputType;
    _max?: FacturaMaxAggregateInputType;
};
export type GetFacturaAggregateType<T extends FacturaAggregateArgs> = {
    [P in keyof T & keyof AggregateFactura]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFactura[P]> : Prisma.GetScalarType<T[P], AggregateFactura[P]>;
};
export type FacturaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FacturaWhereInput;
    orderBy?: Prisma.FacturaOrderByWithAggregationInput | Prisma.FacturaOrderByWithAggregationInput[];
    by: Prisma.FacturaScalarFieldEnum[] | Prisma.FacturaScalarFieldEnum;
    having?: Prisma.FacturaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FacturaCountAggregateInputType | true;
    _avg?: FacturaAvgAggregateInputType;
    _sum?: FacturaSumAggregateInputType;
    _min?: FacturaMinAggregateInputType;
    _max?: FacturaMaxAggregateInputType;
};
export type FacturaGroupByOutputType = {
    id: number;
    numero: string;
    clienteId: number | null;
    usuarioCreadorId: number;
    sedeId: number;
    subtotal: runtime.Decimal;
    impuestosJson: runtime.JsonValue | null;
    total: runtime.Decimal;
    estadoPago: $Enums.EstadoPago;
    notas: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: FacturaCountAggregateOutputType | null;
    _avg: FacturaAvgAggregateOutputType | null;
    _sum: FacturaSumAggregateOutputType | null;
    _min: FacturaMinAggregateOutputType | null;
    _max: FacturaMaxAggregateOutputType | null;
};
export type GetFacturaGroupByPayload<T extends FacturaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FacturaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FacturaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FacturaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FacturaGroupByOutputType[P]>;
}>>;
export type FacturaWhereInput = {
    AND?: Prisma.FacturaWhereInput | Prisma.FacturaWhereInput[];
    OR?: Prisma.FacturaWhereInput[];
    NOT?: Prisma.FacturaWhereInput | Prisma.FacturaWhereInput[];
    id?: Prisma.IntFilter<"Factura"> | number;
    numero?: Prisma.StringFilter<"Factura"> | string;
    clienteId?: Prisma.IntNullableFilter<"Factura"> | number | null;
    usuarioCreadorId?: Prisma.IntFilter<"Factura"> | number;
    sedeId?: Prisma.IntFilter<"Factura"> | number;
    subtotal?: Prisma.DecimalFilter<"Factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.JsonNullableFilter<"Factura">;
    total?: Prisma.DecimalFilter<"Factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: Prisma.EnumEstadoPagoFilter<"Factura"> | $Enums.EstadoPago;
    notas?: Prisma.StringNullableFilter<"Factura"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Factura"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Factura"> | Date | string;
    abonos?: Prisma.AbonoListRelationFilter;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.ClienteWhereInput> | null;
    sede?: Prisma.XOR<Prisma.SedeScalarRelationFilter, Prisma.SedeWhereInput>;
    prendas?: Prisma.PrendaListRelationFilter;
};
export type FacturaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrderInput | Prisma.SortOrder;
    usuarioCreadorId?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    impuestosJson?: Prisma.SortOrderInput | Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estadoPago?: Prisma.SortOrder;
    notas?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    abonos?: Prisma.AbonoOrderByRelationAggregateInput;
    cliente?: Prisma.ClienteOrderByWithRelationInput;
    sede?: Prisma.SedeOrderByWithRelationInput;
    prendas?: Prisma.PrendaOrderByRelationAggregateInput;
};
export type FacturaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    numero?: string;
    AND?: Prisma.FacturaWhereInput | Prisma.FacturaWhereInput[];
    OR?: Prisma.FacturaWhereInput[];
    NOT?: Prisma.FacturaWhereInput | Prisma.FacturaWhereInput[];
    clienteId?: Prisma.IntNullableFilter<"Factura"> | number | null;
    usuarioCreadorId?: Prisma.IntFilter<"Factura"> | number;
    sedeId?: Prisma.IntFilter<"Factura"> | number;
    subtotal?: Prisma.DecimalFilter<"Factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.JsonNullableFilter<"Factura">;
    total?: Prisma.DecimalFilter<"Factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: Prisma.EnumEstadoPagoFilter<"Factura"> | $Enums.EstadoPago;
    notas?: Prisma.StringNullableFilter<"Factura"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Factura"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Factura"> | Date | string;
    abonos?: Prisma.AbonoListRelationFilter;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.ClienteWhereInput> | null;
    sede?: Prisma.XOR<Prisma.SedeScalarRelationFilter, Prisma.SedeWhereInput>;
    prendas?: Prisma.PrendaListRelationFilter;
}, "id" | "numero">;
export type FacturaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrderInput | Prisma.SortOrder;
    usuarioCreadorId?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    impuestosJson?: Prisma.SortOrderInput | Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estadoPago?: Prisma.SortOrder;
    notas?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FacturaCountOrderByAggregateInput;
    _avg?: Prisma.FacturaAvgOrderByAggregateInput;
    _max?: Prisma.FacturaMaxOrderByAggregateInput;
    _min?: Prisma.FacturaMinOrderByAggregateInput;
    _sum?: Prisma.FacturaSumOrderByAggregateInput;
};
export type FacturaScalarWhereWithAggregatesInput = {
    AND?: Prisma.FacturaScalarWhereWithAggregatesInput | Prisma.FacturaScalarWhereWithAggregatesInput[];
    OR?: Prisma.FacturaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FacturaScalarWhereWithAggregatesInput | Prisma.FacturaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Factura"> | number;
    numero?: Prisma.StringWithAggregatesFilter<"Factura"> | string;
    clienteId?: Prisma.IntNullableWithAggregatesFilter<"Factura"> | number | null;
    usuarioCreadorId?: Prisma.IntWithAggregatesFilter<"Factura"> | number;
    sedeId?: Prisma.IntWithAggregatesFilter<"Factura"> | number;
    subtotal?: Prisma.DecimalWithAggregatesFilter<"Factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.JsonNullableWithAggregatesFilter<"Factura">;
    total?: Prisma.DecimalWithAggregatesFilter<"Factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: Prisma.EnumEstadoPagoWithAggregatesFilter<"Factura"> | $Enums.EstadoPago;
    notas?: Prisma.StringNullableWithAggregatesFilter<"Factura"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Factura"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Factura"> | Date | string;
};
export type FacturaCreateInput = {
    numero: string;
    usuarioCreadorId: number;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: $Enums.EstadoPago;
    notas?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    abonos?: Prisma.AbonoCreateNestedManyWithoutFacturaInput;
    cliente?: Prisma.ClienteCreateNestedOneWithoutFacturasInput;
    sede: Prisma.SedeCreateNestedOneWithoutFacturasInput;
    prendas?: Prisma.PrendaCreateNestedManyWithoutFacturaInput;
};
export type FacturaUncheckedCreateInput = {
    id?: number;
    numero: string;
    clienteId?: number | null;
    usuarioCreadorId: number;
    sedeId: number;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: $Enums.EstadoPago;
    notas?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    abonos?: Prisma.AbonoUncheckedCreateNestedManyWithoutFacturaInput;
    prendas?: Prisma.PrendaUncheckedCreateNestedManyWithoutFacturaInput;
};
export type FacturaUpdateInput = {
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioCreadorId?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    abonos?: Prisma.AbonoUpdateManyWithoutFacturaNestedInput;
    cliente?: Prisma.ClienteUpdateOneWithoutFacturasNestedInput;
    sede?: Prisma.SedeUpdateOneRequiredWithoutFacturasNestedInput;
    prendas?: Prisma.PrendaUpdateManyWithoutFacturaNestedInput;
};
export type FacturaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usuarioCreadorId?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeId?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    abonos?: Prisma.AbonoUncheckedUpdateManyWithoutFacturaNestedInput;
    prendas?: Prisma.PrendaUncheckedUpdateManyWithoutFacturaNestedInput;
};
export type FacturaCreateManyInput = {
    id?: number;
    numero: string;
    clienteId?: number | null;
    usuarioCreadorId: number;
    sedeId: number;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: $Enums.EstadoPago;
    notas?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FacturaUpdateManyMutationInput = {
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioCreadorId?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FacturaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usuarioCreadorId?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeId?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FacturaListRelationFilter = {
    every?: Prisma.FacturaWhereInput;
    some?: Prisma.FacturaWhereInput;
    none?: Prisma.FacturaWhereInput;
};
export type FacturaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FacturaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    usuarioCreadorId?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    impuestosJson?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estadoPago?: Prisma.SortOrder;
    notas?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FacturaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    usuarioCreadorId?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type FacturaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    usuarioCreadorId?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estadoPago?: Prisma.SortOrder;
    notas?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FacturaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    usuarioCreadorId?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estadoPago?: Prisma.SortOrder;
    notas?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FacturaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    usuarioCreadorId?: Prisma.SortOrder;
    sedeId?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type FacturaScalarRelationFilter = {
    is?: Prisma.FacturaWhereInput;
    isNot?: Prisma.FacturaWhereInput;
};
export type FacturaCreateNestedManyWithoutSedeInput = {
    create?: Prisma.XOR<Prisma.FacturaCreateWithoutSedeInput, Prisma.FacturaUncheckedCreateWithoutSedeInput> | Prisma.FacturaCreateWithoutSedeInput[] | Prisma.FacturaUncheckedCreateWithoutSedeInput[];
    connectOrCreate?: Prisma.FacturaCreateOrConnectWithoutSedeInput | Prisma.FacturaCreateOrConnectWithoutSedeInput[];
    createMany?: Prisma.FacturaCreateManySedeInputEnvelope;
    connect?: Prisma.FacturaWhereUniqueInput | Prisma.FacturaWhereUniqueInput[];
};
export type FacturaUncheckedCreateNestedManyWithoutSedeInput = {
    create?: Prisma.XOR<Prisma.FacturaCreateWithoutSedeInput, Prisma.FacturaUncheckedCreateWithoutSedeInput> | Prisma.FacturaCreateWithoutSedeInput[] | Prisma.FacturaUncheckedCreateWithoutSedeInput[];
    connectOrCreate?: Prisma.FacturaCreateOrConnectWithoutSedeInput | Prisma.FacturaCreateOrConnectWithoutSedeInput[];
    createMany?: Prisma.FacturaCreateManySedeInputEnvelope;
    connect?: Prisma.FacturaWhereUniqueInput | Prisma.FacturaWhereUniqueInput[];
};
export type FacturaUpdateManyWithoutSedeNestedInput = {
    create?: Prisma.XOR<Prisma.FacturaCreateWithoutSedeInput, Prisma.FacturaUncheckedCreateWithoutSedeInput> | Prisma.FacturaCreateWithoutSedeInput[] | Prisma.FacturaUncheckedCreateWithoutSedeInput[];
    connectOrCreate?: Prisma.FacturaCreateOrConnectWithoutSedeInput | Prisma.FacturaCreateOrConnectWithoutSedeInput[];
    upsert?: Prisma.FacturaUpsertWithWhereUniqueWithoutSedeInput | Prisma.FacturaUpsertWithWhereUniqueWithoutSedeInput[];
    createMany?: Prisma.FacturaCreateManySedeInputEnvelope;
    set?: Prisma.FacturaWhereUniqueInput | Prisma.FacturaWhereUniqueInput[];
    disconnect?: Prisma.FacturaWhereUniqueInput | Prisma.FacturaWhereUniqueInput[];
    delete?: Prisma.FacturaWhereUniqueInput | Prisma.FacturaWhereUniqueInput[];
    connect?: Prisma.FacturaWhereUniqueInput | Prisma.FacturaWhereUniqueInput[];
    update?: Prisma.FacturaUpdateWithWhereUniqueWithoutSedeInput | Prisma.FacturaUpdateWithWhereUniqueWithoutSedeInput[];
    updateMany?: Prisma.FacturaUpdateManyWithWhereWithoutSedeInput | Prisma.FacturaUpdateManyWithWhereWithoutSedeInput[];
    deleteMany?: Prisma.FacturaScalarWhereInput | Prisma.FacturaScalarWhereInput[];
};
export type FacturaUncheckedUpdateManyWithoutSedeNestedInput = {
    create?: Prisma.XOR<Prisma.FacturaCreateWithoutSedeInput, Prisma.FacturaUncheckedCreateWithoutSedeInput> | Prisma.FacturaCreateWithoutSedeInput[] | Prisma.FacturaUncheckedCreateWithoutSedeInput[];
    connectOrCreate?: Prisma.FacturaCreateOrConnectWithoutSedeInput | Prisma.FacturaCreateOrConnectWithoutSedeInput[];
    upsert?: Prisma.FacturaUpsertWithWhereUniqueWithoutSedeInput | Prisma.FacturaUpsertWithWhereUniqueWithoutSedeInput[];
    createMany?: Prisma.FacturaCreateManySedeInputEnvelope;
    set?: Prisma.FacturaWhereUniqueInput | Prisma.FacturaWhereUniqueInput[];
    disconnect?: Prisma.FacturaWhereUniqueInput | Prisma.FacturaWhereUniqueInput[];
    delete?: Prisma.FacturaWhereUniqueInput | Prisma.FacturaWhereUniqueInput[];
    connect?: Prisma.FacturaWhereUniqueInput | Prisma.FacturaWhereUniqueInput[];
    update?: Prisma.FacturaUpdateWithWhereUniqueWithoutSedeInput | Prisma.FacturaUpdateWithWhereUniqueWithoutSedeInput[];
    updateMany?: Prisma.FacturaUpdateManyWithWhereWithoutSedeInput | Prisma.FacturaUpdateManyWithWhereWithoutSedeInput[];
    deleteMany?: Prisma.FacturaScalarWhereInput | Prisma.FacturaScalarWhereInput[];
};
export type FacturaCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.FacturaCreateWithoutClienteInput, Prisma.FacturaUncheckedCreateWithoutClienteInput> | Prisma.FacturaCreateWithoutClienteInput[] | Prisma.FacturaUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.FacturaCreateOrConnectWithoutClienteInput | Prisma.FacturaCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.FacturaCreateManyClienteInputEnvelope;
    connect?: Prisma.FacturaWhereUniqueInput | Prisma.FacturaWhereUniqueInput[];
};
export type FacturaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.FacturaCreateWithoutClienteInput, Prisma.FacturaUncheckedCreateWithoutClienteInput> | Prisma.FacturaCreateWithoutClienteInput[] | Prisma.FacturaUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.FacturaCreateOrConnectWithoutClienteInput | Prisma.FacturaCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.FacturaCreateManyClienteInputEnvelope;
    connect?: Prisma.FacturaWhereUniqueInput | Prisma.FacturaWhereUniqueInput[];
};
export type FacturaUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.FacturaCreateWithoutClienteInput, Prisma.FacturaUncheckedCreateWithoutClienteInput> | Prisma.FacturaCreateWithoutClienteInput[] | Prisma.FacturaUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.FacturaCreateOrConnectWithoutClienteInput | Prisma.FacturaCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.FacturaUpsertWithWhereUniqueWithoutClienteInput | Prisma.FacturaUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.FacturaCreateManyClienteInputEnvelope;
    set?: Prisma.FacturaWhereUniqueInput | Prisma.FacturaWhereUniqueInput[];
    disconnect?: Prisma.FacturaWhereUniqueInput | Prisma.FacturaWhereUniqueInput[];
    delete?: Prisma.FacturaWhereUniqueInput | Prisma.FacturaWhereUniqueInput[];
    connect?: Prisma.FacturaWhereUniqueInput | Prisma.FacturaWhereUniqueInput[];
    update?: Prisma.FacturaUpdateWithWhereUniqueWithoutClienteInput | Prisma.FacturaUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.FacturaUpdateManyWithWhereWithoutClienteInput | Prisma.FacturaUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.FacturaScalarWhereInput | Prisma.FacturaScalarWhereInput[];
};
export type FacturaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.FacturaCreateWithoutClienteInput, Prisma.FacturaUncheckedCreateWithoutClienteInput> | Prisma.FacturaCreateWithoutClienteInput[] | Prisma.FacturaUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.FacturaCreateOrConnectWithoutClienteInput | Prisma.FacturaCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.FacturaUpsertWithWhereUniqueWithoutClienteInput | Prisma.FacturaUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.FacturaCreateManyClienteInputEnvelope;
    set?: Prisma.FacturaWhereUniqueInput | Prisma.FacturaWhereUniqueInput[];
    disconnect?: Prisma.FacturaWhereUniqueInput | Prisma.FacturaWhereUniqueInput[];
    delete?: Prisma.FacturaWhereUniqueInput | Prisma.FacturaWhereUniqueInput[];
    connect?: Prisma.FacturaWhereUniqueInput | Prisma.FacturaWhereUniqueInput[];
    update?: Prisma.FacturaUpdateWithWhereUniqueWithoutClienteInput | Prisma.FacturaUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.FacturaUpdateManyWithWhereWithoutClienteInput | Prisma.FacturaUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.FacturaScalarWhereInput | Prisma.FacturaScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type EnumEstadoPagoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoPago;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type FacturaCreateNestedOneWithoutAbonosInput = {
    create?: Prisma.XOR<Prisma.FacturaCreateWithoutAbonosInput, Prisma.FacturaUncheckedCreateWithoutAbonosInput>;
    connectOrCreate?: Prisma.FacturaCreateOrConnectWithoutAbonosInput;
    connect?: Prisma.FacturaWhereUniqueInput;
};
export type FacturaUpdateOneRequiredWithoutAbonosNestedInput = {
    create?: Prisma.XOR<Prisma.FacturaCreateWithoutAbonosInput, Prisma.FacturaUncheckedCreateWithoutAbonosInput>;
    connectOrCreate?: Prisma.FacturaCreateOrConnectWithoutAbonosInput;
    upsert?: Prisma.FacturaUpsertWithoutAbonosInput;
    connect?: Prisma.FacturaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FacturaUpdateToOneWithWhereWithoutAbonosInput, Prisma.FacturaUpdateWithoutAbonosInput>, Prisma.FacturaUncheckedUpdateWithoutAbonosInput>;
};
export type FacturaCreateNestedOneWithoutPrendasInput = {
    create?: Prisma.XOR<Prisma.FacturaCreateWithoutPrendasInput, Prisma.FacturaUncheckedCreateWithoutPrendasInput>;
    connectOrCreate?: Prisma.FacturaCreateOrConnectWithoutPrendasInput;
    connect?: Prisma.FacturaWhereUniqueInput;
};
export type FacturaUpdateOneRequiredWithoutPrendasNestedInput = {
    create?: Prisma.XOR<Prisma.FacturaCreateWithoutPrendasInput, Prisma.FacturaUncheckedCreateWithoutPrendasInput>;
    connectOrCreate?: Prisma.FacturaCreateOrConnectWithoutPrendasInput;
    upsert?: Prisma.FacturaUpsertWithoutPrendasInput;
    connect?: Prisma.FacturaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FacturaUpdateToOneWithWhereWithoutPrendasInput, Prisma.FacturaUpdateWithoutPrendasInput>, Prisma.FacturaUncheckedUpdateWithoutPrendasInput>;
};
export type FacturaCreateWithoutSedeInput = {
    numero: string;
    usuarioCreadorId: number;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: $Enums.EstadoPago;
    notas?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    abonos?: Prisma.AbonoCreateNestedManyWithoutFacturaInput;
    cliente?: Prisma.ClienteCreateNestedOneWithoutFacturasInput;
    prendas?: Prisma.PrendaCreateNestedManyWithoutFacturaInput;
};
export type FacturaUncheckedCreateWithoutSedeInput = {
    id?: number;
    numero: string;
    clienteId?: number | null;
    usuarioCreadorId: number;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: $Enums.EstadoPago;
    notas?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    abonos?: Prisma.AbonoUncheckedCreateNestedManyWithoutFacturaInput;
    prendas?: Prisma.PrendaUncheckedCreateNestedManyWithoutFacturaInput;
};
export type FacturaCreateOrConnectWithoutSedeInput = {
    where: Prisma.FacturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.FacturaCreateWithoutSedeInput, Prisma.FacturaUncheckedCreateWithoutSedeInput>;
};
export type FacturaCreateManySedeInputEnvelope = {
    data: Prisma.FacturaCreateManySedeInput | Prisma.FacturaCreateManySedeInput[];
    skipDuplicates?: boolean;
};
export type FacturaUpsertWithWhereUniqueWithoutSedeInput = {
    where: Prisma.FacturaWhereUniqueInput;
    update: Prisma.XOR<Prisma.FacturaUpdateWithoutSedeInput, Prisma.FacturaUncheckedUpdateWithoutSedeInput>;
    create: Prisma.XOR<Prisma.FacturaCreateWithoutSedeInput, Prisma.FacturaUncheckedCreateWithoutSedeInput>;
};
export type FacturaUpdateWithWhereUniqueWithoutSedeInput = {
    where: Prisma.FacturaWhereUniqueInput;
    data: Prisma.XOR<Prisma.FacturaUpdateWithoutSedeInput, Prisma.FacturaUncheckedUpdateWithoutSedeInput>;
};
export type FacturaUpdateManyWithWhereWithoutSedeInput = {
    where: Prisma.FacturaScalarWhereInput;
    data: Prisma.XOR<Prisma.FacturaUpdateManyMutationInput, Prisma.FacturaUncheckedUpdateManyWithoutSedeInput>;
};
export type FacturaScalarWhereInput = {
    AND?: Prisma.FacturaScalarWhereInput | Prisma.FacturaScalarWhereInput[];
    OR?: Prisma.FacturaScalarWhereInput[];
    NOT?: Prisma.FacturaScalarWhereInput | Prisma.FacturaScalarWhereInput[];
    id?: Prisma.IntFilter<"Factura"> | number;
    numero?: Prisma.StringFilter<"Factura"> | string;
    clienteId?: Prisma.IntNullableFilter<"Factura"> | number | null;
    usuarioCreadorId?: Prisma.IntFilter<"Factura"> | number;
    sedeId?: Prisma.IntFilter<"Factura"> | number;
    subtotal?: Prisma.DecimalFilter<"Factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.JsonNullableFilter<"Factura">;
    total?: Prisma.DecimalFilter<"Factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: Prisma.EnumEstadoPagoFilter<"Factura"> | $Enums.EstadoPago;
    notas?: Prisma.StringNullableFilter<"Factura"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Factura"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Factura"> | Date | string;
};
export type FacturaCreateWithoutClienteInput = {
    numero: string;
    usuarioCreadorId: number;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: $Enums.EstadoPago;
    notas?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    abonos?: Prisma.AbonoCreateNestedManyWithoutFacturaInput;
    sede: Prisma.SedeCreateNestedOneWithoutFacturasInput;
    prendas?: Prisma.PrendaCreateNestedManyWithoutFacturaInput;
};
export type FacturaUncheckedCreateWithoutClienteInput = {
    id?: number;
    numero: string;
    usuarioCreadorId: number;
    sedeId: number;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: $Enums.EstadoPago;
    notas?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    abonos?: Prisma.AbonoUncheckedCreateNestedManyWithoutFacturaInput;
    prendas?: Prisma.PrendaUncheckedCreateNestedManyWithoutFacturaInput;
};
export type FacturaCreateOrConnectWithoutClienteInput = {
    where: Prisma.FacturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.FacturaCreateWithoutClienteInput, Prisma.FacturaUncheckedCreateWithoutClienteInput>;
};
export type FacturaCreateManyClienteInputEnvelope = {
    data: Prisma.FacturaCreateManyClienteInput | Prisma.FacturaCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type FacturaUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.FacturaWhereUniqueInput;
    update: Prisma.XOR<Prisma.FacturaUpdateWithoutClienteInput, Prisma.FacturaUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.FacturaCreateWithoutClienteInput, Prisma.FacturaUncheckedCreateWithoutClienteInput>;
};
export type FacturaUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.FacturaWhereUniqueInput;
    data: Prisma.XOR<Prisma.FacturaUpdateWithoutClienteInput, Prisma.FacturaUncheckedUpdateWithoutClienteInput>;
};
export type FacturaUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.FacturaScalarWhereInput;
    data: Prisma.XOR<Prisma.FacturaUpdateManyMutationInput, Prisma.FacturaUncheckedUpdateManyWithoutClienteInput>;
};
export type FacturaCreateWithoutAbonosInput = {
    numero: string;
    usuarioCreadorId: number;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: $Enums.EstadoPago;
    notas?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cliente?: Prisma.ClienteCreateNestedOneWithoutFacturasInput;
    sede: Prisma.SedeCreateNestedOneWithoutFacturasInput;
    prendas?: Prisma.PrendaCreateNestedManyWithoutFacturaInput;
};
export type FacturaUncheckedCreateWithoutAbonosInput = {
    id?: number;
    numero: string;
    clienteId?: number | null;
    usuarioCreadorId: number;
    sedeId: number;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: $Enums.EstadoPago;
    notas?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prendas?: Prisma.PrendaUncheckedCreateNestedManyWithoutFacturaInput;
};
export type FacturaCreateOrConnectWithoutAbonosInput = {
    where: Prisma.FacturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.FacturaCreateWithoutAbonosInput, Prisma.FacturaUncheckedCreateWithoutAbonosInput>;
};
export type FacturaUpsertWithoutAbonosInput = {
    update: Prisma.XOR<Prisma.FacturaUpdateWithoutAbonosInput, Prisma.FacturaUncheckedUpdateWithoutAbonosInput>;
    create: Prisma.XOR<Prisma.FacturaCreateWithoutAbonosInput, Prisma.FacturaUncheckedCreateWithoutAbonosInput>;
    where?: Prisma.FacturaWhereInput;
};
export type FacturaUpdateToOneWithWhereWithoutAbonosInput = {
    where?: Prisma.FacturaWhereInput;
    data: Prisma.XOR<Prisma.FacturaUpdateWithoutAbonosInput, Prisma.FacturaUncheckedUpdateWithoutAbonosInput>;
};
export type FacturaUpdateWithoutAbonosInput = {
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioCreadorId?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.ClienteUpdateOneWithoutFacturasNestedInput;
    sede?: Prisma.SedeUpdateOneRequiredWithoutFacturasNestedInput;
    prendas?: Prisma.PrendaUpdateManyWithoutFacturaNestedInput;
};
export type FacturaUncheckedUpdateWithoutAbonosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usuarioCreadorId?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeId?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prendas?: Prisma.PrendaUncheckedUpdateManyWithoutFacturaNestedInput;
};
export type FacturaCreateWithoutPrendasInput = {
    numero: string;
    usuarioCreadorId: number;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: $Enums.EstadoPago;
    notas?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    abonos?: Prisma.AbonoCreateNestedManyWithoutFacturaInput;
    cliente?: Prisma.ClienteCreateNestedOneWithoutFacturasInput;
    sede: Prisma.SedeCreateNestedOneWithoutFacturasInput;
};
export type FacturaUncheckedCreateWithoutPrendasInput = {
    id?: number;
    numero: string;
    clienteId?: number | null;
    usuarioCreadorId: number;
    sedeId: number;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: $Enums.EstadoPago;
    notas?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    abonos?: Prisma.AbonoUncheckedCreateNestedManyWithoutFacturaInput;
};
export type FacturaCreateOrConnectWithoutPrendasInput = {
    where: Prisma.FacturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.FacturaCreateWithoutPrendasInput, Prisma.FacturaUncheckedCreateWithoutPrendasInput>;
};
export type FacturaUpsertWithoutPrendasInput = {
    update: Prisma.XOR<Prisma.FacturaUpdateWithoutPrendasInput, Prisma.FacturaUncheckedUpdateWithoutPrendasInput>;
    create: Prisma.XOR<Prisma.FacturaCreateWithoutPrendasInput, Prisma.FacturaUncheckedCreateWithoutPrendasInput>;
    where?: Prisma.FacturaWhereInput;
};
export type FacturaUpdateToOneWithWhereWithoutPrendasInput = {
    where?: Prisma.FacturaWhereInput;
    data: Prisma.XOR<Prisma.FacturaUpdateWithoutPrendasInput, Prisma.FacturaUncheckedUpdateWithoutPrendasInput>;
};
export type FacturaUpdateWithoutPrendasInput = {
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioCreadorId?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    abonos?: Prisma.AbonoUpdateManyWithoutFacturaNestedInput;
    cliente?: Prisma.ClienteUpdateOneWithoutFacturasNestedInput;
    sede?: Prisma.SedeUpdateOneRequiredWithoutFacturasNestedInput;
};
export type FacturaUncheckedUpdateWithoutPrendasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usuarioCreadorId?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeId?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    abonos?: Prisma.AbonoUncheckedUpdateManyWithoutFacturaNestedInput;
};
export type FacturaCreateManySedeInput = {
    id?: number;
    numero: string;
    clienteId?: number | null;
    usuarioCreadorId: number;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: $Enums.EstadoPago;
    notas?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FacturaUpdateWithoutSedeInput = {
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioCreadorId?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    abonos?: Prisma.AbonoUpdateManyWithoutFacturaNestedInput;
    cliente?: Prisma.ClienteUpdateOneWithoutFacturasNestedInput;
    prendas?: Prisma.PrendaUpdateManyWithoutFacturaNestedInput;
};
export type FacturaUncheckedUpdateWithoutSedeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usuarioCreadorId?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    abonos?: Prisma.AbonoUncheckedUpdateManyWithoutFacturaNestedInput;
    prendas?: Prisma.PrendaUncheckedUpdateManyWithoutFacturaNestedInput;
};
export type FacturaUncheckedUpdateManyWithoutSedeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usuarioCreadorId?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FacturaCreateManyClienteInput = {
    id?: number;
    numero: string;
    usuarioCreadorId: number;
    sedeId: number;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: $Enums.EstadoPago;
    notas?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FacturaUpdateWithoutClienteInput = {
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioCreadorId?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    abonos?: Prisma.AbonoUpdateManyWithoutFacturaNestedInput;
    sede?: Prisma.SedeUpdateOneRequiredWithoutFacturasNestedInput;
    prendas?: Prisma.PrendaUpdateManyWithoutFacturaNestedInput;
};
export type FacturaUncheckedUpdateWithoutClienteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioCreadorId?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeId?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    abonos?: Prisma.AbonoUncheckedUpdateManyWithoutFacturaNestedInput;
    prendas?: Prisma.PrendaUncheckedUpdateManyWithoutFacturaNestedInput;
};
export type FacturaUncheckedUpdateManyWithoutClienteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioCreadorId?: Prisma.IntFieldUpdateOperationsInput | number;
    sedeId?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    impuestosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estadoPago?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FacturaCountOutputType = {
    abonos: number;
    prendas: number;
};
export type FacturaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    abonos?: boolean | FacturaCountOutputTypeCountAbonosArgs;
    prendas?: boolean | FacturaCountOutputTypeCountPrendasArgs;
};
export type FacturaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacturaCountOutputTypeSelect<ExtArgs> | null;
};
export type FacturaCountOutputTypeCountAbonosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AbonoWhereInput;
};
export type FacturaCountOutputTypeCountPrendasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrendaWhereInput;
};
export type FacturaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    numero?: boolean;
    clienteId?: boolean;
    usuarioCreadorId?: boolean;
    sedeId?: boolean;
    subtotal?: boolean;
    impuestosJson?: boolean;
    total?: boolean;
    estadoPago?: boolean;
    notas?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    abonos?: boolean | Prisma.Factura$abonosArgs<ExtArgs>;
    cliente?: boolean | Prisma.Factura$clienteArgs<ExtArgs>;
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
    prendas?: boolean | Prisma.Factura$prendasArgs<ExtArgs>;
    _count?: boolean | Prisma.FacturaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["factura"]>;
export type FacturaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    numero?: boolean;
    clienteId?: boolean;
    usuarioCreadorId?: boolean;
    sedeId?: boolean;
    subtotal?: boolean;
    impuestosJson?: boolean;
    total?: boolean;
    estadoPago?: boolean;
    notas?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cliente?: boolean | Prisma.Factura$clienteArgs<ExtArgs>;
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["factura"]>;
export type FacturaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    numero?: boolean;
    clienteId?: boolean;
    usuarioCreadorId?: boolean;
    sedeId?: boolean;
    subtotal?: boolean;
    impuestosJson?: boolean;
    total?: boolean;
    estadoPago?: boolean;
    notas?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cliente?: boolean | Prisma.Factura$clienteArgs<ExtArgs>;
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["factura"]>;
export type FacturaSelectScalar = {
    id?: boolean;
    numero?: boolean;
    clienteId?: boolean;
    usuarioCreadorId?: boolean;
    sedeId?: boolean;
    subtotal?: boolean;
    impuestosJson?: boolean;
    total?: boolean;
    estadoPago?: boolean;
    notas?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FacturaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "numero" | "clienteId" | "usuarioCreadorId" | "sedeId" | "subtotal" | "impuestosJson" | "total" | "estadoPago" | "notas" | "createdAt" | "updatedAt", ExtArgs["result"]["factura"]>;
export type FacturaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    abonos?: boolean | Prisma.Factura$abonosArgs<ExtArgs>;
    cliente?: boolean | Prisma.Factura$clienteArgs<ExtArgs>;
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
    prendas?: boolean | Prisma.Factura$prendasArgs<ExtArgs>;
    _count?: boolean | Prisma.FacturaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FacturaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.Factura$clienteArgs<ExtArgs>;
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
};
export type FacturaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.Factura$clienteArgs<ExtArgs>;
    sede?: boolean | Prisma.SedeDefaultArgs<ExtArgs>;
};
export type $FacturaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Factura";
    objects: {
        abonos: Prisma.$AbonoPayload<ExtArgs>[];
        cliente: Prisma.$ClientePayload<ExtArgs> | null;
        sede: Prisma.$SedePayload<ExtArgs>;
        prendas: Prisma.$PrendaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        numero: string;
        clienteId: number | null;
        usuarioCreadorId: number;
        sedeId: number;
        subtotal: runtime.Decimal;
        impuestosJson: runtime.JsonValue | null;
        total: runtime.Decimal;
        estadoPago: $Enums.EstadoPago;
        notas: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["factura"]>;
    composites: {};
};
export type FacturaGetPayload<S extends boolean | null | undefined | FacturaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FacturaPayload, S>;
export type FacturaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FacturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FacturaCountAggregateInputType | true;
};
export interface FacturaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Factura'];
        meta: {
            name: 'Factura';
        };
    };
    findUnique<T extends FacturaFindUniqueArgs>(args: Prisma.SelectSubset<T, FacturaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FacturaClient<runtime.Types.Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FacturaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FacturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FacturaClient<runtime.Types.Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FacturaFindFirstArgs>(args?: Prisma.SelectSubset<T, FacturaFindFirstArgs<ExtArgs>>): Prisma.Prisma__FacturaClient<runtime.Types.Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FacturaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FacturaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FacturaClient<runtime.Types.Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FacturaFindManyArgs>(args?: Prisma.SelectSubset<T, FacturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FacturaCreateArgs>(args: Prisma.SelectSubset<T, FacturaCreateArgs<ExtArgs>>): Prisma.Prisma__FacturaClient<runtime.Types.Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FacturaCreateManyArgs>(args?: Prisma.SelectSubset<T, FacturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FacturaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FacturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FacturaDeleteArgs>(args: Prisma.SelectSubset<T, FacturaDeleteArgs<ExtArgs>>): Prisma.Prisma__FacturaClient<runtime.Types.Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FacturaUpdateArgs>(args: Prisma.SelectSubset<T, FacturaUpdateArgs<ExtArgs>>): Prisma.Prisma__FacturaClient<runtime.Types.Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FacturaDeleteManyArgs>(args?: Prisma.SelectSubset<T, FacturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FacturaUpdateManyArgs>(args: Prisma.SelectSubset<T, FacturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FacturaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FacturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FacturaUpsertArgs>(args: Prisma.SelectSubset<T, FacturaUpsertArgs<ExtArgs>>): Prisma.Prisma__FacturaClient<runtime.Types.Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FacturaCountArgs>(args?: Prisma.Subset<T, FacturaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FacturaCountAggregateOutputType> : number>;
    aggregate<T extends FacturaAggregateArgs>(args: Prisma.Subset<T, FacturaAggregateArgs>): Prisma.PrismaPromise<GetFacturaAggregateType<T>>;
    groupBy<T extends FacturaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FacturaGroupByArgs['orderBy'];
    } : {
        orderBy?: FacturaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FacturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FacturaFieldRefs;
}
export interface Prisma__FacturaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    abonos<T extends Prisma.Factura$abonosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Factura$abonosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AbonoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cliente<T extends Prisma.Factura$clienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Factura$clienteArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    sede<T extends Prisma.SedeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SedeDefaultArgs<ExtArgs>>): Prisma.Prisma__SedeClient<runtime.Types.Result.GetResult<Prisma.$SedePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    prendas<T extends Prisma.Factura$prendasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Factura$prendasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FacturaFieldRefs {
    readonly id: Prisma.FieldRef<"Factura", 'Int'>;
    readonly numero: Prisma.FieldRef<"Factura", 'String'>;
    readonly clienteId: Prisma.FieldRef<"Factura", 'Int'>;
    readonly usuarioCreadorId: Prisma.FieldRef<"Factura", 'Int'>;
    readonly sedeId: Prisma.FieldRef<"Factura", 'Int'>;
    readonly subtotal: Prisma.FieldRef<"Factura", 'Decimal'>;
    readonly impuestosJson: Prisma.FieldRef<"Factura", 'Json'>;
    readonly total: Prisma.FieldRef<"Factura", 'Decimal'>;
    readonly estadoPago: Prisma.FieldRef<"Factura", 'EstadoPago'>;
    readonly notas: Prisma.FieldRef<"Factura", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Factura", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Factura", 'DateTime'>;
}
export type FacturaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacturaSelect<ExtArgs> | null;
    omit?: Prisma.FacturaOmit<ExtArgs> | null;
    include?: Prisma.FacturaInclude<ExtArgs> | null;
    where: Prisma.FacturaWhereUniqueInput;
};
export type FacturaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacturaSelect<ExtArgs> | null;
    omit?: Prisma.FacturaOmit<ExtArgs> | null;
    include?: Prisma.FacturaInclude<ExtArgs> | null;
    where: Prisma.FacturaWhereUniqueInput;
};
export type FacturaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FacturaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FacturaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FacturaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacturaSelect<ExtArgs> | null;
    omit?: Prisma.FacturaOmit<ExtArgs> | null;
    include?: Prisma.FacturaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FacturaCreateInput, Prisma.FacturaUncheckedCreateInput>;
};
export type FacturaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FacturaCreateManyInput | Prisma.FacturaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FacturaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacturaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FacturaOmit<ExtArgs> | null;
    data: Prisma.FacturaCreateManyInput | Prisma.FacturaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FacturaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FacturaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacturaSelect<ExtArgs> | null;
    omit?: Prisma.FacturaOmit<ExtArgs> | null;
    include?: Prisma.FacturaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FacturaUpdateInput, Prisma.FacturaUncheckedUpdateInput>;
    where: Prisma.FacturaWhereUniqueInput;
};
export type FacturaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FacturaUpdateManyMutationInput, Prisma.FacturaUncheckedUpdateManyInput>;
    where?: Prisma.FacturaWhereInput;
    limit?: number;
};
export type FacturaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacturaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FacturaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FacturaUpdateManyMutationInput, Prisma.FacturaUncheckedUpdateManyInput>;
    where?: Prisma.FacturaWhereInput;
    limit?: number;
    include?: Prisma.FacturaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FacturaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacturaSelect<ExtArgs> | null;
    omit?: Prisma.FacturaOmit<ExtArgs> | null;
    include?: Prisma.FacturaInclude<ExtArgs> | null;
    where: Prisma.FacturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.FacturaCreateInput, Prisma.FacturaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FacturaUpdateInput, Prisma.FacturaUncheckedUpdateInput>;
};
export type FacturaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacturaSelect<ExtArgs> | null;
    omit?: Prisma.FacturaOmit<ExtArgs> | null;
    include?: Prisma.FacturaInclude<ExtArgs> | null;
    where: Prisma.FacturaWhereUniqueInput;
};
export type FacturaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FacturaWhereInput;
    limit?: number;
};
export type Factura$abonosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Factura$clienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where?: Prisma.ClienteWhereInput;
};
export type Factura$prendasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FacturaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacturaSelect<ExtArgs> | null;
    omit?: Prisma.FacturaOmit<ExtArgs> | null;
    include?: Prisma.FacturaInclude<ExtArgs> | null;
};
