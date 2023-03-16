import Datos from "./data/datos";
import "./App.css";
import Listado from "./components/Listado";

let fase = prompt(
  "Escriba la fase de desarrolloro para consulatar los proyectos (desarrollo, producción, test o launch):"
);

function App() {
  return <div className="App">{<Listado lista={Datos} fase={fase} />}</div>;
}

export default App;

