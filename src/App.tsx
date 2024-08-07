import { BackgroundBeams } from "./components/background/beams";
import { LampHeroSection } from "./sections/lamp-hero";
import { config } from "./config";
import HeroSection from "./sections/hero";
import ProfileSection from "./sections/profile";

function BeamScreen() {
  return (
    <div className="font-poppins">
      <HeroSection />
      <ProfileSection />
      <BackgroundBeams />
    </div>
  );
}

function LampScreen() {
  return (
    <div className="font-poppins">
      <LampHeroSection />
      <ProfileSection />
    </div>
  );
}

export default function App() {
  const style = config.screen.style;
  switch (style) {
    case "lamp":
      return <LampScreen />;
    case "beam":
    default:
      return <BeamScreen />;
  }
}
