import React from "react";

// Este componente solamente es demostrativo con fines didácticos,
// no se recomienda utilizarlo
export class ViejoComponente extends React.Component {

  // Se llama primero, ideal para inicializar el estado o hacer bindings
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
    console.log("1. constructor()");
  }

  // Se llama justo antes de renderizar, tanto en el montaje como en actualizaciones.
  // Se usa para derivar el estado de las props si es necesario.
  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps()", props, state);
    return null; // Si no se necesita actualizar el estado, se retorna null
  }

  // Se llama después de que el componente se haya montado en el DOM.
  // Ideal para llamadas a APIs, suscripciones, timers, etc.
  componentDidMount() {
    console.log("4. componentDidMount()");
  }

  // Decide si el componente debe renderizarse o no ante un cambio de props o estado.
  // Puede usarse para optimizar el rendimiento.
  shouldComponentUpdate(nextProps, nextState) {
    console.log("5. shouldComponentUpdate() - ", nextProps, nextState);
    return true; // Si se retorna false, se evita el renderizado
  }

  // Se ejecuta justo antes del renderizado posterior a una actualización.
  // Su retorno se pasa como tercer argumento a componentDidUpdate.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("6. getSnapshotBeforeUpdate()", prevProps, prevState);
    return {hola:"siii"}; // Se puede devolver información del DOM antes del cambio
  }

  // Se ejecuta después de que el componente se actualiza.
  // Útil para operar con el DOM o hacer nuevas llamadas según cambios.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("7. componentDidUpdate() ", prevProps, prevState, snapshot);
  }

  // Se llama justo antes de que el componente sea eliminado del DOM.
  // Se usa para limpiar timers, cancelar suscripciones, etc.
  componentWillUnmount() {
    console.log("8. componentWillUnmount()");
  }

  // Función para aumentar el contador
  aumentar = () => {
    this.setState((prevState) => ({ contador: prevState.contador + 1 }));
  };

  // Método obligatorio: devuelve los elementos JSX a renderizar
  render() {
    console.log("3. render()");
    return (
      <div>
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={this.aumentar}>Aumentar</button>
      </div>
    );
  }

}