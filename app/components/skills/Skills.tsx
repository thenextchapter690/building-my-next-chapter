const skills = [
  "Flutter",
  "Dart",
  "Python",
  "Next.js",
  "React",
  "Firebase",
  "FastAPI",
  "PostgreSQL",
  "Git & GitHub",
  "Figma",
  "UI/UX Design",
  "AI Development",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="container mx-auto px-6 py-32"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-pink-500 uppercase tracking-[0.3em] font-semibold">
          Skills
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Things I Love Building With
        </h2>

        <div className="mt-16 flex flex-wrap gap-5">

          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-full border border-pink-200 bg-white px-6 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 hover:shadow-lg dark:bg-neutral-900"
            >
              {skill}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
