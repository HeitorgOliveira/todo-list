import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Função auxiliar: gera token JWT com ID e email do usuário
function gerarToken(userId, email) {
  return jwt.sign(
    { id: userId, email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "2h" }
  );
}

// Rota: POST /api/auth/register
export const register = async (req, res) => {
  const { name, birthDate, cpf, email, password } = req.body;

  try {
    const existe = await User.findOne({ email });
    if (existe) {
      return res.status(409).json({ msg: "E-mail já cadastrado" });
    }

    const novoUsuario = await User.create({
      name, birthDate, cpf, email, password
    });

    const token = gerarToken(novoUsuario._id, novoUsuario.email);
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ msg: "Erro no cadastro", erro: err.message });
  }
};

// Rota: POST /api/auth/login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await User.findOne({ email });
    if (!usuario) {
      return res.status(401).json({ msg: "E-mail ou senha inválidos" });
    }

    const senhaConfere = await usuario.matchPassword(password);
    if (!senhaConfere) {
      return res.status(401).json({ msg: "E-mail ou senha inválidos" });
    }

    const token = gerarToken(usuario._id, usuario.email);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: "Erro no login", erro: err.message });
  }
};