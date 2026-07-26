import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Check, Edit2, X } from 'lucide-react';
import type { Factura, EstadoPago } from '../../shared/types';
import { facturasService } from './facturas.service';
import { useAuth } from '../../shared/auth.context';

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

interface Props {
  factura: Factura;
  onUpdate: (f: Factura) => void;
}

export function FacturaCard({ factura, onUpdate }: Props) {
  const { user } = useAuth();
  const isAdmin = user?.rol === 'ADMIN';

  const [isEditing, setIsEditing] = useState(false);
  const [nroFactura, setNroFactura] = useState(factura.nroFactura || '');
  const [fechaDeFactura, setFechaDeFactura] = useState(factura.fechaDeFactura ? new Date(factura.fechaDeFactura).toISOString().split('T')[0] : '');
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    try {
      setSaving(true);
      const updated = await facturasService.update(factura.id, {
        nroFactura: nroFactura || undefined,
        fechaDeFactura: fechaDeFactura ? new Date(fechaDeFactura).toISOString() : undefined,
      });
      onUpdate(updated);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating factura', error);
      alert('Error al guardar los cambios');
    } finally {
      setSaving(false);
    }
  };

  const displayNroFactura = factura.nroFactura || <span style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>Sin Nro. Oficial</span>;
  const displayFechaFactura = factura.fechaDeFactura ? new Date(factura.fechaDeFactura).toLocaleDateString('es-ES') : <span style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>Sin fecha oficial</span>;

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', padding: 'var(--space-4)', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-2)' }}>
        <Link to={`/facturas/${factura.id}`} style={{ fontWeight: 'var(--font-heading)', fontSize: 'var(--text-lg)', color: 'var(--color-primary)', textDecoration: 'none' }}>
          #{factura.numero}
        </Link>
        <span className={`badge ${ESTADO_BADGE[factura.estadoPago]}`}>
          {ESTADO_LABEL[factura.estadoPago]}
        </span>
      </div>
      
      <div style={{ flex: 1 }}>
        <p style={{ fontWeight: 'var(--font-medium)', color: 'var(--color-text)', marginBottom: '8px' }}>
          {factura.cliente?.nombre || <span style={{ color: 'var(--color-text-muted)' }}>Consumidor Final</span>}
        </p>

        {isEditing ? (
          <div style={{ background: 'var(--color-bg)', padding: '8px', borderRadius: '4px', marginBottom: '8px', fontSize: '13px' }}>
            <div style={{ marginBottom: '6px' }}>
              <label style={{ display: 'block', marginBottom: '2px', color: 'var(--color-text-muted)' }}>Nro Oficial:</label>
              <input 
                type="text" 
                className="form-input" 
                style={{ padding: '2px 4px', height: 'auto', fontSize: '13px' }}
                value={nroFactura} 
                onChange={e => setNroFactura(e.target.value)} 
                placeholder="Ej: F-2026-001"
              />
            </div>
            <div style={{ marginBottom: '8px' }}>
              <label style={{ display: 'block', marginBottom: '2px', color: 'var(--color-text-muted)' }}>Fecha Oficial:</label>
              <input 
                type="date" 
                className="form-input" 
                style={{ padding: '2px 4px', height: 'auto', fontSize: '13px' }}
                value={fechaDeFactura} 
                onChange={e => setFechaDeFactura(e.target.value)} 
              />
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button onClick={handleSave} disabled={saving} className="btn btn-primary" style={{ padding: '2px 6px', fontSize: '12px', minHeight: '24px' }}>
                <Check size={12} style={{ marginRight: '2px' }}/> Guardar
              </button>
              <button onClick={() => setIsEditing(false)} disabled={saving} className="btn btn-secondary" style={{ padding: '2px 6px', fontSize: '12px', minHeight: '24px' }}>
                <X size={12} style={{ marginRight: '2px' }}/> Cancelar
              </button>
            </div>
          </div>
        ) : (
          <div 
            className="factura-official-info" 
            style={{ 
              marginBottom: '8px', 
              fontSize: '13px', 
              color: 'var(--color-text-light)',
              padding: '6px',
              border: '1px solid transparent',
              borderRadius: '4px',
              position: 'relative',
              transition: 'border-color 0.2s',
              cursor: isAdmin ? 'pointer' : 'default'
            }}
            onMouseEnter={e => { if (isAdmin) e.currentTarget.style.borderColor = 'var(--color-border)' }}
            onMouseLeave={e => { if (isAdmin) e.currentTarget.style.borderColor = 'transparent' }}
            onClick={() => { if (isAdmin) setIsEditing(true) }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <p style={{ margin: 0, marginBottom: '2px' }}><span style={{ color: 'var(--color-text-muted)' }}>Nro:</span> {displayNroFactura}</p>
                <p style={{ margin: 0 }}><span style={{ color: 'var(--color-text-muted)' }}>Fecha:</span> {displayFechaFactura}</p>
              </div>
              {isAdmin && (
                <div style={{ display: 'flex', alignItems: 'center', opacity: 0.5 }}>
                  <Edit2 size={14} />
                </div>
              )}
            </div>
          </div>
        )}

        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-light)', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: 'var(--space-3)' }}>
          <Calendar size={12} /> Creada: {new Date(factura.createdAt).toLocaleDateString('es-ES')}
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 'var(--text-sm)' }}>
          <span style={{ color: 'var(--color-text-muted)' }}>Prendas:</span>
          <span className="badge badge-neutral">{factura.prendas?.length ?? 0}</span>
        </div>
      </div>
      
      <div style={{ marginTop: 'var(--space-4)', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'flex-end' }}>
        <span style={{ fontWeight: 'bold', fontSize: 'var(--text-lg)', color: 'var(--color-text)' }}>
          €{Number(factura.total).toFixed(2)}
        </span>
      </div>
    </div>
  );
}
