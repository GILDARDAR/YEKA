import React, { useEffect, useState } from 'react';
import { catalogoService } from './catalogo.service';
import type { CatalogoServicio, CreateCatalogoServicioDto, CategoriaFactorCobro, TipoPrenda } from '../../shared/types';
import { Plus, Pencil, Tag, PackageOpen, Wrench, X } from 'lucide-react';
import api from '../../shared/api';

interface Material { id: number; descripcion: string; activo: boolean; }
interface TipoArreglo { id: number; descripcion: string; activo: boolean; }

export function CatalogoPage() {

  const [servicios, setServicios] = useState<CatalogoServicio[]>([]);
  const [categoriasFactores, setCategoriasFactores] = useState<CategoriaFactorCobro[]>([]);
  const [allMateriales, setAllMateriales] = useState<Material[]>([]);
  const [allTiposArreglo, setAllTiposArreglo] = useState<TipoArreglo[]>([]);
  const [tiposPrenda, setTiposPrenda] = useState<TipoPrenda[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [formData, setFormData] = useState<CreateCatalogoServicioDto & { activa?: boolean; tipoPrendaId: number | '' }>({
    nombre: '',
    tipoPrendaId: '',
    tipoEspecifico: '',
    medidaBase: 0,
    tiempoBase: 0,
    categoriasFactoresIds: [],
    materialesIds: [],
    tiposArregloIds: [],
    activa: true,
  });

  // Selección de materiales y tipos de arreglo en el modal
  const [selectedMateriales, setSelectedMateriales] = useState<Material[]>([]);
  const [selectedTiposArreglo, setSelectedTiposArreglo] = useState<TipoArreglo[]>([]);

  // Selector para añadir
  const [materialToAdd, setMaterialToAdd] = useState<number | ''>('');
  const [tipoArregloToAdd, setTipoArregloToAdd] = useState<number | ''>('');

  // Sub-form crear nuevo
  const [showNewMaterial, setShowNewMaterial] = useState(false);
  const [newMaterialDesc, setNewMaterialDesc] = useState('');
  const [savingMaterial, setSavingMaterial] = useState(false);

  const [showNewTipoArreglo, setShowNewTipoArreglo] = useState(false);
  const [newTipoArregloDesc, setNewTipoArregloDesc] = useState('');
  const [savingTipoArreglo, setSavingTipoArreglo] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [serviciosData, catFactoresData, materialesData, tiposArregloData, tiposPrendaData] = await Promise.all([
        catalogoService.getAll(),
        api.get('/factores-cobro/categorias').then(res => res.data),
        api.get<Material[]>('/material').then(res => res.data),
        api.get<TipoArreglo[]>('/tipo-arreglo').then(res => res.data),
        api.get<TipoPrenda[]>('/tipos-prenda').then(res => res.data),
      ]);
      setServicios(serviciosData);
      setCategoriasFactores(catFactoresData);
      setAllMateriales(materialesData);
      setAllTiposArreglo(tiposArregloData);
      setTiposPrenda(tiposPrendaData);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleOpenModal = (servicio?: CatalogoServicio) => {
    if (servicio) {
      setEditingId(servicio.id);
      setFormData({
        nombre: servicio.nombre,
        tipoPrendaId: servicio.tipoPrendaId || '',
        tipoEspecifico: servicio.tipoEspecifico,
        medidaBase: servicio.medidaBase,
        tiempoBase: servicio.tiempoBase,
        categoriasFactoresIds: servicio.categoriasFactores?.map(c => c.id) || [],
        materialesIds: servicio.materiales?.map(m => m.id) || [],
        tiposArregloIds: servicio.tiposArreglo?.map(t => t.id) || [],
        activa: servicio.activo,
      });
      setSelectedMateriales(servicio.materiales?.map(m => ({ id: m.id, descripcion: m.descripcion, activo: true })) || []);
      setSelectedTiposArreglo(servicio.tiposArreglo?.map(t => ({ id: t.id, descripcion: t.descripcion, activo: true })) || []);
    } else {
      setEditingId(null);
      setFormData({ nombre: '', tipoPrendaId: '', tipoEspecifico: '', medidaBase: 0, tiempoBase: 0, categoriasFactoresIds: [], materialesIds: [], tiposArregloIds: [], activa: true });
      setSelectedMateriales([]);
      setSelectedTiposArreglo([]);
    }
    setMaterialToAdd('');
    setTipoArregloToAdd('');
    setShowNewMaterial(false);
    setShowNewTipoArreglo(false);
    setNewMaterialDesc('');
    setNewTipoArregloDesc('');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => { setIsModalOpen(false); setEditingId(null); };

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
      return { ...prev, categoriasFactoresIds: ids.includes(id) ? ids.filter(i => i !== id) : [...ids, id] };
    });
  };

  // ── Materiales ──
  const handleAddMaterial = () => {
    if (materialToAdd === '') return;
    const mat = allMateriales.find(m => m.id === Number(materialToAdd));
    if (!mat || selectedMateriales.some(m => m.id === mat.id)) { setMaterialToAdd(''); return; }
    setSelectedMateriales(prev => [...prev, mat]);
    setMaterialToAdd('');
  };
  const handleRemoveMaterial = (id: number) => setSelectedMateriales(prev => prev.filter(m => m.id !== id));
  const handleCreateMaterial = async () => {
    if (!newMaterialDesc.trim()) return;
    setSavingMaterial(true);
    try {
      const res = await api.post<Material>('/material', { descripcion: newMaterialDesc.trim(), activo: true });
      await fetchData();
      setSelectedMateriales(prev => [...prev, res.data]);
      setNewMaterialDesc(''); setShowNewMaterial(false);
    } catch (err: any) {
      alert(err.response?.data?.message || err.message);
    } finally { setSavingMaterial(false); }
  };

  // ── Tipos de Arreglo ──
  const handleAddTipoArreglo = () => {
    if (tipoArregloToAdd === '') return;
    const ta = allTiposArreglo.find(t => t.id === Number(tipoArregloToAdd));
    if (!ta || selectedTiposArreglo.some(t => t.id === ta.id)) { setTipoArregloToAdd(''); return; }
    setSelectedTiposArreglo(prev => [...prev, ta]);
    setTipoArregloToAdd('');
  };
  const handleRemoveTipoArreglo = (id: number) => setSelectedTiposArreglo(prev => prev.filter(t => t.id !== id));
  const handleCreateTipoArreglo = async () => {
    if (!newTipoArregloDesc.trim()) return;
    setSavingTipoArreglo(true);
    try {
      const res = await api.post<TipoArreglo>('/tipo-arreglo', { descripcion: newTipoArregloDesc.trim(), activo: true });
      await fetchData();
      setSelectedTiposArreglo(prev => [...prev, res.data]);
      setNewTipoArregloDesc(''); setShowNewTipoArreglo(false);
    } catch (err: any) {
      alert(err.response?.data?.message || err.message);
    } finally { setSavingTipoArreglo(false); }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload: any = {
        nombre: formData.nombre,
        tipoPrendaId: typeof formData.tipoPrendaId === 'string' ? undefined : formData.tipoPrendaId,
        tipoEspecifico: formData.tipoEspecifico,
        medidaBase: formData.medidaBase,
        tiempoBase: formData.tiempoBase,
        categoriasFactoresIds: formData.categoriasFactoresIds,
        materialesIds: selectedMateriales.map(m => m.id),
        tiposArregloIds: selectedTiposArreglo.map(t => t.id),
      };
      if (editingId) {
        payload.activo = formData.activa;
        await catalogoService.update(editingId, payload);
      } else {
        await catalogoService.create(payload);
      }
      await fetchData();
      handleCloseModal();
    } catch (err: any) {
      alert(err.response?.data?.message || err.message || 'Error al guardar el servicio');
    }
  };

  const categorias = [...new Set(servicios.map(s => s.tipoPrenda?.nombre || 'Sin Tipo de Prenda'))].sort();

  // Estilos reutilizables
  const chipStyle: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: '4px',
    padding: '2px 8px', borderRadius: '999px',
    fontSize: '0.8rem', fontWeight: 500,
  };
  const sectionStyle: React.CSSProperties = {
    borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-4)',
  };

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
              const items = servicios.filter(s => (s.tipoPrenda?.nombre || 'Sin Tipo de Prenda') === cat && s.activo);
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
                          <th>Materiales</th>
                          <th>Tipos Arreglo</th>
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
                                {s.materiales && s.materiales.length > 0
                                  ? s.materiales.map(m => <span key={m.id} className="badge badge-neutral" style={{ fontSize: '11px' }}>{m.descripcion}</span>)
                                  : <span style={{ color: 'var(--color-text-light)', fontSize: '0.8rem' }}>—</span>}
                              </div>
                            </td>
                            <td>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                {s.tiposArreglo && s.tiposArreglo.length > 0
                                  ? s.tiposArreglo.map(t => <span key={t.id} className="badge badge-neutral" style={{ fontSize: '11px' }}>{t.descripcion}</span>)
                                  : <span style={{ color: 'var(--color-text-light)', fontSize: '0.8rem' }}>—</span>}
                              </div>
                            </td>
                            <td>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                {s.categoriasFactores?.map(cf => (
                                  <span key={cf.id} className="badge badge-primary" style={{ fontSize: '11px' }}>{cf.nombre}</span>
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
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)', padding: 'var(--space-4)' }}>
          <div className="card" style={{ width: '100%', maxWidth: '780px', padding: 'var(--space-6)', maxHeight: '92vh', overflowY: 'auto' }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-5)' }}>
              {editingId ? 'Editar Servicio' : 'Nuevo Servicio'}
            </h2>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div className="form-group">
                  <label className="form-label">Nombre General</label>
                  <input type="text" name="nombre" required value={formData.nombre} onChange={handleBasicChange} className="form-input" placeholder="Ej. Dobladillo Pantalón" />
                </div>
                <div className="form-group">
                  <label className="form-label">Tipo de Prenda</label>
                  <select
                    name="tipoPrendaId"
                    required
                    value={formData.tipoPrendaId}
                    onChange={(e) => setFormData(prev => ({ ...prev, tipoPrendaId: Number(e.target.value) || '' }))}
                    className="form-select"
                  >
                    <option value="">Seleccione...</option>
                    {tiposPrenda.map(t => (
                      <option key={t.id} value={t.id}>{t.nombre}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div className="form-group">
                  <label className="form-label">Tipo Específico</label>
                  <input type="text" name="tipoEspecifico" required value={formData.tipoEspecifico} onChange={handleBasicChange} className="form-input" placeholder="Ej. Dobladillo simple" />
                </div>
                <div className="form-group">
                  <label className="form-label">Medida Base (cm)</label>
                  <input type="number" name="medidaBase" required min="0" step="0.01" value={formData.medidaBase} onChange={handleBasicChange} className="form-input" />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div className="form-group">
                  <label className="form-label">Tiempo Base (minutos)</label>
                  <input type="number" name="tiempoBase" required min="0" value={formData.tiempoBase} onChange={handleBasicChange} className="form-input" />
                </div>
                {editingId && (
                  <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: 'var(--space-2)', marginTop: '28px' }}>
                    <input type="checkbox" id="activa" name="activa" checked={formData.activa} onChange={handleBasicChange} />
                    <label htmlFor="activa" className="form-label" style={{ margin: 0 }}>Servicio Activo</label>
                  </div>
                )}
              </div>

              {/* ── Categorías de Factores ── */}
              <div style={sectionStyle}>
                <h3 style={{ fontSize: 'var(--text-base)', fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)' }}>
                  Categorías de Factores Aplicables
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                  {categoriasFactores.filter(c => c.activa).map(cat => (
                    <label key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-hover)', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', border: '1px solid var(--color-border)' }}>
                      <input type="checkbox" checked={(formData.categoriasFactoresIds || []).includes(cat.id)} onChange={() => toggleCategoriaFactor(cat.id)} />
                      {cat.nombre}
                    </label>
                  ))}
                </div>
              </div>

              {/* ── Materiales asociados ── */}
              <div style={sectionStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                  <PackageOpen size={16} />
                  <label className="form-label" style={{ margin: 0, fontWeight: 'var(--font-semibold)' }}>Materiales asociados</label>
                </div>

                {selectedMateriales.length === 0 ? (
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', marginBottom: 'var(--space-3)' }}>Sin materiales asociados.</p>
                ) : (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: 'var(--space-3)' }}>
                    {selectedMateriales.map(m => (
                      <span key={m.id} style={{ ...chipStyle, backgroundColor: 'var(--color-primary-light, #e0e7ff)', color: 'var(--color-primary, #4f46e5)' }}>
                        {m.descripcion}
                        <button type="button" onClick={() => handleRemoveMaterial(m.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', color: 'inherit', opacity: 0.7 }} title="Quitar"><X size={12} /></button>
                      </span>
                    ))}
                  </div>
                )}

                <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
                  <select value={materialToAdd} onChange={e => setMaterialToAdd(e.target.value === '' ? '' : Number(e.target.value))} className="form-input" style={{ flex: 1 }}>
                    <option value="">Seleccionar material...</option>
                    {allMateriales.filter(m => m.activo && !selectedMateriales.some(s => s.id === m.id)).map(m => (
                      <option key={m.id} value={m.id}>{m.descripcion}</option>
                    ))}
                  </select>
                  <button type="button" onClick={handleAddMaterial} className="btn btn-primary btn-sm" disabled={materialToAdd === ''} style={{ whiteSpace: 'nowrap' }}>
                    <Plus size={14} /> Añadir
                  </button>
                </div>

                {!showNewMaterial ? (
                  <button type="button" onClick={() => setShowNewMaterial(true)} className="btn btn-ghost btn-sm" style={{ fontSize: '0.8rem' }}>
                    <Plus size={13} /> Crear nuevo material
                  </button>
                ) : (
                  <div style={{ border: '1px dashed var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-3)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}>
                    <label className="form-label" style={{ margin: 0, fontSize: '0.82rem' }}>Descripción del nuevo material</label>
                    <input type="text" className="form-input" value={newMaterialDesc} onChange={e => setNewMaterialDesc(e.target.value)} placeholder="Ej. Algodón, Seda..." maxLength={500} />
                    <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'flex-end' }}>
                      <button type="button" onClick={() => { setShowNewMaterial(false); setNewMaterialDesc(''); }} className="btn btn-ghost btn-sm">Cancelar</button>
                      <button type="button" onClick={handleCreateMaterial} className="btn btn-primary btn-sm" disabled={savingMaterial || !newMaterialDesc.trim()}>
                        {savingMaterial ? 'Guardando...' : 'Crear y añadir'}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* ── Tipos de Arreglo ── */}
              <div style={sectionStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                  <Wrench size={16} />
                  <label className="form-label" style={{ margin: 0, fontWeight: 'var(--font-semibold)' }}>Tipos de Arreglo asociados</label>
                </div>

                {selectedTiposArreglo.length === 0 ? (
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', marginBottom: 'var(--space-3)' }}>Sin tipos de arreglo asociados.</p>
                ) : (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: 'var(--space-3)' }}>
                    {selectedTiposArreglo.map(t => (
                      <span key={t.id} style={{ ...chipStyle, backgroundColor: 'var(--color-success-light, #d1fae5)', color: 'var(--color-success, #065f46)' }}>
                        {t.descripcion}
                        <button type="button" onClick={() => handleRemoveTipoArreglo(t.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', color: 'inherit', opacity: 0.7 }} title="Quitar"><X size={12} /></button>
                      </span>
                    ))}
                  </div>
                )}

                <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
                  <select value={tipoArregloToAdd} onChange={e => setTipoArregloToAdd(e.target.value === '' ? '' : Number(e.target.value))} className="form-input" style={{ flex: 1 }}>
                    <option value="">Seleccionar tipo de arreglo...</option>
                    {allTiposArreglo.filter(t => t.activo && !selectedTiposArreglo.some(s => s.id === t.id)).map(t => (
                      <option key={t.id} value={t.id}>{t.descripcion}</option>
                    ))}
                  </select>
                  <button type="button" onClick={handleAddTipoArreglo} className="btn btn-primary btn-sm" disabled={tipoArregloToAdd === ''} style={{ whiteSpace: 'nowrap' }}>
                    <Plus size={14} /> Añadir
                  </button>
                </div>

                {!showNewTipoArreglo ? (
                  <button type="button" onClick={() => setShowNewTipoArreglo(true)} className="btn btn-ghost btn-sm" style={{ fontSize: '0.8rem' }}>
                    <Plus size={13} /> Crear nuevo tipo de arreglo
                  </button>
                ) : (
                  <div style={{ border: '1px dashed var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-3)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}>
                    <label className="form-label" style={{ margin: 0, fontSize: '0.82rem' }}>Descripción del nuevo tipo de arreglo</label>
                    <input type="text" className="form-input" value={newTipoArregloDesc} onChange={e => setNewTipoArregloDesc(e.target.value)} placeholder="Ej. Dobladillo, Cremallera..." maxLength={500} />
                    <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'flex-end' }}>
                      <button type="button" onClick={() => { setShowNewTipoArreglo(false); setNewTipoArregloDesc(''); }} className="btn btn-ghost btn-sm">Cancelar</button>
                      <button type="button" onClick={handleCreateTipoArreglo} className="btn btn-primary btn-sm" disabled={savingTipoArreglo || !newTipoArregloDesc.trim()}>
                        {savingTipoArreglo ? 'Guardando...' : 'Crear y añadir'}
                      </button>
                    </div>
                  </div>
                )}
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
