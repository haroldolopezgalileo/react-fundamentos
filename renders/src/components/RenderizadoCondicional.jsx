import { useEffect, useState } from "react";

export default function RenderizadoCondicional() {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Lógica de renderizado (peticiones HTTP, validaciones, etc.)
    
    // Espera dos segundo y muestra el contenido
    setTimeout(()=>{
      setIsOpen(true);
    }, 2000);
  },[]);

  const Promo = () => (
    <div>
      <p>Esta es una alerta que se muestra un tiempo</p>
    </div>
  )

  const Content = () => (
    <div>
      <p>Este es el contenido del componente normal!</p>
    </div>
  )

  return (
    <>
      {/* Usando renderizado con un ternario */}
      {
        !isOpen ? <Promo/> : <Content/>
      }
    </>
  )
}