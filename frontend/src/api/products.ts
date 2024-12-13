import { axiosInstance } from "./axiosInstance";

export interface IProduct {
  _id?: string
  name: string
  category: string
  price: number
  description: string
}

export const getProducts = async (): Promise<IProduct[]> => {
  const response = await axiosInstance.get('/products')
  return response.data
}

export const createProduct = async (
  product: Omit<IProduct, "_id">
): Promise<IProduct> => {
  const response = await axiosInstance.post('/products', product)
  return response.data
}


