import {
  FaHtml5,
  FaJs,
  FaLaravel,
  FaCss3Alt,
  FaVuejs,
  FaNodeJs,
  FaSquareGithub,
  FaSquareGitlab,
  FaReact,
  FaAngular,
  FaPhp,
  FaPython,
  FaBootstrap,
} from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { IoLogoIonic } from "react-icons/io";
import { SiTailwindcss, SiVuetify, SiMysql } from "react-icons/si";
import Tools from "@/app/components/Tools";
export default function Skills() {
  const icons = [FaHtml5, FaJs, FaLaravel, FaPhp];
  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <Tools />
        {/* <div className="flex justify-center items-center flex-col hover:text-teal-300">
          <FaJs size="2.5em" />
          <span className="text-xs">JavaScript</span>
        </div>
        <div className="flex justify-center items-center flex-col hover:text-teal-300">
          <FaPhp size="2.5em" />
          <span className="text-xs">PHP</span>
        </div>
        <div className="flex justify-center items-center flex-col hover:text-teal-300">
          <FaLaravel size="2.5em" />
          <span className="text-xs">Laravel</span>
        </div>
        <div className="flex justify-center items-center flex-col hover:text-teal-300">
          <SiMysql size="2.5em" />
          <span className="text-xs">MySql</span>
        </div>
        <div className="flex justify-center items-center flex-col hover:text-teal-300">
          <FaHtml5 size="2.5em" />
          <span className="text-xs">HTML</span>
        </div> */}

        {/* <FaPhp className="hover:text-teal-300" size="2em" />
        <FaLaravel className="hover:text-teal-300" size="2em" />
        <SiMysql className="hover:text-teal-300" size="2em" />
        <FaHtml5 className="hover:text-teal-300" size="2em" />
        <FaCss3Alt className="hover:text-teal-300" size="2em" />
        <FaVuejs className="hover:text-teal-300" size="2em" />
        <FaReact className="hover:text-teal-300" size="2em" />
        <FaAngular className="hover:text-teal-300" size="2em" />
        <FaSquareGithub className="hover:text-teal-300" size="2em" />
        <FaPython className="hover:text-teal-300" size="2em" />
        <FaNodeJs className="hover:text-teal-300" size="2em" />
        <FaBootstrap className="hover:text-teal-300" size="2em" />
        <IoLogoIonic className="hover:text-teal-300" size="2em" />
        <SiTailwindcss className="hover:text-teal-300" size="2em" />
        <FaSquareGitlab className="hover:text-teal-300" size="2em" />
        <TbBrandCSharp className="hover:text-teal-300" size="2em" />
        <SiVuetify className="hover:text-teal-300" size="2em" /> */}
      </div>
    </section>
  );
}
