import { motion } from "framer-motion";

const SkillsCard = ({
  title,
  skills,
}: {
  title: string;
  skills: Array<{ name: string; image: string }>;
}) => (
  <motion.div
    className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-700"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
  >
    <h3 className="font-heading text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-6">
      {title}
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 bg-zinc-50 dark:bg-zinc-700/30 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700/50 transition-colors"
        >
          <div className="w-16 h-16 mb-2 bg-zinc-200 dark:bg-zinc-600 rounded-lg flex items-center justify-center">
            <img
              src={skill.image}
              alt={skill.name}
              className="w-10 h-10 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                (
                  e.target as HTMLImageElement
                ).parentElement!.innerHTML = `<span class="text-zinc-500 dark:text-zinc-400 text-sm">${skill.name.replace(
                  /'/g,
                  "&#39;"
                )}</span>`;
              }}
            />
          </div>
          <span className="font-body text-sm text-center text-zinc-700 dark:text-zinc-300">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default SkillsCard;
