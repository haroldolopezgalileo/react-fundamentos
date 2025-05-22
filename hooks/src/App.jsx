import { useState } from 'react'
import './App.css'
import Callback from './components/Callback'
import Greeting from './components/ContextExample/Greeting'
import LanguageSwitcher from './components/ContextExample/LanguageSwitcher'
import Memo from './components/Memo'
import Reducer from './components/Reducer'
import { LanguageProvider } from './context/LanguageContext'

function App() {

  const [count,setCount] = useState(0);

  return (
    <>
      {/* Este componente no puede leer el contexto */}
      <h2>Ejemplo de useReducer</h2>
      <Reducer />

      {/* Todo lo que este dentro del LanguageProvider puede leer el contexto */}
      <h2>Ejemplo de useContext</h2>
      <LanguageProvider>
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
          <h1>Mi Aplicación Multilenguaje</h1>
          <LanguageSwitcher />
          <Greeting />
        </div>
      </LanguageProvider>

      <h2>Ejemplo de useCallback</h2>
      <Callback />

      <h2>Ejemplo de useMemo</h2>
      <button onClick={()=>setCount(count+1)}>Aumentar</button>
      <Memo count={count} />

    </>
  )
}

export default App
