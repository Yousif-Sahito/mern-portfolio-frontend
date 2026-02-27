
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
  withCredentials: true,
});

// Attach JWT token automatically (only if exists)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});


// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_API_URL;

// if (!BASE_URL) {
//   console.error("❌ VITE_API_URL is missing! Set it in Vercel Environment Variables.");
// }

// export const api = axios.create({
//   baseURL: BASE_URL,
//   withCredentials: true,
// });

// // Attach JWT token automatically (only if exists)
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });