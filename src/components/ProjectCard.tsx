import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
}

// Update your ProjectCard component
const ProjectCard = ({ title, description, techStack }: ProjectCardProps) => (
  <motion.div
    className="group relative bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    whileHover="hover"
    initial="initial"
  >
    {/* Image Container */}
    <div className="relative h-64 overflow-hidden">
      <motion.img
        src="/images/portfolio-image.png" // Replace with your image path
        alt={title}
        className="w-full h-full object-cover"
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.05 },
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Technology Overlay */}
      <motion.div
        className="absolute inset-0 bg-zinc-900/80 flex flex-wrap gap-2 p-4 items-center justify-center opacity-0"
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
      >
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/30"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="font-heading text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
        {title}
      </h3>
      <p className="font-body text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-4">
        {description}
      </p>
      <div className="flex gap-4 border-t border-zinc-100 dark:border-zinc-700 pt-4">
        <a
          href="#"
          className="font-body text-emerald-500 hover:text-emerald-600 flex items-center gap-1.5 group/link"
        >
          <span>View Demo</span>
          <span className="group-hover/link:translate-x-1 transition-transform">
            →
          </span>
        </a>
        <a
          href="https://github.com/raphaelbautista/nextjs-portfolio-site"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
