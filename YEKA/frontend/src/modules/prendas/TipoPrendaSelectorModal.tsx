import React, { useRef, useState } from 'react';
import { X, Shirt, Upload, Check } from 'lucide-react';
import type { TipoPrenda } from '../../shared/types';
import tipoPrendaService from '../../services/tipo-prenda.service';

interface TipoPrendaSelectorModalProps {
  tiposPrenda: TipoPrenda[];
  onSelect: (tipoPrendaId: number) => void;
  onClose: () => void;
  /** Callback para refrescar la lista desde el padre tras cambiar un icono */
  onIconoActualizado?: (tipoActualizado: TipoPrenda) => void;
}

export function TipoPrendaSelectorModal({
  tiposPrenda,
  onSelect,
  onClose,
  onIconoActualizado,
}: TipoPrendaSelectorModalProps) {
  // ID del tipo cuyo icono se está cargando
  const [uploadingId, setUploadingId] = useState<number | null>(null);
  const [successId, setSuccessId] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pendingTipoId = useRef<number | null>(null);

  const handleEditIconoClick = (e: React.MouseEvent, tipoId: number) => {
    e.stopPropagation(); // Evita que se seleccione la prenda al hacer clic en editar
    pendingTipoId.current = tipoId;
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const tipoId = pendingTipoId.current;
    if (!file || !tipoId) return;

    setUploadingId(tipoId);
    try {
      // 1. Subir el archivo
      const url = await tipoPrendaService.uploadIcono(file);
      // 2. Actualizar el tipo de prenda con la nueva URL
      const actualizado = await tipoPrendaService.updateTipoPrenda(tipoId, { iconoUrl: url });
      // 3. Notificar al padre para que refresque el array
      onIconoActualizado?.(actualizado);
      setSuccessId(tipoId);
      setTimeout(() => setSuccessId(null), 2000);
    } catch (err: any) {
      const msg = err.response?.data?.message || err.message || 'Error al subir el icono';
      alert(msg);
    } finally {
      setUploadingId(null);
      pendingTipoId.current = null;
      if (e.target) e.target.value = '';
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content" style={{ maxWidth: '800px', width: '90%' }}>
        <div className="modal-header">
          <h2 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-heading)', margin: 0 }}>
            Seleccionar Tipo de Prenda
          </h2>
          <button className="btn-icon" onClick={onClose} title="Cerrar">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ padding: 'var(--space-6)' }}>
          <p style={{ marginBottom: 'var(--space-4)', color: 'var(--color-text-muted)' }}>
            Selecciona el tipo de prenda que deseas agregar. Usa el botón{' '}
            <Upload size={12} style={{ display: 'inline', verticalAlign: 'middle' }} />{' '}
            para cambiar el icono de cualquier tipo.
          </p>

          {/* Input oculto para subir icono */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".png,.jpg,.jpeg,.svg,.webp,.gif"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: 'var(--space-4)',
          }}>
            {tiposPrenda.map(tipo => {
              const isUploading = uploadingId === tipo.id;
              const isSuccess = successId === tipo.id;

              return (
                <div key={tipo.id} style={{ position: 'relative' }}>
                  {/* Botón principal de selección */}
                  <button
                    onClick={() => onSelect(tipo.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 'var(--space-4)',
                      paddingTop: 'calc(var(--space-4) + 4px)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--color-surface)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      textAlign: 'center',
                      opacity: isUploading ? 0.6 : 1,
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-primary)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    disabled={isUploading}
                  >
                    {/* Icono */}
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 'var(--space-2)',
                      overflow: 'hidden',
                      position: 'relative',
                    }}>
                      {isUploading ? (
                        <div className="spinner" style={{ width: '24px', height: '24px' }} />
                      ) : isSuccess ? (
                        <Check size={24} style={{ color: 'var(--color-success, #10b981)' }} />
                      ) : tipo.iconoUrl ? (
                        <img
                          src={tipo.iconoUrl}
                          alt={tipo.nombre}
                          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                          onError={(e) => {
                            const img = e.target as HTMLImageElement;
                            img.style.display = 'none';
                          }}
                        />
                      ) : (
                        <Shirt size={26} style={{ color: 'var(--color-primary)' }} />
                      )}
                    </div>

                    <span style={{ fontWeight: '500', fontSize: 'var(--text-sm)' }}>
                      {tipo.nombre}
                    </span>
                    {tipo.descripcion && (
                      <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                        {tipo.descripcion}
                      </span>
                    )}
                  </button>

                  {/* Botón editar icono (esquina superior derecha) */}
                  <button
                    title="Cambiar icono"
                    onClick={(e) => handleEditIconoClick(e, tipo.id)}
                    disabled={isUploading}
                    style={{
                      position: 'absolute',
                      top: '6px',
                      right: '6px',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      padding: 0,
                      zIndex: 1,
                      opacity: isUploading ? 0.4 : 0.8,
                      transition: 'opacity 0.15s, background 0.15s',
                    }}
                    onMouseOver={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.opacity = '1';
                      (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-primary)';
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-primary)';
                      (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                    }}
                    onMouseOut={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.opacity = '0.8';
                      (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-surface)';
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-border)';
                      (e.currentTarget as HTMLButtonElement).style.color = '';
                    }}
                  >
                    <Upload size={12} />
                  </button>
                </div>
              );
            })}

            {tiposPrenda.length === 0 && (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 'var(--space-6)', color: 'var(--color-text-muted)' }}>
                No hay tipos de prenda disponibles. Por favor, crea uno primero.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
