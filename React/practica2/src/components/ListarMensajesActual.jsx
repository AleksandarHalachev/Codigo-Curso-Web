import React from "react";

const ListarMensajesActual = ({ mensaje }) => {
  return (
    <div>
      <p>
        {mensaje.mensaje} / {mensaje.autor} / {mensaje.fecha} / {mensaje.id}
      </p>
    </div>
  );
};

export default ListarMensajesActual;
