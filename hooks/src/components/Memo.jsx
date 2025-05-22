import { useMemo } from "react";


// Se usa para memorizar el resultado de una función costosa y evitar recalcularlo en cada
// render, a menos que cambien sus dependencias.
// Memoriza la entrada y la salida evitando el recálculo
export default function Memo({count}) {

  // Simulando un cálculo costoso
  const expensiveCalculation = (num) => {
    console.log('Calculando: ', num);
    let total = 0;
    for (let i = 0; i < 10000; i++) {
      for (let j = 0; j < 10000; j++) {
        total += i+j;
      }
    }
    console.log("El resultado es: ", total + num);
    return total + num;
  };

  const result = useMemo(()=> expensiveCalculation(count), [count]);

  return (
    <div>
      <p>Resultado costoso: {result}</p>
    </div>
  );
}