import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from "./pages/EditProfilePage";
import CreateTaskPage from './pages/CreateTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import FilterPage from './pages/FilterPage';

// Componentes
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/aaa" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            <Route path="/create-task" element={<CreateTaskPage />} />
            <Route path="/edit-task" element={<EditTaskPage />} />
            <Route path="/" element={<FilterPage />} />
            {/* Adicione outras rotas conforme necessário */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;