import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Products from "../components/products/Products";
import Timeline from "../components/timeline/Timeline";
import Skills from "../components/skills/Skills";
import Interests from "../components/interests/Interests";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Timeline />
      <Skills />
      <Interests />
    </>
  );
}