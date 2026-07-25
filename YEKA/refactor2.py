import os

path = r'c:\Users\gilda\PROYECTOS\YEKA\frontend\src\modules\facturas\FacturaDetail.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("srv?.categoria", "(srv?.tipoPrenda?.nombre || 'Sin Tipo de Prenda')")
content = content.replace("s.categoria", "(s.tipoPrenda?.nombre || 'Sin Tipo de Prenda')")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
