import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ gestionarLogout }) => {
  const navegar = useNavigate();
  useEffect(() => {
    localStorage.removeItem("datosUsuario");
    navegar("/login");
  });
  gestionarLogout();
  return;
};

export default Logout;
