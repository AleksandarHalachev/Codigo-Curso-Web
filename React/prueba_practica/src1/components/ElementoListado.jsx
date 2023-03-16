import React from "react";
import "./Listado.css";

const ElementoListado = ({ elemento }) => {
  return (
    <div className="lista">
      <div>ID: {elemento.id}</div>
      <div>Fase: {elemento.fase}</div>
      <div>Proyecto: {elemento.proyecto}</div>
      <div>Fecha Límite: {elemento.fechalimite}</div>
      <div>Coder: {elemento.coder}</div>
    </div>
  );
};

export default ElementoListado;
