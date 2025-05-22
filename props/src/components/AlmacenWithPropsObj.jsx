export default function AlmacenWithPropsObj(props) { // El parámetro props contiene todas las propiededades del componente

  // Debo utilizar la variable props para acceder a las propiedades
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
          <td>{props.nombre}</td>
          <td>{props.clave}</td>
          <td>{props.fecha}</td>
        </tr>
      </tbody>
    </table>
  )
}