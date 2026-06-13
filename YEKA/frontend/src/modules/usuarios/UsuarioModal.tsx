import { useEffect, useState } from 'react';
import type { Usuario, CreateUsuarioDto, UpdateUsuarioDto, Sede, Rol } from '../../shared/types';
import { usuariosService } from './usuarios.service';
import { X } from 'lucide-react';

interface UsuarioModalProps {
  usuarioToEdit?: Usuario | null;
  sedes: Sede[];
  onClose: () => void;
  onSave: (savedUser: Usuario) => void;
}

export function UsuarioModal({ usuarioToEdit, sedes, onClose, onSave }: UsuarioModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    nombre: '',
    email: '',
    dni: '',
    telefono: '',
    password: '',
    pinAcceso: '',
    rol: 'RECEPCION' as Rol,
    sedeId: '',
  });

  useEffect(() => {
    if (usuarioToEdit) {
      setForm({
        nombre: usuarioToEdit.nombre,
        email: usuarioToEdit.email,
        dni: usuarioToEdit.dni || '',
        telefono: usuarioToEdit.telefono || '',
        password: '', // Leave blank when editing unless changing password
        pinAcceso: '', // Leave blank when editing unless changing pin
        rol: usuarioToEdit.rol,
        sedeId: usuarioToEdit.sedeId.toString(),
      });
    } else {
      setForm({
        nombre: '',
        email: '',
        dni: '',
        telefono: '',
        password: '',
        pinAcceso: '',
        rol: 'RECEPCION',
        sedeId: sedes[0]?.id.toString() || '',
      });
    }
  }, [usuarioToEdit, sedes]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const parsedSedeId = parseInt(form.sedeId, 10);
    if (isNaN(parsedSedeId)) {
      setError('Por favor selecciona una sede válida.');
      setLoading(false);
      return;
    }

    try {
      if (usuarioToEdit) {
        // Prepare update DTO
        const dto: UpdateUsuarioDto = {
          nombre: form.nombre,
          email: form.email,
          dni: form.dni || undefined,
          telefono: form.telefono || undefined,
          rol: form.rol,
          sedeId: parsedSedeId,
        };

        if (form.password) dto.password = form.password;
        if (form.pinAcceso) dto.pinAcceso = form.pinAcceso;

        const updated = await usuariosService.update(usuarioToEdit.id, dto);
        onSave(updated);
      } else {
        // Create DTO
        if (!form.password) {
          setError('La contraseña es requerida para nuevos usuarios.');
          setLoading(false);
          return;
        }

        const dto: CreateUsuarioDto = {
          nombre: form.nombre,
          email: form.email,
          dni: form.dni || undefined,
          telefono: form.telefono || undefined,
          password: form.password,
          rol: form.rol,
          sedeId: parsedSedeId,
        };

        if (form.pinAcceso) dto.pinAcceso = form.pinAcceso;

        const created = await usuariosService.create(dto);
        onSave(created);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al guardar el usuario');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" style={{ maxWidth: '500px' }} onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{usuarioToEdit ? 'Editar Usuario' : 'Nuevo Usuario'}</h2>
          <button className="btn btn-ghost btn-sm btn-icon" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {error && (
              <div className="alert alert-danger" style={{ fontSize: 'var(--text-sm)' }}>
                {error}
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Nombre Completo *</label>
              <input
                type="text"
                className="form-input"
                required
                value={form.nombre}
                onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                placeholder="Ej. Juan Pérez"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Correo Electrónico *</label>
              <input
                type="email"
                className="form-input"
                required
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="juan@correo.com"
              />
            </div>

            <div className="grid-2" style={{ gap: 'var(--space-4)' }}>
              <div className="form-group">
                <label className="form-label">DNI / Cédula</label>
                <input
                  type="text"
                  className="form-input"
                  value={form.dni}
                  onChange={e => setForm(f => ({ ...f, dni: e.target.value }))}
                  placeholder="Opcional"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Teléfono</label>
                <input
                  type="text"
                  className="form-input"
                  value={form.telefono}
                  onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))}
                  placeholder="Opcional"
                />
              </div>
            </div>

            <div className="grid-2" style={{ gap: 'var(--space-4)' }}>
              <div className="form-group">
                <label className="form-label">Rol *</label>
                <select
                  className="form-select"
                  value={form.rol}
                  onChange={e => setForm(f => ({ ...f, rol: e.target.value as Rol }))}
                >
                  <option value="RECEPCION">Recepción</option>
                  <option value="TALLER">Taller</option>
                  <option value="ADMIN">Administrador</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Sede *</label>
                <select
                  className="form-select"
                  required
                  value={form.sedeId}
                  onChange={e => setForm(f => ({ ...f, sedeId: e.target.value }))}
                >
                  <option value="" disabled>Selecciona una sede</option>
                  {sedes.map(s => (
                    <option key={s.id} value={s.id.toString()}>{s.nombre}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid-2" style={{ gap: 'var(--space-4)' }}>
              <div className="form-group">
                <label className="form-label">
                  Contraseña {usuarioToEdit && '(vacío para mantener)'}
                </label>
                <input
                  type="password"
                  className="form-input"
                  required={!usuarioToEdit}
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  placeholder="Mínimo 6 caracteres"
                />
              </div>

              <div className="form-group">
                <label className="form-label">PIN Acceso (4 dígitos)</label>
                <input
                  type="password"
                  className="form-input"
                  maxLength={4}
                  value={form.pinAcceso}
                  onChange={e => setForm(f => ({ ...f, pinAcceso: e.target.value }))}
                  placeholder="Ej. 1234"
                />
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-ghost" onClick={onClose} disabled={loading}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
