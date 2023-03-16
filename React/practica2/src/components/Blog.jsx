import "./Blog.css";
import React from "react";
import ListarElementos from "./ListarElementos";
import ListaElementosEstatica from "./ListaElementosEstatica";
import FormularioMensajes from "./FormularioMensajes";

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
      <div>
        <FormularioMensajes key={mensajes.id} lista={mensajes} />
      </div>
    </div>
  );
};

export default Blog;
