import api from '../../shared/api';
import type { Factura, CreateFacturaDto, AddAbonoDto, EstadoPago } from '../../shared/types';

export const facturasService = {
  getAll: (sedeId?: number, estadoPago?: EstadoPago) =>
    api.get<Factura[]>('/facturas', { params: { ...(sedeId ? { sedeId } : {}), ...(estadoPago ? { estadoPago } : {}) } }).then(r => r.data),

  getById: (id: number) =>
    api.get<Factura>(`/facturas/${id}`).then(r => r.data),

  create: (dto: CreateFacturaDto) =>
    api.post<Factura>('/facturas', dto).then(r => r.data),

  anular: (id: number) =>
    api.patch<Factura>(`/facturas/${id}/anular`).then(r => r.data),

  addAbono: (id: number, dto: AddAbonoDto) =>
    api.post<Factura>(`/facturas/${id}/abonos`, dto).then(r => r.data),
};
