import './App.css'
import AlmacenWithDesctructuring from './components/AlmacenWithDesctructuring'
import AlmacenWithPropsObj from './components/AlmacenWithPropsObj'

function App() {

  const parametrosReducidos = {
    nombre: 'Nombre 3',
    clave: 59,
    fecha: '2024-09-03'
  }

  return (
    <>
      <h2>Props usando el objeto sin destructuración</h2>
      <AlmacenWithPropsObj nombre={'Nombre 1'} clave={21} fecha={'2024-03-02'}/>

      <h2>Props usando destructuración</h2>
      <AlmacenWithDesctructuring  nombre={'Nombre 2'} clave={13} fecha={'2024-05-01'} />

      <h2>Props usando destructuracion en el componente para reducir el envío de props</h2>
      <AlmacenWithDesctructuring {...parametrosReducidos} />

    </>
  )
}

export default App
