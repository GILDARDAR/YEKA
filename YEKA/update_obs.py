import sys

path = r'c:\Users\gilda\PROYECTOS\YEKA\frontend\src\modules\dashboard\DashboardTallerPage.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old_details = '''                                const longitud = s.medidaEntregada ? `Longitud: ${s.medidaEntregada}` : '';
                                const details = [servicioNombre, arreglo, zona, longitud].filter(Boolean).join(' - ');'''

new_details = '''                                const longitud = s.medidaEntregada ? `Longitud: ${s.medidaEntregada}` : '';
                                const obs = s.observaciones ? `Obs: ${s.observaciones}` : '';
                                const details = [servicioNombre, arreglo, zona, longitud, obs].filter(Boolean).join(' - ');'''

if old_details not in content:
    print('Could not find the target string.')
    sys.exit(1)

content = content.replace(old_details, new_details)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated successfully.")
