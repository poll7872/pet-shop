import { axiosInstance } from "./axiosInstance";

interface LoginData {
  email: string
  password: string
}

interface LoginResponse {
  message: string
  token: string
}

export const loginUser = async (loginData: LoginData): Promise<LoginResponse> => {
  const response = await axiosInstance.post<LoginResponse>('/users/login', loginData)
  return response.data
}
