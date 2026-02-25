import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { fetchProjects } from "../../api/projects.api";
import { fetchMessages } from "../../api/messages.api";
import { socket } from "../../sockets/socket"; // ✅ adjust if your file is different

export default function Dashboard() {
  const navigate = useNavigate();

  const { data: projects = [], isLoading: projectsLoading } = useQuery({
    queryKey: ["admin-projects-count"],
    queryFn: fetchProjects,
  });

  const { data: messages = [], isLoading: messagesLoading } = useQuery({
    queryKey: ["admin-messages-count"],
    queryFn: fetchMessages,
  });

  // ✅ socket status
  const [socketConnected, setSocketConnected] = useState(socket?.connected ?? false);

  useEffect(() => {
    if (!socket) return;

    const onConnect = () => setSocketConnected(true);
    const onDisconnect = () => setSocketConnected(false);

    setSocketConnected(socket.connected);

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  const unreadCount = useMemo(() => {
    return messages.filter((m) => m.read === false).length;
  }, [messages]);

  const projectsCount = projects.length;
  const messagesCount = messages.length;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Overview</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Projects */}
        <div
          className="card p-6 cursor-pointer"
          onClick={() => navigate("/admin/projects")}
          role="button"
          tabIndex={0}
        >
          <div className="opacity-75">Projects</div>

          <div className="mt-4 text-4xl font-bold">
            {projectsLoading ? "…" : projectsCount}
          </div>

          <div className="mt-2 opacity-70">Go to Projects to manage.</div>
        </div>

        {/* Messages */}
        <div
          className="card p-6 cursor-pointer"
          onClick={() => navigate("/admin/messages")}
          role="button"
          tabIndex={0}
        >
          <div className="opacity-75">Messages</div>

          <div className="mt-4 text-4xl font-bold">
            {messagesLoading ? "…" : messagesCount}
          </div>

          <div className="mt-2 opacity-70">
            {messagesLoading
              ? "Go to Messages to view."
              : unreadCount > 0
              ? `${unreadCount} unread — Go to Messages to view.`
              : "Go to Messages to view."}
          </div>
        </div>

        {/* Real-time */}
        <div className="card p-6">
          <div className="opacity-75">Real-time</div>

          <div className="mt-4 text-4xl font-bold">
            {socketConnected ? "ON" : "OFF"}
          </div>

          <div className="mt-2 opacity-70">
            {socketConnected ? "Socket.IO is connected." : "Socket.IO disconnected."}
          </div>
        </div>
      </div>
    </div>
  );
}

