import React from "react";
import ListarUsuarios from "../components/ListarUsuarios";
import "./Usuarios.css";
import Formulario from "../components/Formulario";
import { useState } from "react";
import ListarListaNueva from "../components/ListarListaNueva";

const usuarios = [
  { id: 1, email: "pepito@pepito.com", nombre: "Pepito", nickname: "Pepito98" },
  {
    id: 2,
    email: "fulanito@fulanito.com",
    nombre: "Fulanito",
    nickname: "Fulanito97",
  },
  {
    id: 3,
    email: "machango@machango.com",
    nombre: "Machango",
    nickname: "Machango2000",
  },
];
const Usuarios = () => {
  const [usuariosNuevo, setUsuarios] = useState(usuarios);
  const crearNuevoUsuario = (usuario) => {
    setUsuarios([...usuariosNuevo, usuario]);
  };
  return (
    <div>
      <div className="ListaDinUsuarios">
        <h2>Usuarios:</h2>
        {usuarios.map((elemento) => {
          return <ListarUsuarios key={elemento.id} element={elemento} />;
        })}
      </div>
      <div className="bloqueForm">
        <Formulario key={usuarios.id} onCrearUsuario={crearNuevoUsuario} />
        <h2>Usuarios</h2>
        <div className="listaActualUsuarios">
          <ul style={{ listStyleType: "none" }}>
            {usuariosNuevo.map((elemento) => {
              return (
                <li>
                  <ListarListaNueva key={usuariosNuevo.id} usuario={elemento} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
