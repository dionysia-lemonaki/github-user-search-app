import { useState, useEffect } from "react";
import iconMoon from "../assets/images/icon-moon.svg";
import iconSun from "../assets/images/icon-sun.svg";

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
    <div>
      <p>{theme === "dark" ? "light" : "dark"}</p>
      <button onClick={toggleTheme}>
        <img src={theme === "dark" ? iconSun : iconMoon} alt="" />
      </button>
    </div>
  );
};

export default ThemeToggle;
