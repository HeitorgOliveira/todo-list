import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

const LoggedHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
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
          <NavLink to="/todo-list" className="nav-link">DASHBOARD</NavLink>
          <NavLink to="/create-task" className="nav-link">CRIAR TAREFA</NavLink>
          <NavLink to="/profile" className="nav-link">PERFIL</NavLink>
          <button onClick={handleLogout} className="nav-link logout-button">SAIR</button>
        </nav>
      </div>
    </header>
  );
};

export default LoggedHeader;
