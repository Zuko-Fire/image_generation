import axios from 'axios'
import type { AxiosResponse } from 'axios'

const aiApiService = axios.create({ baseURL: import.meta.env.VITE_APP_API_AI_URL })
aiApiService.interceptors.response.use(
  (value): AxiosResponse<unknown> => value.data
)
aiApiService.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)
export default aiApiService
