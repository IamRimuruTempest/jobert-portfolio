import Image from "next/image";
import Link from "next/link";
import About from "./pages/about";
import Experience from "./pages/experience";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Navbar from "./components/Navbar";
import Social from "./components/Social";

export default function Home() {
  return (
    <div className="group/spotlight relative">
      {/* <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient( 600px at 1547px 275px, rgba(29, 78, 216, 0.15), transparent 100%)`,
        }}
      ></div> */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-5xl font-bold">Jobert Adviento</h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight ">
                Full-Stack Web Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I build accessible, inclusive products and digital experiences
                for the web.
              </p>

              <Navbar />
            </div>

            <Social />
          </header>
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Skills />
            <Projects />
          </main>
        </div>
      </div>
    </div>
  );
}
