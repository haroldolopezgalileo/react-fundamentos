import './App.css'
import FetchAsync from './components/FetchAsync'
import FetchThen from './components/FetchThen'

function App() {


  return (
    <>
      <h2>Usando Fetch con Async</h2>
      <FetchAsync />
      <h2>Usando Fetch con Then</h2>
      <FetchThen />
    </>
  )
}

export default App
