export default function Input({ label, className = "", ...props }) {
  return (
    <div className="space-y-1">
      {label && <div className="label">{label}</div>}
      <input className={`input ${className}`} {...props} />
    </div>
  );
}
