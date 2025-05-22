import { useEffect } from "react";
import { useState } from "react"

export default function RenderizadoOR() {

  const [message, setMessage] = useState(null);

  useEffect(() => {
    // Lógica de renderizado (peticiones HTTP, validaciones, etc.)
    
    // Espera dos segundo y muestra el contenido
    setTimeout(()=>{
      setMessage("Mensaje obtenido!")
    }, 2500);
  },[]);

  return (
    <>
      {/* Cuando message tiene un falsy value muestra el p  */}
      {message || <p>Mensaje puede ser false, 0, -0, 0n, "", null, undefined, NaN, etc.</p>}
      {message ?? <p>El mensaje solo puede ser null o undefined</p>}
    </>
  )
}