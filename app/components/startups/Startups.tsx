const projects = [
  {
    title: "Labello",
    status: "Building",
    color: "bg-pink-100 text-pink-700",
    description:
      "An AI learning platform where students can create their own personalized AI tutor.",
  },
  {
    title: "Petal Planner",
    status: "Live",
    color: "bg-green-100 text-green-700",
    description:
      "A minimal planner designed for students who enjoy clean organization.",
  },
  {
    title: "Tech Nest",
    status: "Growing",
    color: "bg-blue-100 text-blue-700",
    description:
      "A community where students learn coding, AI, startups and productivity together.",
  },
];

export default function Startups() {
  return (
    <section
      id="projects"
      className="container py-32"
    >
      <div className="mb-20">

        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-neutral-500">
          FEATURED WORK
        </p>

        <h2 className="heading text-6xl leading-tight">

          Things I'm
          <br />

          building.

        </h2>

      </div>

      <div className="space-y-12">

        {projects.map((project) => (

          <article
            key={project.title}
            className="overflow-hidden rounded-[36px] border border-neutral-200 bg-white"
          >

            <div className="aspect-[16/8] bg-neutral-100 flex items-center justify-center">

              <p className="text-neutral-400 text-xl">
                {project.title} Screenshot
              </p>

            </div>

            <div className="p-10">

              <div className="flex items-center justify-between">

                <h3 className="heading text-5xl">

                  {project.title}

                </h3>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-medium ${project.color}`}
                >
                  {project.status}
                </span>

              </div>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-neutral-600">

                {project.description}

              </p>

              <button className="mt-10 font-semibold text-[var(--accent)] transition hover:translate-x-2">

                View Project →

              </button>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}