import Image from "next/image";
import Link from "next/link";
import About from "./pages/about";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Navbar from "./components/Navbar";
import Social from "./components/Social";

export default function Home() {
  return (
    <div className="group/spotlight relative">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient( 600px at 1547px 275px, rgba(29, 78, 216, 0.15), transparent 100%)`,
        }}
      ></div>
      <div className="min-h-screen max-w-7xl px-24 mx-auto flex justify-between gap-4">
        <div className="sticky top-0 max-h-screen w-1/2 flex flex-col justify-between py-24">
          <div>
            <h1 className="text-5xl font-bold">Jobert Adviento</h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight ">
              Full-Stack Web Developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              I build accessible, inclusive products and digital experiences for
              the web.
            </p>

            <Navbar />
          </div>

          <div>
            <Social />
          </div>
        </div>
        <main className="w-1/2 py-24">
          <About />
          <Experience />
          <Projects />
        </main>
      </div>
    </div>
  );
}
