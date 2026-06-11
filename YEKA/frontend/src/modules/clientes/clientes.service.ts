import api from '../../shared/api';
import type { Cliente, CreateClienteDto, UpdateClienteDto } from '../../shared/types';

export const clientesService = {
  getAll: (sedeId?: number) =>
    api.get<Cliente[]>('/clientes', { params: sedeId ? { sedeId } : {} }).then(r => r.data),

  search: (q: string) =>
    api.get<Cliente[]>('/clientes', { params: { q } }).then(r => r.data),

  getById: (id: number) =>
    api.get<Cliente>(`/clientes/${id}`).then(r => r.data),

  create: (dto: CreateClienteDto) =>
    api.post<Cliente>('/clientes', dto).then(r => r.data),

  update: (id: number, dto: UpdateClienteDto) =>
    api.patch<Cliente>(`/clientes/${id}`, dto).then(r => r.data),

  delete: (id: number) =>
    api.delete<Cliente>(`/clientes/${id}`).then(r => r.data),
};
