import React from "react";
import "./Inicio.css";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="inicio">
      <h1>Inicio</h1>
      <footer className="contacto">
        <Link to="/contacto">
          <h1>Contacto</h1>
        </Link>
      </footer>
    </div>
  );
};

export default Inicio;
