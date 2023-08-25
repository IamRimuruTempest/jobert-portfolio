/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Hello, I'm Jobert Advento. I'm a passionate Full-Stack Web Developer
          based in the Philippines with a strong desire to create dynamic and
          user-friendly websites.
        </p>

        <p className="mb-4">
          My journey in web development began with a strong foundation in
          Computer Science from Cagayan State University - Carig Campus. This
          educational experience provided me with the knowledge and tools to
          excel in the field of web development.
        </p>
      </div>
    </section>
  );
}
