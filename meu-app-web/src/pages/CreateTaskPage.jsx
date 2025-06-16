import React from "react";
import { Link } from "react-router-dom";
import "./CreateTaskPage.css";

const CreateTaskPage = () => {
  return (
    <div className="create-task-container">
      <main className="create-task-main">
        <div className="create-task-card">
          <h2 className="create-task-title">CRIAR TAREFA</h2>

          <form className="create-task-form">
            <div className="form-group">
              <label htmlFor="nome" className="form-label">Nome:</label>
              <input
                type="text"
                id="nome"
                className="form-input"
                placeholder="Digite o nome da tarefa"
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
                placeholder="Descreva a tarefa aqui..."
                rows="5"
              ></textarea>
            </div>

            <div className="button-group">
              <button type="button" className="cancelar-button">
                Cancelar
              </button>
              <button type="submit" className="login-button">
                Criar
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateTaskPage;