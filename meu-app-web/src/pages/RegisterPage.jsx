import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterPage.css";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    birthDate: "",
    cpf: "",
    email: "",
    password: ""
  });

  const [toast, setToast] = useState(null); // estado para mensagem de sucesso/erro

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const showToast = (message, duration = 3000) => {
    setToast(message);
    setTimeout(() => setToast(null), duration);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        showToast("Cadastro realizado com sucesso!");
        setTimeout(() => navigate("/login"), 1500); // espera um pouco antes de redirecionar
      } else {
        const erro = await response.json();
        showToast("Erro no cadastro: " + erro.msg);
      }
    } catch (err) {
      console.error("Erro na requisição:", err);
      showToast("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="register-container">
      {toast && <div className="custom-toast">{toast}</div>}

      <main className="register-main">
        <div className="register-card">
          <h2 className="register-title">CADASTRO</h2>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nome:</label>
              <input type="text" id="name" className="form-input" placeholder="digite aqui" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="birthDate" className="form-label">Data de Nascimento:</label>
              <input type="date" id="birthDate" className="form-input" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="cpf" className="form-label">CPF:</label>
              <input type="text" id="cpf" className="form-input" placeholder="digite aqui" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">E-mail:</label>
              <input type="email" id="email" className="form-input" placeholder="digite aqui" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Senha:</label>
              <input type="password" id="password" className="form-input" placeholder="digite aqui" onChange={handleChange} />
            </div>

            <button type="submit" className="register-button">
              Criar →
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
