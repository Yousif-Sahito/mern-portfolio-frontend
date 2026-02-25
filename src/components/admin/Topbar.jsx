export default function Topbar({ title = "Dashboard" }) {
  return (
    <div className="flex items-center justify-between pb-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
        <div className="text-sm opacity-80">Admin</div>
      </div>
    </div>
  );
}
