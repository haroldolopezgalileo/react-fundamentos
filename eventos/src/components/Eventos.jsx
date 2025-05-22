import { useState } from "react";

const Eventos = () => {

  const [clicks, setClicks] = useState(0);
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    setClicks((numClickPrev) => numClickPrev + 1)
  }

  const handleHover = (isHover) => {
    setHover(isHover)
  }

  return (
    <div>
      <h2>Eventos en React</h2>

      {/* onClick */}
      <button onClick={handleClick}>
        Haz clic ({clicks})
      </button>

      {/* onMouseEnter / onMouseLeave */}
      <div
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        style={{
          padding: "1rem",
          marginTop: "1rem",
          background: hover ? "#4ade80" : "#e5e7eb",
          borderRadius: 8,
          textAlign: "center"
        }}
      >
        {hover ? "Está encima del cuadro!" : "Pasa el cursor por aquí"}
      </div>

      {/* onFocus / onBlur */}
      <input
        placeholder="Prueba focus / blur"
        onFocus={() => console.log("Input enfocado")}
        onBlur={() => console.log("Input perdió el foco")}
        style={{ marginTop: "1rem" }}
      />
    </div>
  )
}

export default Eventos;