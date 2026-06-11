import api from '../shared/api';
import type { TipoPrenda, CreateTipoPrendaDto, UpdateTipoPrendaDto } from '../shared/types';

class TipoPrendaService {
  async getTiposPrenda(): Promise<TipoPrenda[]> {
    const response = await api.get<TipoPrenda[]>('/tipos-prenda');
    return response.data;
  }

  async createTipoPrenda(dto: CreateTipoPrendaDto): Promise<TipoPrenda> {
    const response = await api.post<TipoPrenda>('/tipos-prenda', dto);
    return response.data;
  }

  async updateTipoPrenda(id: number, dto: UpdateTipoPrendaDto): Promise<TipoPrenda> {
    const response = await api.patch<TipoPrenda>(`/tipos-prenda/${id}`, dto);
    return response.data;
  }

  async deleteTipoPrenda(id: number): Promise<void> {
    await api.delete(`/tipos-prenda/${id}`);
  }
}

export default new TipoPrendaService();
