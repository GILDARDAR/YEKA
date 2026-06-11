import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './shared/auth.context';
import { RouteGuard } from './shared/RouteGuard';
import { AppLayout } from './layout/AppLayout';

import { LoginPage }      from './modules/auth/LoginPage';
import { DashboardPage }  from './modules/dashboard/DashboardPage';
import { ClientesPage }   from './modules/clientes/ClientesPage';
import { ClienteForm }    from './modules/clientes/ClienteForm';
import { FacturasPage }   from './modules/facturas/FacturasPage';
import { FacturaForm }    from './modules/facturas/FacturaForm';
import { FacturaDetail }  from './modules/facturas/FacturaDetail';
import { PrendasPage }    from './modules/prendas/PrendasPage';
import { CatalogoPage }   from './modules/catalogo/CatalogoPage';
import { UsuariosPage }   from './modules/usuarios/UsuariosPage';
import { SedesPage }      from './modules/sedes/SedesPage';
import TipoPrendaPage     from './pages/TipoPrendaPage';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected */}
          <Route element={
            <RouteGuard>
              <AppLayout />
            </RouteGuard>
          }>
            <Route index element={<DashboardPage />} />

            {/* Clientes */}
            <Route path="/clientes" element={
              <RouteGuard allowedRoles={['ADMIN','RECEPCION']}>
                <ClientesPage />
              </RouteGuard>
            }/>
            <Route path="/clientes/nuevo" element={
              <RouteGuard allowedRoles={['ADMIN','RECEPCION']}>
                <ClienteForm />
              </RouteGuard>
            }/>
            <Route path="/clientes/:id" element={
              <RouteGuard allowedRoles={['ADMIN','RECEPCION']}>
                <ClienteForm />
              </RouteGuard>
            }/>

            {/* Facturas */}
            <Route path="/facturas" element={
              <RouteGuard allowedRoles={['ADMIN','RECEPCION']}>
                <FacturasPage />
              </RouteGuard>
            }/>
            <Route path="/facturas/nueva" element={
              <RouteGuard allowedRoles={['ADMIN','RECEPCION']}>
                <FacturaForm />
              </RouteGuard>
            }/>
            <Route path="/facturas/:id" element={
              <RouteGuard allowedRoles={['ADMIN','RECEPCION']}>
                <FacturaDetail />
              </RouteGuard>
            }/>

            {/* Prendas */}
            <Route path="/prendas" element={
              <RouteGuard allowedRoles={['ADMIN','TALLER']}>
                <PrendasPage />
              </RouteGuard>
            }/>

            {/* Catálogo */}
            <Route path="/catalogo" element={
              <RouteGuard allowedRoles={['ADMIN']}>
                <CatalogoPage />
              </RouteGuard>
            }/>
            <Route path="/tipos-prenda" element={
              <RouteGuard allowedRoles={['ADMIN']}>
                <TipoPrendaPage />
              </RouteGuard>
            }/>

            {/* Admin only */}
            <Route path="/usuarios" element={
              <RouteGuard allowedRoles={['ADMIN']}>
                <UsuariosPage />
              </RouteGuard>
            }/>
            <Route path="/sedes" element={
              <RouteGuard allowedRoles={['ADMIN']}>
                <SedesPage />
              </RouteGuard>
            }/>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
