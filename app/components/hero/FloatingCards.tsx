export default function FloatingCards() {
  const cards = [
    {
      title: "🚀 Startups",
      value: "3+ Ideas",
    },
    {
      title: "💻 Coding",
      value: "Flutter • AI",
    },
    {
      title: "📚 Student",
      value: "Class 10",
    },
    {
      title: "🎨 Creative",
      value: "Drawing & Writing",
    },
  ];

  return (
    <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-3xl border border-pink-200 bg-white/80 p-6 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <p className="text-sm text-pink-500">{card.title}</p>

          <h3 className="mt-3 text-2xl font-bold">
            {card.value}
          </h3>
        </div>
      ))}
    </div>
  );
}
