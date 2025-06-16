import React from 'react';
import './ProfilePage.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>JOÃO DA SILVA</h1>
      </div>
      
      <div className="profile-info-grid">
        <div className="info-item">
          <span className="info-label">Data de nascimento</span>
          <span className="info-value">01/01/2001</span>
        </div>
        
        <div className="info-item">
          <span className="info-label">CPF</span>
          <span className="info-value">123.456.789-11</span>
        </div>
        
        <div className="info-item">
          <span className="info-label">E-mail</span>
          <span className="info-value">joaosilva@gmail.com</span>
        </div>
      </div>
      
      <div className="profile-actions">
        <Link to="/todo-list" className="profile-button home-button">Home</Link>
        <Link to="/edit-profile" className="profile-button edit-button">Editar</Link>
      </div>
    </div>
  );
};

export default Profile;