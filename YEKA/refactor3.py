import sys

path = r'c:\Users\gilda\PROYECTOS\YEKA\frontend\src\modules\dashboard\DashboardTallerPage.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

start_str = '<div className="table-wrapper" style={{ maxHeight: \'400px\', overflowY: \'auto\', marginBottom: \'var(--space-4)\' }}>'
end_str = '</table>\n              </div>'

start_idx = content.find(start_str)
end_idx = content.find(end_str, start_idx) + len(end_str)

if start_idx == -1 or end_idx < len(end_str):
    print('Could not find block to replace')
    sys.exit(1)

new_cards_jsx = '''              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '500px', overflowY: 'auto', marginBottom: 'var(--space-4)', paddingRight: '8px' }}>
                {(!draftFactura?.prendas || draftFactura.prendas.length === 0) ? (
                  <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-text-muted)' }}>
                    No hay prendas agregadas a esta factura.
                  </div>
                ) : (
                  draftFactura.prendas.map(p => {
                    const tipo = tiposPrenda.find(t => t.id === p.tipoPrendaId)?.nombre || 'Desconocido';
                    const val = p.servicios?.reduce((acc, s) => acc + Number(s.precioFinal), 0) || 0;
                    
                    return (
                      <div key={p.id} className="card" style={{ padding: '16px', margin: 0, border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
                        {/* FILA SUPERIOR: TIPO PRENDA, COLOR, MARCA, TALLA | FECHA COMPROMISO */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '12px' }}>
                          <div>
                            <div style={{ fontWeight: 'var(--font-medium)', fontSize: 'var(--text-lg)', textTransform: 'uppercase', color: 'var(--color-primary)' }}>
                              {tipo}
                            </div>
                            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                              <span style={{ marginRight: '8px' }}><strong>Color:</strong> {p.color || '-'}</span>
                              <span style={{ marginRight: '8px' }}><strong>Marca:</strong> {p.marca || '-'}</span>
                              <span><strong>Talla:</strong> {p.talla || '-'}</span>
                            </div>
                          </div>
                          {p.fechaCompromiso && (
                            <div style={{ fontSize: '12px', color: 'var(--color-info)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'var(--font-medium)', backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '4px 8px', borderRadius: '4px' }}>
                              <Calendar size={14} /> F. Compromiso: {new Date(p.fechaCompromiso).toLocaleDateString()}
                            </div>
                          )}
                        </div>

                        {/* SECCION CENTRAL: SERVICIOS */}
                        <div style={{ marginBottom: '16px' }}>
                          <div style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--color-text-light)', marginBottom: '8px', letterSpacing: '0.05em' }}>
                            Servicios Asignados ({p.servicios?.length || 0})
                          </div>
                          {p.servicios && p.servicios.length > 0 ? (
                            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px' }}>
                              {p.servicios.map(s => {
                                const cs = catalogoServicios.find(c => c.id === s.servicioId);
                                const servicioNombre = cs ? cs.tipoEspecifico : 'Servicio';
                                const arreglo = tiposArreglo.find(ta => ta.id === s.tipoArregloId)?.descripcion || '';
                                const zona = zonas.find(z => z.id === s.zonaId)?.descripcion || '';
                                const details = [servicioNombre, arreglo, zona].filter(Boolean).join(' - ');
                                return (
                                  <li key={s.id} style={{ marginBottom: '4px' }}>{details}</li>
                                );
                              })}
                            </ul>
                          ) : (
                            <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>Sin servicios asignados</div>
                          )}
                        </div>

                        {/* PRECIO (Alineado a la derecha) */}
                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid var(--color-border)', paddingBottom: '16px' }}>
                           <div style={{ fontSize: 'var(--text-xl)', fontWeight: 'bold', color: 'var(--color-text)' }}>
                             €{val.toFixed(2)}
                           </div>
                        </div>

                        {/* FOOTER: COMBOBOX URGENCIA Y ACCIONES */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>Atención:</span>
                            <select 
                              className="form-select"
                              style={{ fontSize: '13px', padding: '6px 32px 6px 12px', width: '200px' }}
                              value={p.tipoUrgenciaId != null ? p.tipoUrgenciaId.toString() : ''}
                              onChange={e => handleCambiarUrgencia(p.id, e.target.value ? Number(e.target.value) : null)}
                            >
                              <option value="">Normal</option>
                              {tiposUrgencia.map(tu => (
                                <option key={tu.id} value={tu.id.toString()}>{tu.nombre}</option>
                              ))}
                            </select>
                          </div>
                          
                          <div style={{ display: 'flex', gap: '8px' }}>
                            <button className="btn btn-secondary btn-sm" onClick={() => handleEditPrenda(p)} title="Editar prenda">
                              <Edit2 size={16} style={{ marginRight: '4px' }} /> Editar
                            </button>
                            <button className="btn btn-outline btn-sm" style={{ color: 'var(--color-danger)', borderColor: 'var(--color-danger)' }} onClick={() => handleRemovePrenda(p.id)} title="Eliminar prenda">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>'''

content = content[:start_idx] + new_cards_jsx + content[end_idx:]

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Successfully refactored")
