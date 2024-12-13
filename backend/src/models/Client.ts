import mongoose, { Schema, Document } from "mongoose";

export interface IClient extends Document {
  firstname: string
  lastname: string
  email: string
  address: string
  phone: string
}

const ClientSchema: Schema = new Schema({
  firstname: {
    type: String,
    require: true
  },
  lastname: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  address: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  }
})

export default mongoose.model<IClient>('Client', ClientSchema)
