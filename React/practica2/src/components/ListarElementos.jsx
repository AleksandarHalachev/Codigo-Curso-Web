import React from "react";

const ListarElementos = ({ element }) => {
  return (
    <div>
      <p key={element.id}>
        {element.mensaje} / {element.autor} / {element.fecha}
      </p>
    </div>
  );
};

export default ListarElementos;
