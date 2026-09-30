import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { NowSection } from "@/components/sections/NowSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ActivitySection } from "@/components/sections/ActivitySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <NowSection />
      <ExperienceSection />
      <ProjectsSection />
      <ActivitySection />
    </>
  );
}