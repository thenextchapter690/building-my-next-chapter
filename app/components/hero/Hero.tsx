export default function Hero() {
  return (
    <section className="container flex min-h-screen items-center">

      <div className="max-w-3xl">

        <p className="mb-6 uppercase tracking-[0.45em] text-sm text-neutral-500">
          Student • Founder • Builder
        </p>

        <h1 className="heading text-7xl md:text-8xl lg:text-[7rem] leading-[0.9]">

          Building my

          <br />

          <span className="text-[var(--accent)]">
            next chapter.
          </span>

        </h1>

        <p className="mt-10 max-w-xl text-xl leading-9 text-neutral-500">

          Hi, I'm Samiya — a 16-year-old student from India building AI
          products, learning Flutter, documenting the journey, and proving
          that you don't need to wait to start creating.

        </p>

        <div className="mt-12 flex gap-4">

          <a
            href="#projects"
            className="rounded-full bg-black px-8 py-4 text-white transition hover:opacity-80"
          >
            View Projects
          </a>

          <a
            href="https://www.linkedin.com/in/sam-iya-17327543a/"
            target="_blank"
            className="rounded-full border px-8 py-4 transition hover:bg-white"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  );
}