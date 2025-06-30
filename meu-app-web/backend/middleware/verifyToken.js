import jwt from "jsonwebtoken";

export default function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  // Verifica se o header existe e se começa com "Bearer "
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Token ausente" });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Decodifica e valida a assinatura do token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Anexa dados do usuário para uso nas rotas seguintes
    req.user = { id: decoded.id, email: decoded.email };
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Token inválido ou expirado" });
  }
}
