import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { IntroSection } from "@/components/sections/IntroSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AssuredDifference } from "@/components/sections/AssuredDifference";
import { OverAndAboveFeature } from "@/components/sections/OverAndAboveFeature";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <IntroSection />
      <ServicesGrid />
      <AssuredDifference />
      <OverAndAboveFeature />
      <ReviewsSection />
      <TeamSection />
      <CtaBanner />
    </>
  );
}
