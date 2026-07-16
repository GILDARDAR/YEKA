const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'src', 'modules', 'prendas', 'PrendaModal.tsx');
let content = fs.readFileSync(filepath, 'utf8');

// 1. Add fetching logic and state
const stateDeclarations = `
  // Service Row State
  const [servicioSeleccionado, setServicioSeleccionado] = useState('');
  const [medidaEntregada, setMedidaEntregada] = useState<number | ''>('');
  const [observacionesServicio, setObservacionesServicio] = useState('');
  const [materialSeleccionado, setMaterialSeleccionado] = useState('');
  const [tipoArregloSeleccionado, setTipoArregloSeleccionado] = useState('');
  const [zonaSeleccionada, setZonaSeleccionada] = useState('');
  const [isCalculando, setIsCalculando] = useState(false);
  const [busquedaServicio, setBusquedaServicio] = useState('');
  const [tiposUrgencia, setTiposUrgencia] = useState<any[]>([]);

  const [materiales, setMateriales] = useState<any[]>([]);
  const [tiposArreglo, setTiposArreglo] = useState<any[]>([]);
  const [zonas, setZonas] = useState<any[]>([]);

  React.useEffect(() => {
    api.get('/tipo-urgencia').then(res => setTiposUrgencia(res.data)).catch(console.error);
    api.get('/material').then(res => setMateriales(res.data)).catch(console.error);
    api.get('/tipo-arreglo').then(res => setTiposArreglo(res.data)).catch(console.error);
    api.get('/zona').then(res => setZonas(res.data)).catch(console.error);
  }, []);
`;

content = content.replace(
  /  \/\/ Service Row State\n  const \[servicioSeleccionado, setServicioSeleccionado\] = useState\(''\);[\s\S]*?React\.useEffect\(\(\) => {\n    api\.get\('\/tipo-urgencia'\)\.then\(res => setTiposUrgencia\(res\.data\)\)\.catch\(console\.error\);\n  }, \[\]\);/m,
  stateDeclarations.trim()
);

// 2. Modify handleAddServicio
const handleAddServicioRepl = `
      await prendasService.asignarServicio(activePrenda.id, {
        servicioId: Number(servicioSeleccionado),
        medidaEntregada: medidaEntregada !== '' ? Number(medidaEntregada) : undefined,
        observaciones: observacionesServicio ? observacionesServicio : undefined,
        materialId: materialSeleccionado ? Number(materialSeleccionado) : undefined,
        tipoArregloId: tipoArregloSeleccionado ? Number(tipoArregloSeleccionado) : undefined,
        zonaId: zonaSeleccionada ? Number(zonaSeleccionada) : undefined,
      });
      
      const updated = await prendasService.getById(activePrenda.id);
      setActivePrenda(updated);
      setServicioSeleccionado('');
      setMedidaEntregada('');
      setObservacionesServicio('');
      setMaterialSeleccionado('');
      setTipoArregloSeleccionado('');
      setZonaSeleccionada('');
`;

content = content.replace(
  /      await prendasService\.asignarServicio\(activePrenda\.id, {[\s\S]*?setObservacionesServicio\(''\);/m,
  handleAddServicioRepl.trim()
);

// 3. Modify handleEditServicioAsignado
const handleEditServicioAsignadoRepl = `
      setServicioSeleccionado(s.servicioId.toString());
      setMedidaEntregada(s.medidaEntregada !== null && s.medidaEntregada !== undefined ? Number(s.medidaEntregada) : '');
      setObservacionesServicio(s.observaciones || '');
      setMaterialSeleccionado(s.materialId?.toString() || '');
      setTipoArregloSeleccionado(s.tipoArregloId?.toString() || '');
      setZonaSeleccionada(s.zonaId?.toString() || '');
`;

content = content.replace(
  /      setServicioSeleccionado\(s\.servicioId\.toString\(\)\);[\s\S]*?setObservacionesServicio\(s\.observaciones \|\| ''\);/m,
  handleEditServicioAsignadoRepl.trim()
);

// 4. Modify Selection reset
content = content.replace(
  /                                      setMedidaEntregada\(''\);\n                                      setObservacionesServicio\(''\);/m,
  "                                      setMedidaEntregada('');\n                                      setObservacionesServicio('');\n                                      setMaterialSeleccionado('');\n                                      setTipoArregloSeleccionado('');\n                                      setZonaSeleccionada('');"
);

// 5. Add new dropdowns to Panel de Ajuste
const panelRepl = `
                                {/* Panel de ajuste cuando está seleccionado */}
                                {isSelected && (
                                  <div style={{
                                    borderTop: '1px solid var(--color-primary)',
                                    padding: 'var(--space-3) var(--space-4)',
                                    display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
                                    background: 'var(--bg)',
                                  }}>
                                    <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                                      <div style={{ flex: 1, minWidth: '150px' }}>
                                        <label style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '4px' }}>
                                          Material <a href="/materiales" target="_blank" style={{ float: 'right', color: 'var(--color-primary)' }}>+ Crear</a>
                                        </label>
                                        <select className="form-select" style={{ padding: '6px 10px', fontSize: '13px' }} value={materialSeleccionado} onChange={e => setMaterialSeleccionado(e.target.value)}>
                                          <option value="">Seleccione...</option>
                                          {materiales.map(m => <option key={m.id} value={m.id}>{m.descripcion}</option>)}
                                        </select>
                                      </div>
                                      <div style={{ flex: 1, minWidth: '150px' }}>
                                        <label style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '4px' }}>
                                          Tipo Arreglo <a href="/tipos-arreglo" target="_blank" style={{ float: 'right', color: 'var(--color-primary)' }}>+ Crear</a>
                                        </label>
                                        <select className="form-select" style={{ padding: '6px 10px', fontSize: '13px' }} value={tipoArregloSeleccionado} onChange={e => setTipoArregloSeleccionado(e.target.value)}>
                                          <option value="">Seleccione...</option>
                                          {tiposArreglo.map(m => <option key={m.id} value={m.id}>{m.descripcion}</option>)}
                                        </select>
                                      </div>
                                      <div style={{ flex: 1, minWidth: '150px' }}>
                                        <label style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '4px' }}>
                                          Zona <a href="/zonas" target="_blank" style={{ float: 'right', color: 'var(--color-primary)' }}>+ Crear</a>
                                        </label>
                                        <select className="form-select" style={{ padding: '6px 10px', fontSize: '13px' }} value={zonaSeleccionada} onChange={e => setZonaSeleccionada(e.target.value)}>
                                          <option value="">Seleccione...</option>
                                          {zonas.map(m => <option key={m.id} value={m.id}>{m.descripcion}</option>)}
                                        </select>
                                      </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                                      <div style={{ flex: 1 }}>
                                        <label style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '4px' }}>
                                          Longitud entregada (cm) — opcional
                                        </label>
                                        <input
                                          type="number" min="0"
                                          className="form-input"
                                          style={{ padding: '6px 10px', fontSize: '13px', maxWidth: '160px' }}
                                          value={medidaEntregada}
                                          onChange={e => setMedidaEntregada(e.target.value ? Number(e.target.value) : '')}
                                          placeholder="Sin medida"
                                        />
                                      </div>
                                      <div style={{ flex: 2 }}>
                                        <label style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '4px' }}>
                                          Observaciones
                                        </label>
                                        <textarea
                                          className="form-input"
                                          style={{ padding: '6px 10px', fontSize: '13px', width: '100%', resize: 'vertical' }}
                                          rows={2}
                                          value={observacionesServicio}
                                          onChange={e => setObservacionesServicio(e.target.value)}
                                          placeholder="Escribe observaciones para el servicio..."
                                        />
                                      </div>
                                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
                                        <button
                                          type="button"
                                          className="btn btn-primary"
                                          disabled={isCalculando}
                                          onClick={handleAddServicio}
                                        >
                                          {isCalculando ? 'Agregando...' : <><Check size={15} /> Agregar</>}
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                )}
`;

content = content.replace(
  /                                \{\/\* Panel de ajuste cuando está seleccionado \*\/\}[\s\S]*?                                \)}/m,
  panelRepl.trim()
);

fs.writeFileSync(filepath, content);
console.log('PrendaModal updated');
