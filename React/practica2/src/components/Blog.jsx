import "./Blog.css";
import ListarElementos from "./ListarElementos";
import ListaElementosEstatica from "./ListaElementosEstatica";
import FormularioMensajes from "./FormularioMensajes";
import React, { useState } from "react";
import ListarMensajesNuevos from "./ListarMensajesNuevos";

const mensajes = [
  {
    id: 1,
    mensaje: "Me gustan las manzanas.",
    autor: "Pepito",
    fecha: "08/03/2023",
  },
  { id: 2, mensaje: "Pues a mí no.", autor: "Fulanito", fecha: "05/03/2023" },
  {
    id: 3,
    mensaje: "Yo soy una manzana.",
    autor: "Machango",
    fecha: "01/03/2023",
  },
];
let hayMensajes = Math.round(Math.random());
const Blog = () => {
  const [nuevosMensajes, setNuevosMensajes] = useState(mensajes);
  const crearNuevoMensaje = (mensaje) => {
    setNuevosMensajes([...nuevosMensajes, mensaje]);
  };
  const saludo = "Mensajes de forma estática";

  return (
    <div>
      <div className="ListaDinMensajes">
        <h2>{saludo}</h2>
        <p>Mensajes ({mensajes.length}):</p>
        <ListaElementosEstatica key={mensajes.id} lista={mensajes} />

        <h2>De forma dinámica:</h2>
        {hayMensajes === 1 ? (
          mensajes.map((elemento) => {
            return <ListarElementos key={elemento.id} element={elemento} />;
          })
        ) : (
          <h1>No hay mensajes nuevos</h1>
        )}
      </div>
      <div className="bloqueForm">
        <FormularioMensajes
          key={mensajes.id}
          onCrearMensaje={crearNuevoMensaje}
        />
        <h2>Mensajes:</h2>
        <div className="">
          <ul style={{ listStyleType: "none" }}>
            {nuevosMensajes.map((elemento) => {
              return (
                <li>
                  <ListarMensajesNuevos
                    key={nuevosMensajes.id}
                    mensaje={elemento}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
