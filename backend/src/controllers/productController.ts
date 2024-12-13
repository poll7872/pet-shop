import { Request, Response } from 'express'
import Product from '../models/Product'

// Método para obtener todos los productos
export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'error in obtaining the products', error });
  }
};

// Método para crear un producto
export const addProduct = async (req: Request, res: Response): Promise<void> => {
  const { name, category, price, description } = req.body

  try {
    const newProduct = new Product({
      name,
      category,
      price,
      description
    })

    const saveProduct = await newProduct.save()
    res.status(201).json(saveProduct);
  } catch (error) {
    res.status(500).json({ message: 'error when creating the product', error });
  }
};
