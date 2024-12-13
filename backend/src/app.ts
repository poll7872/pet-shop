import express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes'
import productRoutes from './routes/productRoutes'
import clientRoutes from './routes/clientRoutes'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/clients', clientRoutes)


export default app
