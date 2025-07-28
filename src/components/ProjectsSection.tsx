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
    demoLink: "raphaelbautista.site", // Replace with actual demo link
    repoLink: "https://github.com/raphaelbautista/nextjs-portfolio-site", // Your existing repo link
    imageSrc: "/images/portfolio-image.png", // Replace with actual image path if different
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
      "MacOS"
    ],
    demoLink: "https://your-portfolio-demo.com", // Replace with actual demo link
    repoLink: "https://github.com/raphaelbautista/nextjs-portfolio-site", // Your existing repo link
    imageSrc: "/images/ssh.png", // Replace with actual image path if different
  },
  {
    title: "Valheim Dedicated Server hosted via Azure Virtual Machine",
    description:
      "Set up a dedicated Valheim server on Azure VM, enabling multiplayer gaming with friends.",
    techStack: [
      "Azure",
      "Azure Virtual Machine",
      "Networking",
      "Windows Server",
    ],
    demoLink: "https://your-valheim-demo.com", // Replace with actual demo link
    repoLink: "1", // No repo link for this project
    imageSrc: "/images/valheim.png", // Replace with actual image path if different
  },
  {
    title: "Web Based Expenses Tracker",
    description:
      "Created a web-based expenses tracker using Next.js, Tailwind CSS, and Node.js. Deployed using Azure Static Web Apps with working Azure Cosmos DB integration. Originally for usage for me and my girlfriend.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "React",
      "Azure",
      "Azure Cosmos DB",
      "Github",
    ],
    demoLink: "https://kind-moss-097d0d200.2.azurestaticapps.net/?fbclid=IwY2xjawL0DpdleHRuA2FlbQIxMABicmlkETFRVUNDSGk5THFqbDdrQldQAR5LklpiU6fT_U1jvu8aUyaBvB7lTGYkMIY2FJ5oh3sow2vbEjdAX6ER2XCFVw_aem_S-E6dDSXXJc4hLBANJPLHA", // Replace with actual demo link
    repoLink: "1",
    imageSrc: "/images/expensetracker.png", // Replace with actual image path if different
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
