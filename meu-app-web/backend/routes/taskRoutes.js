import { Router } from "express";
import verifyToken from "../middleware/verifyToken.js";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} from "../controllers/taskController.js";

const router = Router();

// Todas as rotas abaixo exigem usuário autenticado
router.use(verifyToken);

// POST /api/tasks → cria nova tarefa
router.post("/", createTask);

// GET /api/tasks → lista tarefas (pode filtrar por status)
router.get("/", getTasks);

// PUT /api/tasks/:id → atualiza uma tarefa
router.put("/:id", updateTask);

// DELETE /api/tasks/:id → deleta uma tarefa
router.delete("/:id", deleteTask);

export default router;