import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string
  category: string
  price: number
  description: string
}

const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  description: {
    type: String,
    require: true
  },
})

export default mongoose.model<IProduct>('Product', ProductSchema)
