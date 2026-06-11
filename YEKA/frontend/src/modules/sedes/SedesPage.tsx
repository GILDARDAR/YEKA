import React, { useEffect, useState } from 'react';
import { sedesService } from './sedes.service';
import type { Sede } from '../../shared/types';
import { Building2, Plus, CheckCircle, XCircle, Pencil } from 'lucide-react';

export function SedesPage() {
  const [sedes, setSedes]   = useState<Sede[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    codigoSede: '',
    nombre: '',
    direccion: '',
    capacidadDiariaMax: 0,
    activa: true,
  });

  const fetchSedes = async () => {
    try {
      setLoading(true);
      const data = await sedesService.getAll();
      setSedes(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSedes();
  }, []);

  const toggleActiva = async (s: Sede) => {
    try {
      const updated = await sedesService.update(s.id, { activa: !s.activa });
      setSedes(prev => prev.map(x => x.id === s.id ? updated : x));
    } catch { /* silently ignore */ }
  };

  const handleOpenModal = (sede?: Sede) => {
    if (sede) {
      setEditingId(sede.id);
      setFormData({
        codigoSede: sede.codigoSede,
        nombre: sede.nombre,
        direccion: sede.direccion || '',
        capacidadDiariaMax: sede.capacidadDiariaMax || 0,
        activa: sede.activa,
      });
    } else {
      setEditingId(null);
      setFormData({
        codigoSede: '',
        nombre: '',
        direccion: '',
        capacidadDiariaMax: 0,
        activa: true,
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'number') {
      setFormData(prev => ({ ...prev, [name]: Number(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload: any = {
        codigoSede: formData.codigoSede,
        nombre: formData.nombre,
      };

      if (formData.direccion.trim() !== '') {
        payload.direccion = formData.direccion;
      }
      
      if (formData.capacidadDiariaMax > 0) {
        payload.capacidadDiariaMax = formData.capacidadDiariaMax;
      }

      if (editingId) {
        payload.activa = formData.activa;
        await sedesService.update(editingId, payload);
      } else {
        await sedesService.create(payload);
      }
      fetchSedes();
      handleCloseModal();
    } catch (err: any) {
      alert(err.response?.data?.message || err.message || 'Error al guardar sede');
    }
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Sedes</h1>
          <p className="page-subtitle">{sedes.filter(s => s.activa).length} sedes activas</p>
        </div>
        <button className="btn btn-primary" onClick={() => handleOpenModal()}>
          <Plus size={16} /> Nueva sede
        </button>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}><div className="spinner spinner-lg" /></div>
      ) : (
        <div className="grid-3">
          {sedes.map(s => (
            <div key={s.id} className="card" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', display: 'flex', gap: '8px' }}>
                <span className={`badge ${s.activa ? 'badge-success' : 'badge-neutral'}`}>
                  {s.activa ? 'Activa' : 'Inactiva'}
                </span>
                <button 
                  className="btn btn-ghost btn-sm btn-icon" 
                  onClick={() => handleOpenModal(s)}
                  title="Editar sede"
                >
                  <Pencil size={14} />
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Building2 size={20} />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-semibold)', fontSize: 'var(--text-lg)' }}>{s.nombre}</p>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontFamily: 'monospace' }}>{s.codigoSede}</p>
                </div>
              </div>
              {s.direccion && (
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-light)', marginBottom: 'var(--space-3)' }}>{s.direccion}</p>
              )}
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-3)', marginTop: 'var(--space-3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                  Cap. máx: <strong style={{ color: 'var(--color-text)' }}>{s.capacidadDiariaMax} pts/día</strong>
                </span>
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={() => toggleActiva(s)}
                  style={{ color: s.activa ? 'var(--color-danger)' : 'var(--color-success)', gap: '4px' }}
                >
                  {s.activa ? <XCircle size={14} /> : <CheckCircle size={14} />}
                  {s.activa ? 'Desactivar' : 'Activar'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal para Nueva/Editar Sede */}
      {isModalOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1000, 
          display: 'flex', alignItems: 'center', justifyContent: 'center', 
          backgroundColor: 'rgba(0,0,0,0.5)', padding: 'var(--space-4)'
        }}>
          <div className="card" style={{ width: '100%', maxWidth: '400px', padding: 'var(--space-6)' }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)' }}>
              {editingId ? 'Editar Sede' : 'Nueva Sede'}
            </h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div className="form-group">
                <label className="form-label">Código de Sede</label>
                <input
                  type="text"
                  name="codigoSede"
                  required
                  value={formData.codigoSede}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Ej. S01"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Ej. Sede Central"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Dirección (Opcional)</label>
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Calle..."
                />
              </div>

              <div className="form-group">
                <label className="form-label">Capacidad Diaria (Puntos)</label>
                <input
                  type="number"
                  name="capacidadDiariaMax"
                  value={formData.capacidadDiariaMax}
                  onChange={handleChange}
                  className="form-input"
                  min="0"
                />
              </div>

              <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: 'var(--space-2)' }}>
                <input
                  type="checkbox"
                  id="activa"
                  name="activa"
                  checked={formData.activa}
                  onChange={handleChange}
                />
                <label htmlFor="activa" className="form-label" style={{ margin: 0 }}>
                  Sede Activa
                </label>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="btn btn-ghost"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
