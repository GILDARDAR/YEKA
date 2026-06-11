import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { clientesService } from './clientes.service';
import type { Cliente } from '../../shared/types';
import { Search, Plus, Star, Phone, Mail, Pencil } from 'lucide-react';

function StarRating({ level }: { level: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={12} fill={i <= level ? 'var(--color-warning)' : 'none'} color={i <= level ? 'var(--color-warning)' : 'var(--color-border-strong)'} />
      ))}
    </div>
  );
}

export function ClientesPage() {
  const [clientes, setClientes]   = useState<Cliente[]>([]);
  const [loading, setLoading]     = useState(true);
  const [query, setQuery]         = useState('');
  const [searching, setSearching] = useState(false);

  const loadAll = useCallback(async () => {
    setLoading(true);
    try {
      const data = await clientesService.getAll();
      setClientes(data);
    } finally { setLoading(false); }
  }, []);

  useEffect(() => { loadAll(); }, [loadAll]);

  // Debounced search
  useEffect(() => {
    if (!query.trim()) { loadAll(); return; }
    const t = setTimeout(async () => {
      setSearching(true);
      try {
        const data = await clientesService.search(query.trim());
        setClientes(data);
      } finally { setSearching(false); }
    }, 350);
    return () => clearTimeout(t);
  }, [query, loadAll]);

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Clientes</h1>
          <p className="page-subtitle">{clientes.length} cliente{clientes.length !== 1 ? 's' : ''} registrado{clientes.length !== 1 ? 's' : ''}</p>
        </div>
        <Link to="/clientes/nuevo" className="btn btn-primary">
          <Plus size={16} /> Nuevo cliente
        </Link>
      </div>

      {/* Search */}
      <div className="card" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-4)' }}>
        <div className="search-bar">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            className="form-input"
            placeholder="Buscar por nombre, teléfono o DNI..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {searching && <div className="spinner spinner-sm" style={{ position: 'absolute', right: '0.75rem' }} />}
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
          <div className="spinner spinner-lg" />
        </div>
      ) : clientes.length === 0 ? (
        <div className="empty-state">
          <Search size={40} className="empty-state-icon" />
          <p className="empty-state-title">Sin resultados</p>
          <p className="empty-state-desc">{query ? `No se encontraron clientes para "${query}"` : 'Aún no hay clientes registrados'}</p>
          {!query && <Link to="/clientes/nuevo" className="btn btn-primary"><Plus size={16} />Crear primer cliente</Link>}
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Contacto</th>
                <th>DNI</th>
                <th>Premium</th>
                <th>Facturas</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {clientes.map(c => (
                <tr key={c.id}>
                  <td>
                    <Link to={`/clientes/${c.id}`} style={{ fontWeight: 'var(--font-medium)', color: 'var(--color-text)' }}>
                      {c.nombre}
                    </Link>
                  </td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      {c.celular && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: 'var(--text-xs)', color: 'var(--color-text-light)' }}>
                          <Phone size={11} /> {c.celular}
                        </span>
                      )}
                      {c.email && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: 'var(--text-xs)', color: 'var(--color-text-light)' }}>
                          <Mail size={11} /> {c.email}
                        </span>
                      )}
                      {!c.celular && !c.email && <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-xs)' }}>—</span>}
                    </div>
                  </td>
                  <td style={{ color: 'var(--color-text-light)', fontSize: 'var(--text-sm)' }}>{c.dni || '—'}</td>
                  <td><StarRating level={c.nivelPremium} /></td>
                  <td>
                    <span className="badge badge-neutral">{c.facturasCount ?? 0}</span>
                  </td>
                  <td>
                    <Link to={`/clientes/${c.id}`} className="btn btn-ghost btn-sm btn-icon">
                      <Pencil size={14} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
