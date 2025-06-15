import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Componentes
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskManager from "./components/TaskManager";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<TaskManager />} />
            <Route path="/login" element={<LoginPage />} />
            {/* Adicione outras rotas conforme necessário */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;