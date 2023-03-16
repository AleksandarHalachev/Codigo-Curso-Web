import "./App.css";
import Blog from "./components/Blog";
import Usuarios from "./components/Usuarios";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Usuarios />
        <Blog />
      </div>
    </div>
  );
}

export default App;
