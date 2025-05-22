export default function AlmacenWithDesctructuring({nombre,clave,fecha}) { // El parámetro es una destructuración que contiene todas las propiededades del componente

  // Puedo utilizar las variables destructuradas
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Clave</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{nombre}</td>
          <td>{clave}</td>
          <td>{fecha}</td>
        </tr>
      </tbody>
    </table>
  )
}