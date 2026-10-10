const focus = [
  {
    title: "Building Labello",
    description:
      "Designing an AI learning platform that gives every student a personalized learning experience.",
  },
  {
    title: "Preparing for Boards",
    description:
      "Balancing school with projects while staying consistent every day.",
  },
  {
    title: "Learning Flutter & AI",
    description:
      "Exploring modern technologies to build products instead of just tutorials.",
  },
  {
    title: "Growing Tech Nest",
    description:
      "Creating a welcoming community where students can learn and build together.",
  },
];

export default function CurrentFocus() {
  return (
    <section id="focus" className="container py-32">

      <div className="mb-20">

        <p className="mb-3 uppercase tracking-[0.35em] text-sm text-neutral-500">
          CURRENTLY
        </p>

        <h2 className="heading text-6xl">
          What I'm focused on.
        </h2>

      </div>

      <div className="space-y-6">

        {focus.map((item) => (

          <div
            key={item.title}
            className="rounded-[30px] border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
          >

            <h3 className="mb-3 text-2xl font-semibold">
              {item.title}
            </h3>

            <p className="leading-8 text-neutral-600">
              {item.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}