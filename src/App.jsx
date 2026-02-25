import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes.jsx";

export default function App() {
  // Theme init
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true; // default dark
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  return <AppRoutes />;
}
