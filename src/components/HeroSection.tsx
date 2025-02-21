import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { SocialIcon } from "react-social-icons";

const MotionSocialIcon = motion(SocialIcon);

const RotatingTypewriter = () => {
  const roles = useMemo(
    () => ["Systems Administration", "Web Development"],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const role = roles[currentIndex];
    let timeout: NodeJS.Timeout | null = null;

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

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentText, isTyping, currentIndex, roles]);

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

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);

  return (
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
            src="/avatar.png"
            alt="Raphael Bautista"
            className="w-64 h-64 lg:w-96 lg:h-96 rounded-full object-cover shadow-xl hover:shadow-2xl transition-all duration-300"
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
              href="https://www.linkedin.com/in/raphaelbautista08/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              network="linkedin"
              bgColor="#CBD5E0"
              fgColor="#4A5568"
              style={{ height: 35, width: 35 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
            <MotionSocialIcon
              href="https://www.instagram.com/raphaelbautista/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              network="instagram"
              bgColor="#CBD5E0"
              fgColor="#4A5568"
              style={{ height: 35, width: 35 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
            <MotionSocialIcon
              href="https://www.facebook.com/raphael.epb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              network="facebook"
              bgColor="#CBD5E0"
              fgColor="#4A5568"
              style={{ height: 35, width: 35 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
            <MotionSocialIcon
              href="https://www.tiktok.com/@aimeph_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Profile"
              network="tiktok"
              bgColor="#CBD5E0"
              fgColor="#4A5568"
              style={{ height: 35, width: 35 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-500 text-white px-8 py-3 font-body rounded-lg w-fit shadow-md hover:bg-emerald-600 transition-colors mt-6"
            href="#projects"
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
