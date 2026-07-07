import type { Factura, TipoPrenda } from '../../shared/types';

interface FacturaPrintProps {
  factura: Factura;
  tiposPrenda: TipoPrenda[];
  configuracion?: any;
}

interface EtiquetasPrintProps {
  factura: Factura;
  tiposPrenda: TipoPrenda[];
  configuracion?: any;
}

/** Opens the browser print dialog with a styled invoice for a 58mm thermal printer */
export function imprimirFactura({ factura, tiposPrenda, configuracion }: FacturaPrintProps) {
  let conf = configuracion;
  if (!conf || !conf.EMPRESA_NOMBRE) {
    try {
      const stored = localStorage.getItem('yeka_config');
      if (stored) conf = JSON.parse(stored);
    } catch(e){}
  }

  const getTipoPrendaNombre = (id: number) =>
    tiposPrenda.find(t => t.id === id)?.nombre || `Tipo #${id}`;

  const fmt = (n: number | string) =>
    Number(n).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const fmtFecha = (iso: string | null | undefined) => {
    if (!iso) return '—';
    return new Date(iso).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const prendasHtml = (factura.prendas || []).map((prenda, idx) => {
    const tipoPrenda = getTipoPrendaNombre(prenda.tipoPrendaId);
    let urgencia = prenda.tipoUrgencia?.nombre || '';
    if (urgencia && (urgencia.includes('24') || urgencia.includes('48'))) {
      // keep it, or format it
    }

    const totalPrenda = (prenda.servicios || []).reduce((acc, s) => acc + Number(s.precioFinal), 0);
    
    const infoArr = [];
    if (prenda.color) infoArr.push(prenda.color);
    if (prenda.marca) infoArr.push(prenda.marca);
    const infoAdicional = infoArr.length > 0 ? ` (${infoArr.join(', ')})` : '';

    const observaciones: string[] = [];
    if (prenda.notas) observaciones.push(`Prenda: ${prenda.notas}`);
    prenda.servicios?.forEach(s => {
      if (s.observaciones) observaciones.push(`${s.servicio?.tipoEspecifico || 'Servicio'}: ${s.observaciones}`);
    });

    return `
      <div class="item-block">
        <div class="item-title">
          ${idx + 1}. ${tipoPrenda.toUpperCase()}${infoAdicional}
          ${urgencia ? `<div class="urgencia">${urgencia.toUpperCase()}</div>` : ''}
        </div>
        ${observaciones.length > 0 ? `<div class="item-obs">${observaciones.join('<br/>')}</div>` : ''}
        <div class="item-price">
          €${fmt(totalPrenda)}
        </div>
      </div>
    `;
  }).join('');

  const allFechas = (factura.prendas || [])
    .map(p => p.fechaCompromiso)
    .filter(Boolean) as string[];
  const fechaMaxima = allFechas.length
    ? allFechas.reduce((a, b) => (new Date(a) > new Date(b) ? a : b))
    : null;

  const ivaPorc = factura.impuestosJson?.iva ?? 21;
  const ivaMonto = Number(factura.impuestosJson?.monto ?? 0);
  const subtotal = Number(factura.subtotal);

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <title>Factura ${factura.numero}</title>
  <style>
    @page { margin: 0; }
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 13px;
      color: #000;
      background: #fff;
      margin: 0;
      padding: 10px 5px;
      width: 58mm; /* Ancho impresora térmica */
      box-sizing: border-box;
      line-height: 1.2;
    }
    .header { text-align: center; margin-bottom: 10px; border-bottom: 1px dashed #000; padding-bottom: 5px; }
    .header h1 { font-size: 18px; margin: 0 0 5px; font-weight: bold; }
    .header p { margin: 2px 0; font-size: 11px; }
    .header h2 { font-size: 15px; margin: 8px 0 2px; }
    .cliente-info { margin-bottom: 10px; padding-bottom: 5px; border-bottom: 1px dashed #000; font-size: 14px; }
    .item-block { margin-bottom: 8px; border-bottom: 1px dotted #000; padding-bottom: 5px; }
    .item-title { font-weight: bold; font-size: 14px; margin-bottom: 2px; }
    .urgencia { font-weight: bold; font-size: 14px; }
    .item-obs { font-size: 12px; margin-bottom: 3px; font-style: italic; }
    .item-price { text-align: right; font-weight: bold; font-size: 18px; margin-top: 4px; }
    .subtotal-row { display: flex; justify-content: space-between; font-size: 14px; margin-top: 10px; border-top: 1px dashed #000; padding-top: 5px; }
    .iva-row { display: flex; justify-content: space-between; font-size: 14px; margin-top: 2px; }
    .total-row { display: flex; justify-content: space-between; font-weight: bold; font-size: 18px; margin-top: 5px; padding-top: 5px; border-top: 1px dashed #000; }
    .fecha-comp { text-align: center; font-size: 13px; margin-top: 15px; border: 2px solid #000; padding: 5px; }
  </style>
</head>
<body>
    <div class="header">
      <h1>${conf?.EMPRESA_NOMBRE || 'Nombre de Empresa'}</h1>
      <p>NIF: ${conf?.EMPRESA_NIF || '---'}</p>
      <p>Tel: ${conf?.EMPRESA_TELEFONO || '---'} ${conf?.EMPRESA_WHATSAPP ? `| WA: ${conf.EMPRESA_WHATSAPP}` : ''}</p>
      <p>${conf?.EMPRESA_DIRECCION || '---'}</p>
      <h2>Factura #${factura.numero}</h2>
    </div>
  
  <div class="cliente-info">
    <div><strong>Cliente:</strong><br/>${factura.cliente?.nombre || 'Consumidor Final'}</div>
  </div>

  <div class="items">
    ${prendasHtml || '<div style="text-align:center">Sin prendas</div>'}
  </div>

  <div class="subtotal-row">
    <span>Subtotal</span>
    <span>€${fmt(subtotal)}</span>
  </div>
  <div class="iva-row">
    <span>IVA (${ivaPorc}%)</span>
    <span>€${fmt(ivaMonto)}</span>
  </div>
  <div class="total-row">
    <span>TOTAL</span>
    <span>€${fmt(factura.total)}</span>
  </div>

  <div class="fecha-comp">
    <div><strong>FECHA DE RECEPCIÓN:</strong><br/>${fmtFecha(factura.createdAt)}</div>
    ${fechaMaxima ? `<div style="margin-top:5px;"><strong>FECHA DE COMPROMISO:</strong><br/>${fmtFecha(fechaMaxima)}</div>` : ''}
  </div>

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

/** Opens a print window with 58mm labels per prenda/servicio */
export function imprimirEtiquetas({ factura, tiposPrenda, configuracion }: EtiquetasPrintProps) {
  let conf = configuracion;
  if (!conf || !conf.EMPRESA_NOMBRE) {
    try {
      const stored = localStorage.getItem('yeka_config');
      if (stored) conf = JSON.parse(stored);
    } catch(e){}
  }

  const getTipoPrendaNombre = (id: number) =>
    tiposPrenda.find(t => t.id === id)?.nombre || `Tipo #${id}`;

  const clienteNombre = factura.cliente?.nombre || 'Consumidor Final';
  const totalPrendas = factura.prendas?.length || 0;

  const htmlContent = (factura.prendas || []).map((prenda, idx) => {
    const tipoPrenda = getTipoPrendaNombre(prenda.tipoPrendaId);
    
    const infoArr = [];
    if (prenda.color) infoArr.push(prenda.color);
    if (prenda.marca) infoArr.push(prenda.marca);
    const infoAdicional = infoArr.length > 0 ? ` (${infoArr.join(', ')})` : '';

    const renderEtiqueta = (servicioObj: any, observaciones?: string) => {
      let servicioHtml = '';
      if (servicioObj) {
        const nombre = servicioObj.servicio?.tipoEspecifico || servicioObj.servicio?.nombre || 'Servicio';
        const medida = servicioObj.medidaEntregada ? ` | Medida: ${servicioObj.medidaEntregada}cm` : '';
        const precio = servicioObj.precioFinal ? ` | €${Number(servicioObj.precioFinal).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '';
        const obsText = observaciones ? ` ${observaciones}` : '';
        servicioHtml = `<div class="servicio-detail"><strong>${nombre.toUpperCase()}:</strong>${obsText}${medida}${precio}</div>`;
      } else {
        servicioHtml = `<div class="servicio-detail"><strong>SIN SERVICIO:</strong> ${observaciones || ''}</div>`;
      }

      return `
        <div class="etiqueta">
          <div class="factura-num">Factura #${factura.numero}</div>
          <div class="prenda-num">Prenda ${idx + 1}/${totalPrendas}</div>
          <div class="cliente">${clienteNombre}</div>
          <div class="tipo">${tipoPrenda.toUpperCase()}${infoAdicional}</div>
          ${servicioHtml}
        </div>
        <div class="page-break"></div>
      `;
    };

    if (prenda.servicios && prenda.servicios.length > 0) {
      return prenda.servicios.map(s => {
        return renderEtiqueta(s, s.observaciones || prenda.notas || '');
      }).join('');
    } else {
      return renderEtiqueta(null, prenda.notas || '');
    }
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
      width: 58mm; /* Ancho impresora térmica */
      box-sizing: border-box;
    }
    .etiqueta {
      padding: 8px 4px;
      text-align: left;
      line-height: 1.2;
      border-bottom: 1px dashed #000; /* Para saber donde cortar si no hay page-break */
    }
    .factura-num { font-weight: bold; font-size: 15px; margin-bottom: 2px; }
    .prenda-num { font-weight: bold; font-size: 13px; margin-bottom: 3px; }
    .cliente { font-size: 14px; margin-bottom: 3px; font-weight: bold; text-decoration: underline; }
    .tipo { font-size: 14px; font-weight: bold; margin-bottom: 3px; }
    .servicio-detail { font-size: 13px; margin-bottom: 3px; margin-top: 3px; border-top: 1px solid #000; padding-top: 3px; }
    .obs { font-size: 12px; margin-bottom: 3px; font-style: italic; border: 1px solid #000; padding: 2px; margin-top: 3px; }
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
