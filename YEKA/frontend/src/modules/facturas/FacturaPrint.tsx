import type { Factura, TipoPrenda } from '../../shared/types';

interface FacturaPrintProps {
  factura: Factura;
  tiposPrenda: TipoPrenda[];
  configuracion?: any;
  tiposArreglo?: any[];
  zonas?: any[];
}

interface EtiquetasPrintProps {
  factura: Factura;
  tiposPrenda: TipoPrenda[];
  configuracion?: any;
  tiposArreglo?: any[];
  zonas?: any[];
}

/** Opens the browser print dialog with a styled invoice for a 58mm thermal printer */
export function imprimirFactura({ factura, tiposPrenda, configuracion, tiposArreglo = [], zonas = [] }: FacturaPrintProps) {
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

    const infoArr = [];
    if (prenda.color) infoArr.push(`Color: <strong>${prenda.color}</strong>`);
    if (prenda.marca) infoArr.push(`Marca: <strong>${prenda.marca}</strong>`);
    if (prenda.talla) infoArr.push(`Talla: <strong>${prenda.talla}</strong>`);
    const infoAdicional = infoArr.length > 0 ? `<div class="info-adicional">${infoArr.join(' &nbsp; ')}</div>` : '';

    const codigoId = prenda.codigoQR ? `<div class="codigo">ID: ${prenda.codigoQR}</div>` : '';
    const fechaCompromiso = prenda.fechaCompromiso ? `<div class="fecha">F. Compromiso: ${new Date(prenda.fechaCompromiso).toLocaleDateString()}</div>` : '';

    const valTotal = (prenda.servicios || []).reduce((acc, s) => acc + Number(s.precioFinal), 0);

    let serviciosHtml = '';
    if (prenda.servicios && prenda.servicios.length > 0) {
      serviciosHtml = prenda.servicios.map(s => {
        const nombre = s.servicio?.tipoEspecifico || s.servicio?.nombre || '';
        // Use nested object if available (from backend include), fallback to array lookup
        const arreglo = (s as any).tipoArreglo?.descripcion || tiposArreglo?.find((ta: any) => ta.id == s.tipoArregloId)?.descripcion || '';
        const zona = (s as any).zona?.descripcion || zonas?.find((z: any) => z.id == s.zonaId)?.descripcion || '';
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
      <div class="item-block">
        <div class="item-title">${idx + 1}. ${tipoPrenda.toUpperCase()}</div>
        ${infoAdicional}
        ${codigoId}
        ${fechaCompromiso}
        <div class="servicios-box">
          ${serviciosHtml}
        </div>
        <div class="item-price">
          €${fmt(valTotal)}
        </div>
        ${urgencia ? `<div class="urgencia">Atención: ${urgencia}</div>` : ''}
        ${obsPrenda}
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
    .info-adicional { font-size: 11px; margin-bottom: 3px; }
    .servicios-header { font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 4px; margin-top: 6px; }
    .codigo { font-size: 11px; font-family: monospace; margin-bottom: 2px; }
    .fecha { font-size: 12px; margin-bottom: 5px; }
    .servicios-box { margin-bottom: 5px; margin-top: 5px; border-top: 1px solid #ddd; padding-top: 3px; }
    .servicio-detail { font-size: 11px; margin-bottom: 2px; }
    .obs { font-size: 11px; margin-bottom: 3px; font-style: italic; margin-top: 5px; }
    .subtotal-row { display: flex; justify-content: space-between; font-size: 14px; margin-top: 10px; border-top: 1px dashed #000; padding-top: 5px; }
    .iva-row { display: flex; justify-content: space-between; font-size: 14px; margin-top: 2px; }
    .total-row { display: flex; justify-content: space-between; font-weight: bold; font-size: 18px; margin-top: 5px; padding-top: 5px; border-top: 1px dashed #000; }
    .abonos-section { margin-top: 8px; border-top: 1px dashed #000; padding-top: 5px; }
    .abonos-title { font-size: 12px; font-weight: bold; text-transform: uppercase; margin-bottom: 4px; }
    .abono-row { display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 2px; }
    .abono-metodo { font-size: 11px; color: #333; }
    .total-abonado-row { display: flex; justify-content: space-between; font-size: 14px; font-weight: bold; margin-top: 4px; border-top: 1px dotted #000; padding-top: 3px; }
    .saldo-row { display: flex; justify-content: space-between; font-weight: bold; font-size: 16px; margin-top: 5px; padding-top: 5px; border-top: 2px solid #000; }
    .saldo-pendiente { color: #000; }
    .saldo-cero { color: #000; }
    .fecha-comp { text-align: center; font-size: 13px; margin-top: 15px; border: 2px solid #000; padding: 5px; }
    .condiciones { margin-top: 12px; border-top: 1px dashed #000; padding-top: 6px; font-size: 10px; color: #444; line-height: 1.4; text-align: center; font-style: italic; white-space: pre-wrap; }
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

  ${(() => {
    const abonos = factura.abonos || [];
    if (abonos.length === 0) return '';
    const metodosLabel: Record<string, string> = {
      EFECTIVO: 'Efectivo',
      TARJETA: 'Tarjeta',
      TRANSFERENCIA: 'Transferencia',
      BIZUM: 'Bizum',
    };
    const totalAbonado = abonos.reduce((acc, a) => acc + Number(a.monto), 0);
    const saldo = Number(factura.total) - totalAbonado;
    const abonosRows = abonos.map((a, i) => {
      const label = metodosLabel[a.metodoPago] || a.metodoPago;
      const fecha = new Date(a.fecha).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
      const notas = a.notas ? ` (${a.notas})` : '';
      return `<div class="abono-row">
        <span class="abono-metodo">${i+1}. ${label} · ${fecha}${notas}</span>
        <span>€${fmt(a.monto)}</span>
      </div>`;
    }).join('');
    return `
      <div class="abonos-section">
        <div class="abonos-title">Abonos</div>
        ${abonosRows}
        <div class="total-abonado-row">
          <span>Total abonado</span>
          <span>€${fmt(totalAbonado)}</span>
        </div>
        <div class="saldo-row ${saldo <= 0 ? 'saldo-cero' : 'saldo-pendiente'}">
          <span>${saldo <= 0 ? '✓ SALDO' : 'SALDO PENDIENTE'}</span>
          <span>€${fmt(Math.max(0, saldo))}</span>
        </div>
      </div>`;
  })()}

  <div class="fecha-comp">
    <div><strong>FECHA DE RECEPCIÓN:</strong><br/>${fmtFecha(factura.createdAt)}</div>
    ${fechaMaxima ? `<div style="margin-top:5px;"><strong>FECHA DE COMPROMISO:</strong><br/>${fmtFecha(fechaMaxima)}</div>` : ''}
  </div>

  ${conf?.CONDICIONES_FACTURA ? `<div class="condiciones">${conf.CONDICIONES_FACTURA}</div>` : ''}

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
export function imprimirEtiquetas({ factura, tiposPrenda, configuracion, tiposArreglo = [], zonas = [] }: EtiquetasPrintProps) {
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
    if (prenda.color) infoArr.push(`Color: <strong>${prenda.color}</strong>`);
    if (prenda.marca) infoArr.push(`Marca: <strong>${prenda.marca}</strong>`);
    if (prenda.talla) infoArr.push(`Talla: <strong>${prenda.talla}</strong>`);
    const infoAdicional = infoArr.length > 0 ? `<div class="info-adicional">${infoArr.join(' &nbsp; ')}</div>` : '';

    const codigoId = prenda.codigoQR ? `<div class="codigo">ID: ${prenda.codigoQR}</div>` : '';
    
    const fechaCompromiso = prenda.fechaCompromiso 
      ? `<div class="fecha">F. Compromiso: ${new Date(prenda.fechaCompromiso).toLocaleDateString()}</div>` 
      : '';
      
    const fechaRecepcion = factura.createdAt 
      ? `<div class="fecha-recepcion">F. Recepcin: ${new Date(factura.createdAt).toLocaleDateString()}</div>` 
      : '';

    let urgenciaHtml = '';
    if (prenda.tipoUrgencia && prenda.tipoUrgencia.nombre) {
      urgenciaHtml = `<div style="font-size: 11px; margin-top: 3px;">Atencin: <strong>${prenda.tipoUrgencia.nombre}</strong></div>`;
    }

    let serviciosHtml = '';
    const valTotal = (prenda.servicios || []).reduce((acc, s) => acc + Number(s.precioFinal), 0);

    if (prenda.servicios && prenda.servicios.length > 0) {
      serviciosHtml = prenda.servicios.map(s => {
        const nombre = s.servicio?.tipoEspecifico || s.servicio?.nombre || '';
        // Use nested object if available (from backend include), fallback to array lookup
        const arreglo = (s as any).tipoArreglo?.descripcion || tiposArreglo?.find((ta: any) => ta.id == s.tipoArregloId)?.descripcion || '';
        const zona = (s as any).zona?.descripcion || zonas?.find((z: any) => z.id == s.zonaId)?.descripcion || '';
        const longitud = s.medidaEntregada ? `Longitud: ${s.medidaEntregada}` : '';
        const obs = s.observaciones ? `Obs: ${s.observaciones}` : '';
        
        const details = [nombre, arreglo, zona, longitud, obs].filter(Boolean).join(' - ');
        return `<li class="servicio-detail">${details}</li>`;
      }).join('');
      serviciosHtml = `<div class="servicios-header">Servicios Asignados (${prenda.servicios.length})</div><ul style="margin:0; padding-left:15px;">${serviciosHtml}</ul>`;
    } else {
      serviciosHtml = `<div class="servicio-detail">Sin servicios</div>`;
    }

    const obsPrenda = prenda.notas ? `<div class="obs"><strong>Observaciones:</strong> ${prenda.notas}</div>` : '';

    return `
      <div class="etiqueta">
        <div class="factura-num">Factura #${factura.numero} <span style="float:right;">Prenda ${idx + 1}/${totalPrendas}</span></div>
        <div class="tipo">${tipoPrenda.toUpperCase()}</div>
        ${infoAdicional}
        ${codigoId}
        ${fechaCompromiso}
        
        <div class="servicios-box">
          ${serviciosHtml}
        </div>
        
        <div class="precio-total">TOTAL: ${valTotal.toFixed(2)}</div>
        ${urgenciaHtml}
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
    .info-adicional { font-size: 11px; margin-bottom: 3px; }
    .servicios-header { font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 4px; }
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
