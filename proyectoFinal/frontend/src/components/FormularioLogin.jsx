import React from "react";
import "./FormularioLogin.css";

const FormularioLogin = () => {
  return (
    <div>
      <div className="form-box">
        <form className="form">
          <span className="title">Iniciar Sesión</span>
          <span className="subtitle">Inicia sesión con tu email.</span>
          <div className="form-container">
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Contraseña" />
          </div>
          <button>Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
};

export default FormularioLogin;
