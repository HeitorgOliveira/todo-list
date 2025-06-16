import React, { useState } from 'react';
import './EditProfilePage.css';
import { Link } from 'react-router-dom';

const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: "JOÃO DA SILVA",
    birthDate: "11/11/2001",
    cpf: "11.11.11-11-11",
    email: "joaosilva@gmail.com"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>{profile.name}</h1>
      </div>
      
      <div className="profile-info-grid">
        <div className="info-item">
          <label className="info-label">Data de nascimento</label>
          <input
            type="text"
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
        <Link to="/profile" className="profile-button cancel-button">Cancelar</Link>
        <Link to="/profile" className="profile-button save-button">Salvar</Link>
      </div>
    </div>
  );
};

export default EditProfile;