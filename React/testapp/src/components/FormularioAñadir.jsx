import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FormularioAñadir = ({ onAñadirMascota, key }) => {
  const [error, setError] = useState(false);
  const [nuevoNombre, setNombre] = useState("");
  const [nuevaRaza, setRaza] = useState("");
  const [nuevaEdad, setEdad] = useState("");
  const [nuevoDiagnostico, setDiagnostico] = useState("");
  const [nuevoProietario, setPropietario] = useState("");

  const gestorSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (
      nuevoNombre.trim() === "" ||
      nuevaRaza.trim() === "" ||
      nuevaEdad === "" ||
      nuevoDiagnostico.trim() === "" ||
      nuevoProietario.trim() === ""
    ) {
      setError(true);
      return;
    }
    const mascotas = {
      id: uuidv4(),
      nombre: nuevoNombre,
      raza: nuevaRaza,
      edad: nuevaEdad,
      diagnostico: nuevoDiagnostico,
      propietario: nuevoProietario,
    };
    onAñadirMascota(mascotas);

    setNombre("");
    setEdad("");
    setDiagnostico("");
    setPropietario("");
    setRaza("");
  };

  const nameChanger = (e) => {
    setNombre(e.target.value);
  };
  const speciesChanger = (e) => {
    setRaza(e.target.value);
  };
  const ageChanger = (e) => {
    setEdad(parseInt(e.target.value));
  };
  const diagnosisChanger = (e) => {
    setDiagnostico(e.target.value);
  };
  const ownerChanger = (e) => {
    setPropietario(e.target.value);
  };
  return (
    <div>
      <h2>Formulario añadir mascotas</h2>
      {error ? (
        <h4 style={{ color: "red" }}>Completa todos los campos</h4>
      ) : null}
      <form onSubmit={gestorSubmit}>
        <label htmlFor="nombre" className="form-label">
          Nombre de la mascota:
        </label>
        <input
          type="text"
          name="nombre"
          value={nuevoNombre}
          className="form-control form-control-sm"
          onChange={nameChanger}
        />

        <br></br>
        <label htmlFor="raza" className="form-label">
          Introduce la raza:
        </label>
        <input
          type="text"
          value={nuevaRaza}
          className="form-control form-control-sm"
          id="raza"
          onChange={speciesChanger}
        />

        <br></br>
        <label htmlFor="edad" className="form-label">
          Introduce la edad en años:
        </label>
        <input
          type="number"
          name="edad"
          value={nuevaEdad}
          className="form-control form-control-sm"
          onChange={ageChanger}
        />

        <br></br>
        <label htmlFor="diagnostico" className="form-label">
          Introduce diagnóstico:
        </label>
        <input
          type="text"
          name="diagnostico"
          value={nuevoDiagnostico}
          className="form-control form-control-sm"
          onChange={diagnosisChanger}
        />

        <br></br>
        <label htmlFor="propietario" className="form-label">
          Introduce propietario:
        </label>
        <input
          type="text"
          name="propietario"
          value={nuevoProietario}
          className="form-control form-control-sm"
          onChange={ownerChanger}
        />

        <br></br>
        <button type="submit" className="btn btn-outline-dark">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioAñadir;
