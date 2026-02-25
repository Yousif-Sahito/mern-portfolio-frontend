import { api } from "./axios";

export const loginAdmin = async (payload) =>
  (await api.post("/api/auth/login", payload)).data;

export const fetchMe = async () =>
  (await api.get("/api/auth/me")).data;
