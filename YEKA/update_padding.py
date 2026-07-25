import sys

path = r'c:\Users\gilda\PROYECTOS\YEKA\frontend\src\modules\dashboard\DashboardTallerPage.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old_str = '<div key={p.id} className="card" style={{ padding: \'16px\', margin: 0, border: \'1px solid var(--color-border)\', borderRadius: \'var(--radius-lg)\' }}>'
new_str = '<div key={p.id} className="card" style={{ padding: \'0.5rem\', margin: 0, border: \'1px solid var(--color-border)\', borderRadius: \'var(--radius-lg)\' }}>'

if old_str not in content:
    print('Could not find the target string.')
    sys.exit(1)

content = content.replace(old_str, new_str)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated padding successfully.")
