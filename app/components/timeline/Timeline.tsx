const timeline = [
  {
    year: "2024",
    title: "Started Learning Programming",
    description:
      "Began my coding journey and explored web development, Flutter, and AI.",
  },
  {
    year: "2025",
    title: "First Freelance Projects",
    description:
      "Started building websites and learning how real projects are developed.",
  },
  {
    year: "2025",
    title: "Built Petal Planner",
    description:
      "Created a productivity app focused on planning, journaling, and organization.",
  },
  {
    year: "2026",
    title: "Started Labello",
    description:
      "Began building an AI learning platform where students can create personalized tutors.",
  },
  {
    year: "2026",
    title: "Petal Writes",
    description:
      "Designed an AI writing companion for authors to turn ideas into polished stories.",
  },
  {
    year: "Now",
    title: "Building My Next Chapter",
    description:
      "Learning every day while preparing for boards and building products in public.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="container mx-auto px-6 py-32"
    >
      <div className="max-w-4xl mx-auto">

        <p className="text-pink-500 uppercase tracking-[0.3em] font-semibold">
          Journey
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          My Timeline
        </h2>

        <div className="relative mt-20 border-l-2 border-pink-200">

          {timeline.map((item) => (
            <div
              key={item.title}
              className="relative mb-16 ml-8"
            >
              <div className="absolute -left-[42px] top-1 h-5 w-5 rounded-full bg-pink-500 border-4 border-white"></div>

              <p className="text-sm font-semibold text-pink-500">
                {item.year}
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}