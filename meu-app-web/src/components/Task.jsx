import React from 'react'
import './Task.css'

const Task = () => {
  return (
    <div className="task-container">
      <div className="task-header">
        <h2 className="task-title">Relatório</h2>
        <div className="task-actions">
            <b className="task-status-ok">Enviado</b>
            <button className="task-edit-button">Editar</button>
            <button className="task-delete-button">Excluir</button>
        </div>
      </div>
      <div className="task-content">
        <div className="task-checkbox">
            <input type="checkbox" className="task-checkbox-input" />
        </div>
        <div className="task-description">{
            <p className="task-text">Relatório de desempenho do projeto X</p>
        }
        </div>
      </div>
    </div>
  )
}

export default Task;