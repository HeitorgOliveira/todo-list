import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="header-logo">
          <img 
            src={process.env.PUBLIC_URL + "/images/logo.png"} 
            alt="ICMC Júnior"
            className="header-logo-image"
          />
        </div>
        <nav className="header-nav">
          <NavLink to="/" className="nav-link">HOME</NavLink>
          <NavLink to="/register" className="nav-link">CRIAR CONTA</NavLink>
          <NavLink to="/login" className="nav-link">ENTRAR</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;