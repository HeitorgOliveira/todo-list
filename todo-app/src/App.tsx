import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <h1>Gerencie tudo com uma ferramenta de organização de tarefas</h1>
      </main>
    </div>
  );
}

export default App;
