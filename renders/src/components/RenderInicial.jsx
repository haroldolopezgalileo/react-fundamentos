import { useState } from 'react'
import { useEffect } from 'react';

export default function RenderInicial() {

  const [isValid, setIsValid] = useState(false);
  
  useEffect(() => {
    // Lógica de renderizado (peticiones HTTP, validaciones, etc.)
    
    // Espera dos segundo y muestra el contenido
    setTimeout(()=>{
      setIsValid(true);
    }, 3000);
  },[]);

  if(!isValid){
    return (
      <div>
        <p>Validando la información...</p>
      </div>
    );
  }

  return (
    <>
      <p>Contenido cargado correctamente!</p>
    </>
  )
}
