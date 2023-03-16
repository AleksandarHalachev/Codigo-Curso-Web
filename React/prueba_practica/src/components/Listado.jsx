import React from "react";
import ElementoListado from "./ElementoListado";

const Listado = ({ trabajos, fase }) => {
  const trabajosFase = trabajos.filter((tarea) => tarea.fase.includes(fase));
  return (
    <div>
      {trabajosFase.map((tarea) => {
        return <ElementoListado key={tarea.id} tarea={tarea} />;
      })}
    </div>
  );
};

export default Listado;
