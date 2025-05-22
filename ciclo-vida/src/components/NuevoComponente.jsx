import { useEffect, useState } from "react";


// Esta es la forma correcta de ver el ciclo de vida de un NuevoComponente
// si se recomienda utilizarlo
export default function NuevoComponente() {

  // Similar al constructor() en componentes de clase
  const [contador, setContador] = useState(0);
  console.log("1. Se ejecuta en cada render (como render() en clase)");

  // Equivalente a componentDidMount()
  useEffect(() => {
    console.log("2. componentDidMount() - Solo se ejecuta una vez al montar");

    // Equivalente a componentWillUnmount()
    return () => {
      console.log("5. componentWillUnmount() - Se ejecuta al desmontar");
    };
  }, []); // Dependencias vacías = solo al montar y desmontar

  // Equivalente a componentDidUpdate() para 'contador'
  useEffect(() => {
    if (contador !== 0) {
      console.log("3. componentDidUpdate() - contador ha cambiado");
    }
  }, [contador]); // Solo se ejecuta cuando cambia 'contador'

  const aumentar = () => {
    setContador((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={aumentar}>Aumentar</button>
    </div>
  );
}