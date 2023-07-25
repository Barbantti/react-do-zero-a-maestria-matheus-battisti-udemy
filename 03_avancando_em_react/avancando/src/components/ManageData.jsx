import { useState } from "react";

const ManageData = () => {
  let someData = 10;

  const [number, setNumber] = useState(10);


  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => 
          (someData = 15)}>Mudar variável</button>
      </div>
      <div>
        <p>{number}</p>
        <button onClick={() => setNumber(25)}>Mudar variável (useState)</button>
      </div>
    </div>
  )
}

export default ManageData