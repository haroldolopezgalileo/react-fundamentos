import { useParams, useNavigate } from 'react-router-dom';

export default function UserDetail() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div>
      <h3>Detalle del Usuario #{userId}</h3>
      <button onClick={goBack}>Volver</button>
    </div>
  );
}
