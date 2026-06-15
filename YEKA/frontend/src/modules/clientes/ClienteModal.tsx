import { useEffect, useState, FormEvent } from 'react';
import { clientesService } from './clientes.service';
import { sedesService } from '../sedes/sedes.service';
import type { Cliente, CreateClienteDto, Sede } from '../../shared/types';
import { useAuth } from '../../shared/auth.context';
import { Save, X } from 'lucide-react';

type FormData = {
  sedeOrigenId: number;
  nombre: string;
  dni: string;
  celular: string;
  email: string;
};

const EMPTY: FormData = { sedeOrigenId: 0, nombre: '', dni: '', celular: '', email: '' };

interface ClienteModalProps {
  onClose: () => void;
  onSaved: (cliente: Cliente) => void;
}

export function ClienteModal({ onClose, onSaved }: ClienteModalProps) {
  const { user } = useAuth();
  const [form, setForm] = useState<FormData>({ ...EMPTY, sedeOrigenId: user?.sedeId || 0 });
  const [sedes, setSedes] = useState<Sede[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    sedesService.getAll().then(setSedes).catch(() => {});
  }, []);

  // Cerrar con ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [field]: field === 'sedeOrigenId' ? Number(e.target.value) : e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.nombre.trim()) { setError('El nombre es obligatorio'); return; }
    setSaving(true); setError('');
    try {
      const dto: CreateClienteDto = {
        sedeOrigenId: form.sedeOrigenId || user?.sedeId || 1, // Default to 1 if no sede
        nombre: form.nombre.trim(),
        dni: form.dni.trim() || undefined,
        celular: form.celular.trim() || undefined,
        email: form.email.trim() || undefined,
      };
      
      const c = await clientesService.create(dto);
      onSaved(c);
      onClose();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al guardar');
    } finally { setSaving(false); }
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1100, 
      display: 'flex', alignItems: 'center', justifyContent: 'center', 
      backgroundColor: 'rgba(0,0,0,0.7)', padding: 'var(--space-4)'
    }}>
      <div className="card" style={{ width: '100%', maxWidth: '500px', padding: 'var(--space-6)', position: 'relative' }}>
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}
        >
          <X size={20} />
        </button>
        
        <h2 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)' }}>
          Nuevo cliente
        </h2>

        <form onSubmit={handleSubmit}>
          {error && <div className="login-error" style={{ marginBottom: 'var(--space-4)' }}>{error}</div>}

          <div className="form-group">
            <label className="form-label required">Nombre completo</label>
            <input type="text" className="form-input" value={form.nombre} onChange={set('nombre')} placeholder="Ej. María García López" required autoFocus />
          </div>

          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">DNI / NIF</label>
              <input type="text" className="form-input" value={form.dni} onChange={set('dni')} placeholder="12345678A" maxLength={20} />
            </div>
            <div className="form-group">
              <label className="form-label">Sede de origen</label>
              <select className="form-select" value={form.sedeOrigenId} onChange={set('sedeOrigenId')}>
                <option value={0} disabled>Seleccionar sede</option>
                {sedes.map(s => <option key={s.id} value={s.id}>{s.nombre}</option>)}
              </select>
            </div>
          </div>

          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">Teléfono / Celular</label>
              <input type="tel" className="form-input" value={form.celular} onChange={set('celular')} placeholder="+34 600 000 000" maxLength={20} />
            </div>
            <div className="form-group">
              <label className="form-label">Correo electrónico</label>
              <input type="email" className="form-input" value={form.email} onChange={set('email')} placeholder="cliente@email.com" />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--space-4)', gap: 'var(--space-3)' }}>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? <span className="spinner spinner-sm" /> : <Save size={14} />}
              {saving ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
