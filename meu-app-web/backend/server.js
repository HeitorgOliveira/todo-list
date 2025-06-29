// server.js

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Importa as rotas
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

// Carrega variáveis do .env
dotenv.config();

const app = express();

// Middlewares globais
app.use(cors());                  // permite conexões do frontend
app.use(express.json());         // interpreta JSON no corpo das requisições

// Rotas da API
app.use("/api/auth", authRoutes);   // registro e login
app.use("/api/tasks", taskRoutes);  // operações com tarefas

// Conexão com o MongoDB
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conectado ao MongoDB");
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar no MongoDB:", err.message);
  });
