// export default function ProjectCard({ project, onOpen }) {
//   return (
//     <div className="card overflow-hidden hover:shadow-lg transition cursor-pointer" onClick={onOpen}>
//       <div className="h-44 bg-zinc-100 dark:bg-zinc-800">
//         <img
//           src={project.thumbnailUrl}
//           alt={project.title}
//           className="h-44 w-full object-cover"
//         />
//       </div>

//       <div className="p-4">
//         <h3 className="font-semibold text-lg">{project.title}</h3>
//         <p className="text-sm opacity-75 mt-1 line-clamp-2">{project.description}</p>

//         <div className="flex flex-wrap gap-2 mt-3">
//           {(project.techStack || []).slice(0, 4).map((t) => (
//             <span key={t} className="text-xs px-2 py-1 rounded-lg border border-zinc-200 dark:border-zinc-800">
//               {t}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


export default function ProjectCard({ project, onOpen }) {
  return (
    <div
      className="card overflow-hidden transition cursor-pointer hover:shadow-xl hover:-translate-y-[2px]"
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen()}
    >
      <div className="h-44 bg-zinc-100 dark:bg-zinc-800">
        <img
          src={project.thumbnailUrl || "/placeholder.png"}
          alt={project.title}
          className="h-44 w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <p className="text-sm opacity-75 mt-1 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {(project.techStack || []).slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-lg border border-zinc-200 dark:border-zinc-800"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}