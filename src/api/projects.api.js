import { api } from "./axios";

export const fetchProjects = async () => {
  const res = await api.get("/api/projects");
  return res.data;
};

export const createProject = async (formData) => {
  const res = await api.post("/api/projects", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const updateProject = async ({ id, formData }) => {
  const res = await api.put(`/api/projects/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const deleteProject = async (id) => {
  const res = await api.delete(`/api/projects/${id}`);
  return res.data;
};
