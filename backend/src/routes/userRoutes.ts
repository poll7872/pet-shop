import { Router } from "express";
import { registerUser, loginUser } from "../controllers/userController";

const router = Router()

// Ruta para registrar un usuario
router.post('/register', registerUser)

// Ruta para iniciar sesión
router.post('/login', loginUser)

export default router
