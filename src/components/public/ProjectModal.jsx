// import Modal from "../common/Modal";
// import Button from "../common/Button";

// export default function ProjectModal({ open, onClose, project }) {
//   if (!project) return null;

//   return (
//     <Modal open={open} onClose={onClose}>
//       {/* ✅ Scroll wrapper */}
//       <div className="max-h-[75vh] overflow-y-auto pr-1">
//         <div className="flex justify-between items-start gap-3">
//           <div>
//             <h3 className="text-2xl font-bold">{project.title}</h3>
//             <p className="opacity-75 mt-1">{project.description}</p>
//           </div>
//           <Button onClick={onClose}>Close</Button>
//         </div>

//         <div className="mt-5 space-y-4">
//           <div>
//             <h4 className="font-semibold">Details</h4>
//             <p className="opacity-80 whitespace-pre-line">{project.details}</p>
//           </div>

//           {project.images?.length > 0 && (
//             <div>
//               <h4 className="font-semibold">Screenshots</h4>
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
//                 {project.images.map((img) => (
//                   <img
//                     key={img}
//                     src={img}
//                     className="rounded-xl border object-cover h-28 w-full"
//                   />
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className="flex flex-wrap gap-2">
//             {project.liveDemoUrl && (
//               <a className="btn" href={project.liveDemoUrl} target="_blank" rel="noreferrer">
//                 Live Demo
//               </a>
//             )}
//             {project.githubUrl && (
//               <a className="btn" href={project.githubUrl} target="_blank" rel="noreferrer">
//                 GitHub
//               </a>
//             )}
//             {project.codeFileUrl && (
//               <a className="btn" href={project.codeFileUrl} target="_blank" rel="noreferrer">
//                 Download Code
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </Modal>
//   );
// }



import Modal from "../common/Modal";
import Button from "../common/Button";
import { ExternalLink, Github, Download } from "lucide-react";

export default function ProjectModal({ open, onClose, project }) {
  if (!project) return null;

  return (
    <Modal open={open} onClose={onClose}>
      {/* ✅ Scroll wrapper */}
      <div className="max-h-[75vh] overflow-y-auto pr-1">
        <div className="flex justify-between items-start gap-3">
          <div>
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="opacity-75 mt-1">{project.description}</p>
          </div>
          <Button onClick={onClose}>Close</Button>
        </div>

        <div className="mt-5 space-y-5">
          {/* Details */}
          <div>
            <h4 className="font-semibold">Details</h4>
            <p className="opacity-80 whitespace-pre-line">{project.details}</p>
          </div>

          {/* Screenshots */}
          {project.images?.length > 0 && (
            <div>
              <h4 className="font-semibold">Screenshots</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                {project.images.map((img) => (
                  <a
                    key={img}
                    href={img}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={img}
                      alt={`${project.title} screenshot`}
                      className="rounded-xl border border-zinc-200 dark:border-zinc-800 object-cover h-28 w-full hover:opacity-90 transition"
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* ✅ Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.liveDemoUrl && (
              <a
                className="btn btn-primary w-full flex items-center justify-center gap-2"
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}

            {project.githubUrl && (
              <a
                className="btn w-full flex items-center justify-center gap-2"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={18} />
                GitHub
              </a>
            )}

            {project.codeFileUrl && (
              <a
                className="btn w-full flex items-center justify-center gap-2"
                href={project.codeFileUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Download size={18} />
                Download
              </a>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}