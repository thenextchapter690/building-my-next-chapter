const toolkit = {
  Languages: ["Dart", "Python", "JavaScript", "SQL"],
  Frameworks: ["Flutter", "Next.js", "React"],
  Tools: ["Git", "GitHub", "VS Code", "Firebase"],
  Learning: ["AI", "UI Design", "Content", "Startups"],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="container py-32"
    >

      <div className="mb-20">

        <p className="mb-3 uppercase tracking-[0.35em] text-sm text-neutral-500">
          MY TOOLKIT
        </p>

        <h2 className="heading text-6xl">
          Tools I use.
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2">

        {Object.entries(toolkit).map(([title, items]) => (

          <div
            key={title}
            className="rounded-[30px] border border-neutral-200 bg-white p-8"
          >

            <h3 className="mb-6 text-2xl font-semibold">
              {title}
            </h3>

            <div className="flex flex-wrap gap-3">

              {items.map((tool) => (

                <span
                  key={tool}
                  className="rounded-full border border-neutral-200 px-5 py-2 transition hover:border-pink-300 hover:bg-pink-50"
                >
                  {tool}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}