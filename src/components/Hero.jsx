/*
Hero Section — Updated for Andreas
Highlights Fullstack Engineer, Backend Engineer, and Odoo ERP expertise.
Shows skills in JavaScript, C#, PHP, Python.
*/

import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  },
};

export default function Hero({
  name = "Andreas Bilmar Harteveld Girsang",
  title = "Software Engineer | Odoo ERP Developer",
  experience = "over 3 years",
  bio = "I specialize in building scalable applications and ERP solutions. My expertise spans Fullstack and Backend development with a strong focus on Odoo ERP customization and integration. I leverage modern technologies and multiple programming languages to deliver robust, business-driven solutions.",
  image = "/profile.jpg", // put your profile.jpg in /public
}) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-indigo-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"
    >
      <div className="container max-w-6xl mx-auto px-6 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Left: Text content */}
          <motion.div variants={fadeUp} className="space-y-6">
            <p className="inline-flex items-center gap-3 text-sm rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 px-3 py-1 font-medium w-fit">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M12 2v4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M20 12h-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 20v-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4 12h4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              Available for hire
            </p>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Hi — I&apos;m{" "}
              <span className="text-indigo-600">{name}</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl">
              A{" "}
              <span className="font-semibold text-indigo-600">
                {title}
              </span>{" "}
              with {experience} of professional experience. {bio}
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-800 transition"
              >
                View projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-indigo-200 hover:border-indigo-300 text-indigo-700 dark:text-indigo-300 px-4 py-3 rounded-lg bg-white dark:bg-slate-800 shadow-sm"
              >
                Contact me
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-5 py-3 rounded-lg shadow-md transition"
                >
                Download Resume
            </a>

            </div>

            {/* Skill chips */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-4">
              {[
                "JavaScript",
                "C#",
                "PHP",
                "Python",
              ].map((s) => (
                <span
                  key={s}
                  className="text-sm bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 px-3 py-1 rounded-full text-gray-700 dark:text-slate-200 shadow-sm"
                >
                  {s}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile image + decorative card */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center"
            aria-hidden
          >
            <div className="relative">
              <div className="absolute -inset-1 blur-xl rounded-2xl bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300 opacity-30 dark:opacity-20" />

              <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-2xl">
                <img
                  src={image}
                  alt={`Profile of ${name}`}
                  className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full ring-4 ring-white dark:ring-slate-900 shadow-lg"
                />

                <div className="mt-4 text-center">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-slate-300">
                    {title} • {experience}
                  </div>
                </div>
              </div>

              {/* floating card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden md:flex absolute -bottom-6 right-0 transform translate-x-8 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-xl px-4 py-3 items-center gap-3 shadow-md"
              >
                <svg
                  className="w-6 h-6 text-indigo-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 2v6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M20 12h-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <div className="text-sm text-gray-700 dark:text-slate-200">
                  Open to freelance & full-time
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
