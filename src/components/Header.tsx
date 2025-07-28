import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light"); // Default to light, will be overridden by system pref
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Theme setup based on system preference
  useEffect(() => {
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = systemDark ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
      document.documentElement.classList.toggle("dark", e.matches);
    };
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  // Listen for scroll to update header style
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-50/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-sm border-b border-zinc-200/50 dark:border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={theme === "dark" ? "/logo-light.png" : "/logo-dark.png"}
              alt="Brand Logo"
              height={40}
              width={40}
              className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
            />
          </Link>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-zinc-800 dark:text-zinc-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-5 items-center">
            <NavLinks scrolled={scrolled} />
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                scrolled
                  ? "bg-zinc-100 dark:bg-zinc-800"
                  : "bg-zinc-100/80 dark:bg-zinc-800/50"
              } hover:bg-zinc-200 dark:hover:bg-zinc-700`}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              <span className="text-sm font-medium font-body text-zinc-800 dark:text-zinc-200">
                {theme === "dark" ? "Light" : "Dark"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Collapsible) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden mt-4 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <NavLinks
                scrolled={scrolled}
                isMobile
                closeMenu={() => setIsMobileMenuOpen(false)}
              />
              <button
                onClick={toggleTheme}
                className="mt-4 flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 bg-zinc-100/80 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                <span className="text-sm font-medium font-body text-zinc-800 dark:text-zinc-200">
                  {theme === "dark" ? "Light" : "Dark"}
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

// Reusable NavLinks Component
const NavLinks = ({
  scrolled,
  isMobile = false,
  closeMenu,
}: {
  scrolled: boolean;
  isMobile?: boolean;
  closeMenu?: () => void;
}) => (
  <div className={`flex ${isMobile ? "flex-col gap-3" : "gap-5"}`}>
    <NavLink href="#projects" scrolled={scrolled} onClick={closeMenu}>
      Projects
    </NavLink>
    <NavLink href="#roadmap" scrolled={scrolled} onClick={closeMenu}>
      Roadmap
    </NavLink>
    <NavLink href="#skills" scrolled={scrolled} onClick={closeMenu}>
      Skills
    </NavLink>
    <NavLink href="#achievements" scrolled={scrolled} onClick={closeMenu}>
      Achievements
    </NavLink>
    <NavLink href="#contact" scrolled={scrolled} onClick={closeMenu}>
      Contact
    </NavLink>
  </div>
);

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  scrolled,
  onClick,
}) => (
  <Link
    href={href}
    className={`font-body text-sm font-medium px-3 py-2 rounded-lg transition-all duration-300
      ${
        scrolled
          ? "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      }
      relative after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-px 
      after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full`}
    onClick={onClick}
  >
    {children}
  </Link>
);

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-emerald-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-zinc-800 dark:text-zinc-200"
    fill="currentColor"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);
