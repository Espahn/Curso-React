import React, { useState } from "react";

export default function ItemCount({ stock, initial, onAdd}) {


  const [contador, setContador] = useState(initial);

  const aumentarContador = () => {
    if (contador <= stock) setContador(contador + 1);
  };

  const disminuirContador = () => {
    if (contador > initial) setContador(contador - 1);
  };

  return (
    <div className="itemCount">
      <button onClick={disminuirContador}>-</button>

      <bn>{contador}</bn>

      <button onClick={aumentarContador}>+</button>
      <button onClick={() => onAdd(contador)}>Add to cart</button>
    </div>
  );
};