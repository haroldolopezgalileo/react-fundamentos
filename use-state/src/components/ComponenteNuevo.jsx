import { useState } from "react"

export default function ComponenteNuevo() {

  // El estado en la aplicación es información que necesitamos cambiar y que 
  // react renderize (lo muestre en la vista)

  
  // Inicialización del estado con cero, puede ser cualquier tipo de dato
  const [contador, setContador] = useState(0);

  const incrementar = () => {

    // ++++ Esto genera un error porque se añade un state muy seguido ++++
    // this.setContador(contador + 1);
    // this.setContador(contador + 1);
    // ++++

    // ++++ Esta es la solución
    setContador((prevState) => prevState + 1);
    setContador((prevState) => prevState + 1);
    // ++++
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
        <p>Componente Funcional:</p>
        <h2>Contador: {contador}</h2>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
      </div>
  )
}