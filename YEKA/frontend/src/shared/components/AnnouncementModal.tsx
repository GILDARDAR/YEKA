import React, { useState } from 'react';
import api from '../api';
import './AnnouncementModal.css';

interface Anuncio {
  id: number;
  mensaje: string;
  admin: {
    nombre: string;
  };
  createdAt: string;
}

interface Props {
  anuncio: Anuncio;
  onSuccess: () => void;
}

export function AnnouncementModal({ anuncio, onSuccess }: Props) {
  const [respuesta, setRespuesta] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!respuesta.trim()) return;

    setLoading(true);
    try {
      await api.post(`/anuncios/${anuncio.id}/responder`, { respuesta });
      onSuccess();
    } catch (err) {
      console.error('Error al responder anuncio:', err);
      alert('Hubo un error al enviar la respuesta.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="announcement-modal-overlay">
      <div className="announcement-modal">
        <div className="announcement-header">
          <h2>Anuncio de {anuncio.admin.nombre}</h2>
          <span className="announcement-date">
            {new Date(anuncio.createdAt).toLocaleString()}
          </span>
        </div>
        
        <div className="announcement-body">
          <p>{anuncio.mensaje}</p>
        </div>

        <form onSubmit={handleSubmit} className="announcement-form">
          <label htmlFor="respuesta">Tu respuesta (Obligatoria):</label>
          <textarea
            id="respuesta"
            value={respuesta}
            onChange={(e) => setRespuesta(e.target.value)}
            required
            rows={3}
            placeholder="Escribe aquí tu respuesta..."
          />
          <button type="submit" disabled={!respuesta.trim() || loading}>
            {loading ? 'Enviando...' : 'Entendido / Enviar respuesta'}
          </button>
        </form>
      </div>
    </div>
  );
}
