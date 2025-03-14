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
    demoLink: "https://your-portfolio-demo.com",
    repoLink: "https://github.com/raphaelbautista/nextjs-portfolio-site",
    imageSrc: "/images/portfolio-image.png",
  },
  {
    title: "Home Server Setup with Jellyfin and File Sharing",
    description:
      "Configured a headless MacBook Air M1 as a home server for media streaming and file sharing with Jellyfin and Pi-hole. Enabled SSH for remote access and automated startup.",
    techStack: [
      "SMB",
      "Docker",
      "Jellyfin",
      "Pi-hole",
      "SSH",
      "Networking",
      "File Sharing",
      "MacOS",
    ],
    demoLink: "",
    repoLink: "",
    imageSrc: "/images/ssh.png", // Add a screenshot of Jellyfin or terminal
  },
  {
    title: "Company Knowledgebase Chatbot (Ongoing)",
    description:
      "Developing a chatbot integrated with a company knowledgebase, being built with Next.js and deployed on Azure.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Azure",
      "Github",
      "CI/CD",
      "AI Assisted Development",
      "Chatbot",
    ],
    demoLink: "",
    repoLink: "",
    imageSrc: "/images/chatbot-image.jpg",
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
              <ProjectCard
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                demoLink={project.demoLink}
                repoLink={project.repoLink}
                imageSrc={project.imageSrc}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
