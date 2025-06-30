import { Router } from "express";
import { register, login } from "../controllers/authController.js";
import { getProfile } from "../controllers/userController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = Router();

// Rota de cadastro de usuário
router.post("/register", register);

// Rota de login
router.post("/login", login);

// Rota para obter dados do usuário logado
router.get("/me", verifyToken, getProfile);

export default router;
