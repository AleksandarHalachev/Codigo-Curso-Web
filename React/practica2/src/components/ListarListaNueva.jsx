import React from "react";

const ListarListaNueva = ({ usuario, id }) => {
  return (
    <div>
      <p>
        {usuario.nombre} / {usuario.nickname} / {usuario.email} / {usuario.id}
      </p>
    </div>
  );
};

export default ListarListaNueva;
