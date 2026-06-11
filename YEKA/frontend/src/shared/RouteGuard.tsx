import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './auth.context';
import type { Rol } from './types';

interface RouteGuardProps {
  children: React.ReactNode;
  allowedRoles?: Rol[];
}

export function RouteGuard({ children, allowedRoles }: RouteGuardProps) {
  const { isAuthenticated, user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <div className="spinner spinner-lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.rol)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
