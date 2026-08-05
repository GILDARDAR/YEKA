import React, { useState } from 'react';
import { prendasService } from './prendas.service';
import tipoPrendaService from '../../services/tipo-prenda.service';
import { ServicioModal } from '../catalogo/ServicioModal';

import api from '../../shared/api';
import type { Prenda, TipoPrenda, CatalogoServicio, PrendaServicio, EstadoPrenda } from '../../shared/types';
import { Check, Trash2, Edit2, X, Calendar, Plus, ChevronUp, ChevronDown, Shirt } from 'lucide-react';

interface PrendaModalProps {
  facturaId: number;
  prendaToEdit: Prenda | null;
  tiposPrenda: TipoPrenda[];
  catalogoServicios: CatalogoServicio[];
  inline?: boolean;
  onClose: () => void;
  onSaved: () => void; // Called when any change happens so parent can refresh
  onTipoPrendaCreated?: (nuevoTipo: TipoPrenda) => void; // Optional: called after creating a new tipo
  initialTipoPrendaId?: number;
  onRequestTipoPrendaSelector?: () => void; // Invoked when user clicks the tipo card in inline mode
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
  inline = false,
  initialTipoPrendaId,
}: PrendaModalProps) {
  // Local copy of tiposPrenda so we can append newly created ones without refreshing parent
  const [tiposPrenda, setTiposPrenda] = useState<TipoPrenda[]>(tiposPrendaProp);
  const [catalogoServicios, setCatalogoServicios] = useState<CatalogoServicio[]>(catalogoServiciosProp);
  const isEditingInitial = !!prendaToEdit;
  const [isEditingPrenda, setIsEditingPrenda] = useState(isEditingInitial);
  
  const [prendaForm, setPrendaForm] = useState({
    tipoPrendaId: prendaToEdit?.tipoPrendaId?.toString() || initialTipoPrendaId?.toString() || '',
    tipoUrgenciaId: prendaToEdit?.tipoUrgenciaId?.toString() || '',
    color: prendaToEdit?.color || '',
    esLujo: prendaToEdit?.esLujo ?? true,
    marca: prendaToEdit?.marca || '',
    notas: prendaToEdit?.notas || '',
    materialId: prendaToEdit?.materialId?.toString() || '',
  });

  const [activePrenda, setActivePrenda] = useState<Prenda | null>(prendaToEdit);
  const [isFormExpanded, setIsFormExpanded] = useState(true);

  // Sync when prendaToEdit changes (e.g., user clicks Editar from the right panel)
  React.useEffect(() => {
    if (prendaToEdit && prendaToEdit.id) {
      prendasService.getById(prendaToEdit.id).then(fullPrenda => {
        setActivePrenda(fullPrenda);
        setIsEditingPrenda(true);
        setIsFormExpanded(true);
        setPrendaForm({
          tipoPrendaId: fullPrenda.tipoPrendaId?.toString() || '',
          tipoUrgenciaId: fullPrenda.tipoUrgenciaId?.toString() || '',
          color: fullPrenda.color || '',
          esLujo: fullPrenda.esLujo ?? true,
          marca: fullPrenda.marca || '',
          notas: fullPrenda.notas || '',
          materialId: fullPrenda.materialId?.toString() || '',
        });
      }).catch(err => console.error("Error fetching full prenda:", err));
    } else {
      setActivePrenda(null);
      setIsEditingPrenda(false);
      setIsFormExpanded(true);
      setPrendaForm({
        tipoPrendaId: initialTipoPrendaId?.toString() || '',
        tipoUrgenciaId: '',
        color: '',
        esLujo: true,
        marca: '',
        notas: '',
        materialId: '',
      });
    }
  }, [prendaToEdit]);

  // Sync initialTipoPrendaId when parent changes it (user selects tipo from TipoPrendaSelectorModal)
  React.useEffect(() => {
    if (!prendaToEdit) {
      setPrendaForm(p => ({
        ...p,
        tipoPrendaId: initialTipoPrendaId ? initialTipoPrendaId.toString() : '',
      }));
    }
  }, [initialTipoPrendaId]);

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

  // ─── Nuevo Material inline ──────────────────────────────────────
  const [showNuevoMaterialModal, setShowNuevoMaterialModal] = useState(false);
  const [nuevoMaterialForm, setNuevoMaterialForm] = useState({ descripcion: '' });
  const [savingNuevoMaterial, setSavingNuevoMaterial] = useState(false);

  const handleCrearNuevoMaterial = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSavingNuevoMaterial(true);
      const res = await api.post('/material', { descripcion: nuevoMaterialForm.descripcion });
      const created = res.data;
      setMateriales(prev => [...prev, created]);
      setPrendaForm(p => ({ ...p, materialId: created.id.toString() }));
      setShowNuevoMaterialModal(false);
      setNuevoMaterialForm({ descripcion: '' });
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al crear material');
    } finally {
      setSavingNuevoMaterial(false);
    }
  };

  // ─── Nuevo Servicio inline ──────────────────────────────────────
  const [showNuevoServicioModal, setShowNuevoServicioModal] = useState(false);

  // Service Row State
  const [servicioSeleccionado, setServicioSeleccionado] = useState('');
  const [medidaEntregada, setMedidaEntregada] = useState<number | ''>('');
  const [observacionesServicio, setObservacionesServicio] = useState('');
  const [isCalculando, setIsCalculando] = useState(false);
  const [busquedaServicio, setBusquedaServicio] = useState('');
  const [tiposUrgencia, setTiposUrgencia] = useState<any[]>([]);

  const [tipoArregloSeleccionado, setTipoArregloSeleccionado] = useState('');
  const [zonaSeleccionada, setZonaSeleccionada] = useState('');
  
  const [materiales, setMateriales] = useState<any[]>([]);
  const [tiposArreglo, setTiposArreglo] = useState<any[]>([]);
  const [zonas, setZonas] = useState<any[]>([]);

  React.useEffect(() => {
    api.get('/tipo-urgencia').then(res => setTiposUrgencia(res.data)).catch(console.error);
    api.get('/material').then(res => setMateriales(res.data)).catch(console.error);
    api.get('/tipo-arreglo').then(res => setTiposArreglo(res.data)).catch(console.error);
    api.get('/zona').then(res => setZonas(res.data)).catch(console.error);
  }, []);

  // Handle ESC key — only for modal (non-inline) mode
  React.useEffect(() => {
    if (inline) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, inline]);

  const handleSavePrenda = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // In inline mode, tipo prenda is a card (not a required select), validate manually
    if (!prendaForm.tipoPrendaId) {
      alert('Debes seleccionar un tipo de prenda. Haz clic en la tarjeta de la izquierda.');
      return;
    }
    
    // Validate facturaId (might be 0 if no client/draft yet)
    if (!facturaId) {
      alert('Primero selecciona un cliente en el panel de la derecha para crear la factura.');
      return;
    }
    
    try {
      const dto = {
        facturaId: Number(facturaId),
        tipoPrendaId: Number(prendaForm.tipoPrendaId),
        tipoUrgenciaId: prendaForm.tipoUrgenciaId ? Number(prendaForm.tipoUrgenciaId) : undefined,
        talla: 'm',
        color: prendaForm.color,
        esLujo: prendaForm.esLujo,
        marca: prendaForm.marca || undefined,
        notas: prendaForm.notas || undefined,
        materialId: prendaForm.materialId ? Number(prendaForm.materialId) : undefined,
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
      setIsFormExpanded(false);
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
        tipoArregloId: tipoArregloSeleccionado ? Number(tipoArregloSeleccionado) : undefined,
        zonaId: zonaSeleccionada ? Number(zonaSeleccionada) : undefined,
      });
      
      const updated = await prendasService.getById(activePrenda.id);
      setActivePrenda(updated);
      setServicioSeleccionado('');
      setMedidaEntregada('');
      setObservacionesServicio('');
      setTipoArregloSeleccionado('');
      setZonaSeleccionada('');
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
      setTipoArregloSeleccionado(s.tipoArregloId?.toString() || '');
      setZonaSeleccionada(s.zonaId?.toString() || '');
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

  const wrapperStyle = inline 
    ? { width: '100%', padding: 'var(--space-4)', position: 'relative' as any, overflowY: 'auto' as any, background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }
    : { width: '100%', maxWidth: '800px', padding: 'var(--space-6)', maxHeight: '90vh', overflowY: 'auto' as any, position: 'relative' as any, background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' };

  const Overlay = inline ? React.Fragment : 'div';
  const overlayProps = inline ? {} : {
    style: {
      position: 'fixed' as any, inset: 0, zIndex: 1000, 
      display: 'flex', alignItems: 'center', justifyContent: 'center', 
      backgroundColor: 'rgba(0,0,0,0.7)', padding: 'var(--space-4)'
    }
  };

  // Urgencia colors palette
  const urgColors = ['#f59e0b', '#f97316', '#ef4444', '#dc2626'];

  return (
    <>
    <Overlay {...overlayProps}>
      <div style={wrapperStyle}>
        {/* X button only in non-inline (modal) mode */}
        {!inline && (
          <button 
            onClick={onClose}
            style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}
          >
            <X size={20} />
          </button>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
          <h2 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-heading)', margin: 0 }}>
            {isEditingPrenda && activePrenda ? 'Editar Prenda' : 'Agregar Prenda'}
          </h2>
          {activePrenda && (
            <button
              type="button"
              onClick={() => setIsFormExpanded(!isFormExpanded)}
              style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)', fontWeight: 'var(--font-medium)' }}
            >
              {isFormExpanded ? (
                <>Ocultar Info <ChevronUp size={18} /></>
              ) : (
                <>Ver Info <ChevronDown size={18} /></>
              )}
            </button>
          )}
        </div>
        
        {/* ─── PRENDA FORM ─── */}
        {isFormExpanded && (
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

            {inline ? (
              /* ════════════════════════════════════════════════════════
                 MODO INLINE: grid tipo prenda + fila campos + obs/urgencia
              ════════════════════════════════════════════════════════ */
              <>
                {/* ── GRID TIPO PRENDA — todas las opciones visibles ── */}
                <div>
                  <label className="form-label" style={{ fontSize: '11px', marginBottom: '8px', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)' }}>
                    Tipo de Prenda <span style={{ color: 'var(--color-danger)' }}>*</span>
                  </label>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {tiposPrenda.map(tipo => {
                      const isSelected = prendaForm.tipoPrendaId === tipo.id.toString();
                      const canChange = !activePrenda || isEditingPrenda;
                      return (
                        <button
                          key={tipo.id}
                          type="button"
                          disabled={!canChange}
                          onClick={() => canChange && setPrendaForm(p => ({ ...p, tipoPrendaId: tipo.id.toString() }))}
                          style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
                            padding: '6px 8px',
                            border: `2px solid ${isSelected ? 'var(--color-primary)' : 'var(--color-border)'}`,
                            borderRadius: 'var(--radius-md)',
                            background: isSelected ? 'rgba(99,102,241,0.08)' : 'var(--color-bg)',
                            cursor: canChange ? 'pointer' : 'default',
                            transition: 'all 0.15s',
                            minWidth: '72px',
                            boxShadow: isSelected ? '0 0 0 2px rgba(99,102,241,0.2)' : 'none',
                          }}
                        >
                          <div style={{
                            width: '36px', height: '36px', borderRadius: '50%',
                            background: isSelected ? 'rgba(99,102,241,0.12)' : 'var(--color-bg-subtle, #f5f5f5)',
                            border: `1px solid ${isSelected ? 'var(--color-primary)' : 'var(--color-border)'}`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            overflow: 'hidden', flexShrink: 0,
                          }}>
                            {tipo.iconoUrl ? (
                              <img
                                src={tipo.iconoUrl}
                                alt={tipo.nombre}
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                              />
                            ) : (
                              <Shirt size={16} style={{ color: isSelected ? 'var(--color-primary)' : 'var(--color-text-muted)' }} />
                            )}
                          </div>
                          <span style={{
                            fontSize: '10px', fontWeight: isSelected ? '700' : '500',
                            color: isSelected ? 'var(--color-primary)' : 'var(--color-text-muted)',
                            textTransform: 'uppercase', letterSpacing: '0.03em',
                            maxWidth: '70px', textAlign: 'center',
                            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                          }}>
                            {tipo.nombre}
                          </span>
                        </button>
                      );
                    })}
                    {(!activePrenda || isEditingPrenda) && (
                      <button
                        type="button"
                        onClick={() => setShowNuevoTipoModal(true)}
                        style={{
                          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '4px',
                          padding: '6px 8px', minWidth: '72px',
                          border: '2px dashed var(--color-border)',
                          borderRadius: 'var(--radius-md)',
                          background: 'transparent',
                          cursor: 'pointer',
                          color: 'var(--color-primary)',
                          fontSize: '10px', fontWeight: '600',
                          transition: 'all 0.15s',
                        }}
                      >
                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px dashed var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Plus size={14} />
                        </div>
                        <span style={{ fontSize: '10px', textTransform: 'uppercase' }}>Nuevo</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* ── FILA: Marca + Material + Color ── */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-3)' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label" style={{ fontSize: '12px', marginBottom: '3px' }}>
                      Marca <span style={{ color: 'var(--color-danger)' }}>*</span>
                    </label>
                    <input
                      type="text" required
                      className="form-input"
                      style={{ padding: '6px 10px', fontSize: '13px' }}
                      value={prendaForm.marca}
                      onChange={e => setPrendaForm(p => ({ ...p, marca: e.target.value }))}
                      placeholder="Zara, Gucci..."
                      disabled={!!activePrenda && !isEditingPrenda}
                    />
                  </div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label" style={{ fontSize: '12px', marginBottom: '3px' }}>Material</label>
                    <select
                      className="form-select"
                      style={{ padding: '6px 10px', fontSize: '13px' }}
                      value={prendaForm.materialId}
                      onChange={e => {
                        if (e.target.value === '__CREAR__') {
                          setShowNuevoMaterialModal(true);
                        } else {
                          setPrendaForm(p => ({ ...p, materialId: e.target.value }));
                        }
                      }}
                      disabled={!!activePrenda && !isEditingPrenda}
                    >
                      <option value="">Material...</option>
                      {(() => {
                        const selectedTipoPrendaId = prendaForm.tipoPrendaId ? Number(prendaForm.tipoPrendaId) : null;
                        const serviciosFiltrados = selectedTipoPrendaId
                          ? catalogoServicios.filter(s => s.tipoPrendaId === selectedTipoPrendaId)
                          : catalogoServicios;
                        
                        const materialIdsEnCatalogo = new Set(
                          serviciosFiltrados.flatMap(s => s.materiales?.map(m => m.id) || [])
                        );
                        
                        const materialesFiltrados = materiales.filter(m => materialIdsEnCatalogo.has(m.id));

                        return materialesFiltrados.map(m => (
                          <option key={m.id} value={m.id}>{m.descripcion}</option>
                        ));
                      })()}
                      {(!activePrenda || isEditingPrenda) ? (
                        <option value="__CREAR__" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>➕ Nuevo...</option>
                      ) : null}
                    </select>
                  </div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label" style={{ fontSize: '12px', marginBottom: '3px' }}>
                      Color <span style={{ color: 'var(--color-danger)' }}>*</span>
                    </label>
                    <input
                      type="text" required
                      className="form-input"
                      style={{ padding: '6px 10px', fontSize: '13px' }}
                      value={prendaForm.color}
                      onChange={e => setPrendaForm(p => ({ ...p, color: e.target.value }))}
                      placeholder="Azul marino..."
                      disabled={!!activePrenda && !isEditingPrenda}
                    />
                  </div>
                </div>

                {/* ── Prenda Costosa — checkbox visual ── */}
                <label style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '7px 10px',
                  background: prendaForm.esLujo ? 'rgba(245,158,11,0.1)' : 'transparent',
                  border: `1px solid ${prendaForm.esLujo ? '#f59e0b' : 'var(--color-border)'}`,
                  borderRadius: 'var(--radius-md)',
                  cursor: (!!activePrenda && !isEditingPrenda) ? 'default' : 'pointer',
                  transition: 'all 0.2s',
                  userSelect: 'none',
                }}>
                  <input
                    type="checkbox"
                    id="esLujo"
                    checked={prendaForm.esLujo}
                    onChange={e => setPrendaForm(p => ({ ...p, esLujo: e.target.checked }))}
                    disabled={!!activePrenda && !isEditingPrenda}
                    style={{ width: '15px', height: '15px', accentColor: '#f59e0b', flexShrink: 0 }}
                  />
                  <span style={{ fontSize: '12px', fontWeight: '500', color: prendaForm.esLujo ? '#f59e0b' : 'var(--color-text-light)' }}>
                    💎 Prenda Costosa / Alta Costura
                  </span>
                </label>


                {/* FILA DE ABAJO EN DOS COLUMNAS: OBSERVACIONES (80%) | URGENCIA + BOTON GUARDAR (20%) */}
                <div style={{ display: 'grid', gridTemplateColumns: '8fr 2fr', gap: 'var(--space-4)', marginTop: 'var(--space-2)' }}>
                  
                  {/* Columna Izquierda: Observaciones */}
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label" style={{ fontSize: '12px', marginBottom: '4px', display: 'block' }}>
                      Observaciones <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontWeight: 400 }}>(Opcional)</span>
                    </label>
                    <textarea 
                      className="form-input" 
                      style={{ height: '110px', resize: 'none' }}
                      value={prendaForm.notas} 
                      onChange={e => setPrendaForm(p => ({ ...p, notas: e.target.value }))} 
                      placeholder="Añade observaciones para la prenda..." 
                      disabled={!!activePrenda && !isEditingPrenda} 
                    />
                  </div>

                  {/* Columna Derecha: Urgencia + Botón Guardar */}
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 'var(--space-2)' }}>
                    <div>
                      <label className="form-label" style={{ fontSize: '12px', marginBottom: '8px', display: 'block' }}>
                        Tipo de Urgencia
                      </label>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                        {/* Opción Normal */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                          <button
                            type="button"
                            onClick={() => { if (!activePrenda || isEditingPrenda) setPrendaForm(p => ({ ...p, tipoUrgenciaId: '' })); }}
                            title="Normal"
                            style={{
                              width: '38px', height: '38px', borderRadius: '50%',
                              border: `2px solid ${prendaForm.tipoUrgenciaId === '' ? '#10b981' : 'var(--color-border)'}`,
                              background: prendaForm.tipoUrgenciaId === '' ? '#10b981' : 'var(--color-bg)',
                              color: prendaForm.tipoUrgenciaId === '' ? 'white' : 'var(--color-text-muted)',
                              cursor: (!!activePrenda && !isEditingPrenda) ? 'default' : 'pointer',
                              fontSize: '9px', fontWeight: '700',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              transition: 'all 0.2s', flexShrink: 0,
                              boxShadow: prendaForm.tipoUrgenciaId === '' ? '0 0 0 2px rgba(16,185,129,0.25)' : 'none',
                            }}
                          >
                            NM
                          </button>
                          <span style={{ fontSize: '9px', color: prendaForm.tipoUrgenciaId === '' ? '#10b981' : 'var(--color-text-muted)', textAlign: 'center', lineHeight: 1 }}>Normal</span>
                        </div>

                        {tiposUrgencia.map((tu, index) => {
                          const color = urgColors[index % urgColors.length];
                          const isSelected = prendaForm.tipoUrgenciaId === tu.id.toString();
                          const words = (tu.nombre as string).split(' ');
                          const abbrev = words.length > 1
                            ? words.map((w: string) => w[0]).join('').substring(0, 3).toUpperCase()
                            : (tu.nombre as string).substring(0, 3).toUpperCase();
                          return (
                            <div key={tu.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                              <button
                                type="button"
                                onClick={() => { if (!activePrenda || isEditingPrenda) setPrendaForm(p => ({ ...p, tipoUrgenciaId: tu.id.toString() })); }}
                                title={tu.nombre}
                                style={{
                                  width: '38px', height: '38px', borderRadius: '50%',
                                  border: `2px solid ${isSelected ? color : 'var(--color-border)'}`,
                                  background: isSelected ? color : 'var(--color-bg)',
                                  color: isSelected ? 'white' : 'var(--color-text-muted)',
                                  cursor: (!!activePrenda && !isEditingPrenda) ? 'default' : 'pointer',
                                  fontSize: '9px', fontWeight: '700',
                                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                                  transition: 'all 0.2s', flexShrink: 0,
                                  boxShadow: isSelected ? `0 0 0 2px ${color}40` : 'none',
                                }}
                              >
                                {abbrev}
                              </button>
                              <span style={{ fontSize: '9px', color: isSelected ? color : 'var(--color-text-muted)', textAlign: 'center', lineHeight: 1, maxWidth: '42px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {tu.nombre}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {(!activePrenda || isEditingPrenda) && (
                      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        {!facturaId && (
                          <p style={{ fontSize: '11px', color: 'var(--color-warning)', margin: '0 0 4px 0' }}>
                            ⚠️ Selecciona un cliente a la derecha
                          </p>
                        )}
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '6px 12px', fontSize: '13px' }}>
                          {isEditingPrenda ? 'Actualizar Prenda' : 'Guardar Prenda'}
                        </button>
                      </div>
                    )}
                  </div>

                </div>
              </>
            ) : (
              /* ════════════════════════════════════════════════════════
                 MODO MODAL (no inline): formulario clásico con selects
              ════════════════════════════════════════════════════════ */
              <>
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
                    <label className="form-label">Material</label>
                    <select 
                      className="form-select" 
                      value={prendaForm.materialId}
                      onChange={e => {
                        if (e.target.value === '__CREAR__') {
                          setShowNuevoMaterialModal(true);
                        } else {
                          setPrendaForm(p => ({ ...p, materialId: e.target.value }));
                        }
                      }}
                      disabled={!!activePrenda && !isEditingPrenda}
                    >
                      <option value="">Seleccione material...</option>
                      {materiales.map(m => <option key={m.id} value={m.id}>{m.descripcion}</option>)}
                      {!activePrenda || isEditingPrenda ? (
                        <option value="__CREAR__" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>➕ Crear nuevo material...</option>
                      ) : null}
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                  <div className="form-group">
                    <label className="form-label">Color</label>
                    <input type="text" required className="form-input" value={prendaForm.color} onChange={e => setPrendaForm(p => ({ ...p, color: e.target.value }))} placeholder="Ej. Azul marino..." disabled={!!activePrenda && !isEditingPrenda} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Marca <span style={{ color: 'var(--color-danger)' }}>*</span></label>
                    <input type="text" required className="form-input" value={prendaForm.marca} onChange={e => setPrendaForm(p => ({ ...p, marca: e.target.value }))} placeholder="Ej. Gucci, Zara, Sin marca..." disabled={!!activePrenda && !isEditingPrenda} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
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
                  <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: inline ? '0px' : '28px' }}>
                    <input type="checkbox" id="esLujo" checked={prendaForm.esLujo} onChange={e => setPrendaForm(p => ({ ...p, esLujo: e.target.checked }))} disabled={!!activePrenda && !isEditingPrenda} />
                    <label htmlFor="esLujo" className="form-label" style={{ margin: 0 }}>Prenda Costosa / Alta Costura</label>
                  </div>
                </div>

                {/* OBSERVACIONES — siempre visible (solo en modo modal clasico, ya que inline tiene su propio layout de 2 columnas) */}
                <div className="form-group">
                  <label className="form-label">Observaciones <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: 400 }}>(Opcional)</span></label>
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
                  <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 'var(--space-3)', marginTop: 'var(--space-2)' }}>
                    <button type="submit" className="btn btn-primary">
                      {isEditingPrenda ? 'Actualizar Prenda' : 'Guardar Prenda'}
                    </button>
                  </div>
                )}
              </>
            )}
          </form>
        )}

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
                              {srv?.tipoPrenda?.nombre ?? 'Sin Tipo'} — {srv?.tipoEspecifico ?? 'Servicio'}
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
            <div style={{ marginBottom: 'var(--space-4)', display: 'flex', gap: 'var(--space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
              <input
                type="text"
                className="form-input"
                style={{ flex: 1, minWidth: '200px' }}
                placeholder="Buscar servicio..."
                value={busquedaServicio}
                onChange={e => setBusquedaServicio(e.target.value)}
              />

              {/* Combobox Tipo Arreglo */}
              <select
                className="form-select"
                style={{ width: '180px', fontSize: '13px' }}
                value={tipoArregloSeleccionado}
                onChange={e => setTipoArregloSeleccionado(e.target.value)}
              >
                <option value="">Todos los arreglos</option>
                {(() => {
                  const selectedTipoPrendaId = activePrenda ? activePrenda.tipoPrendaId : Number(prendaForm.tipoPrendaId);
                  const selectedMaterialId = activePrenda ? activePrenda.materialId : Number(prendaForm.materialId);

                  const serviciosBase = catalogoServicios.filter(s => {
                    if (selectedTipoPrendaId && s.tipoPrendaId !== selectedTipoPrendaId) return false;
                    if (selectedMaterialId && !s.materiales?.some(m => m.id === selectedMaterialId)) return false;
                    return true;
                  });

                  const taIdsEnCatalogo = new Set(serviciosBase.flatMap(s => s.tiposArreglo?.map(ta => ta.id) || []));
                  return tiposArreglo.filter(ta => taIdsEnCatalogo.has(ta.id)).map(ta => (
                    <option key={ta.id} value={ta.id}>{ta.descripcion}</option>
                  ));
                })()}
              </select>

              {/* Combobox Zona */}
              <select
                className="form-select"
                style={{ width: '180px', fontSize: '13px' }}
                value={zonaSeleccionada}
                onChange={e => setZonaSeleccionada(e.target.value)}
              >
                <option value="">Todas las zonas</option>
                {(() => {
                  const selectedTipoPrendaId = activePrenda ? activePrenda.tipoPrendaId : Number(prendaForm.tipoPrendaId);
                  const selectedMaterialId = activePrenda ? activePrenda.materialId : Number(prendaForm.materialId);

                  const serviciosBase = catalogoServicios.filter(s => {
                    if (selectedTipoPrendaId && s.tipoPrendaId !== selectedTipoPrendaId) return false;
                    if (selectedMaterialId && !s.materiales?.some(m => m.id === selectedMaterialId)) return false;
                    return true;
                  });

                  const zonaIdsEnCatalogo = new Set(
                    serviciosBase.flatMap(s => {
                      const ids: number[] = [];
                      if ((s as any).zonaId) ids.push((s as any).zonaId);
                      if ((s as any).zona?.id) ids.push((s as any).zona.id);
                      if ((s as any).zonas?.length) ids.push(...(s as any).zonas.map((z: any) => z.id));
                      return ids;
                    })
                  );
                  const filtradas = zonas.filter(z => zonaIdsEnCatalogo.has(z.id));
                  const listaFinal = filtradas.length > 0 ? filtradas : zonas;
                  return listaFinal.map(z => (
                    <option key={z.id} value={z.id}>{z.descripcion}</option>
                  ));
                })()}
              </select>

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

              const selectedTipoPrendaId = activePrenda ? activePrenda.tipoPrendaId : Number(prendaForm.tipoPrendaId);
              const selectedMaterialId = activePrenda ? activePrenda.materialId : Number(prendaForm.materialId);

              const sinAsignar = disponibles.filter(s => {
                if (yaAsignados.has(s.id)) return false;
                
                // Filtro por tipo prenda
                if (selectedTipoPrendaId && s.tipoPrendaId !== selectedTipoPrendaId) {
                  return false;
                }

                // Filtro por material
                if (selectedMaterialId) {
                  const tieneMaterial = s.materiales?.some(m => m.id === selectedMaterialId);
                  if (!tieneMaterial) return false;
                }

                // Filtro por Tipo Arreglo
                if (tipoArregloSeleccionado) {
                  const tieneTipoArreglo = s.tiposArreglo?.some(ta => ta.id === Number(tipoArregloSeleccionado));
                  if (!tieneTipoArreglo) return false;
                }

                // Filtro por Zona
                if (zonaSeleccionada) {
                  const sZonaId = (s as any).zonaId ?? (s as any).zona?.id;
                  if (sZonaId !== Number(zonaSeleccionada)) return false;
                }

                if (!term) return true;
                return normalizeText(s.nombre || '').includes(term) || normalizeText(s.tipoEspecifico).includes(term);
              });
              const categorias = [...new Set(sinAsignar.map(s => s.tipoPrenda?.nombre || 'Sin Tipo de Prenda'))].sort();

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
                    Servicios disponibles
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxHeight: '350px', overflowY: 'auto', paddingRight: 'var(--space-2)' }}>
                    {categorias.map(cat => (
                      <div key={cat}>
                        <p style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-semibold)', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-2)' }}>
                          {cat}
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                          {sinAsignar.filter(s => (s.tipoPrenda?.nombre || 'Sin Tipo de Prenda') === cat).map(srv => {
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
                                    {isSelected ? (
                                      /* Botón Agregar directamente en la cabecera */
                                      <button
                                        type="button"
                                        className="btn btn-primary btn-sm"
                                        disabled={isCalculando}
                                        onClick={e => { e.stopPropagation(); handleAddServicio(); }}
                                        style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}
                                      >
                                        {isCalculando ? 'Agregando...' : <><Check size={14} /> Agregar</>}
                                      </button>
                                    ) : (
                                      <span className="badge badge-neutral">Seleccionar</span>
                                    )}
                                   </div>
</button>

                                {/* Panel de ajuste cuando está seleccionado */}
                                {isSelected && (
                                  <div style={{
                                    borderTop: '1px solid var(--color-primary)',
                                    padding: 'var(--space-3) var(--space-4)',
                                    background: 'var(--bg)',
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: 'var(--space-3)',
                                    alignItems: 'start',
                                  }}>
                                    {/* COLUMNA IZQUIERDA: Tipo Arreglo + Zona + Longitud */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                                      <div>
                                        <label style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '4px' }}>
                                          Tipo Arreglo <a href="/tipos-arreglo" target="_blank" style={{ float: 'right', color: 'var(--color-primary)' }}>+ Crear</a>
                                        </label>
                                        <select className="form-select" style={{ padding: '6px 10px', fontSize: '13px' }} value={tipoArregloSeleccionado} onChange={e => setTipoArregloSeleccionado(e.target.value)}>
                                          <option value="">Seleccione...</option>
                                          {tiposArreglo.map((m: any) => <option key={m.id} value={m.id}>{m.descripcion}</option>)}
                                        </select>
                                      </div>
                                      <div>
                                        <label style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '4px' }}>
                                          Zona <a href="/zonas" target="_blank" style={{ float: 'right', color: 'var(--color-primary)' }}>+ Crear</a>
                                        </label>
                                        <select className="form-select" style={{ padding: '6px 10px', fontSize: '13px' }} value={zonaSeleccionada} onChange={e => setZonaSeleccionada(e.target.value)}>
                                          <option value="">Seleccione...</option>
                                          {zonas.map((m: any) => <option key={m.id} value={m.id}>{m.descripcion}</option>)}
                                        </select>
                                      </div>
                                      <div>
                                        <label style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '4px' }}>
                                          Longitud (cm) — opcional
                                        </label>
                                        <input
                                          type="number" min="0"
                                          className="form-input"
                                          style={{ padding: '6px 10px', fontSize: '13px', width: '100%' }}
                                          value={medidaEntregada}
                                          onChange={e => setMedidaEntregada(e.target.value ? Number(e.target.value) : '')}
                                          placeholder="Sin medida"
                                        />
                                      </div>
                                    </div>

                                    {/* COLUMNA DERECHA: Observaciones */}
                                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                      <label style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '4px' }}>
                                        Observaciones
                                      </label>
                                      <textarea
                                        className="form-input"
                                        style={{ padding: '6px 10px', fontSize: '13px', width: '100%', resize: 'vertical', flex: 1, minHeight: '110px' }}
                                        value={observacionesServicio}
                                        onChange={e => setObservacionesServicio(e.target.value)}
                                        placeholder="Escribe observaciones para el servicio..."
                                      />
                                    </div>
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
    </Overlay>

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
                {savingNuevoTipo ? 'Guardando...' : 'Guardar Tipo'}
              </button>
            </div>
          </form>
        </div>
      </div>
    )}

    {/* MINI-MODAL: Nuevo Material */}
    {showNuevoMaterialModal && (
      <div style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
      }}>
        <div className="card" style={{ width: '100%', maxWidth: '400px', padding: 'var(--space-6)', position: 'relative' }}>
          <button
            type="button"
            onClick={() => setShowNuevoMaterialModal(false)}
            style={{ position: 'absolute', top: 'var(--space-3)', right: 'var(--space-3)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}
          >
            <X size={18} />
          </button>
          <h3 style={{ fontSize: 'var(--text-lg)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Plus size={18} /> Nuevo Material
          </h3>
          <form onSubmit={handleCrearNuevoMaterial} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div className="form-group">
              <label className="form-label">Descripción del Material <span style={{ color: 'var(--color-danger)' }}>*</span></label>
              <input
                type="text"
                required
                className="form-input"
                value={nuevoMaterialForm.descripcion}
                onChange={e => setNuevoMaterialForm({ descripcion: e.target.value })}
                placeholder="Ej. Cuero, Algodón, Seda..."
                autoFocus
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-2)' }}>
              <button type="button" onClick={() => setShowNuevoMaterialModal(false)} className="btn btn-ghost">Cancelar</button>
              <button type="submit" className="btn btn-primary" disabled={savingNuevoMaterial}>
                {savingNuevoMaterial ? 'Guardando...' : 'Guardar Material'}
              </button>
            </div>
          </form>
        </div>
      </div>
    )}

    <ServicioModal
      isOpen={showNuevoServicioModal}
      initialData={{ tipoPrendaId: prendaForm.tipoPrendaId ? Number(prendaForm.tipoPrendaId) : '', materialId: prendaForm.materialId ? Number(prendaForm.materialId) : '' }}
      onClose={() => setShowNuevoServicioModal(false)}
      onSaved={(created) => {
        setCatalogoServicios(prev => [...prev, created]);
        setServicioSeleccionado(created.id.toString());
        setBusquedaServicio('');
        setMedidaEntregada('');
        setObservacionesServicio('');
      }}
    />
    </>
  );
}
