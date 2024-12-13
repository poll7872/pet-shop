import { Schema, model, Document } from 'mongoose'

interface IUser extends Document {
  firstName: string
  lastName: string
  phone: string
  email: string
  password: string
}

const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
})

const User = model<IUser>('User', userSchema)

export default User
