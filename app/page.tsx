import Navbar from "@/app/components/navbar/Navbar";
import Hero from "@/app/components/hero/Hero";
import About from "@/app/components/about/About";
import Startups from "@/app/components/startups/Startups";
import Timeline from "@/app/components/timeline/Timeline";
import Skills from "@/app/components/skills/Skills";
import Interests from "@/app/components/interests/Interests";
import LabelloShowcase from "@/app/components/startups/LabelloShowcase";
import Stats from "@/app/components/stats/Stats";
import Footer from "@/app/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Startups />
      <Timeline />
      <Skills />
      <Interests />
      <LabelloShowcase />
      <Stats />
    </>
  );
}