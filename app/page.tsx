import Navbar from "@/app/components/navbar/Navbar";
import Hero from "@/app/components/hero/Hero";
import About from "@/app/components/about/About";
import Startups from "@/app/components/startups/Startups";
import CurrentFocus from "@/app/components/current-focus/CurrentFocus";
import Skills from "@/app/components/skills/Skills";
import Interests from "@/app/components/interests/Interests";
import Footer from "@/app/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <About />

        <Startups />

        <CurrentFocus />

        <Skills />

        <Interests />

      </main>

      <Footer />
    </>
  );
}