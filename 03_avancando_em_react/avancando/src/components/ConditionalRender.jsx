import { useState } from "react"

// Renderização condicional
const ConditionalRender = () => {
  const [x] = useState(false);

  // if/else ternário
  const [name, setName] = useState("Ana");

  return (
    <div>
      <h1>Isso sera exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x e falso!</p>}
      <h1>If ternário</h1>
      {name === "Heitor" ? (
        <div>
          <p>O nome e Heitor</p>
          </div>
      ) : (
        <div>
          <p>Nome nao encontrado!</p>
          </div>
      )}
      <button onClick={() => setName("Heitor")}>Clica aqui!</button>
    </div>
  )
}

export default ConditionalRender