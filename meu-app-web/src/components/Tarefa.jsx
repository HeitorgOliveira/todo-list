import React from "react";
import "./Tarefa.css";

const Tarefa = ({ task, onToggle }) => {
  const date = task.dueDate
    ? new Date(task.dueDate).toLocaleDateString("pt-BR")
    : "";
  const checked = task.status === "concluída";

  return (
    <div className="tarefa-container">
      <div className="tarefa-checkbox">
        <input
          type="checkbox"
          className="tarefa-checkbox-input"
          checked={checked}
          onChange={(e) => onToggle(task._id, e.target.checked)}
        />
      </div>
      <p className="tarefa-texto">{task.title}</p>
      <p className="tarefa-data">{date}</p>
    </div>
  );
};

export default Tarefa;
