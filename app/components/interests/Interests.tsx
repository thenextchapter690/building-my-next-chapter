const interests = [
  {
    emoji: "🎨",
    title: "Drawing",
    description:
      "I enjoy sketching and designing ideas visually. It helps me think creatively.",
  },
  {
    emoji: "📝",
    title: "Journaling",
    description:
      "I document my journey, ideas, lessons, and goals to keep growing every day.",
  },
  {
    emoji: "📅",
    title: "Planning",
    description:
      "I love organizing projects, roadmaps, and productivity systems before building.",
  },
  {
    emoji: "📚",
    title: "Reading",
    description:
      "Books inspire my thinking, storytelling, and the products I dream of building.",
  },
];

export default function Interests() {
  return (
    <section id="interests" className="container mx-auto px-6 py-32">
      <div className="max-w-6xl mx-auto">

        <p className="text-pink-500 uppercase tracking-[0.3em] font-semibold">
          Beyond Code
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Things I Enjoy
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {interests.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-pink-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-neutral-900"
            >
              <div className="text-5xl">{item.emoji}</div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-neutral-600 dark:text-neutral-300 leading-8">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
