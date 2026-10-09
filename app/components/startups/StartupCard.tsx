type StartupCardProps = {
  title: string;
  status: string;
  description: string;
  tech: string[];
};

export default function StartupCard({
  title,
  status,
  description,
  tech,
}: StartupCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-pink-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-neutral-900">

      <div className="flex items-center justify-between">

        <h3 className="text-3xl font-bold">
          {title}
        </h3>

        <span className="rounded-full bg-pink-100 px-4 py-1 text-sm font-medium text-pink-600">
          {status}
        </span>

      </div>

      <p className="mt-6 leading-8 text-neutral-600 dark:text-neutral-300">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-pink-200 px-4 py-2 text-sm"
          >
            {item}
          </span>
        ))}

      </div>

      <div className="mt-10 flex gap-4">

        <button className="button">
          View Project
        </button>

        <button className="rounded-full border border-pink-300 px-6 py-3 transition hover:bg-pink-50">
          Learn More
        </button>

      </div>

    </div>
  );
}