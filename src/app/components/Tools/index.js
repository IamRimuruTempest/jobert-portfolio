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
import {
  SiTailwindcss,
  SiVuetify,
  SiMysql,
  SiFirebase,
  SiDotnet,
} from "react-icons/si";
export default function Tools() {
  const icons = [
    FaJs,
    FaPhp,
    FaLaravel,
    SiMysql,
    FaHtml5,
    FaCss3Alt,
    FaVuejs,
    FaReact,
    FaAngular,
    SiDotnet,
    SiFirebase,
    FaPython,
    FaNodeJs,
    IoLogoIonic,
    TbBrandCSharp,
    SiTailwindcss,
    FaBootstrap,
    SiVuetify,
    FaSquareGithub,
    FaSquareGitlab,
  ];

  return (
    <>
      {icons.map((Icon) => (
        <div
          key={Icon.id}
          className="flex justify-center items-center flex-col hover:text-teal-300"
        >
          <Icon size="2.5em" />
        </div>
      ))}
    </>
  );
}
