import "./App.css";
import Animal from "./components/Animal";

const mascotas = [
  {
    id: 1,
    nombre: "Pedro",
    raza: "Gato Siamés",
    edad: 10,
    diagnostico: "cólicos",
    propietario: "Jacobo el Risas",
  },
  {
    id: 2,
    nombre: "Gigachad",
    raza: "Perro Pastor Alemán",
    edad: 3,
    diagnostico: "infección",
    propietario: "Fernando Alonso",
  },
  {
    id: 3,
    nombre: "Sid",
    raza: "Perezoso",
    edad: 20,
    diagnostico: "sobrepeso",
    propietario: "Mani el Mamut",
  },
  {
    id: 4,
    nombre: "Mickey Mouse",
    raza: "Ratón",
    edad: 94,
    diagnostico: "macrocefalía",
    propietario: "Walt Disney",
  },
];
function App() {
  return (
    <div className="App">
      <Animal lista={mascotas} />
    </div>
  );
}

export default App;
