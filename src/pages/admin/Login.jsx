// import { useState } from "react";
// import { loginAdmin } from "../../api/auth.api";
// import { setToken } from "../../store/auth.store";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [status, setStatus] = useState("");

//   const submit = async (e) => {
//     e.preventDefault();
//     setStatus("Logging in...");

//     try {
//       const data = await loginAdmin({ email, password });
//       setToken(data.token);
//       window.location.href = "/admin";
//     } catch {
//       setStatus("❌ Invalid credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       <form onSubmit={submit} className="card p-6 w-full max-w-md space-y-3">
//         <h1 className="text-2xl font-bold">Admin Login</h1>
//         <input className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button className="btn btn-primary w-full" type="submit">Login</button>
//         <div className="text-sm opacity-70">{status}</div>
//       </form>
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginAdmin } from "../../api/auth.api";
import { setToken } from "../../store/auth.store";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Logging in...");

    try {
      const data = await loginAdmin({ email, password });
      setToken(data.token);

      // ✅ IMPORTANT: replace history (fix back button issue)
      navigate("/admin", { replace: true });
    } catch {
      setStatus("❌ Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={submit} className="card p-6 w-full max-w-md space-y-3">

        {/* ✅ Back to user side */}
        <Link to="/" className="text-sm opacity-70 hover:underline">
          ← Back to Website
        </Link>

        <h1 className="text-2xl font-bold">Admin Login</h1>

        <input
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-full" type="submit">
          Login
        </button>

        <div className="text-sm opacity-70">{status}</div>
      </form>
    </div>
  );
}
