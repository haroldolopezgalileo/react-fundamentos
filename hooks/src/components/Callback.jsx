import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';


const Boton = React.memo(({ onClick }) => {
  console.log('Boton renderizado');
  return <button onClick={onClick}>Click en Botón</button>;
});


// useCallback se usa cuando se necesita pasar una función como prop a un componente hijo, 
// y evitar que esa función se vuelva a crear si sus dependencias no han cambiado. 
// Esto es útil para mejorar el rendimiento y evitar renders innecesarios en componentes hijos
// que dependen de esa función.

function Callback() {
  const [count, setCount] = useState(0);

  // Esta función se mantiene igual mientras no cambien las dependencias
  const handleClick = useCallback(() => {
    console.log('Botón clickeado');
  }, []);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <Boton onClick={handleClick} />
    </div>
  );
}

export default Callback;
