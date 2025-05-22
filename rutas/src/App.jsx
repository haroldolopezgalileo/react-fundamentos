import './App.css'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Users from './pages/Users'
import UserDetail from './pages/UserDetail';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Unauthorized from './pages/Unauthorized';
import { CommonConstants } from './util/CommonConstants';

function App() {

  return (
    // BrowserRouter define donde van a existir las rutas, si un componente no está dentro de 
    // esto no podrá encontrar la ruta
    <BrowserRouter>

      {/* Menú inicial para mostrar links de las rutas */}
      <nav style={{ padding: 10, borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: 10 }}>Inicio</Link>
        <Link to="/about" style={{ marginRight: 10 }}>Acerca</Link>
        <Link to="/users">Usuarios</Link>
      </nav>
      {/* Fin del menú */}

      {/* Es en este punto donde definimos qué debe hacer cuando navega entre las rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Navigate to="/" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

         {/* Rutas protegidas para cualquier usuario autenticado */}
        <Route element={<ProtectedRoute />}>
          <Route path="/about" element={<About />} />
        </Route>

        {/* Rutas protegidas para administradores */}
        <Route element={<ProtectedRoute requiredRole={CommonConstants.ADMIN} />}>
          <Route path="/users" element={<Users />}>
            <Route path=":userId" element={<UserDetail />} />
          </Route>
        </Route>

        {/* Si no encuentra la ruta en las anteriores mostrará el componente NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
