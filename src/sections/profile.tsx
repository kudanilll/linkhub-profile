import { motion } from "framer-motion";
import { ListProfile } from "../components/list-profile";

export default function ProfileSection() {
  return (
    <section
      id="#profile"
      className="h-full md:h-screen w-full font-poppins bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
    >
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-2xl md:text-5xl font-bold dark:text-white text-center mb-6">
          View all my social media profiles
        </div>
        <ListProfile
          listarray={[
            {
              title: "Instagram",
              description: "@achmaddaniel",
              url: "https://www.instagram.com/achmaddaniel__",
              img: "https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000",
            },
            {
              title: "Github",
              description: "achmaddaniel24 (kudanill.)",
              url: "https://github.com/achmaddaniel24",
              img: "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=ffffff",
            },
            {
              title: "Youtube Channel",
              description: "kudanill24",
              url: "https://www.youtube.com/@kudanil24",
              img: "https://img.icons8.com/?size=100&id=19318&format=png&color=000000",
            },
            {
              title: "Saweria",
              description: "Support me",
              url: "https://saweria.co/achmaddaniel",
              img: "https://static.miraheze.org/jkt48wikiwiki/8/80/Saweria-logo.png",
            },
          ]}
        />
      </motion.div>
    </section>
  );
}
