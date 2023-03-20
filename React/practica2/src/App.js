import "./App.css";
import Blog from "./pages/Blog";
import Usuarios from "./pages/Usuarios";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/usuarios" element={<Usuarios />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
