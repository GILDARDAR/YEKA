import React, { useEffect, useState } from 'react';
import api from '../../shared/api';

export function ConfiguracionPage() {
  const [config, setConfig] = useState<any>({
    EXPRESS_24H_MULTIPLIER: '',
    EXPRESS_48H_MULTIPLIER: '',
    VALOR_HORA_PUNTOS: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchConfig();
  }, []);

  const fetchConfig = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/configuracion');
      setConfig(data);
    } catch (error) {
      console.error('Error fetching config', error);
      setMessage('Error cargando la configuración');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSaving(true);
      await api.patch('/configuracion', config);
      setMessage('Configuración guardada exitosamente');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error saving config', error);
      setMessage('Error al guardar la configuración');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-4">Cargando configuración...</div>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Configuración General</h1>

      {message && (
        <div className={`p-4 rounded mb-4 ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Parámetros del Sistema</h2>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Valor de la Hora de Trabajo (€/hora)
            </label>
            <input
              type="number"
              step="0.01"
              name="VALOR_HORA_PUNTOS"
              value={config.VALOR_HORA_PUNTOS}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-200"
              required
            />
            <p className="text-xs text-gray-500 mt-1">Costo base establecido para un minuto de trabajo efectivo (Costo por hora / 60).</p>
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-4 border-b pb-2">Tarifas Express (Multiplicadores)</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recargo Express 24h (Ej: 1.50 para +50%)
            </label>
            <input
              type="number"
              step="0.01"
              name="EXPRESS_24H_MULTIPLIER"
              value={config.EXPRESS_24H_MULTIPLIER}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-200"
              required
            />
            <p className="text-xs text-gray-500 mt-1">Multiplicador del precio final. 1.00 significa precio normal.</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recargo Express 48h (Ej: 1.30 para +30%)
            </label>
            <input
              type="number"
              step="0.01"
              name="EXPRESS_48H_MULTIPLIER"
              value={config.EXPRESS_48H_MULTIPLIER}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={saving}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50"
            >
              {saving ? 'Guardando...' : 'Guardar Cambios'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
