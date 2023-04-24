import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  NavLink,
} from "react-router-dom";
import Inicio from "./pages/Inicio";
import Error from "./pages/Error";
import Docentes from "./pages/Docentes";
import Cursos from "./pages/Cursos";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import Alta from "./pages/Alta";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <NavLink className={"navlink"} to="/">
            Inicio
          </NavLink>
          <NavLink className={"navlink"} to="/docentes">
            Docentes
          </NavLink>
          <NavLink className={"navlink"} to="/cursos">
            Cursos
          </NavLink>
          <NavLink className={"navlink"} to="/signup">
            Crear Cuenta
          </NavLink>
          <NavLink className={"navlink"} to="/login">
            Login
          </NavLink>
          <NavLink className={"navlink"} to="/logout">
            Logout
          </NavLink>
        </div>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/docentes" element={<Docentes />} />
          <Route path="/login" element={<Login />} />

          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Alta />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
