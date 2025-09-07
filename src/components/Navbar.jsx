import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-slate-900 shadow-md z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          MyPortfolio
        </h1>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-gray-700 dark:text-gray-300 font-medium">
            <li><a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</a></li>
            <li><a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400">Experience</a></li>
            <li><a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a></li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
