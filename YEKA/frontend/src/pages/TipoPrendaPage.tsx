import React, { useState, useEffect } from 'react';
import type { TipoPrenda, TipoPrendaMaterial } from '../shared/types';
import tipoPrendaService from '../services/tipo-prenda.service';
import api from '../shared/api';
import { Layers, Plus, Pencil, X, PackageOpen } from 'lucide-react';

interface Material {
  id: number;
  descripcion: string;
  activo: boolean;
}

const TipoPrendaPage: React.FC = () => {

  const [tipos, setTipos] = useState<TipoPrenda[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Catálogo de todos los materiales disponibles
  const [allMateriales, setAllMateriales] = useState<Material[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    porcentajeDificultad: 0,
    activo: true,
  });

  // Materiales ya vinculados al tipo de prenda en edición
  const [selectedMateriales, setSelectedMateriales] = useState<TipoPrendaMaterial[]>([]);
  // Material elegido en el selector para añadir
  const [materialToAdd, setMaterialToAdd] = useState<number | ''>('');
  // Subformulario para crear un nuevo material
  const [showNewMaterial, setShowNewMaterial] = useState(false);
  const [newMaterialDesc, setNewMaterialDesc] = useState('');
  const [savingMaterial, setSavingMaterial] = useState(false);

  const fetchTipos = async () => {
    try {
      setLoading(true);
      const data = await tipoPrendaService.getTiposPrenda();
      setTipos(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchMateriales = async () => {
    try {
      const res = await api.get<Material[]>('/material');
      setAllMateriales(res.data);
    } catch {
      // silencioso
    }
  };

  useEffect(() => {
    fetchTipos();
    fetchMateriales();
  }, []);

  const handleOpenModal = (tipo?: TipoPrenda) => {
    if (tipo) {
      setEditingId(tipo.id);
      setFormData({
        nombre: tipo.nombre,
        descripcion: tipo.descripcion || '',
        porcentajeDificultad: Number(tipo.porcentajeDificultad) || 0,
        activo: tipo.activo,
      });
      setSelectedMateriales(tipo.materiales || []);
    } else {
      setEditingId(null);
      setFormData({
        nombre: '',
        descripcion: '',
        porcentajeDificultad: 0,
        activo: true,
      });
      setSelectedMateriales([]);
    }
    setMaterialToAdd('');
    setShowNewMaterial(false);
    setNewMaterialDesc('');
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
    } else if (type === 'number') {
      setFormData((prev) => ({ ...prev, [name]: Number(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  /** Añadir material existente a la selección */
  const handleAddMaterial = () => {
    if (materialToAdd === '') return;
    const mat = allMateriales.find((m) => m.id === Number(materialToAdd));
    if (!mat) return;
    if (selectedMateriales.some((m) => m.id === mat.id)) {
      setMaterialToAdd('');
      return;
    }
    setSelectedMateriales((prev) => [...prev, mat]);
    setMaterialToAdd('');
  };

  /** Crear material nuevo y añadirlo automáticamente */
  const handleCreateMaterial = async () => {
    if (!newMaterialDesc.trim()) return;
    setSavingMaterial(true);
    try {
      const res = await api.post<Material>('/material', { descripcion: newMaterialDesc.trim(), activo: true });
      const created = res.data;
      // Recargar catálogo
      await fetchMateriales();
      // Añadir a la selección
      setSelectedMateriales((prev) => [...prev, created]);
      setNewMaterialDesc('');
      setShowNewMaterial(false);
    } catch (err: any) {
      const msg = err.response?.data?.message || err.message;
      alert(Array.isArray(msg) ? msg.join(', ') : msg);
    } finally {
      setSavingMaterial(false);
    }
  };

  /** Quitar material de la selección */
  const handleRemoveMaterial = (id: number) => {
    setSelectedMateriales((prev) => prev.filter((m) => m.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        materialesIds: selectedMateriales.map((m) => m.id),
      };
      if (editingId) {
        await tipoPrendaService.updateTipoPrenda(editingId, payload);
      } else {
        await tipoPrendaService.createTipoPrenda(payload);
      }
      await fetchTipos();
      await fetchMateriales();
      handleCloseModal();
    } catch (err: any) {
      const backendError = err.response?.data?.message || err.message;
      alert(Array.isArray(backendError) ? backendError.join(', ') : backendError);
    }
  };

  // Materiales disponibles para añadir (excluye los ya seleccionados)
  const availableMateriales = allMateriales.filter(
    (m) => m.activo && !selectedMateriales.some((s) => s.id === m.id)
  );

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Tipos de Prenda</h1>
          <p className="page-subtitle">Gestión de las categorías de prendas</p>
        </div>
          <button
            onClick={() => handleOpenModal()}
            className="btn btn-primary"
          >
            <Plus size={16} /> Nuevo Tipo
          </button>
      </div>

      {error && <div style={{ color: 'var(--color-danger)', marginBottom: 'var(--space-4)' }}>{error}</div>}

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
          <div className="spinner spinner-lg" />
        </div>
      ) : tipos.length === 0 ? (
        <div className="empty-state">
          <Layers size={40} className="empty-state-icon" />
          <p className="empty-state-title">No hay tipos de prenda registrados</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Dificultad</th>
                <th>Materiales</th>
                <th>Estado</th>
                <th style={{ textAlign: 'right' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {tipos.map((tipo) => (
                <tr key={tipo.id}>
                  <td style={{ fontWeight: 'var(--font-medium)' }}>{tipo.nombre}</td>
                  <td style={{ color: 'var(--color-text-light)' }}>{tipo.descripcion || '-'}</td>
                  <td>{Number(tipo.porcentajeDificultad) * 100}%</td>
                  <td>
                    {tipo.materiales && tipo.materiales.length > 0 ? (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {tipo.materiales.map((m) => (
                          <span key={m.id} className="badge badge-neutral" style={{ fontSize: '0.7rem' }}>
                            {m.descripcion}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span style={{ color: 'var(--color-text-light)', fontSize: '0.85rem' }}>—</span>
                    )}
                  </td>
                  <td>
                    <span className={`badge ${tipo.activo ? 'badge-success' : 'badge-danger'}`}>
                      {tipo.activo ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                    <td style={{ textAlign: 'right' }}>
                      <button
                        onClick={() => handleOpenModal(tipo)}
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

      {/* Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)', padding: 'var(--space-4)'
        }}>
          <div className="card" style={{ width: '100%', maxWidth: '520px', padding: 'var(--space-6)', maxHeight: '90vh', overflowY: 'auto' }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)' }}>
              {editingId ? 'Editar Tipo de Prenda' : 'Nuevo Tipo de Prenda'}
            </h2>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {/* Nombre */}
              <div className="form-group">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Ej. Pantalón, Chaqueta..."
                />
              </div>

              {/* Descripción */}
              <div className="form-group">
                <label className="form-label">Descripción</label>
                <textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  className="form-input"
                  style={{ minHeight: '80px', resize: 'vertical' }}
                  placeholder="Opcional..."
                />
              </div>

              {/* % Dificultad */}
              <div className="form-group">
                <label className="form-label">% Dificultad</label>
                <input
                  type="number"
                  name="porcentajeDificultad"
                  value={formData.porcentajeDificultad}
                  onChange={handleChange}
                  className="form-input"
                  min="0"
                  step="0.01"
                  placeholder="Ej. 0.15 para 15%"
                />
              </div>

              {/* Activo */}
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

              {/* ── Sección Materiales ── */}
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-4)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                  <PackageOpen size={16} />
                  <label className="form-label" style={{ margin: 0, fontWeight: 'var(--font-semibold)' }}>
                    Materiales asociados
                  </label>
                </div>

                {/* Lista de materiales ya seleccionados */}
                {selectedMateriales.length === 0 ? (
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', marginBottom: 'var(--space-3)' }}>
                    Sin materiales asociados aún.
                  </p>
                ) : (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: 'var(--space-3)' }}>
                    {selectedMateriales.map((m) => (
                      <span
                        key={m.id}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '4px',
                          padding: '2px 8px', borderRadius: '999px',
                          backgroundColor: 'var(--color-primary-light, #e0e7ff)',
                          color: 'var(--color-primary, #4f46e5)',
                          fontSize: '0.8rem', fontWeight: 500,
                        }}
                      >
                        {m.descripcion}
                        <button
                          type="button"
                          onClick={() => handleRemoveMaterial(m.id)}
                          style={{
                            background: 'none', border: 'none', cursor: 'pointer',
                            padding: 0, display: 'flex', alignItems: 'center',
                            color: 'inherit', opacity: 0.7,
                          }}
                          title="Quitar"
                        >
                          <X size={12} />
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                {/* Añadir material existente */}
                <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
                  <select
                    value={materialToAdd}
                    onChange={(e) => setMaterialToAdd(e.target.value === '' ? '' : Number(e.target.value))}
                    className="form-input"
                    style={{ flex: 1 }}
                  >
                    <option value="">Seleccionar material...</option>
                    {availableMateriales.map((m) => (
                      <option key={m.id} value={m.id}>{m.descripcion}</option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={handleAddMaterial}
                    className="btn btn-primary btn-sm"
                    disabled={materialToAdd === ''}
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    <Plus size={14} /> Añadir
                  </button>
                </div>

                {/* Crear material nuevo */}
                {!showNewMaterial ? (
                  <button
                    type="button"
                    onClick={() => setShowNewMaterial(true)}
                    className="btn btn-ghost btn-sm"
                    style={{ fontSize: '0.8rem' }}
                  >
                    <Plus size={13} /> Crear nuevo material
                  </button>
                ) : (
                  <div style={{
                    border: '1px dashed var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-3)',
                    display: 'flex', flexDirection: 'column', gap: 'var(--space-2)',
                    marginTop: 'var(--space-2)',
                  }}>
                    <label className="form-label" style={{ margin: 0, fontSize: '0.82rem' }}>
                      Descripción del nuevo material
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      value={newMaterialDesc}
                      onChange={(e) => setNewMaterialDesc(e.target.value)}
                      placeholder="Ej. Algodón, Seda, Lino..."
                      maxLength={500}
                    />
                    <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'flex-end' }}>
                      <button
                        type="button"
                        onClick={() => { setShowNewMaterial(false); setNewMaterialDesc(''); }}
                        className="btn btn-ghost btn-sm"
                      >
                        Cancelar
                      </button>
                      <button
                        type="button"
                        onClick={handleCreateMaterial}
                        className="btn btn-primary btn-sm"
                        disabled={savingMaterial || !newMaterialDesc.trim()}
                      >
                        {savingMaterial ? 'Guardando...' : 'Crear y añadir'}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Acciones del formulario */}
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

export default TipoPrendaPage;
