import { motion } from "framer-motion";
import SkillsCard from "./SkillsCard";
import { containerVariants } from "./utils/animations";

const skills = {
  it: [
    { name: "Windows", image: "/images/windows-logo.png" },
    { name: "MacOS", image: "/images/macos-logo.png" },
    { name: "Linux", image: "/images/linux-logo.png" },
    { name: "Azure", image: "/images/azure-logo.png" },
    { name: "Jira", image: "/images/jirasvcmgmt-logo.png" },
    { name: "Zendesk", image: "/images/zendesk-logo.png" },
    { name: "Powershell", image: "/images/powershell-logo.png" },
  ],
  developer: [
    { name: "Git", image: "/images/git-logo.png" },
    { name: "Visual Studio Code", image: "/images/vscode-logo.png" },
    { name: "HTML5", image: "/images/html5-logo.png" },
    { name: "Tailwind CSS", image: "/images/tailwind-logo.png" },
    { name: "NextJS", image: "/images/nextjs-logo.png" },
  ],
};

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="min-h-screen py-20 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-12">
          Technical Expertise
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SkillsCard title="IT Operations" skills={skills.it} />
          <SkillsCard title="Development Tools" skills={skills.developer} />
        </motion.div>
      </div>
    </motion.section>
  );
}
