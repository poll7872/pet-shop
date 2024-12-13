
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BoxFilled, BuildingPeopleFilled, DoorArrowLeftFilled, PeopleFilled } from "@fluentui/react-icons";

export const Sidebar: React.FC = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
    navigate('/login')
  };


  return (
    <aside className="sidebar">
      <img src="/logo.png" alt="logo paw-shop" />
      <nav>
        <ul>
          <li className="li-side">
            <BoxFilled className="icons-side" />
            <NavLink to="/productos">
              Productos
            </NavLink>
          </li>
          <li className="li-side">
            <BuildingPeopleFilled className="icons-side" />
            <NavLink to="/clientes">
              Clientes
            </NavLink>
          </li>
          <li className="li-side">
            <PeopleFilled className="icons-side" />
            <NavLink to="/usuarios">
              Usuarios
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="btn-logout" onClick={handleLogout}>
        <DoorArrowLeftFilled className="icons-side" />
        Salir
      </button>
    </aside>
  );
};

