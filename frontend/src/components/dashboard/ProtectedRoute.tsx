import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('token');
  const profile = localStorage.getItem('profile');
  const user = profile ? JSON.parse(profile) : null;

  return isAuthenticated && user ? (
    <Outlet />
  ) : (
    <Navigate to="/get-started" replace />
  );
};

export default ProtectedRoute;
