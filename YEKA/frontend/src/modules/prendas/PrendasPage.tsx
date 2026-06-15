import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { prendasService } from './prendas.service';
import type { Prenda, EstadoPrenda } from '../../shared/types';
import { Shirt, Filter, QrCode } from 'lucide-react';

const ESTADO_BADGE: Record<EstadoPrenda, string> = {
  RECIBIDA:             'badge-info',
  PENDIENTE_VALORACION: 'badge-neutral',
  EN_PRODUCCION:        'badge-primary',
  ESPERANDO_PRUEBA:     'badge-warning',
  PENDIENTE_RECOGIDA:   'badge-warning',
  ENTREGADA:            'badge-success',
  PROPIEDAD_TALLER:     'badge-danger',
};

const ESTADO_LABEL: Record<EstadoPrenda, string> = {
  RECIBIDA:             'Recibida',
  PENDIENTE_VALORACION: 'Pend. valoración',
  EN_PRODUCCION:        'En producción',
  ESPERANDO_PRUEBA:     'Esperando prueba',
  PENDIENTE_RECOGIDA:   'Pend. recogida',
  ENTREGADA:            'Entregada',
  PROPIEDAD_TALLER:     'Del taller',
};

const ESTADOS: EstadoPrenda[] = [
  'RECIBIDA','PENDIENTE_VALORACION','EN_PRODUCCION','ESPERANDO_PRUEBA','PENDIENTE_RECOGIDA','ENTREGADA','PROPIEDAD_TALLER'
];

export function PrendasPage() {
  const [prendas, setPrendas]   = useState<Prenda[]>([]);
  const [loading, setLoading]   = useState(true);
  const [estado, setEstado]     = useState<EstadoPrenda | ''>('');

  useEffect(() => {
    setLoading(true);
    prendasService.getAll(estado ? { estadoActual: estado as EstadoPrenda } : undefined)
      .then(setPrendas)
      .finally(() => setLoading(false));
  }, [estado]);

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Taller — Prendas</h1>
          <p className="page-subtitle">{prendas.length} prenda{prendas.length !== 1 ? 's' : ''} en seguimiento</p>
        </div>
      </div>

      {/* Filter */}
      <div className="card" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <Filter size={16} style={{ color: 'var(--color-text-muted)' }} />
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            <button
              className={`badge ${!estado ? 'badge-primary' : 'badge-neutral'}`}
              style={{ cursor: 'pointer', padding: '4px 12px', border: 'none' }}
              onClick={() => setEstado('')}
            >
              Todas
            </button>
            {ESTADOS.map(e => (
              <button
                key={e}
                className={`badge ${estado === e ? 'badge-primary' : 'badge-neutral'}`}
                style={{ cursor: 'pointer', padding: '4px 12px', border: 'none' }}
                onClick={() => setEstado(e === estado ? '' : e)}
              >
                {ESTADO_LABEL[e]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
          <div className="spinner spinner-lg" />
        </div>
      ) : prendas.length === 0 ? (
        <div className="empty-state">
          <Shirt size={40} className="empty-state-icon" />
          <p className="empty-state-title">Sin prendas</p>
          <p className="empty-state-desc">No hay prendas con el estado seleccionado</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Código QR</th>
                <th>Tipo</th>
                <th>Factura</th>
                <th>Compromiso</th>
                <th>Lujo</th>
                <th>Estado</th>
                <th>Servicios</th>
              </tr>
            </thead>
            <tbody>
              {prendas.map(p => (
                <tr key={p.id}>
                  <td>
                    <Link to={`/facturas/${p.facturaId}`} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'monospace', fontSize: 'var(--text-xs)', color: 'var(--color-primary)' }}>
                      <QrCode size={14} /> {p.codigoQR}
                    </Link>
                  </td>
                  <td style={{ fontWeight: 'var(--font-medium)' }}>{p.tipoPrendaId}</td>
                  <td>
                    <Link to={`/facturas/${p.facturaId}`} style={{ color: 'var(--color-text-light)', fontSize: 'var(--text-sm)' }}>
                      #{p.facturaId}
                    </Link>
                  </td>
                  <td style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-light)' }}>
                    {p.fechaCompromiso ? new Date(p.fechaCompromiso).toLocaleDateString('es-ES') : '—'}
                  </td>
                  <td>
                    {p.esLujo ? <span className="badge badge-warning">Lujo</span> : <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-xs)' }}>—</span>}
                  </td>
                  <td>
                    <span className={`badge ${ESTADO_BADGE[p.estadoActual]}`}>
                      {ESTADO_LABEL[p.estadoActual]}
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-neutral">{p.servicios?.length ?? 0}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
