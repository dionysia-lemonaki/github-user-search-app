import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

const getSystemTheme = (): Theme => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const getInitialTheme = (): Theme => {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return getSystemTheme();
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer flex items-center gap-3 md:gap-4 text-neutral-500 dark:text-neutral-200 hover:text-neutral-700 dark:hover:text-neutral-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
    >
      <span className="uppercase font-bold text-[0.8125rem] tracking-[0.192em] leading-[1.4]">
        {theme === "dark" ? "light" : "dark"}
      </span>
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;
