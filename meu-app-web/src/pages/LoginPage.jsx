import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const showToast = (msg, ms = 3000) => {
    setToast(msg);
    setTimeout(() => setToast(null), ms);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        const { token } = await res.json();
        localStorage.setItem("token", token);
        showToast("Login realizado com sucesso!");
        setTimeout(() => navigate("/todo-list"), 1200);
      } else {
        const err = await res.json();
        showToast("Erro: " + err.msg);
      }
    } catch (err) {
      console.error(err);
      showToast("Falha ao conectar ao servidor.");
    }
  };

  return (
    <div className="login-container">
      {toast && <div className="custom-toast">{toast}</div>}

      <main className="login-main">
        <div className="login-card">
          <h2 className="login-title">LOGIN</h2>
          
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">E-mail:</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="digite aqui"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Senha:</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="digite aqui"
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="login-button">
              Entrar →
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
