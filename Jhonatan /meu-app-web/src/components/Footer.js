import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
        <div className="footer-container">
            <div className="footer-top">
            {/* Seção da Marca */}
            <div className="footer-brand">
                <div className="footer-logo">
                <img 
                    src={process.env.PUBLIC_URL + "/images/logo2.png"} 
                    alt="ICMC Júnior"
                    className="footer-logo-image"
                />
                </div>
                <p className="footer-description">
                Empresa júnior do Instituto de Ciências Matemáticas e de Computação da USP oferecendo soluções tecnológicas inovadoras desde 1993.
                </p>
            </div>

            {/* Seções de Links - agora parte do mesmo grid */}
            <div className="footer-sections">
                <div className="footer-section">
                <h3 className="section-title">Sobre</h3>
                <ul className="footer-links">
                    <li>Por trás da produtividade</li>
                </ul>
                </div>

                <div className="footer-section">
                <h3 className="section-title">Soluções</h3>
                <ul className="footer-links">
                    <li><a href="#">ToDo List</a></li>
                    <li><a href="#">Tarefas</a></li>
                    <li><a href="#">Perfil</a></li>
                </ul>
                </div>

                <div className="footer-section">
                <h3 className="section-title">Links Rápidos</h3>
                <ul className="footer-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
                </div>
            </div>
            </div>

            {/* Rodapé inferior (mantido igual) */}
            <div className="footer-bottom">
            <hr className="footer-icmc" />
            <img 
                src={process.env.PUBLIC_URL + "/images/icmc.png"} 
                alt="ICMC Júnior"
                className="footer-icmc-image"
                />
            </div>
        </div>
    </footer>
  );
};

export default Footer;