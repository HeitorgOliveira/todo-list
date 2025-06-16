import { Link } from 'react-router-dom'; 
import React from "react";
import "./Home.css";
import "./LoginPage";

const Home = () => {
  return (
    <div className="app-container">
      <main className="main-content">
        <div className="content-wrapper">
          <div className="home-content">
            <h1>Gerencie tudo <br /> com uma ferramenta <br /> de organização de tarefas.</h1>
            <p>
              Organize sua agenda e o fluxo de trabalho utilizando a ferramenta gratuita de gestão de tarefas. Tenha uma visão clara das tarefas, responsáveis e prazos de entrega, evitando esquecimentos e garantindo o progresso contínuo dos seus projetos.
            </p>
            <div className="cta-button-wrapper">
              <Link to="/login" className="./LoginPage">
                <button className="cta-button">
                  Cadastrar →
                </button>
              </Link>
            </div>
          </div>

          <div className="home-image">
            <img
              src={process.env.PUBLIC_URL + "/images/dashboard.png"}
              alt="Plataforma de tarefas"
              className="platform-image"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;