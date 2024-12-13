import { Router } from "express";
import { getAllProducts, addProduct } from "../controllers/productController";

const router = Router()

//Ruta para obtener todos los productos
router.get('/', getAllProducts)

//Ruta para crear un producto
router.post('/', addProduct)

export default router
