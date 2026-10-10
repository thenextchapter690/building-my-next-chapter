export default function About() {
  return (
    <section
      id="about"
      className="container grid gap-20 py-32 lg:grid-cols-2"
    >
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-500">
          ABOUT
        </p>

        <h2 className="heading text-6xl leading-tight">
          Just getting
          <br />
          started.
        </h2>
      </div>

      <div className="space-y-8 text-lg leading-9 text-neutral-600">

        <p>
          Hi, I'm <strong>Samiya</strong>, a 16-year-old student from
          India who loves building things on the internet.
        </p>

        <p>
          I'm currently balancing Class 10 board preparation with
          building products, learning Flutter and AI, and documenting
          everything I learn along the way.
        </p>

        <p>
          My goal isn't to build dozens of projects. It's to build a few
          meaningful ones that genuinely help people.
        </p>

        <div className="grid grid-cols-2 gap-8 pt-8">

          <div>
            <h3 className="heading text-5xl text-[var(--accent)]">
              16
            </h3>
            <p className="mt-2 text-neutral-500">
              Years Old
            </p>
          </div>

          <div>
            <h3 className="heading text-5xl text-[var(--accent)]">
              3
            </h3>
            <p className="mt-2 text-neutral-500">
              Main Projects
            </p>
          </div>

          <div>
            <h3 className="heading text-5xl text-[var(--accent)]">
              AI
            </h3>
            <p className="mt-2 text-neutral-500">
              Biggest Interest
            </p>
          </div>

          <div>
            <h3 className="heading text-5xl text-[var(--accent)]">
              ∞
            </h3>
            <p className="mt-2 text-neutral-500">
              Curiosity
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}