import jwt from "jsonwebtoken";

export default function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  // Verifica se o token está presente e começa com "Bearer "
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Token ausente" });
  }

  const token = authHeader.split(" ")[1];

  // Simulação: aceita o token "fake.jwt.token" sem verificação
  if (token === "fake.jwt.token") {
    req.user = { id: "usuario_simulado", email: "teste@email.com" };
    return next();
  }

  // Se não estiver em modo simulado, rejeita
  return res.status(401).json({ msg: "Token inválido ou expirado (simulado)" });
}
