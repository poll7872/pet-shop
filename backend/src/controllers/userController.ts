import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User'

//Método para registrar un nuevo usuario
export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const { firstName, lastName, phone, email, password } = req.body

  try {
    // 1. Comprobar que el usuario exista
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      res.status(404).json({ messsage: 'User exists' })
      return
    }

    // 2. Hashear la password
    const hashedPassword = await bcrypt.hash(password, 10)

    // 3. Crear o registrar el usuario
    const newUser = new User({ firstName, lastName, phone, email, password: hashedPassword })
    await newUser.save()

    //4. Response un json con exito
    res.status(201).json({ message: 'User successfully created' })
  } catch (error) {
    //5. Si no se creo con exito response un json con el error
    res.status(500).json({ message: 'Error registering user', error })
  }
}

//Método para iniciar sesión con email y password
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body

  try {
    //1. Comprobar que el usuario existe por medio del email 
    const user = await User.findOne({ email })
    if (!user) {
      res.status(404).json({ message: 'user not found' })
      return
    }

    //2. Comprobar que la contraseña sea correcta
    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
      res.status(404).json({ message: 'incorrect password' })
      return
    }

    //3. Crear el token con JWT
    const token = jwt.sign({ id: user._id, email: user.email }, 'secretKey', { expiresIn: '2h' })

    //4. Devolver un JSON de que se registro con exito
    res.status(200).json({ message: 'successful login', token })
  } catch (error) {
    //5. Si obtuvo un error al iniciar responder el error en un JSON
    res.status(500).json({ message: 'Error logging in', error })
  }
}

