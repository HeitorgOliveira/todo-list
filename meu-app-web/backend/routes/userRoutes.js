import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import { getProfile, updateProfile } from "../controllers/userController.js";

const router = express.Router();

router.get("/me", verifyToken, getProfile);
router.put("/me", verifyToken, updateProfile);

export default router;
