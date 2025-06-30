// controllers/userController.js
import User from "../models/User.js";

// GET /api/users/me → Retorna os dados do usuário autenticado (sem a senha)
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado" });
    }
    return res.json(user);
  } catch (err) {
    return res.status(500).json({ msg: "Erro ao buscar perfil", erro: err.message });
  }
};

// PUT /api/users/me → Atualiza os dados do usuário autenticado
export const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado" });
    }

    user.name = req.body.name ?? user.name;
    user.birthDate = req.body.birthDate ?? user.birthDate;
    user.cpf = req.body.cpf ?? user.cpf;
    user.email = req.body.email ?? user.email;

    const updated = await user.save();

    return res.json({
      name: updated.name,
      birthDate: updated.birthDate,
      cpf: updated.cpf,
      email: updated.email
    });
  } catch (err) {
    return res.status(500).json({ msg: "Erro ao atualizar perfil", erro: err.message });
  }
};
