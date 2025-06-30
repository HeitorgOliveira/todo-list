import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Gera um token JWT usando o segredo do .env
function gerarToken(userId, email) {
  return jwt.sign(
    { id: userId, email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
  );
}

// POST /api/auth/register
export const register = async (req, res) => {
  const { name, birthDate, cpf, email, password } = req.body;

  try {
    // Verifica se e-mail já existe
    const existe = await User.findOne({ email });
    if (existe) {
      return res.status(409).json({ msg: "E-mail já cadastrado" });
    }

    // Cria usuário (senha será hash via pre('save') no modelo)
    const novoUsuario = await User.create({
      name,
      birthDate,
      cpf,
      email,
      password
    });

    // Gera token e devolve
    const token = gerarToken(novoUsuario._id, novoUsuario.email);
    return res.status(201).json({ token });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "Erro no cadastro", erro: err.message });
  }
};

// POST /api/auth/login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // busca o usuário e inclui o campo password
    const usuario = await User.findOne({ email }).select("+password");
    if (!usuario) {
      return res.status(401).json({ msg: "E-mail ou senha inválidos" });
    }

    const senhaOk = await usuario.matchPassword(password);
    if (!senhaOk) {
      return res.status(401).json({ msg: "E-mail ou senha inválidos" });
    }

    const token = gerarToken(usuario._id, usuario.email);
    return res.json({ token });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "Erro no login", erro: err.message });
  }
};
