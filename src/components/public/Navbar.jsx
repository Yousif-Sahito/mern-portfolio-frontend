import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true;
    setDark(isDark);

    const handler = () => {
      const y = window.scrollY;
      const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        const top = sections[i].offsetTop - 120;
        if (y >= top) {
          setActive(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <div className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-900">
      <div className="container-page py-3 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg">Yousif-Ahmed</a>

        <div className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`text-sm hover:opacity-80 ${active === l.id ? "font-semibold" : "opacity-70"}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button onClick={toggleTheme} className="btn text-sm">
          {dark ? "Light" : "Dark"}
        </button>
        <a href="/admin/login" className="opacity-20 text-xs hover:opacity-60">
         .
        </a>

      </div>
    </div>
  );
}
