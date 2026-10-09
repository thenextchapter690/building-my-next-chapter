export default function LabelloShowcase() {
  return (
    <section className="py-36">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">

        {/* Left */}

        <div className="flex-1">

          <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
            🚀 Featured Startup
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight">
            Labello
          </h2>

          <p className="mt-6 text-lg leading-9 text-neutral-600 dark:text-neutral-300">
            An AI-powered learning platform where students can create
            personalized AI tutors that teach exactly the way they learn.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">

            <span className="rounded-full border px-4 py-2">
              Flutter
            </span>

            <span className="rounded-full border px-4 py-2">
              FastAPI
            </span>

            <span className="rounded-full border px-4 py-2">
              PostgreSQL
            </span>

            <span className="rounded-full border px-4 py-2">
              AI
            </span>

          </div>

          <button className="mt-10 rounded-full bg-pink-500 px-8 py-4 font-semibold text-white transition hover:bg-pink-600">
            Coming Soon
          </button>

        </div>

        {/* Right */}

        <div className="flex flex-1 justify-center">

          <div className="flex h-[600px] w-[300px] items-center justify-center rounded-[45px] border-8 border-neutral-900 bg-gradient-to-br from-pink-100 via-white to-pink-50 shadow-2xl">

            <div className="text-center">

              <div className="text-6xl">
                🌸
              </div>

              <h3 className="mt-6 text-3xl font-bold">
                Labello
              </h3>

              <p className="mt-4 px-8 text-neutral-500">
                Your personal AI teacher.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}