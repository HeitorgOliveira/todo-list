import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TaskCard from "../components/Task";
import TaskRow from "../components/Tarefa";
import "./ToDoListPage.css";

const ToDoListPage = () => {
  const [tasks, setTasks] = useState([]);
  const [allTasks, setAllTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:5000/api/tasks", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(async res => {
        if (!res.ok) throw new Error((await res.json()).msg);
        return res.json();
      })
      .then(data => {
        setAllTasks(data);
        setLoading(false);
      })
      .catch(err => {
        setErro(err.message);
        setLoading(false);
      });
  }, [token]);

  useEffect(() => {
    if (!loading) {
      const filtersStr = localStorage.getItem("taskFilters");
      if (!filtersStr) {
        setTasks(allTasks);
        return;
      }

      const filters = JSON.parse(filtersStr);
      const agora = new Date();

      const filtradas = allTasks.filter(task => {
        const isConcluida = task.status === "concluída";
        const prazo = task.dueDate ? new Date(task.dueDate) : null;
        const isAtrasada = prazo && prazo < agora && task.status !== "concluída";

        return (
          (filters.concluidas && isConcluida) ||
          (filters.andamento && !isConcluida && !isAtrasada) ||
          (filters.atrasados && isAtrasada)
        );
      });

      setTasks(filtradas);
    }
  }, [allTasks, loading]);

  const handleDelete = id => {
    fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.ok && setTasks(prev => prev.filter(t => t._id !== id)))
      .catch(err => alert(err.message));
  };

  const handleToggle = (id, checked) => {
    const novoStatus = checked ? "concluída" : "pendente";
    fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ status: novoStatus })
    })
      .then(res => {
        if (res.ok) {
          setAllTasks(prev =>
            prev.map(t => (t._id === id ? { ...t, status: novoStatus } : t))
          );
        }
      })
      .catch(err => alert(err.message));
  };

  return (
    <div className="todo-list-page">
      <div className="page-layout">

        {/* Coluna esquerda */}
        <div className="todo-list-container">
          <h1>Tarefas</h1>

          <div className="todo-tarefas-action">
            <Link to="/create-task"><button className="todo-list-button-criar">Criar</button></Link>
            <Link to="/filter"><button className="todo-list-button-filtrar">Filtrar</button></Link>
            <Link to="/profile"><button className="todo-list-button-perfil">Perfil</button></Link>
          </div>

          <div className="todo-list-tasks">
            {loading && <p style={{ padding: "1rem" }}>Carregando...</p>}
            {erro && <p style={{ padding: "1rem", color: "red" }}>{erro}</p>}
            {!loading && tasks.length === 0 && (
              <p style={{ padding: "1rem" }}>Nenhuma tarefa cadastrada.</p>
            )}
            {tasks.map(t => (
              <TaskCard
                key={t._id}
                task={t}
                onDelete={handleDelete}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </div>

        {/* Coluna direita */}
        <div className="todo-list-container">
          <h1>Todo-List</h1>

          <div className="container-tarefas">
            <div className="todo-list-tarefas">
              {loading && <p style={{ padding: "1rem" }}>Carregando...</p>}
              {erro && <p style={{ padding: "1rem", color: "red" }}>{erro}</p>}
              {!loading && tasks.length === 0 && (
                <p style={{ padding: "1rem" }}>Nenhuma tarefa cadastrada.</p>
              )}
              {tasks.map(t => (
                <TaskRow key={t._id} task={t} onToggle={handleToggle} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ToDoListPage;
