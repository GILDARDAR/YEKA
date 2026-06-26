import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { facturasService } from './facturas.service';
import type { Factura, EstadoPago } from '../../shared/types';
import { Search, Plus, Filter, FileText, Calendar } from 'lucide-react';
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)' }}>
          {filtered.map(f => (
            <div key={f.id} className="card" style={{ display: 'flex', flexDirection: 'column', padding: 'var(--space-4)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-2)' }}>
                <Link to={`/facturas/${f.id}`} style={{ fontWeight: 'var(--font-heading)', fontSize: 'var(--text-lg)', color: 'var(--color-primary)', textDecoration: 'none' }}>
                  #{f.numero}
                </Link>
                <span className={`badge ${ESTADO_BADGE[f.estadoPago]}`}>
                  {ESTADO_LABEL[f.estadoPago]}
                </span>
              </div>
              
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 'var(--font-medium)', color: 'var(--color-text)', marginBottom: '4px' }}>
                  {f.cliente?.nombre || <span style={{ color: 'var(--color-text-muted)' }}>Consumidor Final</span>}
                </p>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-light)', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: 'var(--space-3)' }}>
                  <Calendar size={12} /> {new Date(f.createdAt).toLocaleDateString('es-ES')}
                </p>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 'var(--text-sm)' }}>
                  <span style={{ color: 'var(--color-text-muted)' }}>Prendas:</span>
                  <span className="badge badge-neutral">{f.prendas?.length ?? 0}</span>
                </div>
              </div>
              
              <div style={{ marginTop: 'var(--space-4)', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'flex-end' }}>
                <span style={{ fontWeight: 'bold', fontSize: 'var(--text-lg)', color: 'var(--color-text)' }}>
                  €{Number(f.total).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Nueva Factura Modal */}
      {isModalOpen && <NuevaFacturaModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
