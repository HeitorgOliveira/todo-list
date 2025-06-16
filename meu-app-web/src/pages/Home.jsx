import { Link } from 'react-router-dom'; 
import { FaRobot, FaGamepad, FaUsers, FaEdit, FaBell, FaPaintBrush } from "react-icons/fa";
import { FaTasks, FaCalendarAlt, FaInbox } from "react-icons/fa";
import React from "react";
import "./Home.css";
import "./LoginPage";

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <h2>Vantagens de gerenciar tarefas de forma online</h2>
      <div className="benefits-grid">
        <div className="benefit-card">
          <FaRobot className="benefit-icon" />
          <h3>Vantagem 1</h3>
          <p>
            Auxilio de ferramentas de Inteligência artificial para ajudar a organizar pendências da maneira mais eficiente possível
          </p>
        </div>
        <div className="benefit-card">
          <FaGamepad className="benefit-icon" />
          <h3>Vantagem 2</h3>
          <p>
            Métodos de gamificação para tornar a realização de suas tarefas mais divertida
          </p>
        </div>
        <div className="benefit-card">
          <FaUsers className="benefit-icon" />
          <h3>Vantagem 3</h3>
          <p>
            Possibilidade de compartilhar com amigos e conhecidos e comparar as pendências de cada um, facilitando o trabalho em equipe
          </p>
        </div>
        <div className="benefit-card">
          <FaEdit className="benefit-icon" />
          <h3>Vantagem 4</h3>
          <p>
            Acesso, criação e edição de pendências facilitados. Aumente sua produtividade e crie pendências com poucos cliques
          </p>
        </div>
        <div className="benefit-card">
          <FaBell className="benefit-icon" />
          <h3>Vantagem 5</h3>
          <p>
            Alertas personalizados, receba avisos da forma que achar mais conveniente
          </p>
        </div>
        <div className="benefit-card">
          <FaPaintBrush className="benefit-icon" />
          <h3>Vantagem 6</h3>
          <p>
            Interface bonita e amigável
          </p>
        </div>
      </div>
    </section>
  );
};


const ToolsSection = () => {
  return (
    <section className="tools-section">
      <div className="tools-header">
        <h2>Sua ferramenta definitiva para produtividade</h2>
        <p>
          Mantenha-se organizado e eficiente com a caixa de entrada, quadros e planejador. 
          Cada tarefa, ideia ou compromisso, por menor que seja, tem um espaço dedicado, 
          ajudando você a alcançar o máximo desempenho.
        </p>
      </div>
      
      <div className="tools-grid">
        <div className="tool-card">
          <div className="tool-icon">
            <FaTasks size={40} />
          </div>
          <h3>TO-DO LIST</h3>
          <p>
            Uma ferramenta prática para organizar, priorizar e acompanhar suas tarefas, 
            projetos e compromissos de forma eficiente e visual.
          </p>
        </div>
        
        <div className="tool-card">
          <div className="tool-icon">
            <FaCalendarAlt size={40} />
          </div>
          <h3>Planejador</h3>
          <p>
            Uma ferramenta para organizar o tempo, definir prioridades, programar 
            tarefas e alcançar metas de forma mais estruturada e eficiente.
          </p>
        </div>
        
        <div className="tool-card">
          <div className="tool-icon">
            <FaInbox size={40} />
          </div>
          <h3>Caixa de Entrada</h3>
          <p>
            Capture todas as suas ideias e tarefas em um único lugar para processamento 
            posterior, garantindo que nada seja esquecido.
          </p>
        </div>
      </div>
    </section>
  );
};

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
        <BenefitsSection />
        <ToolsSection />
      </main>
    </div>
  );
};



export default Home;