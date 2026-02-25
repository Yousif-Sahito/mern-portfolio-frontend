import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import ProjectForm from "../../components/admin/ProjectForm";
import ProjectsTable from "../../components/admin/ProjectsTable";
import Loader from "../../components/common/Loader";
import { fetchProjects, createProject, updateProject, deleteProject } from "../../api/projects.api";

export default function AdminProjects() {
  const qc = useQueryClient();
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects
  });

  const [editing, setEditing] = useState(null);
  const [status, setStatus] = useState("");

  const createMut = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["projects"] });
      setStatus("✅ Project created");
    },
    onError: () => setStatus("❌ Create failed")
  });

  const updateMut = useMutation({
    mutationFn: updateProject,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["projects"] });
      setStatus("✅ Project updated");
      setEditing(null);
    },
    onError: () => setStatus("❌ Update failed")
  });

  const deleteMut = useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["projects"] });
      setStatus("✅ Project deleted");
    },
    onError: () => setStatus("❌ Delete failed")
  });

  const submit = (fd) => {
    setStatus("");
    if (editing?._id) {
      updateMut.mutate({ id: editing._id, formData: fd });
    } else {
      createMut.mutate(fd);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Topbar title="Projects" />

        <div className="grid lg:grid-cols-2 gap-4">
          <ProjectForm
            initial={editing}
            onSubmit={submit}
            loading={createMut.isPending || updateMut.isPending}
          />

          {isLoading ? (
            <Loader />
          ) : (
            <ProjectsTable
              projects={projects}
              onEdit={(p) => setEditing(p)}
              onDelete={(id) => deleteMut.mutate(id)}
            />
          )}
        </div>

        <div className="text-sm opacity-70 mt-3">{status}</div>
      </div>
    </div>
  );
}
