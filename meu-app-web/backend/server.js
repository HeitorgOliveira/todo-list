import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Inicia servidor 
app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);

//Conexão opcional ao BD
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB conectado"))
    .catch((err) =>
      console.error("Falha ao conectar no MongoDB:", err.message)
    );
} else {
  console.warn("MONGO_URI não definido – rodando sem banco por enquanto");
}
