import { motion } from "framer-motion";
import AchievementCard from "./AchievementsCard";
import { containerVariants, itemVariants } from "./utils/animations";

const achievements = [
  {
    title: "CompTIA A+",
    description: "Certified in 2023",
    date: "2023",
    image: "/images/comptia-a-plus.png",
    type: "certification",
  },
  {
    title: "Employee of the Month",
    description: "Awarded by Company X",
    date: "2022",
    type: "award",
  },
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
