import { useState } from "react";
import Button from "../common/Button";

export default function ProjectForm({ initial, onSubmit, loading }) {
  const [title, setTitle] = useState(initial?.title || "");
  const [description, setDescription] = useState(initial?.description || "");
  const [details, setDetails] = useState(initial?.details || "");
  const [techStack, setTechStack] = useState(initial?.techStack?.join(", ") || "");
  const [liveDemoUrl, setLiveDemoUrl] = useState(initial?.liveDemoUrl || "");
  const [githubUrl, setGithubUrl] = useState(initial?.githubUrl || "");

  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
  const [codeFile, setCodeFile] = useState(null);

  const submit = (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", title);
    fd.append("description", description);
    fd.append("details", details);

    const stackArr = techStack
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    fd.append("techStack", JSON.stringify(stackArr));

    fd.append("liveDemoUrl", liveDemoUrl);
    fd.append("githubUrl", githubUrl);

    if (thumbnail) fd.append("thumbnail", thumbnail);
    images.forEach((img) => fd.append("images", img));

    // separate portion: code upload
    if (codeFile) fd.append("codeFile", codeFile);

    onSubmit(fd);
  };

  return (
    <form onSubmit={submit} className="card p-5 space-y-4">
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <div className="label">Title *</div>
          <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <div className="label">Tech Stack (comma separated)</div>
          <input className="input" value={techStack} onChange={(e) => setTechStack(e.target.value)} placeholder="React, Node, MongoDB" />
        </div>
      </div>

      <div>
        <div className="label">Description *</div>
        <input className="input" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>

      <div>
        <div className="label">Details *</div>
        <textarea className="input min-h-[120px]" value={details} onChange={(e) => setDetails(e.target.value)} required />
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <div className="label">Live Demo URL</div>
          <input className="input" value={liveDemoUrl} onChange={(e) => setLiveDemoUrl(e.target.value)} />
        </div>
        <div>
          <div className="label">GitHub URL</div>
          <input className="input" value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <div className="label">Thumbnail Image *</div>
          <input type="file" accept="image/*" onChange={(e) => setThumbnail(e.target.files?.[0] || null)} />
        </div>

        <div>
          <div className="label">Project Images (optional)</div>
          <input type="file" accept="image/*" multiple onChange={(e) => setImages(Array.from(e.target.files || []))} />
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
        <h4 className="font-semibold">Upload Project Code (separate portion)</h4>
        <p className="text-sm opacity-70">Upload zip/rar of the same project code.</p>
        <input type="file" accept=".zip,.rar" onChange={(e) => setCodeFile(e.target.files?.[0] || null)} />
      </div>

      <Button variant="primary" type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save Project"}
      </Button>
    </form>
  );
}
