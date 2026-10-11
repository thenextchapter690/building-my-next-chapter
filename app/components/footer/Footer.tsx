export default function Footer() {
  return (
    <footer className="mt-32 border-t border-neutral-200">

      <div className="container py-20">

        <h2 className="heading text-6xl">

          Let&apos;s build
          <br />
          something meaningful.

        </h2>

        <p className="mt-8 max-w-xl text-lg leading-9 text-neutral-500">

          Thanks for visiting my little corner of the internet.
          This is only the beginning.

        </p>

        <div className="mt-12 flex flex-wrap gap-6 text-lg">

          <a
            href="https://github.com/thenextchapter690"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sam-iya-17327543a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/thenext.chapter._/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

        </div>

      </div>

      <div className="border-t py-8 text-center text-neutral-500">

        © 2026 Samiya • Built with Next.js

      </div>

    </footer>
  );
}
