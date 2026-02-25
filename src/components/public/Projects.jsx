import { useEffect, useMemo, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchProjects } from "../../api/projects.api";
import { socket } from "../../sockets/socket";
import Loader from "../common/Loader";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const qc = useQueryClient();

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects
  });

  const [search, setSearch] = useState("");
  const [tech, setTech] = useState("all");
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const refetch = () => qc.invalidateQueries({ queryKey: ["projects"] });

    socket.on("projectCreated", refetch);
    socket.on("projectUpdated", refetch);
    socket.on("projectDeleted", refetch);

    return () => {
      socket.off("projectCreated", refetch);
      socket.off("projectUpdated", refetch);
      socket.off("projectDeleted", refetch);
    };
  }, [qc]);

  const techOptions = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => (p.techStack || []).forEach((t) => set.add(t)));
    return ["all", ...Array.from(set)];
  }, [projects]);

  const filtered = useMemo(() => {
    const s = search.toLowerCase().trim();
    return projects
      .filter((p) => p.title.toLowerCase().includes(s))
      .filter((p) => (tech === "all" ? true : (p.techStack || []).includes(tech)));
  }, [projects, search, tech]);

  return (
    <section id="projects" className="py-16">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end gap-3 justify-between">
          <div>
            <h2 className="text-3xl font-bold">Projects</h2>
            <p className="text-sm opacity-70">Latest projects • Real-time updates</p>
          </div>

          <div className="flex gap-2 flex-wrap">
            <input
              className="input w-60"
              placeholder="Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="input w-44"
              value={tech}
              onChange={(e) => setTech(e.target.value)}
            >
              {techOptions.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {filtered.map((p) => (
              <ProjectCard
                key={p._id}
                project={p}
                onOpen={() => {
                  setSelected(p);
                  setOpen(true);
                }}
              />
            ))}
          </div>
        )}

        <ProjectModal
          open={open}
          onClose={() => setOpen(false)}
          project={selected}
        />
      </div>
    </section>
  );
}
