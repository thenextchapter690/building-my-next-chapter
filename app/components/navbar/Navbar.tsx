export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto mt-5 flex w-[92%] max-w-7xl items-center justify-between rounded-full border border-pink-200/60 bg-white/70 px-6 py-4 shadow-lg backdrop-blur-md dark:bg-neutral-900/70">

        <h2 className="text-lg font-bold">
          the<span className="text-pink-500">nextchapter</span>
        </h2>

        <ul className="hidden gap-8 text-sm font-medium md:flex">
          <li>
            <a href="#" className="hover:text-pink-500 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#journey" className="hover:text-pink-500 transition">
              Journey
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-pink-500 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-pink-500 transition">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="https://www.instagram.com/thenext.chapter._/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-pink-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-pink-600"
        >
          Follow
        </a>

      </nav>
    </header>
  );
}