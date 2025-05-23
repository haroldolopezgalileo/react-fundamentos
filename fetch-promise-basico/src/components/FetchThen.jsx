import { useEffect, useState } from "react";

export default function FetchThen() {

  const url = "https://jellybellywikiapi.onrender.com/api/Beans/3";

  const [beans, setBeans] = useState([]);

  const funcionNoAsincrona = () => {
      fetch(url)
        .then(response => response.json())
        .then(data => setBeans([{...data}]))
  }

  useEffect(()=>{
    funcionNoAsincrona();
  },[]);

  return (
    <>

      {
        !beans ? <p>No hay dulces encontrado</p> :
        <table border={1}>
          <thead>
            <tr>
              <th>Sabor</th>
              <th>Descripción</th>
              <th>Color</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            {
              beans.map(bean => (
                <tr>
                  <td>{bean.flavorName}</td>
                  <td>{bean.description}</td>
                  <td>{bean.colorGroup}</td>
                  <td><img src={bean.imageUrl}/></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      }
    </>
  )
}