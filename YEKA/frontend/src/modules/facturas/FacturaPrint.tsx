import type { Factura, TipoPrenda } from '../../shared/types';

interface FacturaPrintProps {
  factura: Factura;
  tiposPrenda: TipoPrenda[];
}

interface EtiquetasPrintProps {
  factura: Factura;
  tiposPrenda: TipoPrenda[];
}

/** Opens the browser print dialog with a styled invoice in a new window */
export function imprimirFactura({ factura, tiposPrenda }: FacturaPrintProps) {
  const getTipoPrendaNombre = (id: number) =>
    tiposPrenda.find(t => t.id === id)?.nombre || `Tipo #${id}`;

  const fmt = (n: number | string) =>
    Number(n).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const fmtFecha = (iso: string | null | undefined) => {
    if (!iso) return '—';
    return new Date(iso).toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  // ─── Build prenda cards HTML ────────────────────────────────────────────
  const prendasHtml = (factura.prendas || []).map((prenda, idx) => {
    const tipoPrenda = getTipoPrendaNombre(prenda.tipoPrendaId);
    const urgencia = prenda.tipoUrgencia?.nombre || '';

    const serviciosHtml = (prenda.servicios || []).map(s => `
      <div class="servicio-card">
        <div class="servicio-header">
          <span class="servicio-nombre">${s.servicio?.nombre || s.servicio?.tipoEspecifico || 'Servicio'}</span>
          <span class="servicio-precio">€${fmt(s.precioFinal)}</span>
        </div>
        ${s.medidaEntregada ? `<div class="servicio-detail"><span class="detail-label">Medida:</span> ${s.medidaEntregada} cm</div>` : ''}
        ${s.tiempoCalculado ? `<div class="servicio-detail"><span class="detail-label">Tiempo:</span> ${s.tiempoCalculado} min</div>` : ''}
        ${s.observaciones ? `<div class="servicio-detail"><span class="detail-label">Observaciones:</span> ${s.observaciones}</div>` : ''}
      </div>
    `).join('');

    const fechaComp = prenda.fechaCompromiso ? fmtFecha(prenda.fechaCompromiso) : null;

    return `
      <div class="prenda-card">
        <div class="prenda-header">
          <div class="prenda-badge">${idx + 1}</div>
          <div class="prenda-info">
            <div class="prenda-tipo">${tipoPrenda.toUpperCase()}</div>
            <div class="prenda-meta">
              <span><strong>Marca:</strong> ${prenda.marca || '—'}</span>
              <span class="sep">·</span>
              <span><strong>Color:</strong> ${prenda.color}</span>
              ${prenda.talla ? `<span class="sep">·</span><span><strong>Talla:</strong> ${prenda.talla}</span>` : ''}
              ${prenda.esLujo ? `<span class="sep">·</span><span class="lujo-badge">✦ Alta Costura</span>` : ''}
              ${urgencia ? `<span class="sep">·</span><span class="urgencia-badge">⚡ ${urgencia}</span>` : ''}
            </div>
          </div>
        </div>

        ${serviciosHtml
          ? `<div class="servicios-list">${serviciosHtml}</div>`
          : `<div class="sin-servicios">Sin servicios asignados</div>`}

        ${prenda.notas
          ? `<div class="prenda-notas"><span class="detail-label">📝 Observaciones de la prenda:</span> ${prenda.notas}</div>`
          : ''}

        ${fechaComp
          ? `<div class="prenda-fecha-comp"><span>📅 Fecha de entrega comprometida:</span> <strong>${fechaComp}</strong></div>`
          : ''}
      </div>
    `;
  }).join('');

  // ─── Global earliest commitment date ────────────────────────────────────
  const allFechas = (factura.prendas || [])
    .map(p => p.fechaCompromiso)
    .filter(Boolean) as string[];
  const fechaMaxima = allFechas.length
    ? allFechas.reduce((a, b) => (new Date(a) > new Date(b) ? a : b))
    : null;

  // ─── Totals ──────────────────────────────────────────────────────────────
  const ivaPorc = factura.impuestosJson?.iva ?? 21;
  const ivaMonto = Number(factura.impuestosJson?.monto ?? 0);
  const subtotal = Number(factura.subtotal);
  const total = Number(factura.total);
  const abonado = (factura.abonos || []).reduce((s, a) => s + Number(a.monto), 0);
  const restante = Math.max(0, total - abonado);

  // ─── HTML document ───────────────────────────────────────────────────────
  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <title>Factura ${factura.numero}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      color: #1e293b;
      background: #fff;
      padding: 32px 40px;
    }

    /* ── HEADER ── */
    .doc-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding-bottom: 24px;
      border-bottom: 3px solid #4f46e5;
      margin-bottom: 28px;
    }
    .shop-brand {
      display: flex;
      align-items: flex-start;
      gap: 16px;
    }
    .logo-box {
      width: 72px;
      height: 72px;
      border: 2px dashed #c7d2fe;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #a5b4fc;
      font-size: 10px;
      text-align: center;
      padding: 6px;
      flex-shrink: 0;
    }
    .shop-info h1 {
      font-size: 20px;
      font-weight: 700;
      color: #4f46e5;
      margin-bottom: 4px;
    }
    .shop-info p {
      font-size: 12px;
      color: #64748b;
      line-height: 1.6;
    }
    .doc-meta {
      text-align: right;
    }
    .doc-meta .factura-num {
      font-size: 22px;
      font-weight: 700;
      color: #1e293b;
    }
    .doc-meta p {
      font-size: 12px;
      color: #64748b;
      margin-top: 4px;
    }
    .doc-meta .estado-badge {
      display: inline-block;
      margin-top: 6px;
      padding: 2px 10px;
      border-radius: 99px;
      font-size: 11px;
      font-weight: 600;
      background: #e0e7ff;
      color: #4338ca;
    }

    /* ── CLIENT SECTION ── */
    .section-client {
      display: flex;
      gap: 32px;
      margin-bottom: 24px;
      background: #f8fafc;
      border-radius: 12px;
      padding: 16px 20px;
    }
    .client-block h3 {
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: .08em;
      color: #94a3b8;
      margin-bottom: 6px;
    }
    .client-block p {
      font-weight: 500;
      font-size: 13px;
    }
    .client-block p.sub {
      color: #64748b;
      font-size: 12px;
      font-weight: 400;
    }

    /* ── TOTALS ── */
    .totals-row {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 28px;
    }
    .totals-table {
      min-width: 260px;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      overflow: hidden;
    }
    .totals-table .row {
      display: flex;
      justify-content: space-between;
      padding: 8px 16px;
      border-bottom: 1px solid #f1f5f9;
      font-size: 13px;
    }
    .totals-table .row:last-child { border-bottom: none; }
    .totals-table .row.total-final {
      background: #4f46e5;
      color: #fff;
      font-weight: 700;
      font-size: 15px;
    }
    .totals-table .row.abonado { color: #16a34a; }
    .totals-table .row.restante { color: #dc2626; font-weight: 600; }

    /* ── SECTION TITLE ── */
    .section-title {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .07em;
      color: #4f46e5;
      margin-bottom: 14px;
      padding-bottom: 6px;
      border-bottom: 1px solid #e0e7ff;
    }

    /* ── PRENDA CARD ── */
    .prenda-card {
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      margin-bottom: 20px;
      overflow: hidden;
      page-break-inside: avoid;
    }
    .prenda-header {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 14px 18px;
      background: #f1f5f9;
      border-bottom: 1px solid #e2e8f0;
    }
    .prenda-badge {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #4f46e5;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 13px;
      flex-shrink: 0;
    }
    .prenda-tipo {
      font-weight: 700;
      font-size: 14px;
      color: #1e293b;
      margin-bottom: 4px;
    }
    .prenda-meta {
      font-size: 12px;
      color: #475569;
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      align-items: center;
    }
    .sep { color: #cbd5e1; }
    .lujo-badge {
      background: #fef9c3;
      color: #854d0e;
      border-radius: 4px;
      padding: 1px 6px;
      font-size: 11px;
      font-weight: 600;
    }
    .urgencia-badge {
      background: #fee2e2;
      color: #b91c1c;
      border-radius: 4px;
      padding: 1px 6px;
      font-size: 11px;
      font-weight: 600;
    }

    /* ── SERVICIOS ── */
    .servicios-list { padding: 12px 18px; }
    .servicio-card {
      padding: 10px 12px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      margin-bottom: 8px;
      background: #fff;
    }
    .servicio-card:last-child { margin-bottom: 0; }
    .servicio-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 4px;
    }
    .servicio-nombre {
      font-weight: 600;
      font-size: 13px;
      color: #1e293b;
    }
    .servicio-precio {
      font-weight: 700;
      color: #4f46e5;
      font-size: 14px;
    }
    .servicio-detail {
      font-size: 11.5px;
      color: #64748b;
      margin-top: 2px;
    }
    .detail-label { font-weight: 600; color: #475569; }

    .sin-servicios {
      padding: 12px 18px;
      color: #94a3b8;
      font-style: italic;
      font-size: 12px;
    }

    /* ── PRENDA NOTAS & FECHA ── */
    .prenda-notas {
      margin: 0 18px 12px;
      padding: 8px 12px;
      background: #fffbeb;
      border-left: 3px solid #fbbf24;
      border-radius: 0 6px 6px 0;
      font-size: 12px;
      color: #78350f;
    }
    .prenda-fecha-comp {
      margin: 0 18px 14px;
      font-size: 12px;
      color: #0f172a;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    /* ── GLOBAL COMMITMENT DATE ── */
    .fecha-global {
      margin-top: 28px;
      padding: 16px 20px;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-radius: 12px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .fecha-global .icon { font-size: 22px; }
    .fecha-global .label { font-size: 12px; color: #3b82f6; font-weight: 600; text-transform: uppercase; letter-spacing: .06em; }
    .fecha-global .date { font-size: 16px; font-weight: 700; color: #1e40af; }

    /* ── FOOTER ── */
    .doc-footer {
      margin-top: 36px;
      padding-top: 14px;
      border-top: 1px solid #e2e8f0;
      text-align: center;
      font-size: 11px;
      color: #94a3b8;
    }

    /* ── ABONOS ── */
    .abonos-section {
      margin-top: 28px;
      page-break-inside: avoid;
    }
    .abonos-table {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      overflow: hidden;
      font-size: 12.5px;
    }
    .abonos-table thead tr {
      background: #f1f5f9;
    }
    .abonos-table th {
      padding: 9px 14px;
      text-align: left;
      font-weight: 600;
      color: #475569;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: .06em;
    }
    .abonos-table th.right,
    .abonos-table td.right { text-align: right; }
    .abonos-table td {
      padding: 8px 14px;
      border-top: 1px solid #f1f5f9;
      color: #334155;
    }
    .abonos-table tr:last-child td { border-top: 1px solid #e2e8f0; }
    .metodo-badge {
      display: inline-block;
      padding: 1px 8px;
      border-radius: 99px;
      font-size: 10.5px;
      font-weight: 600;
      background: #e0e7ff;
      color: #4338ca;
    }
    .abonos-summary {
      display: flex;
      justify-content: flex-end;
      gap: 32px;
      margin-top: 10px;
      font-size: 12.5px;
    }
    .abonos-summary .item { display: flex; gap: 8px; align-items: baseline; }
    .abonos-summary .item .lbl { color: #64748b; }
    .abonos-summary .item .val { font-weight: 700; font-size: 14px; }
    .abonos-summary .item .val.green { color: #16a34a; }
    .abonos-summary .item .val.red   { color: #dc2626; }

    /* ── PRINT ── */
    @media print {
      body { padding: 20px 28px; }
      .prenda-card { page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- ▸ HEADER -->
  <div class="doc-header">
    <div class="shop-brand">
      <div class="logo-box">LOGO<br/>TALLER</div>
      <div class="shop-info">
        <h1>Nombre del Taller</h1>
        <p>Dirección del establecimiento</p>
        <p>Tel: +34 600 000 000</p>
        <p>NIF: B00000000</p>
        <p>email@taller.com</p>
      </div>
    </div>
    <div class="doc-meta">
      <div class="factura-num">Factura ${factura.numero}</div>
      <p>Fecha de emisión: ${fmtFecha(factura.createdAt)}</p>
      <span class="estado-badge">${factura.estadoPago}</span>
    </div>
  </div>

  <!-- ▸ CLIENT -->
  <div class="section-client">
    <div class="client-block">
      <h3>Cliente</h3>
      <p>${factura.cliente?.nombre || 'Consumidor Final'}</p>
      ${factura.cliente?.dni ? `<p class="sub">DNI/NIF: ${factura.cliente.dni}</p>` : ''}
      ${factura.cliente?.celular ? `<p class="sub">Tel: ${factura.cliente.celular}</p>` : ''}
      ${factura.cliente?.email ? `<p class="sub">${factura.cliente.email}</p>` : ''}
    </div>
    ${factura.notas ? `
    <div class="client-block">
      <h3>Notas</h3>
      <p class="sub">${factura.notas}</p>
    </div>` : ''}
  </div>

  <!-- ▸ TOTALS -->
  <div class="totals-row">
    <div class="totals-table">
      <div class="row"><span>Subtotal servicios</span><span>€${fmt(subtotal)}</span></div>
      <div class="row"><span>IVA (${ivaPorc}%)</span><span>€${fmt(ivaMonto)}</span></div>
      <div class="row total-final"><span>TOTAL</span><span>€${fmt(total)}</span></div>
      ${abonado > 0 ? `
      <div class="row abonado"><span>Abonado</span><span>€${fmt(abonado)}</span></div>
      <div class="row restante"><span>Pendiente</span><span>€${fmt(restante)}</span></div>
      ` : ''}
    </div>
  </div>

  <!-- ▸ PRENDAS -->
  <div class="section-title">Prendas y Servicios</div>
  ${prendasHtml || '<p style="color:#94a3b8;font-style:italic">Sin prendas registradas</p>'}

  <!-- ▸ GLOBAL COMMITMENT DATE -->
  ${fechaMaxima ? `
  <div class="fecha-global">
    <div class="icon">📅</div>
    <div>
      <div class="label">Fecha máxima de entrega</div>
      <div class="date">${fmtFecha(fechaMaxima)}</div>
    </div>
  </div>` : ''}

  <!-- ▸ ABONOS -->
  ${(factura.abonos && factura.abonos.length > 0) ? `
  <div class="abonos-section">
    <div class="section-title" style="margin-top:28px">Historial de Pagos</div>
    <table class="abonos-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Fecha</th>
          <th>Método</th>
          <th>Notas</th>
          <th class="right">Monto</th>
        </tr>
      </thead>
      <tbody>
        ${factura.abonos.map((a, i) => `
        <tr>
          <td style="color:#94a3b8">${i + 1}</td>
          <td>${fmtFecha(a.fecha)}</td>
          <td><span class="metodo-badge">${a.metodoPago}</span></td>
          <td style="color:#64748b">${a.notas || '—'}</td>
          <td class="right" style="font-weight:600;color:#16a34a">€${fmt(a.monto)}</td>
        </tr>`).join('')}
      </tbody>
    </table>
    <div class="abonos-summary">
      <div class="item">
        <span class="lbl">Total abonado:</span>
        <span class="val green">€${fmt(abonado)}</span>
      </div>
      <div class="item">
        <span class="lbl">Saldo pendiente:</span>
        <span class="val ${restante > 0 ? 'red' : 'green'}">€${fmt(restante)}</span>
      </div>
    </div>
  </div>` : ''}

  <!-- ▸ FOOTER -->
  <div class="doc-footer">
    Generado el ${new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
    · ${factura.numero}
  </div>

  <script>window.onload = () => window.print();</script>
</body>
</html>`;

  const win = window.open('', '_blank', 'width=900,height=700');
  if (!win) {
    alert('El navegador bloqueó la ventana emergente. Permite las ventanas emergentes para este sitio e inténtalo de nuevo.');
    return;
  }
  win.document.write(html);
  win.document.close();
}

/** Opens a print window with one sticky label per prenda */
export function imprimirEtiquetas({ factura, tiposPrenda }: EtiquetasPrintProps) {
  const getTipoPrendaNombre = (id: number) =>
    tiposPrenda.find(t => t.id === id)?.nombre || `Tipo #${id}`;

  const clienteNombre = factura.cliente?.nombre || 'Consumidor Final';

  const etiquetasHtml = (factura.prendas || []).map((prenda, idx) => {
    const tipoPrenda = getTipoPrendaNombre(prenda.tipoPrendaId);
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(prenda.codigoQR)}&bgcolor=ffffff&color=1e293b&margin=4`;

    const serviciosHtml = (prenda.servicios || []).length > 0
      ? (prenda.servicios || []).map(s =>
          `<li>${s.servicio?.nombre || s.servicio?.tipoEspecifico || 'Servicio'}</li>`
        ).join('')
      : '<li style="color:#94a3b8;font-style:italic">Sin servicios</li>';

    return `
      <div class="etiqueta">
        <div class="etiqueta-qr">
          <img src="${qrUrl}" width="150" height="150" alt="QR ${prenda.codigoQR}" />
          <div class="codigo-texto">${prenda.codigoQR}</div>
        </div>
        <div class="etiqueta-info">
          <div class="etiqueta-num">#${idx + 1}</div>
          <div class="etiqueta-cliente">${clienteNombre}</div>
          <div class="etiqueta-tipo">${tipoPrenda.toUpperCase()}</div>
          ${prenda.marca ? `<div class="etiqueta-marca">${prenda.marca} · ${prenda.color}</div>` : `<div class="etiqueta-marca">${prenda.color}</div>`}
          <div class="etiqueta-servicios-label">Servicios:</div>
          <ul class="etiqueta-servicios">${serviciosHtml}</ul>
          ${prenda.fechaCompromiso
            ? `<div class="etiqueta-fecha">📅 ${new Date(prenda.fechaCompromiso).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })}</div>`
            : ''}
        </div>
      </div>
    `;
  }).join('');

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <title>Etiquetas · Factura ${factura.numero}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Inter', sans-serif;
      background: #fff;
      padding: 16px;
    }

    /* page title (hidden when printing) */
    .page-title {
      font-size: 13px;
      color: #64748b;
      margin-bottom: 16px;
      text-align: center;
    }

    /* 2-column grid */
    .etiquetas-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    /* each label */
    .etiqueta {
      display: flex;
      flex-direction: row;
      gap: 0;
      border: 1.5px solid #cbd5e1;
      border-radius: 10px;
      overflow: hidden;
      min-height: 170px;
      page-break-inside: avoid;
      background: #fff;
    }

    /* left: QR */
    .etiqueta-qr {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 12px 10px;
      background: #f8fafc;
      border-right: 1.5px solid #e2e8f0;
      min-width: 170px;
    }
    .etiqueta-qr img {
      display: block;
      border-radius: 6px;
    }
    .codigo-texto {
      margin-top: 6px;
      font-size: 9px;
      font-weight: 600;
      color: #64748b;
      letter-spacing: .04em;
      text-align: center;
      word-break: break-all;
    }

    /* right: info */
    .etiqueta-info {
      flex: 1;
      padding: 12px 14px;
      display: flex;
      flex-direction: column;
      gap: 3px;
      overflow: hidden;
    }
    .etiqueta-num {
      font-size: 10px;
      font-weight: 600;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: .08em;
    }
    .etiqueta-cliente {
      font-size: 14px;
      font-weight: 700;
      color: #1e293b;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .etiqueta-tipo {
      font-size: 12px;
      font-weight: 600;
      color: #4f46e5;
      margin-top: 2px;
    }
    .etiqueta-marca {
      font-size: 11px;
      color: #64748b;
    }
    .etiqueta-servicios-label {
      font-size: 10px;
      font-weight: 600;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: .06em;
      margin-top: 6px;
    }
    .etiqueta-servicios {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .etiqueta-servicios li {
      font-size: 11px;
      color: #334155;
      padding: 1px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .etiqueta-servicios li::before {
      content: '• ';
      color: #4f46e5;
      font-weight: 700;
    }
    .etiqueta-fecha {
      margin-top: auto;
      padding-top: 6px;
      font-size: 10.5px;
      color: #0369a1;
      font-weight: 600;
    }

    @media print {
      .page-title { display: none; }
      body { padding: 8px; }
      .etiquetas-grid { gap: 8px; }
      .etiqueta { border-color: #94a3b8; }
    }
  </style>
</head>
<body>
  <div class="page-title">Etiquetas de prendas · Factura ${factura.numero} · ${clienteNombre}</div>
  <div class="etiquetas-grid">
    ${etiquetasHtml || '<p style="color:#94a3b8;text-align:center">Sin prendas</p>'}
  </div>
  <script>window.onload = () => window.print();</script>
</body>
</html>`;

  const win = window.open('', '_blank', 'width=900,height=700');
  if (!win) {
    alert('El navegador bloqueó la ventana emergente. Permite las ventanas emergentes para este sitio e inténtalo de nuevo.');
    return;
  }
  win.document.write(html);
  win.document.close();
}
