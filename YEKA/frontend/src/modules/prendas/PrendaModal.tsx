import React, { useState } from 'react';
import { prendasService } from './prendas.service';
import tipoPrendaService from '../../services/tipo-prenda.service';
import { catalogoService } from '../catalogo/catalogo.service';
import api from '../../shared/api';
import type { Prenda, TipoPrenda, CatalogoServicio, PrendaServicio, EstadoPrenda, CategoriaFactorCobro } from '../../shared/types';
import { Check, Trash2, Edit2, X, Calendar, Plus } from 'lucide-react';

interface PrendaModalProps {
  facturaId: number;
  prendaToEdit: Prenda | null;
  tiposPrenda: TipoPrenda[];
  catalogoServicios: CatalogoServicio[];
  onClose: () => void;
  onSaved: () => void; // Called when any change happens so parent can refresh
  onTipoPrendaCreated?: (nuevoTipo: TipoPrenda) => void; // Optional: called after creating a new tipo
}

const ESTADOS_PRENDA: EstadoPrenda[] = [
  'RECIBIDA', 'PENDIENTE_VALORACION', 'EN_PRODUCCION', 
  'ESPERANDO_PRUEBA', 'PENDIENTE_RECOGIDA', 'ENTREGADA', 'PROPIEDAD_TALLER'
];

const ESTADO_LABELS: Record<EstadoPrenda, string> = {
  RECIBIDA: 'Recibida',
  PENDIENTE_VALORACION: 'Pend. valoración',
  EN_PRODUCCION: 'En producción',
  ESPERANDO_PRUEBA: 'Esp. prueba',
  PENDIENTE_RECOGIDA: 'Pend. recogida',
  ENTREGADA: 'Entregada',
  PROPIEDAD_TALLER: 'Propiedad taller'
};

export function PrendaModal({
  facturaId,
  prendaToEdit,
  tiposPrenda: tiposPrendaProp,
  catalogoServicios: catalogoServiciosProp,
  onClose,
  onSaved,
  onTipoPrendaCreated,
}: PrendaModalProps) {
  // Local copy of tiposPrenda so we can append newly created ones without refreshing parent
  const [tiposPrenda, setTiposPrenda] = useState<TipoPrenda[]>(tiposPrendaProp);
  const [catalogoServicios, setCatalogoServicios] = useState<CatalogoServicio[]>(catalogoServiciosProp);
  const isEditingInitial = !!prendaToEdit;
  const [isEditingPrenda, setIsEditingPrenda] = useState(isEditingInitial);
  
  const [prendaForm, setPrendaForm] = useState({
    tipoPrendaId: prendaToEdit?.tipoPrendaId?.toString() || '',
    tipoUrgenciaId: prendaToEdit?.tipoUrgenciaId?.toString() || '',
    talla: prendaToEdit?.talla || '',
    color: prendaToEdit?.color || '',
    esLujo: prendaToEdit?.esLujo || false,
    marca: prendaToEdit?.marca || '',
    notas: prendaToEdit?.notas || '',
  });

  const [activePrenda, setActivePrenda] = useState<Prenda | null>(prendaToEdit);

  React.useEffect(() => {
    if (prendaToEdit && prendaToEdit.id) {
      prendasService.getById(prendaToEdit.id).then(fullPrenda => {
        setActivePrenda(fullPrenda);
        setPrendaForm({
          tipoPrendaId: fullPrenda.tipoPrendaId?.toString() || '',
          tipoUrgenciaId: fullPrenda.tipoUrgenciaId?.toString() || '',
          talla: fullPrenda.talla || '',
          color: fullPrenda.color || '',
          esLujo: fullPrenda.esLujo || false,
          marca: fullPrenda.marca || '',
          notas: fullPrenda.notas || '',
        });
      }).catch(err => console.error("Error fetching full prenda:", err));
    }
  }, [prendaToEdit?.id]);

  // ─── Nuevo Tipo de Prenda inline ──────────────────────────────────────
  const [showNuevoTipoModal, setShowNuevoTipoModal] = useState(false);
  const [nuevoTipoForm, setNuevoTipoForm] = useState({ nombre: '', descripcion: '', porcentajeDificultad: 0 });
  const [savingNuevoTipo, setSavingNuevoTipo] = useState(false);

  const handleCrearNuevoTipo = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSavingNuevoTipo(true);
      const created = await tipoPrendaService.createTipoPrenda({ ...nuevoTipoForm, activo: true });
      // Add to local list and auto-select it
      setTiposPrenda(prev => [...prev, created]);
      setPrendaForm(p => ({ ...p, tipoPrendaId: created.id.toString() }));
      if (onTipoPrendaCreated) onTipoPrendaCreated(created);
      setShowNuevoTipoModal(false);
      setNuevoTipoForm({ nombre: '', descripcion: '', porcentajeDificultad: 0 });
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al crear tipo de prenda');
    } finally {
      setSavingNuevoTipo(false);
    }
  };

  // ─── Nuevo Servicio inline ──────────────────────────────────────
  const [showNuevoServicioModal, setShowNuevoServicioModal] = useState(false);
  const [nuevoServicioForm, setNuevoServicioForm] = useState({
    nombre: '',
    categoria: '',
    tipoEspecifico: '',
    medidaBase: 0,
    tiempoBase: 0,
    categoriasFactoresIds: [] as number[],
    activa: true,
  });
  const [savingNuevoServicio, setSavingNuevoServicio] = useState(false);
  const [categoriasFactores, setCategoriasFactores] = useState<CategoriaFactorCobro[]>([]);

  React.useEffect(() => {
    if (showNuevoServicioModal && categoriasFactores.length === 0) {
      api.get('/factores-cobro/categorias').then(res => setCategoriasFactores(res.data)).catch(console.error);
    }
  }, [showNuevoServicioModal, categoriasFactores.length]);

  const toggleCategoriaFactor = (id: number) => {
    setNuevoServicioForm(prev => {
      const ids = prev.categoriasFactoresIds;
      if (ids.includes(id)) {
        return { ...prev, categoriasFactoresIds: ids.filter(i => i !== id) };
      } else {
        return { ...prev, categoriasFactoresIds: [...ids, id] };
      }
    });
  };

  const handleCrearNuevoServicio = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSavingNuevoServicio(true);
      const created = await catalogoService.create(nuevoServicioForm);
      
      // Actualizamos la lista local de servicios
      setCatalogoServicios(prev => [...prev, created]);
      
      // Auto seleccionamos el nuevo servicio
      setServicioSeleccionado(created.id.toString());
      setBusquedaServicio('');
      setMedidaEntregada('');
      setObservacionesServicio('');
      
      setShowNuevoServicioModal(false);
      setNuevoServicioForm({
        nombre: '',
        categoria: '',
        tipoEspecifico: '',
        medidaBase: 0,
        tiempoBase: 0,
        categoriasFactoresIds: [],
        activa: true,
      });
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al crear servicio');
    } finally {
      setSavingNuevoServicio(false);
    }
  };

  // Service Row State
  const [servicioSeleccionado, setServicioSeleccionado] = useState('');
  const [medidaEntregada, setMedidaEntregada] = useState<number | ''>('');
  const [observacionesServicio, setObservacionesServicio] = useState('');
  const [isCalculando, setIsCalculando] = useState(false);
  const [busquedaServicio, setBusquedaServicio] = useState('');
  const [tiposUrgencia, setTiposUrgencia] = useState<any[]>([]);

  React.useEffect(() => {
    api.get('/tipo-urgencia').then(res => setTiposUrgencia(res.data)).catch(console.error);
  }, []);

  // Handle ESC key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSavePrenda = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const dto = {
        facturaId: Number(facturaId),
        tipoPrendaId: Number(prendaForm.tipoPrendaId),
        tipoUrgenciaId: prendaForm.tipoUrgenciaId ? Number(prendaForm.tipoUrgenciaId) : null,
        talla: prendaForm.talla,
        color: prendaForm.color,
        esLujo: prendaForm.esLujo,
        marca: prendaForm.marca || undefined,
        notas: prendaForm.notas || undefined,
      };

      if (isEditingPrenda && activePrenda) {
        await prendasService.update(activePrenda.id, dto);
        setIsEditingPrenda(false);
        const updated = await prendasService.getById(activePrenda.id);
        setActivePrenda(updated);
      } else {
        const created = await prendasService.create(dto);
        const fullPrenda = await prendasService.getById(created.id);
        setActivePrenda(fullPrenda);
      }
      onSaved();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al guardar prenda');
    }
  };

  const handleAddServicio = async () => {
    if (!servicioSeleccionado || !activePrenda) return;
    try {
      setIsCalculando(true);
      await prendasService.asignarServicio(activePrenda.id, {
        servicioId: Number(servicioSeleccionado),
        medidaEntregada: medidaEntregada !== '' ? Number(medidaEntregada) : undefined,
        observaciones: observacionesServicio ? observacionesServicio : undefined,
      });
      
      const updated = await prendasService.getById(activePrenda.id);
      setActivePrenda(updated);
      setServicioSeleccionado('');
      setMedidaEntregada('');
      setObservacionesServicio('');
      onSaved();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al añadir servicio');
    } finally {
      setIsCalculando(false);
    }
  };

  const handleRemoveServicioAsignado = async (prendaServicioId: number) => {
    if (!activePrenda || !window.confirm('¿Seguro que deseas eliminar este servicio asignado?')) return;
    try {
      await prendasService.eliminarServicio(activePrenda.id, prendaServicioId);
      const updated = await prendasService.getById(activePrenda.id);
      setActivePrenda(updated);
      onSaved();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al eliminar el servicio asignado');
    }
  };

  const handleEditServicioAsignado = async (s: PrendaServicio) => {
    if (!activePrenda) return;
    if (!window.confirm('Para modificar, se quitará el servicio actual y podrás ajustarlo y agregarlo de nuevo en la sección de disponibles. ¿Continuar?')) return;
    
    try {
      await prendasService.eliminarServicio(activePrenda.id, s.id);
      const updated = await prendasService.getById(activePrenda.id);
      setActivePrenda(updated);
      
      setServicioSeleccionado(s.servicioId.toString());
      setMedidaEntregada(s.medidaEntregada !== null && s.medidaEntregada !== undefined ? Number(s.medidaEntregada) : '');
      setObservacionesServicio(s.observaciones || '');
      onSaved();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al preparar la modificación');
    }
  };

  const handleCambiarEstado = async (nuevoEstado: EstadoPrenda) => {
    if (!activePrenda) return;
    try {
      await prendasService.cambiarEstado(activePrenda.id, { nuevoEstado });
      const updated = await prendasService.getById(activePrenda.id);
      setActivePrenda(updated);
      onSaved();
      alert('Estado actualizado correctamente.');
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al actualizar el estado');
    }
  };

  return (
    <>
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000, 
      display: 'flex', alignItems: 'center', justifyContent: 'center', 
      backgroundColor: 'rgba(0,0,0,0.7)', padding: 'var(--space-4)'
    }}>
      <div className="card" style={{ width: '100%', maxWidth: '800px', padding: 'var(--space-6)', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}
        >
          <X size={20} />
        </button>

        <h2 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)' }}>
          {isEditingPrenda && activePrenda ? 'Editar Prenda' : 'Agregar Prenda'}
        </h2>
        
        {/* Prenda Form */}
        <form onSubmit={handleSavePrenda} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {activePrenda && (
            <div className="form-group" style={{ marginBottom: 'var(--space-2)' }}>
              <label className="form-label" style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>Estado Actual de la Prenda</label>
              <select 
                className="form-select" 
                value={activePrenda.estadoActual}
                onChange={e => handleCambiarEstado(e.target.value as EstadoPrenda)}
                style={{ borderColor: 'var(--color-primary)', background: 'rgba(59, 130, 246, 0.05)' }}
              >
                {ESTADOS_PRENDA.map(e => <option key={e} value={e}>{ESTADO_LABELS[e]}</option>)}
              </select>
            </div>
          )}
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
            <div className="form-group">
              <label className="form-label">Tipo de Prenda</label>
              <select 
                required 
                className="form-select" 
                value={prendaForm.tipoPrendaId}
                onChange={e => {
                  if (e.target.value === '__CREAR__') {
                    setShowNuevoTipoModal(true);
                  } else {
                    setPrendaForm(p => ({ ...p, tipoPrendaId: e.target.value }));
                  }
                }}
                disabled={!!activePrenda && !isEditingPrenda}
              >
                <option value="">Seleccione...</option>
                {tiposPrenda.map(t => <option key={t.id} value={t.id}>{t.nombre.toUpperCase()}</option>)}
                {!activePrenda || isEditingPrenda ? (
                  <option value="__CREAR__" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>➕ Crear nuevo tipo de prenda...</option>
                ) : null}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Talla <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(Opcional)</span></label>
              <input type="text" className="form-input" value={prendaForm.talla} onChange={e => setPrendaForm(p => ({ ...p, talla: e.target.value }))} placeholder="Ej. L, 42..." disabled={!!activePrenda && !isEditingPrenda} />
            </div>
            <div className="form-group">
              <label className="form-label">Tipo de Urgencia</label>
              <select 
                key={`form-urg-${prendaForm.tipoUrgenciaId}-${tiposUrgencia.length}`}
                className="form-select" 
                value={prendaForm.tipoUrgenciaId}
                onChange={e => setPrendaForm(p => ({ ...p, tipoUrgenciaId: e.target.value }))}
                disabled={!!activePrenda && !isEditingPrenda}
              >
                <option value="">Normal</option>
                {tiposUrgencia.map(tu => <option key={tu.id} value={tu.id.toString()}>{tu.nombre}</option>)}
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-4)' }}>
            <div className="form-group">
              <label className="form-label">Color</label>
              <input type="text" required className="form-input" value={prendaForm.color} onChange={e => setPrendaForm(p => ({ ...p, color: e.target.value }))} placeholder="Ej. Azul marino..." disabled={!!activePrenda && !isEditingPrenda} />
            </div>
            <div className="form-group">
              <label className="form-label">Marca <span style={{ color: 'var(--color-danger)' }}>*</span></label>
              <input type="text" required className="form-input" value={prendaForm.marca} onChange={e => setPrendaForm(p => ({ ...p, marca: e.target.value }))} placeholder="Ej. Gucci, Zara, Sin marca..." disabled={!!activePrenda && !isEditingPrenda} />
            </div>
            <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '28px' }}>
              <input type="checkbox" id="esLujo" checked={prendaForm.esLujo} onChange={e => setPrendaForm(p => ({ ...p, esLujo: e.target.checked }))} disabled={!!activePrenda && !isEditingPrenda} />
              <label htmlFor="esLujo" className="form-label" style={{ margin: 0 }}>Prenda Costosa / Alta Costura</label>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Observaciones (Opcional)</label>
            <textarea 
              className="form-input" 
              value={prendaForm.notas} 
              onChange={e => setPrendaForm(p => ({ ...p, notas: e.target.value }))} 
              placeholder="Añade observaciones para la prenda..." 
              disabled={!!activePrenda && !isEditingPrenda} 
              rows={2}
            />
          </div>

          {(!activePrenda || isEditingPrenda) && (
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--space-2)' }}>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                {isEditingPrenda ? 'Actualizar Prenda' : 'Guardar Prenda'}
              </button>
            </div>
          )}
        </form>

        {activePrenda && activePrenda.fechaCompromiso && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: 'var(--space-3) var(--space-4)',
            background: 'rgba(59, 130, 246, 0.08)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            borderRadius: 'var(--radius-md)',
            marginTop: 'var(--space-4)'
          }}>
            <div style={{ color: 'var(--color-primary)' }}>
              <Calendar size={20} />
            </div>
            <div>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', margin: 0 }}>Fecha de Compromiso Estimada</p>
              <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'bold', color: 'var(--color-text)', margin: 0 }}>
                {new Date(activePrenda.fechaCompromiso).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        )}
  
        <hr style={{ margin: 'var(--space-6) 0', border: 'none', borderTop: '1px solid var(--color-border)' }} />

        <h3 style={{ fontSize: 'var(--text-lg)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: activePrenda ? 'var(--color-text)' : 'var(--color-text-muted)' }}>
          Servicios a Realizar
        </h3>
        
        {!activePrenda ? (
          <div className="empty-state" style={{ padding: 'var(--space-4)' }}>
            <p className="empty-state-title" style={{ fontSize: 'var(--text-base)' }}>Primero debes guardar la prenda</p>
            <p className="empty-state-desc">Usa el botón "Guardar Prenda" para habilitar esta sección.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>

            {/* Servicios ya asignados */}
            {activePrenda.servicios && activePrenda.servicios.length > 0 && (
              <div>
                <p style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.06em', marginBottom: 'var(--space-2)' }}>
                  Servicios asignados
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  {activePrenda.servicios.map(s => {
                    const srv = catalogoServicios.find(c => c.id === s.servicioId);
                    return (
                      <div key={s.id} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: 'var(--space-3) var(--space-4)',
                        background: 'var(--color-success-soft, #f0fdf4)',
                        border: '1px solid var(--color-success)',
                        borderRadius: 'var(--radius-md)',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                          <Check size={16} style={{ color: 'var(--color-success)' }} />
                          <div>
                            <p style={{ fontWeight: 'var(--font-medium)', fontSize: 'var(--text-sm)' }}>
                              {srv?.categoria} — {srv?.tipoEspecifico ?? 'Servicio'}
                            </p>
                            {s.medidaEntregada && (
                              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                                Medida: {s.medidaEntregada} cm
                              </p>
                            )}
                            {s.observaciones && (
                              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontStyle: 'italic', marginTop: '2px' }}>
                                Obs: {s.observaciones}
                              </p>
                            )}
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                          <span style={{ fontWeight: 'bold', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
                            €{Number(s.precioFinal).toFixed(2)}
                          </span>
                          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                            <button 
                              type="button" 
                              className="btn btn-icon" 
                              style={{ padding: '4px', color: 'var(--color-text-light)' }} 
                              onClick={() => handleEditServicioAsignado(s)}
                              title="Modificar servicio"
                            >
                              <Edit2 size={16} />
                            </button>
                            <button 
                              type="button" 
                              className="btn btn-icon" 
                              style={{ padding: '4px', color: 'var(--color-danger)' }} 
                              onClick={() => handleRemoveServicioAsignado(s.id)}
                              title="Eliminar servicio"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Buscador de Servicios y Botones de acción */}
            <div style={{ marginBottom: 'var(--space-4)', display: 'flex', gap: 'var(--space-4)', alignItems: 'center', flexWrap: 'wrap' }}>
              <input
                type="text"
                className="form-input"
                style={{ flex: 1, minWidth: '250px' }}
                placeholder="Buscar servicio disponible (ej. dobladillo, bajo, cremallera)..."
                value={busquedaServicio}
                onChange={e => setBusquedaServicio(e.target.value)}
              />
              <button 
                type="button" 
                onClick={() => setShowNuevoServicioModal(true)} 
                style={{ color: 'var(--color-primary)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)' }}
              >
                + Nuevo Servicio
              </button>
              <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                <button type="button" className="btn btn-primary" onClick={onClose}>
                  Finalizar Prenda
                </button>
              </div>
            </div>

            {/* Servicios disponibles agrupados por categoría */}
            {(() => {
              const disponibles = catalogoServicios;
              const yaAsignados = new Set((activePrenda.servicios ?? []).map(s => s.servicioId));
              
              const normalizeText = (t: string) => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
              const term = normalizeText(busquedaServicio);

              const sinAsignar = disponibles.filter(s => {
                if (yaAsignados.has(s.id)) return false;
                if (!term) return true;
                return normalizeText(s.categoria).includes(term) || normalizeText(s.tipoEspecifico).includes(term);
              });
              const categorias = [...new Set(sinAsignar.map(s => s.categoria))].sort();

              if (disponibles.length === 0) {
                return (
                  <div style={{
                    padding: 'var(--space-4)', textAlign: 'center',
                    background: '#fff8e1', border: '1px solid #f59e0b',
                    borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)',
                    color: '#92400e'
                  }}>
                    ⚠️ No hay servicios configurados para este tipo de prenda. Ve al <strong>Catálogo</strong> y añade reglas de precio.
                  </div>
                );
              }

              if (sinAsignar.length === 0) {
                return (
                  <div style={{
                    padding: 'var(--space-3)', textAlign: 'center',
                    background: 'var(--color-success-soft, #f0fdf4)', border: '1px solid var(--color-success)',
                    borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)',
                    color: 'var(--color-success)'
                  }}>
                    ✅ Todos los servicios disponibles ya están asignados a esta prenda.
                  </div>
                );
              }

              return (
                <div>
                  <p style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.06em', marginBottom: 'var(--space-3)' }}>
                    Servicios disponibles para este tipo de prenda
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    {categorias.map(cat => (
                      <div key={cat}>
                        <p style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-semibold)', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-2)' }}>
                          {cat}
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                          {sinAsignar.filter(s => s.categoria === cat).map(srv => {
                            const isSelected = servicioSeleccionado === String(srv.id);
                            return (
                              <div key={srv.id} style={{
                                border: `2px solid ${isSelected ? 'var(--color-primary)' : 'var(--color-border)'}`,
                                borderRadius: 'var(--radius-md)',
                                background: isSelected ? 'var(--color-primary-soft)' : 'var(--bg)',
                                overflow: 'hidden',
                                transition: 'all 0.15s',
                              }}>
                                {/* Cabecera del servicio — clickeable para seleccionar */}
                                <button
                                  type="button"
                                  onClick={() => {
                                    const isNowSelected = isSelected ? '' : String(srv.id);
                                    setServicioSeleccionado(isNowSelected);
                                    if (!isSelected) {
                                      setMedidaEntregada('');
                                      setObservacionesServicio('');
                                    }
                                  }}
                                  style={{
                                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    padding: 'var(--space-3) var(--space-4)',
                                    background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left',
                                  }}
                                >
                                  <div>
                                    <p style={{ fontWeight: 'var(--font-medium)', fontSize: 'var(--text-sm)' }}>{srv.tipoEspecifico}</p>
                                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                                      Base: {Number(srv.medidaBase ?? 0)} cm · Tiempo estimado: {Number(srv.tiempoBase ?? 0)} min
                                    </p>
                                  </div>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                                    <span className={`badge ${isSelected ? 'badge-primary' : 'badge-neutral'}`}>
                                      {isSelected ? '✓ Seleccionado' : 'Seleccionar'}
                                    </span>
                                  </div>
                                </button>

                                {/* Panel de ajuste cuando está seleccionado */}
                                {isSelected && (
                                  <div style={{
                                    borderTop: '1px solid var(--color-primary)',
                                    padding: 'var(--space-3) var(--space-4)',
                                    display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
                                    background: 'var(--bg)',
                                  }}>
                                    <div style={{ flex: 1 }}>
                                      <label style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '4px' }}>
                                        Longitud entregada (cm) — opcional
                                      </label>
                                      <input
                                        type="number" min="0"
                                        className="form-input"
                                        style={{ padding: '6px 10px', fontSize: '13px', maxWidth: '160px' }}
                                        value={medidaEntregada}
                                        onChange={e => setMedidaEntregada(e.target.value ? Number(e.target.value) : '')}
                                        placeholder="Sin medida"
                                      />
                                    </div>
                                    <div style={{ flex: 2 }}>
                                      <label style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '4px' }}>
                                        Observaciones (máx 500 palabras)
                                      </label>
                                      <textarea
                                        className="form-input"
                                        style={{ padding: '6px 10px', fontSize: '13px', width: '100%', resize: 'vertical' }}
                                        rows={2}
                                        value={observacionesServicio}
                                        onChange={e => setObservacionesServicio(e.target.value)}
                                        placeholder="Escribe observaciones para el servicio..."
                                      />
                                    </div>
                                    <div style={{ textAlign: 'right', minWidth: '100px' }}>
                                      <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginBottom: '4px' }}>Precio calculado al guardar</p>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      disabled={isCalculando}
                                      onClick={handleAddServicio}
                                      style={{ alignSelf: 'flex-end' }}
                                    >
                                      {isCalculando ? 'Agregando...' : <><Check size={15} /> Agregar</>}
                                    </button>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </div>

    {/* MINI-MODAL: Nuevo Tipo de Prenda */}
    {showNuevoTipoModal && (
      <div style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
      }}>
        <div className="card" style={{ width: '100%', maxWidth: '420px', padding: 'var(--space-6)', position: 'relative' }}>
          <button
            type="button"
            onClick={() => setShowNuevoTipoModal(false)}
            style={{ position: 'absolute', top: 'var(--space-3)', right: 'var(--space-3)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}
          >
            <X size={18} />
          </button>
          <h3 style={{ fontSize: 'var(--text-lg)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Plus size={18} /> Nuevo Tipo de Prenda
          </h3>
          <form onSubmit={handleCrearNuevoTipo} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div className="form-group">
              <label className="form-label">Nombre <span style={{ color: 'var(--color-danger)' }}>*</span></label>
              <input
                type="text"
                required
                className="form-input"
                value={nuevoTipoForm.nombre}
                onChange={e => setNuevoTipoForm(f => ({ ...f, nombre: e.target.value }))}
                placeholder="Ej. Pantalón, Chaqueta..."
                autoFocus
              />
            </div>
            <div className="form-group">
              <label className="form-label">Descripción <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(Opcional)</span></label>
              <input
                type="text"
                className="form-input"
                value={nuevoTipoForm.descripcion}
                onChange={e => setNuevoTipoForm(f => ({ ...f, descripcion: e.target.value }))}
                placeholder="Descripción breve..."
              />
            </div>
            <div className="form-group">
              <label className="form-label">% Dificultad <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(Ej: 0.15 para 15%)</span></label>
              <input
                type="number"
                step="0.01"
                min="0"
                className="form-input"
                value={nuevoTipoForm.porcentajeDificultad}
                onChange={e => setNuevoTipoForm(f => ({ ...f, porcentajeDificultad: Number(e.target.value) }))}
                placeholder="0.00"
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}>
              <button type="button" className="btn btn-ghost" onClick={() => setShowNuevoTipoModal(false)}>Cancelar</button>
              <button type="submit" className="btn btn-primary" disabled={savingNuevoTipo}>
                {savingNuevoTipo ? 'Guardando...' : <><Check size={15} /> Guardar y Seleccionar</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    )}

    {/* MINI-MODAL: Nuevo Servicio */}
    {showNuevoServicioModal && (
      <div style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)', padding: 'var(--space-4)'
      }}>
        <div className="card" style={{ width: '100%', maxWidth: '600px', padding: 'var(--space-6)', maxHeight: '92vh', overflowY: 'auto', position: 'relative' }}>
          <button
            type="button"
            onClick={() => setShowNuevoServicioModal(false)}
            style={{ position: 'absolute', top: 'var(--space-3)', right: 'var(--space-3)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}
          >
            <X size={18} />
          </button>
          <h3 style={{ fontSize: 'var(--text-lg)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Plus size={18} /> Nuevo Servicio
          </h3>
          <form onSubmit={handleCrearNuevoServicio} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
              <div className="form-group">
                <label className="form-label">Nombre General</label>
                <input
                  type="text" required
                  value={nuevoServicioForm.nombre}
                  onChange={e => setNuevoServicioForm(prev => ({ ...prev, nombre: e.target.value }))}
                  className="form-input" placeholder="Ej. Dobladillo Pantalón"
                  autoFocus
                />
              </div>
              <div className="form-group">
                <label className="form-label">Categoría</label>
                <input
                  type="text" required
                  value={nuevoServicioForm.categoria}
                  onChange={e => setNuevoServicioForm(prev => ({ ...prev, categoria: e.target.value }))}
                  className="form-input" placeholder="Ej. Arreglos, Tintorería..."
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
              <div className="form-group">
                <label className="form-label">Tipo Específico</label>
                <input
                  type="text" required
                  value={nuevoServicioForm.tipoEspecifico}
                  onChange={e => setNuevoServicioForm(prev => ({ ...prev, tipoEspecifico: e.target.value }))}
                  className="form-input" placeholder="Ej. Dobladillo simple"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Medida Base (cm)</label>
                <input
                  type="number" required min="0" step="0.01"
                  value={nuevoServicioForm.medidaBase}
                  onChange={e => setNuevoServicioForm(prev => ({ ...prev, medidaBase: Number(e.target.value) }))}
                  className="form-input"
                />
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-4)' }}>
              <div className="form-group">
                <label className="form-label">Tiempo Base (minutos)</label>
                <input
                  type="number" required min="0"
                  value={nuevoServicioForm.tiempoBase}
                  onChange={e => setNuevoServicioForm(prev => ({ ...prev, tiempoBase: Number(e.target.value) }))}
                  className="form-input"
                />
              </div>
            </div>

            <div style={{ borderTop: '2px solid var(--color-border)', paddingTop: 'var(--space-4)', marginTop: 'var(--space-2)' }}>
              <h3 style={{ fontSize: 'var(--text-base)', fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-semibold)', marginBottom: 'var(--space-2)' }}>
                Categorías de Factores Aplicables
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                {categoriasFactores.filter(c => c.activa).map(cat => (
                  <label key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-hover)', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', border: '1px solid var(--color-border)' }}>
                    <input 
                      type="checkbox" 
                      checked={nuevoServicioForm.categoriasFactoresIds.includes(cat.id)}
                      onChange={() => toggleCategoriaFactor(cat.id)}
                    />
                    {cat.nombre}
                  </label>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
              <button type="button" onClick={() => setShowNuevoServicioModal(false)} className="btn btn-ghost">Cancelar</button>
              <button type="submit" className="btn btn-primary" disabled={savingNuevoServicio}>
                {savingNuevoServicio ? 'Guardando...' : <><Check size={15} /> Guardar y Seleccionar</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
    </>
  );
}
