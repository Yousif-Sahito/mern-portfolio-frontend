import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar"; // or AdminSidebar
import Topbar from "../components/admin/Topbar";
import AdminSidebar from "../components/admin/AdminSidebar";

export default function AdminLayout() {
  return (
    <div className="admin-shell">
      <Sidebar />
      <div className="admin-main">
        <Topbar />
        <div className="admin-content">
            <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6">
        
      </main>
    </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
