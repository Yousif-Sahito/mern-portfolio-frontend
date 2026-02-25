import { NavLink, useNavigate, Link } from "react-router-dom";
import { clearToken } from "../../store/auth.store";

export default function AdminSidebar() {
  const navigate = useNavigate();

  const logout = () => {
    clearToken();
    navigate("/", { replace: true }); // ✅ back to user site
  };

  return (
    <aside className="sidebar">
      <h2 className="font-bold text-lg mb-4">Admin</h2>

      {/* ✅ Go back to public website */}
      <Link to="/" className="btn mb-4">
        View Website
      </Link>

      <nav className="space-y-2">
        <NavLink to="/admin" className="sidebar-link">
          Overview
        </NavLink>

        <NavLink to="/admin/projects" className="sidebar-link">
          Projects
        </NavLink>

        <NavLink to="/admin/messages" className="sidebar-link">
          Messages
        </NavLink>

        <NavLink to="/admin/settings" className="sidebar-link">
          Settings
        </NavLink>
      </nav>

      <button onClick={logout} className="btn mt-6 w-full">
        Logout
      </button>
    </aside>
  );
}
