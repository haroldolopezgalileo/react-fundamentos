// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { fakeAuth } from '../services/auth.service';


export default function ProtectedRoute({ requiredRole }) {

  // Revisa si el usuario está autenticado
  if (!fakeAuth.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Revisa si el usuario tiene validación de Rol
  if (requiredRole && fakeAuth.user.role !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }

  // Outlet tiene los componentes que están dentro de Route
  return <Outlet />;
}