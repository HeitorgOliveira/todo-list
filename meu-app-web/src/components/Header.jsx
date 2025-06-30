import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

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
          {isLoggedIn ? (
            <>
              <NavLink to="/todo-list" className="nav-link">DASHBOARD</NavLink>
              <NavLink to="/create-task" className="nav-link">CRIAR TAREFA</NavLink>
              <NavLink to="/profile" className="nav-link">PERFIL</NavLink>
              <button onClick={handleLogout} className="todo-list-button-criar">SAIR</button>
            </>
          ) : (
            <>
              <NavLink to="/" className="nav-link">HOME</NavLink>
              <NavLink to="/register" className="nav-link">CRIAR CONTA</NavLink>
              <button onClick={handleLoginClick} className="todo-list-button-criar">ENTRAR</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
