import { motion } from "framer-motion";

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="min-h-screen py-20 relative">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-12">
          Development Roadmap
        </h2>

        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 h-full border-r-2 border-zinc-200 dark:border-zinc-700"></div>

        <div className="space-y-12">
          {[
            {
              title: "Short-term Goals",
              items: [
                "Complete Comptia A+, AZ-900, and MS-900",
                "Secure Systems Administrator/DevOps role",
                "Contribute to open-source",
              ],
            },
            {
              title: "Long-term Goals",
              items: [
                "AWS Certified DevOps Engineer - Professional",
                "Transition to DevOps role",
                "Start tech blog/YouTube channel",
              ],
            },
          ].map((group, idx) => (
            <div key={group.title} className="relative">
              {/* Desktop Version */}
              <div className="hidden md:flex items-center justify-between">
                {idx % 2 === 0 ? (
                  <>
                    {/* Empty left space */}
                    <div className="w-5/12" />
                    {/* Timeline dot */}
                    <div className="z-10 flex justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                        className="w-8 h-8 bg-emerald-500 rounded-full"
                      />
                    </div>
                    {/* Card on right */}
                    <div className="w-5/12">
                      <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-700">
                        <h3 className="text-2xl font-semibold text-emerald-500 mb-4">
                          {group.title}
                        </h3>
                        <ul className="space-y-3 text-zinc-600 dark:text-zinc-300">
                          {group.items.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + i * 0.1 }}
                              className="flex items-start"
                            >
                              <span className="text-emerald-500 mr-2">▹</span>
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Card on left */}
                    <div className="w-5/12">
                      <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-700">
                        <h3 className="text-2xl font-semibold text-emerald-500 mb-4">
                          {group.title}
                        </h3>
                        <ul className="space-y-3 text-zinc-600 dark:text-zinc-300">
                          {group.items.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + i * 0.1 }}
                              className="flex items-start"
                            >
                              <span className="text-emerald-500 mr-2">▹</span>
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* Timeline dot */}
                    <div className="z-10 flex justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                        className="w-8 h-8 bg-emerald-500 rounded-full"
                      />
                    </div>
                    {/* Empty right space */}
                    <div className="w-5/12" />
                  </>
                )}
              </div>

              {/* Mobile Version */}
              <div className="md:hidden flex flex-col items-center">
                {/* Dot above the card */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="w-6 h-6 bg-emerald-500 rounded-full mb-4"
                />
                <div className="w-full">
                  <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-700">
                    <h3 className="text-2xl font-semibold text-emerald-500 mb-4">
                      {group.title}
                    </h3>
                    <ul className="space-y-3 text-zinc-600 dark:text-zinc-300">
                      {group.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="flex items-start"
                        >
                          <span className="text-emerald-500 mr-2">▹</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
