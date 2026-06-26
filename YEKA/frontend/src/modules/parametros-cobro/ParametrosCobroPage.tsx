import React, { useEffect, useState } from 'react';
import { parametrosCobroService } from './parametros-cobro.service';
import type { CategoriaFactorCobro, FactorCobro, TipoUrgencia, TipoFactor } from '../../shared/types';
import { Plus, Pencil, Trash2 } from 'lucide-react';

export function ParametrosCobroPage() {
  const [activeTab, setActiveTab] = useState<'categorias' | 'factores' | 'urgencias'>('categorias');
  const [categorias, setCategorias] = useState<CategoriaFactorCobro[]>([]);
  const [urgencias, setUrgencias] = useState<TipoUrgencia[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal states
  const [isCategoriaModalOpen, setIsCategoriaModalOpen] = useState(false);
  const [isFactorModalOpen, setIsFactorModalOpen] = useState(false);
  const [isUrgenciaModalOpen, setIsUrgenciaModalOpen] = useState(false);
  
  const [editingId, setEditingId] = useState<number | null>(null);
  const [selectedCategoriaId, setSelectedCategoriaId] = useState<number | null>(null);

  // Forms
  const [catForm, setCatForm] = useState({ nombre: '', activa: true });
  const [facForm, setFacForm] = useState({ nombre: '', valor: 0, tipo: 'FIJO_POR_SERVICIO' as TipoFactor, activo: true });
  const [urgForm, setUrgForm] = useState({ nombre: '', porcentajeRecargo: 0, activo: true });

  const fetchData = async () => {
    try {
      setLoading(true);
      const [cats, urgs] = await Promise.all([
        parametrosCobroService.getCategorias(),
        parametrosCobroService.getUrgencias(),
      ]);
      setCategorias(cats);
      setUrgencias(urgs);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // --- Categoria Handlers ---
  const openCatModal = (cat?: CategoriaFactorCobro) => {
    if (cat) {
      setEditingId(cat.id);
      setCatForm({ nombre: cat.nombre, activa: cat.activa });
    } else {
      setEditingId(null);
      setCatForm({ nombre: '', activa: true });
    }
    setIsCategoriaModalOpen(true);
  };

  const saveCategoria = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await parametrosCobroService.updateCategoria(editingId, catForm);
      } else {
        await parametrosCobroService.createCategoria({ nombre: catForm.nombre });
      }
      setIsCategoriaModalOpen(false);
      fetchData();
    } catch (err: any) {
      alert(err.response?.data?.message || err.message);
    }
  };

  // --- Factor Handlers ---
  const openFactorModal = (catId: number, factor?: FactorCobro) => {
    setSelectedCategoriaId(catId);
    if (factor) {
      setEditingId(factor.id);
      setFacForm({ nombre: factor.nombre, valor: Number(factor.valor), tipo: factor.tipo, activo: factor.activo });
    } else {
      setEditingId(null);
      setFacForm({ nombre: '', valor: 0, tipo: 'FIJO_POR_SERVICIO', activo: true });
    }
    setIsFactorModalOpen(true);
  };

  const saveFactor = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategoriaId) return;
    try {
      if (editingId) {
        await parametrosCobroService.updateFactor(editingId, facForm);
      } else {
        await parametrosCobroService.createFactor({ categoriaId: selectedCategoriaId, ...facForm });
      }
      setIsFactorModalOpen(false);
      fetchData();
    } catch (err: any) {
      alert(err.response?.data?.message || err.message);
    }
  };

  // --- Urgencia Handlers ---
  const openUrgModal = (urg?: TipoUrgencia) => {
    if (urg) {
      setEditingId(urg.id);
      setUrgForm({ nombre: urg.nombre, porcentajeRecargo: Number(urg.porcentajeRecargo), activo: urg.activo });
    } else {
      setEditingId(null);
      setUrgForm({ nombre: '', porcentajeRecargo: 0, activo: true });
    }
    setIsUrgenciaModalOpen(true);
  };

  const saveUrgencia = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await parametrosCobroService.updateUrgencia(editingId, urgForm);
      } else {
        await parametrosCobroService.createUrgencia({ nombre: urgForm.nombre, porcentajeRecargo: urgForm.porcentajeRecargo });
      }
      setIsUrgenciaModalOpen(false);
      fetchData();
    } catch (err: any) {
      alert(err.response?.data?.message || err.message);
    }
  };

  const deleteUrgencia = async (id: number) => {
    if (!window.confirm('¿Eliminar tipo de urgencia?')) return;
    try {
      await parametrosCobroService.deleteUrgencia(id);
      fetchData();
    } catch (err: any) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Parámetros de Cobro</h1>
          <p className="page-subtitle">Configura categorías, factores adicionales y urgencias</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-4)', marginBottom: 'var(--space-6)', borderBottom: '1px solid var(--color-border)' }}>
        <button 
          className={`btn ${activeTab === 'categorias' ? 'btn-primary' : 'btn-ghost'}`} 
          style={{ borderRadius: '4px 4px 0 0', marginBottom: '-1px' }}
          onClick={() => setActiveTab('categorias')}
        >
          Categorías
        </button>
        <button 
          className={`btn ${activeTab === 'factores' ? 'btn-primary' : 'btn-ghost'}`} 
          style={{ borderRadius: '4px 4px 0 0', marginBottom: '-1px' }}
          onClick={() => setActiveTab('factores')}
        >
          Factores por Categoría
        </button>
        <button 
          className={`btn ${activeTab === 'urgencias' ? 'btn-primary' : 'btn-ghost'}`} 
          style={{ borderRadius: '4px 4px 0 0', marginBottom: '-1px' }}
          onClick={() => setActiveTab('urgencias')}
        >
          Tipos de Urgencia
        </button>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}><div className="spinner spinner-lg" /></div>
      ) : (
        <>
          {/* CATEGORIAS TAB */}
          {activeTab === 'categorias' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-4)' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Categorías de Cobro</h2>
                <button className="btn btn-primary btn-sm" onClick={() => openCatModal()}>
                  <Plus size={16} /> Nueva Categoría
                </button>
              </div>
              <div className="table-wrapper">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Estado</th>
                      <th>Factores Asociados</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {categorias.map(cat => (
                      <tr key={cat.id}>
                        <td style={{ fontWeight: 500 }}>{cat.nombre}</td>
                        <td>
                          <span className={`badge ${cat.activa ? 'badge-success' : 'badge-neutral'}`}>
                            {cat.activa ? 'Activa' : 'Inactiva'}
                          </span>
                        </td>
                        <td>{cat.factores?.length || 0}</td>
                        <td>
                          <button className="btn btn-ghost btn-sm btn-icon" onClick={() => openCatModal(cat)}>
                            <Pencil size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {categorias.length === 0 && (
                      <tr><td colSpan={4} style={{ textAlign: 'center' }}>No hay categorías registradas</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* FACTORES TAB */}
          {activeTab === 'factores' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              {categorias.length === 0 ? (
                <div className="empty-state"><p>Crea al menos una categoría primero.</p></div>
              ) : (
                categorias.map(cat => (
                  <div key={cat.id} className="card" style={{ padding: 'var(--space-4)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-4)', borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-2)' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{cat.nombre}</h3>
                      <button className="btn btn-outline btn-sm" onClick={() => openFactorModal(cat.id)}>
                        <Plus size={14} /> Añadir Factor
                      </button>
                    </div>
                    {(!cat.factores || cat.factores.length === 0) ? (
                      <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>No hay factores en esta categoría.</p>
                    ) : (
                      <div className="table-wrapper">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Nombre</th>
                              <th>Tipo</th>
                              <th>Valor</th>
                              <th>Estado</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {cat.factores.map(fac => (
                              <tr key={fac.id}>
                                <td>{fac.nombre}</td>
                                <td><span className="badge badge-primary">{fac.tipo}</span></td>
                                <td>{fac.tipo === 'PORCENTAJE_SOBRE_PRECIO' ? `${Number(fac.valor) * 100}%` : `$${fac.valor}`}</td>
                                <td>
                                  <span className={`badge ${fac.activo ? 'badge-success' : 'badge-neutral'}`}>
                                    {fac.activo ? 'Activo' : 'Inactivo'}
                                  </span>
                                </td>
                                <td>
                                  <button className="btn btn-ghost btn-sm btn-icon" onClick={() => openFactorModal(cat.id, fac)}>
                                    <Pencil size={14} />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}

          {/* URGENCIAS TAB */}
          {activeTab === 'urgencias' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-4)' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Tipos de Urgencia</h2>
                <button className="btn btn-primary btn-sm" onClick={() => openUrgModal()}>
                  <Plus size={16} /> Nueva Urgencia
                </button>
              </div>
              <div className="table-wrapper">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Recargo (%)</th>
                      <th>Estado</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {urgencias.map(urg => (
                      <tr key={urg.id}>
                        <td style={{ fontWeight: 500 }}>{urg.nombre}</td>
                        <td>{Number(urg.porcentajeRecargo) * 100}%</td>
                        <td>
                          <span className={`badge ${urg.activo ? 'badge-success' : 'badge-neutral'}`}>
                            {urg.activo ? 'Activo' : 'Inactivo'}
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-ghost btn-sm btn-icon" onClick={() => openUrgModal(urg)}>
                            <Pencil size={14} />
                          </button>
                          <button className="btn btn-ghost btn-sm btn-icon" onClick={() => deleteUrgencia(urg.id)} style={{ color: 'var(--color-danger)' }}>
                            <Trash2 size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {urgencias.length === 0 && (
                      <tr><td colSpan={4} style={{ textAlign: 'center' }}>No hay urgencias registradas</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}

      {/* MODAL CATEGORIA */}
      {isCategoriaModalOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className="card" style={{ width: '100%', maxWidth: '400px', padding: 'var(--space-5)' }}>
            <h3 style={{ marginBottom: 'var(--space-4)' }}>{editingId ? 'Editar Categoría' : 'Nueva Categoría'}</h3>
            <form onSubmit={saveCategoria} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div className="form-group">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-input" required value={catForm.nombre} onChange={e => setCatForm({...catForm, nombre: e.target.value})} />
              </div>
              {editingId && (
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <input type="checkbox" checked={catForm.activa} onChange={e => setCatForm({...catForm, activa: e.target.checked})} />
                  <label>Categoría Activa</label>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '16px' }}>
                <button type="button" className="btn btn-ghost" onClick={() => setIsCategoriaModalOpen(false)}>Cancelar</button>
                <button type="submit" className="btn btn-primary">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL FACTOR */}
      {isFactorModalOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className="card" style={{ width: '100%', maxWidth: '400px', padding: 'var(--space-5)' }}>
            <h3 style={{ marginBottom: 'var(--space-4)' }}>{editingId ? 'Editar Factor' : 'Nuevo Factor'}</h3>
            <form onSubmit={saveFactor} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div className="form-group">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-input" required value={facForm.nombre} onChange={e => setFacForm({...facForm, nombre: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Tipo de Factor</label>
                <select className="form-input" value={facForm.tipo} onChange={e => setFacForm({...facForm, tipo: e.target.value as TipoFactor})}>
                  <option value="FIJO_POR_SERVICIO">Monto Fijo por Servicio</option>
                  <option value="PORCENTAJE_SOBRE_PRECIO">Porcentaje sobre el precio</option>
                  <option value="DIARIO">Monto Diario</option>
                  <option value="MENSUAL">Monto Mensual</option>
                  <option value="ANUAL">Monto Anual</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Valor (Ej. 0.15 para 15%, o 10.00 para $10)</label>
                <input type="number" step="0.01" className="form-input" required value={facForm.valor} onChange={e => setFacForm({...facForm, valor: Number(e.target.value)})} />
              </div>
              {editingId && (
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <input type="checkbox" checked={facForm.activo} onChange={e => setFacForm({...facForm, activo: e.target.checked})} />
                  <label>Factor Activo</label>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '16px' }}>
                <button type="button" className="btn btn-ghost" onClick={() => setIsFactorModalOpen(false)}>Cancelar</button>
                <button type="submit" className="btn btn-primary">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL URGENCIA */}
      {isUrgenciaModalOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className="card" style={{ width: '100%', maxWidth: '400px', padding: 'var(--space-5)' }}>
            <h3 style={{ marginBottom: 'var(--space-4)' }}>{editingId ? 'Editar Urgencia' : 'Nueva Urgencia'}</h3>
            <form onSubmit={saveUrgencia} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div className="form-group">
                <label className="form-label">Nombre (Ej. 24 horas)</label>
                <input type="text" className="form-input" required value={urgForm.nombre} onChange={e => setUrgForm({...urgForm, nombre: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Recargo (Ej. 0.50 para 50%)</label>
                <input type="number" step="0.01" className="form-input" required value={urgForm.porcentajeRecargo} onChange={e => setUrgForm({...urgForm, porcentajeRecargo: Number(e.target.value)})} />
              </div>
              {editingId && (
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <input type="checkbox" checked={urgForm.activo} onChange={e => setUrgForm({...urgForm, activo: e.target.checked})} />
                  <label>Urgencia Activa</label>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '16px' }}>
                <button type="button" className="btn btn-ghost" onClick={() => setIsUrgenciaModalOpen(false)}>Cancelar</button>
                <button type="submit" className="btn btn-primary">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
