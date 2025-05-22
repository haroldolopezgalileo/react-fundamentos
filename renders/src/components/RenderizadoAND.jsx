import { useEffect } from "react";
import { useState } from "react"

export default function RenderizadoAND() {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Lógica de renderizado (peticiones HTTP, validaciones, etc.)
    
    // Espera dos segundo y muestra el contenido
    setTimeout(()=>{
      setIsLoading(true);
    }, 2500);
  },[]);

  return (
    <>
      {isLoading && <div>Cargando aplicación...</div>}
    </>
  )
}