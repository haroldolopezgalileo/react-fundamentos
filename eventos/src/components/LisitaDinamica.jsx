import { useEffect } from "react"
import { useState } from "react"

export default function ListaDinamica() {

  const [data, setData] = useState(null);
  const [currentExtraInfo, setCurrentExtraInfo] = useState(null);

  useEffect(()=>{
    // Se carga la información al iniciar el componente, se hace un Fetch, una petción
    // con Axios o cualquier acción inicial

    const dataMock = [
      {id:1, name:"Nombre 1", genre: "M", info: "Informacion extra 1"},
      {id:2, name:"Nombre 2", genre: "X", info: "Informacion extra 2"},
      {id:3, name:"Nombre 3", genre: "F", info: "Informacion extra 3"},
      {id:4, name:"Nombre 4", genre: "F", info: "Informacion extra 4"},
      {id:5, name:"Nombre 5", genre: "X", info: "Informacion extra 5"}
    ]
    setTimeout(()=>{
      setData(dataMock);
    },2000);
  },[]);

  const handleInfo = (id) => {
    const dataFounded = data.find(d => d.id === id)
    setCurrentExtraInfo(dataFounded?.info)
  }

  return (
    <>
      {!data ? 
        <p>Cargando data..</p> :
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Género</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {data.map(d => (
              <tr>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.genre}</td>
                <button onClick={()=>{handleInfo(d.id)}}>Más información</button>
              </tr>
            ))}
          </tbody>
        </table>
      }

      {currentExtraInfo && 
        <div>
          <h2>Info extra:</h2>
          <p>{currentExtraInfo}</p>
        </div>
      }
    </>
  )
}