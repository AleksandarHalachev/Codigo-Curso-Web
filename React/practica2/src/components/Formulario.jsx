import React, { useState } from "react";
import ListarListaNueva from "./ListarListaNueva";
import "./Formulario.css";
const Formulario = ({ id, lista }) => {
  // useStates para acceder a los estados
  const [usuarios, setUsuario] = useState(lista);
  const [error, setError] = useState(false);
  const [nuevoId, setId] = useState("");
  const [nuevoNombre, setNombre] = useState("");
  const [nuevoEmail, setEmail] = useState("");
  const [nuevoNick, setNick] = useState("");

  //Modifica los valores id, nombre, email y nickname
  const IdChanger = (event) => {
    setId(parseInt(event.target.value));
  };
  const nameChanger = (event) => {
    setNombre(event.target.value);
  };
  const emailChanger = (event) => {
    setEmail(event.target.value);
  };
  const nickChanger = (event) => {
    setNick(event.target.value);
  };

  //Gestor de añadir
  const gestorSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (
      nuevoId === "" ||
      nuevoNombre === "" ||
      nuevoEmail === "" ||
      nuevoNick === ""
    ) {
      setError(true);
      return;
    }
    setUsuario([
      ...usuarios,
      {
        id: nuevoId,
        email: nuevoEmail,
        nombre: nuevoNombre,
        nickname: nuevoNick,
      },
    ]);

    setId("");
    setNombre("");
    setEmail("");
    setNick("");
  };
  return (
    <div className="bloqueForm">
      <h2>Formulario añadir usuarios</h2>
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
        <label htmlFor="usu" className="form-label">
          Introduce nuevo usuario:
        </label>
        <input
          type="text"
          onChange={nameChanger}
          value={nuevoNombre}
          className="form-control form-control-sm"
          id="usu"
        />

        <br></br>
        <label htmlFor="correo" className="form-label">
          Introduce nuevo correo:
        </label>
        <input
          type="email"
          name="correo"
          onChange={emailChanger}
          value={nuevoEmail}
          className="form-control form-control-sm"
        />

        <br></br>
        <label htmlFor="nickname" className="form-label">
          Introduce nuevo nickname:
        </label>
        <input
          type="text"
          name="nickname"
          onChange={nickChanger}
          value={nuevoNick}
          className="form-control form-control-sm"
        />

        <br></br>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <br />
      <div>
        <h2>Usuarios</h2>
        <div className="listaActualUsuarios">
          <ul style={{ listStyleType: "none" }}>
            {usuarios.map((elemento) => {
              return (
                <li>
                  <ListarListaNueva key={usuarios.id} usuario={elemento} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
