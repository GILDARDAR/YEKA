import api from '../../shared/api';
import type { Prenda, CreatePrendaDto, AsignarServicioDto, CambiarEstadoDto, PrendaServicio, EstadoPrenda } from '../../shared/types';

export const prendasService = {
  getAll: (filters?: { estadoActual?: EstadoPrenda; facturaId?: number; usuarioTallerId?: number }) =>
    api.get<Prenda[]>('/prendas', { params: filters }).then(r => r.data),

  getById: (id: number) =>
    api.get<Prenda>(`/prendas/${id}`).then(r => r.data),

  create: (dto: CreatePrendaDto) =>
    api.post<Prenda>('/prendas', dto).then(r => r.data),

  update: (id: number, dto: Partial<CreatePrendaDto>) =>
    api.patch<Prenda>(`/prendas/${id}`, dto).then(r => r.data),

  cambiarEstado: (id: number, dto: CambiarEstadoDto) =>
    api.patch<Prenda>(`/prendas/${id}/estado`, dto).then(r => r.data),

  cambiarTipoExpress: (id: number, tipoExpress: string) =>
    api.patch<Prenda>(`/prendas/${id}/express`, { tipoExpress }).then(r => r.data),

  asignarServicio: (id: number, dto: AsignarServicioDto) =>
    api.post<PrendaServicio>(`/prendas/${id}/servicios`, dto).then(r => r.data),

  eliminarServicio: (prendaId: number, prendaServicioId: number) =>
    api.delete(`/prendas/${prendaId}/servicios/${prendaServicioId}`).then(r => r.data),

  subirFoto: (id: number, fotoUrl: string) =>
    api.patch<Prenda>(`/prendas/${id}/foto`, { fotoUrl }).then(r => r.data),

  delete: (id: number) =>
    api.delete<Prenda>(`/prendas/${id}`).then(r => r.data),
};
