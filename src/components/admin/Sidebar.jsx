import { Link, useLocation } from "react-router-dom";
import { clearToken } from "../../store/auth.store";



const items = [
  { to: "/admin", label: "Overview" },
  { to: "/admin/projects", label: "Projects" },
  { to: "/admin/messages", label: "Messages" },
  { to: "/admin/settings", label: "Settings" }
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className="w-64 min-h-screen border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4">
      <div className="font-bold text-lg mb-6">Admin</div>

      <div className="space-y-1">
        {items.map((it) => (
          <Link
            key={it.to}
            to={it.to}
            className={`block px-3 py-2 rounded-xl ${
              pathname === it.to
                ? "bg-zinc-100 dark:bg-zinc-900 font-semibold"
                : "opacity-80 hover:bg-zinc-50 dark:hover:bg-zinc-900"
            }`}
          >
            {it.label}
          </Link>
        ))}
      </div>
      

      <button
        className="btn w-full mt-6"
        onClick={() => {
          clearToken();
          window.location.href = "/admin/login";
        }}
      >
        Logout
      </button>
    </div>
  );
}
