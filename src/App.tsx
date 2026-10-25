import { useState } from 'react'; // ✅ Added useState import
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { BuildSection } from '@/components/BuildSection';
import { WorkSection } from '@/components/WorkSection';
import { WhySection } from '@/components/WhySection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FinalCTA } from '@/components/FinalCTA';
import { ProjectFormModal } from './components/ProjectForm';
import { Footer } from '@/components/Footer';
import { DiamondStats } from './components/DiamondStats';

export default function App() {
  useSmoothScroll();
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main className="noise-overlay">
        <Hero />
        <BuildSection />
        <ServicesSection />
        <WorkSection />
        <AboutSection />
        <SkillsSection />
        <WhySection />
        <DiamondStats /> 
        <TestimonialsSection />
        
        {/* ✅ Pass the state trigger to FinalCTA */}
        <FinalCTA onOpenForm={() => setIsFormOpen(true)} />
        
        {/* ❌ REMOVED <ProjectForm /> from here */}
      </main>
      
      <Footer />

      {/* ✅ Render the Modal at the very bottom */}
      <ProjectFormModal 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </>
  );
}