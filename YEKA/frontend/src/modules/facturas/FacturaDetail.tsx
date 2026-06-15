import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../shared/api';
import { facturasService } from './facturas.service';
import { prendasService } from '../prendas/prendas.service';
import tipoPrendaService from '../../services/tipo-prenda.service';
import { catalogoService } from '../catalogo/catalogo.service';
import type { Factura, Prenda, TipoPrenda, CatalogoServicio } from '../../shared/types';
import { ChevronLeft, FileText, Plus, Trash2, CreditCard, Edit2 } from 'lucide-react';
import { PrendaModal } from '../prendas/PrendaModal';

export function FacturaDetail() {
  const { id } = useParams<{ id: string }>();
  const [factura, setFactura] = useState<Factura | null>(null);
  const [loading, setLoading] = useState(true);

  // Catalog Data
  const [tiposPrenda, setTiposPrenda] = useState<TipoPrenda[]>([]);
  const [catalogoServicios, setCatalogoServicios] = useState<CatalogoServicio[]>([]);
  const [config, setConfig] = useState<any>({});

  // Modal State
  const [isPrendaModalOpen, setIsPrendaModalOpen] = useState(false);
  const [prendaToEdit, setPrendaToEdit] = useState<Prenda | null>(null);

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
    api.get('/configuracion').then(res => setConfig(res.data)).catch(console.error);
  }, [id]);

  const handleOpenAddPrenda = () => {
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
      await fetchFactura();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al eliminar');
    }
  };

  const handleCambiarExpress = async (prendaId: number, tipoExpress: string) => {
    try {
      await prendasService.cambiarTipoExpress(prendaId, tipoExpress);
      await fetchFactura();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al cambiar tipo express');
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
      <div style={{ marginTop: 'var(--space-4)', flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--bg-card)', padding: 'var(--space-4)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
        <h3 style={{ fontSize: 'var(--text-lg)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-3)' }}>
          Prendas de la Factura
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
              {(!factura.prendas || factura.prendas.length === 0) ? (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-text-muted)' }}>
                    No hay prendas agregadas a esta factura.
                  </td>
                </tr>
              ) : (
                factura.prendas.map(p => {
                  const tipo = tiposPrenda.find(t => t.id === p.tipoPrendaId)?.nombre || 'Desconocido';
                  const val = p.servicios?.reduce((acc, s) => acc + Number(s.precioFinal), 0) || 0;
                  const srvResumen = p.servicios?.map(s => {
                    const c = catalogoServicios.find(cs => cs.id === s.servicioId);
                    return c ? c.tipoEspecifico : 'Servicio';
                  }).join(', ') || 'Sin servicios';

                  return (
                    <tr key={p.id}>
                      <td style={{ fontWeight: 'var(--font-medium)', textTransform: 'uppercase' }}>
                        {tipo}
                        <div style={{ fontSize: '10px', color: 'var(--color-text-muted)', fontWeight: 'normal' }}>{p.codigoQR}</div>
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
                          value={p.tipoExpress || 'NORMAL'}
                          onChange={e => handleCambiarExpress(p.id, e.target.value)}
                        >
                          <option value="NORMAL">Normal</option>
                          <option value="EXPRESS_48H">24h</option>
                          <option value="EXPRESS_24H">48h</option>
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

        <button 
          type="button" 
          className="btn btn-outline" 
          style={{ width: 'max-content', borderStyle: 'dashed' }}
          onClick={handleOpenAddPrenda}
        >
          <Plus size={16} /> 
          Agregar Prenda
        </button>
      </div>

      {isPrendaModalOpen && (
        <PrendaModal
          facturaId={factura.id}
          prendaToEdit={prendaToEdit}
          tiposPrenda={tiposPrenda}
          catalogoServicios={catalogoServicios}
          config={config}
          onClose={() => setIsPrendaModalOpen(false)}
          onSaved={fetchFactura}
        />
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
