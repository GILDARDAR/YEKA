import api from '../../shared/api';
import type { CategoriaFactorCobro, FactorCobro, TipoUrgencia } from '../../shared/types';

export const parametrosCobroService = {
  // --- Categorias ---
  getCategorias: () =>
    api.get<CategoriaFactorCobro[]>('/factores-cobro/categorias').then(r => r.data),
  createCategoria: (data: { nombre: string }) =>
    api.post<CategoriaFactorCobro>('/factores-cobro/categorias', data).then(r => r.data),
  updateCategoria: (id: number, data: { nombre?: string; activa?: boolean }) =>
    api.patch<CategoriaFactorCobro>(`/factores-cobro/categorias/${id}`, data).then(r => r.data),

  // --- Factores ---
  createFactor: (data: any) =>
    api.post<FactorCobro>('/factores-cobro/factores', data).then(r => r.data),
  updateFactor: (id: number, data: any) =>
    api.patch<FactorCobro>(`/factores-cobro/factores/${id}`, data).then(r => r.data),

  // --- Urgencias ---
  getUrgencias: () =>
    api.get<TipoUrgencia[]>('/tipo-urgencia').then(r => r.data),
  createUrgencia: (data: { nombre: string; porcentajeRecargo: number }) =>
    api.post<TipoUrgencia>('/tipo-urgencia', data).then(r => r.data),
  updateUrgencia: (id: number, data: any) =>
    api.patch<TipoUrgencia>(`/tipo-urgencia/${id}`, data).then(r => r.data),
  deleteUrgencia: (id: number) =>
    api.delete(`/tipo-urgencia/${id}`).then(r => r.data),
};
