import { useEffect, useState } from "react";

export default function FetchAsync() {

  const url = "https://jellybellywikiapi.onrender.com/api/Beans/2";

  const [beans, setBeans] = useState([]);

  const funcionAsincrona = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setBeans([{...data}]);
    }catch(err){
      console.error("Ha ocurrido un error al obtener los dulces: ", err)
    }
  }

  useEffect(()=>{

    funcionAsincrona();

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