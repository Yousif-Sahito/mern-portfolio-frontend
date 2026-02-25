export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div className="card w-full max-w-3xl p-5" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
