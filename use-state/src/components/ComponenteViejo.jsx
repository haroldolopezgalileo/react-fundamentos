import { Component } from 'react';


// Este es un componente solamente demostrativo, no usar esto
export default class ComponenteViejo extends Component{

  constructor(props){
    super(props);
    this.state = {
      contador: 0
    }
  }

  incrementar = () => {

    // ++++ Esto genera un error porque se añade un state muy seguido ++++
    // this.setState({ contador: this.state.contador + 1 });
    // this.setState({ contador: this.state.contador + 1 });
    // ++++

    // ++++ Esta es la solución
    this.setState((prevState)=>({
      contador: prevState.contador + 1
    }))

    this.setState((prevState)=>({
      contador: prevState.contador + 1
    }))
    // ++++
  };

  decrementar = () => {
    this.setState({ contador: this.state.contador - 1 });
  };

  render() {
    return (
      <div>
        <p>Componente de Clase:</p>
        <h2>Contador: {this.state.contador}</h2>
        <button onClick={this.incrementar}>Incrementar</button>
        <button onClick={this.decrementar}>Decrementar</button>
      </div>
    );
  }

}