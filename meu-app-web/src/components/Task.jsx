import React from "react";
import { useNavigate } from "react-router-dom";
import "./Task.css";

const Task = ({ task, onDelete, onToggle }) => {
  const navigate = useNavigate();
  const checked = task.status === "concluída";

  return (
    <div className="task-container">
      <div className="task-header">
        <h2 className="task-title">{task.title}</h2>

        <div className="task-actions">
          <b className={checked ? "task-status-ok" : "task-status-pendente"}>
            {checked ? "Concluída" : "Pendente"}
          </b>

          <button className="task-edit-button" onClick={() => navigate(`/edit-task/${task._id}`)}>
  Editar
</button>

          <button
            className="task-delete-button"
            onClick={() => onDelete(task._id)}
          >
            Excluir
          </button>
        </div>
      </div>

      <div className="task-content">
        <div className="task-checkbox">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onToggle(task._id, e.target.checked)}
          />
        </div>

        <p className="task-text">{task.description}</p>
      </div>
    </div>
  );
};

export default Task;
