import { useState } from "react";

export default function Formulario() {

  const [text, setText] = useState("");
  const [lastKey, setLastKey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página
    alert(`Valor enviado: ${text}`);
  };

  return (
    <>
      {/* onChange + onSubmit */}
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <input
          value={text}
          placeholder="Escribe algo"
          onChange={(e) => setText(e.target.value)}
          /* onKeyDown */
          onKeyDown={(e) => setLastKey(e.key)}
        />
        <button type="submit">Enviar</button>
      </form>
      <p>Última tecla presionada: <strong>{lastKey}</strong></p>
    </>
  )
}