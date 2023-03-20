import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <NavLink to="./">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="./blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="./usuarios">Usuarios</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
