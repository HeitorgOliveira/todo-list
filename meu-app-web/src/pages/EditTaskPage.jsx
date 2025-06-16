import React from "react";
import { Link } from "react-router-dom";
import "./EditTaskPage.css";

const EditTaskPage = () => {
  return (
    <div className="edit-task-container">
      <main className="edit-task-main">
        <div className="edit-task-card">
          <h2 className="edit-task-title">EDITAR TAREFA</h2>

          <form className="edit-task-form">
            <div className="form-group">
              <label htmlFor="nome" className="form-label">Nome:</label>
              <input
                type="text"
                id="nome"
                className="form-input"
                placeholder="Relatário de Vendas"
              />
            </div>

            <div className="form-group">
              <label htmlFor="prazo" className="form-label">Prazo:</label>
              <input
                type="date"
                id="prazo"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="descricao" className="form-label">Descrição:</label>
              <textarea
                id="descricao"
                className="form-input description-input"
                placeholder="Sua tarefa é elaborar o relatório da viagem de negócios, incluindo todas as informações relevantes sobre os encontros, reuniões, negociações e decisões tomadas durante a viagem."
                rows="5"
              ></textarea>
            </div>

            <div className="button-group">
              <button type="button" className="cancelar-button">
                <Link to="/todo-list" style={{ color: "inherit", textDecoration: "none" }}>
                  Cancelar
                </Link>
              </button>
              <button type="submit" className="login-button">
                <Link to="/todo-list" style={{ color: "inherit", textDecoration: "none" }}>
                  Salvar → 
                </Link>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditTaskPage;