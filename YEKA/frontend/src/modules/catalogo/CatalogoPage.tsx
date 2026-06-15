import React, { useEffect, useState, useMemo } from 'react';
import { catalogoService } from './catalogo.service';
import tipoPrendaService from '../../services/tipo-prenda.service';
import type { CatalogoServicio, TipoPrenda, CreateCatalogoServicioDto } from '../../shared/types';
import { Tag, Plus, Pencil, ChevronDown, ChevronRight, Package, Settings } from 'lucide-react';
export function CatalogoPage() {

  const [servicios, setServicios] = useState<CatalogoServicio[]>([]);
  const [tiposPrenda, setTiposPrenda] = useState<TipoPrenda[]>([]);
  const [loading, setLoading] = useState(true);

  // Vista activa: 'prenda' = por tipo prenda, 'servicio' = por servicio
  const [vista, setVista] = useState<'prenda' | 'servicio'>('prenda');

  // Filas expandidas en la vista por tipo prenda
  const [expandedTipos, setExpandedTipos] = useState<Set<number>>(new Set());

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

  // Agrupación por TipoPrenda: { tipoPrenda, serviciosDisponibles[] }
  const porTipoPrenda = useMemo(() => {
    return tiposPrenda.map(tp => {
      const svsDisponibles = servicios.filter(s =>
        s.activo && s.preciosPorPrenda.some(p => Number(p.tipoPrendaId) === tp.id)
      );
      return { tipoPrenda: tp, servicios: svsDisponibles };
    });
  }, [tiposPrenda, servicios]);

  const toggleTipo = (id: number) => {
    setExpandedTipos(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

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
    // Sugerir el primer tipo prenda que aún no tenga regla
    const usados = new Set(formData.preciosPorPrenda.map(r => r.tipoPrendaId));
    const siguiente = tiposPrenda.find(t => !usados.has(t.id)) ?? tiposPrenda[0];
    setFormData(prev => ({
      ...prev,
      preciosPorPrenda: [
        ...prev.preciosPorPrenda,
        {
          tipoPrendaId: siguiente.id,
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

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Catálogo de Servicios</h1>
          <p className="page-subtitle">{servicios.filter(s => s.activo).length} servicios activos · {tiposPrenda.length} tipos de prenda</p>
        </div>
          <button className="btn btn-primary" onClick={() => handleOpenModal()}>
            <Plus size={16} /> Nuevo servicio
          </button>
      </div>

      {/* Selector de vista */}
      <div className="card" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-3) var(--space-4)' }}>
        <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginRight: 'var(--space-2)' }}>Ver por:</span>
          <button
            className={`btn btn-sm ${vista === 'prenda' ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => setVista('prenda')}
          >
            <Package size={14} /> Tipo de Prenda
          </button>
          <button
            className={`btn btn-sm ${vista === 'servicio' ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => setVista('servicio')}
          >
            <Settings size={14} /> Por Servicio
          </button>
        </div>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}><div className="spinner spinner-lg" /></div>
      ) : (
        <>
          {/* ══════════════ VISTA POR TIPO DE PRENDA ══════════════ */}
          {vista === 'prenda' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {porTipoPrenda.length === 0 ? (
                <div className="empty-state">
                  <Tag size={40} className="empty-state-icon" />
                  <p className="empty-state-title">No hay tipos de prenda</p>
                  <p className="empty-state-desc">Crea tipos de prenda primero desde la configuración.</p>
                </div>
              ) : (
                porTipoPrenda.map(({ tipoPrenda, servicios: svs }) => {
                  const isExpanded = expandedTipos.has(tipoPrenda.id);
                  return (
                    <div key={tipoPrenda.id} className="card" style={{ overflow: 'hidden', padding: 0 }}>
                      {/* Cabecera del tipo prenda */}
                      <button
                        type="button"
                        onClick={() => toggleTipo(tipoPrenda.id)}
                        style={{
                          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          padding: 'var(--space-4) var(--space-5)',
                          background: isExpanded ? 'var(--color-primary-soft)' : 'transparent',
                          border: 'none', cursor: 'pointer', textAlign: 'left',
                          transition: 'background 0.2s',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                          {isExpanded
                            ? <ChevronDown size={18} style={{ color: 'var(--color-primary)' }} />
                            : <ChevronRight size={18} style={{ color: 'var(--color-text-muted)' }} />
                          }
                          <div style={{
                            width: 36, height: 36, borderRadius: 'var(--radius-md)',
                            background: 'var(--color-primary-soft)', color: 'var(--color-primary)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                          }}>
                            <Tag size={18} />
                          </div>
                          <div>
                            <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-semibold)', fontSize: 'var(--text-base)', textTransform: 'uppercase' }}>
                              {tipoPrenda.nombre}
                            </p>
                            {tipoPrenda.descripcion && (
                              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{tipoPrenda.descripcion}</p>
                            )}
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                          <span className={`badge ${svs.length > 0 ? 'badge-success' : 'badge-neutral'}`}>
                            {svs.length} {svs.length === 1 ? 'servicio' : 'servicios'}
                          </span>
                        </div>
                      </button>

                      {/* Lista de servicios del tipo */}
                      {isExpanded && (
                        <div style={{ borderTop: '1px solid var(--color-border)' }}>
                          {svs.length === 0 ? (
                            <div style={{ padding: 'var(--space-5)', textAlign: 'center' }}>
                              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>
                                ⚠️ Ningún servicio configurado para este tipo de prenda.
                              </p>
                                <button
                                  className="btn btn-sm btn-primary"
                                  style={{ marginTop: 'var(--space-2)' }}
                                  onClick={() => handleOpenModal()}
                                >
                                  <Plus size={13} /> Crear servicio
                                </button>
                            </div>
                          ) : (
                            <table className="table" style={{ margin: 0 }}>
                              <thead>
                                <tr>
                                  <th>Categoría</th>
                                  <th>Servicio</th>
                                  <th>Precio base</th>
                                  <th>Medida base (cm)</th>
                                  <th>Precio extra / unidad</th>
                                  <th>Peso pts</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                {svs.map(s => {
                                  const regla = s.preciosPorPrenda.find(p => Number(p.tipoPrendaId) === tipoPrenda.id);
                                  return (
                                    <tr key={s.id}>
                                      <td>
                                        <span className="badge badge-neutral">{s.categoria}</span>
                                      </td>
                                      <td style={{ fontWeight: 'var(--font-medium)' }}>{s.tipoEspecifico}</td>
                                      <td style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>
                                        €{Number(regla?.precioBase ?? 0).toFixed(2)}
                                      </td>
                                      <td style={{ color: 'var(--color-text-light)' }}>
                                        {Number(regla?.medidaBase ?? 0)} cm
                                      </td>
                                      <td style={{ color: 'var(--color-text-light)' }}>
                                        +€{Number(regla?.precioExtra ?? 0).toFixed(2)} / {Number(regla?.medidaExtra ?? 1)} cm
                                      </td>
                                      <td>
                                        <span className="badge badge-neutral">{s.pesoPuntos} pts</span>
                                      </td>
                                        <td>
                                          <button className="btn btn-ghost btn-sm btn-icon" onClick={() => handleOpenModal(s)} title="Editar servicio">
                                            <Pencil size={14} />
                                          </button>
                                        </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* ══════════════ VISTA POR SERVICIO ══════════════ */}
          {vista === 'servicio' && (
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
                              <th>Servicio</th>
                              <th>Tipos de Prenda cubiertos</th>
                              <th>Peso pts</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {items.map(s => (
                              <tr key={s.id}>
                                <td style={{ fontWeight: 'var(--font-medium)' }}>{s.tipoEspecifico}</td>
                                <td>
                                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                    {s.preciosPorPrenda.length === 0 ? (
                                      <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>Sin reglas</span>
                                    ) : (
                                      s.preciosPorPrenda.map(p => {
                                        const tp = tiposPrenda.find(t => t.id === Number(p.tipoPrendaId));
                                        return (
                                          <span key={p.tipoPrendaId} className="badge badge-primary" style={{ fontSize: '11px' }}>
                                            {tp?.nombre ?? `ID ${p.tipoPrendaId}`} · €{Number(p.precioBase).toFixed(2)}
                                          </span>
                                        );
                                      })
                                    )}
                                  </div>
                                </td>
                                <td>
                                  <span className="badge badge-neutral">{s.pesoPuntos} pts</span>
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
        </>
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
                  <label className="form-label">Categoría</label>
                  <input
                    type="text" name="categoria" required
                    value={formData.categoria} onChange={handleBasicChange}
                    className="form-input" placeholder="Ej. Arreglos, Tintorería..."
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Tipo Específico</label>
                  <input
                    type="text" name="tipoEspecifico" required
                    value={formData.tipoEspecifico} onChange={handleBasicChange}
                    className="form-input" placeholder="Ej. Dobladillo simple"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div className="form-group">
                  <label className="form-label">Peso en Puntos</label>
                  <input
                    type="number" name="pesoPuntos" required min="0"
                    value={formData.pesoPuntos} onChange={handleBasicChange}
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

              {/* Reglas de precio por tipo de prenda */}
              <div style={{ borderTop: '2px solid var(--color-border)', paddingTop: 'var(--space-5)', marginTop: 'var(--space-2)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
                  <div>
                    <h3 style={{ fontSize: 'var(--text-base)', fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-semibold)' }}>
                      Reglas de Precio por Tipo de Prenda
                    </h3>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                      Un tipo de prenda puede tener 0 o más reglas de precio para este servicio.
                    </p>
                  </div>
                  <button type="button" className="btn btn-sm btn-primary" onClick={handleAddRegla}
                    disabled={formData.preciosPorPrenda.length >= tiposPrenda.length}
                  >
                    <Plus size={14} /> Añadir tipo de prenda
                  </button>
                </div>

                {formData.preciosPorPrenda.length === 0 ? (
                  <div style={{
                    padding: 'var(--space-4)', background: 'var(--bg-hover)', borderRadius: 'var(--radius-md)',
                    textAlign: 'center', border: '2px dashed var(--color-border)'
                  }}>
                    <Tag size={24} style={{ margin: '0 auto var(--space-2)', color: 'var(--color-text-muted)' }} />
                    <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>
                      Sin reglas. Haz clic en <strong>"Añadir tipo de prenda"</strong> para configurar el precio de este servicio para cada tipo de prenda.
                    </p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    {formData.preciosPorPrenda.map((regla, idx) => {
                      const usados = new Set(formData.preciosPorPrenda.map((r, i) => i !== idx ? r.tipoPrendaId : null).filter(Boolean));
                      return (
                        <div key={idx} style={{
                          background: 'var(--bg-hover)', padding: 'var(--space-4)', borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--color-border)'
                        }}>
                          {/* Cabecera de la regla */}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                              <Tag size={14} style={{ color: 'var(--color-primary)' }} />
                              <select
                                className="form-input"
                                style={{ padding: '4px 8px', fontSize: '13px', fontWeight: '600' }}
                                value={regla.tipoPrendaId}
                                onChange={(e) => handleReglaChange(idx, 'tipoPrendaId', e.target.value)}
                              >
                                {tiposPrenda.map(t => (
                                  <option key={t.id} value={t.id} disabled={usados.has(t.id)}>
                                    {t.nombre}{usados.has(t.id) ? ' (ya añadido)' : ''}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <button
                              type="button"
                              className="btn btn-ghost btn-sm btn-icon"
                              onClick={() => handleRemoveRegla(idx)}
                              style={{ color: 'var(--color-danger)' }}
                              title="Eliminar regla"
                            >
                              ×
                            </button>
                          </div>

                          {/* Campos de la regla */}
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 'var(--space-3)' }}>
                            <div className="form-group" style={{ marginBottom: 0 }}>
                              <label className="form-label" style={{ fontSize: '11px' }}>Precio Base (€)</label>
                              <input
                                type="number" step="0.01" min="0" className="form-input"
                                style={{ padding: '6px 8px', fontSize: '13px' }}
                                value={regla.precioBase}
                                onChange={(e) => handleReglaChange(idx, 'precioBase', e.target.value)}
                              />
                            </div>
                            <div className="form-group" style={{ marginBottom: 0 }}>
                              <label className="form-label" style={{ fontSize: '11px' }}>Medida Base (cm)</label>
                              <input
                                type="number" min="0" className="form-input"
                                style={{ padding: '6px 8px', fontSize: '13px' }}
                                value={regla.medidaBase}
                                onChange={(e) => handleReglaChange(idx, 'medidaBase', e.target.value)}
                              />
                            </div>
                            <div className="form-group" style={{ marginBottom: 0 }}>
                              <label className="form-label" style={{ fontSize: '11px' }}>Precio Extra (€)</label>
                              <input
                                type="number" step="0.01" min="0" className="form-input"
                                style={{ padding: '6px 8px', fontSize: '13px' }}
                                value={regla.precioExtra}
                                onChange={(e) => handleReglaChange(idx, 'precioExtra', e.target.value)}
                              />
                            </div>
                            <div className="form-group" style={{ marginBottom: 0 }}>
                              <label className="form-label" style={{ fontSize: '11px' }}>Cada X cm extra</label>
                              <input
                                type="number" min="1" className="form-input"
                                style={{ padding: '6px 8px', fontSize: '13px' }}
                                value={regla.medidaExtra}
                                onChange={(e) => handleReglaChange(idx, 'medidaExtra', e.target.value)}
                              />
                            </div>
                          </div>

                          {/* Preview del precio */}
                          <div style={{ marginTop: 'var(--space-2)', fontSize: '11px', color: 'var(--color-text-muted)' }}>
                            💡 Precio: €{Number(regla.precioBase).toFixed(2)} hasta {Number(regla.medidaBase)} cm · +€{Number(regla.precioExtra).toFixed(2)} por cada {Number(regla.medidaExtra)} cm adicional
                          </div>
                        </div>
                      );
                    })}
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
