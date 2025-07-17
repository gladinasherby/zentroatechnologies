import React from "react";
import Header from "./components/Header";
import { HeroParallaxDemo } from "./components/hero-parallax";
import FloatingContent from "./components/FloatingContent";
import FeaturesSection from "./components/FeaturesSection";
import ThreeDCardDemo from "./components/3d-card";
import AnimatedTestimonials from "./components/animated-testimonials";
import DevelopmentProcess from "./components/DevelopmentProcess";
import MacbookScroll from "./components/MacbookScroll";
import IndustryFocus from "./components/IndustryFocus";
import InfiniteMovingCardsDemo from "./components/InfiniteMovingCards";
import BackgroundBoxesDemo from "./components/background-boxes";
import { ContactSection } from "./components/ContactSection"; // Adjust the path
import AuroraBackgroundDemo from "./components/aurora-background";
import TabsDemo from "./components/tabs";

function App() {
  return (
    <div className="relative">
      <Header />
      <div className="pt-20">
        {" "}
        {/* Push content below the fixed header */}
        <HeroParallaxDemo />
        <FloatingContent />
        <FeaturesSection />
        <ThreeDCardDemo />
        <DevelopmentProcess />
        <MacbookScroll />
        <IndustryFocus />
        <InfiniteMovingCardsDemo />
        <BackgroundBoxesDemo />
        <AnimatedTestimonials />
        <AuroraBackgroundDemo />
      </div>
    </div>
  );
}

export default App;
