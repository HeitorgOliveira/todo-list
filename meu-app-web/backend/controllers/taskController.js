import Task from "../models/Task.js";

/**
 * POST /api/tasks
 * Cria nova tarefa (SIMULADO); remova o return para ativar o código real.
 */
export const createTask = async (req, res) => {
  // Simulação
  return res.status(201).json({
    msg: "Tarefa criada (simulado)",
    body: req.body
  });

  /* ------ Código real (ative depois de conectar ao MongoDB) ------
  try {
    const task = await Task.create({
      ...req.body,
      owner: req.user.id
    });
    return res.status(201).json(task);
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "Erro ao criar tarefa", erro: err.message });
  }
  ----------------------------------------------------------------- */
};

/**
 * GET /api/tasks
 * Lista tarefas (SIMULADO); remova o return para ativar o código real.
 */
export const getTasks = async (req, res) => {
  // Simulação
  return res.json([
    { id: 1, title: "Tarefa simulada A", status: "pendente" },
    { id: 2, title: "Tarefa simulada B", status: "concluida" }
  ]);

  /* ------ Código real (ative depois de conectar ao MongoDB) ------
  try {
    const filter = { owner: req.user.id };
    if (req.query.status) filter.status = req.query.status;

    const tasks = await Task.find(filter).sort({ createdAt: -1 });
    return res.json(tasks);
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "Erro ao buscar tarefas", erro: err.message });
  }
  ----------------------------------------------------------------- */
};

/**
 * PUT /api/tasks/:id
 * Atualiza tarefa (SIMULADO); remova o return para ativar o código real.
 */
export const updateTask = async (req, res) => {
  // Simulação
  return res.json({
    msg: "Tarefa atualizada (simulado)",
    id: req.params.id,
    updates: req.body
  });

  /* ------ Código real (ative depois de conectar ao MongoDB) ------
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
  ----------------------------------------------------------------- */
};

/**
 * DELETE /api/tasks/:id
 * Remove tarefa (SIMULADO); remova o return para ativar o código real.
 */
export const deleteTask = async (req, res) => {
  // Simulação
  return res.json({ msg: "Tarefa removida (simulado)", id: req.params.id });

  /* ------ Código real (ative depois de conectar ao MongoDB) ------
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
    return res
      .status(500)
      .json({ msg: "Erro ao remover tarefa", erro: err.message });
  }
  ----------------------------------------------------------------- */
};
