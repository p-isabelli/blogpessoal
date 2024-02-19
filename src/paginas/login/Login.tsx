import { useState } from "react";

function Contador() {
  const [valorx, setValorx] = useState(100);

  function somaClick() {
    setValorx (valorx +1)
  }

  return(
    <div>
      <p>Login</p>
    </div>

  )
}

export default Contador