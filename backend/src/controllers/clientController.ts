import { Request, Response } from 'express'
import Client from '../models/Client';

// Método para obtener todos los clientes
export const getAllClients = async (req: Request, res: Response): Promise<void> => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: 'error in obtaining the clients', error });
  }
};

// Método para crear un cliente
export const addClient = async (req: Request, res: Response): Promise<void> => {
  const { firstname, lastname, email, address, phone } = req.body

  try {
    const newClient = new Client({
      firstname,
      lastname,
      email,
      address,
      phone
    })

    const saveClient = await newClient.save()
    res.status(201).json(saveClient);
  } catch (error) {
    res.status(500).json({ message: 'error when creating the product', error });
  }
};
