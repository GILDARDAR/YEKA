import sys

path = r'c:\Users\gilda\PROYECTOS\YEKA\frontend\src\modules\dashboard\DashboardTallerPage.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

header_start_str = '''      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="page-title">Dashboard de Taller</h1>
          <p className="page-subtitle">
            {user?.nombre} · {new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>'''

if header_start_str not in content:
    print('Header not found')
    sys.exit(1)

search_block_start = '          {/* Buscar Facturas */}'
search_block_end = 'Ir a todas las facturas\n              </Link>\n            </div>\n          </div>'

start_idx = content.find(search_block_start)
end_idx = content.find(search_block_end) + len(search_block_end)

if start_idx == -1 or end_idx < len(search_block_end):
    print('Search block not found')
    sys.exit(1)

search_block = content[start_idx:end_idx]

content = content[:start_idx] + content[end_idx:]

search_block = search_block.replace('className="card"', 'className="card" style={{ width: \'320px\', padding: \'12px 16px\', margin: 0 }}')
search_block = search_block.replace('style={{ fontSize: \'var(--text-sm)\', textTransform: \'uppercase\', letterSpacing: \'0.05em\', color: \'var(--color-text-muted)\' }}', 'style={{ fontSize: \'var(--text-sm)\', textTransform: \'uppercase\', letterSpacing: \'0.05em\', color: \'var(--color-text-muted)\', marginBottom: \'8px\' }}')

new_header = '''      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="page-title">Dashboard de Taller</h1>
          <p className="page-subtitle">
            {user?.nombre} · {new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
''' + search_block + '''
      </div>'''

content = content.replace(header_start_str, new_header)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Successfully moved block')
