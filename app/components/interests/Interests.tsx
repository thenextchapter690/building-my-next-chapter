const interests = [
  {
    emoji: "📚",
    title: "Reading",
    text: "Books that make me think differently.",
  },
  {
    emoji: "🎧",
    title: "Music",
    text: "My daily background while studying and building.",
  },
  {
    emoji: "♟",
    title: "Chess",
    text: "A hobby that teaches patience and strategy.",
  },
  {
    emoji: "🎨",
    title: "Design",
    text: "Learning how to make products feel beautiful.",
  },
  {
    emoji: "🚀",
    title: "Startups",
    text: "I enjoy turning ideas into real projects.",
  },
  {
    emoji: "✍️",
    title: "Writing",
    text: "Documenting my journey and future novel ideas.",
  },
];

export default function Interests() {
  return (
    <section
      id="interests"
      className="container py-32"
    >

      <div className="mb-20">

        <p className="mb-3 uppercase tracking-[0.35em] text-sm text-neutral-500">
          BEYOND TECH
        </p>

        <h2 className="heading text-6xl">
          Things I enjoy.
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {interests.map((item) => (

          <div
            key={item.title}
            className="rounded-[30px] border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="mb-5 text-5xl">
              {item.emoji}
            </div>

            <h3 className="mb-3 text-2xl font-semibold">
              {item.title}
            </h3>

            <p className="leading-8 text-neutral-600">
              {item.text}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}