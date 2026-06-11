import { useEffect, useState, FormEvent } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { clientesService } from './clientes.service';
import { sedesService } from '../sedes/sedes.service';
import type { Cliente, CreateClienteDto, UpdateClienteDto, Sede } from '../../shared/types';
import { useAuth } from '../../shared/auth.context';
import { ChevronLeft, Save, Trash2 } from 'lucide-react';

type FormData = {
  sedeOrigenId: number;
  nombre: string;
  dni: string;
  celular: string;
  email: string;
};

const EMPTY: FormData = { sedeOrigenId: 0, nombre: '', dni: '', celular: '', email: '' };

export function ClienteForm() {
  const { id } = useParams<{ id?: string }>();
  const isEdit = !!id;
  const navigate = useNavigate();
  const { user } = useAuth();

  const [form, setForm]     = useState<FormData>({ ...EMPTY, sedeOrigenId: user?.sedeId || 0 });
  const [sedes, setSedes]   = useState<Sede[]>([]);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError]   = useState('');
  const [original, setOriginal] = useState<Cliente | null>(null);

  useEffect(() => {
    sedesService.getAll().then(setSedes).catch(() => {});
    if (isEdit && id) {
      clientesService.getById(Number(id)).then(c => {
        setOriginal(c);
        setForm({ sedeOrigenId: c.sedeOrigenId, nombre: c.nombre, dni: c.dni || '', celular: c.celular || '', email: c.email || '' });
        setLoading(false);
      }).catch(() => navigate('/clientes'));
    }
  }, [id, isEdit, navigate]);

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [field]: field === 'sedeOrigenId' ? Number(e.target.value) : e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.nombre.trim()) { setError('El nombre es obligatorio'); return; }
    setSaving(true); setError('');
    try {
      const dto: CreateClienteDto | UpdateClienteDto = {
        sedeOrigenId: form.sedeOrigenId || user?.sedeId,
        nombre: form.nombre.trim(),
        dni: form.dni.trim() || undefined,
        celular: form.celular.trim() || undefined,
        email: form.email.trim() || undefined,
      };
      if (isEdit && id) {
        await clientesService.update(Number(id), dto);
        navigate(`/clientes/${id}`);
      } else {
        const c = await clientesService.create(dto as CreateClienteDto);
        navigate(`/clientes/${c.id}`);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al guardar');
    } finally { setSaving(false); }
  };

  const handleDelete = async () => {
    if (!id || !confirm(`¿Eliminar a "${original?.nombre}"?`)) return;
    try {
      await clientesService.delete(Number(id));
      navigate('/clientes');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al eliminar');
    }
  };

  if (loading) return <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}><div className="spinner spinner-lg" /></div>;

  return (
    <div style={{ maxWidth: '640px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
        <Link to={isEdit ? `/clientes/${id}` : '/clientes'} className="btn btn-ghost btn-sm btn-icon">
          <ChevronLeft size={18} />
        </Link>
        <h1 className="page-title">{isEdit ? 'Editar cliente' : 'Nuevo cliente'}</h1>
      </div>

      <div className="card">
        <form onSubmit={handleSubmit}>
          {error && <div className="login-error" style={{ marginBottom: 'var(--space-4)' }}>{error}</div>}

          <div className="form-group">
            <label className="form-label required">Nombre completo</label>
            <input type="text" className="form-input" value={form.nombre} onChange={set('nombre')} placeholder="Ej. María García López" required />
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

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--space-4)' }}>
            {isEdit ? (
              <button type="button" className="btn btn-danger" onClick={handleDelete}>
                <Trash2 size={14} /> Eliminar
              </button>
            ) : <div />}
            <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
              <Link to={isEdit ? `/clientes/${id}` : '/clientes'} className="btn btn-secondary">Cancelar</Link>
              <button type="submit" className="btn btn-primary" disabled={saving}>
                {saving ? <span className="spinner spinner-sm" /> : <Save size={14} />}
                {saving ? 'Guardando...' : 'Guardar'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
