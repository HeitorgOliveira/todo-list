import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProfilePage.css";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [erro, setErro] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:5000/api/users/me", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(() => setErro("Erro ao carregar perfil"));
  }, [token]);

  if (erro) return <p>{erro}</p>;
  if (!profile) return <p>Carregando...</p>;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>{profile.name}</h1>
      </div>

      <div className="profile-info-grid">
        <div className="info-item">
          <span className="info-label">Data de nascimento</span>
          <span className="info-value">
            {profile.birthDate
              ? new Date(profile.birthDate).toLocaleDateString("pt-BR")
              : "Não informado"}
          </span>
        </div>

        <div className="info-item">
          <span className="info-label">CPF</span>
          <span className="info-value">{profile.cpf || "Não informado"}</span>
        </div>

        <div className="info-item">
          <span className="info-label">E-mail</span>
          <span className="info-value">{profile.email}</span>
        </div>
      </div>

      <div className="profile-actions">
        <Link to="/todo-list" className="profile-button home-button">
          Home
        </Link>
        <Link to="/edit-profile" className="profile-button edit-button">
          Editar
        </Link>
      </div>
    </div>
  );
};

export default Profile;
