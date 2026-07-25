import sys

path = r'c:\Users\gilda\PROYECTOS\YEKA\frontend\src\modules\dashboard\DashboardTallerPage.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the card header and remove the bottom price
# Look for the map section
start_str = 'const val = p.servicios?.reduce((acc, s) => acc + Number(s.precioFinal), 0) || 0;'
if start_str not in content:
    print('Cannot find start_str')
    sys.exit(1)

# I will just write the new layout for the card:
# I will replace the block from 'return (' to the end of the card '</div>'
# But it's safer to find the specific chunks.

# 1. Replace the top right section
old_header_right = '''                          {p.fechaCompromiso && (
                            <div style={{ fontSize: '12px', color: 'var(--color-info)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'var(--font-medium)', backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '4px 8px', borderRadius: '4px' }}>
                              <Calendar size={14} /> F. Compromiso: {new Date(p.fechaCompromiso).toLocaleDateString()}
                            </div>
                          )}'''

new_header_right = '''                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                            <div style={{ fontSize: 'var(--text-xl)', fontWeight: 'bold', color: 'var(--color-text)' }}>
                              €{val.toFixed(2)}
                            </div>
                            {p.fechaCompromiso && (
                              <div style={{ fontSize: '12px', color: 'var(--color-info)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'var(--font-medium)', backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '4px 8px', borderRadius: '4px' }}>
                                <Calendar size={14} /> F. Compromiso: {new Date(p.fechaCompromiso).toLocaleDateString()}
                              </div>
                            )}
                          </div>'''
content = content.replace(old_header_right, new_header_right)


# 2. Add Longitud to services
old_services = '''                                const cs = catalogoServicios.find(c => c.id === s.servicioId);
                                const servicioNombre = cs ? cs.tipoEspecifico : 'Servicio';
                                const arreglo = tiposArreglo.find(ta => ta.id === s.tipoArregloId)?.descripcion || '';
                                const zona = zonas.find(z => z.id === s.zonaId)?.descripcion || '';
                                const details = [servicioNombre, arreglo, zona].filter(Boolean).join(' - ');'''

new_services = '''                                const cs = catalogoServicios.find(c => c.id === s.servicioId);
                                const servicioNombre = cs ? cs.tipoEspecifico : 'Servicio';
                                const arreglo = tiposArreglo.find(ta => ta.id === s.tipoArregloId)?.descripcion || '';
                                const zona = zonas.find(z => z.id === s.zonaId)?.descripcion || '';
                                const longitud = s.medidaEntregada ? `Longitud: ${s.medidaEntregada}` : '';
                                const details = [servicioNombre, arreglo, zona, longitud].filter(Boolean).join(' - ');'''
content = content.replace(old_services, new_services)

# 3. Remove the old price row
old_price_row = '''                        {/* PRECIO (Alineado a la derecha) */}
                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid var(--color-border)', paddingBottom: '16px' }}>
                           <div style={{ fontSize: 'var(--text-xl)', fontWeight: 'bold', color: 'var(--color-text)' }}>
                             €{val.toFixed(2)}
                           </div>
                        </div>'''

new_price_row = '''                        {/* SEPARATOR */}
                        <div style={{ marginBottom: '16px', borderBottom: '1px solid var(--color-border)' }}></div>'''

content = content.replace(old_price_row, new_price_row)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Successfully modified card layout")
