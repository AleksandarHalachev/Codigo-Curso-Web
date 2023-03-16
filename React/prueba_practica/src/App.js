import trabajos from "./data/Datos.js";
import Listado from "./components/Listado";

const App = () => {
  const fase = "launch";
  return (
    <div>
      <Listado trabajos={trabajos} fase={fase} />
    </div>
  );
};

export default App;
