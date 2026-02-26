import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingScreen } from "@/components/LoadingScreen";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="noise-overlay min-h-screen">
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <Hero />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Certifications />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}
