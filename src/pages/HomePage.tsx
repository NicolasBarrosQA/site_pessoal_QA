import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ImpactSection from "@/components/sections/ImpactSection";
import PrinciplesSection from "@/components/sections/PrinciplesSection";
import SkillsSection from "@/components/sections/SkillsSection";

const HomePage = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <HeroSection />
      <PrinciplesSection />
      <ExperienceSection />
      <ImpactSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
