import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              src={isDarkMode ? "/logo-light.png" : "/logo-dark.png"}
              alt="Brand Logo"
              height={40}
              width={40}
              className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
            />
            <span
              className={`font-heading text-lg font-semibold transition-colors ${
                scrolled
                  ? "text-zinc-800 dark:text-zinc-100"
                  : "text-zinc-800 dark:text-zinc-100" // Always visible now
              }`}
            ></span>
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-5">
            <NavLink href="#projects" scrolled={scrolled}>
              Projects
            </NavLink>
            <NavLink href="#skills" scrolled={scrolled}>
              Skills
            </NavLink>
            <NavLink href="#roadmap" scrolled={scrolled}>
              Roadmap
            </NavLink>
            <NavLink href="#contact" scrolled={scrolled}>
              Contact
            </NavLink>
          </div>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 ${
              scrolled
                ? "bg-zinc-100 dark:bg-zinc-800"
                : "bg-zinc-100/80 dark:bg-zinc-800/50"
            }`}
          >
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
}

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
    fill="none"
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
