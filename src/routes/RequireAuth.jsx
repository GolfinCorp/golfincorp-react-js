import { useEffect, useState } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/hooks';

const RequireAuth = ({ allowedRoles }) => {
  const [loaded, setLoaded] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <h1>Cargando pero</h1>;

  if (allowedRoles.includes(user?.role)) return <Outlet />;
  if (user)
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequireAuth;
