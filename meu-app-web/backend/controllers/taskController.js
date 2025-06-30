import Task from "../models/Task.js";

/**
 * POST /api/tasks
 * Cria nova tarefa no MongoDB
 */
export const createTask = async (req, res) => {
  try {
    const task = await Task.create({
      ...req.body,
      owner: req.user.id
    });
    return res.status(201).json(task);
  } catch (err) {
    console.error("Erro ao criar task:", err);
    return res
      .status(500)
      .json({ msg: "Erro ao criar tarefa", erro: err.message });
  }
};

/**
 * GET /api/tasks
 * Lista tarefas do usuário autenticado (filtro opcional por status)
 */
export const getTasks = async (req, res) => {
  try {
    const filter = { owner: req.user.id };

    if (req.query.completed === "true")  filter.completed = true;
    if (req.query.completed === "false") filter.completed = false;

    const tasks = await Task.find(filter).sort({ createdAt: -1 });
    return res.json(tasks);
  } catch (err) {
    return res.status(500).json({ msg: "Erro ao buscar tarefas", erro: err.message });
  }
};

/**
 * PUT /api/tasks/:id
 * Atualiza uma tarefa específica do usuário
 */
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      req.body,
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ msg: "Tarefa não encontrada" });
    }
    return res.json(task);
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "Erro ao atualizar tarefa", erro: err.message });
  }
};

/**
 * DELETE /api/tasks/:id
 * Remove uma tarefa específica do usuário
 */
export const deleteTask = async (req, res) => {
  try {
    const result = await Task.deleteOne({
      _id: req.params.id,
      owner: req.user.id
    });
    if (result.deletedCount === 0) {
      return res.status(404).json({ msg: "Tarefa não encontrada" });
    }
    return res.json({ msg: "Tarefa removida" });
  } catch (err) {
    console.error("Erro ao criar task:", err);
    return res
      .status(500)
      .json({ msg: "Erro ao remover tarefa", erro: err.message });
      
  }
};
