import React, { useState } from "react";
import "./FormularioMensajes.css";
import ListarMensajesActual from "./ListarMensajesActual";

const FormularioMensajes = ({ id, lista }) => {
  // useStates para acceder a los estados
  const [mensajes, setMensaje] = useState(lista);
  const [error, setError] = useState(false);
  const [nuevoId, setId] = useState("");
  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const [nuevoAutor, setAutor] = useState("");
  const [nuevaFecha, setFecha] = useState("");

  //Modifica los valores id, nombre, email y nickname
  const IdChanger = (event) => {
    setId(parseInt(event.target.value));
  };
  const messageChanger = (event) => {
    setNuevoMensaje(event.target.value);
  };
  const authorChanger = (event) => {
    setAutor(event.target.value);
  };
  const dateChanger = (event) => {
    setFecha(event.target.value);
  };

  //Gestor de añadir
  const gestorSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (
      nuevoId === "" ||
      nuevaFecha.trim() === "" ||
      nuevoAutor.trim() === "" ||
      nuevoMensaje.trim() === ""
    ) {
      setError(true);
      return;
    }
    setMensaje([
      ...mensajes,
      {
        id: nuevoId,
        mensaje: nuevoMensaje,
        autor: nuevoAutor,
        fecha: nuevaFecha,
      },
    ]);

    setFecha("");
    setAutor("");
    setId("");
    setNuevoMensaje("");
  };
  return (
    <div className="bloqueForm">
      <h2>Formulario añadir mensajes</h2>
      {error ? (
        <h4 style={{ color: "red" }}>Completa todos los campos</h4>
      ) : null}
      <form onSubmit={gestorSubmit} action="">
        <label htmlFor="id" className="form-label">
          Introduce nuevo ID:
        </label>
        <input
          type="number"
          name="id"
          onChange={IdChanger}
          value={nuevoId}
          className="form-control form-control-sm"
        />

        <br></br>
        <label htmlFor="mens" className="form-label">
          Introduce nuevo mensaje:
        </label>
        <input
          type="text"
          onChange={messageChanger}
          value={nuevoMensaje}
          className="form-control form-control-sm"
          id="mens"
        />

        <br></br>
        <label htmlFor="autor" className="form-label">
          Introduce autor:
        </label>
        <input
          type="text"
          name="autor"
          onChange={authorChanger}
          value={nuevoAutor}
          className="form-control form-control-sm"
        />

        <br></br>
        <label htmlFor="date" className="form-label">
          Introduce fecha:
        </label>
        <input
          type="date"
          name="date"
          onChange={dateChanger}
          value={nuevaFecha}
          className="form-control form-control-sm"
        />

        <br></br>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <br />
      <div>
        <h2>Mensajes</h2>
        <div className="listaActualMensajes">
          <ul style={{ listStyleType: "none" }}>
            {mensajes.map((elemento) => {
              return (
                <li>
                  <ListarMensajesActual mensaje={elemento} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FormularioMensajes;
