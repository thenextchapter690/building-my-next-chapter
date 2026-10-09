const stats = [
  {
    number: "16",
    label: "Years Old",
  },
  {
    number: "3+",
    label: "Startup Ideas",
  },
  {
    number: "1",
    label: "Open Source Project",
  },
  {
    number: "∞",
    label: "Dreams",
  },
];

export default function Stats() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">

        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-pink-200 bg-white/70 p-8 text-center shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-neutral-900/70"
          >
            <h2 className="text-5xl font-bold text-pink-500">
              {stat.number}
            </h2>

            <p className="mt-4 text-neutral-500">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
