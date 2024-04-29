import { Metadata } from "next";
import HomeSection from "@/components/HomeSection";

export const metadata: Metadata = {
  title: "Portfolio | Tanatorn",
};

export default function Home() {
  return (
    <div>
      <HomeSection />
    </div>
  );
}
