import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Task from '../components/Task';     // parte esquerda (cards com editar/excluir)
import Tarefa from '../components/Tarefa'; // parte direita (lista com checkbox e data)
import './ToDoListPage.css';

const ToDoListPage = () => {
  return (
    <div className="todo-list-page">

      <div className="page-layout">
        {/* Coluna da esquerda - Tarefas */}
        <div className="todo-list-container">
          <h1>Tarefas</h1>

          <div className="todo-tarefas-action">
            <Link to="/create-task">
              <button className="todo-list-button-criar">Criar</button>
            </Link>
            <Link to="/filter">
              <button className="todo-list-button-filtrar">Filtrar</button>
            </Link>
            <Link to="/profile">
              <button className="todo-list-button-perfil">Perfil</button>
            </Link>
          </div>

          <div className="todo-list-tasks">
            <Task />
            <Task />
            <Task />
          </div>
        </div>

        {/* Coluna da direita - Todo List */}
        <div className="todo-list-container">
          <h1>Todo-List</h1>

          <div className="container-tarefas">
            <div className="todo-list-tarefas">
              <Tarefa />
              <Tarefa />
              <Tarefa />
              <Tarefa />
              <Tarefa />
              <Tarefa />
              <Tarefa />
              <Tarefa />
              <Tarefa />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoListPage;
