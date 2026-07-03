import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
});

// ─── Request interceptor: attach JWT ─────────────
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('yeka_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ─── Response interceptor: handle 401 ────────────
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('yeka_token');
      localStorage.removeItem('yeka_user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
