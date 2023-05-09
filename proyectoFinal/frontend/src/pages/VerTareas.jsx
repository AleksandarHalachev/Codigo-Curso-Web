import axios from "axios";
import { useEffect, useState } from "react";
import "./VerTareas.css";

const VerTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [usuario, setUsuario] = useState([]);

  const extraerDatosDeUsuario = () => {
    const datosRecuperar = JSON.parse(localStorage.getItem("datosUsuario"));
    if (datosRecuperar && datosRecuperar.userId) {
      setUsuario(datosRecuperar.userId);
      return datosRecuperar.token;
    }
  };

  useEffect(() => {
    const obtenerTareas = async () => {
      const token = extraerDatosDeUsuario();
      if (token) {
        try {
          const response = await axios.get(
            process.env.REACT_APP_BACKEND_URL + `/mistareas/usuario/${usuario}`,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setTareas(response.data.tareas);
          console.log(response.data.tareas);
        } catch (error) {
          console.error(error);
        }
      }
    };
    obtenerTareas();
  }, [usuario]);

  return (
    <div className="ver-tareas-container">
      <h1>Tareas del usuario</h1>
      <ul>
        {tareas.map((tarea) => (
          <li className="tarea">
            <h1>Título: {tarea.titulo}</h1>
            <p>Descripción: {tarea.descripcion}</p>
            <p>Categoría: {tarea.categoria}</p>
            <p>Creada: {tarea.fechaCreacion}</p>
            <p>Expira: {tarea.fechaExpiracion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerTareas;
