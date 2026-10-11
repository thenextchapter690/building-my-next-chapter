import Navbar from "@/app/components/navbar/Navbar";
import Hero from "@/app/components/hero/Hero";
import About from "@/app/components/about/About";
import FeaturedProjects from "@/app/components/projects/FeaturedProjects";
import CurrentFocus from "@/app/components/current-focus/CurrentFocus";
import Skills from "@/app/components/skills/Skills";
import Social from "@/app/components/social/Socials";
import Footer from "@/app/components/footer/Footer";
import Cursor from "@/app/components/cursor/Cursor";
import AnimatedBackground from "@/app/components/background/AnimatedBackground";

export default function Home() {
  return (
    <>
      <Cursor />
      <AnimatedBackground />

      <Navbar />

      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <CurrentFocus />
        <Skills />
        <Social />
      </main>

      <Footer />
    </>
  );
}