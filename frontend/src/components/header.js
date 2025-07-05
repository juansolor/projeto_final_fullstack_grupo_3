// frontend/src/components/Header.js

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
// No importamos un Header.css porque usaremos el CSS global

const Header = () => {
  return (
    // El <header> envuelve ambas franjas y lo hacemos fijo
    <header className="header-fijo">
      {/* === FRANJA VERDE SUPERIOR === */}
      <div className="franja-superior">
        <div className="contenido-limitado">
          {/* Grupo Izquierdo: Logo y Título */}
          <div className="header-izquierda">
            <img src={logo} alt="Logo Grupo 3" className="logo-img" />
            <h1 className="logo-texto">E-Commerce Toti | Grupo 3</h1>
          </div>

          {/* Grupo Derecho: Iconos */}
          <div className="header-derecha">
            <Link to="/carrinho" className="header-icono">🛒 Carrito</Link>
            <Link to="/login" className="header-icono">👤 Perfil</Link>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;