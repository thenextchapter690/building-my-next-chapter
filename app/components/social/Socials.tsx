const socials = [
  {
    title: "GitHub",
    emoji: "🐙",
    description: "Projects & Open Source",
    link: "https://github.com/thenextchapter690",
  },
  {
    title: "Instagram",
    emoji: "📸",
    description: "Build Logs & Journey",
    link: "https://www.instagram.com/thenext.chapter._/",
  },
  {
    title: "LinkedIn",
    emoji: "💼",
    description: "Professional Updates",
    link: "https://www.linkedin.com/in/sam-iya-17327543a/",
  },
  {
    title: "Tech Nest",
    emoji: "💬",
    description: "Discord Community",
    link: "#",
  },
];

export default function Socials() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">

        <p className="text-center text-pink-500 uppercase tracking-[0.3em] font-semibold">
          Follow My Journey
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold">
          Find Me Online
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {socials.map((social) => (
            <a
              key={social.title}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-pink-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-neutral-900"
            >
              <div className="text-5xl">
                {social.emoji}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {social.title}
              </h3>

              <p className="mt-3 text-neutral-500">
                {social.description}
              </p>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}
