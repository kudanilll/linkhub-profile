import { motion } from "framer-motion";
import { ListProfile } from "../components/list-profile";
import { config } from "../config";

export default function ProfileSection() {
  return (
    <section
      id="profile"
      className="h-full md:h-screen w-full font-poppins bg-gray-950 relative flex flex-col items-center justify-center antialiased"
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
        <div className="text-2xl md:text-5xl font-semibold dark:text-white text-center mb-6">
          View all my social media profiles
        </div>
        <ListProfile listarray={config.profile.list_social_media} />
      </motion.div>
    </section>
  );
}
