import { Metadata } from "next";
import HomeSection from "@/components/HomeSection";
import ProjectSection from "@/components/ProjectSection";

export const metadata: Metadata = {
  title: "Portfolio | Tanatorn",
};

export default function Home() {
  return (
    <div>
      <HomeSection />
      <ProjectSection />
    </div>
  );
}
