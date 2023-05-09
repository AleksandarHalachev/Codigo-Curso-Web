import React, { useState, useEffect } from "react";
import axios from "axios";

const VerTareas = ({ userId }) => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const obtenerTareas = async () => {
      try {
        const response = await axios.get(`/mistareas/usuario/${userId}`);
        setTareas(response.data.tareas);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerTareas();
  }, [userId]);

  return (
    <div>
      <h2>Todas las tareas del usuario:</h2>
      {tareas.length > 0 ? (
        <ul>
          {tareas.map((tarea) => (
            <li key={tarea._id}>
              <h3>{tarea.titulo}</h3>
              <p>{tarea.descripcion}</p>
              <p>Categoría: {tarea.categoria}</p>
              <p>Fecha de creación: {tarea.fechaCreacion}</p>
              <p>Fecha de expiración: {tarea.fechaExpiracion}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay tareas para mostrar</p>
      )}
    </div>
  );
};

export default VerTareas;
