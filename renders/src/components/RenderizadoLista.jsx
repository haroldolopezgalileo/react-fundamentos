export default function RenderizadoLista() {

  const listadoUsuarios = [
    {
      "nombre": "Name 1",
      "edad": 23,
      "perfil": "https://profile.com/name1"
    },
    {
      "nombre": "Name 2",
      "edad": 31,
      "perfil": "https://profile.com/name2"
    },
    {
      "nombre": "Name 3",
      "edad": 53,
      "perfil": "https://profile.com/name3"
    },{
      "nombre": "Name 4",
      "edad": 26,
      "perfil": "https://profile.com/name4"
    }
  ]

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Perfil</th>
        </tr>
      </thead>
      <tbody>
        {listadoUsuarios.map((value,index)=>(
          <tr key={index}>
            <td>{value.nombre}</td>
            <td>{value.edad}</td>
            <td>{value.perfil}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )

}