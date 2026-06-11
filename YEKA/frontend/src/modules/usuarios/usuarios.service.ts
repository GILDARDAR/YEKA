import api from '../../shared/api';
import type { Usuario, CreateUsuarioDto, UpdateUsuarioDto } from '../../shared/types';

export const usuariosService = {
  getAll: (sedeId?: number) =>
    api.get<Usuario[]>('/usuarios', { params: sedeId ? { sedeId } : {} }).then(r => r.data),

  getById: (id: number) =>
    api.get<Usuario>(`/usuarios/${id}`).then(r => r.data),

  create: (dto: CreateUsuarioDto) =>
    api.post<Usuario>('/usuarios', dto).then(r => r.data),

  update: (id: number, dto: UpdateUsuarioDto) =>
    api.patch<Usuario>(`/usuarios/${id}`, dto).then(r => r.data),

  delete: (id: number) =>
    api.delete<Usuario>(`/usuarios/${id}`).then(r => r.data),
};
