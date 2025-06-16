import React from "react";
import { Link } from "react-router-dom";
import "./FilterPage.css";

const FilterPage = () => {
  return (
    <div className="filter-container">
      <main className="filter-main">
        <div className="filter-card">
          <h2 className="filter-title">FILTRAR TAREFAS</h2>
          
          <form className="filter-form">
            <div className="filter-options">
              <div className="filter-option">
                <input 
                  type="checkbox" 
                  id="concluidas" 
                  className="filter-checkbox"
                />
                <label htmlFor="concluidas" className="filter-label">
                  Concluídas
                </label>
              </div>
              
              <div className="filter-option">
                <input 
                  type="checkbox" 
                  id="andamento" 
                  className="filter-checkbox"
                  defaultChecked
                />
                <label htmlFor="andamento" className="filter-label">
                  Em andamento
                </label>
              </div>
              
              <div className="filter-option">
                <input 
                  type="checkbox" 
                  id="atrasados" 
                  className="filter-checkbox"
                />
                <label htmlFor="atrasados" className="filter-label">
                  Atrasados
                </label>
              </div>
            </div>

            <div className="button-group">
              <button type="button" className="cancelar-button">
                <Link to="/todo-list" style={{ color: "inherit", textDecoration: "none" }}>
                  Cancelar
                </Link>
              </button>
              <button type="submit" className="login-button">
                <Link to="/todo-list" style={{ color: "inherit", textDecoration: "none" }}>
                  Filtrar →
                </Link>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default FilterPage;