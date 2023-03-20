import React from "react";

const ListaElementosEstatica = ({ lista }) => {
  return (
    <div>
      <ul className="ListaEstatica">
        <li>{lista[0].mensaje}</li>
        <li>{lista[1].mensaje}</li>
        <li>{lista[2].mensaje}</li>
      </ul>
    </div>
  );
};

export default ListaElementosEstatica;
