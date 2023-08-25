import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title:
        "Cagayan State University - Technology Transfer and Business Development Division",
      link: "https://csu-ttbdd.com/",
      description:
        "Video course that teaches how to build a web app with theSpotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
      image: "/images/projects/csu-ttbdd.png",
      tools: ["Laravel", "Vue", "Vuetify"],
    },
    {
      title: "ColdSmart",
      link: "https://www.coldsmart.net/",
      description:
        "Video course that teaches how to build a web app with theSpotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
      image: "/images/projects/coldsmart.png",
      tools: ["ReactJS", "Firebase"],
    },
    {
      title: "Cagayan State University Library Landing Page",
      link: "",
      description:
        "Video course that teaches how to build a web app with theSpotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
      image: "/images/projects/csu-library-web.png",
      tools: ["Laravel", "Vue", "Vuetify"],
    },
    {
      title: "Cagayan State University Library Dashboard",
      link: "",
      description:
        "Video course that teaches how to build a web app with theSpotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
      image: "/images/projects/csu-library-dashboard.png",
      tools: ["Laravel", "Vue", "Vuetify"],
    },
  ];
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((project) => (
            <li key={project.id} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Build a Spotify Connected App"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {project.title}{" "}
                        <span className="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    {project.description}
                  </p>

                  <ul
                    class="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {project.tools.map((tool) => (
                      <li key={tool.id} class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                          {tool}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <Image
                  alt=""
                  loading="lazy"
                  width="200"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  src={project.image}
                  style={{ color: "tranparent" }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
