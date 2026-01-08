import React, { useMemo } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSession } from '../auth/SessionProvider';
import './AppLayout.css';

interface NavigationItem {
  path: string;
  label: string;
  exact?: boolean;
}

const navigationItems: NavigationItem[] = [
  { path: '/people', label: 'People', exact: true },
  { path: '/business', label: 'Businesses' },
  { path: '/campaigns', label: 'Campaigns' },
  { path: '/referrals', label: 'Referrals' },
  { path: '/service-providers', label: 'Service Providers' },
  { path: '/jobs', label: 'Jobs' },
  { path: '/training', label: 'Training' },
  { path: '/analytics', label: 'Analytics' }
];

const AppLayout: React.FC = () => {
  const { user, logout } = useSession();

  const displayName = useMemo(() => {
    if (!user?.name) {
      return 'Team Member';
    }

    return user.name;
  }, [user]);

  const initials = useMemo(() => {
    if (!user?.name) {
      return 'TM';
    }

    return user.name
      .split(' ')
      .map((part) => part.charAt(0))
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }, [user]);

  return (
    <div className="app-layout">
      <header className="app-layout__header">
        <div className="app-layout__header-container">
          <div className="app-layout__branding">
            <img
              src="https://www.boabco.com.au/wp-content/uploads/2023/07/Boab-Co-Logo_Horizontal_Colour.svg"
              alt="BoAbCo Logo"
              className="app-layout__logo"
            />
          </div>
          <div className="app-layout__controls">
            <nav className="app-layout__nav" aria-label="Primary">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `app-layout__nav-link${isActive ? ' is-active' : ''}`
                  }
                  end={item.exact}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="app-layout__account">
              <span className="app-layout__avatar" aria-hidden="true">{initials}</span>
              <div className="app-layout__account-details">
                <span className="app-layout__account-name">{displayName}</span>
                <button type="button" className="app-layout__signout" onClick={logout}>
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="app-layout__main">
        <div className="app-layout__content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
