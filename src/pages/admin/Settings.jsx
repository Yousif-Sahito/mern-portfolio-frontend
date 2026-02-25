import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

export default function AdminSettings() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Topbar title="Settings" />
        <div className="card p-6">
          <div className="font-semibold">Coming soon</div>
          <div className="opacity-70 mt-2">
            Here you can add About text, skills, social links, and CV upload later.
          </div>
        </div>
      </div>
    </div>
  );
}
