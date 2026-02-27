

// export default function ProjectCard({ project, onOpen }) {
//   return (
//     <div
//       className="card overflow-hidden transition cursor-pointer hover:shadow-xl hover:-translate-y-[2px]"
//       onClick={onOpen}
//       role="button"
//       tabIndex={0}
//       onKeyDown={(e) => e.key === "Enter" && onOpen()}
//     >
//       <div className="h-44 bg-zinc-100 dark:bg-zinc-800">
//         <img
//           src={project.thumbnailUrl || "/placeholder.png"}
//           alt={project.title}
//           className="h-44 w-full object-cover"
//           loading="lazy"
//         />
//       </div>

//       <div className="p-4">
//         <h3 className="font-semibold text-lg">{project.title}</h3>
//         <p className="text-sm opacity-75 mt-1 line-clamp-2">
//           {project.description}
//         </p>

//         <div className="flex flex-wrap gap-2 mt-3">
//           {(project.techStack || []).slice(0, 4).map((t) => (
//             <span
//               key={t}
//               className="text-xs px-2 py-1 rounded-lg border border-zinc-200 dark:border-zinc-800"
//             >
//               {t}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


export default function ProjectCard({ project, onOpen }) {
  // ✅ Your deployed backend URL (from Vercel env)
  const API = import.meta.env.VITE_API_URL;

  /**
   * Convert any thumbnail value to a valid production URL
   */
  const toAbsoluteUrl = (urlOrPath) => {
    if (!urlOrPath) return "";

    // ✅ Case 1 — DB saved localhost URL
    if (urlOrPath.includes("localhost:5000")) {
      return urlOrPath
        .replace("http://localhost:5000", API)
        .replace("https://localhost:5000", API);
    }

    // ✅ Case 2 — http → https
    if (urlOrPath.startsWith("http://")) {
      return urlOrPath.replace("http://", "https://");
    }

    // ✅ Case 3 — already correct https url
    if (urlOrPath.startsWith("https://")) {
      return urlOrPath;
    }

    // ✅ Case 4 — relative path from backend
    // example: /uploads/thumbnails/img.png
    return `${API}${urlOrPath.startsWith("/") ? "" : "/"}${urlOrPath}`;
  };

  // Final image source
  const thumbnailSrc =
    toAbsoluteUrl(project?.thumbnailUrl) || "/placeholder.png";

  return (
    <div
      className="card overflow-hidden transition cursor-pointer hover:shadow-xl hover:-translate-y-[2px]"
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen()}
    >
      {/* IMAGE */}
      <div className="h-44 bg-zinc-100 dark:bg-zinc-800">
        <img
          src={thumbnailSrc}
          alt={project?.title || "project"}
          className="h-44 w-full object-cover"
          loading="lazy"
          onError={(e) => {
            // fallback if image fails
            e.currentTarget.src = "/placeholder.png";
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="font-semibold text-lg">
          {project?.title}
        </h3>

        <p className="text-sm opacity-75 mt-1 line-clamp-2">
          {project?.description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mt-3">
          {(project?.techStack || []).slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-lg border border-zinc-200 dark:border-zinc-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}