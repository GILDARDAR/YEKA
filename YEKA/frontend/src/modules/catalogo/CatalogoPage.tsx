import React, { useEffect, useState } from 'react';
import { catalogoService } from './catalogo.service';
import type { CatalogoServicio, CreateCatalogoServicioDto, CategoriaFactorCobro } from '../../shared/types';
import { Plus, Pencil, Tag } from 'lucide-react';
import api from '../../shared/api';

export function CatalogoPage() {

  const [servicios, setServicios] = useState<CatalogoServicio[]>([]);
  const [categoriasFactores, setCategoriasFactores] = useState<CategoriaFactorCobro[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [formData, setFormData] = useState<CreateCatalogoServicioDto & { activa?: boolean }>({
    nombre: '',
    categoria: '',
    tipoEspecifico: '',
    medidaBase: 0,
    tiempoBase: 0,
    categoriasFactoresIds: [],
    activa: true,
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const [serviciosData, catFactoresData] = await Promise.all([
        catalogoService.getAll(),
        api.get('/factores-cobro/categorias').then(res => res.data)
      ]);
      setServicios(serviciosData);
      setCategoriasFactores(catFactoresData);
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
        nombre: servicio.nombre,
        categoria: servicio.categoria,
        tipoEspecifico: servicio.tipoEspecifico,
        medidaBase: servicio.medidaBase,
        tiempoBase: servicio.tiempoBase,
        categoriasFactoresIds: servicio.categoriasFactores?.map(c => c.id) || [],
        activa: servicio.activo,
      });
    } else {
      setEditingId(null);
      setFormData({
        nombre: '',
        categoria: '',
        tipoEspecifico: '',
        medidaBase: 0,
        tiempoBase: 0,
        categoriasFactoresIds: [],
        activa: true,
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
  };

  const handleBasicChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'number') {
      setFormData(prev => ({ ...prev, [name]: Number(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const toggleCategoriaFactor = (id: number) => {
    setFormData(prev => {
      const ids = prev.categoriasFactoresIds || [];
      if (ids.includes(id)) {
        return { ...prev, categoriasFactoresIds: ids.filter(i => i !== id) };
      } else {
        return { ...prev, categoriasFactoresIds: [...ids, id] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload: any = {
        nombre: formData.nombre,
        categoria: formData.categoria,
        tipoEspecifico: formData.tipoEspecifico,
        medidaBase: formData.medidaBase,
        tiempoBase: formData.tiempoBase,
        categoriasFactoresIds: formData.categoriasFactoresIds
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

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Catálogo de Servicios</h1>
          <p className="page-subtitle">{servicios.filter(s => s.activo).length} servicios activos</p>
        </div>
          <button className="btn btn-primary" onClick={() => handleOpenModal()}>
            <Plus size={16} /> Nuevo servicio
          </button>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}><div className="spinner spinner-lg" /></div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          {categorias.length === 0 ? (
            <div className="empty-state">
              <Tag size={40} className="empty-state-icon" />
              <p className="empty-state-title">Catálogo vacío</p>
              <p className="empty-state-desc">Crea tu primer servicio con el botón "Nuevo servicio".</p>
            </div>
          ) : (
            categorias.map(cat => {
              const items = servicios.filter(s => s.categoria === cat && s.activo);
              if (items.length === 0) return null;
              return (
                <div key={cat}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-3)', color: 'var(--color-text-light)', paddingBottom: 'var(--space-2)', borderBottom: '1px solid var(--color-border)' }}>
                    {cat}
                  </h3>
                  <div className="table-wrapper">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Específico</th>
                          <th>Medida Base (cm)</th>
                          <th>Tiempo Base (min)</th>
                          <th>Categorías Factores</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map(s => (
                          <tr key={s.id}>
                            <td style={{ fontWeight: 'var(--font-medium)' }}>{s.nombre}</td>
                            <td>{s.tipoEspecifico}</td>
                            <td>{s.medidaBase} cm</td>
                            <td>{s.tiempoBase} min</td>
                            <td>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                {s.categoriasFactores?.map(cf => (
                                  <span key={cf.id} className="badge badge-primary" style={{ fontSize: '11px' }}>
                                    {cf.nombre}
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td>
                              <button className="btn btn-ghost btn-sm btn-icon" onClick={() => handleOpenModal(s)}>
                                <Pencil size={14} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* ══════════════ MODAL ══════════════ */}
      {isModalOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.6)', padding: 'var(--space-4)'
        }}>
          <div className="card" style={{ width: '100%', maxWidth: '750px', padding: 'var(--space-6)', maxHeight: '92vh', overflowY: 'auto' }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-5)' }}>
              {editingId ? 'Editar Servicio' : 'Nuevo Servicio'}
            </h2>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div className="form-group">
                  <label className="form-label">Nombre General</label>
                  <input
                    type="text" name="nombre" required
                    value={formData.nombre} onChange={handleBasicChange}
                    className="form-input" placeholder="Ej. Dobladillo Pantalón"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Categoría</label>
                  <input
                    type="text" name="categoria" required
                    value={formData.categoria} onChange={handleBasicChange}
                    className="form-input" placeholder="Ej. Arreglos, Tintorería..."
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div className="form-group">
                  <label className="form-label">Tipo Específico</label>
                  <input
                    type="text" name="tipoEspecifico" required
                    value={formData.tipoEspecifico} onChange={handleBasicChange}
                    className="form-input" placeholder="Ej. Dobladillo simple"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Medida Base (cm)</label>
                  <input
                    type="number" name="medidaBase" required min="0" step="0.01"
                    value={formData.medidaBase} onChange={handleBasicChange}
                    className="form-input"
                  />
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div className="form-group">
                  <label className="form-label">Tiempo Base (minutos)</label>
                  <input
                    type="number" name="tiempoBase" required min="0"
                    value={formData.tiempoBase} onChange={handleBasicChange}
                    className="form-input"
                  />
                </div>
                {editingId && (
                  <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: 'var(--space-2)', marginTop: '28px' }}>
                    <input type="checkbox" id="activa" name="activa" checked={formData.activa} onChange={handleBasicChange} />
                    <label htmlFor="activa" className="form-label" style={{ margin: 0 }}>Servicio Activo</label>
                  </div>
                )}
              </div>

              <div style={{ borderTop: '2px solid var(--color-border)', paddingTop: 'var(--space-5)', marginTop: 'var(--space-2)' }}>
                <h3 style={{ fontSize: 'var(--text-base)', fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)' }}>
                  Categorías de Factores Aplicables
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                  {categoriasFactores.filter(c => c.activa).map(cat => (
                    <label key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-hover)', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', border: '1px solid var(--color-border)' }}>
                      <input 
                        type="checkbox" 
                        checked={(formData.categoriasFactoresIds || []).includes(cat.id)}
                        onChange={() => toggleCategoriaFactor(cat.id)}
                      />
                      {cat.nombre}
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
                <button type="button" onClick={handleCloseModal} className="btn btn-ghost">Cancelar</button>
                <button type="submit" className="btn btn-primary">
                  {editingId ? 'Guardar cambios' : 'Crear servicio'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
