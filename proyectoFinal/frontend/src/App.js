import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  NavLink,
} from "react-router-dom";
import Inicio from "./pages/Inicio";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Logout from "./pages/Logout";
import { React, useState, useEffect } from "react";
import Tareas from "./pages/Tareas";

const App = () => {
  const [tieneAcceso, setTieneAcceso] = useState(false);
  const [datos, setDatos] = useState({});
  const [datosLogout, setDatosLogout] = useState({});

  const gestionarLogin = (data) => {
    setDatos(data);
    setTieneAcceso(true);
    console.log(tieneAcceso);
  };

  const gestionarLogout = () => {
    setTieneAcceso(false);
    console.log(tieneAcceso);
  };

  return (
    <div className="App">
      <Router>
        <div className="navbar">
          {tieneAcceso === false ? (
            <div>
              <NavLink className={"navlink"} to="/">
                Inicio
              </NavLink>
              <NavLink className={"navlink"} to="/login">
                Login
              </NavLink>
              <NavLink className={"navlink"} to="/signup">
                Crear Cuenta
              </NavLink>
            </div>
          ) : (
            <div>
              <NavLink className={"navlink"} to="/">
                Inicio
              </NavLink>
              <NavLink className={"navlink"} to="/mistareas">
                Mis Tareas
              </NavLink>
              <NavLink className={"navlink"} to="/logout">
                Logout
              </NavLink>
            </div>
          )}
        </div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/mistareas" element={<Tareas />} />
          <Route
            path="/login"
            element={<Login gestionarLogin={gestionarLogin} />}
          />

          <Route
            path="/logout"
            element={<Logout gestionarLogout={gestionarLogout} />}
          />
          <Route path="/signup" element={<Registro />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
