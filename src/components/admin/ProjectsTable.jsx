import Button from "../common/Button";

export default function ProjectsTable({ projects, onEdit, onDelete }) {
  return (
    <div className="card overflow-hidden">
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 font-semibold">
        Projects
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left opacity-70">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Tech</th>
              <th className="p-3">Created</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p._id} className="border-t border-zinc-200 dark:border-zinc-800">
                <td className="p-3">{p.title}</td>
                <td className="p-3">{(p.techStack || []).slice(0, 3).join(", ")}</td>
                <td className="p-3">
                  {new Date(p.createdAt).toLocaleDateString()}
                </td>
                <td className="p-3 flex gap-2">
                  <Button onClick={() => onEdit(p)}>Edit</Button>
                  <Button className="border-red-400 text-red-500" onClick={() => onDelete(p._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr>
                <td className="p-3 opacity-70" colSpan={4}>No projects yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
