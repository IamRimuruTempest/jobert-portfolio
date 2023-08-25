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
          Hello, I'm Jobert Advento. A Full Stack Web Developer with a
          strong desire to create dynamic and user-friendly websites. My
          knowledge of both front-end and back-end programming allows me to
          navigate the entire web development process with ease.
        </p>
        <p className="mb-4">
          My main focus these days is building products and leading projects for
          our clients at Upstatement. In my free time Ive also released an
          online video course that covers everything you need to know to build a
          web app with the Spotify API.
        </p>
        <p className="mb-4">
          When I’m not at the computer, I’m usually rock climbing, hanging out
          with my wife and two cats, or running around Hyrule searching for
          Korok seeds Korokseeds.
        </p>
      </div>
    </section>
  );
}
