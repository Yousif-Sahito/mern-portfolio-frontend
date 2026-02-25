export default function Overview() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Overview</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <div className="opacity-70">Projects</div>
          <div className="text-3xl font-bold mt-2">—</div>
          <p className="mt-2 opacity-60">Go to Projects to manage.</p>
        </div>

        <div className="card p-6">
          <div className="opacity-70">Messages</div>
          <div className="text-3xl font-bold mt-2">—</div>
          <p className="mt-2 opacity-60">Go to Messages to view.</p>
        </div>

        <div className="card p-6">
          <div className="opacity-70">Real-time</div>
          <div className="text-3xl font-bold mt-2 text-green-500">ON</div>
          <p className="mt-2 opacity-60">Socket.IO is connected.</p>
        </div>
      </div>
    </div>
  );
}
