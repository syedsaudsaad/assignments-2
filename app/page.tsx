import Hero from "./Components/Hero/Hero";
import Skill from "./Components/Skill/Skill";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import projects from "./Projects/page"
import Project from "./Components/Project/Project";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skill />
      <Experience />
      <Work />
      <About />
      <Contact />
      <Project />

    </div>
  )
};