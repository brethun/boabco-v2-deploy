import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSession } from './SessionProvider';

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useSession();
  const location = useLocation();

  if (isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace state={{ from: location }} />;
};

export default ProtectedRoute;
