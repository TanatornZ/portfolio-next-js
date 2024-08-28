import { Metadata } from "next";
import HomeSection from "@/components/HomeSection";
import ProjectSection from "@/components/ProjectSection";
import FooterSection from "@/components/FooterSection";
import SkillSection from "@/components/SkillSection";
import ContactSection from "@/components/Contact/ContactSection";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Portfolio | Tanatorn",
};

export default function Home() {
  return (
    <div className="font-mono">
      <div>
        <Toaster />
      </div>
      <HomeSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
