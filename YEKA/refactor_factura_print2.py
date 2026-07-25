import sys

path = r'c:\Users\gilda\PROYECTOS\YEKA\frontend\src\modules\facturas\FacturaPrint.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

start_idx = content.find('export function imprimirEtiquetas(')
if start_idx == -1:
    print('imprimirEtiquetas not found')
    sys.exit(1)

new_fn = '''export function imprimirEtiquetas({ factura, tiposPrenda, configuracion, tiposArreglo = [], zonas = [] }: EtiquetasPrintProps) {
  let conf = configuracion;
  if (!conf || !conf.EMPRESA_NOMBRE) {
    try {
      const stored = localStorage.getItem('yeka_config');
      if (stored) conf = JSON.parse(stored);
    } catch(e){}
  }

  const getTipoPrendaNombre = (id: number) =>
    tiposPrenda.find(t => t.id === id)?.nombre || `Tipo #${id}`;

  const totalPrendas = factura.prendas?.length || 0;

  const htmlContent = (factura.prendas || []).map((prenda, idx) => {
    const tipoPrenda = getTipoPrendaNombre(prenda.tipoPrendaId);
    
    // Fila Superior (Color, Marca, Talla)
    const infoArr = [];
    if (prenda.color) infoArr.push(`Color: ${prenda.color}`);
    if (prenda.marca) infoArr.push(`Marca: ${prenda.marca}`);
    if (prenda.talla) infoArr.push(`Talla: ${prenda.talla}`);
    const infoAdicional = infoArr.length > 0 ? ` - ${infoArr.join(' - ')}` : '';

    const codigoId = prenda.codigoQR ? `<div class="codigo">ID: ${prenda.codigoQR}</div>` : '';
    
    const fechaCompromiso = prenda.fechaCompromiso 
      ? `<div class="fecha">F. Compromiso: ${new Date(prenda.fechaCompromiso).toLocaleDateString()}</div>` 
      : '';
      
    const fechaRecepcion = factura.createdAt 
      ? `<div class="fecha-recepcion">F. Recepción: ${new Date(factura.createdAt).toLocaleDateString()}</div>` 
      : '';

    let serviciosHtml = '';
    const valTotal = (prenda.servicios || []).reduce((acc, s) => acc + Number(s.precioFinal), 0);

    if (prenda.servicios && prenda.servicios.length > 0) {
      serviciosHtml = prenda.servicios.map(s => {
        const nombre = s.servicio?.tipoEspecifico || s.servicio?.nombre || 'Servicio';
        const arreglo = tiposArreglo.find(ta => ta.id === s.tipoArregloId)?.descripcion || '';
        const zona = zonas.find(z => z.id === s.zonaId)?.descripcion || '';
        const longitud = s.medidaEntregada ? `Longitud: ${s.medidaEntregada}` : '';
        const obs = s.observaciones ? `Obs: ${s.observaciones}` : '';
        
        const details = [nombre, arreglo, zona, longitud, obs].filter(Boolean).join(' - ');
        return `<li class="servicio-detail">${details}</li>`;
      }).join('');
      serviciosHtml = `<ul style="margin:0; padding-left:15px;">${serviciosHtml}</ul>`;
    } else {
      serviciosHtml = `<div class="servicio-detail">Sin servicios</div>`;
    }

    const obsPrenda = prenda.notas ? `<div class="obs"><strong>Observaciones:</strong> ${prenda.notas}</div>` : '';

    return `
      <div class="etiqueta">
        <div class="factura-num">Factura #${factura.numero} <span style="float:right;">Prenda ${idx + 1}/${totalPrendas}</span></div>
        <div class="tipo">${tipoPrenda.toUpperCase()}${infoAdicional}</div>
        ${codigoId}
        ${fechaCompromiso}
        
        <div class="servicios-box">
          <div style="font-weight:bold; font-size:12px; margin-bottom:4px;">Servicios:</div>
          ${serviciosHtml}
        </div>
        
        <div class="precio-total">TOTAL: €${valTotal.toFixed(2)}</div>
        ${obsPrenda}
        ${fechaRecepcion}
      </div>
      <div class="page-break"></div>
    `;
  }).join('');

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <title>Etiquetas ${factura.numero}</title>
  <style>
    @page { margin: 0; }
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #fff;
      color: #000;
      width: 58mm;
      box-sizing: border-box;
    }
    .etiqueta {
      /* Espacio superior para fijar/engrapar la etiqueta */
      padding-top: 2cm;
      padding-left: 4px;
      padding-right: 4px;
      padding-bottom: 8px;
      text-align: left;
      line-height: 1.2;
      border-bottom: 1px dashed #000;
    }
    .factura-num { font-weight: bold; font-size: 14px; margin-bottom: 5px; border-bottom: 1px solid #000; padding-bottom: 3px; }
    .tipo { font-size: 13px; font-weight: bold; margin-bottom: 3px; }
    .codigo { font-size: 11px; font-family: monospace; margin-bottom: 2px; }
    .fecha { font-size: 12px; margin-bottom: 5px; }
    .fecha-recepcion { font-size: 12px; margin-top: 5px; text-align: center; font-style: italic; border-top: 1px dashed #000; padding-top: 3px; }
    .servicios-box { margin-bottom: 5px; margin-top: 5px; border-top: 1px solid #000; padding-top: 3px; }
    .servicio-detail { font-size: 11px; margin-bottom: 2px; }
    .precio-total { font-size: 14px; font-weight: bold; text-align: right; margin-top: 5px; border-top: 1px dashed #000; padding-top: 3px; }
    .obs { font-size: 11px; margin-bottom: 3px; font-style: italic; margin-top: 5px; }
    .page-break { page-break-after: always; }
  </style>
</head>
<body>
  ${htmlContent || '<div style="text-align:center;padding:10px">Sin etiquetas</div>'}
  <script>window.onload = () => { window.print(); setTimeout(() => window.close(), 500); };</script>
</body>
</html>`;

  const win = window.open('', '_blank', 'width=400,height=600');
  if (!win) {
    alert('El navegador bloqueó la ventana emergente. Permite las ventanas emergentes para este sitio e inténtalo de nuevo.');
    return;
  }
  win.document.write(html);
  win.document.close();
}
'''

content = content[:start_idx] + new_fn

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("FacturaPrint updated successfully.")
