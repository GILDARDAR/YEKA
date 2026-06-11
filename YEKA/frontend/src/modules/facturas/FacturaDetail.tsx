import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { facturasService } from './facturas.service';
import { prendasService } from '../prendas/prendas.service';
import tipoPrendaService from '../../services/tipo-prenda.service';
import { catalogoService } from '../catalogo/catalogo.service';
import type { Factura, Prenda, TipoPrenda, CatalogoServicio, PrendaServicio } from '../../shared/types';
import { ChevronLeft, FileText, Plus, Check, Trash2, Tag, Calendar, Euro, Edit2, CreditCard } from 'lucide-react';

const toTitleCase = (str: string) => {
  if (!str) return '';
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
};

export function FacturaDetail() {
  const { id } = useParams<{ id: string }>();
  const [factura, setFactura] = useState<Factura | null>(null);
  const [loading, setLoading] = useState(true);

  // Catalog Data
  const [tiposPrenda, setTiposPrenda] = useState<TipoPrenda[]>([]);
  const [catalogoServicios, setCatalogoServicios] = useState<CatalogoServicio[]>([]);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prendaForm, setPrendaForm] = useState({
    tipoPrendaId: '',
    talla: '',
    color: '',
    esLujo: false,
    marca: '',
  });
  
  // The Prenda being created/edited in the modal
  const [activePrenda, setActivePrenda] = useState<Prenda | null>(null);

  // Service Row State
  const [servicioSeleccionado, setServicioSeleccionado] = useState('');
  const [medidaEntregada, setMedidaEntregada] = useState<number | ''>('');
  const [isCalculando, setIsCalculando] = useState(false);
  
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
  }, [id]);

  const handleOpenModal = (prendaToEdit?: Prenda) => {
    if (prendaToEdit) {
      setPrendaForm({
        tipoPrendaId: prendaToEdit.tipoPrendaId.toString(),
        talla: prendaToEdit.talla,
        color: prendaToEdit.color,
        esLujo: prendaToEdit.esLujo,
        marca: prendaToEdit.marca || '',
      });
      setActivePrenda(prendaToEdit);
      setIsEditingPrenda(true);
    } else {
      setPrendaForm({
        tipoPrendaId: '',
        talla: '',
        color: '',
        esLujo: false,
        marca: '',
      });
      setActivePrenda(null);
      setIsEditingPrenda(false);
    }
    
    setServicioSeleccionado('');
    setMedidaEntregada('');
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
        talla: prendaForm.talla,
        color: prendaForm.color,
        esLujo: prendaForm.esLujo,
        marca: prendaForm.marca || undefined,
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

  // Price Calculation Logic
  const precioCalculado = useMemo(() => {
    const tPrendaId = activePrenda ? activePrenda.tipoPrendaId : Number(prendaForm.tipoPrendaId);
    if (!tPrendaId || !servicioSeleccionado) return 0;
    
    const srv = catalogoServicios.find(s => s.id === Number(servicioSeleccionado));
    if (!srv) return 0;

    const regla = srv.preciosPorPrenda.find(p => p.tipoPrendaId === tPrendaId);
    if (!regla) return 0;

    let basePrice = Number(regla.precioBase);
    const medidaBase = Number(regla.medidaBase);
    const medidaExtra = Number(regla.medidaExtra);
    const precioExtra = Number(regla.precioExtra);
    const mEntregada = Number(medidaEntregada);

    if (mEntregada > medidaBase && medidaExtra > 0) {
      const exceso = mEntregada - medidaBase;
      const unidadesExtra = Math.ceil(exceso / medidaExtra);
      basePrice = basePrice + (unidadesExtra * precioExtra);
    }
    return basePrice;
  }, [servicioSeleccionado, medidaEntregada, activePrenda, prendaForm.tipoPrendaId, catalogoServicios]);

  const handleAddServicio = async () => {
    if (!servicioSeleccionado || !activePrenda) return;
    try {
      setIsCalculando(true);

      // Add service
      await prendasService.asignarServicio(activePrenda.id, {
        servicioId: Number(servicioSeleccionado),
        medidaEntregada: medidaEntregada ? Number(medidaEntregada) : undefined,
        tipoExpress: 'NORMAL',
      });
      
      // Refresh active prenda to show the new service
      const updated = await prendasService.getById(activePrenda.id);
      setActivePrenda(updated);
      setServicioSeleccionado('');
      setMedidaEntregada('');
      
      // Update the invoice in the background to show real-time totals
      await fetchFactura();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al añadir servicio');
    } finally {
      setIsCalculando(false);
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
          
          <div style={{ marginLeft: 'var(--space-6)' }}>
            <button 
              className="btn btn-primary" 
              onClick={() => setIsAbonoModalOpen(true)}
              disabled={factura.estadoPago === 'PAGADO' || factura.estadoPago === 'ANULADO'}
            >
              <CreditCard size={16} /> Abonar
            </button>
          </div>
        </div>
      </div>

      {/* Prendas List */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
        <h3 className="card-title">Prendas de la Factura</h3>
      </div>

      <div className="grid-3">
        {/* Add Prenda Card */}
        <div 
          className="card" 
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)', cursor: 'pointer', border: '2px dashed var(--color-border)', backgroundColor: 'transparent', minHeight: '150px' }}
          onClick={handleOpenModal}
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
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-semibold)', textTransform: 'uppercase' }}>{tipo}</p>
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
                            <span>{srvName} {s.medidaEntregada ? `(${s.medidaEntregada}cm)` : ''}</span>
                            <span style={{ fontWeight: 'var(--font-medium)' }}>€{Number(s.precioFinal).toFixed(2)}</span>
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
                  <label className="form-label">Talla</label>
                  <input type="text" required className="form-input" value={prendaForm.talla} onChange={e => setPrendaForm(p => ({ ...p, talla: e.target.value }))} placeholder="Ej. L, 42..." disabled={!!activePrenda && !isEditingPrenda} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div className="form-group">
                  <label className="form-label">Color</label>
                  <input type="text" required className="form-input" value={prendaForm.color} onChange={e => setPrendaForm(p => ({ ...p, color: e.target.value }))} placeholder="Ej. Azul marino..." disabled={!!activePrenda && !isEditingPrenda} />
                </div>
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

              {(!activePrenda || isEditingPrenda) && (
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--space-2)' }}>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    {isEditingPrenda ? 'Actualizar Prenda' : 'Guardar Prenda'}
                  </button>
                </div>
              )}
            </form>

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
              <table className="table" style={{ marginBottom: 'var(--space-4)' }}>
                <thead>
                  <tr>
                    <th>Servicio</th>
                    <th>Longitud (cm)</th>
                    <th>Precio</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {activePrenda.servicios?.map(s => {
                    const srvName = catalogoServicios.find(c => c.id === s.servicioId)?.tipoEspecifico || 'Servicio';
                    return (
                      <tr key={s.id}>
                        <td>{srvName}</td>
                        <td>{s.medidaEntregada || '-'}</td>
                        <td style={{ fontWeight: 'bold' }}>€{Number(s.precioFinal).toFixed(2)}</td>
                        <td style={{ textAlign: 'right' }}>
                           <span className="badge badge-success">Agregado</span>
                        </td>
                      </tr>
                    );
                  })}

                  {/* New Service Row */}
                  <tr>
                    <td>
                      <select className="form-select" style={{ padding: '4px 8px', fontSize: '14px' }} value={servicioSeleccionado} onChange={e => setServicioSeleccionado(e.target.value)}>
                        <option value="">Seleccione servicio...</option>
                        {catalogoServicios.map(s => {
                          const hasRule = s.preciosPorPrenda.some(p => p.tipoPrendaId === activePrenda.tipoPrendaId);
                          if (!hasRule) return null;
                          return <option key={s.id} value={s.id}>{s.categoria} - {s.tipoEspecifico}</option>
                        })}
                      </select>
                    </td>
                    <td>
                      <input 
                        type="number" 
                        min="0" 
                        className="form-input" 
                        style={{ padding: '4px 8px', fontSize: '14px', width: '100px' }} 
                        value={medidaEntregada} 
                        onChange={e => setMedidaEntregada(e.target.value ? Number(e.target.value) : '')}
                        placeholder="opcional"
                        disabled={!servicioSeleccionado}
                      />
                    </td>
                    <td style={{ verticalAlign: 'middle', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                      €{precioCalculado.toFixed(2)}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button 
                        className="btn btn-primary btn-sm btn-icon" 
                        disabled={!servicioSeleccionado || isCalculando}
                        onClick={handleAddServicio}
                        title="Agregar servicio"
                      >
                        <Check size={16} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--space-6)' }}>
              <button type="button" className="btn btn-primary" onClick={handleCloseModal}>
                Cerrar Ventana
              </button>
            </div>
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
