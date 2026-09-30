import { HeroSection } from "@/components/sections/HeroSection";
import { NowSection } from "@/components/sections/NowSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ActivitySection } from "@/components/sections/ActivitySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NowSection />
      <ProjectsSection />
      <ExperienceSection />
      <ActivitySection />
    </>
  );
}