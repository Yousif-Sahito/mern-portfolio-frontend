import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import Loader from "../../components/common/Loader";
import { fetchMessages, toggleRead, deleteMessage } from "../../api/messages.api";

export default function AdminMessages() {
  const qc = useQueryClient();

  const { data: messages = [], isLoading } = useQuery({
    queryKey: ["messages"],
    queryFn: fetchMessages
  });

  const toggleMut = useMutation({
    mutationFn: toggleRead,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["messages"] })
  });

  const delMut = useMutation({
    mutationFn: deleteMessage,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["messages"] })
  });

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Topbar title="Messages" />

        {isLoading ? (
          <Loader />
        ) : (
          <div className="space-y-3">
            {messages.map((m) => (
              <div key={m._id} className="card p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold">{m.name} <span className="opacity-60 text-sm">({m.email})</span></div>
                    <div className="opacity-80 mt-2 whitespace-pre-line">{m.message}</div>
                    <div className="opacity-60 text-xs mt-2">
                      {new Date(m.createdAt).toLocaleString()} • {m.isRead ? "Read" : "Unread"}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="btn" onClick={() => toggleMut.mutate(m._id)}>
                      {m.isRead ? "Mark Unread" : "Mark Read"}
                    </button>
                    <button className="btn border-red-400 text-red-500" onClick={() => delMut.mutate(m._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {messages.length === 0 && (
              <div className="opacity-70">No messages yet.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
