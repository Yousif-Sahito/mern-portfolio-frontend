import { api } from "./axios";

export const sendMessage = async (payload) => {
  const res = await api.post("/api/messages", payload);
  return res.data;
};

export const fetchMessages = async () => {
  const res = await api.get("/api/messages");
  return res.data;
};

export const toggleRead = async (id) => {
  const res = await api.patch(`/api/messages/${id}/toggle-read`);
  return res.data;
};

export const deleteMessage = async (id) => {
  const res = await api.delete(`/api/messages/${id}`);
  return res.data;
};
