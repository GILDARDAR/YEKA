import api from '../../shared/api';
import type { Sede, CreateSedeDto, UpdateSedeDto, CapacidadResponse } from '../../shared/types';

export const sedesService = {
  getAll: () => api.get<Sede[]>('/sedes').then(r => r.data),

  getById: (id: number) => api.get<Sede>(`/sedes/${id}`).then(r => r.data),

  getCapacidad: (id: number, fecha?: string) =>
    api.get<CapacidadResponse>(`/sedes/${id}/capacidad`, { params: fecha ? { fecha } : {} }).then(r => r.data),

  create: (dto: CreateSedeDto) => api.post<Sede>('/sedes', dto).then(r => r.data),

  update: (id: number, dto: UpdateSedeDto) => api.patch<Sede>(`/sedes/${id}`, dto).then(r => r.data),

  delete: (id: number) => api.delete<Sede>(`/sedes/${id}`).then(r => r.data),
};
