import { Navigate, Outlet } from 'react-router-dom';
import { usePin } from '../hooks/usePin';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = usePin();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children || <Outlet />;
}
