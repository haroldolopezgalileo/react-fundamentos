import './App.css'
import NuevoComponente from './components/NuevoComponente'
import { ViejoComponente } from './components/ViejoComponente'

function App() {

  return (
    <>
      <h2>Antiguo componente (no usar)</h2>
      <ViejoComponente />

      <h2>Nuevo componente:</h2>
      <NuevoComponente />
    </>
  )
}

export default App
