import { useEffect, useState, useRef } from 'react';
import api from '../api';
import { AnnouncementModal } from './AnnouncementModal';
import { useAuth } from '../auth.context';

export function AnnouncementWatcher() {
  const { user } = useAuth();
  const [pendientes, setPendientes] = useState<any[]>([]);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalIdRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchPendientes = async () => {
    if (!user) return;
    try {
      const res = await api.get('/anuncios/pendientes');
      setPendientes(res.data);
    } catch (error) {
      console.error('Error fetching pendientes', error);
    }
  };

  useEffect(() => {
    if (!user) {
      setPendientes([]);
      return;
    }
    
    // Initial fetch
    fetchPendientes();

    // Poll every 5 minutes (300000 ms)
    const interval = setInterval(fetchPendientes, 300000);
    return () => clearInterval(interval);
  }, [user]);

  // Audio Loop logic
  useEffect(() => {
    if (pendientes.length > 0) {
      if (!audioCtxRef.current) {
        // Initialize AudioContext on first need
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }

      const ctx = audioCtxRef.current;
      
      // Resume context if suspended (browser policy)
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      if (!oscillatorRef.current) {
        // Create oscillator for beep
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, ctx.currentTime); // A5 note

        // Beep pattern using intervals
        gain.gain.setValueAtTime(0, ctx.currentTime);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        oscillatorRef.current = osc;
        gainNodeRef.current = gain;

        // Make it beep continuously: 200ms on, 800ms off
        intervalIdRef.current = setInterval(() => {
          if (ctx.state === 'running') {
            gain.gain.setTargetAtTime(0.5, ctx.currentTime, 0.05);
            gain.gain.setTargetAtTime(0, ctx.currentTime + 0.2, 0.05);
          }
        }, 1000);
      }
    } else {
      // Stop sound if no pending announcements
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
        oscillatorRef.current = null;
      }
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    }

    return () => {
      // Cleanup on unmount
      if (oscillatorRef.current) {
        try { oscillatorRef.current.stop(); } catch(e){}
        oscillatorRef.current.disconnect();
        oscillatorRef.current = null;
      }
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    };
  }, [pendientes.length]);

  if (pendientes.length === 0) return null;

  // Render the first pending announcement
  return (
    <AnnouncementModal 
      anuncio={pendientes[0]} 
      onSuccess={fetchPendientes} 
    />
  );
}
