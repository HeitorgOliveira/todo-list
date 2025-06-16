import Header from '../components/Header';
import './ToDoListPage.css'
import Task from '../components/Task';
import React from 'react';
import { Link } from 'react-router-dom'
import Tarefa from '../components/Tarefa';


const ToDoListPage = () => {
    return (
        <div className="todo-list-page">
            <div className="page-layout">
                {/* SEU PRIMEIRO CONTAINER */}
                <div className="todo-list-container">
                    <h1>Tarefas</h1>
                    <div className="todo-tarefas-action">
                        {/* Observação: botões não usam 'href', use o componente <Link> ou onClick */}
                        <Link style={{color: "inherit", textDecoration: "none"}} to="/create-task">
                        <button className="todo-list-button-criar">
                            Criar
                        </button>
                        </Link>
                        <Link style={{color: "inherit", textDecoration: "none"}} to="/filter">
                        <button className="todo-list-button-filtrar">Filtrar</button>
                        </Link>
                    </div>
                    <div className="todo-list-tasks">
                        <Task />
                        <Task />
                        <Task />
                    </div>
                </div>

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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoListPage;