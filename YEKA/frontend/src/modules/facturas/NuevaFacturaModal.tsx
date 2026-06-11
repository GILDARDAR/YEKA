import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { facturasService } from './facturas.service';
import { clientesService } from '../clientes/clientes.service';
import { useAuth } from '../../shared/auth.context';
import type { Cliente } from '../../shared/types';
import { Plus } from 'lucide-react';

interface NuevaFacturaModalProps {
  onClose: () => void;
}

export function NuevaFacturaModal({ onClose }: NuevaFacturaModalProps) {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [clienteId, setClienteId] = useState<number | ''>('');
  const [notas, setNotas] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    clientesService.getAll().then(setClientes).catch(console.error);
  }, []);

  const handleCreateFactura = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSaving(true);
    try {
      const dto = {
        sedeId: user?.sedeId ? Number(user.sedeId) : 1,
        clienteId: clienteId ? Number(clienteId) : undefined,
        notas: notas.trim() || undefined,
      };
      const nueva = await facturasService.create(dto);
      onClose();
      navigate(`/facturas/${nueva.id}`);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al crear la factura');
      setSaving(false);
    }
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000, 
      display: 'flex', alignItems: 'center', justifyContent: 'center', 
      backgroundColor: 'rgba(0,0,0,0.7)', padding: 'var(--space-4)'
    }}>
      <div className="card" style={{ width: '100%', maxWidth: '500px', padding: 'var(--space-6)' }}>
        <h2 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)' }}>
          Nueva Factura
        </h2>
        
        <form onSubmit={handleCreateFactura} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {error && <div className="login-error" style={{ marginBottom: 'var(--space-2)' }}>{error}</div>}

          <div className="form-group">
            <label className="form-label">Cliente (opcional)</label>
            <select
              className="form-select"
              value={clienteId}
              onChange={e => setClienteId(e.target.value ? Number(e.target.value) : '')}
            >
              <option value="">Consumidor Final (Sin registrar)</option>
              {clientes.map(c => (
                <option key={c.id} value={c.id}>{c.nombre} {c.dni ? `(${c.dni})` : ''}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Notas adicionales</label>
            <textarea
              className="form-textarea"
              rows={3}
              value={notas}
              onChange={e => setNotas(e.target.value)}
              placeholder="Notas generales de la recepción..."
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--space-4)', gap: 'var(--space-3)' }}>
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? <span className="spinner spinner-sm" /> : <Plus size={14} />}
              {saving ? 'Creando...' : 'Crear y continuar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
