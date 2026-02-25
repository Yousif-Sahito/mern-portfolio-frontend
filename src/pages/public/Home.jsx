

// import Navbar from "../../components/public/Navbar";
// import About from "../../components/public/About";
// import Projects from "../../components/public/Projects";
// import Contact from "../../components/public/Contact";

// export default function Home() {
//   return (
//     <div>
//       <Navbar />

//       <section id="home" className="py-20">
//         <div className="container-page">
//           <div className="card p-8">
//             <h1 className="text-4xl md:text-5xl font-bold">
//               Real-time Portfolio
//             </h1>
//             <p className="mt-3 opacity-75 max-w-2xl">
//               Projects are managed from Admin Dashboard and instantly appear here using Socket.IO.
//             </p>

//             <div className="mt-6 flex gap-3 flex-wrap">
//               <a href="#projects" className="btn btn-primary">View Projects</a>
//               <a href="#contact" className="btn">Contact</a>
//             </div>
//           </div>
//         </div>
//       </section>

//       <About />
//       <Projects />
//       <Contact />
//     </div>
//   );
// }



import Navbar from "../../components/public/Navbar";
import Hero from "../../components/public/Hero";
import About from "../../components/public/About";
import Projects from "../../components/public/Projects";
import Contact from "../../components/public/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
