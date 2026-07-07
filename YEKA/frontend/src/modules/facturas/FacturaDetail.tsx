import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { facturasService } from './facturas.service';
import { prendasService } from '../prendas/prendas.service';
import tipoPrendaService from '../../services/tipo-prenda.service';
import { catalogoService } from '../catalogo/catalogo.service';
import { imprimirFactura, imprimirEtiquetas } from './FacturaPrint';
import type { Factura, Prenda, TipoPrenda, CatalogoServicio, PrendaServicio, EstadoPrenda } from '../../shared/types';
import api from '../../shared/api';
import { ChevronLeft, FileText, Plus, Check, Trash2, Tag, Calendar, Euro, Edit2, CreditCard, Printer } from 'lucide-react';

const toTitleCase = (str: string) => {
  if (!str) return '';
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
};

const ESTADOS_PRENDA: EstadoPrenda[] = [
  'RECIBIDA', 'PENDIENTE_VALORACION', 'EN_PRODUCCION', 
  'ESPERANDO_PRUEBA', 'PENDIENTE_RECOGIDA', 'ENTREGADA', 'PROPIEDAD_TALLER'
];

const ESTADO_PRENDA_LABELS: Record<EstadoPrenda, string> = {
  RECIBIDA: 'Recibida',
  PENDIENTE_VALORACION: 'Pend. valoración',
  EN_PRODUCCION: 'En producción',
  ESPERANDO_PRUEBA: 'Esp. prueba',
  PENDIENTE_RECOGIDA: 'Pend. recogida',
  ENTREGADA: 'Entregada',
  PROPIEDAD_TALLER: 'Del taller'
};

export function FacturaDetail() {
  const { id } = useParams<{ id: string }>();
  const [factura, setFactura] = useState<Factura | null>(null);
  const [loading, setLoading] = useState(true);

  // Catalog Data
  const [tiposPrenda, setTiposPrenda] = useState<TipoPrenda[]>([]);
  const [catalogoServicios, setCatalogoServicios] = useState<CatalogoServicio[]>([]);
  const [tiposUrgencia, setTiposUrgencia] = useState<any[]>([]);
  const [configuracion, setConfiguracion] = useState<any>({});

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prendaForm, setPrendaForm] = useState({
    tipoPrendaId: '',
    tipoUrgenciaId: '',
    talla: '',
    color: '',
    esLujo: false,
    marca: '',
    notas: '',
  });
  
  // The Prenda being created/edited in the modal
  const [activePrenda, setActivePrenda] = useState<Prenda | null>(null);

  // Service Row State
  const [servicioSeleccionado, setServicioSeleccionado] = useState('');
  const [medidaEntregada, setMedidaEntregada] = useState<number | ''>('');
  const [observacionesServicio, setObservacionesServicio] = useState('');
  const [isCalculando, setIsCalculando] = useState(false);
  const [busquedaServicio, setBusquedaServicio] = useState('');
  
  // Edit mode
  const [isEditingPrenda, setIsEditingPrenda] = useState(false);

  // Expand Prenda Card
  const [expandedPrendaId, setExpandedPrendaId] = useState<number | null>(null);

  // Abono Modal
  const [isAbonoModalOpen, setIsAbonoModalOpen] = useState(false);
  const [abonoForm, setAbonoForm] = useState({
    monto: '',
    metodoPago: 'EFECTIVO',
    notas: ''
  });
  const [savingAbono, setSavingAbono] = useState(false);

  const fetchFactura = async () => {
    if (!id) return;
    try {
      const data = await facturasService.getById(Number(id));
      setFactura(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFactura();
    tipoPrendaService.getTiposPrenda().then(res => setTiposPrenda(res.filter(t => t.activo)));
    catalogoService.getAll().then(res => setCatalogoServicios(res.filter(s => s.activo)));
    api.get('/tipo-urgencia').then(res => setTiposUrgencia(res.data)).catch(console.error);
    api.get('/configuracion').then(res => setConfiguracion(res.data)).catch(console.error);
  }, [id]);

  const handleOpenModal = (prendaToEdit?: Prenda) => {
    if (prendaToEdit) {
      setPrendaForm({
        tipoPrendaId: prendaToEdit.tipoPrendaId != null ? prendaToEdit.tipoPrendaId.toString() : '',
        tipoUrgenciaId: prendaToEdit.tipoUrgenciaId != null ? prendaToEdit.tipoUrgenciaId.toString() : '',
        talla: prendaToEdit.talla,
        color: prendaToEdit.color,
        esLujo: prendaToEdit.esLujo,
        marca: prendaToEdit.marca || '',
        notas: prendaToEdit.notas || '',
      });
      setActivePrenda(prendaToEdit);
      setIsEditingPrenda(true);
    } else {
      setPrendaForm({
        tipoPrendaId: '',
        tipoUrgenciaId: '',
        talla: '',
        color: '',
        esLujo: false,
        marca: '',
        notas: '',
      });
      setActivePrenda(null);
      setIsEditingPrenda(false);
    }
    
    setServicioSeleccionado('');
    setMedidaEntregada('');
    setObservacionesServicio('');
    setBusquedaServicio('');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditingPrenda(false);
    fetchFactura(); // Refresh factura to show new prendas
  };

  const handleSavePrenda = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const dto = {
        facturaId: Number(id),
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
      } else {
        const created = await prendasService.create(dto);
        // Fetch full prenda to get relations correctly
        const fullPrenda = await prendasService.getById(created.id);
        setActivePrenda(fullPrenda);
      }
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al guardar prenda');
    }
  };

  const handleAddServicio = async () => {
    if (!servicioSeleccionado || !activePrenda) return;
    try {
      setIsCalculando(true);

      // Add service
      await prendasService.asignarServicio(activePrenda.id, {
        servicioId: Number(servicioSeleccionado),
        medidaEntregada: medidaEntregada !== '' ? Number(medidaEntregada) : undefined,
        observaciones: observacionesServicio ? observacionesServicio : undefined,
      });
      
      // Refresh active prenda to show the new service
      const updated = await prendasService.getById(activePrenda.id);
      setActivePrenda(updated);
      setServicioSeleccionado('');
      setMedidaEntregada('');
      setObservacionesServicio('');
      
      // Update the invoice in the background to show real-time totals
      await fetchFactura();
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
      await fetchFactura();
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
      await fetchFactura();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al preparar la modificación');
    }
  };

  const handleRemovePrenda = async (prendaId: number) => {
    if (!window.confirm('¿Seguro que deseas eliminar esta prenda?')) return;
    try {
      await prendasService.delete(prendaId);
      await fetchFactura();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al eliminar');
    }
  };

  const handleCambiarUrgencia = async (prendaId: number, tipoUrgenciaId: number | null) => {
    try {
      await prendasService.update(prendaId, { tipoUrgenciaId });
      await fetchFactura();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al cambiar tipo urgencia');
    }
  };

  const handleCambiarEstado = async (prendaId: number, nuevoEstado: EstadoPrenda) => {
    try {
      await prendasService.cambiarEstado(prendaId, { nuevoEstado });
      await fetchFactura();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al cambiar estado');
    }
  };

  const handleAbonar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!factura) return;
    try {
      setSavingAbono(true);
      await facturasService.addAbono(factura.id, {
        monto: Number(abonoForm.monto),
        metodoPago: abonoForm.metodoPago as any,
        notas: abonoForm.notas || undefined
      });
      setIsAbonoModalOpen(false);
      setAbonoForm({ monto: '', metodoPago: 'EFECTIVO', notas: '' });
      await fetchFactura();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al registrar abono');
    } finally {
      setSavingAbono(false);
    }
  };

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}><div className="spinner spinner-lg" /></div>;
  }

  if (!factura) {
    return (
      <div className="empty-state">
        <FileText size={40} className="empty-state-icon" />
        <p className="empty-state-title">Factura no encontrada</p>
        <Link to="/facturas" className="btn btn-primary">Volver a facturas</Link>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
        <Link to="/facturas" className="btn btn-ghost btn-sm btn-icon">
          <ChevronLeft size={18} />
        </Link>
        <h1 className="page-title">Factura {factura.numero}</h1>
      </div>

      <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div className="grid-2" style={{ gap: 'var(--space-6)', flex: 1 }}>
            <div>
              <p className="form-label">Cliente</p>
              <p style={{ fontWeight: 'var(--font-medium)' }}>{factura.cliente?.nombre || 'Consumidor Final'}</p>
            </div>
            <div>
              <p className="form-label">Estado</p>
              <p>
                <span className={`badge ${factura.estadoPago === 'PAGADO' ? 'badge-success' : factura.estadoPago === 'PARCIAL' ? 'badge-warning' : 'badge-neutral'}`}>
                  {factura.estadoPago}
                </span>
              </p>
            </div>
            <div>
              <p className="form-label">Subtotal y Total</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '200px' }}>
                  <span style={{ color: 'var(--color-text-light)' }}>Subtotal:</span>
                  <span>€{Number(factura.subtotal).toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '200px' }}>
                  <span style={{ color: 'var(--color-text-light)' }}>IVA ({factura.impuestosJson?.iva || 21}%):</span>
                  <span>€{Number(factura.impuestosJson?.monto || 0).toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '200px', borderTop: '1px solid var(--color-border)', paddingTop: '4px', marginTop: '4px' }}>
                  <span style={{ fontWeight: 'bold' }}>Total:</span>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                    €{Number(factura.total).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Show total paid and remaining if any */}
            {(factura.abonos && factura.abonos.length > 0) && (
              <div>
                <p className="form-label">Saldos</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '200px' }}>
                    <span style={{ color: 'var(--color-text-light)' }}>Abonado:</span>
                    <span style={{ color: 'var(--color-success)', fontWeight: 'bold' }}>
                      €{factura.abonos.reduce((sum, a) => sum + Number(a.monto), 0).toFixed(2)}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '200px' }}>
                    <span style={{ color: 'var(--color-text-light)' }}>Restante:</span>
                    <span style={{ color: 'var(--color-warning)', fontWeight: 'bold' }}>
                      €{Math.max(0, Number(factura.total) - factura.abonos.reduce((sum, a) => sum + Number(a.monto), 0)).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div style={{ marginLeft: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <button 
              className="btn btn-primary" 
              onClick={() => setIsAbonoModalOpen(true)}
              disabled={factura.estadoPago === 'PAGADO' || factura.estadoPago === 'ANULADO'}
            >
              <CreditCard size={16} /> Abonar
            </button>
            <button
              className="btn btn-ghost"
              style={{ border: '1px solid var(--color-border)' }}
              onClick={() => imprimirFactura({ factura, tiposPrenda, configuracion })}
            >
              <Printer size={16} /> Imprimir
            </button>
            <button
              className="btn btn-ghost"
              style={{ border: '1px solid var(--color-border)' }}
              onClick={() => imprimirEtiquetas({ factura, tiposPrenda, configuracion })}
              title="Imprimir etiquetas para colgar en cada prenda"
            >
              <Tag size={16} /> Etiquetas
            </button>
          </div>
        </div>
      </div>

      {/* Prendas List */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
        <h3 className="card-title">Prendas de la Factura</h3>
      </div>

      <div className="grid-4">
        {/* Add Prenda Card */}
        <div 
          className="card" 
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)', cursor: 'pointer', border: '2px dashed var(--color-border)', backgroundColor: 'transparent', minHeight: '150px' }}
          onClick={() => handleOpenModal()}
        >
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Plus size={24} />
          </div>
          <p style={{ fontWeight: 'var(--font-medium)', color: 'var(--color-primary)' }}>Agregar Prenda</p>
        </div>

        {/* Existing Prendas */}
        {factura.prendas?.map((prenda) => {
          const tipo = tiposPrenda.find(t => t.id === prenda.tipoPrendaId)?.nombre || 'Desconocido';
          const totalPrenda = prenda.servicios?.reduce((acc, s) => acc + Number(s.precioFinal), 0) || 0;
          const isExpanded = expandedPrendaId === prenda.id;
          const urg = prenda.tipoUrgencia || tiposUrgencia.find(u => Number(u.id) === Number(prenda.tipoUrgenciaId));

          return (
            <div 
              key={prenda.id} 
              className="card" 
              style={{ cursor: 'pointer', position: 'relative', border: isExpanded ? '2px solid var(--color-primary)' : undefined }}
              onClick={() => setExpandedPrendaId(isExpanded ? null : prenda.id)}
            >
              <div style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', display: 'flex', gap: '4px' }}>
                <button 
                  className="btn btn-ghost btn-sm btn-icon" 
                  onClick={(e) => { e.stopPropagation(); handleOpenModal(prenda); }}
                  style={{ color: 'var(--color-primary)' }}
                >
                  <Edit2 size={16} />
                </button>
                <button 
                  className="btn btn-ghost btn-sm btn-icon" 
                  onClick={(e) => { e.stopPropagation(); handleRemovePrenda(prenda.id); }}
                  style={{ color: 'var(--color-danger)' }}
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text)' }}>
                  <Tag size={20} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-semibold)', textTransform: 'uppercase' }}>{tipo}</p>
                    {urg && (
                      <span className="badge badge-warning" style={{ fontSize: '10px', padding: '2px 6px', fontWeight: 'bold' }}>
                        {urg.nombre}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{prenda.codigoQR}</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-2)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-text-light)' }}>
                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: prenda.color.toLowerCase() }}></span>
                    {toTitleCase(prenda.color)}
                  </div>
                  {prenda.marca && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-text-light)' }}>
                      <Tag size={14} /> {toTitleCase(prenda.marca)}
                    </div>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-text-light)' }}>
                  <Calendar size={14} /> {prenda.fechaCompromiso ? new Date(prenda.fechaCompromiso).toLocaleDateString() : 'Sin fecha de compromiso'}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                  <label style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Atención:</label>
                  <select 
                    key={`urg-${prenda.id}-${prenda.tipoUrgenciaId}-${tiposUrgencia.length}`}
                    value={prenda.tipoUrgenciaId != null ? prenda.tipoUrgenciaId.toString() : ''}
                    onChange={(e) => handleCambiarUrgencia(prenda.id, e.target.value ? Number(e.target.value) : null)}
                    onClick={e => e.stopPropagation()}
                    style={{ 
                      fontSize: 'var(--text-xs)', 
                      padding: '2px 4px', 
                      borderRadius: '4px', 
                      border: '1px solid var(--color-border)',
                      backgroundColor: 'var(--bg-card)',
                      color: 'var(--color-text)'
                    }}
                  >
                    <option value="">Normal (0%)</option>
                    {tiposUrgencia.map(tu => (
                      <option key={tu.id} value={tu.id.toString()}>
                        {tu.nombre} ({Number(tu.porcentajeRecargo) > 0 ? '+' : ''}{Number(tu.porcentajeRecargo)}%)
                      </option>
                    ))}
                  </select>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                  <label style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Estado:</label>
                  <select 
                    value={prenda.estadoActual}
                    onChange={(e) => handleCambiarEstado(prenda.id, e.target.value as EstadoPrenda)}
                    onClick={e => e.stopPropagation()}
                    style={{ 
                      fontSize: 'var(--text-xs)', 
                      padding: '2px 4px', 
                      borderRadius: '4px', 
                      border: '1px solid var(--color-border)',
                      backgroundColor: 'var(--bg-card)',
                      color: 'var(--color-text)'
                    }}
                  >
                    {ESTADOS_PRENDA.map(e => (
                      <option key={e} value={e}>
                        {ESTADO_PRENDA_LABELS[e]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-3)', marginTop: 'var(--space-3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>{prenda.servicios?.length || 0} servicios</span>
                <span style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                  <Euro size={14} style={{ marginRight: '2px' }} /> {totalPrenda.toFixed(2)}
                </span>
              </div>

              {/* Expanded Details */}
              {isExpanded && (
                <div style={{ marginTop: 'var(--space-4)', borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-4)' }}>
                  <p style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>Detalle de Servicios</p>
                  {prenda.servicios?.length === 0 ? (
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-light)' }}>Sin servicios asignados.</p>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                      {prenda.servicios?.map(s => {
                        const srvName = catalogoServicios.find(c => c.id === s.servicioId)?.tipoEspecifico || 'Servicio';
                        return (
                          <div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-sm)', background: 'var(--bg-hover)', padding: '6px 8px', borderRadius: '4px' }}>
                            <div>
                              <span>{srvName} {s.medidaEntregada ? `(${s.medidaEntregada}cm)` : ''}</span>
                              {s.observaciones && (
                                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontStyle: 'italic', marginTop: '2px' }}>
                                  Obs: {s.observaciones}
                                </p>
                              )}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                              <span style={{ fontWeight: 'var(--font-medium)' }}>€{Number(s.precioFinal).toFixed(2)}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Agregar Prenda Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1000, 
          display: 'flex', alignItems: 'center', justifyContent: 'center', 
          backgroundColor: 'rgba(0,0,0,0.7)', padding: 'var(--space-4)'
        }}>
          <div className="card" style={{ width: '100%', maxWidth: '800px', padding: 'var(--space-6)', maxHeight: '90vh', overflowY: 'auto' }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)' }}>
              Agregar Prenda
            </h2>
            
            {/* Prenda Form */}
            <form onSubmit={handleSavePrenda} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div className="form-group">
                  <label className="form-label">Tipo de Prenda</label>
                  <select 
                    required 
                    className="form-select" 
                    value={prendaForm.tipoPrendaId}
                    onChange={e => setPrendaForm(p => ({ ...p, tipoPrendaId: e.target.value }))}
                    disabled={!!activePrenda && !isEditingPrenda}
                  >
                    <option value="">Seleccione...</option>
                    {tiposPrenda.map(t => <option key={t.id} value={t.id}>{t.nombre.toUpperCase()}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Tipo de Urgencia</label>
                  <select 
                    key={prendaForm.tipoUrgenciaId + '-' + tiposUrgencia.length}
                    className="form-select" 
                    value={prendaForm.tipoUrgenciaId}
                    onChange={e => setPrendaForm(p => ({ ...p, tipoUrgenciaId: e.target.value }))}
                    disabled={!!activePrenda && !isEditingPrenda}
                  >
                    <option value="">Normal (0%)</option>
                    {tiposUrgencia.map(tu => (
                      <option key={tu.id} value={tu.id.toString()}>
                        {tu.nombre} ({Number(tu.porcentajeRecargo) > 0 ? '+' : ''}{Number(tu.porcentajeRecargo)}%)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div className="form-group">
                  <label className="form-label">Talla</label>
                  <input type="text" required className="form-input" value={prendaForm.talla} onChange={e => setPrendaForm(p => ({ ...p, talla: e.target.value }))} placeholder="Ej. L, 42..." disabled={!!activePrenda && !isEditingPrenda} />
                </div>
                <div className="form-group">
                  <label className="form-label">Color</label>
                  <input type="text" required className="form-input" value={prendaForm.color} onChange={e => setPrendaForm(p => ({ ...p, color: e.target.value }))} placeholder="Ej. Azul marino..." disabled={!!activePrenda && !isEditingPrenda} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '28px' }}>
                  <input type="checkbox" id="esLujo" checked={prendaForm.esLujo} onChange={e => setPrendaForm(p => ({ ...p, esLujo: e.target.checked }))} disabled={!!activePrenda && !isEditingPrenda} />
                  <label htmlFor="esLujo" className="form-label" style={{ margin: 0 }}>Prenda Costosa / Alta Costura</label>
                </div>
              </div>

              {prendaForm.esLujo && (
                <div className="form-group">
                  <label className="form-label">Marca (Requerido para prendas de lujo)</label>
                  <input type="text" required className="form-input" value={prendaForm.marca} onChange={e => setPrendaForm(p => ({ ...p, marca: e.target.value }))} placeholder="Ej. Gucci, Prada..." disabled={!!activePrenda && !isEditingPrenda} />
                </div>
              )}

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
                              <span style={{ fontWeight: 'bold', color: 'var(--color-success)', fontFamily: 'var(--font-heading)' }}>
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
                <div style={{ marginBottom: 'var(--space-4)', display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
                  <input
                    type="text"
                    className="form-input"
                    style={{ flex: 1 }}
                    placeholder="Buscar servicio disponible (ej. dobladillo, bajo, cremallera)..."
                    value={busquedaServicio}
                    onChange={e => setBusquedaServicio(e.target.value)}
                  />
                  <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    <button type="button" className="btn btn-ghost" onClick={handleCloseModal}>
                      Cancelar
                    </button>
                    <button type="button" className="btn btn-primary" onClick={handleCloseModal}>
                      Guardar
                    </button>
                  </div>
                </div>

                {/* Servicios disponibles (All services since restrictions were removed in schema) */}
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
      )}
      {/* Agregar Abono Modal */}
      {isAbonoModalOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1000, 
          display: 'flex', alignItems: 'center', justifyContent: 'center', 
          backgroundColor: 'rgba(0,0,0,0.7)', padding: 'var(--space-4)'
        }}>
          <div className="card" style={{ width: '100%', maxWidth: '400px', padding: 'var(--space-6)' }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)' }}>
              Registrar Abono
            </h2>
            
            <form onSubmit={handleAbonar} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div className="form-group">
                <label className="form-label">Monto a abonar (€)</label>
                <input 
                  type="number" 
                  step="0.01"
                  min="0.01"
                  max={Math.max(0, Number(factura.total) - (factura.abonos?.reduce((sum, a) => sum + Number(a.monto), 0) || 0)).toFixed(2)}
                  required 
                  className="form-input" 
                  value={abonoForm.monto} 
                  onChange={e => setAbonoForm(f => ({ ...f, monto: e.target.value }))} 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Método de Pago</label>
                <select 
                  className="form-select" 
                  value={abonoForm.metodoPago}
                  onChange={e => setAbonoForm(f => ({ ...f, metodoPago: e.target.value }))}
                >
                  <option value="EFECTIVO">Efectivo</option>
                  <option value="TARJETA">Tarjeta</option>
                  <option value="TRANSFERENCIA">Transferencia</option>
                  <option value="OTRO">Otro</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Notas (Opcional)</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={abonoForm.notas} 
                  onChange={e => setAbonoForm(f => ({ ...f, notas: e.target.value }))} 
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--space-2)', gap: 'var(--space-2)' }}>
                <button type="button" className="btn btn-ghost" onClick={() => setIsAbonoModalOpen(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary" disabled={savingAbono}>
                  {savingAbono ? 'Guardando...' : 'Registrar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
