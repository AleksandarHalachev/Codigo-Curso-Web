import "./App.css";
import Blog from "./pages/Blog";
import Usuarios from "./pages/Usuarios";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Error from "./pages/Error";

function App() {
  return (
    <div style={{ backgroundColor: "orange", height: "100%" }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/usuarios" element={<Usuarios />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
