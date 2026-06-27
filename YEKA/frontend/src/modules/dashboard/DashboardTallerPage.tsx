import { useEffect, useState, useMemo, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../shared/auth.context';
import { facturasService } from '../facturas/facturas.service';
import { clientesService } from '../clientes/clientes.service';
import { prendasService } from '../prendas/prendas.service';
import tipoPrendaService from '../../services/tipo-prenda.service';
import { catalogoService } from '../catalogo/catalogo.service';
import api from '../../shared/api';
import type { Prenda, EstadoPrenda, Factura, Cliente, TipoPrenda, CatalogoServicio, MetodoPago } from '../../shared/types';
import { FileText, Tag, Search, Plus, Shirt, Edit2, Trash2, PlusCircle, TrendingUp, AlertCircle, Calendar } from 'lucide-react';

import { ClienteModal } from '../clientes/ClienteModal';
import { PrendaModal } from '../prendas/PrendaModal';

const PRENDA_URGENTE: EstadoPrenda[] = ['PENDIENTE_RECOGIDA', 'ESPERANDO_PRUEBA'];

export function DashboardTallerPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  
  // Dashboard Stats
  const [stats, setStats] = useState({
    facturasHoyCount: 0,
    facturasHoyValor: 0,
    facturasHoyEfectivo: 0,
    facturasHoyTarjeta: 0,
    prendasActivas: 0,
    prendasUrgentes: 0,
  });

  // Search KPIs
  const [searchPrenda, setSearchPrenda] = useState('');
  const [searchNroFactura, setSearchNroFactura] = useState('');
  const [isNroFacturaDropdownOpen, setIsNroFacturaDropdownOpen] = useState(false);
  const [isPrendaDropdownOpen, setIsPrendaDropdownOpen] = useState(false);
  const nroFacturaDropdownRef = useRef<HTMLDivElement>(null);
  const prendaDropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [facturasList, setFacturasList] = useState<Factura[]>([]);
  const [prendasList, setPrendasList] = useState<Prenda[]>([]);
  
  const prendasUrgentesList = useMemo(() => {
    return prendasList.filter(p => 
      p.estadoActual !== 'ENTREGADA' && 
      p.estadoActual !== 'PROPIEDAD_TALLER' && 
      p.tipoUrgenciaId !== null
    );
  }, [prendasList]);

  const garmentsForToday = useMemo(() => {
    const today = new Date();
    const isToday = (dateVal: string | Date) => {
      const d = new Date(dateVal);
      return d.getFullYear() === today.getFullYear() &&
             d.getMonth() === today.getMonth() &&
             d.getDate() === today.getDate();
    };

    return prendasList
      .filter(p => 
        ['RECIBIDA', 'PENDIENTE_VALORACION', 'EN_PRODUCCION'].includes(p.estadoActual) &&
        p.fechaCompromiso &&
        isToday(p.fechaCompromiso)
      )
      .sort((a, b) => a.id - b.id);
  }, [prendasList]);
  
  // Draft Invoice State
  const [draftFactura, setDraftFactura] = useState<Factura | null>(null);
  const [creatingDraft, setCreatingDraft] = useState(false);
  const [savingInvoice, setSavingInvoice] = useState(false);

  // Client Selection
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [clienteSearch, setClienteSearch] = useState('');
  const [isClientDropdownOpen, setIsClientDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [isClienteModalOpen, setIsClienteModalOpen] = useState(false);
  const [isPrendaModalOpen, setIsPrendaModalOpen] = useState(false);
  const [prendaToEdit, setPrendaToEdit] = useState<Prenda | null>(null);

  const [showSearchPrendaModal, setShowSearchPrendaModal] = useState(false);
  const [searchPrendaToEdit, setSearchPrendaToEdit] = useState<Prenda | null>(null);

  // Abonos State
  const [isAbonoModalOpen, setIsAbonoModalOpen] = useState(false);
  const [abonoToEdit, setAbonoToEdit] = useState<any | null>(null);
  const [savingAbono, setSavingAbono] = useState(false);
  const [abonoForm, setAbonoForm] = useState({
    monto: '',
    metodoPago: 'EFECTIVO',
    notas: ''
  });

  const [tiposPrenda, setTiposPrenda] = useState<TipoPrenda[]>([]);
  const [catalogoServicios, setCatalogoServicios] = useState<CatalogoServicio[]>([]);
  const [tiposUrgencia, setTiposUrgencia] = useState<any[]>([]);



  // Initial load
  useEffect(() => {
    const load = async () => {
      try {
        const [cls, facs, prs, tps, cats, urgsRes] = await Promise.all([
          clientesService.getAll(),
          facturasService.getAll(),
          prendasService.getAll(),
          tipoPrendaService.getTiposPrenda(),
          catalogoService.getAll(),
          api.get('/tipo-urgencia'),
        ]);

        setClientes(cls);
        setTiposPrenda(tps.filter(t => t.activo));
        setCatalogoServicios(cats.filter(c => c.activo));
        setTiposUrgencia(urgsRes.data);

        // Compute Stats based on user's sede (Taller) or all if admin
        const filterSedeId = user?.rol !== 'ADMIN' ? user?.sedeId : null;
        
        const filteredFacturas = filterSedeId ? facs.filter(f => f.sedeId === filterSedeId) : facs;
        const filteredPrendas = filterSedeId ? prs.filter(p => p.factura?.sedeId === filterSedeId) : prs;

        setFacturasList(filteredFacturas);
        setPrendasList(filteredPrendas);

        const today = new Date().toISOString().split('T')[0];
        const todayFacturas = filteredFacturas.filter(f => f.createdAt.startsWith(today));
        const activeTodayFacturas = todayFacturas.filter(f => f.estadoPago !== 'ANULADO');
        
        const countHoy = activeTodayFacturas.length;
        const valorHoy = activeTodayFacturas.reduce((sum, f) => sum + Number(f.total), 0);
        
        let efectivoHoy = 0;
        let tarjetaHoy = 0;
        filteredFacturas.forEach(f => {
          if (f.abonos) {
            f.abonos.forEach((a: any) => {
              if (a.fecha.startsWith(today)) {
                if (a.metodoPago === 'EFECTIVO') efectivoHoy += Number(a.monto);
                else if (a.metodoPago === 'TARJETA') tarjetaHoy += Number(a.monto);
              }
            });
          }
        });

        setStats({
          facturasHoyCount: countHoy,
          facturasHoyValor: valorHoy,
          facturasHoyEfectivo: efectivoHoy,
          facturasHoyTarjeta: tarjetaHoy,
          prendasActivas: filteredPrendas.filter(p => p.estadoActual !== 'ENTREGADA' && p.estadoActual !== 'PROPIEDAD_TALLER').length,
          prendasUrgentes: filteredPrendas.filter(p => p.estadoActual !== 'ENTREGADA' && p.estadoActual !== 'PROPIEDAD_TALLER' && p.tipoUrgenciaId !== null).length,
        });

      } catch (err) {
        console.error("Error loading dashboard taller:", err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [user]);

  // Handle outside click for dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsClientDropdownOpen(false);
      }
      if (nroFacturaDropdownRef.current && !nroFacturaDropdownRef.current.contains(e.target as Node)) {
        setIsNroFacturaDropdownOpen(false);
      }
      if (prendaDropdownRef.current && !prendaDropdownRef.current.contains(e.target as Node)) {
        setIsPrendaDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const refreshDraftInvoice = async () => {
    if (!draftFactura) return;
    try {
      const refreshed = await facturasService.getById(draftFactura.id);
      setDraftFactura(refreshed);
    } catch (e) {
      console.error(e);
    }
  };

  const ensureDraftFactura = async (clienteId?: number) => {
    if (draftFactura) {
      // If we already have a draft and we are just changing the client
      if (clienteId !== undefined && draftFactura.clienteId !== clienteId) {
        // Technically, changing client on an existing factura might require an update endpoint, 
        // but let's assume we can create a new one or the backend allows it. 
        // For now, if client changes and invoice has no prendas, we could just create a new one, 
        // or we need an endpoint to update it. Let's assume facturasService.create is fine for starting.
      }
      return draftFactura;
    }

    setCreatingDraft(true);
    try {
      const nueva = await facturasService.create({
        sedeId: user?.sedeId || 1,
        clienteId: clienteId || undefined,
        notas: 'Factura en proceso (Taller)'
      });
      const fullFactura = await facturasService.getById(nueva.id);
      setDraftFactura(fullFactura);
      return fullFactura;
    } catch (e) {
      console.error(e);
      alert('Error al inicializar factura');
    } finally {
      setCreatingDraft(false);
    }
  };

  const filteredClientesList = useMemo(() => {
    if (!clienteSearch) return [];
    const term = clienteSearch.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return clientes.filter(c => {
      const nom = c.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const tel = c.celular || '';
      return nom.includes(term) || tel.includes(term);
    }).slice(0, 5); // top 5
  }, [clientes, clienteSearch]);

  const filteredFacturasByNro = useMemo(() => {
    if (!searchNroFactura) return [];
    return facturasList
      .filter(f => f.numero.includes(searchNroFactura))
      .slice(0, 10);
  }, [facturasList, searchNroFactura]);

  const filteredPrendasBySearch = useMemo(() => {
    if (!searchPrenda) return [];
    const term = searchPrenda.toLowerCase();
    return prendasList.filter(p => 
      p.id.toString() === term || 
      (p.codigoQR && p.codigoQR.toLowerCase().includes(term))
    ).slice(0, 10);
  }, [searchPrenda, prendasList]);

  const handleSelectCliente = async (c: Cliente) => {
    setClienteSearch(`${c.nombre} ${c.celular ? `(${c.celular})` : ''}`);
    setIsClientDropdownOpen(false);
    await ensureDraftFactura(c.id);
  };

  const handleCreateClienteClose = () => {
    setIsClienteModalOpen(false);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleClienteSaved = async (nuevoCliente: Cliente) => {
    setClientes(prev => [...prev, nuevoCliente]);
    handleSelectCliente(nuevoCliente);
  };

  const handleOpenAddPrenda = async () => {
    await ensureDraftFactura();
    setPrendaToEdit(null);
    setIsPrendaModalOpen(true);
  };

  const handleEditPrenda = (prenda: Prenda) => {
    setPrendaToEdit(prenda);
    setIsPrendaModalOpen(true);
  };

  const handleRemovePrenda = async (prendaId: number) => {
    if (!window.confirm('¿Seguro que deseas eliminar esta prenda?')) return;
    try {
      await prendasService.delete(prendaId);
      await refreshDraftInvoice();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al eliminar');
    }
  };

  const handleCambiarUrgencia = async (prendaId: number, tipoUrgenciaId: number | null) => {
    try {
      await prendasService.update(prendaId, { tipoUrgenciaId });
      await refreshDraftInvoice();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al cambiar tipo urgencia');
    }
  };

  const handleOpenAddAbono = async () => {
    await ensureDraftFactura();
    setAbonoToEdit(null);
    setAbonoForm({ monto: '', metodoPago: 'EFECTIVO', notas: '' });
    setIsAbonoModalOpen(true);
  };

  const handleAbonar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!draftFactura) return;
    setSavingAbono(true);
    try {
      const payload = {
        monto: Number(abonoForm.monto),
        metodoPago: abonoForm.metodoPago as MetodoPago,
        notas: abonoForm.notas || undefined
      };
      if (abonoToEdit) {
        await facturasService.updateAbono(abonoToEdit.id, payload);
      } else {
        await facturasService.addAbono(draftFactura.id, payload);
      }
      setIsAbonoModalOpen(false);
      setAbonoToEdit(null);
      setAbonoForm({ monto: '', metodoPago: 'EFECTIVO', notas: '' });
      await refreshDraftInvoice();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al guardar abono');
    } finally {
      setSavingAbono(false);
    }
  };

  const handleOpenEditAbono = (a: any) => {
    setAbonoToEdit(a);
    setAbonoForm({
      monto: a.monto.toString(),
      metodoPago: a.metodoPago,
      notas: a.notas || ''
    });
    setIsAbonoModalOpen(true);
  };

  const handleDeleteAbono = async (abonoId: number) => {
    if (!window.confirm('¿Seguro que deseas eliminar este abono?')) return;
    try {
      await facturasService.deleteAbono(abonoId);
      await refreshDraftInvoice();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al eliminar abono');
    }
  };

  const handleFinalizeInvoice = async () => {
    if (!draftFactura) return;
    if (!draftFactura.prendas || draftFactura.prendas.length === 0) {
      alert('Debes agregar al menos una prenda para finalizar la factura.');
      return;
    }
    
    // Si queremos actualizar las notas para quitar "en proceso" podríamos hacerlo,
    // pero por ahora solo reseteamos el estado para empezar una nueva.
    setSavingInvoice(true);
    try {
      // Simular un pequeño delay para feedback visual
      await new Promise(r => setTimeout(r, 500));
      alert(`Factura #${draftFactura.numero} creada exitosamente.`);
      
      // Reiniciar vista
      setDraftFactura(null);
      setClienteSearch('');
      // Refrescar KPIs
      await facturasService.getAll();
      // ... update stats ...
    } catch (e) {
      console.error(e);
    } finally {
      setSavingInvoice(false);
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
        <div className="spinner spinner-lg" />
      </div>
    );
  }

  return (
    <div>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="page-title">Dashboard de Taller</h1>
          <p className="page-subtitle">
            {user?.nombre} · {new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '7fr 3fr', gap: 'var(--space-6)', alignItems: 'start' }}>
        {/* COLUMNA IZQUIERDA: FORMULARIO FACTURA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)' }}>
              Nueva Factura de Taller {draftFactura ? `(#${draftFactura.numero})` : ''}
            </h2>

            {/* BÚSQUEDA / CREACIÓN CLIENTE */}
            <div className="form-group" style={{ position: 'relative' }} ref={dropdownRef}>
              <label className="form-label">Cliente (Celular / Nombre)</label>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '9px', left: '10px', color: 'var(--color-text-light)' }}>
                  <Search size={18} />
                </div>
                <input
                  ref={searchInputRef}
                  type="text"
                  className="form-input"
                  style={{ paddingLeft: '36px' }}
                  placeholder="Buscar o dejar en blanco para Consumidor Final..."
                  value={clienteSearch}
                  onChange={e => {
                    setClienteSearch(e.target.value);
                    setIsClientDropdownOpen(true);
                  }}
                  onFocus={() => setIsClientDropdownOpen(true)}
                />
              </div>

              {isClientDropdownOpen && (clienteSearch.length > 0 || clientes.length > 0) && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0, right: 0,
                  background: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 'var(--radius-md)', zIndex: 10,
                  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)',
                  marginTop: '4px', maxHeight: '250px', overflowY: 'auto'
                }}>
                  {filteredClientesList.length > 0 ? (
                    filteredClientesList.map(c => (
                      <div 
                        key={c.id} 
                        style={{ padding: '8px 12px', cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                        onClick={() => handleSelectCliente(c)}
                        className="hover-bg"
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <div style={{ fontWeight: 'var(--font-medium)', color: '#f8fafc' }}>{c.nombre}</div>
                        <div style={{ fontSize: 'var(--text-xs)', color: '#94a3b8' }}>{c.celular || 'Sin celular'}</div>
                      </div>
                    ))
                  ) : (
                    clienteSearch.length > 0 && (
                      <div style={{ padding: '8px 12px', fontSize: 'var(--text-sm)', color: '#94a3b8' }}>
                        No se encontraron clientes.
                      </div>
                    )
                  )}
                  
                  {/* CREATE CLIENT BUTTON */}
                  <div 
                    style={{ 
                      padding: '10px 12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', 
                      color: '#a78bfa', fontWeight: 'var(--font-medium)', background: 'rgba(0,0,0,0.3)',
                      borderTop: '1px solid rgba(255,255,255,0.1)'
                    }}
                    onClick={() => {
                      setIsClientDropdownOpen(false);
                      setIsClienteModalOpen(true);
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.3)'}
                  >
                    <PlusCircle size={16} /> Crear cliente nuevo
                  </div>
                </div>
              )}
            </div>

            {/* TABLA DE PRENDAS */}
            <div style={{ marginTop: 'var(--space-4)', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: 'var(--text-lg)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-3)' }}>
                Prendas
              </h3>
              
              <div className="table-wrapper" style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: 'var(--space-4)' }}>
                <table className="table">
                  <thead style={{ position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>
                    <tr>
                      <th>Tipo Prenda</th>
                      <th>Servicios</th>
                      <th>Atención</th>
                      <th style={{ textAlign: 'right' }}>Valor</th>
                      <th style={{ textAlign: 'center' }}>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(!draftFactura?.prendas || draftFactura.prendas.length === 0) ? (
                      <tr>
                        <td colSpan={5} style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-text-muted)' }}>
                          No hay prendas agregadas a esta factura.
                        </td>
                      </tr>
                    ) : (
                      draftFactura.prendas.map(p => {
                        const tipo = tiposPrenda.find(t => t.id === p.tipoPrendaId)?.nombre || 'Desconocido';
                        const val = p.servicios?.reduce((acc, s) => acc + Number(s.precioFinal), 0) || 0;
                        const srvResumen = p.servicios?.map(s => {
                          const c = catalogoServicios.find(cs => cs.id === s.servicioId);
                          return c ? c.tipoEspecifico : 'Servicio';
                        }).join(', ') || 'Sin servicios';

                        return (
                          <tr key={p.id}>
                            <td style={{ fontWeight: 'var(--font-medium)', textTransform: 'uppercase' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span>{tipo}</span>
                                {tiposUrgencia.find(tu => tu.id === p.tipoUrgenciaId) && (
                                  <span className="badge badge-warning" style={{ fontSize: '9px', padding: '1px 4px', textTransform: 'none' }}>
                                    {tiposUrgencia.find(tu => tu.id === p.tipoUrgenciaId)?.nombre}
                                  </span>
                                )}
                              </div>
                              <div style={{ fontSize: '10px', color: 'var(--color-text-muted)', fontWeight: 'normal' }}>{p.codigoQR}</div>
                              {p.fechaCompromiso && (
                                <div style={{ fontSize: '10px', color: 'var(--color-info)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '3px', fontWeight: 'normal', textTransform: 'none' }}>
                                  <Calendar size={10} /> F. Compromiso: {new Date(p.fechaCompromiso).toLocaleDateString()}
                                </div>
                              )}
                            </td>
                            <td style={{ fontSize: 'var(--text-sm)' }}>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                <span>{p.servicios?.length || 0} asignados</span>
                                <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>{srvResumen}</span>
                              </div>
                            </td>
                            <td>
                              <select 
                                className="form-select"
                                style={{ fontSize: '12px', padding: '2px 24px 2px 8px', height: 'auto', minHeight: '26px' }}
                                value={p.tipoUrgenciaId != null ? p.tipoUrgenciaId.toString() : ''}
                                onChange={e => handleCambiarUrgencia(p.id, e.target.value ? Number(e.target.value) : null)}
                              >
                                <option value="">Normal</option>
                                {tiposUrgencia.map(tu => (
                                  <option key={tu.id} value={tu.id.toString()}>{tu.nombre}</option>
                                ))}
                              </select>
                            </td>
                            <td style={{ textAlign: 'right', fontWeight: 'bold' }}>
                              €{val.toFixed(2)}
                            </td>
                            <td>
                              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
                                <button className="btn btn-ghost btn-sm btn-icon" onClick={() => handleEditPrenda(p)} style={{ color: 'var(--color-primary)' }} title="Editar prenda">
                                  <Edit2 size={16} />
                                </button>
                                <button className="btn btn-ghost btn-sm btn-icon" onClick={() => handleRemovePrenda(p.id)} style={{ color: 'var(--color-danger)' }} title="Eliminar prenda">
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: 'var(--space-2)' }}>
                <button 
                  type="button" 
                  className="btn btn-outline" 
                  style={{ width: 'max-content', borderStyle: 'dashed' }}
                  onClick={handleOpenAddPrenda}
                  disabled={creatingDraft}
                >
                  {creatingDraft ? <span className="spinner spinner-sm" /> : <Plus size={16} />} 
                  Agregar Prenda
                </button>
              </div>

              <hr style={{ margin: 'var(--space-6) 0', borderColor: 'var(--color-border)' }} />

              {/* ZONA DE ABONOS */}
              <div style={{ marginBottom: 'var(--space-2)' }}>
                <h3 style={{ fontSize: 'var(--text-lg)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-3)' }}>
                  Abonos Registrados
                </h3>
                {draftFactura?.abonos && draftFactura.abonos.length > 0 ? (
                  <div className="table-wrapper" style={{ maxHeight: '250px', overflowY: 'auto', marginBottom: 'var(--space-3)' }}>
                    <table className="table">
                      <thead style={{ position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>
                        <tr>
                          <th>Fecha</th>
                          <th>Método</th>
                          <th>Notas</th>
                          <th style={{ textAlign: 'right' }}>Monto</th>
                          <th style={{ textAlign: 'center' }}>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {draftFactura.abonos.map((a: any) => (
                          <tr key={a.id}>
                            <td style={{ whiteSpace: 'nowrap' }}>{new Date(a.fecha).toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' })}</td>
                            <td><span className="badge badge-neutral">{a.metodoPago}</span></td>
                            <td style={{ color: 'var(--color-text-light)' }}>{a.notas || '-'}</td>
                            <td style={{ textAlign: 'right', fontWeight: 'bold', color: 'var(--color-success)' }}>
                              €{Number(a.monto).toFixed(2)}
                            </td>
                            <td>
                              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
                                <button className="btn btn-ghost btn-sm btn-icon" onClick={() => handleOpenEditAbono(a)} style={{ color: 'var(--color-primary)' }} title="Editar abono">
                                  <Edit2 size={16} />
                                </button>
                                <button className="btn btn-ghost btn-sm btn-icon" onClick={() => handleDeleteAbono(a.id)} style={{ color: 'var(--color-danger)' }} title="Eliminar abono">
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-3)' }}>
                    No hay abonos registrados para esta factura.
                  </p>
                )}
                
                <button 
                  type="button" 
                  className="btn btn-outline" 
                  style={{ width: 'max-content', borderStyle: 'dashed' }}
                  onClick={handleOpenAddAbono}
                  disabled={creatingDraft || !draftFactura}
                >
                  <Plus size={16} /> 
                  Hacer Abono
                </button>
              </div>
            </div>

            {/* FOOTER TOTALIZADOR */}
            <div style={{ 
              marginTop: 'auto', 
              paddingTop: 'var(--space-4)', 
              borderTop: '2px solid var(--color-border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end'
            }}>
              <div>
                <button 
                  className="btn btn-primary" 
                  disabled={!draftFactura || !draftFactura.prendas || draftFactura.prendas.length === 0 || savingInvoice}
                  onClick={handleFinalizeInvoice}
                >
                  {savingInvoice ? 'Procesando...' : 'Finalizar e Imprimir Ticket'}
                </button>
              </div>
              
              <div style={{ minWidth: '250px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: 'var(--text-sm)', color: 'var(--color-text-light)' }}>
                  <span>Subtotal:</span>
                  <span>€{Number(draftFactura?.subtotal || 0).toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: 'var(--text-sm)', color: 'var(--color-text-light)' }}>
                  <span>IVA ({draftFactura?.impuestosJson?.iva || 21}%):</span>
                  <span>€{Number(draftFactura?.impuestosJson?.monto || 0).toFixed(2)}</span>
                </div>
                
                {/* Mostrar Abonos en el total */}
                {(draftFactura?.abonos?.length ?? 0) > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: 'var(--text-sm)', color: 'var(--color-success)' }}>
                    <span>Abonos realizados:</span>
                    <span>-€{Number(draftFactura?.abonos?.reduce((sum, a) => sum + Number(a.monto), 0) || 0).toFixed(2)}</span>
                  </div>
                )}
                
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--color-border)', paddingTop: '8px' }}>
                  <span style={{ fontWeight: 'bold', fontSize: 'var(--text-lg)' }}>Total:</span>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                    €{Number(draftFactura?.total || 0).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: KPIs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          
          {/* Buscar Facturas */}
          <div className="card">
            <h3 className="card-title" style={{ fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)' }}>
              Búsqueda de Facturas
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div className="form-group" style={{ position: 'relative', margin: 0 }} ref={nroFacturaDropdownRef}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', color: 'var(--color-text-light)' }}><FileText size={16} /></div>
                <input 
                  type="text" 
                  className="form-input" 
                  style={{ paddingLeft: '32px', fontSize: '13px', padding: '6px 8px 6px 32px' }} 
                  placeholder="Nro Factura" 
                  value={searchNroFactura} 
                  onChange={e => {
                    setSearchNroFactura(e.target.value);
                    setIsNroFacturaDropdownOpen(true);
                  }}
                  onFocus={() => setIsNroFacturaDropdownOpen(true)}
                />
                
                {isNroFacturaDropdownOpen && searchNroFactura.length > 0 && (
                  <div style={{
                    position: 'absolute', top: '100%', left: 0, right: 0,
                    background: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 'var(--radius-md)', zIndex: 20,
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)',
                    marginTop: '4px', maxHeight: '200px', overflowY: 'auto'
                  }}>
                    {filteredFacturasByNro.length > 0 ? (
                      filteredFacturasByNro.map(f => (
                        <div 
                          key={f.id} 
                          style={{ padding: '8px 12px', cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                          onClick={() => {
                            setIsNroFacturaDropdownOpen(false);
                            navigate(`/facturas/${f.id}`);
                          }}
                          className="hover-bg"
                          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                        >
                          <div style={{ fontWeight: 'var(--font-medium)', color: '#f8fafc' }}>#{f.numero}</div>
                          <div style={{ fontSize: 'var(--text-xs)', color: '#94a3b8' }}>{f.cliente?.nombre || 'Consumidor Final'}</div>
                        </div>
                      ))
                    ) : (
                      <div style={{ padding: '8px 12px', fontSize: 'var(--text-sm)', color: '#94a3b8' }}>
                        No encontrada
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="form-group" style={{ position: 'relative', margin: 0 }} ref={prendaDropdownRef}>
                <div style={{ position: 'absolute', top: '8px', left: '8px', color: 'var(--color-text-light)' }}><Tag size={16} /></div>
                <input 
                  type="text" 
                  className="form-input" 
                  style={{ paddingLeft: '32px', fontSize: '13px', padding: '6px 8px 6px 32px' }} 
                  placeholder="Prenda (ID o Código QR)" 
                  value={searchPrenda} 
                  onChange={e => {
                    setSearchPrenda(e.target.value);
                    setIsPrendaDropdownOpen(true);
                  }} 
                  onFocus={() => setIsPrendaDropdownOpen(true)}
                />

                {isPrendaDropdownOpen && searchPrenda.length > 0 && (
                  <div style={{
                    position: 'absolute', top: '100%', left: 0, right: 0,
                    background: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 'var(--radius-md)', zIndex: 20,
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)',
                    marginTop: '4px', maxHeight: '200px', overflowY: 'auto'
                  }}>
                    {filteredPrendasBySearch.length > 0 ? (
                      filteredPrendasBySearch.map(p => (
                        <div 
                          key={p.id} 
                          style={{ padding: '8px 12px', cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                          onClick={() => {
                            setIsPrendaDropdownOpen(false);
                            setSearchPrendaToEdit(p);
                            setShowSearchPrendaModal(true);
                          }}
                          className="hover-bg"
                          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                        >
                          <div style={{ fontWeight: 'var(--font-medium)', color: '#f8fafc' }}>
                            {p.codigoQR ? `QR: ${p.codigoQR}` : `ID: ${p.id}`}
                          </div>
                          <div style={{ fontSize: 'var(--text-xs)', color: '#94a3b8' }}>Factura #{p.facturaId}</div>
                        </div>
                      ))
                    ) : (
                      <div style={{ padding: '8px 12px', fontSize: 'var(--text-sm)', color: '#94a3b8' }}>
                        No encontrada
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <Link to="/facturas" className="btn btn-secondary btn-sm" style={{ marginTop: '4px', width: '100%', justifyContent: 'center' }}>
                Ir a todas las facturas
              </Link>
            </div>
          </div>

          {/* Facturas Hoy */}
          <div className="stat-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p className="stat-card-label">Facturas Hoy</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '4px' }}>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-light)' }}>
                    Cantidad: <strong style={{ color: 'var(--color-text)', fontSize: '1.1rem' }}>{stats.facturasHoyCount}</strong>
                  </span>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-light)' }}>
                    Valor: <strong style={{ color: 'var(--color-text)', fontSize: '1.1rem' }}>€{stats.facturasHoyValor.toFixed(2)}</strong>
                  </span>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-light)' }}>
                    Efectivo: <strong style={{ color: 'var(--color-success)', fontSize: '1.1rem' }}>€{stats.facturasHoyEfectivo.toFixed(2)}</strong>
                  </span>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-light)' }}>
                    Tarjeta: <strong style={{ color: 'var(--color-info)', fontSize: '1.1rem' }}>€{stats.facturasHoyTarjeta.toFixed(2)}</strong>
                  </span>
                </div>
              </div>
              <div style={{ color: 'var(--color-info)', background: 'var(--color-info-bg)', padding: 'var(--space-2)', borderRadius: 'var(--radius-md)' }}>
                <TrendingUp size={20} />
              </div>
            </div>
          </div>

          {/* Prendas Activas */}
          <div className="stat-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p className="stat-card-label">Prendas Activas</p>
                <p className="stat-card-value">{stats.prendasActivas}</p>
              </div>
              <div style={{ color: 'var(--color-success)', background: 'var(--color-success-bg)', padding: 'var(--space-2)', borderRadius: 'var(--radius-md)' }}>
                <Shirt size={20} />
              </div>
            </div>
            <p className="stat-card-sub">En proceso en el taller</p>
          </div>

          {/* Prendas Urgentes */}
          <div className={`stat-card ${stats.prendasUrgentes > 0 ? 'stat-card--alert' : ''}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p className="stat-card-label">Prendas Urgentes</p>
                <p className="stat-card-value" style={{ color: stats.prendasUrgentes > 0 ? 'var(--color-warning)' : undefined }}>
                  {stats.prendasUrgentes}
                </p>
              </div>
              <div style={{ color: 'var(--color-warning)', background: 'var(--color-warning-bg)', padding: 'var(--space-2)', borderRadius: 'var(--radius-md)' }}>
                <AlertCircle size={20} />
              </div>
            </div>
            <p className="stat-card-sub" style={{ marginBottom: 'var(--space-3)' }}>Prendas activas con recargo de urgencia</p>
            
            {prendasUrgentesList.length > 0 ? (
              <div style={{
                marginTop: 'var(--space-3)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                maxHeight: '200px',
                overflowY: 'auto',
                paddingRight: '4px'
              }}>
                {prendasUrgentesList.map(p => {
                  const tipo = tiposPrenda.find(t => t.id === p.tipoPrendaId)?.nombre || 'Prenda';
                  const urgNombre = tiposUrgencia.find(u => u.id === p.tipoUrgenciaId)?.nombre || 'Urgente';
                  return (
                    <div 
                      key={p.id}
                      style={{
                        padding: '8px 12px',
                        background: 'rgba(245, 158, 11, 0.1)',
                        border: '1px solid rgba(245, 158, 11, 0.2)',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ fontWeight: 'bold', fontSize: 'var(--text-xs)', color: 'var(--color-warning)' }}>
                            {urgNombre.toUpperCase()}
                          </span>
                          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-light)', textTransform: 'uppercase' }}>
                            {tipo}
                          </span>
                        </div>
                        <Link 
                          to={`/facturas/${p.facturaId}`}
                          style={{
                            fontSize: 'var(--text-sm)',
                            fontWeight: 'bold',
                            color: 'var(--color-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            marginTop: '2px',
                            textDecoration: 'underline'
                          }}
                        >
                          {p.codigoQR}
                        </Link>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '10px', color: 'var(--color-text-muted)', margin: 0 }}>Compromiso</p>
                        <p style={{ fontSize: 'var(--text-xs)', fontWeight: 'bold', color: 'var(--color-text)', margin: 0 }}>
                          {p.fechaCompromiso ? new Date(p.fechaCompromiso).toLocaleDateString() : 'Sin fecha'}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontStyle: 'italic', marginTop: 'var(--space-2)' }}>
                No hay prendas urgentes activas.
              </p>
            )}
          </div>

        </div>
      </div>

      {/* Tabla Resumen de Prendas con Compromiso Hoy */}
      <div className="card" style={{ marginTop: 'var(--space-6)', padding: 'var(--space-6)' }}>
        <h3 className="card-title" style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertCircle size={20} style={{ color: 'var(--color-primary)' }} />
          Prendas Comprometidas para Hoy ({garmentsForToday.length})
        </h3>
        
        {garmentsForToday.length > 0 ? (
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Prenda (QR)</th>
                  <th>Tipo Prenda</th>
                  <th>Factura</th>
                  <th>Prioridad</th>
                  <th>Estado</th>
                  <th>Servicios Asignados</th>
                </tr>
              </thead>
              <tbody>
                {garmentsForToday.map(p => {
                  const tipo = tiposPrenda.find(t => t.id === p.tipoPrendaId)?.nombre || 'Desconocido';
                  const urg = tiposUrgencia.find(u => u.id === p.tipoUrgenciaId);
                  const srvResumen = p.servicios?.map((s: any) => {
                    const c = catalogoServicios.find(cs => cs.id === s.servicioId);
                    return c ? c.tipoEspecifico : 'Servicio';
                  }).join(', ') || 'Sin servicios';

                  return (
                    <tr key={p.id}>
                      <td style={{ fontWeight: 'bold' }}>{p.id}</td>
                      <td>
                        <Link 
                          to={`/facturas/${p.facturaId}`}
                          style={{ color: 'var(--color-primary)', fontWeight: 'var(--font-medium)', fontFamily: 'monospace' }}
                        >
                          {p.codigoQR}
                        </Link>
                      </td>
                      <td style={{ textTransform: 'uppercase' }}>{tipo}</td>
                      <td>
                        <Link to={`/facturas/${p.facturaId}`} style={{ color: 'var(--color-text-light)' }}>
                          #{p.facturaId}
                        </Link>
                      </td>
                      <td>
                        {urg ? (
                          <span className="badge badge-warning" style={{ fontSize: '11px', fontWeight: 'bold' }}>
                            {urg.nombre}
                          </span>
                        ) : (
                          <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>Normal</span>
                        )}
                      </td>
                      <td>
                        <span className={`badge ${p.estadoActual === 'RECIBIDA' ? 'badge-info' : p.estadoActual === 'PENDIENTE_VALORACION' ? 'badge-neutral' : 'badge-primary'}`}>
                          {p.estadoActual === 'RECIBIDA' ? 'Recibida' : p.estadoActual === 'PENDIENTE_VALORACION' ? 'Pend. valoración' : 'En producción'}
                        </span>
                      </td>
                      <td style={{ fontSize: 'var(--text-sm)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                          <span>{p.servicios?.length || 0} asignados</span>
                          <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>{srvResumen}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', margin: 0, fontStyle: 'italic' }}>
            No hay prendas con estado Recibida, Pendiente de valoración o En proceso con compromiso para el día de hoy.
          </p>
        )}
      </div>

      {/* Modals */}
      {isClienteModalOpen && (
        <ClienteModal 
          onClose={handleCreateClienteClose}
          onSaved={handleClienteSaved}
        />
      )}

      {isPrendaModalOpen && draftFactura && (
        <PrendaModal
          facturaId={draftFactura.id}
          prendaToEdit={prendaToEdit}
          tiposPrenda={tiposPrenda}
          catalogoServicios={catalogoServicios}
          onClose={() => setIsPrendaModalOpen(false)}
          onSaved={refreshDraftInvoice}
        />
      )}

      {/* Agregar Abono Modal */}
      {isAbonoModalOpen && draftFactura && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1000, 
          display: 'flex', alignItems: 'center', justifyContent: 'center', 
          backgroundColor: 'rgba(0,0,0,0.7)', padding: 'var(--space-4)'
        }}>
          <div className="card" style={{ width: '100%', maxWidth: '400px', padding: 'var(--space-6)' }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)' }}>
              {abonoToEdit ? 'Editar Abono' : 'Registrar Abono'}
            </h2>
            
            <form onSubmit={handleAbonar} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div className="form-group">
                <label className="form-label">Monto a abonar (€)</label>
                <input 
                  type="number" 
                  step="0.01"
                  min="0.01"
                  max={
                    abonoToEdit
                      ? Math.min(1000, Math.max(0, Number(draftFactura.total) - (draftFactura.abonos?.reduce((sum, a) => sum + Number(a.monto), 0) || 0)) + Number(abonoToEdit.monto)).toFixed(2)
                      : Math.min(1000, Math.max(0, Number(draftFactura.total) - (draftFactura.abonos?.reduce((sum, a) => sum + Number(a.monto), 0) || 0))).toFixed(2)
                  }
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
                <button type="button" className="btn btn-ghost" onClick={() => {
                  setIsAbonoModalOpen(false);
                  setAbonoToEdit(null);
                }}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary" disabled={savingAbono}>
                  {savingAbono ? 'Guardando...' : (abonoToEdit ? 'Actualizar' : 'Registrar')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showSearchPrendaModal && (
        <PrendaModal
          facturaId={searchPrendaToEdit?.facturaId || 0}
          prendaToEdit={searchPrendaToEdit}
          tiposPrenda={tiposPrenda}
          catalogoServicios={catalogoServicios}
          onClose={() => setShowSearchPrendaModal(false)}
          onSaved={() => {
            setShowSearchPrendaModal(false);
            window.location.reload();
          }}
        />
      )}
    </div>
  );
}
