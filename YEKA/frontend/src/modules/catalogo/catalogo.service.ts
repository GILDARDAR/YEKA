import api from '../../shared/api';
import type { CatalogoServicio, CreateCatalogoServicioDto, UpdateCatalogoServicioDto } from '../../shared/types';

export const catalogoService = {
  getAll: (categoria?: string) =>
    api.get<CatalogoServicio[]>('/catalogo-servicios', { params: categoria ? { categoria } : {} }).then(r => r.data),

  getById: (id: number) =>
    api.get<CatalogoServicio>(`/catalogo-servicios/${id}`).then(r => r.data),

  create: (dto: CreateCatalogoServicioDto) =>
    api.post<CatalogoServicio>('/catalogo-servicios', dto).then(r => r.data),

  update: (id: number, dto: UpdateCatalogoServicioDto) =>
    api.patch<CatalogoServicio>(`/catalogo-servicios/${id}`, dto).then(r => r.data),

  delete: (id: number) =>
    api.delete<CatalogoServicio>(`/catalogo-servicios/${id}`).then(r => r.data),
};
