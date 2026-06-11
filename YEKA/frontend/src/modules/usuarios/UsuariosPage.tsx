import { useEffect, useState } from 'react';
import { usuariosService } from './usuarios.service';
import { sedesService } from '../sedes/sedes.service';
import type { Usuario, Sede } from '../../shared/types';
import { UserCog, Plus, UserCheck, UserX } from 'lucide-react';

const ROL_BADGE: Record<string, string> = {
  ADMIN:     'badge-danger',
  RECEPCION: 'badge-info',
  TALLER:    'badge-success',
};

export function UsuariosPage() {
  const [usuarios, setUsuarios]   = useState<Usuario[]>([]);
  const [sedes, setSedes]         = useState<Sede[]>([]);
  const [loading, setLoading]     = useState(true);

  useEffect(() => {
    Promise.all([usuariosService.getAll(), sedesService.getAll()])
      .then(([u, s]) => { setUsuarios(u); setSedes(s); })
      .finally(() => setLoading(false));
  }, []);

  const sedeNombre = (id: number) => sedes.find(s => s.id === id)?.nombre || `#${id}`;

  const toggleActivo = async (u: Usuario) => {
    try {
      const updated = await usuariosService.update(u.id, { activo: !u.activo });
      setUsuarios(prev => prev.map(x => x.id === u.id ? updated : x));
    } catch { /* silently ignore */ }
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Gestión de Usuarios</h1>
          <p className="page-subtitle">{usuarios.filter(u => u.activo).length} usuarios activos</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={16} /> Nuevo usuario
        </button>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}><div className="spinner spinner-lg" /></div>
      ) : (
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Sede</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map(u => (
                <tr key={u.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                      <div style={{
                        width: '2rem', height: '2rem', borderRadius: '50%',
                        background: 'var(--color-primary-soft)', color: 'var(--color-primary)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 'var(--font-semibold)', fontSize: 'var(--text-sm)', flexShrink: 0
                      }}>
                        {u.nombre.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p style={{ fontWeight: 'var(--font-medium)' }}>{u.nombre}</p>
                        {u.telefono && <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{u.telefono}</p>}
                      </div>
                    </div>
                  </td>
                  <td style={{ color: 'var(--color-text-light)', fontSize: 'var(--text-sm)' }}>{u.email}</td>
                  <td style={{ fontSize: 'var(--text-sm)' }}>{sedeNombre(u.sedeId)}</td>
                  <td><span className={`badge ${ROL_BADGE[u.rol] || 'badge-neutral'}`}>{u.rol}</span></td>
                  <td>
                    <span className={`badge ${u.activo ? 'badge-success' : 'badge-neutral'}`}>
                      {u.activo ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost btn-sm btn-icon"
                      title={u.activo ? 'Desactivar' : 'Activar'}
                      onClick={() => toggleActivo(u)}
                    >
                      {u.activo ? <UserX size={15} /> : <UserCheck size={15} />}
                    </button>
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
