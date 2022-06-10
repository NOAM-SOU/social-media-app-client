import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/user",
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginApi = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log(config);
  return config;
});

export default api;
