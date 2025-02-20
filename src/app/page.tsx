"use client";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import RoadmapSection from "@/components/RoadmapSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementSection from "@/components/AchievementsSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 overflow-hidden">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
      <Header />
      <HeroSection />
      <ProjectsSection />
      <RoadmapSection />
      <SkillsSection />
      <AchievementSection />
      <FooterSection />
    </div>
  );
}
