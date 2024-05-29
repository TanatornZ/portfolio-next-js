import { Metadata } from "next";
import HomeSection from "@/components/HomeSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import { Chart } from "react-chartjs-2";
import SkillSection from "@/components/SkillSection";

export const metadata: Metadata = {
  title: "Portfolio | Tanatorn",
};

export default function Home() {
  return (
    <div className="font-mono">
      <HomeSection />
      <ProjectSection />
      {/* <ContactSection /> */}
      <SkillSection />
      <FooterSection />
    </div>
  );
}
