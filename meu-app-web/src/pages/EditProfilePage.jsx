import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditProfilePage.css";

const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    birthDate: "",
    cpf: "",
    email: ""
  });
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Busca os dados do usuário ao carregar a página
  useEffect(() => {
    fetch("http://localhost:5000/api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(async res => {
        if (!res.ok) {
          const erro = await res.json();
          throw new Error(erro.msg || "Erro ao carregar perfil");
        }
        return res.json();
      })
      .then(data => {
        setProfile({
          name: data.name || "",
          birthDate: data.birthDate?.substring(0, 10) || "",
          cpf: data.cpf || "",
          email: data.email || ""
        });
        setLoading(false);
      })
      .catch(err => {
        setToast(err.message);
        setLoading(false);
      });
  }, [token]);

  const handleChange = e => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    fetch("http://localhost:5000/api/users/me", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(profile)
    })
      .then(async res => {
        if (!res.ok) {
          const erro = await res.json();
          throw new Error(erro.msg || "Erro ao salvar perfil");
        }
        return res.json();
      })
      .then(() => {
        setToast("Perfil atualizado");
        setTimeout(() => navigate("/profile"), 1200);
      })
      .catch(err => setToast(err.message));
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="profile-container">
      {toast && <div className="custom-toast">{toast}</div>}

      <div className="profile-header">
        <h1>{profile.name}</h1>
      </div>

      <div className="profile-info-grid">
        <div className="info-item">
          <label className="info-label">Nome</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="info-input"
          />
        </div>

        <div className="info-item">
          <label className="info-label">Data de nascimento</label>
          <input
            type="date"
            name="birthDate"
            value={profile.birthDate}
            onChange={handleChange}
            className="info-input"
          />
        </div>

        <div className="info-item">
          <label className="info-label">CPF</label>
          <input
            type="text"
            name="cpf"
            value={profile.cpf}
            onChange={handleChange}
            className="info-input"
          />
        </div>

        <div className="info-item">
          <label className="info-label">E-mail</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="info-input"
          />
        </div>
      </div>

      <div className="profile-actions">
        <button
          className="profile-button cancel-button"
          onClick={() => navigate("/profile")}
        >
          Cancelar
        </button>
        <button className="profile-button save-button" onClick={handleSave}>
          Salvar
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
