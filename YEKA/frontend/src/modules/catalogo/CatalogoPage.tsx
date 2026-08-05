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

  // ─── Jerarquía en cascada: TipoPrenda → Material → TipoArreglo ───────────
  const activos = servicios.filter(s => s.activo);

  // Nivel 1: TipoPrenda
  const tiposPrenda = [...new Set(activos.map(s => s.tipoPrenda?.nombre || 'Sin Tipo de Prenda'))].sort();

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Catálogo de Servicios</h1>
          <p className="page-subtitle">{activos.length} servicios activos</p>
        </div>
        <button className="btn btn-primary" onClick={() => handleOpenModal()}>
          <Plus size={16} /> Nuevo servicio
        </button>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}><div className="spinner spinner-lg" /></div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          {tiposPrenda.length === 0 ? (
            <div className="empty-state">
              <Tag size={40} className="empty-state-icon" />
              <p className="empty-state-title">Catálogo vacío</p>
              <p className="empty-state-desc">Crea tu primer servicio con el botón "Nuevo servicio".</p>
            </div>
          ) : (
            tiposPrenda.map(tipoPrenda => {
              const serviciosDeTipo = activos.filter(s => (s.tipoPrenda?.nombre || 'Sin Tipo de Prenda') === tipoPrenda);

              // Nivel 2: Material
              const materiales = [...new Set(
                serviciosDeTipo.flatMap(s =>
                  s.materiales && s.materiales.length > 0
                    ? s.materiales.map(m => m.descripcion)
                    : ['Sin Material']
                )
              )].sort();

              return (
                <div key={tipoPrenda}>
                  {/* ── NIVEL 1: TipoPrenda ── */}
                  <h3 style={{
                    fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)',
                    color: 'var(--color-primary)', marginBottom: 'var(--space-4)',
                    paddingBottom: 'var(--space-2)', borderBottom: '2px solid var(--color-primary)',
                    display: 'flex', alignItems: 'center', gap: '8px'
                  }}>
                    🧥 {tipoPrenda}
                    <span style={{ fontSize: '13px', color: 'var(--color-text-muted)', fontWeight: 400 }}>
                      ({serviciosDeTipo.length} servicios)
                    </span>
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', paddingLeft: 'var(--space-4)' }}>
                    {materiales.map(material => {
                      const serviciosDeMaterial = serviciosDeTipo.filter(s => {
                        if (material === 'Sin Material') {
                          return !s.materiales || s.materiales.length === 0;
                        }
                        return s.materiales?.some(m => m.descripcion === material);
                      });

                      // Nivel 3: TipoArreglo
                      const tiposArreglo = [...new Set(
                        serviciosDeMaterial.flatMap(s =>
                          s.tiposArreglo && s.tiposArreglo.length > 0
                            ? s.tiposArreglo.map(t => t.descripcion)
                            : ['Sin Tipo de Arreglo']
                        )
                      )].sort();

                      return (
                        <div key={material}>
                          {/* ── NIVEL 2: Material ── */}
                          <h4 style={{
                            fontSize: 'var(--text-base)', fontWeight: 'var(--font-semibold)',
                            color: 'var(--color-text)', marginBottom: 'var(--space-3)',
                            display: 'flex', alignItems: 'center', gap: '6px',
                            paddingBottom: 'var(--space-1)', borderBottom: '1px solid var(--color-border)'
                          }}>
                            <span style={{
                              display: 'inline-block', width: '8px', height: '8px',
                              borderRadius: '50%', background: material === 'Sin Material' ? 'var(--color-text-muted)' : 'var(--color-secondary, #7c3aed)',
                              flexShrink: 0
                            }} />
                            {material === 'Sin Material' ? (
                              <span style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>Sin Material</span>
                            ) : (
                              <>🧵 {material}</>
                            )}
                          </h4>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', paddingLeft: 'var(--space-4)' }}>
                            {tiposArreglo.map(tipoArreglo => {
                              const serviciosFinales = serviciosDeMaterial.filter(s => {
                                if (tipoArreglo === 'Sin Tipo de Arreglo') {
                                  return !s.tiposArreglo || s.tiposArreglo.length === 0;
                                }
                                return s.tiposArreglo?.some(t => t.descripcion === tipoArreglo);
                              });

                              return (
                                <div key={tipoArreglo}>
                                  {/* ── NIVEL 3: TipoArreglo ── */}
                                  <p style={{
                                    fontSize: '12px', fontWeight: 'var(--font-semibold)',
                                    color: tipoArreglo === 'Sin Tipo de Arreglo' ? 'var(--color-text-muted)' : 'var(--color-text-light)',
                                    textTransform: 'uppercase', letterSpacing: '0.06em',
                                    marginBottom: 'var(--space-2)',
                                    fontStyle: tipoArreglo === 'Sin Tipo de Arreglo' ? 'italic' : 'normal'
                                  }}>
                                    🔧 {tipoArreglo}
                                  </p>

                                  <div className="table-wrapper">
                                    <table className="table">
                                      <thead>
                                        <tr>
                                          <th>Nombre</th>
                                          <th>Tipo Específico</th>
                                          <th>Medida Base</th>
                                          <th>Tiempo Base</th>
                                          <th>Zona</th>
                                          <th>Factores</th>
                                          <th></th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {serviciosFinales.map(s => (
                                          <tr key={s.id}>
                                            <td style={{ fontWeight: 'var(--font-medium)' }}>{s.nombre}</td>
                                            <td>{s.tipoEspecifico}</td>
                                            <td>{s.medidaBase} cm</td>
                                            <td>{s.tiempoBase} min</td>
                                              <td>
                                                {/* Nivel 4: Zona — como columna */}
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                                  {s.zona ? (
                                                    <span className="badge badge-neutral" style={{ fontSize: '11px' }}>{s.zona.descripcion}</span>
                                                  ) : (s as any).zonas && (s as any).zonas.length > 0 ? (
                                                    (s as any).zonas.map((z: any) => (
                                                      <span key={z.id} className="badge badge-neutral" style={{ fontSize: '11px' }}>{z.descripcion}</span>
                                                    ))
                                                  ) : (
                                                    <span style={{ color: 'var(--color-text-light)', fontSize: '0.8rem' }}>—</span>
                                                  )}
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
                            })}
                          </div>
                        </div>
                      );
                    })}
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
