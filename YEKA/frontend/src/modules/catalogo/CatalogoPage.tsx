import { useEffect, useState } from 'react';
import { catalogoService } from './catalogo.service';
import type { CatalogoServicio } from '../../shared/types';
import { Plus, Pencil, Tag } from 'lucide-react';
import { ServicioModal } from './ServicioModal';

export function CatalogoPage() {
  const [servicios, setServicios] = useState<CatalogoServicio[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [servicioToEdit, setServicioToEdit] = useState<CatalogoServicio | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const serviciosData = await catalogoService.getAll();
      setServicios(serviciosData);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleOpenModal = (servicio?: CatalogoServicio) => {
    setServicioToEdit(servicio || null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setServicioToEdit(null);
  };

  const categorias = [...new Set(servicios.map(s => s.tipoPrenda?.nombre || 'Sin Tipo de Prenda'))].sort();

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Catálogo de Servicios</h1>
          <p className="page-subtitle">{servicios.filter(s => s.activo).length} servicios activos</p>
        </div>
        <button className="btn btn-primary" onClick={() => handleOpenModal()}>
          <Plus size={16} /> Nuevo servicio
        </button>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}><div className="spinner spinner-lg" /></div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          {categorias.length === 0 ? (
            <div className="empty-state">
              <Tag size={40} className="empty-state-icon" />
              <p className="empty-state-title">Catálogo vacío</p>
              <p className="empty-state-desc">Crea tu primer servicio con el botón "Nuevo servicio".</p>
            </div>
          ) : (
            categorias.map(cat => {
              const items = servicios.filter(s => (s.tipoPrenda?.nombre || 'Sin Tipo de Prenda') === cat && s.activo);
              if (items.length === 0) return null;
              return (
                <div key={cat}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-3)', color: 'var(--color-text-light)', paddingBottom: 'var(--space-2)', borderBottom: '1px solid var(--color-border)' }}>
                    {cat}
                  </h3>
                  <div className="table-wrapper">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Específico</th>
                          <th>Medida Base (cm)</th>
                          <th>Tiempo Base (min)</th>
                          <th>Materiales</th>
                          <th>Tipos Arreglo</th>
                          <th>Categorías Factores</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map(s => (
                          <tr key={s.id}>
                            <td style={{ fontWeight: 'var(--font-medium)' }}>{s.nombre}</td>
                            <td>{s.tipoEspecifico}</td>
                            <td>{s.medidaBase} cm</td>
                            <td>{s.tiempoBase} min</td>
                            <td>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                {s.materiales && s.materiales.length > 0
                                  ? s.materiales.map(m => <span key={m.id} className="badge badge-neutral" style={{ fontSize: '11px' }}>{m.descripcion}</span>)
                                  : <span style={{ color: 'var(--color-text-light)', fontSize: '0.8rem' }}>—</span>}
                              </div>
                            </td>
                            <td>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                {s.tiposArreglo && s.tiposArreglo.length > 0
                                  ? s.tiposArreglo.map(t => <span key={t.id} className="badge badge-neutral" style={{ fontSize: '11px' }}>{t.descripcion}</span>)
                                  : <span style={{ color: 'var(--color-text-light)', fontSize: '0.8rem' }}>—</span>}
                              </div>
                            </td>
                            <td>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                {s.categoriasFactores?.map(cf => (
                                  <span key={cf.id} className="badge badge-primary" style={{ fontSize: '11px' }}>{cf.nombre}</span>
                                ))}
                              </div>
                            </td>
                            <td>
                              <button className="btn btn-ghost btn-sm btn-icon" onClick={() => handleOpenModal(s)}>
                                <Pencil size={14} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      <ServicioModal 
        isOpen={isModalOpen}
        servicioToEdit={servicioToEdit}
        onClose={handleCloseModal}
        onSaved={() => fetchData()}
      />
    </div>
  );
}
