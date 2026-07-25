import sys

path = r'c:\Users\gilda\PROYECTOS\YEKA\frontend\src\modules\dashboard\DashboardTallerPage.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old_block = '''                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                            <div style={{ fontWeight: 'var(--font-medium)', fontSize: 'var(--text-lg)', textTransform: 'uppercase', color: 'var(--color-primary)' }}>
                              {tipo}
                            </div>
                            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', display: 'flex', gap: '8px', alignItems: 'center' }}>
                              {p.color && <span><strong>Color:</strong> {p.color}</span>}
                              {p.marca && <span><strong>Marca:</strong> {p.marca}</span>}
                              {p.talla && <span><strong>Talla:</strong> {p.talla}</span>}
                            </div>
                          </div>'''

new_block = '''                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
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
                            <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontFamily: 'monospace', letterSpacing: '0.05em' }}>
                              ID: {p.codigoQR}
                            </div>
                          </div>'''

if old_block not in content:
    print('Block not found')
    sys.exit(1)

content = content.replace(old_block, new_block)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated successfully")
