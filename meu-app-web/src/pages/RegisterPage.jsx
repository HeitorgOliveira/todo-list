import React from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="register-container">

      {/* Conteúdo Principal */}
      <main className="register-main">
        <div className="register-card">
          <h2 className="register-title">CADASTRO</h2>
          <form className="register-form">

            <div className="form-group">
              <label htmlFor="nome" className="form-label">Nome:</label>
              <input
                type="text"
                id="nome"
                className="form-input"
                placeholder="digite aqui"
              />
            </div>

            <div className="form-group">
              <label htmlFor="data de nascimento" className="form-label">Data de Nascimento:</label>
              <input
                type="date"
                id="data-de-nascimento"
                className="form-input"
                placeholder="digite aqui"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cpf" className="form-label">CPF:</label>
              <input
                type="text"
                id="cpf"
                className="form-input"
                placeholder="digite aqui"
              />
            </div>

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
              <button type="submit" className="register-button">
                <Link to="/login" style={{color: 'inherit', textDecoration: 'none'}}>
                  Criar →
                </Link>
              </button>

            <p className="login-link">
              Já tem uma conta? <Link to="/login">Faça login</Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;