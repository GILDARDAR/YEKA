import React, { useEffect, useState } from 'react';
import { catalogoService } from './catalogo.service';
import tipoPrendaService from '../../services/tipo-prenda.service';
import type { CatalogoServicio, TipoPrenda, CreateCatalogoServicioDto } from '../../shared/types';
import { Tag, Plus, Pencil } from 'lucide-react';
import { useAuth } from '../../shared/auth.context';

export function CatalogoPage() {
  const { user } = useAuth();
  const isAdmin = user?.rol === 'ADMIN';

  const [servicios, setServicios] = useState<CatalogoServicio[]>([]);
  const [tiposPrenda, setTiposPrenda] = useState<TipoPrenda[]>([]);
  const [loading, setLoading]     = useState(true);
  const [categoriaFilter, setCategoriaFilter] = useState('');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [formData, setFormData] = useState<CreateCatalogoServicioDto & { activa?: boolean }>({
    categoria: '',
    tipoEspecifico: '',
    pesoPuntos: 0,
    preciosPorPrenda: [],
    activa: true,
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const [serviciosData, tiposData] = await Promise.all([
        catalogoService.getAll(),
        tipoPrendaService.getTiposPrenda()
      ]);
      setServicios(serviciosData);
      setTiposPrenda(tiposData.filter(t => t.activo));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModal = (servicio?: CatalogoServicio) => {
    if (servicio) {
      setEditingId(servicio.id);
      setFormData({
        categoria: servicio.categoria,
        tipoEspecifico: servicio.tipoEspecifico,
        pesoPuntos: servicio.pesoPuntos,
        activa: servicio.activo,
        preciosPorPrenda: servicio.preciosPorPrenda.map(p => ({
          tipoPrendaId: p.tipoPrendaId,
          medidaBase: Number(p.medidaBase),
          precioBase: Number(p.precioBase),
          medidaExtra: Number(p.medidaExtra),
          precioExtra: Number(p.precioExtra),
        }))
      });
    } else {
      setEditingId(null);
      setFormData({
        categoria: '',
        tipoEspecifico: '',
        pesoPuntos: 0,
        activa: true,
        preciosPorPrenda: []
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
  };

  const handleBasicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'number') {
      setFormData(prev => ({ ...prev, [name]: Number(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleAddRegla = () => {
    if (tiposPrenda.length === 0) return;
    setFormData(prev => ({
      ...prev,
      preciosPorPrenda: [
        ...prev.preciosPorPrenda,
        {
          tipoPrendaId: tiposPrenda[0].id,
          medidaBase: 0,
          precioBase: 0,
          medidaExtra: 1,
          precioExtra: 0,
        }
      ]
    }));
  };

  const handleRemoveRegla = (index: number) => {
    setFormData(prev => {
      const newReglas = [...prev.preciosPorPrenda];
      newReglas.splice(index, 1);
      return { ...prev, preciosPorPrenda: newReglas };
    });
  };

  const handleReglaChange = (index: number, field: string, value: string | number) => {
    setFormData(prev => {
      const newReglas = [...prev.preciosPorPrenda];
      newReglas[index] = { ...newReglas[index], [field]: Number(value) };
      return { ...prev, preciosPorPrenda: newReglas };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload: any = {
        categoria: formData.categoria,
        tipoEspecifico: formData.tipoEspecifico,
        pesoPuntos: formData.pesoPuntos,
        preciosPorPrenda: formData.preciosPorPrenda
      };

      if (editingId) {
        payload.activo = formData.activa;
        await catalogoService.update(editingId, payload);
      } else {
        await catalogoService.create(payload);
      }
      fetchData();
      handleCloseModal();
    } catch (err: any) {
      alert(err.response?.data?.message || err.message || 'Error al guardar el servicio');
    }
  };

  const categorias = [...new Set(servicios.map(s => s.categoria))].sort();
  const filtered = categorias
    .filter(c => !categoriaFilter || c === categoriaFilter)
    .map(c => ({ categoria: c, items: servicios.filter(s => s.categoria === c && s.activo) }));

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Catálogo de Servicios</h1>
          <p className="page-subtitle">{servicios.filter(s => s.activo).length} servicios activos</p>
        </div>
        {isAdmin && (
          <button className="btn btn-primary" onClick={() => handleOpenModal()}>
            <Plus size={16} /> Nuevo servicio
          </button>
        )}
      </div>

      {/* Categoria filter */}
      <div className="card" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-4)' }}>
        <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Categoría:</span>
          <button
            className={`badge ${!categoriaFilter ? 'badge-primary' : 'badge-neutral'}`}
            style={{ cursor: 'pointer', padding: '4px 12px', border: 'none' }}
            onClick={() => setCategoriaFilter('')}
          >Todas</button>
          {categorias.map(c => (
            <button
              key={c}
              className={`badge ${categoriaFilter === c ? 'badge-primary' : 'badge-neutral'}`}
              style={{ cursor: 'pointer', padding: '4px 12px', border: 'none' }}
              onClick={() => setCategoriaFilter(categoriaFilter === c ? '' : c)}
            >{c}</button>
          ))}
        </div>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}><div className="spinner spinner-lg" /></div>
      ) : filtered.length === 0 ? (
        <div className="empty-state">
          <Tag size={40} className="empty-state-icon" />
          <p className="empty-state-title">Catálogo vacío</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          {filtered.map(({ categoria, items }) => (
            <div key={categoria}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-3)', color: 'var(--color-text-light)', paddingBottom: 'var(--space-2)', borderBottom: '1px solid var(--color-border)' }}>
                {categoria}
              </h3>
              <div className="table-wrapper">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Servicio</th>
                      <th>Precios por Prenda</th>
                      <th>Peso en puntos</th>
                      {isAdmin && <th></th>}
                    </tr>
                  </thead>
                  <tbody>
                    {items.map(s => (
                      <tr key={s.id}>
                        <td style={{ fontWeight: 'var(--font-medium)' }}>{s.tipoEspecifico}</td>
                        <td style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', fontWeight: 'var(--font-semibold)' }}>
                          {s.preciosPorPrenda?.length || 0} reglas
                        </td>
                        <td>
                          <span className="badge badge-neutral">{s.pesoPuntos} pts</span>
                        </td>
                        {isAdmin && (
                          <td>
                            <button className="btn btn-ghost btn-sm btn-icon" onClick={() => handleOpenModal(s)}>
                              <Pencil size={14} />
                            </button>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1000, 
          display: 'flex', alignItems: 'center', justifyContent: 'center', 
          backgroundColor: 'rgba(0,0,0,0.5)', padding: 'var(--space-4)'
        }}>
          <div className="card" style={{ width: '100%', maxWidth: '700px', padding: 'var(--space-6)', maxHeight: '90vh', overflowY: 'auto' }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)' }}>
              {editingId ? 'Editar Servicio' : 'Nuevo Servicio'}
            </h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div className="form-group">
                  <label className="form-label">Categoría</label>
                  <input
                    type="text"
                    name="categoria"
                    required
                    value={formData.categoria}
                    onChange={handleBasicChange}
                    className="form-input"
                    placeholder="Ej. Arreglos, Tintorería..."
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Tipo Específico</label>
                  <input
                    type="text"
                    name="tipoEspecifico"
                    required
                    value={formData.tipoEspecifico}
                    onChange={handleBasicChange}
                    className="form-input"
                    placeholder="Ej. Dobladillo simple"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div className="form-group">
                  <label className="form-label">Peso en Puntos</label>
                  <input
                    type="number"
                    name="pesoPuntos"
                    required
                    min="0"
                    value={formData.pesoPuntos}
                    onChange={handleBasicChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: 'var(--space-2)', marginTop: '28px' }}>
                  <input
                    type="checkbox"
                    id="activa"
                    name="activa"
                    checked={formData.activa}
                    onChange={handleBasicChange}
                  />
                  <label htmlFor="activa" className="form-label" style={{ margin: 0 }}>
                    Servicio Activo
                  </label>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontFamily: 'var(--font-heading)' }}>Reglas de Precio por Prenda</h3>
                  <button type="button" className="btn btn-sm" onClick={handleAddRegla}>
                    <Plus size={14} /> Añadir regla
                  </button>
                </div>

                {formData.preciosPorPrenda.length === 0 ? (
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>No hay reglas de precio. El servicio será gratuito o debes añadir una regla.</p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    {formData.preciosPorPrenda.map((regla, idx) => (
                      <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr auto', gap: 'var(--space-2)', alignItems: 'end', background: 'var(--bg)', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                        <div className="form-group" style={{ marginBottom: 0 }}>
                          <label className="form-label" style={{ fontSize: '10px' }}>Tipo Prenda</label>
                          <select 
                            className="form-input" 
                            style={{ padding: '4px 8px', fontSize: '12px' }}
                            value={regla.tipoPrendaId}
                            onChange={(e) => handleReglaChange(idx, 'tipoPrendaId', e.target.value)}
                          >
                            {tiposPrenda.map(t => (
                              <option key={t.id} value={t.id}>{t.nombre}</option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group" style={{ marginBottom: 0 }}>
                          <label className="form-label" style={{ fontSize: '10px' }}>Medida Base (cm)</label>
                          <input type="number" min="0" className="form-input" style={{ padding: '4px 8px', fontSize: '12px' }} value={regla.medidaBase} onChange={(e) => handleReglaChange(idx, 'medidaBase', e.target.value)} />
                        </div>
                        <div className="form-group" style={{ marginBottom: 0 }}>
                          <label className="form-label" style={{ fontSize: '10px' }}>Precio Base (€)</label>
                          <input type="number" step="0.01" min="0" className="form-input" style={{ padding: '4px 8px', fontSize: '12px' }} value={regla.precioBase} onChange={(e) => handleReglaChange(idx, 'precioBase', e.target.value)} />
                        </div>
                        <div className="form-group" style={{ marginBottom: 0 }}>
                          <label className="form-label" style={{ fontSize: '10px' }}>Medida Extra (cm)</label>
                          <input type="number" min="1" className="form-input" style={{ padding: '4px 8px', fontSize: '12px' }} value={regla.medidaExtra} onChange={(e) => handleReglaChange(idx, 'medidaExtra', e.target.value)} />
                        </div>
                        <div className="form-group" style={{ marginBottom: 0 }}>
                          <label className="form-label" style={{ fontSize: '10px' }}>Precio Extra (€)</label>
                          <input type="number" step="0.01" min="0" className="form-input" style={{ padding: '4px 8px', fontSize: '12px' }} value={regla.precioExtra} onChange={(e) => handleReglaChange(idx, 'precioExtra', e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-ghost btn-icon btn-sm" onClick={() => handleRemoveRegla(idx)} style={{ color: 'var(--color-danger)' }}>
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-2)', marginTop: 'var(--space-6)' }}>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="btn btn-ghost"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
