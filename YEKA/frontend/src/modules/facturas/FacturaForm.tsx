import { useState, useEffect, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { facturasService } from './facturas.service';
import { clientesService } from '../clientes/clientes.service';
import { useAuth } from '../../shared/auth.context';
import type { Cliente } from '../../shared/types';
import { ChevronLeft, Save } from 'lucide-react';

export function FacturaForm() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const [clienteId, setClienteId] = useState<number | ''>('');
  const [notas, setNotas] = useState('');

  useEffect(() => {
    clientesService.getAll().then(setClientes).finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSaving(true);
    try {
      const dto = {
        sedeId: user!.sedeId,
        clienteId: clienteId ? Number(clienteId) : undefined,
        notas: notas.trim() || undefined,
      };
      const nueva = await facturasService.create(dto);
      // Redirigir al detalle de la factura creada para que se le puedan agregar prendas
      navigate(`/facturas/${nueva.id}`);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al crear la factura');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}><div className="spinner spinner-lg" /></div>;
  }

  return (
    <div style={{ maxWidth: '640px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
        <Link to="/facturas" className="btn btn-ghost btn-sm btn-icon">
          <ChevronLeft size={18} />
        </Link>
        <h1 className="page-title">Nueva factura</h1>
      </div>

      <div className="card">
        <form onSubmit={handleSubmit}>
          {error && <div className="login-error" style={{ marginBottom: 'var(--space-4)' }}>{error}</div>}

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
            <Link to="/facturas" className="btn btn-secondary">Cancelar</Link>
            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? <span className="spinner spinner-sm" /> : <Save size={14} />}
              {saving ? 'Creando...' : 'Crear factura'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
