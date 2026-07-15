import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AssuredDifference } from "@/components/sections/AssuredDifference";
import { OverAndAboveFeature } from "@/components/sections/OverAndAboveFeature";
import { TeamSection } from "@/components/sections/TeamSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <AssuredDifference />
      <OverAndAboveFeature />
      <TeamSection />
      <CtaBanner />
    </>
  );
}
