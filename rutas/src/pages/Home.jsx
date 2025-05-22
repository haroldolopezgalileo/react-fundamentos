import { useNavigate } from "react-router-dom";


export default function Home() {

  // Este es el hook para poder realizar navegación manual
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about'); // Navigate es para hacer navegación desde javascript
  };

  return (
    <>
      <button onClick={goToAbout}>Go to About</button>
      <h2>Bienvenido a la página de inicio</h2>
    </>
  );
}