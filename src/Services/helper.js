import axios from "axios";
import { getToken } from "../auth";

export const BASE_URL = 'ehms-server-production.up.railway.app';

export const myAxios = axios.create({
  baseURL: BASE_URL
});

export const privateAxios = axios.create({
  baseURL: BASE_URL
});

privateAxios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default privateAxios;
