import { BackgroundEffects } from "./components/background-effects";
import { FeaturesSection } from "./components/features-section";
import { FooterSection } from "./components/footer-section";
import { HeroSection } from "./components/hero-section";
import { LandingNav } from "./components/landing-nav";
import { ScreenshotsSection } from "./components/screenshots-section";
import { SetupSection } from "./components/setup-section";
import { StickyMobileCta } from "./components/sticky-mobile-cta";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <BackgroundEffects />

      <LandingNav />
      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
        <HeroSection />
        <SetupSection />
        <ScreenshotsSection />
        <FeaturesSection />
      </main>

      <FooterSection />
      <StickyMobileCta />
    </div>
  );
}
