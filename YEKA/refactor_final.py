import sys

path = r'c:\Users\gilda\PROYECTOS\YEKA\frontend\src\modules\dashboard\DashboardTallerPage.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Validation logic
val_old = '''    if (!draftFactura.prendas || draftFactura.prendas.length === 0) {
      alert('Debes agregar al menos una prenda para finalizar la factura.');
      return;
    }'''

val_new = '''    if (!draftFactura.prendas || draftFactura.prendas.length === 0) {
      alert('Debes agregar al menos una prenda para finalizar la factura.');
      return;
    }
    
    if (draftFactura.prendas.some(p => !p.servicios || p.servicios.length === 0)) {
      alert('Todas las prendas deben tener al menos un servicio asignado.');
      return;
    }'''
content = content.replace(val_old, val_new)

# 2. Header layout
header_old = '''                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '12px' }}>
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
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                            <div style={{ fontSize: 'var(--text-xl)', fontWeight: 'bold', color: 'var(--color-text)' }}>
                              €{val.toFixed(2)}
                            </div>
                            {p.fechaCompromiso && (
                              <div style={{ fontSize: '12px', color: 'var(--color-info)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'var(--font-medium)', backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '4px 8px', borderRadius: '4px' }}>
                                <Calendar size={14} /> F. Compromiso: {new Date(p.fechaCompromiso).toLocaleDateString()}
                              </div>
                            )}
                          </div>
                        </div>'''

header_new = '''                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '12px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                            <div style={{ fontWeight: 'var(--font-medium)', fontSize: 'var(--text-lg)', textTransform: 'uppercase', color: 'var(--color-primary)' }}>
                              {tipo}
                            </div>
                            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', display: 'flex', gap: '8px', alignItems: 'center' }}>
                              {p.color && <span><strong>Color:</strong> {p.color}</span>}
                              {p.marca && <span><strong>Marca:</strong> {p.marca}</span>}
                              {p.talla && <span><strong>Talla:</strong> {p.talla}</span>}
                            </div>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                            {p.fechaCompromiso && (
                              <div style={{ fontSize: '12px', color: 'var(--color-info)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'var(--font-medium)', backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '4px 8px', borderRadius: '4px' }}>
                                <Calendar size={14} /> F. Compromiso: {new Date(p.fechaCompromiso).toLocaleDateString()}
                              </div>
                            )}
                          </div>
                        </div>'''
content = content.replace(header_old, header_new)

# 3. Footer layout
footer_old = '''                        {/* FOOTER: COMBOBOX URGENCIA Y ACCIONES */}
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
                        </div>'''

footer_new = '''                        {/* FOOTER: COMBOBOX URGENCIA Y ACCIONES Y PRECIO */}
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
                          
                          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ display: 'flex', gap: '8px' }}>
                              <button className="btn btn-secondary btn-sm" onClick={() => handleEditPrenda(p)} title="Editar prenda">
                                <Edit2 size={16} style={{ marginRight: '4px' }} /> Editar
                              </button>
                              <button className="btn btn-outline btn-sm" style={{ color: 'var(--color-danger)', borderColor: 'var(--color-danger)' }} onClick={() => handleRemovePrenda(p.id)} title="Eliminar prenda">
                                <Trash2 size={16} />
                              </button>
                            </div>
                            <div style={{ fontSize: 'var(--text-lg)', fontWeight: 'bold', color: 'var(--color-text)', borderLeft: '1px solid var(--color-border)', paddingLeft: '16px' }}>
                              €{val.toFixed(2)}
                            </div>
                          </div>
                        </div>
                        
                        {/* OBSERVACIONES DE LA PRENDA */}
                        {p.notas && (
                          <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px dashed var(--color-border)', fontSize: '13px', color: 'var(--color-text-muted)' }}>
                            <strong>Observaciones:</strong> {p.notas}
                          </div>
                        )}'''
content = content.replace(footer_old, footer_new)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Changes applied successfully!")
