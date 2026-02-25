export default function Button({ children, variant = "default", className = "", ...props }) {
  const base = "btn";
  const styles = variant === "primary" ? "btn btn-primary" : base;
  return (
    <button className={`${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
