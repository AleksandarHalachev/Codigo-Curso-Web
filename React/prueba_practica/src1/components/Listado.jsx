import React from "react";
import ElementoListado from "./ElementoListado";
import "./Listado.css";

const Listado = ({ lista, fase }) => {
  return (
    <div>
      <h1 className="title">Proyectos en fase "{fase}":</h1>
      {lista.map((elemento) => {
        return (
          fase === elemento.fase && (
            <ElementoListado key={elemento.id} elemento={elemento} />
          )
        );
      })}
    </div>
  );
};

export default Listado;
