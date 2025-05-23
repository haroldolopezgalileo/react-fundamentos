import { useState, useEffect } from 'react';

export default function useFetch(url) {
  // Estados reutilizables en customHook
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Esta función se ejecutará cuando la url cambie
  useEffect(() => {
    let cancelado = false;

    // función asíncrona para poder utilizar await
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error al obtener datos");
        const result = await response.json();
        if (!cancelado) setData(result);
      } catch (err) {
        if (!cancelado) setError(err.message);
      } finally {
        if (!cancelado) setLoading(false);
      }
    }

    // Ejecución de función asíncrona
    fetchData();

    return () => {
      cancelado = true; // evita actualizar el estado si el componente ya no está montado
    };
  }, [url]); // url es parte de las dependencias del useEffect, se ejecutará cuando url cambie

  // Acá se deben colocar todas las funciones, variables, estados, etc. que se desean utilizar 
  // por otros componentes.
  return {
    data,
    loading,
    error
  };
}
