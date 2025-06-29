import jwt from "jsonwebtoken";
// import User from "../models/User.js"; // desnecessário no modo simulado

// Gera um token JWT simulado (pode deixar fixo ou gerar aleatoriamente)
function gerarTokenFake() {
  return "fake.jwt.token";
}

// POST /api/auth/register  →  simula criação de usuário
export const register = async (req, res) => {
  return res.status(201).json({ msg: "Usuário registrado (simulado)" });

  /*
  const { name, birthDate, cpf, email, password } = req.body;

  try {
    const existe = await User.findOne({ email });
    if (existe) {
      return res.status(409).json({ msg: "E-mail já cadastrado" });
    }

    const novoUsuario = await User.create({
      name,
      birthDate,
      cpf,
      email,
      password
    });

    const token = jwt.sign(
      { id: novoUsuario._id, email: novoUsuario.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "2h" }
    );

    return res.status(201).json({ token });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "Erro no cadastro", erro: err.message });
  }
  */
};

// POST /api/auth/login  →  simula autenticação
export const login = async (req, res) => {
  return res.json({ token: gerarTokenFake() });

  /*
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

    const token = jwt.sign(
      { id: usuario._id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "2h" }
    );

    return res.json({ token });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "Erro no login", erro: err.message });
  }
  */
};
