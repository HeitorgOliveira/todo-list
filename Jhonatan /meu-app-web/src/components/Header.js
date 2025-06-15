import React from "react";
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
          <a href="/" className="nav-link active">HOME</a>
          <a href="/criar-conta" className="nav-link">CRIAR CONTA</a>
          <a href="/entrar" className="nav-link">ENTRAR</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;