import LitUpBorderButton from "../components/button/lit-up-border";
import { TypewriterEffectSmooth } from "../components/typewriter-effect";
import { config } from "../config";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="h-screen w-full font-poppins bg-gray-950 relative flex flex-col items-center justify-center antialiased"
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base font-semibold">
          Hello Everyone! My name is {config.profile.name}
        </p>
        <TypewriterEffectSmooth
          words={[
            {
              text: "Wellcome",
            },
            {
              text: "to",
            },
            {
              text: "my",
            },
            {
              text: "LinkHub Profile.",
              className: "text-blue-500 dark:text-blue-500",
            },
          ]}
        />
        <div className="md:hidden">
          <LitUpBorderButton>Scroll</LitUpBorderButton>
        </div>
        <div className="hidden md:block">
          <LitUpBorderButton>Scroll to see next section</LitUpBorderButton>
        </div>
      </div>
    </section>
  );
}
