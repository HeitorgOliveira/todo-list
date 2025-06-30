import React from "react";
import { useNavigate } from "react-router-dom";
import "./FilterPage.css";

const FilterPage = () => {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const filters = {
      concluidas: document.getElementById("concluidas").checked,
      andamento: document.getElementById("andamento").checked,
      atrasados: document.getElementById("atrasados").checked,
    };

    localStorage.setItem("taskFilters", JSON.stringify(filters));
    navigate("/todo-list");
  };

  return (
    <div className="filter-container">
      <main className="filter-main">
        <div className="filter-card">
          <h2 className="filter-title">FILTRAR TAREFAS</h2>
          
          <form className="filter-form" onSubmit={handleSubmit}>
            <div className="filter-options">
              <div className="filter-option">
                <input type="checkbox" id="concluidas" className="filter-checkbox" />
                <label htmlFor="concluidas" className="filter-label">Concluídas</label>
              </div>
              <div className="filter-option">
                <input type="checkbox" id="andamento" className="filter-checkbox" defaultChecked />
                <label htmlFor="andamento" className="filter-label">Em andamento</label>
              </div>
              <div className="filter-option">
                <input type="checkbox" id="atrasados" className="filter-checkbox" />
                <label htmlFor="atrasados" className="filter-label">Atrasados</label>
              </div>
            </div>

            <div className="button-group">
              <button type="button" className="cancelar-button" onClick={() => navigate("/todo-list")}>
                Cancelar
              </button>
              <button type="submit" className="login-button">Filtrar →</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default FilterPage;
