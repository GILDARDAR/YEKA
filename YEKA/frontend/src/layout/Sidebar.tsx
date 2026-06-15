import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../shared/auth.context';
import {
  LayoutDashboard, Users, FileText, Shirt, Tag, UserCog, Building2, LogOut, Scissors, Layers, Menu, X, Settings
} from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard', roles: ['ADMIN', 'RECEPCION'] },
  { to: '/taller', icon: Scissors, label: 'Taller', roles: ['ADMIN', 'TALLER', 'RECEPCION'] },
  { to: '/clientes', icon: Users, label: 'Clientes', roles: ['ADMIN', 'RECEPCION', 'TALLER'] },
  { to: '/facturas', icon: FileText, label: 'Facturas', roles: ['ADMIN', 'RECEPCION', 'TALLER'] },
  { to: '/prendas', icon: Shirt, label: 'Prendas', roles: ['ADMIN', 'RECEPCION', 'TALLER'] },
  { to: '/catalogo', icon: Tag, label: 'Catálogo', roles: ['ADMIN', 'RECEPCION', 'TALLER'] },
  { to: '/tipos-prenda', icon: Layers, label: 'Tipos Prenda', roles: ['ADMIN'] },
  { to: '/usuarios', icon: UserCog, label: 'Usuarios', roles: ['ADMIN'] },
  { to: '/sedes', icon: Building2, label: 'Sedes', roles: ['ADMIN'] },
  { to: '/configuracion', icon: Settings, label: 'Configuración', roles: ['ADMIN'] },
];

export function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(() => {
    const saved = localStorage.getItem('sidebarOpen');
    return saved !== null ? saved === 'true' : true;
  });

  const toggleSidebar = (state: boolean) => {
    setIsOpen(state);
    localStorage.setItem('sidebarOpen', String(state));
  };

  // Close sidebar on route change only for mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
      // We don't save to localStorage here so desktop preference is kept
    }
  }, [location.pathname]);

  // Sync body class for push effect
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('sidebar-is-open');
    } else {
      document.body.classList.remove('sidebar-is-open');
    }
    return () => document.body.classList.remove('sidebar-is-open');
  }, [isOpen]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const visibleItems = navItems.filter(item =>
    user && item.roles.includes(user.rol)
  );

  return (
    <>
      <button className="hamburger-btn" onClick={() => toggleSidebar(true)}>
        <Menu size={24} />
      </button>

      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <Scissors size={22} className="sidebar-logo-icon" />
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 'var(--space-2)' }}>
            <span className="sidebar-logo-text" style={{ lineHeight: 1 }}>YEKA</span>
            <span className="sidebar-logo-subtitle" style={{ lineHeight: 1, marginTop: '2px' }}>ERP</span>
          </div>
          <button className="sidebar-close-btn" onClick={() => toggleSidebar(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Nav */}
        <nav className="sidebar-nav">
          {visibleItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link--active' : ''}`}
            >
              <Icon size={18} className="sidebar-link-icon" />
              <span className="sidebar-link-label">{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* User info + logout */}
        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="sidebar-user-avatar">
              {user?.nombre.charAt(0).toUpperCase()}
            </div>
            <div className="sidebar-user-info">
              <p className="sidebar-user-name">{user?.nombre}</p>
              <p className="sidebar-user-role">{user?.rol}</p>
            </div>
          </div>
          <button className="sidebar-logout" onClick={handleLogout} title="Cerrar sesión">
            <LogOut size={16} />
          </button>
        </div>
      </aside>
    </>
  );
}
