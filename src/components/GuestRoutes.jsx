import { Navigate, Outlet } from 'react-router-dom'
import { usePin } from '../hooks/usePin'

export default function GuestRoutes({ children }) {
  const { isAuthenticated } = usePin()

  if (isAuthenticated) {
    return <Navigate to="/main" replace />
  }

  return children || <Outlet />
}
