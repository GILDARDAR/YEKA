import React, { useEffect, useState } from 'react';
import api from '../../shared/api';
import type { Sede } from '../../shared/types';
import { Send, Search, Megaphone } from 'lucide-react';

export function AdminAnunciosPage() {
  const [sedes, setSedes] = useState<Sede[]>([]);
  const [historial, setHistorial] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  // Form state
  const [sedeId, setSedeId] = useState<number | ''>('');
  const [mensaje, setMensaje] = useState('');

  const fetchSedes = async () => {
    try {
      const res = await api.get('/sedes');
      setSedes(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchHistorial = async (searchTerm = '') => {
    setLoading(true);
    try {
      const res = await api.get(`/anuncios?search=${encodeURIComponent(searchTerm)}`);
      setHistorial(res.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSedes();
    fetchHistorial();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchHistorial(search);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sedeId || !mensaje.trim()) return;

    try {
      await api.post('/anuncios', { sedeId: Number(sedeId), mensaje });
      alert('Anuncio enviado exitosamente');
      setSedeId('');
      setMensaje('');
      fetchHistorial(search);
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error al enviar anuncio');
    }
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Anuncios por Sede</h1>
          <p className="page-subtitle">Enviar notificaciones y consultar historial de lectura</p>
        </div>
      </div>

      <div className="grid-2">
        {/* Enviar Anuncio Form */}
        <div className="card">
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Megaphone size={20} /> Nuevo Anuncio
          </h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Sede Destino</label>
              <select
                className="form-input"
                value={sedeId}
                onChange={(e) => setSedeId(e.target.value ? Number(e.target.value) : '')}
                required
              >
                <option value="">-- Seleccionar Sede --</option>
                {sedes.filter(s => s.activa).map(s => (
                  <option key={s.id} value={s.id}>{s.nombre} ({s.codigoSede})</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Mensaje</label>
              <textarea
                className="form-input"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
                rows={4}
                placeholder="Escribe el anuncio aquí..."
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }} disabled={!sedeId || !mensaje.trim()}>
              <Send size={16} /> Enviar Anuncio
            </button>
          </form>
        </div>

        {/* Historial */}
        <div className="card">
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Historial y Respuestas</h2>
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
            <input
              type="text"
              className="form-input"
              placeholder="Buscar en anuncios..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary">
              <Search size={16} />
            </button>
          </form>

          {loading ? (
            <p>Cargando...</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '500px', overflowY: 'auto' }}>
              {historial.length === 0 ? (
                <p style={{ color: '#666' }}>No hay anuncios enviados.</p>
              ) : (
                historial.map((anuncio) => (
                  <div key={anuncio.id} style={{ border: '1px solid #eee', padding: '12px', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <strong>Sede: {anuncio.sede?.nombre}</strong>
                      <span style={{ fontSize: '0.85rem', color: '#666' }}>
                        {new Date(anuncio.createdAt).toLocaleString()}
                      </span>
                    </div>
                    <p style={{ background: '#f9f9f9', padding: '8px', borderRadius: '4px', marginBottom: '12px', whiteSpace: 'pre-wrap' }}>
                      {anuncio.mensaje}
                    </p>
                    
                    <h4 style={{ fontSize: '0.9rem', color: '#555', marginBottom: '8px' }}>Respuestas ({anuncio.respuestas?.length || 0})</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {anuncio.respuestas?.map((res: any) => (
                        <div key={res.id} style={{ background: '#e3f2fd', padding: '8px', borderRadius: '4px', fontSize: '0.9rem' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                            <strong style={{ color: '#1565c0' }}>{res.usuario?.nombre}</strong>
                            <span style={{ fontSize: '0.8rem', color: '#666' }}>
                              {new Date(res.leidoAt).toLocaleString()}
                            </span>
                          </div>
                          <p style={{ margin: 0 }}>{res.respuesta}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
