import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // ambil theme setelah component mount (aman)
  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial = saved || (prefersDark ? "dark" : "light");
    setTheme(initial);
  }, []);

  // apply theme
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  if (!mounted) {
    // hindari flicker/SSR mismatch (meski Vite client-only, ini tetap bikin rapi)
    return (
      <button
        className="h-10 w-10 rounded-full bg-slate-200/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700"
        aria-label="Toggle theme"
      />
    );
  }

  return (
    <button
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      className="
        h-10 w-10 rounded-full
        bg-white/70 dark:bg-slate-900/50
        border border-slate-200/70 dark:border-slate-700/70
        shadow-sm hover:shadow-md
        transition active:scale-95
        grid place-items-center
      "
      aria-label="Toggle Dark/Light Mode"
      title="Toggle theme"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400" />
      ) : (
        <FaMoon className="text-indigo-600" />
      )}
    </button>
  );
}
