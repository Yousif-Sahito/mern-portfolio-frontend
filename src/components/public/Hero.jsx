

import { useEffect, useMemo, useState } from "react";

const ROLES = [
  {
    key: "frontend",
    label: "Frontend Developer",
    headline: "I build fast, responsive UIs",
    lines: [
      "React • Tailwind • UI/UX • Responsive Design",
      "Clean components, reusable design systems, and smooth UX.",
    ],
  },
  {
    key: "backend",
    label: "Backend Developer",
    headline: "I build secure APIs & databases",
    lines: [
      "Node.js • Express • MongoDB • REST APIs",
      "Authentication (JWT), validation, scalable backend systems.",
    ],
  },
  {
    key: "fullstack",
    label: "Computer Engineer | Full-Stack & AI Developer",
    headline: "I ship complete web apps",
    lines: [
      "React + Node.js + MongoDB",
      "Real-time apps with Socket.IO + Admin Dashboard workflow.",
    ],
  },
];

function useTypewriter(phrases, speed = 45, pause = 1200) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[i % phrases.length];
    let t;

    if (!deleting) {
      if (j <= current.length) {
        t = setTimeout(() => {
          setText(current.slice(0, j));
          setJ((v) => v + 1);
        }, speed);
      } else {
        t = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (j >= 0) {
        t = setTimeout(() => {
          setText(current.slice(0, j));
          setJ((v) => v - 1);
        }, speed * 0.6);
      } else {
        setDeleting(false);
        setI((v) => v + 1);
        setJ(0);
      }
    }

    return () => clearTimeout(t);
  }, [phrases, speed, pause, i, j, deleting]);

  return text;
}

export default function Hero() {
  const [role, setRole] = useState("fullstack");

  const activeRole = useMemo(
    () => ROLES.find((r) => r.key === role),
    [role]
  );

  const typed = useTypewriter([
    "Computer Systems Engineer",
    "Computer Engineer | Full-Stack & AI Developer",
    "React & Node.js Developer",
    "Real-Time Web Applications",
  ]);

  const stats = [
    { label: "Projects", value: "10+" },
    { label: "Core Skills", value: "12+" },
    { label: "Experience", value: "Hands-on" },
  ];

  return (
    <section id="home" className="py-20">
      <div className="container-page">
        <div className="card p-8 md:p-10">

          {/* GRID LAYOUT */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Yousif Ahmed
              </h1>

              <p className="mt-3 text-lg opacity-80">
                <span className="font-semibold">{typed}</span>
                <span className="animate-pulse"> |</span>
              </p>

              <p className="mt-4 opacity-75 max-w-2xl leading-relaxed">
                Second-year <b>Computer Systems Engineering</b> student at
                <b> Sukkur IBA University</b>. I build modern web applications
                using <b>React, Node.js, Express, and MongoDB</b>, focusing on
                scalable backend systems and real-time user experiences.
              </p>

              {/* ROLE BUTTONS */}
              <div className="mt-6 flex flex-wrap gap-2">
                {ROLES.map((r) => (
                  <button
                    key={r.key}
                    onClick={() => setRole(r.key)}
                    className={`px-4 py-2 rounded-xl border transition
                    ${
                      role === r.key
                        ? "bg-white text-black dark:bg-white dark:text-black"
                        : "border-zinc-700 hover:opacity-80"
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>

              {/* ROLE INFO */}
              <div className="mt-5 border border-zinc-800 rounded-2xl p-5">
                <h3 className="text-xl font-semibold">
                  {activeRole.headline}
                </h3>

                {activeRole.lines.map((l, i) => (
                  <p key={i} className="opacity-80 mt-1">
                    {l}
                  </p>
                ))}
              </div>

              {/* STATS */}
              <div className="mt-6 grid grid-cols-3 gap-3 max-w-lg">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="border border-zinc-800 rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl font-bold">{s.value}</div>
                    <div className="text-sm opacity-70">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-7 flex gap-3">
                <a href="#projects" className="btn btn-primary">
                  View Projects
                </a>

                <a href="/Muhammad_Yousif_CV.pdf" download className="btn">
                  Download CV
                </a>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="flex justify-center lg:justify-end">

              <div className="relative group">

                {/* glow effect */}
                <div className="absolute -inset-2 rounded-3xl blur-xl opacity-20 bg-white" />

                <img
                  src="src/components/public/yousif.png"
                  alt="Yousif Ahmed"
                  className="
                    w-[300px]
                    md:w-[360px]
                    lg:w-[380px]
                    h-[420px]
                    object-cover
                    object-[50%_10%]
                    rounded-3xl
                    border border-zinc-800
                    shadow-2xl
                    shadow-2xl
                    transition duration-500
                    group-hover:scale-[1.02]
                  "
                />

                {/* badge */}
                <div className="
                  absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
                  bg-black/80 backdrop-blur-md
                  border border-zinc-700
                  px-6 py-3 rounded-2xl
                  shadow-xl
">
                  <p className="text-sm font-semibold">
                    Computer Systems Engineer
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}