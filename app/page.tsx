import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StackIcons from "@/components/StackIcons";
import AboutTerminal from "@/components/AboutTerminal";
import ProjectsGrid from "@/components/ProjectsGrid";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar variant="home" />
      <Hero />
      <StackIcons />
      <AboutTerminal />
      <ProjectsGrid />
      <Testimonials />
      <Timeline />
      <Footer />
    </main>
  );
}
