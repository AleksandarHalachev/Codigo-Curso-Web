import React from "react";
import ListarUsuarios from "./ListarUsuarios";
import "./Usuarios.css";
import Formulario from "./Formulario";

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
  const listaUsuarios = usuarios;
  return (
    <div>
      <div className="ListaDinUsuarios">
        <h2>Usuarios:</h2>
        {listaUsuarios.map((elemento) => {
          return <ListarUsuarios key={elemento.id} element={elemento} />;
        })}
      </div>
      <div>
        <Formulario key={usuarios.id} lista={usuarios} />
      </div>
    </div>
  );
};

export default Usuarios;
