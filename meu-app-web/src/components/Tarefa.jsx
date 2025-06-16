import React from "react";
import "./Tarefa.css";

const Tarefa = () => {
    return (
        <div className="tarefa-container">
            <div className="tarefa-checkbox">
                <input type="checkbox" className="tarefa-checkbox-input" />
            </div>
            <p className="tarefa-texto">Relatório de desempenho do projeto X</p>
            <p className="tarefa-data">25/08/2025</p>
        </div>
    );
}

export default Tarefa;