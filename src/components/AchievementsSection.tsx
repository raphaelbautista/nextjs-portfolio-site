import { motion } from "framer-motion";
import AchievementCard from "./AchievementsCard";
import { containerVariants, itemVariants } from "./utils/animations";
import { Achievement } from "./AchievementsCard";
const achievements: Achievement[] = [
  {
    title: "Google IT Support Professional Certificate",
    description: "Certified in 2025",
    date: "2025",
    image: "/images/google-it-support.png",
    type: "certification",
  } as Achievement,
];

export default function AchievementsSection() {
  return (
    <motion.section
      id="achievements"
      className="min-h-screen py-20 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-12">
          Achievements
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={itemVariants}>
              <AchievementCard achievement={achievement} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
