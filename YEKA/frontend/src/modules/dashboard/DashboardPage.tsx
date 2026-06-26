import { useState, useEffect, useMemo, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../shared/auth.context';
import { facturasService } from '../facturas/facturas.service';
import { clientesService } from '../clientes/clientes.service';
import { prendasService } from '../prendas/prendas.service';
import { sedesService } from '../sedes/sedes.service';
import { usuariosService } from '../usuarios/usuarios.service';
import tipoPrendaService from '../../services/tipo-prenda.service';
import { catalogoService } from '../catalogo/catalogo.service';
import api from '../../shared/api';
import type { Sede, CapacidadResponse, TipoPrenda, CatalogoServicio, Prenda, EstadoPago, EstadoPrenda, Factura } from '../../shared/types';
import { PrendaModal } from '../prendas/PrendaModal';
import { FileText, Tag, Bell, TrendingUp, Shirt, AlertCircle, CheckCircle, AlertTriangle, MessageSquare, Send } from 'lucide-react';

import { NuevaFacturaModal } from '../facturas/NuevaFacturaModal';

const ESTADO_LABELS: Record<EstadoPago, string> = {
  PENDIENTE: 'Pendiente',
  PARCIAL: 'Parcial',
  PAGADO: 'Pagado',
  ANULADO: 'Anulado',
};

const PRENDA_URGENTE: EstadoPrenda[] = ['PENDIENTE_RECOGIDA', 'ESPERANDO_PRUEBA'];

export function DashboardPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sedes, setSedes] = useState<Sede[]>([]);
  const [selectedSedeId, setSelectedSedeId] = useState<string>(''); // empty string means "TODAS"
  const [auditLogs, setAuditLogs] = useState<any[]>([]);
  const [hasUnreadLogs, setHasUnreadLogs] = useState(false);
  const [stats, setStats] = useState({
    totalClientes: 0,
    facturasPendientes: 0,
    prendasActivas: 0,
    prendasUrgentes: 0,
    facturasHoyCount: 0,
    facturasHoyValor: 0,
    facturasHoyEfectivo: 0,
    facturasHoyTarjeta: 0,
  });
  const [capacidad, setCapacidad] = useState<CapacidadResponse | null>(null);
  const [facturasList, setFacturasList] = useState<any[]>([]);
  const [prendasList, setPrendasList] = useState<Prenda[]>([]);
  
  const [tiposPrenda, setTiposPrenda] = useState<TipoPrenda[]>([]);
  const [catalogoServicios, setCatalogoServicios] = useState<CatalogoServicio[]>([]);
  
  const [showPrendaModal, setShowPrendaModal] = useState(false);
  const [prendaToEdit, setPrendaToEdit] = useState<any>(null);
  
  const [searchPrenda, setSearchPrenda] = useState('');
  const [searchNroFactura, setSearchNroFactura] = useState('');
  const [isNroFacturaDropdownOpen, setIsNroFacturaDropdownOpen] = useState(false);
  const [isPrendaDropdownOpen, setIsPrendaDropdownOpen] = useState(false);
  const nroFacturaDropdownRef = useRef<HTMLDivElement>(null);
  const prendaDropdownRef = useRef<HTMLDivElement>(null);
  const messagePopoverRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Quick message state
  const [isMessagePopoverOpen, setIsMessagePopoverOpen] = useState(false);
  const [quickSedeId, setQuickSedeId] = useState<string>('');
  const [quickMensaje, setQuickMensaje] = useState<string>('');
  const [quickSending, setQuickSending] = useState(false);

  useEffect(() => {
    if (user?.rol === 'ADMIN') {
      sedesService.getAll().then(res => {
        setSedes(res);
      }).catch(() => {});
    }
  }, [user]);

  // Set initial selected Sede based on user role
  useEffect(() => {
    if (user) {
      if (user.rol === 'ADMIN') {
        setSelectedSedeId(''); // Default to "TODAS" for Admin
      } else {
        setSelectedSedeId(user.sedeId?.toString() || '');
      }
    }
  }, [user]);

  useEffect(() => {
    const load = async () => {
      try {
        const [clientes, facturas, prendas, tps, cats] = await Promise.all([
          clientesService.getAll(),
          facturasService.getAll(),
          prendasService.getAll(),
          tipoPrendaService.getTiposPrenda(),
          catalogoService.getAll()
        ]);

        setTiposPrenda(tps.filter((t: TipoPrenda) => t.activo));
        setCatalogoServicios(cats.filter((c: CatalogoServicio) => c.activo));

        const filterSedeId = selectedSedeId ? parseInt(selectedSedeId, 10) : null;

        // Filter data based on selected Sede
        const filteredClientes = filterSedeId
          ? clientes.filter((c: any) => c.sedeOrigenId === filterSedeId)
          : clientes;

        const filteredFacturas = filterSedeId
          ? facturas.filter((f: Factura) => f.sedeId === filterSedeId)
          : facturas;

        const filteredPrendas = filterSedeId
          ? prendas.filter((p: Prenda) => p.factura?.sedeId === filterSedeId)
          : prendas;

        const today = new Date().toISOString().split('T')[0];
        const todayFacturas = filteredFacturas.filter((f: Factura) => f.createdAt.startsWith(today));

        const activeTodayFacturas = todayFacturas.filter((f: Factura) => f.estadoPago !== 'ANULADO');
        const countHoy = activeTodayFacturas.length;
        const valorHoy = activeTodayFacturas.reduce((sum: number, f: Factura) => sum + Number(f.total), 0);

        let efectivoHoy = 0;
        let tarjetaHoy = 0;

        filteredFacturas.forEach((f: Factura) => {
          if (f.abonos) {
            f.abonos.forEach((a: any) => {
              if (a.fecha.startsWith(today)) {
                if (a.metodoPago === 'EFECTIVO') {
                  efectivoHoy += Number(a.monto);
                } else if (a.metodoPago === 'TARJETA') {
                  tarjetaHoy += Number(a.monto);
                }
              }
            });
          }
        });

        setStats({
          totalClientes: filteredClientes.length,
          facturasPendientes: filteredFacturas.filter((f: Factura) => f.estadoPago === 'PENDIENTE' || f.estadoPago === 'PARCIAL').length,
          prendasActivas: filteredPrendas.filter((p: Prenda) => p.estadoActual !== 'ENTREGADA' && p.estadoActual !== 'PROPIEDAD_TALLER').length,
          prendasUrgentes: filteredPrendas.filter((p: Prenda) => PRENDA_URGENTE.includes(p.estadoActual)).length,
          facturasHoyCount: countHoy,
          facturasHoyValor: valorHoy,
          facturasHoyEfectivo: efectivoHoy,
          facturasHoyTarjeta: tarjetaHoy,
        });

        setFacturasList(filteredFacturas);
        setPrendasList(filteredPrendas);

        const capacitySedeId = filterSedeId || user?.sedeId;
        if (capacitySedeId) {
          try {
            const cap = await sedesService.getCapacidad(capacitySedeId);
            setCapacidad(cap);
          } catch {
            setCapacidad(null);
          }
        } else {
          setCapacidad(null);
        }
        if (user?.sedeId && user.rol !== 'ADMIN') {
          try {
            const res = await sedesService.getById(user.sedeId);
            setAssignedSede(res);
          } catch {
            setAssignedSede(null);
          }
        }
        if (user?.rol === 'ADMIN') {
          try {
            const logs = await usuariosService.getAuditLogs();
            setAuditLogs(logs);
            setHasUnreadLogs(logs.some(l => !l.leido));
          } catch (e) {
            console.error('Error fetching audit logs:', e);
          }
        }
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [user, selectedSedeId]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (nroFacturaDropdownRef.current && !nroFacturaDropdownRef.current.contains(event.target as Node)) {
        setIsNroFacturaDropdownOpen(false);
      }
      if (prendaDropdownRef.current && !prendaDropdownRef.current.contains(event.target as Node)) {
        setIsPrendaDropdownOpen(false);
      }
      if (messagePopoverRef.current && !messagePopoverRef.current.contains(event.target as Node)) {
        setIsMessagePopoverOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const displayedFacturas = useMemo(() => {
    let result = facturasList;
    if (searchPrenda) {
      const term = searchPrenda.toLowerCase();
      result = result.filter(f => f.prendas?.some((p: any) => p.codigoQR?.toLowerCase().includes(term)));
    }
    
    // Si hay búsqueda activa, mostramos todos los que coincidan (limitado a 50 para rendimiento).
    // Si no hay búsqueda, solo mostramos las últimas 5.
    if (searchPrenda) {
      return result.slice(0, 50);
    }
    return result.slice(0, 5);
  }, [facturasList, searchPrenda]);

  const [assignedSede, setAssignedSede] = useState<Sede | null>(null);

  const handleMarkLogRead = async (id: number) => {
    try {
      await usuariosService.markAuditLogAsRead(id);
      setAuditLogs(prev =>
        prev.map(log => (log.id === id ? { ...log, leido: true } : log))
      );
      // Recalculate if there are still unread logs
      setHasUnreadLogs(() => {
        const remainingUnread = auditLogs.some(l => l.id !== id && !l.leido);
        return remainingUnread;
      });
    } catch (err) {
      console.error('Error marking log as read:', err);
    }
  };

  const handleMarkAllLogsRead = async () => {
    try {
      await usuariosService.markAllAuditLogsAsRead();
      setAuditLogs(prev =>
        prev.map(log => ({ ...log, leido: true }))
      );
      setHasUnreadLogs(false);
    } catch (err) {
      console.error('Error marking all logs as read:', err);
    }
  };

  const handleSendQuickMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickSedeId || !quickMensaje.trim()) return;
    
    setQuickSending(true);
    try {
      await api.post('/anuncios', { sedeId: Number(quickSedeId), mensaje: quickMensaje });
      setQuickSedeId('');
      setQuickMensaje('');
      setIsMessagePopoverOpen(false);
      alert('Anuncio enviado exitosamente');
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al enviar anuncio');
    } finally {
      setQuickSending(false);
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
        <div className="spinner spinner-lg" />
      </div>
    );
  }

  const selectedSedeName = user?.rol === 'ADMIN'
    ? (selectedSedeId ? (sedes.find(s => s.id === parseInt(selectedSedeId, 10))?.nombre || '') : 'Todas')
    : (assignedSede?.nombre || '');

  return (
    <div>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <h1 className="page-title">
              Dashboard - {selectedSedeName}
            </h1>
            {user?.rol === 'ADMIN' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <select
                  className="form-select"
                  style={{ width: 'auto', minWidth: '160px', padding: 'var(--space-1) var(--space-3)', height: '38px', marginLeft: 'var(--space-2)' }}
                  value={selectedSedeId}
                  onChange={(e) => setSelectedSedeId(e.target.value)}
                >
                  <option value="">Todas las Sedes</option>
                  {sedes.map(s => (
                    <option key={s.id} value={s.id.toString()}>{s.nombre}</option>
                  ))}
                </select>
                <div 
                  style={{ 
                    position: 'relative', 
                    padding: 'var(--space-2)', 
                    borderRadius: 'var(--radius-full)', 
                    background: hasUnreadLogs ? 'var(--color-warning-bg)' : 'var(--color-surface-alt)',
                    color: hasUnreadLogs ? 'var(--color-warning)' : 'var(--color-text-muted)',
                    animation: hasUnreadLogs ? 'pulse 1.5s infinite alternate' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 'var(--space-2)'
                  }}
                  title={hasUnreadLogs ? 'Hay notificaciones de cambios pendientes por leer' : 'No hay notificaciones nuevas'}
                >
                  <Bell size={20} />
                  {hasUnreadLogs && (
                    <span 
                      style={{ 
                        position: 'absolute', 
                        top: '4px', 
                        right: '4px', 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'var(--color-warning)' 
                      }} 
                    />
                  )}
                </div>
                
                <div style={{ position: 'relative' }} ref={messagePopoverRef}>
                  <button
                    className="btn btn-ghost btn-icon"
                    onClick={() => setIsMessagePopoverOpen(!isMessagePopoverOpen)}
                    title="Enviar Anuncio Rápido"
                    style={{ background: 'var(--color-surface-alt)' }}
                  >
                    <MessageSquare size={20} />
                  </button>
                  
                  {isMessagePopoverOpen && (
                    <div style={{
                      position: 'absolute', top: '100%', right: 0,
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)', zIndex: 30,
                      boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
                      marginTop: '8px', width: '300px', padding: '16px'
                    }}>
                      <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
                        Anuncio Rápido
                      </h4>
                      <form onSubmit={handleSendQuickMessage} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div className="form-group" style={{ margin: 0 }}>
                          <label className="form-label" style={{ fontSize: '12px' }}>Sede Destino</label>
                          <select
                            className="form-input"
                            value={quickSedeId}
                            onChange={(e) => setQuickSedeId(e.target.value)}
                            required
                            style={{ padding: '6px' }}
                          >
                            <option value="">Seleccionar Sede...</option>
                            {sedes.filter(s => s.activa).map(s => (
                              <option key={s.id} value={s.id}>{s.nombre}</option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group" style={{ margin: 0 }}>
                          <label className="form-label" style={{ fontSize: '12px' }}>Mensaje</label>
                          <textarea
                            className="form-input"
                            value={quickMensaje}
                            onChange={(e) => setQuickMensaje(e.target.value)}
                            required
                            rows={3}
                            placeholder="Escribe el anuncio..."
                            style={{ padding: '8px', resize: 'vertical' }}
                          />
                        </div>
                        <button 
                          type="submit" 
                          className="btn btn-primary" 
                          disabled={!quickSedeId || !quickMensaje.trim() || quickSending}
                          style={{ padding: '6px', fontSize: '13px' }}
                        >
                          <Send size={14} /> {quickSending ? 'Enviando...' : 'Enviar Anuncio'}
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <p className="page-subtitle">Bienvenido, {user?.nombre} · {new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
          <FileText size={16} /> Nueva Factura
        </button>
      </div>

      {isModalOpen && <NuevaFacturaModal onClose={() => setIsModalOpen(false)} />}

      {/* Stat cards */}
      <div className="grid-4" style={{ marginBottom: 'var(--space-8)' }}>
        <div className="stat-card" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <p className="stat-card-label" style={{ marginBottom: '4px' }}>Búsqueda de Facturas</p>
          
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
                        setPrendaToEdit(p);
                        setShowPrendaModal(true);
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
        </div>

        <div className="stat-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p className="stat-card-label">Facturas Hoy</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '4px' }}>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-light)' }}>
                  Facturas: <strong style={{ color: 'var(--color-text)', fontSize: '1.1rem' }}>{stats.facturasHoyCount}</strong>
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

        <div className="stat-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p className="stat-card-label">Prendas activas</p>
              <p className="stat-card-value">{stats.prendasActivas}</p>
            </div>
            <div style={{ color: 'var(--color-success)', background: 'var(--color-success-bg)', padding: 'var(--space-2)', borderRadius: 'var(--radius-md)' }}>
              <Shirt size={20} />
            </div>
          </div>
          <p className="stat-card-sub">En proceso en el taller</p>
        </div>

        <div className={`stat-card ${stats.prendasUrgentes > 0 ? 'stat-card--alert' : ''}`}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p className="stat-card-label">Prendas urgentes</p>
              <p className="stat-card-value" style={{ color: stats.prendasUrgentes > 0 ? 'var(--color-warning)' : undefined }}>
                {stats.prendasUrgentes}
              </p>
            </div>
            <div style={{ color: 'var(--color-warning)', background: 'var(--color-warning-bg)', padding: 'var(--space-2)', borderRadius: 'var(--radius-md)' }}>
              <AlertCircle size={20} />
            </div>
          </div>
          <p className="stat-card-sub">Esperando prueba o recogida</p>
        </div>
      </div>

      <div className="grid-2">
        {/* Recent facturas */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
            <h3 className="card-title" style={{ marginBottom: 0 }}>Últimas facturas</h3>
            <Link to="/facturas" className="btn btn-ghost btn-sm">Ver todas</Link>
          </div>
          {displayedFacturas.length === 0 ? (
            <div className="empty-state" style={{ padding: 'var(--space-8)' }}>
              <FileText size={32} className="empty-state-icon" />
              <p className="empty-state-desc">No hay facturas aún</p>
            </div>
          ) : (
            <div className="table-wrapper" style={{ border: 'none' }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Número</th>
                    <th>Cliente</th>
                    <th>Total</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedFacturas.map(f => (
                    <tr key={f.id}>
                      <td>
                        <Link to={`/facturas/${f.id}`} style={{ color: 'var(--color-primary)', fontWeight: 'var(--font-medium)' }}>
                          {f.numero}
                        </Link>
                      </td>
                      <td style={{ color: 'var(--color-text-light)' }}>{f.cliente?.nombre || '—'}</td>
                      <td style={{ fontWeight: 'var(--font-medium)' }}>€{Number(f.total).toFixed(2)}</td>
                      <td>
                        <span className={`badge ${f.estadoPago === 'PAGADO' ? 'badge-success' : f.estadoPago === 'ANULADO' ? 'badge-danger' : f.estadoPago === 'PARCIAL' ? 'badge-warning' : 'badge-neutral'}`}>
                          {ESTADO_LABELS[f.estadoPago as EstadoPago]}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Capacidad de sede */}
        <div className="card">
          <h3 className="card-title">Capacidad del taller hoy</h3>
          {capacidad ? (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}>
                <span style={{ color: 'var(--color-text-light)', fontSize: 'var(--text-sm)' }}>Usado</span>
                <span style={{ fontWeight: 'var(--font-semibold)' }}>{capacidad.usado} / {capacidad.capacidadDiariaMax ?? '∞'} pts</span>
              </div>
              {capacidad.capacidadDiariaMax && (
                <div style={{ height: '8px', background: 'var(--color-border)', borderRadius: 'var(--radius-full)', overflow: 'hidden', marginBottom: 'var(--space-4)' }}>
                  <div style={{
                    height: '100%',
                    width: `${Math.min(capacidad.porcentaje ?? 0, 100)}%`,
                    background: (capacidad.porcentaje ?? 0) > 80 ? 'var(--color-danger)' : (capacidad.porcentaje ?? 0) > 60 ? 'var(--color-warning)' : 'var(--color-success)',
                    borderRadius: 'var(--radius-full)',
                    transition: 'width 0.6s ease',
                  }} />
                </div>
              )}
              <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                <div>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Disponible</p>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', color: 'var(--color-success)' }}>
                    {capacidad.disponible ?? '∞'}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Ocupación</p>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', color: 'var(--color-text)' }}>
                    {capacidad.porcentaje ?? 0}%
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="empty-state" style={{ padding: 'var(--space-8)' }}>
              <CheckCircle size={32} className="empty-state-icon" />
              <p className="empty-state-desc">Sin datos de capacidad para tu sede</p>
            </div>
          )}
        </div>
      </div>

      {/* Audit Logs Table for Administradora */}
      {user?.rol === 'ADMIN' && (
        <div className="card" style={{ marginTop: 'var(--space-8)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
            <div>
              <h3 className="card-title" style={{ marginBottom: '2px' }}>Historial de Cambios y Notificaciones</h3>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-light)' }}>
                Auditoría en tiempo real de facturas, prendas y servicios modificados.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
              {hasUnreadLogs && (
                <>
                  <button
                    onClick={handleMarkAllLogsRead}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-primary, #4f46e5)',
                      textDecoration: 'underline',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 'var(--font-medium)',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    Marcar todo como leído
                  </button>
                  <span className="badge badge-warning" style={{ gap: 'var(--space-1)', padding: '4px 10px' }}>
                    <AlertTriangle size={12} />
                    Tienes cambios sin leer
                  </span>
                </>
              )}
            </div>
          </div>

          {auditLogs.length === 0 ? (
            <div className="empty-state" style={{ padding: 'var(--space-8)' }}>
              <AlertCircle size={32} className="empty-state-icon" />
              <p className="empty-state-desc">No se han registrado modificaciones aún</p>
            </div>
          ) : (
            <div className="table-wrapper" style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ width: '40px', textAlign: 'center' }}>Leído</th>
                    <th>Fecha y Hora</th>
                    <th>Usuario</th>
                    <th>Acción</th>
                    <th>Módulo / Registro</th>
                    <th>Detalle</th>
                  </tr>
                </thead>
                <tbody>
                  {auditLogs.map((log) => {
                    const dateStr = new Date(log.timestamp).toLocaleString('es-ES', {
                      day: '2-digit',
                      month: '2-digit',
                      year: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                    });

                    let details = '';
                    try {
                      if (log.accion === 'CREACION') {
                        details = 'Creado por primera vez';
                      } else if (log.accion === 'MODIFICACION' || log.accion === 'CAMBIO_ESTADO') {
                        const prev = log.valorAnterior?.estadoActual || log.valorAnterior?.total || '';
                        const next = log.valorNuevo?.estadoActual || log.valorNuevo?.total || '';
                        details = prev && next ? `${prev} ➔ ${next}` : 'Actualización de campos';
                      } else if (log.accion === 'ABONO') {
                        const monto = log.valorNuevo?.monto || log.valorNuevo?.total || '';
                        details = monto ? `Abono registrado: €${Number(monto).toFixed(2)}` : 'Registro de abono';
                      } else if (log.accion === 'ANULACION') {
                        details = 'Anulación de factura';
                      }
                    } catch {
                      details = 'Detalles de auditoría';
                    }

                    return (
                      <tr 
                        key={log.id} 
                        style={{ 
                          backgroundColor: !log.leido ? 'var(--color-warning-bg)' : undefined,
                          transition: 'background-color 0.3s'
                        }}
                      >
                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                          <input
                            type="checkbox"
                            className="checkbox"
                            checked={log.leido}
                            disabled={log.leido}
                            onChange={() => handleMarkLogRead(log.id)}
                            style={{ 
                              cursor: log.leido ? 'not-allowed' : 'pointer', 
                              width: '16px', 
                              height: '16px' 
                            }}
                          />
                        </td>
                        <td style={{ whiteSpace: 'nowrap', fontSize: 'var(--text-xs)' }}>{dateStr}</td>
                        <td style={{ fontWeight: 'var(--font-medium)' }}>
                          {log.usuario?.nombre || 'Sistema'} 
                          <span 
                            style={{ 
                              fontSize: '10px', 
                              color: 'var(--color-text-muted)', 
                              marginLeft: 'var(--space-1)',
                              textTransform: 'lowercase'
                            }}
                          >
                            ({log.usuario?.rol || 'system'})
                          </span>
                        </td>
                        <td>
                          <span 
                            className={`badge ${
                              log.accion === 'CREACION' 
                                ? 'badge-success' 
                                : log.accion === 'ANULACION' 
                                ? 'badge-danger' 
                                : log.accion === 'ABONO' 
                                ? 'badge-info' 
                                : 'badge-primary'
                            }`}
                          >
                            {log.accion}
                          </span>
                        </td>
                        <td style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-semibold)' }}>
                          {log.entidadAfectada} #{log.entidadId}
                        </td>
                        <td style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-light)' }}>
                          {details}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Global CSS for Notification Pulse in header */}
      <style>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.4);
            transform: scale(1);
          }
          100% {
            box-shadow: 0 0 0 10px rgba(245, 158, 11, 0);
            transform: scale(1.05);
          }
        }
      `}</style>
      {showPrendaModal && (
        <PrendaModal
          facturaId={prendaToEdit?.facturaId || 0}
          onClose={() => setShowPrendaModal(false)}
          onSaved={() => {
            // Recargar datos o simplemente cerrar si se actualizó
            // Para mantener simple, cerramos el modal y recargamos
            setShowPrendaModal(false);
            window.location.reload();
          }}
          tiposPrenda={tiposPrenda}
          catalogoServicios={catalogoServicios}
          prendaToEdit={prendaToEdit}
        />
      )}
    </div>
  );
}
