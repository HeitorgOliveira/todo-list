import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateTaskPage.css";

const CreateTaskPage = () => {
  const [task, setTask] = useState({
    title: "",
    dueDate: "",
    description: ""
  });
  const [toast, setToast] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setTask((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // payload só com campos válidos
    const payload = {
      title: task.title,
      description: task.description
    };
    if (task.dueDate) payload.dueDate = task.dueDate;

    fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    })
      .then(async (res) => {
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.msg || "Erro ao criar tarefa");
        }
        return res.json();
      })
      .then(() => {
        setToast("Tarefa criada com sucesso!");
        setTimeout(() => navigate("/todo-list"), 1000);
      })
      .catch((err) => setToast(err.message));
  };

  return (
    <div className="create-task-container">
      {toast && <div className="custom-toast">{toast}</div>}

      <main className="create-task-main">
        <div className="create-task-card">
          <h2 className="create-task-title">CRIAR TAREFA</h2>

          <form className="create-task-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title" className="form-label">Nome:</label>
              <input
                type="text"
                id="title"
                className="form-input"
                placeholder="Digite o nome da tarefa"
                value={task.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="dueDate" className="form-label">Prazo:</label>
              <input
                type="date"
                id="dueDate"
                className="form-input"
                value={task.dueDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description" className="form-label">Descrição:</label>
              <textarea
                id="description"
                className="form-input description-input"
                placeholder="Descreva a tarefa aqui..."
                rows="5"
                value={task.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="button-group">
              <button
                type="button"
                className="cancelar-button"
                onClick={() => navigate("/todo-list")}
              >
                Cancelar
              </button>
              <button type="submit" className="login-button">
                Criar →
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateTaskPage;
