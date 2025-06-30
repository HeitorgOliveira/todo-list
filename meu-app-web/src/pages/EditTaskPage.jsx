import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./EditTaskPage.css";

const EditTaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [erro, setErro] = useState("");

  // Carrega a tarefa ao abrir a página
  useEffect(() => {
    fetch(`http://localhost:5000/api/tasks`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(tasks => {
        const tarefa = tasks.find(t => t._id === id);
        if (tarefa) {
          setTitle(tarefa.title);
          setDescription(tarefa.description || "");
          setDueDate(tarefa.dueDate ? tarefa.dueDate.slice(0, 10) : "");
        } else {
          setErro("Tarefa não encontrada.");
        }
      })
      .catch(() => setErro("Erro ao carregar tarefa."));
  }, [id, token]);

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ title, description, dueDate })
    })
      .then(res => {
        if (!res.ok) throw new Error("Erro ao salvar");
        navigate("/todo-list");
      })
      .catch(() => alert("Erro ao salvar alterações"));
  };

  return (
    <div className="edit-task-container">
      <main className="edit-task-main">
        <div className="edit-task-card">
          <h2 className="edit-task-title">EDITAR TAREFA</h2>

          <form className="edit-task-form" onSubmit={handleSubmit}>
            {erro && <p style={{ color: "red" }}>{erro}</p>}

            <div className="form-group">
              <label htmlFor="nome" className="form-label">Nome:</label>
              <input
                type="text"
                id="nome"
                className="form-input"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="prazo" className="form-label">Prazo:</label>
              <input
                type="date"
                id="prazo"
                className="form-input"
                value={dueDate}
                onChange={e => setDueDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="descricao" className="form-label">Descrição:</label>
              <textarea
                id="descricao"
                className="form-input description-input"
                rows="5"
                value={description}
                onChange={e => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="button-group">
              <button type="button" className="cancelar-button">
                <Link to="/todo-list" style={{ color: "inherit", textDecoration: "none" }}>
                  Cancelar
                </Link>
              </button>
              <button type="submit" className="login-button">
                Salvar →
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditTaskPage;
