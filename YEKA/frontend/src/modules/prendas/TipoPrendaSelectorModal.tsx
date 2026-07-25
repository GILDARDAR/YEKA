import { X, Shirt } from 'lucide-react';
import type { TipoPrenda } from '../../shared/types';

interface TipoPrendaSelectorModalProps {
  tiposPrenda: TipoPrenda[];
  onSelect: (tipoPrendaId: number) => void;
  onClose: () => void;
}

export function TipoPrendaSelectorModal({ tiposPrenda, onSelect, onClose }: TipoPrendaSelectorModalProps) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content" style={{ maxWidth: '800px', width: '90%' }}>
        <div className="modal-header">
          <h2 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-heading)', margin: 0 }}>Seleccionar Tipo de Prenda</h2>
          <button className="btn-icon" onClick={onClose} title="Cerrar">
            <X size={20} />
          </button>
        </div>
        
        <div className="modal-body" style={{ padding: 'var(--space-6)' }}>
          <p style={{ marginBottom: 'var(--space-4)', color: 'var(--color-text-muted)' }}>
            Selecciona el tipo de prenda que deseas agregar a la factura.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
            gap: 'var(--space-4)' 
          }}>
            {tiposPrenda.map(tipo => (
              <button
                key={tipo.id}
                onClick={() => onSelect(tipo.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 'var(--space-4)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-surface)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  textAlign: 'center'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-primary)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '50%', 
                  background: 'var(--color-bg)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: 'var(--space-2)'
                }}>
                  <Shirt size={24} style={{ color: 'var(--color-primary)' }} />
                </div>
                <span style={{ fontWeight: '500', fontSize: 'var(--text-sm)' }}>
                  {tipo.nombre}
                </span>
                {tipo.descripcion && (
                  <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    {tipo.descripcion}
                  </span>
                )}
              </button>
            ))}
            
            {tiposPrenda.length === 0 && (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 'var(--space-6)', color: 'var(--color-text-muted)' }}>
                No hay tipos de prenda disponibles. Por favor, crea uno primero.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
