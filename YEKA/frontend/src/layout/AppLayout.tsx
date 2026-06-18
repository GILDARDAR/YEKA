import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { AnnouncementWatcher } from '../shared/components/AnnouncementWatcher';

export function AppLayout() {
  return (
    <div className="app-layout">
      <AnnouncementWatcher />
      <Sidebar />
      <div className="app-main">
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
