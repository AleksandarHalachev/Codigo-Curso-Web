import Formulario from "./components/Formulario";
import "./App.css";
import Lista from "./components/Lista";

function App() {
  return (
    <div>
      {/* Ejercicio1 */}
      <h1>Esto es un h1</h1>
      <h2>Esto es un h2</h2>
      <p>Esto es un párrafo</p>
      <ul>
        <li>Esto es una lista</li>
        <li>Otro elemento</li>
        <li>Otro</li>
      </ul>
      {/* Ejercicio2 */}
      <div className="App">
        <Formulario />
      </div>
      {/* Ejercicio2 */}
      <Lista />
    </div>
  );
}

export default App;
