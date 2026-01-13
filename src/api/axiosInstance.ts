import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://mar-backend-production-adf8.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add token automatically
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
