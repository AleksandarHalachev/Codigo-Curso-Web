import "./App.css";
import Animal from "./components/Animal";
import FormularioAñadir from "./components/FormularioAñadir";
import { useState } from "react";

const mascotas = [
  {
    id: 1,
    nombre: "Pedro",
    raza: "Gato Siamés",
    edad: 10,
    diagnostico: "Cólicos",
    propietario: "Jacobo el Risas",
  },
  {
    id: 2,
    nombre: "Gigachad",
    raza: "Perro Pastor Alemán",
    edad: 3,
    diagnostico: "Infección",
    propietario: "Fernando Alonso",
  },
  {
    id: 3,
    nombre: "Sid",
    raza: "Perezoso",
    edad: 20,
    diagnostico: "Sobrepeso",
    propietario: "Mani el Mamut",
  },
  {
    id: 4,
    nombre: "Mickey Mouse",
    raza: "Ratón",
    edad: 94,
    diagnostico: "Macrocefalia",
    propietario: "Walt Disney",
  },
];
function App() {
  const [nuevosAnimales, setNuevosAnimales] = useState(mascotas);
  const añadeMascota = (mascota) => {
    setNuevosAnimales([...nuevosAnimales, mascota]);
  };
  return (
    <div className="App">
      <div className="title">
        <h1 className="titleText">Añadir a lista de animales</h1>
      </div>
      <div className="mascotas">
        <div className="formulario">
          <FormularioAñadir key={mascotas.id} onAñadirMascota={añadeMascota} />
        </div>
        <div className="listar">
          {nuevosAnimales.map((elemento) => {
            return <Animal key={elemento.id} animal={elemento} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
