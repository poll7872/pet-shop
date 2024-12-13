import { axiosInstance } from "./axiosInstance";

export interface IClient {
  _id?: string
  firstname: string
  lastname: string
  email: string
  address: string
  phone: string
}

export const getClients = async (): Promise<IClient[]> => {
  const response = await axiosInstance.get('/clients')
  return response.data
}

export const createClient = async (
  client: Omit<IClient, "_id">
): Promise<IClient> => {
  const response = await axiosInstance.post('/clients', client)
  return response.data
}


