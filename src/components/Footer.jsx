import React from "react";
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";

export default function Footer({
  name = "Andreas Bilmar",
  year = 2025,
}) {
  return (
    <footer className="mt-16 border-t border-slate-200/70 dark:border-slate-800/60 bg-white/60 dark:bg-slate-950/40 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-sm text-slate-600 dark:text-slate-300"
        >
          © {year} <span className="font-semibold text-slate-900 dark:text-white">{name}</span>. All rights reserved.
        </motion.div>

        {/* Center */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2"
        >
          Crafted with{" "}
          <motion.span
            aria-label="love"
            title="love"
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-pink-500 inline-flex"
          >
            <FiHeart />
          </motion.span>{" "}
          {year} by <span className="font-semibold text-slate-900 dark:text-white">{name}</span>
        </motion.div>

        {/* Right (quick links) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="flex items-center gap-4 text-sm"
        >
          <a
            href="#home"
            className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
