import Button from "../common/Button";
import yousifImg from "../../yousif.jfif";


export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="container-page grid md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT CARD */}
        <div className="card p-6">
          
          {/* PROFILE IMAGE */}
          <div className="h-20 w-20 rounded-2xl overflow-hidden mb-4 border border-zinc-200 dark:border-zinc-800">
            <img
              src={yousifImg}
              alt="Yousif Ahmed"
              className="h-full w-full object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold">B.B. King</h2>

          <p className="mt-2 opacity-75">
            {/* I build full-stack web apps using React, Node.js, and MongoDB.
            This portfolio updates in real-time when I upload projects from
            the Admin */}
            The beautiful thing about learning is that no one can take it away from you.

          </p>

          <div className="mt-5 flex gap-3 flex-wrap">
            {/* <Button
              variant="primary"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </Button> */}

            {/* <a
              href="/Muhammad_Yousif_CV.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/10 text-white hover:bg-white/10 transition"
            >
              Download CV
            </a> */}
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="card p-6">
          <h3 className="text-xl font-semibold">Skills</h3>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "Tailwind",
              "Socket.IO",
              "JWT",
              "HTML",
              "CSS",
              "JavaScript",
              "Java",
              "Git/GitHub",
              'Rest API',
              'MySQL',
              'Python',
              'AutoCAD',
              "Arduino Programming",
              "C",
              "C++",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-xl border border-zinc-200 dark:border-zinc-800 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* <div className="mt-6 text-sm opacity-75">
            Tip: You can edit this content later from Admin Settings this is my project where  
          </div> */}
        </div>

      </div>
    </section>
  );
}
