import { HeroSection } from "@/components/sections/v2/HeroSection";
import { AboutSection } from "@/components/sections/v2/AboutSection";
import { NowSection } from "@/components/sections/v2/NowSection";
import { ProjectsSection } from "@/components/sections/v2/ProjectsSection";
import { HowIWorkSection } from "@/components/sections/v2/HowIWorkSection";
import { ExperienceSection } from "@/components/sections/v2/ExperienceSection";
import { ActivitySection } from "@/components/sections/v2/ActivitySection";
import { ContactSection } from "@/components/sections/v2/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <NowSection />
      <ProjectsSection />
      <HowIWorkSection />
      <ExperienceSection />
      <ActivitySection />
      <ContactSection />
    </>
  );
}