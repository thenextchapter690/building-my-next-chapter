const projects = [
  {
    title: "Labello",
    status: "Building",
    description:
      "An AI-powered learning platform where students can create their own personalized AI tutors.",
    tech: "Flutter • FastAPI • PostgreSQL • OpenAI",
  },
  {
    title: "Petal Writes",
    status: "Planning",
    description:
      "An AI writing companion that transforms rough ideas into beautiful chapters for authors.",
    tech: "Flutter • FastAPI • GPT • Firebase",
  },
  {
    title: "Version 2",
    status: "Research",
    description:
      "A secret startup focused on solving a real problem with AI. More details coming soon.",
    tech: "Coming Soon",
  },
  {
    title: "Petal Planner",
    status: "Completed",
    description:
      "A minimal planner built to organize tasks, journals, schedules, and daily productivity.",
    tech: "React • Firebase",
  },
];

export default function Products() {
  return (
    <section
      id="projects"
      className="container mx-auto px-6 py-32"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-pink-500 font-semibold uppercase tracking-[0.3em]">
          Projects
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Things I'm Building
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-pink-100 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <span className="rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-600">
                  {project.status}
                </span>
              </div>

              <p className="mt-6 text-neutral-600 dark:text-neutral-300">
                {project.description}
              </p>

              <p className="mt-8 text-sm font-medium text-pink-500">
                {project.tech}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
