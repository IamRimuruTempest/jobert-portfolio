"use client";
import Link from "next/link";
export default function Navbar() {
  const links = [
    { id: 1, path: "#about", label: "About" },
    { id: 2, path: "#experience", label: "Experience" },
    { id: 3, path: "#skills", label: "Skills" },
    { id: 4, path: "#projects", label: "Projects" },
  ];

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {links.map((link) => (
          <li key={link.id}>
            <a className="group flex items-center py-3" href={link.path}>
              <span
                className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none `}
              ></span>

              <span
                className={` nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 `}
              >
                {link.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
