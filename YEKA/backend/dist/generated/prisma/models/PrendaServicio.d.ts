import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PrendaServicioModel = runtime.Types.Result.DefaultSelection<Prisma.$PrendaServicioPayload>;
export type AggregatePrendaServicio = {
    _count: PrendaServicioCountAggregateOutputType | null;
    _avg: PrendaServicioAvgAggregateOutputType | null;
    _sum: PrendaServicioSumAggregateOutputType | null;
    _min: PrendaServicioMinAggregateOutputType | null;
    _max: PrendaServicioMaxAggregateOutputType | null;
};
export type PrendaServicioAvgAggregateOutputType = {
    id: number | null;
    prendaId: number | null;
    servicioId: number | null;
    medidaEntregada: runtime.Decimal | null;
    tiempoCalculado: number | null;
    valorPorTiempo: runtime.Decimal | null;
    valorFactoresCobro: runtime.Decimal | null;
    precioBruto: runtime.Decimal | null;
    precioFinal: runtime.Decimal | null;
};
export type PrendaServicioSumAggregateOutputType = {
    id: number | null;
    prendaId: number | null;
    servicioId: number | null;
    medidaEntregada: runtime.Decimal | null;
    tiempoCalculado: number | null;
    valorPorTiempo: runtime.Decimal | null;
    valorFactoresCobro: runtime.Decimal | null;
    precioBruto: runtime.Decimal | null;
    precioFinal: runtime.Decimal | null;
};
export type PrendaServicioMinAggregateOutputType = {
    id: number | null;
    prendaId: number | null;
    servicioId: number | null;
    medidaEntregada: runtime.Decimal | null;
    tiempoCalculado: number | null;
    valorPorTiempo: runtime.Decimal | null;
    valorFactoresCobro: runtime.Decimal | null;
    precioBruto: runtime.Decimal | null;
    precioFinal: runtime.Decimal | null;
    observaciones: string | null;
    createdAt: Date | null;
};
export type PrendaServicioMaxAggregateOutputType = {
    id: number | null;
    prendaId: number | null;
    servicioId: number | null;
    medidaEntregada: runtime.Decimal | null;
    tiempoCalculado: number | null;
    valorPorTiempo: runtime.Decimal | null;
    valorFactoresCobro: runtime.Decimal | null;
    precioBruto: runtime.Decimal | null;
    precioFinal: runtime.Decimal | null;
    observaciones: string | null;
    createdAt: Date | null;
};
export type PrendaServicioCountAggregateOutputType = {
    id: number;
    prendaId: number;
    servicioId: number;
    medidaEntregada: number;
    tiempoCalculado: number;
    valorPorTiempo: number;
    valorFactoresCobro: number;
    precioBruto: number;
    precioFinal: number;
    observaciones: number;
    detallesCalculo: number;
    createdAt: number;
    _all: number;
};
export type PrendaServicioAvgAggregateInputType = {
    id?: true;
    prendaId?: true;
    servicioId?: true;
    medidaEntregada?: true;
    tiempoCalculado?: true;
    valorPorTiempo?: true;
    valorFactoresCobro?: true;
    precioBruto?: true;
    precioFinal?: true;
};
export type PrendaServicioSumAggregateInputType = {
    id?: true;
    prendaId?: true;
    servicioId?: true;
    medidaEntregada?: true;
    tiempoCalculado?: true;
    valorPorTiempo?: true;
    valorFactoresCobro?: true;
    precioBruto?: true;
    precioFinal?: true;
};
export type PrendaServicioMinAggregateInputType = {
    id?: true;
    prendaId?: true;
    servicioId?: true;
    medidaEntregada?: true;
    tiempoCalculado?: true;
    valorPorTiempo?: true;
    valorFactoresCobro?: true;
    precioBruto?: true;
    precioFinal?: true;
    observaciones?: true;
    createdAt?: true;
};
export type PrendaServicioMaxAggregateInputType = {
    id?: true;
    prendaId?: true;
    servicioId?: true;
    medidaEntregada?: true;
    tiempoCalculado?: true;
    valorPorTiempo?: true;
    valorFactoresCobro?: true;
    precioBruto?: true;
    precioFinal?: true;
    observaciones?: true;
    createdAt?: true;
};
export type PrendaServicioCountAggregateInputType = {
    id?: true;
    prendaId?: true;
    servicioId?: true;
    medidaEntregada?: true;
    tiempoCalculado?: true;
    valorPorTiempo?: true;
    valorFactoresCobro?: true;
    precioBruto?: true;
    precioFinal?: true;
    observaciones?: true;
    detallesCalculo?: true;
    createdAt?: true;
    _all?: true;
};
export type PrendaServicioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrendaServicioWhereInput;
    orderBy?: Prisma.PrendaServicioOrderByWithRelationInput | Prisma.PrendaServicioOrderByWithRelationInput[];
    cursor?: Prisma.PrendaServicioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PrendaServicioCountAggregateInputType;
    _avg?: PrendaServicioAvgAggregateInputType;
    _sum?: PrendaServicioSumAggregateInputType;
    _min?: PrendaServicioMinAggregateInputType;
    _max?: PrendaServicioMaxAggregateInputType;
};
export type GetPrendaServicioAggregateType<T extends PrendaServicioAggregateArgs> = {
    [P in keyof T & keyof AggregatePrendaServicio]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePrendaServicio[P]> : Prisma.GetScalarType<T[P], AggregatePrendaServicio[P]>;
};
export type PrendaServicioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrendaServicioWhereInput;
    orderBy?: Prisma.PrendaServicioOrderByWithAggregationInput | Prisma.PrendaServicioOrderByWithAggregationInput[];
    by: Prisma.PrendaServicioScalarFieldEnum[] | Prisma.PrendaServicioScalarFieldEnum;
    having?: Prisma.PrendaServicioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PrendaServicioCountAggregateInputType | true;
    _avg?: PrendaServicioAvgAggregateInputType;
    _sum?: PrendaServicioSumAggregateInputType;
    _min?: PrendaServicioMinAggregateInputType;
    _max?: PrendaServicioMaxAggregateInputType;
};
export type PrendaServicioGroupByOutputType = {
    id: number;
    prendaId: number;
    servicioId: number;
    medidaEntregada: runtime.Decimal | null;
    tiempoCalculado: number | null;
    valorPorTiempo: runtime.Decimal | null;
    valorFactoresCobro: runtime.Decimal | null;
    precioBruto: runtime.Decimal | null;
    precioFinal: runtime.Decimal;
    observaciones: string | null;
    detallesCalculo: runtime.JsonValue | null;
    createdAt: Date;
    _count: PrendaServicioCountAggregateOutputType | null;
    _avg: PrendaServicioAvgAggregateOutputType | null;
    _sum: PrendaServicioSumAggregateOutputType | null;
    _min: PrendaServicioMinAggregateOutputType | null;
    _max: PrendaServicioMaxAggregateOutputType | null;
};
export type GetPrendaServicioGroupByPayload<T extends PrendaServicioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PrendaServicioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PrendaServicioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PrendaServicioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PrendaServicioGroupByOutputType[P]>;
}>>;
export type PrendaServicioWhereInput = {
    AND?: Prisma.PrendaServicioWhereInput | Prisma.PrendaServicioWhereInput[];
    OR?: Prisma.PrendaServicioWhereInput[];
    NOT?: Prisma.PrendaServicioWhereInput | Prisma.PrendaServicioWhereInput[];
    id?: Prisma.IntFilter<"PrendaServicio"> | number;
    prendaId?: Prisma.IntFilter<"PrendaServicio"> | number;
    servicioId?: Prisma.IntFilter<"PrendaServicio"> | number;
    medidaEntregada?: Prisma.DecimalNullableFilter<"PrendaServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: Prisma.IntNullableFilter<"PrendaServicio"> | number | null;
    valorPorTiempo?: Prisma.DecimalNullableFilter<"PrendaServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: Prisma.DecimalNullableFilter<"PrendaServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: Prisma.DecimalNullableFilter<"PrendaServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal?: Prisma.DecimalFilter<"PrendaServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.StringNullableFilter<"PrendaServicio"> | string | null;
    detallesCalculo?: Prisma.JsonNullableFilter<"PrendaServicio">;
    createdAt?: Prisma.DateTimeFilter<"PrendaServicio"> | Date | string;
    prenda?: Prisma.XOR<Prisma.PrendaScalarRelationFilter, Prisma.PrendaWhereInput>;
    servicio?: Prisma.XOR<Prisma.CatalogoServicioScalarRelationFilter, Prisma.CatalogoServicioWhereInput>;
};
export type PrendaServicioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    prendaId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
    medidaEntregada?: Prisma.SortOrderInput | Prisma.SortOrder;
    tiempoCalculado?: Prisma.SortOrderInput | Prisma.SortOrder;
    valorPorTiempo?: Prisma.SortOrderInput | Prisma.SortOrder;
    valorFactoresCobro?: Prisma.SortOrderInput | Prisma.SortOrder;
    precioBruto?: Prisma.SortOrderInput | Prisma.SortOrder;
    precioFinal?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    detallesCalculo?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    prenda?: Prisma.PrendaOrderByWithRelationInput;
    servicio?: Prisma.CatalogoServicioOrderByWithRelationInput;
};
export type PrendaServicioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PrendaServicioWhereInput | Prisma.PrendaServicioWhereInput[];
    OR?: Prisma.PrendaServicioWhereInput[];
    NOT?: Prisma.PrendaServicioWhereInput | Prisma.PrendaServicioWhereInput[];
    prendaId?: Prisma.IntFilter<"PrendaServicio"> | number;
    servicioId?: Prisma.IntFilter<"PrendaServicio"> | number;
    medidaEntregada?: Prisma.DecimalNullableFilter<"PrendaServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: Prisma.IntNullableFilter<"PrendaServicio"> | number | null;
    valorPorTiempo?: Prisma.DecimalNullableFilter<"PrendaServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: Prisma.DecimalNullableFilter<"PrendaServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: Prisma.DecimalNullableFilter<"PrendaServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal?: Prisma.DecimalFilter<"PrendaServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.StringNullableFilter<"PrendaServicio"> | string | null;
    detallesCalculo?: Prisma.JsonNullableFilter<"PrendaServicio">;
    createdAt?: Prisma.DateTimeFilter<"PrendaServicio"> | Date | string;
    prenda?: Prisma.XOR<Prisma.PrendaScalarRelationFilter, Prisma.PrendaWhereInput>;
    servicio?: Prisma.XOR<Prisma.CatalogoServicioScalarRelationFilter, Prisma.CatalogoServicioWhereInput>;
}, "id">;
export type PrendaServicioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    prendaId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
    medidaEntregada?: Prisma.SortOrderInput | Prisma.SortOrder;
    tiempoCalculado?: Prisma.SortOrderInput | Prisma.SortOrder;
    valorPorTiempo?: Prisma.SortOrderInput | Prisma.SortOrder;
    valorFactoresCobro?: Prisma.SortOrderInput | Prisma.SortOrder;
    precioBruto?: Prisma.SortOrderInput | Prisma.SortOrder;
    precioFinal?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    detallesCalculo?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PrendaServicioCountOrderByAggregateInput;
    _avg?: Prisma.PrendaServicioAvgOrderByAggregateInput;
    _max?: Prisma.PrendaServicioMaxOrderByAggregateInput;
    _min?: Prisma.PrendaServicioMinOrderByAggregateInput;
    _sum?: Prisma.PrendaServicioSumOrderByAggregateInput;
};
export type PrendaServicioScalarWhereWithAggregatesInput = {
    AND?: Prisma.PrendaServicioScalarWhereWithAggregatesInput | Prisma.PrendaServicioScalarWhereWithAggregatesInput[];
    OR?: Prisma.PrendaServicioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PrendaServicioScalarWhereWithAggregatesInput | Prisma.PrendaServicioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"PrendaServicio"> | number;
    prendaId?: Prisma.IntWithAggregatesFilter<"PrendaServicio"> | number;
    servicioId?: Prisma.IntWithAggregatesFilter<"PrendaServicio"> | number;
    medidaEntregada?: Prisma.DecimalNullableWithAggregatesFilter<"PrendaServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: Prisma.IntNullableWithAggregatesFilter<"PrendaServicio"> | number | null;
    valorPorTiempo?: Prisma.DecimalNullableWithAggregatesFilter<"PrendaServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: Prisma.DecimalNullableWithAggregatesFilter<"PrendaServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: Prisma.DecimalNullableWithAggregatesFilter<"PrendaServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal?: Prisma.DecimalWithAggregatesFilter<"PrendaServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"PrendaServicio"> | string | null;
    detallesCalculo?: Prisma.JsonNullableWithAggregatesFilter<"PrendaServicio">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PrendaServicio"> | Date | string;
};
export type PrendaServicioCreateInput = {
    medidaEntregada?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: number | null;
    valorPorTiempo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    detallesCalculo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    prenda: Prisma.PrendaCreateNestedOneWithoutServiciosInput;
    servicio: Prisma.CatalogoServicioCreateNestedOneWithoutAsignacionesInput;
};
export type PrendaServicioUncheckedCreateInput = {
    id?: number;
    prendaId: number;
    servicioId: number;
    medidaEntregada?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: number | null;
    valorPorTiempo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    detallesCalculo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type PrendaServicioUpdateInput = {
    medidaEntregada?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valorPorTiempo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detallesCalculo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prenda?: Prisma.PrendaUpdateOneRequiredWithoutServiciosNestedInput;
    servicio?: Prisma.CatalogoServicioUpdateOneRequiredWithoutAsignacionesNestedInput;
};
export type PrendaServicioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    prendaId?: Prisma.IntFieldUpdateOperationsInput | number;
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    medidaEntregada?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valorPorTiempo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detallesCalculo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrendaServicioCreateManyInput = {
    id?: number;
    prendaId: number;
    servicioId: number;
    medidaEntregada?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: number | null;
    valorPorTiempo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    detallesCalculo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type PrendaServicioUpdateManyMutationInput = {
    medidaEntregada?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valorPorTiempo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detallesCalculo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrendaServicioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    prendaId?: Prisma.IntFieldUpdateOperationsInput | number;
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    medidaEntregada?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valorPorTiempo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detallesCalculo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrendaServicioListRelationFilter = {
    every?: Prisma.PrendaServicioWhereInput;
    some?: Prisma.PrendaServicioWhereInput;
    none?: Prisma.PrendaServicioWhereInput;
};
export type PrendaServicioOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PrendaServicioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    prendaId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
    medidaEntregada?: Prisma.SortOrder;
    tiempoCalculado?: Prisma.SortOrder;
    valorPorTiempo?: Prisma.SortOrder;
    valorFactoresCobro?: Prisma.SortOrder;
    precioBruto?: Prisma.SortOrder;
    precioFinal?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    detallesCalculo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PrendaServicioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    prendaId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
    medidaEntregada?: Prisma.SortOrder;
    tiempoCalculado?: Prisma.SortOrder;
    valorPorTiempo?: Prisma.SortOrder;
    valorFactoresCobro?: Prisma.SortOrder;
    precioBruto?: Prisma.SortOrder;
    precioFinal?: Prisma.SortOrder;
};
export type PrendaServicioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    prendaId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
    medidaEntregada?: Prisma.SortOrder;
    tiempoCalculado?: Prisma.SortOrder;
    valorPorTiempo?: Prisma.SortOrder;
    valorFactoresCobro?: Prisma.SortOrder;
    precioBruto?: Prisma.SortOrder;
    precioFinal?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PrendaServicioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    prendaId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
    medidaEntregada?: Prisma.SortOrder;
    tiempoCalculado?: Prisma.SortOrder;
    valorPorTiempo?: Prisma.SortOrder;
    valorFactoresCobro?: Prisma.SortOrder;
    precioBruto?: Prisma.SortOrder;
    precioFinal?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PrendaServicioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    prendaId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
    medidaEntregada?: Prisma.SortOrder;
    tiempoCalculado?: Prisma.SortOrder;
    valorPorTiempo?: Prisma.SortOrder;
    valorFactoresCobro?: Prisma.SortOrder;
    precioBruto?: Prisma.SortOrder;
    precioFinal?: Prisma.SortOrder;
};
export type PrendaServicioCreateNestedManyWithoutPrendaInput = {
    create?: Prisma.XOR<Prisma.PrendaServicioCreateWithoutPrendaInput, Prisma.PrendaServicioUncheckedCreateWithoutPrendaInput> | Prisma.PrendaServicioCreateWithoutPrendaInput[] | Prisma.PrendaServicioUncheckedCreateWithoutPrendaInput[];
    connectOrCreate?: Prisma.PrendaServicioCreateOrConnectWithoutPrendaInput | Prisma.PrendaServicioCreateOrConnectWithoutPrendaInput[];
    createMany?: Prisma.PrendaServicioCreateManyPrendaInputEnvelope;
    connect?: Prisma.PrendaServicioWhereUniqueInput | Prisma.PrendaServicioWhereUniqueInput[];
};
export type PrendaServicioUncheckedCreateNestedManyWithoutPrendaInput = {
    create?: Prisma.XOR<Prisma.PrendaServicioCreateWithoutPrendaInput, Prisma.PrendaServicioUncheckedCreateWithoutPrendaInput> | Prisma.PrendaServicioCreateWithoutPrendaInput[] | Prisma.PrendaServicioUncheckedCreateWithoutPrendaInput[];
    connectOrCreate?: Prisma.PrendaServicioCreateOrConnectWithoutPrendaInput | Prisma.PrendaServicioCreateOrConnectWithoutPrendaInput[];
    createMany?: Prisma.PrendaServicioCreateManyPrendaInputEnvelope;
    connect?: Prisma.PrendaServicioWhereUniqueInput | Prisma.PrendaServicioWhereUniqueInput[];
};
export type PrendaServicioUpdateManyWithoutPrendaNestedInput = {
    create?: Prisma.XOR<Prisma.PrendaServicioCreateWithoutPrendaInput, Prisma.PrendaServicioUncheckedCreateWithoutPrendaInput> | Prisma.PrendaServicioCreateWithoutPrendaInput[] | Prisma.PrendaServicioUncheckedCreateWithoutPrendaInput[];
    connectOrCreate?: Prisma.PrendaServicioCreateOrConnectWithoutPrendaInput | Prisma.PrendaServicioCreateOrConnectWithoutPrendaInput[];
    upsert?: Prisma.PrendaServicioUpsertWithWhereUniqueWithoutPrendaInput | Prisma.PrendaServicioUpsertWithWhereUniqueWithoutPrendaInput[];
    createMany?: Prisma.PrendaServicioCreateManyPrendaInputEnvelope;
    set?: Prisma.PrendaServicioWhereUniqueInput | Prisma.PrendaServicioWhereUniqueInput[];
    disconnect?: Prisma.PrendaServicioWhereUniqueInput | Prisma.PrendaServicioWhereUniqueInput[];
    delete?: Prisma.PrendaServicioWhereUniqueInput | Prisma.PrendaServicioWhereUniqueInput[];
    connect?: Prisma.PrendaServicioWhereUniqueInput | Prisma.PrendaServicioWhereUniqueInput[];
    update?: Prisma.PrendaServicioUpdateWithWhereUniqueWithoutPrendaInput | Prisma.PrendaServicioUpdateWithWhereUniqueWithoutPrendaInput[];
    updateMany?: Prisma.PrendaServicioUpdateManyWithWhereWithoutPrendaInput | Prisma.PrendaServicioUpdateManyWithWhereWithoutPrendaInput[];
    deleteMany?: Prisma.PrendaServicioScalarWhereInput | Prisma.PrendaServicioScalarWhereInput[];
};
export type PrendaServicioUncheckedUpdateManyWithoutPrendaNestedInput = {
    create?: Prisma.XOR<Prisma.PrendaServicioCreateWithoutPrendaInput, Prisma.PrendaServicioUncheckedCreateWithoutPrendaInput> | Prisma.PrendaServicioCreateWithoutPrendaInput[] | Prisma.PrendaServicioUncheckedCreateWithoutPrendaInput[];
    connectOrCreate?: Prisma.PrendaServicioCreateOrConnectWithoutPrendaInput | Prisma.PrendaServicioCreateOrConnectWithoutPrendaInput[];
    upsert?: Prisma.PrendaServicioUpsertWithWhereUniqueWithoutPrendaInput | Prisma.PrendaServicioUpsertWithWhereUniqueWithoutPrendaInput[];
    createMany?: Prisma.PrendaServicioCreateManyPrendaInputEnvelope;
    set?: Prisma.PrendaServicioWhereUniqueInput | Prisma.PrendaServicioWhereUniqueInput[];
    disconnect?: Prisma.PrendaServicioWhereUniqueInput | Prisma.PrendaServicioWhereUniqueInput[];
    delete?: Prisma.PrendaServicioWhereUniqueInput | Prisma.PrendaServicioWhereUniqueInput[];
    connect?: Prisma.PrendaServicioWhereUniqueInput | Prisma.PrendaServicioWhereUniqueInput[];
    update?: Prisma.PrendaServicioUpdateWithWhereUniqueWithoutPrendaInput | Prisma.PrendaServicioUpdateWithWhereUniqueWithoutPrendaInput[];
    updateMany?: Prisma.PrendaServicioUpdateManyWithWhereWithoutPrendaInput | Prisma.PrendaServicioUpdateManyWithWhereWithoutPrendaInput[];
    deleteMany?: Prisma.PrendaServicioScalarWhereInput | Prisma.PrendaServicioScalarWhereInput[];
};
export type PrendaServicioCreateNestedManyWithoutServicioInput = {
    create?: Prisma.XOR<Prisma.PrendaServicioCreateWithoutServicioInput, Prisma.PrendaServicioUncheckedCreateWithoutServicioInput> | Prisma.PrendaServicioCreateWithoutServicioInput[] | Prisma.PrendaServicioUncheckedCreateWithoutServicioInput[];
    connectOrCreate?: Prisma.PrendaServicioCreateOrConnectWithoutServicioInput | Prisma.PrendaServicioCreateOrConnectWithoutServicioInput[];
    createMany?: Prisma.PrendaServicioCreateManyServicioInputEnvelope;
    connect?: Prisma.PrendaServicioWhereUniqueInput | Prisma.PrendaServicioWhereUniqueInput[];
};
export type PrendaServicioUncheckedCreateNestedManyWithoutServicioInput = {
    create?: Prisma.XOR<Prisma.PrendaServicioCreateWithoutServicioInput, Prisma.PrendaServicioUncheckedCreateWithoutServicioInput> | Prisma.PrendaServicioCreateWithoutServicioInput[] | Prisma.PrendaServicioUncheckedCreateWithoutServicioInput[];
    connectOrCreate?: Prisma.PrendaServicioCreateOrConnectWithoutServicioInput | Prisma.PrendaServicioCreateOrConnectWithoutServicioInput[];
    createMany?: Prisma.PrendaServicioCreateManyServicioInputEnvelope;
    connect?: Prisma.PrendaServicioWhereUniqueInput | Prisma.PrendaServicioWhereUniqueInput[];
};
export type PrendaServicioUpdateManyWithoutServicioNestedInput = {
    create?: Prisma.XOR<Prisma.PrendaServicioCreateWithoutServicioInput, Prisma.PrendaServicioUncheckedCreateWithoutServicioInput> | Prisma.PrendaServicioCreateWithoutServicioInput[] | Prisma.PrendaServicioUncheckedCreateWithoutServicioInput[];
    connectOrCreate?: Prisma.PrendaServicioCreateOrConnectWithoutServicioInput | Prisma.PrendaServicioCreateOrConnectWithoutServicioInput[];
    upsert?: Prisma.PrendaServicioUpsertWithWhereUniqueWithoutServicioInput | Prisma.PrendaServicioUpsertWithWhereUniqueWithoutServicioInput[];
    createMany?: Prisma.PrendaServicioCreateManyServicioInputEnvelope;
    set?: Prisma.PrendaServicioWhereUniqueInput | Prisma.PrendaServicioWhereUniqueInput[];
    disconnect?: Prisma.PrendaServicioWhereUniqueInput | Prisma.PrendaServicioWhereUniqueInput[];
    delete?: Prisma.PrendaServicioWhereUniqueInput | Prisma.PrendaServicioWhereUniqueInput[];
    connect?: Prisma.PrendaServicioWhereUniqueInput | Prisma.PrendaServicioWhereUniqueInput[];
    update?: Prisma.PrendaServicioUpdateWithWhereUniqueWithoutServicioInput | Prisma.PrendaServicioUpdateWithWhereUniqueWithoutServicioInput[];
    updateMany?: Prisma.PrendaServicioUpdateManyWithWhereWithoutServicioInput | Prisma.PrendaServicioUpdateManyWithWhereWithoutServicioInput[];
    deleteMany?: Prisma.PrendaServicioScalarWhereInput | Prisma.PrendaServicioScalarWhereInput[];
};
export type PrendaServicioUncheckedUpdateManyWithoutServicioNestedInput = {
    create?: Prisma.XOR<Prisma.PrendaServicioCreateWithoutServicioInput, Prisma.PrendaServicioUncheckedCreateWithoutServicioInput> | Prisma.PrendaServicioCreateWithoutServicioInput[] | Prisma.PrendaServicioUncheckedCreateWithoutServicioInput[];
    connectOrCreate?: Prisma.PrendaServicioCreateOrConnectWithoutServicioInput | Prisma.PrendaServicioCreateOrConnectWithoutServicioInput[];
    upsert?: Prisma.PrendaServicioUpsertWithWhereUniqueWithoutServicioInput | Prisma.PrendaServicioUpsertWithWhereUniqueWithoutServicioInput[];
    createMany?: Prisma.PrendaServicioCreateManyServicioInputEnvelope;
    set?: Prisma.PrendaServicioWhereUniqueInput | Prisma.PrendaServicioWhereUniqueInput[];
    disconnect?: Prisma.PrendaServicioWhereUniqueInput | Prisma.PrendaServicioWhereUniqueInput[];
    delete?: Prisma.PrendaServicioWhereUniqueInput | Prisma.PrendaServicioWhereUniqueInput[];
    connect?: Prisma.PrendaServicioWhereUniqueInput | Prisma.PrendaServicioWhereUniqueInput[];
    update?: Prisma.PrendaServicioUpdateWithWhereUniqueWithoutServicioInput | Prisma.PrendaServicioUpdateWithWhereUniqueWithoutServicioInput[];
    updateMany?: Prisma.PrendaServicioUpdateManyWithWhereWithoutServicioInput | Prisma.PrendaServicioUpdateManyWithWhereWithoutServicioInput[];
    deleteMany?: Prisma.PrendaServicioScalarWhereInput | Prisma.PrendaServicioScalarWhereInput[];
};
export type PrendaServicioCreateWithoutPrendaInput = {
    medidaEntregada?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: number | null;
    valorPorTiempo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    detallesCalculo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    servicio: Prisma.CatalogoServicioCreateNestedOneWithoutAsignacionesInput;
};
export type PrendaServicioUncheckedCreateWithoutPrendaInput = {
    id?: number;
    servicioId: number;
    medidaEntregada?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: number | null;
    valorPorTiempo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    detallesCalculo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type PrendaServicioCreateOrConnectWithoutPrendaInput = {
    where: Prisma.PrendaServicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrendaServicioCreateWithoutPrendaInput, Prisma.PrendaServicioUncheckedCreateWithoutPrendaInput>;
};
export type PrendaServicioCreateManyPrendaInputEnvelope = {
    data: Prisma.PrendaServicioCreateManyPrendaInput | Prisma.PrendaServicioCreateManyPrendaInput[];
    skipDuplicates?: boolean;
};
export type PrendaServicioUpsertWithWhereUniqueWithoutPrendaInput = {
    where: Prisma.PrendaServicioWhereUniqueInput;
    update: Prisma.XOR<Prisma.PrendaServicioUpdateWithoutPrendaInput, Prisma.PrendaServicioUncheckedUpdateWithoutPrendaInput>;
    create: Prisma.XOR<Prisma.PrendaServicioCreateWithoutPrendaInput, Prisma.PrendaServicioUncheckedCreateWithoutPrendaInput>;
};
export type PrendaServicioUpdateWithWhereUniqueWithoutPrendaInput = {
    where: Prisma.PrendaServicioWhereUniqueInput;
    data: Prisma.XOR<Prisma.PrendaServicioUpdateWithoutPrendaInput, Prisma.PrendaServicioUncheckedUpdateWithoutPrendaInput>;
};
export type PrendaServicioUpdateManyWithWhereWithoutPrendaInput = {
    where: Prisma.PrendaServicioScalarWhereInput;
    data: Prisma.XOR<Prisma.PrendaServicioUpdateManyMutationInput, Prisma.PrendaServicioUncheckedUpdateManyWithoutPrendaInput>;
};
export type PrendaServicioScalarWhereInput = {
    AND?: Prisma.PrendaServicioScalarWhereInput | Prisma.PrendaServicioScalarWhereInput[];
    OR?: Prisma.PrendaServicioScalarWhereInput[];
    NOT?: Prisma.PrendaServicioScalarWhereInput | Prisma.PrendaServicioScalarWhereInput[];
    id?: Prisma.IntFilter<"PrendaServicio"> | number;
    prendaId?: Prisma.IntFilter<"PrendaServicio"> | number;
    servicioId?: Prisma.IntFilter<"PrendaServicio"> | number;
    medidaEntregada?: Prisma.DecimalNullableFilter<"PrendaServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: Prisma.IntNullableFilter<"PrendaServicio"> | number | null;
    valorPorTiempo?: Prisma.DecimalNullableFilter<"PrendaServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: Prisma.DecimalNullableFilter<"PrendaServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: Prisma.DecimalNullableFilter<"PrendaServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal?: Prisma.DecimalFilter<"PrendaServicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.StringNullableFilter<"PrendaServicio"> | string | null;
    detallesCalculo?: Prisma.JsonNullableFilter<"PrendaServicio">;
    createdAt?: Prisma.DateTimeFilter<"PrendaServicio"> | Date | string;
};
export type PrendaServicioCreateWithoutServicioInput = {
    medidaEntregada?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: number | null;
    valorPorTiempo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    detallesCalculo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    prenda: Prisma.PrendaCreateNestedOneWithoutServiciosInput;
};
export type PrendaServicioUncheckedCreateWithoutServicioInput = {
    id?: number;
    prendaId: number;
    medidaEntregada?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: number | null;
    valorPorTiempo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    detallesCalculo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type PrendaServicioCreateOrConnectWithoutServicioInput = {
    where: Prisma.PrendaServicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrendaServicioCreateWithoutServicioInput, Prisma.PrendaServicioUncheckedCreateWithoutServicioInput>;
};
export type PrendaServicioCreateManyServicioInputEnvelope = {
    data: Prisma.PrendaServicioCreateManyServicioInput | Prisma.PrendaServicioCreateManyServicioInput[];
    skipDuplicates?: boolean;
};
export type PrendaServicioUpsertWithWhereUniqueWithoutServicioInput = {
    where: Prisma.PrendaServicioWhereUniqueInput;
    update: Prisma.XOR<Prisma.PrendaServicioUpdateWithoutServicioInput, Prisma.PrendaServicioUncheckedUpdateWithoutServicioInput>;
    create: Prisma.XOR<Prisma.PrendaServicioCreateWithoutServicioInput, Prisma.PrendaServicioUncheckedCreateWithoutServicioInput>;
};
export type PrendaServicioUpdateWithWhereUniqueWithoutServicioInput = {
    where: Prisma.PrendaServicioWhereUniqueInput;
    data: Prisma.XOR<Prisma.PrendaServicioUpdateWithoutServicioInput, Prisma.PrendaServicioUncheckedUpdateWithoutServicioInput>;
};
export type PrendaServicioUpdateManyWithWhereWithoutServicioInput = {
    where: Prisma.PrendaServicioScalarWhereInput;
    data: Prisma.XOR<Prisma.PrendaServicioUpdateManyMutationInput, Prisma.PrendaServicioUncheckedUpdateManyWithoutServicioInput>;
};
export type PrendaServicioCreateManyPrendaInput = {
    id?: number;
    servicioId: number;
    medidaEntregada?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: number | null;
    valorPorTiempo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    detallesCalculo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type PrendaServicioUpdateWithoutPrendaInput = {
    medidaEntregada?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valorPorTiempo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detallesCalculo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    servicio?: Prisma.CatalogoServicioUpdateOneRequiredWithoutAsignacionesNestedInput;
};
export type PrendaServicioUncheckedUpdateWithoutPrendaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    medidaEntregada?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valorPorTiempo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detallesCalculo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrendaServicioUncheckedUpdateManyWithoutPrendaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    medidaEntregada?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valorPorTiempo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detallesCalculo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrendaServicioCreateManyServicioInput = {
    id?: number;
    prendaId: number;
    medidaEntregada?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: number | null;
    valorPorTiempo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    detallesCalculo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type PrendaServicioUpdateWithoutServicioInput = {
    medidaEntregada?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valorPorTiempo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detallesCalculo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prenda?: Prisma.PrendaUpdateOneRequiredWithoutServiciosNestedInput;
};
export type PrendaServicioUncheckedUpdateWithoutServicioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    prendaId?: Prisma.IntFieldUpdateOperationsInput | number;
    medidaEntregada?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valorPorTiempo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detallesCalculo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrendaServicioUncheckedUpdateManyWithoutServicioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    prendaId?: Prisma.IntFieldUpdateOperationsInput | number;
    medidaEntregada?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tiempoCalculado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valorPorTiempo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    valorFactoresCobro?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioBruto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    precioFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detallesCalculo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrendaServicioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    prendaId?: boolean;
    servicioId?: boolean;
    medidaEntregada?: boolean;
    tiempoCalculado?: boolean;
    valorPorTiempo?: boolean;
    valorFactoresCobro?: boolean;
    precioBruto?: boolean;
    precioFinal?: boolean;
    observaciones?: boolean;
    detallesCalculo?: boolean;
    createdAt?: boolean;
    prenda?: boolean | Prisma.PrendaDefaultArgs<ExtArgs>;
    servicio?: boolean | Prisma.CatalogoServicioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prendaServicio"]>;
export type PrendaServicioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    prendaId?: boolean;
    servicioId?: boolean;
    medidaEntregada?: boolean;
    tiempoCalculado?: boolean;
    valorPorTiempo?: boolean;
    valorFactoresCobro?: boolean;
    precioBruto?: boolean;
    precioFinal?: boolean;
    observaciones?: boolean;
    detallesCalculo?: boolean;
    createdAt?: boolean;
    prenda?: boolean | Prisma.PrendaDefaultArgs<ExtArgs>;
    servicio?: boolean | Prisma.CatalogoServicioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prendaServicio"]>;
export type PrendaServicioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    prendaId?: boolean;
    servicioId?: boolean;
    medidaEntregada?: boolean;
    tiempoCalculado?: boolean;
    valorPorTiempo?: boolean;
    valorFactoresCobro?: boolean;
    precioBruto?: boolean;
    precioFinal?: boolean;
    observaciones?: boolean;
    detallesCalculo?: boolean;
    createdAt?: boolean;
    prenda?: boolean | Prisma.PrendaDefaultArgs<ExtArgs>;
    servicio?: boolean | Prisma.CatalogoServicioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prendaServicio"]>;
export type PrendaServicioSelectScalar = {
    id?: boolean;
    prendaId?: boolean;
    servicioId?: boolean;
    medidaEntregada?: boolean;
    tiempoCalculado?: boolean;
    valorPorTiempo?: boolean;
    valorFactoresCobro?: boolean;
    precioBruto?: boolean;
    precioFinal?: boolean;
    observaciones?: boolean;
    detallesCalculo?: boolean;
    createdAt?: boolean;
};
export type PrendaServicioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "prendaId" | "servicioId" | "medidaEntregada" | "tiempoCalculado" | "valorPorTiempo" | "valorFactoresCobro" | "precioBruto" | "precioFinal" | "observaciones" | "detallesCalculo" | "createdAt", ExtArgs["result"]["prendaServicio"]>;
export type PrendaServicioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prenda?: boolean | Prisma.PrendaDefaultArgs<ExtArgs>;
    servicio?: boolean | Prisma.CatalogoServicioDefaultArgs<ExtArgs>;
};
export type PrendaServicioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prenda?: boolean | Prisma.PrendaDefaultArgs<ExtArgs>;
    servicio?: boolean | Prisma.CatalogoServicioDefaultArgs<ExtArgs>;
};
export type PrendaServicioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prenda?: boolean | Prisma.PrendaDefaultArgs<ExtArgs>;
    servicio?: boolean | Prisma.CatalogoServicioDefaultArgs<ExtArgs>;
};
export type $PrendaServicioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PrendaServicio";
    objects: {
        prenda: Prisma.$PrendaPayload<ExtArgs>;
        servicio: Prisma.$CatalogoServicioPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        prendaId: number;
        servicioId: number;
        medidaEntregada: runtime.Decimal | null;
        tiempoCalculado: number | null;
        valorPorTiempo: runtime.Decimal | null;
        valorFactoresCobro: runtime.Decimal | null;
        precioBruto: runtime.Decimal | null;
        precioFinal: runtime.Decimal;
        observaciones: string | null;
        detallesCalculo: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["prendaServicio"]>;
    composites: {};
};
export type PrendaServicioGetPayload<S extends boolean | null | undefined | PrendaServicioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PrendaServicioPayload, S>;
export type PrendaServicioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PrendaServicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PrendaServicioCountAggregateInputType | true;
};
export interface PrendaServicioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PrendaServicio'];
        meta: {
            name: 'PrendaServicio';
        };
    };
    findUnique<T extends PrendaServicioFindUniqueArgs>(args: Prisma.SelectSubset<T, PrendaServicioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PrendaServicioClient<runtime.Types.Result.GetResult<Prisma.$PrendaServicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PrendaServicioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PrendaServicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrendaServicioClient<runtime.Types.Result.GetResult<Prisma.$PrendaServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PrendaServicioFindFirstArgs>(args?: Prisma.SelectSubset<T, PrendaServicioFindFirstArgs<ExtArgs>>): Prisma.Prisma__PrendaServicioClient<runtime.Types.Result.GetResult<Prisma.$PrendaServicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PrendaServicioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PrendaServicioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrendaServicioClient<runtime.Types.Result.GetResult<Prisma.$PrendaServicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PrendaServicioFindManyArgs>(args?: Prisma.SelectSubset<T, PrendaServicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrendaServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PrendaServicioCreateArgs>(args: Prisma.SelectSubset<T, PrendaServicioCreateArgs<ExtArgs>>): Prisma.Prisma__PrendaServicioClient<runtime.Types.Result.GetResult<Prisma.$PrendaServicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PrendaServicioCreateManyArgs>(args?: Prisma.SelectSubset<T, PrendaServicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PrendaServicioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PrendaServicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrendaServicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PrendaServicioDeleteArgs>(args: Prisma.SelectSubset<T, PrendaServicioDeleteArgs<ExtArgs>>): Prisma.Prisma__PrendaServicioClient<runtime.Types.Result.GetResult<Prisma.$PrendaServicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PrendaServicioUpdateArgs>(args: Prisma.SelectSubset<T, PrendaServicioUpdateArgs<ExtArgs>>): Prisma.Prisma__PrendaServicioClient<runtime.Types.Result.GetResult<Prisma.$PrendaServicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PrendaServicioDeleteManyArgs>(args?: Prisma.SelectSubset<T, PrendaServicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PrendaServicioUpdateManyArgs>(args: Prisma.SelectSubset<T, PrendaServicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PrendaServicioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PrendaServicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrendaServicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PrendaServicioUpsertArgs>(args: Prisma.SelectSubset<T, PrendaServicioUpsertArgs<ExtArgs>>): Prisma.Prisma__PrendaServicioClient<runtime.Types.Result.GetResult<Prisma.$PrendaServicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PrendaServicioCountArgs>(args?: Prisma.Subset<T, PrendaServicioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PrendaServicioCountAggregateOutputType> : number>;
    aggregate<T extends PrendaServicioAggregateArgs>(args: Prisma.Subset<T, PrendaServicioAggregateArgs>): Prisma.PrismaPromise<GetPrendaServicioAggregateType<T>>;
    groupBy<T extends PrendaServicioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PrendaServicioGroupByArgs['orderBy'];
    } : {
        orderBy?: PrendaServicioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PrendaServicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrendaServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PrendaServicioFieldRefs;
}
export interface Prisma__PrendaServicioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    prenda<T extends Prisma.PrendaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PrendaDefaultArgs<ExtArgs>>): Prisma.Prisma__PrendaClient<runtime.Types.Result.GetResult<Prisma.$PrendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    servicio<T extends Prisma.CatalogoServicioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CatalogoServicioDefaultArgs<ExtArgs>>): Prisma.Prisma__CatalogoServicioClient<runtime.Types.Result.GetResult<Prisma.$CatalogoServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PrendaServicioFieldRefs {
    readonly id: Prisma.FieldRef<"PrendaServicio", 'Int'>;
    readonly prendaId: Prisma.FieldRef<"PrendaServicio", 'Int'>;
    readonly servicioId: Prisma.FieldRef<"PrendaServicio", 'Int'>;
    readonly medidaEntregada: Prisma.FieldRef<"PrendaServicio", 'Decimal'>;
    readonly tiempoCalculado: Prisma.FieldRef<"PrendaServicio", 'Int'>;
    readonly valorPorTiempo: Prisma.FieldRef<"PrendaServicio", 'Decimal'>;
    readonly valorFactoresCobro: Prisma.FieldRef<"PrendaServicio", 'Decimal'>;
    readonly precioBruto: Prisma.FieldRef<"PrendaServicio", 'Decimal'>;
    readonly precioFinal: Prisma.FieldRef<"PrendaServicio", 'Decimal'>;
    readonly observaciones: Prisma.FieldRef<"PrendaServicio", 'String'>;
    readonly detallesCalculo: Prisma.FieldRef<"PrendaServicio", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"PrendaServicio", 'DateTime'>;
}
export type PrendaServicioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrendaServicioSelect<ExtArgs> | null;
    omit?: Prisma.PrendaServicioOmit<ExtArgs> | null;
    include?: Prisma.PrendaServicioInclude<ExtArgs> | null;
    where: Prisma.PrendaServicioWhereUniqueInput;
};
export type PrendaServicioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrendaServicioSelect<ExtArgs> | null;
    omit?: Prisma.PrendaServicioOmit<ExtArgs> | null;
    include?: Prisma.PrendaServicioInclude<ExtArgs> | null;
    where: Prisma.PrendaServicioWhereUniqueInput;
};
export type PrendaServicioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PrendaServicioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PrendaServicioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PrendaServicioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrendaServicioSelect<ExtArgs> | null;
    omit?: Prisma.PrendaServicioOmit<ExtArgs> | null;
    include?: Prisma.PrendaServicioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrendaServicioCreateInput, Prisma.PrendaServicioUncheckedCreateInput>;
};
export type PrendaServicioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PrendaServicioCreateManyInput | Prisma.PrendaServicioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PrendaServicioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrendaServicioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PrendaServicioOmit<ExtArgs> | null;
    data: Prisma.PrendaServicioCreateManyInput | Prisma.PrendaServicioCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PrendaServicioIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PrendaServicioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrendaServicioSelect<ExtArgs> | null;
    omit?: Prisma.PrendaServicioOmit<ExtArgs> | null;
    include?: Prisma.PrendaServicioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrendaServicioUpdateInput, Prisma.PrendaServicioUncheckedUpdateInput>;
    where: Prisma.PrendaServicioWhereUniqueInput;
};
export type PrendaServicioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PrendaServicioUpdateManyMutationInput, Prisma.PrendaServicioUncheckedUpdateManyInput>;
    where?: Prisma.PrendaServicioWhereInput;
    limit?: number;
};
export type PrendaServicioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrendaServicioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PrendaServicioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrendaServicioUpdateManyMutationInput, Prisma.PrendaServicioUncheckedUpdateManyInput>;
    where?: Prisma.PrendaServicioWhereInput;
    limit?: number;
    include?: Prisma.PrendaServicioIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PrendaServicioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrendaServicioSelect<ExtArgs> | null;
    omit?: Prisma.PrendaServicioOmit<ExtArgs> | null;
    include?: Prisma.PrendaServicioInclude<ExtArgs> | null;
    where: Prisma.PrendaServicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrendaServicioCreateInput, Prisma.PrendaServicioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PrendaServicioUpdateInput, Prisma.PrendaServicioUncheckedUpdateInput>;
};
export type PrendaServicioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrendaServicioSelect<ExtArgs> | null;
    omit?: Prisma.PrendaServicioOmit<ExtArgs> | null;
    include?: Prisma.PrendaServicioInclude<ExtArgs> | null;
    where: Prisma.PrendaServicioWhereUniqueInput;
};
export type PrendaServicioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrendaServicioWhereInput;
    limit?: number;
};
export type PrendaServicioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrendaServicioSelect<ExtArgs> | null;
    omit?: Prisma.PrendaServicioOmit<ExtArgs> | null;
    include?: Prisma.PrendaServicioInclude<ExtArgs> | null;
};
