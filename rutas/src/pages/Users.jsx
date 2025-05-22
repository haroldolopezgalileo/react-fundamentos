import { Link, Outlet } from 'react-router-dom';

const mockUsers = [
  { id: 1, name: 'Ana' },
  { id: 2, name: 'Carlos' },
  { id: 3, name: 'Laura' },
];

export default function Users() {
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {mockUsers.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>

      {/* Outlet tiene los componentes que están dentro de Route */}
      <Outlet/>

    </div>
  );
}
