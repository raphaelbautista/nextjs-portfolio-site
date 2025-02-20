import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { containerVariants, itemVariants } from "./utils/animations";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Developed a responsive portfolio using Next.js and Tailwind CSS, deployed via Azure Static Web Apps with CI/CD.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Azure",
      "Github",
      "CI/CD",
      "AI Assisted Development",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      className="min-h-screen py-20 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-12"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
