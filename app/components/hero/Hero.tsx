import FloatingCards from "./FloatingCards";
export default function Hero() {
  return (
    <section className="container min-h-screen flex items-center">
      <div className="max-w-3xl">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-500">
          Student • Builder • Founder
        </p>

        <h1 className="text-6xl md:text-8xl leading-tight font-bold">
          Building My
          <br />
          <span className="gradient-text">
            Next Chapter.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
          Hi, I'm <strong>Samiya</strong>, a Class 10 student from India building
          AI startups, creative tools, and documenting every step of the journey.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <button className="button">
            Explore My Journey
          </button>

          <a
            href="https://www.instagram.com/thenext.chapter._/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-pink-300 px-6 py-3 font-medium hover:bg-pink-50 transition"
          >
            Instagram
          </a>

        </div>

      </div>
      <FloatingCards />
    </section>
  );
}