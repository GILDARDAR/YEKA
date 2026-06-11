import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { facturasService } from './facturas.service';
import type { Factura, EstadoPago } from '../../shared/types';
import { Search, Plus, Filter, FileText } from 'lucide-react';
import { NuevaFacturaModal } from './NuevaFacturaModal';

const ESTADO_BADGE: Record<EstadoPago, string> = {
  PENDIENTE: 'badge-neutral',
  PARCIAL:   'badge-warning',
  PAGADO:    'badge-success',
  ANULADO:   'badge-danger',
};

const ESTADO_LABEL: Record<EstadoPago, string> = {
  PENDIENTE: 'Pendiente',
  PARCIAL:   'Parcial',
  PAGADO:    'Pagado',
  ANULADO:   'Anulado',
};

export function FacturasPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [facturas, setFacturas]   = useState<Factura[]>([]);
  const [loading, setLoading]     = useState(true);
  const [filter, setFilter]       = useState<EstadoPago | ''>('');
  const [query, setQuery]         = useState('');

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    facturasService.getAll(undefined, filter as EstadoPago || undefined)
      .then(setFacturas)
      .finally(() => setLoading(false));
  }, [filter]);

  const filtered = facturas.filter(f => {
    if (!query) return true;
    const q = query.toLowerCase();
    return f.numero.toLowerCase().includes(q) || f.cliente?.nombre?.toLowerCase().includes(q);
  });

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Facturas</h1>
          <p className="page-subtitle">{filtered.length} factura{filtered.length !== 1 ? 's' : ''}</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
          <Plus size={16} /> Nueva factura
        </button>
      </div>

      {/* Filters */}
      <div className="card" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-4)' }}>
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <div className="search-bar" style={{ flex: 1, minWidth: '200px' }}>
            <Search size={16} className="search-icon" />
            <input type="text" className="form-input" placeholder="Buscar por número o cliente..." value={query} onChange={e => setQuery(e.target.value)} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <Filter size={16} style={{ color: 'var(--color-text-muted)' }} />
            <select className="form-select" value={filter} onChange={e => setFilter(e.target.value as EstadoPago | '')}>
              <option value="">Todos los estados</option>
              <option value="PENDIENTE">Pendiente</option>
              <option value="PARCIAL">Parcial</option>
              <option value="PAGADO">Pagado</option>
              <option value="ANULADO">Anulado</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
          <div className="spinner spinner-lg" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="empty-state">
          <FileText size={40} className="empty-state-icon" />
          <p className="empty-state-title">Sin facturas</p>
          <p className="empty-state-desc">No hay facturas que coincidan con los filtros</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Número</th>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Prendas</th>
                <th>Total</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(f => (
                <tr key={f.id}>
                  <td>
                    <Link to={`/facturas/${f.id}`} style={{ fontWeight: 'var(--font-medium)', color: 'var(--color-primary)' }}>
                      {f.numero}
                    </Link>
                  </td>
                  <td>{f.cliente?.nombre || <span style={{ color: 'var(--color-text-muted)' }}>Sin cliente</span>}</td>
                  <td style={{ color: 'var(--color-text-light)', fontSize: 'var(--text-sm)' }}>
                    {new Date(f.createdAt).toLocaleDateString('es-ES')}
                  </td>
                  <td>
                    <span className="badge badge-neutral">{f.prendas?.length ?? '—'}</span>
                  </td>
                  <td style={{ fontWeight: 'var(--font-semibold)' }}>€{Number(f.total).toFixed(2)}</td>
                  <td>
                    <span className={`badge ${ESTADO_BADGE[f.estadoPago]}`}>
                      {ESTADO_LABEL[f.estadoPago]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Nueva Factura Modal */}
      {isModalOpen && <NuevaFacturaModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
