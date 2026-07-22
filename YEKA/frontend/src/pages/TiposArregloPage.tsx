
import React, { useState, useEffect } from 'react';
import { Layers, Plus, Pencil, Trash } from 'lucide-react';
import api from '../shared/api';

interface Zona {
  id: number;
  descripcion: string;
}

interface TiposArreglo {
  id: number;
  descripcion: string;
  activo: boolean;
  zonas?: Zona[];
}

const TiposArregloPage: React.FC = () => {
  const [items, setItems] = useState<TiposArreglo[]>([]);
  const [todasZonas, setTodasZonas] = useState<Zona[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  
  const [formData, setFormData] = useState({
    descripcion: '',
    activo: true,
  });
  
  // Zonas asignadas al arreglo actual
  const [zonasAsignadas, setZonasAsignadas] = useState<Zona[]>([]);
  
  // Estado para asignar nueva zona
  const [zonaToAdd, setZonaToAdd] = useState<number | ''>('');

  const fetchItems = async () => {
    try {
      setLoading(true);
      const [resArreglos, resZonas] = await Promise.all([
        api.get('/tipo-arreglo'),
        api.get('/zona')
      ]);
      setItems(resArreglos.data);
      setTodasZonas(resZonas.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleOpenModal = (item?: TiposArreglo) => {
    if (item) {
      setEditingId(item.id);
      setFormData({
        descripcion: item.descripcion || '',
        activo: item.activo,
      });
      setZonasAsignadas(item.zonas || []);
    } else {
      setEditingId(null);
      setFormData({
        descripcion: '',
        activo: true,
      });
      setZonasAsignadas([]);
    }
    setZonaToAdd('');
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

  const handleAddZona = () => {
    if (zonaToAdd === '') return;
    const zonaObj = todasZonas.find(z => z.id === Number(zonaToAdd));
    if (!zonaObj) return;
    
    // Evitar duplicados
    if (!zonasAsignadas.some(z => z.id === zonaObj.id)) {
      setZonasAsignadas(prev => [...prev, zonaObj]);
    }
    setZonaToAdd('');
  };

  const handleRemoveZona = (zonaId: number) => {
    setZonasAsignadas(prev => prev.filter(z => z.id !== zonaId));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        zonasIds: zonasAsignadas.map(z => z.id)
      };
      
      if (editingId) {
        await api.patch('/tipo-arreglo/' + editingId, payload);
      } else {
        await api.post('/tipo-arreglo', payload);
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
          <h1 className="page-title">Tipos de Arreglo</h1>
          <p className="page-subtitle">Gestión de tipos de arreglo y sus zonas asignadas</p>
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
          <p className="empty-state-title">No hay tipos de arreglo registrados</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Descripción</th>
                <th>Zonas</th>
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
                    {item.zonas && item.zonas.length > 0 ? (
                      <span className="text-xs text-gray-500">
                        {item.zonas.map(z => z.descripcion).join(', ')}
                      </span>
                    ) : (
                      <span className="text-xs text-gray-400 italic">Ninguna</span>
                    )}
                  </td>
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
          <div className="card" style={{ width: '100%', maxWidth: '500px', padding: 'var(--space-6)', maxHeight: '90vh', overflowY: 'auto' }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)' }}>
              {editingId ? 'Editar Tipos de Arreglo' : 'Nuevo Tipos de Arreglo'}
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
                  style={{ minHeight: '60px', resize: 'vertical' }}
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

              <hr style={{ margin: 'var(--space-2) 0', border: 'none', borderTop: '1px solid var(--gray-200)' }} />
              
              <div>
                <h3 className="form-label" style={{ marginBottom: 'var(--space-2)' }}>Zonas Asignadas</h3>
                
                <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
                  <select 
                    className="form-input" 
                    style={{ flex: 1 }}
                    value={zonaToAdd}
                    onChange={e => setZonaToAdd(e.target.value === '' ? '' : Number(e.target.value))}
                  >
                    <option value="">Seleccione una zona...</option>
                    {todasZonas.map(z => (
                      <option key={z.id} value={z.id}>{z.descripcion}</option>
                    ))}
                  </select>
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={handleAddZona}
                  >
                    Agregar Zona
                  </button>
                </div>
                
                {zonasAsignadas.length === 0 ? (
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', fontStyle: 'italic', textAlign: 'center', padding: 'var(--space-4) 0' }}>
                    No hay zonas asignadas a este arreglo
                  </p>
                ) : (
                  <table className="table" style={{ fontSize: 'var(--text-sm)' }}>
                    <thead>
                      <tr>
                        <th>Descripción de la Zona</th>
                        <th style={{ width: '50px' }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {zonasAsignadas.map(zona => (
                        <tr key={zona.id}>
                          <td>{zona.descripcion}</td>
                          <td style={{ textAlign: 'center' }}>
                            <button
                              type="button"
                              onClick={() => handleRemoveZona(zona.id)}
                              style={{ color: 'var(--color-danger)', background: 'none', border: 'none', cursor: 'pointer' }}
                              title="Remover"
                            >
                              <Trash size={14} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
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

export default TiposArregloPage;
