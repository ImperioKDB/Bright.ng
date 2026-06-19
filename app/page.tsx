import Hero from "@/components/Hero";
import StackIcons from "@/components/StackIcons";
import ProjectsGrid from "@/components/ProjectsGrid";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <StackIcons />
      <ProjectsGrid />
      <Testimonials />
      <Timeline />
      <Footer />
    </main>
  );
}
