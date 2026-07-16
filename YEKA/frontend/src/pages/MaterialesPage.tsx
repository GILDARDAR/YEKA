
import React, { useState, useEffect } from 'react';
import { Layers, Plus, Pencil } from 'lucide-react';
import api from '../shared/api';

interface Materiales {
  id: number;
  descripcion: string;
  activo: boolean;
}

const MaterialesPage: React.FC = () => {
  const [items, setItems] = useState<Materiales[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  
  const [formData, setFormData] = useState({
    descripcion: '',
    activo: true,
  });

  const fetchItems = async () => {
    try {
      setLoading(true);
      const res = await api.get('/material');
      setItems(res.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleOpenModal = (item?: Materiales) => {
    if (item) {
      setEditingId(item.id);
      setFormData({
        descripcion: item.descripcion || '',
        activo: item.activo,
      });
    } else {
      setEditingId(null);
      setFormData({
        descripcion: '',
        activo: true,
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.patch('/material/' + editingId, formData);
      } else {
        await api.post('/material', formData);
      }
      fetchItems();
      handleCloseModal();
    } catch (err: any) {
      const backendError = err.response?.data?.message || err.message;
      alert(Array.isArray(backendError) ? backendError.join(', ') : backendError);
    }
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Materiales</h1>
          <p className="page-subtitle">Gestión de materiales</p>
        </div>
          <button
            onClick={() => handleOpenModal()}
            className="btn btn-primary"
          >
            <Plus size={16} /> Nuevo
          </button>
      </div>

      {error && <div style={{ color: 'var(--color-danger)', marginBottom: 'var(--space-4)' }}>{error}</div>}

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
          <div className="spinner spinner-lg" />
        </div>
      ) : items.length === 0 ? (
        <div className="empty-state">
          <Layers size={40} className="empty-state-icon" />
          <p className="empty-state-title">No hay materiales registrados</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Descripción</th>
                <th>Estado</th>
                <th style={{ textAlign: 'right' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td style={{ fontWeight: 'var(--font-medium)' }}>{item.descripcion}</td>
                  <td>
                    <span className={`badge ${item.activo ? 'badge-success' : 'badge-danger'}`}>
                      {item.activo ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <button
                      onClick={() => handleOpenModal(item)}
                      className="btn btn-ghost btn-sm btn-icon"
                      title="Editar"
                    >
                      <Pencil size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isModalOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1000, 
          display: 'flex', alignItems: 'center', justifyContent: 'center', 
          backgroundColor: 'rgba(0,0,0,0.5)', padding: 'var(--space-4)'
        }}>
          <div className="card" style={{ width: '100%', maxWidth: '400px', padding: 'var(--space-6)' }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)' }}>
              {editingId ? 'Editar Materiales' : 'Nuevo Materiales'}
            </h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div className="form-group">
                <label className="form-label">Descripción</label>
                <textarea
                  name="descripcion"
                  required
                  value={formData.descripcion}
                  onChange={handleChange}
                  className="form-input"
                  style={{ minHeight: '80px', resize: 'vertical' }}
                  placeholder="Descripción corta"
                  maxLength={500}
                />
              </div>

              <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: 'var(--space-2)' }}>
                <input
                  type="checkbox"
                  id="activo"
                  name="activo"
                  checked={formData.activo}
                  onChange={handleChange}
                />
                <label htmlFor="activo" className="form-label" style={{ margin: 0 }}>
                  Activo
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
};

export default MaterialesPage;
