import StartupCard from "./StartupCard";

const startups = [
  {
    title: "Labello",
    status: "Building",
    description:
      "An AI learning platform where every student can build their own personalized tutor.",
    tech: ["Flutter", "FastAPI", "AI", "PostgreSQL"],
  },
  {
    title: "Petal Writes",
    status: "Planning",
    description:
      "An AI companion helping writers transform rough ideas into polished chapters.",
    tech: ["Flutter", "GPT", "Firebase", "Writing"],
  },
  {
    title: "Version 2",
    status: "Research",
    description:
      "Currently exploring a new AI startup solving a real-world problem.",
    tech: ["AI", "Research", "Coming Soon"],
  },
];

export default function Startups() {
  return (
    <section
      id="startups"
      className="container mx-auto px-6 py-32"
    >
      <p className="text-center text-pink-500 uppercase tracking-[0.3em] font-semibold">
        Featured Startups
      </p>

      <h2 className="mt-4 text-center text-5xl font-bold">
        Building Ideas Into Reality
      </h2>

      <div className="mt-20 grid gap-10 lg:grid-cols-3">

        {startups.map((startup) => (
          <StartupCard
            key={startup.title}
            {...startup}
          />
        ))}

      </div>
    </section>
  );
}