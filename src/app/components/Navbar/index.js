"use client";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { path: "#about", label: "About" },
    { path: "#experience", label: "Experience" },
    { path: "#skills", label: "Skills" },
    { path: "#projects", label: "Projects" },
  ];

  return (
    <nav class="nav hidden lg:block" aria-label="In-page jump links">
      <ul class="mt-16 w-max">
        {links.map((link) => (
          <li key={link.id}>
            <a className="group flex items-center py-3" href={link.path}>
              <span
                className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                  pathname === link.path
                    ? "w-16 bg-slate-200 roup-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
                    : "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all"
                }`}
              ></span>
              <span
                className={`${
                  pathname === link.path
                    ? "group:text-slate-200 group-focus-visible:text-slate-200 "
                    : "nav-text text-xs font-bold uppercase tracking-widest text-slate-500"
                } nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 `}
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
