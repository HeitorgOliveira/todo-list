import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-container">

      {/* Conteúdo Principal */}
      <main className="login-main">
        <div className="login-card">
          <h2 className="login-title">LOGIN</h2>
          
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">E-mail:</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="digite aqui"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="senha" className="form-label">Senha:</label>
              <input
                type="password"
                id="senha"
                className="form-input"
                placeholder="digite aqui"
              />
            </div>
            
            <button type="submit" className="login-button">
              <Link to="/todo-list" style={{ color: "inherit", textDecoration: "none" }}>Enter → </Link>
            </button>

            <p className="register-link">
              Não tem uma conta? <Link to="/register">Cadastre-se</Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;