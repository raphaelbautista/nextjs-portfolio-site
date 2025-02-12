"use client";
import Header from "@/components/Header";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import {
  EnvelopeIcon,
  CodeBracketIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";

const MotionSocialIcon = motion(SocialIcon);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const RotatingTypewriter = () => {
  const roles = [
    "Systems Administrator",
    "DevOps Enthusiast",
    "Web Development",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const role = roles[currentIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (currentText.length < role.length) {
        timeout = setTimeout(() => {
          setCurrentText(role.slice(0, currentText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      } else {
        setIsTyping(true);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, currentIndex]);

  return (
    <div className="inline-flex items-center h-8">
      <span className="font-body text-xl text-zinc-600 dark:text-zinc-400 font-medium">
        {currentText}
      </span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="ml-1 inline-block w-[2px] bg-zinc-600 dark:bg-zinc-400 h-6"
      />
    </div>
  );
};

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);

  const projects = [
    {
      title: "Self-Hosted Homelab Environment",
      description: "Built and maintained a virtualized homelab...",
      techStack: ["Proxmox VE", "Ansible", "Docker", "Nginx", "Grafana"],
    },
    {
      title: "Personal Portfolio Website",
      description: "Designed and developed a responsive...",
      techStack: [
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Docker",
        "Nginx",
        "Proxmox VE",
      ],
    },
  ];

  const skills = {
    it: [
      { name: "VMware", image: "/images/vmware-icon.png" },
      { name: "Proxmox VE", image: "/images/proxmox-icon.png" },
      { name: "Ansible", image: "/images/ansible-icon.png" },
      { name: "Docker", image: "/images/docker-icon.png" },
      { name: "Nginx", image: "/images/nginx-icon.png" },
      { name: "Windows Server", image: "/images/windows-server-icon.png" },
    ],
    developer: [
      { name: "React/Next.js", image: "/images/react-icon.png" },
      { name: "JavaScript/TypeScript", image: "/images/typescript-icon.png" },
      { name: "Node.js", image: "/images/nodejs-icon.png" },
      { name: "Tailwind CSS", image: "/images/tailwind-icon.png" },
      { name: "Python", image: "/images/python-icon.png" },
      { name: "Linux Administration", image: "/images/linux-icon.png" },
    ],
  };

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

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 overflow-hidden">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      <Header />

      {/* Hero Section with Parallax */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="hero"
        className="h-screen flex items-center relative overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            style={{ y: y1 }}
            className="w-full lg:w-1/2 flex justify-center relative z-10"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="avatar.png"
              alt="Raphael Bautista"
              className="w-64 h-64 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-emerald-500 shadow-xl hover:shadow-2xl transition-all duration-300"
            />
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            className="w-full lg:w-1/2 flex flex-col justify-center text-left mt-8 lg:mt-0 space-y-6 relative z-20"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-zinc-800 dark:text-zinc-100">
              Hi, Im <span className="text-emerald-500">Raphael Bautista</span>
            </h1>
            <div className="font-body text-xl text-zinc-600 dark:text-zinc-400 font-medium">
              <RotatingTypewriter />
            </div>
            <div className="flex space-x-4 mt-4">
              <MotionSocialIcon
                href="https://www.linkedin.com/in/raphaelbautista08/" // Replace with your actual LinkedIn profile URL
                target="_blank"
                aria-label="LinkedIn Profile"
                network="linkedin"
                bgColor="#CBD5E0"
                fgColor="#4A5568"
                style={{ height: 35, width: 35 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
              <MotionSocialIcon
                href="https://www.instagram.com/raphaelbautista/" // Replace with your actual Instagram profile URL
                target="_blank"
                aria-label="Instagram Profile"
                network="instagram"
                bgColor="#CBD5E0"
                fgColor="#4A5568"
                style={{ height: 35, width: 35 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
              <MotionSocialIcon
                href="https://www.facebook.com/raphael.epb/" // Replace with your actual Facebook profile URL
                target="_blank"
                aria-label="Facebook Profile"
                network="facebook"
                bgColor="#CBD5E0"
                fgColor="#4A5568"
                style={{ height: 35, width: 35 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
              <MotionSocialIcon
                href="https://www.tiktok.com/@aimeph_" // Replace with your actual TikTok profile URL
                target="_blank"
                aria-label="TikTok Profile"
                network="tiktok"
                bgColor="#CBD5E0"
                fgColor="#4A5568"
                style={{ height: 35, width: 35 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 text-white px-8 py-3 rounded-lg w-fit shadow-md hover:bg-emerald-600 transition-colors mt-6"
            >
              View My Work
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
      {/* Projects Section */}
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
            Featured Projects
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

      {/* Roadmap Section */}
      <section id="roadmap" className="min-h-screen py-20 relative">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-12">
            Development Roadmap
          </h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-1/2 w-1 bg-zinc-200 dark:bg-zinc-700 h-full top-0 -translate-x-1/2" />

            <div className="space-y-24">
              {/* Timeline Items */}
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
                <motion.div
                  key={group.title}
                  variants={itemVariants}
                  className="relative"
                >
                  <div
                    className={`flex ${
                      idx % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                    } justify-center`} // Center in mobile, align in larger screens
                  >
                    <div className="w-full md:w-3/4 lg:w-1/2 p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-700">
                      <h3 className="font-heading text-2xl font-semibold text-emerald-500 mb-4 text-center lg:text-left">
                        {group.title}
                      </h3>
                      <ul className="font-body space-y-3 text-zinc-600 dark:text-zinc-300">
                        {group.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-emerald-500 mr-2">▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 bg-emerald-500 rounded-full" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
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
            <SkillsCard
              title="IT Infrastructure & Operations"
              skills={skills.it}
            />
            <SkillsCard
              title="Development & Automation"
              skills={skills.developer}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section - To be added later if needed */}

      {/* Footer */}
      <footer className="bg-zinc-800 text-zinc-300 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4">© 2025 Raphael Bautista</p>
        </div>
      </footer>
    </div>
  );
}
