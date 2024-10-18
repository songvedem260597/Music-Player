import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

interface ErrorResponse {
  error: string;
}
const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  withCredentials: true,
});

export const refreshToken = async (): Promise<string | false> => {
  try {
    const response = await API.post('/refresh-token');
    return response.data.access_token;
  } catch (error) {
    console.error('Failed to refresh token', error);
    return false;
  }
};

API.interceptors.response.use(
  response => response,
  async (error: AxiosError<ErrorResponse>) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;
    if (originalRequest && error.response?.status === 401 && error.response?.data?.error === 'invalid_refresh_token' && !originalRequest._retry) {
      originalRequest._retry = true;
      const newAccessToken = await refreshToken();
      if (newAccessToken) {
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return API(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);
export default API;
