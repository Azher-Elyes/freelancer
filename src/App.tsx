import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { NeedsSection } from '@/components/NeedsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { BuildSection } from '@/components/BuildSection';
import { WorkSection } from '@/components/WorkSection';
import { WhySection } from '@/components/WhySection';
import { ProcessSection } from '@/components/ProcessSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FinalCTA } from '@/components/FinalCTA';
import { ProjectForm } from '@/components/ProjectForm';
import { Footer } from '@/components/Footer';

export default function App() {
  useSmoothScroll();

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main className="noise-overlay">
        <Hero />
        <NeedsSection />
        <ServicesSection />
        <BuildSection />
        <WorkSection />
        <WhySection />
        <ProcessSection />
        <AboutSection />
        <SkillsSection />
        <TestimonialsSection />
        <FinalCTA />
        <ProjectForm />
      </main>
      <Footer />
    </>
  );
}