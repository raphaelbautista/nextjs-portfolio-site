import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [theme, setTheme] = useState<"system" | "light" | "dark">("system");
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as
      | "system"
      | "light"
      | "dark";
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("system");
    }

    if (savedTheme === "dark" || (savedTheme === "system" && systemDark)) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const updateTheme = (selectedTheme: "system" | "light" | "dark") => {
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);

    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (selectedTheme === "system") {
      if (systemDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      document.documentElement.classList.toggle(
        "dark",
        selectedTheme === "dark"
      );
    }

    setIsThemeMenuOpen(false);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [theme]);

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
          {/* Logo and Name */}
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

          {/* Navigation Links and Theme Dropdown (Desktop) */}
          <div className="hidden lg:flex gap-5 items-center">
            <NavLinks scrolled={scrolled} />
            <ThemeDropdown
              theme={theme}
              isThemeMenuOpen={isThemeMenuOpen}
              setIsThemeMenuOpen={setIsThemeMenuOpen}
              updateTheme={updateTheme}
              scrolled={scrolled}
            />
          </div>
        </div>

        {/* Mobile Menu (Collapsible) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4">
            <NavLinks scrolled={scrolled} isMobile />
            <ThemeDropdown
              theme={theme}
              isThemeMenuOpen={isThemeMenuOpen}
              setIsThemeMenuOpen={setIsThemeMenuOpen}
              updateTheme={updateTheme}
              scrolled={scrolled}
              isMobile
            />
          </div>
        )}
      </nav>
    </header>
  );
}

// NavLinks Component (Reusable for Desktop and Mobile)
const NavLinks = ({
  scrolled,
  isMobile = false,
}: {
  scrolled: boolean;
  isMobile?: boolean;
}) => (
  <div className={`flex ${isMobile ? "flex-col gap-3" : "gap-5"}`}>
    <NavLink href="#projects" scrolled={scrolled}>
      Projects
    </NavLink>
    <NavLink href="#roadmap" scrolled={scrolled}>
      Roadmap
    </NavLink>
    <NavLink href="#skills" scrolled={scrolled}>
      Skills
    </NavLink>
    <NavLink href="#achievements" scrolled={scrolled}>
      Achievements
    </NavLink>
  </div>
);

// ThemeDropdown Component (Reusable for Desktop and Mobile)
const ThemeDropdown = ({
  theme,
  isThemeMenuOpen,
  setIsThemeMenuOpen,
  updateTheme,
  scrolled,
  isMobile = false,
}: {
  theme: "system" | "light" | "dark";
  isThemeMenuOpen: boolean;
  setIsThemeMenuOpen: (open: boolean) => void;
  updateTheme: (theme: "system" | "light" | "dark") => void;
  scrolled: boolean;
  isMobile?: boolean;
}) => (
  <div className={`relative ${isMobile ? "mt-4" : ""}`}>
    <button
      onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
      onBlur={() => setTimeout(() => setIsThemeMenuOpen(false), 100)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
        scrolled
          ? "bg-zinc-100 dark:bg-zinc-800"
          : "bg-zinc-100/80 dark:bg-zinc-800/50"
      } hover:bg-zinc-200 dark:hover:bg-zinc-700`}
    >
      {theme === "dark" ? (
        <MoonIcon />
      ) : theme === "light" ? (
        <SunIcon />
      ) : (
        <SystemIcon />
      )}
      <span className="text-sm font-medium font-body text-zinc-800 dark:text-zinc-200">
        Theme
      </span>
    </button>

    {isThemeMenuOpen && (
      <div
        className={`absolute ${
          isMobile ? "left-0" : "right-0"
        } mt-2 w-48 origin-top-right rounded-lg bg-zinc-100 dark:bg-zinc-800 shadow-lg ring-1 ring-zinc-900/5 dark:ring-zinc-700 focus:outline-none`}
      >
        <div className="p-2 space-y-1">
          <button
            onClick={() => updateTheme("system")}
            className="flex w-full items-center gap-2 rounded-md px-3 font-body py-2 text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700"
          >
            <SystemIcon />
            System
            {theme === "system" && <CheckIcon />}
          </button>
          <button
            onClick={() => updateTheme("light")}
            className="flex w-full items-center gap-2 font-body rounded-md px-3 py-2 text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700"
          >
            <SunIcon />
            Light
            {theme === "light" && <CheckIcon />}
          </button>
          <button
            onClick={() => updateTheme("dark")}
            className="flex w-full items-center gap-2 font-body rounded-md px-3 py-2 text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700"
          >
            <MoonIcon />
            Dark
            {theme === "dark" && <CheckIcon />}
          </button>
        </div>
      </div>
    )}
  </div>
);

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
}

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ml-auto h-5 w-5 text-emerald-500"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const SystemIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-zinc-800 dark:text-zinc-200"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const NavLink: React.FC<NavLinkProps> = ({ href, children, scrolled }) => (
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
  >
    {children}
  </Link>
);

// Updated icons to match color scheme
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
