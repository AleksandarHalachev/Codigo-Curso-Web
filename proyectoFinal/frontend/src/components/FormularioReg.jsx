import React from "react";
import "./FormularioReg.css";

const FormularioReg = () => {
  return (
    <div>
      <div className="form-box">
        <form className="form">
          <span className="title">Regístrate</span>
          <span className="subtitle">
            Crea una cuenta gratuita con tu email.
          </span>
          <div className="form-container">
            <input
              type="text"
              className="input"
              placeholder="Nombre de usuario"
            />
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Contraseña" />
          </div>
          <button>Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default FormularioReg;
