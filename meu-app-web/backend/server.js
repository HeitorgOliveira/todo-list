// Dependências principais 
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Rotas 
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

// Carrega variáveis de ambiente do .env
dotenv.config();

// Cria aplicação Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares 
app.use(cors());          // libera CORS para o front
app.use(express.json());  // permite receber JSON no body

// Rotas principais 
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

// Inicia o servidor 
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

//  Conexão opcional ao MongoDB 
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB conectado"))
    .catch((err) =>
      console.error("Falha ao conectar no MongoDB:", err.message)
    );
} else {
  console.warn("MONGO_URI não definido — rodando sem banco por enquanto");
}
