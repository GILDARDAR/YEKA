import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../shared/auth.context';
import { facturasService } from '../facturas/facturas.service';
import { clientesService } from '../clientes/clientes.service';
import { prendasService } from '../prendas/prendas.service';
import { sedesService } from '../sedes/sedes.service';
import type { CapacidadResponse, EstadoPago, EstadoPrenda } from '../../shared/types';
import { Users, FileText, Shirt, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

import { NuevaFacturaModal } from '../facturas/NuevaFacturaModal';

const ESTADO_LABELS: Record<EstadoPago, string> = {
  PENDIENTE: 'Pendiente',
  PARCIAL: 'Parcial',
  PAGADO: 'Pagado',
  ANULADO: 'Anulado',
};

const ESTADO_PRENDA_LABELS: Record<EstadoPrenda, string> = {
  RECIBIDA: 'Recibida',
  PENDIENTE_VALORACION: 'Pend. valoración',
  EN_PRODUCCION: 'En producción',
  ESPERANDO_PRUEBA: 'Esperando prueba',
  PENDIENTE_RECOGIDA: 'Pend. recogida',
  ENTREGADA: 'Entregada',
  PROPIEDAD_TALLER: 'Prop. taller',
};

const PRENDA_URGENTE: EstadoPrenda[] = ['PENDIENTE_RECOGIDA', 'ESPERANDO_PRUEBA'];

export function DashboardPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stats, setStats] = useState({
    totalClientes: 0,
    facturasPendientes: 0,
    prendasActivas: 0,
    prendasUrgentes: 0,
    facturasHoy: 0,
  });
  const [capacidad, setCapacidad] = useState<CapacidadResponse | null>(null);
  const [recentFacturas, setRecentFacturas] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const [clientes, facturas, prendas] = await Promise.all([
          clientesService.getAll(),
          facturasService.getAll(),
          prendasService.getAll(),
        ]);

        const today = new Date().toISOString().split('T')[0];

        setStats({
          totalClientes: clientes.length,
          facturasPendientes: facturas.filter(f => f.estadoPago === 'PENDIENTE' || f.estadoPago === 'PARCIAL').length,
          prendasActivas: prendas.filter(p => p.estadoActual !== 'ENTREGADA' && p.estadoActual !== 'PROPIEDAD_TALLER').length,
          prendasUrgentes: prendas.filter(p => PRENDA_URGENTE.includes(p.estadoActual)).length,
          facturasHoy: facturas.filter(f => f.createdAt.startsWith(today)).length,
        });

        setRecentFacturas(facturas.slice(0, 5));

        if (user?.sedeId) {
          try {
            const cap = await sedesService.getCapacidad(user.sedeId);
            setCapacidad(cap);
          } catch { /* silently ignore */ }
        }
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [user]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
        <div className="spinner spinner-lg" />
      </div>
    );
  }

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Bienvenido, {user?.nombre} · {new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
          <FileText size={16} /> Nueva Factura
        </button>
      </div>

      {isModalOpen && <NuevaFacturaModal onClose={() => setIsModalOpen(false)} />}

      {/* Stat cards */}
      <div className="grid-4" style={{ marginBottom: 'var(--space-8)' }}>
        <div className="stat-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p className="stat-card-label">Clientes</p>
              <p className="stat-card-value">{stats.totalClientes}</p>
            </div>
            <div style={{ color: 'var(--color-primary)', background: 'var(--color-primary-soft)', padding: 'var(--space-2)', borderRadius: 'var(--radius-md)' }}>
              <Users size={20} />
            </div>
          </div>
          <p className="stat-card-sub">Total activos en el sistema</p>
        </div>

        <div className="stat-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p className="stat-card-label">Facturas hoy</p>
              <p className="stat-card-value">{stats.facturasHoy}</p>
            </div>
            <div style={{ color: 'var(--color-info)', background: 'var(--color-info-bg)', padding: 'var(--space-2)', borderRadius: 'var(--radius-md)' }}>
              <TrendingUp size={20} />
            </div>
          </div>
          <p className="stat-card-sub">{stats.facturasPendientes} pendientes de cobro</p>
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
          {recentFacturas.length === 0 ? (
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
                  {recentFacturas.map(f => (
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
    </div>
  );
}
