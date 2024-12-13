import { Router } from "express";
import { getAllClients, addClient } from "../controllers/clientController";

const router = Router()

//Ruta para obtener todos los productos
router.get('/', getAllClients)

//Ruta para crear un producto
router.post('/', addClient)

export default router
