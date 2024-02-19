import { useState } from "react";

function Contador() {
  const [valorx, setValorx] = useState(100);

  function somaClick() {
    setValorx (valorx +1)
  }

  return(
    <div>
      <h1 className="titulo">Contador</h1>
      <p>O valor é: {valorx}</p>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={somaClick}>Adicionar 1</button>
    </div>

  )
}

export default Contador