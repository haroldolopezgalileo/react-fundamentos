import { useReducer } from 'react';

// Este es el estado inicial
const initialState = {
  count: 0,
  history: [],
};

// Función que se ejecuta cuando se llama a la función dispatch
// esto se hace de forma interna automáticamente
function reducer(state, action) { // recibe el estado actual y la acción enviada en la función dispatch
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
        history: [...state.history, 'Incrementó a ' + (state.count + 1)],
      };
    case 'decrement':
      return {
        count: state.count - 1,
        history: [...state.history, 'Decrementó a ' + (state.count - 1)],
      };
    case 'reset':
      return {
        count: 0,
        history: [...state.history, 'Se reinició el contador'],
      };
    default:
      return state;
  }
}

export default function Reducer() {

  // Uso del useReducer para manejar estados complejos
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Contador: {state.count}</h2>
      {/* Ejecutar dispatch con el objeto que va a funcionar como pármetro */}
      <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reiniciar</button>

      <h3>Historial:</h3>
      <ul>
        {state.history.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
}
