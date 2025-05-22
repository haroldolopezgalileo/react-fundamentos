import './App.css'
import ComponenteNuevo from './components/ComponenteNuevo'
import ComponenteViejo from './components/ComponenteViejo'
import TaskList from './components/TaskList'

function App() {

  return (
    <>
      <h2>Ejemplo de implementación</h2>
      <ComponenteViejo />
      <ComponenteNuevo />
      <h2>Ejemplo de uso:</h2>
      <TaskList />
    </>
  )
}

export default App
