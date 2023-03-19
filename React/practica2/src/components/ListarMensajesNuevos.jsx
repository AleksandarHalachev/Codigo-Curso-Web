import React from "react";

const ListarMensajesNuevos = ({ mensaje, id }) => {
  return (
    <div>
      <p>
        {mensaje.mensaje} / {mensaje.autor} / {mensaje.fecha} / {mensaje.id}
      </p>
    </div>
  );
};

export default ListarMensajesNuevos;
