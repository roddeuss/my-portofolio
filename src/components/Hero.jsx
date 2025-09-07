import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiDotnet,
  SiPhp,
  SiPython,
} from "react-icons/si";

// Variants shared
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Skill icon mapping
const skills = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "C#", icon: <SiDotnet /> }, // ✅ pakai SiDotnet sebagai ganti
  { name: "PHP", icon: <SiPhp /> },
  { name: "Python", icon: <SiPython /> },
];

export default function Hero({
  name = "Andreas Bilmar Harteveld Girsang",
  title = "Software Engineer | Odoo ERP Developer",
  experience = "over 3 years",
  bio = "I specialize in building scalable applications and ERP solutions. My expertise spans Fullstack and Backend development with a strong focus on Odoo ERP customization and integration.",
  image = "/profile.jpg",
}) {
  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 px-6 py-12 md:py-20"
    >
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          <div
            role="status"
            className="inline-flex items-center gap-2 text-sm rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 px-3 py-1 font-medium w-fit shadow-sm"
          >
            🚀 Available for hire
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
              {name}
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-slate-300 max-w-xl">
            A <span className="font-semibold text-indigo-600">{title}</span> with{" "}
            {experience} of professional experience. {bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              aria-label="View my projects"
            >
              View projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-indigo-300 hover:bg-indigo-50 text-indigo-700 dark:text-indigo-300 px-4 py-3 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
              aria-label="Contact me"
            >
              Contact me
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-5 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
              aria-label="Download my resume"
            >
              Download Resume
            </a>
          </div>

          {/* Skills — ICON ONLY */}
          <motion.div
            className="flex flex-wrap gap-3 mt-6"
            aria-label="Technologies I work with"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill.name}
                className="flex items-center justify-center w-12 h-12 bg-white/70 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-full text-gray-700 dark:text-slate-200 shadow-sm backdrop-blur-sm hover:scale-110 transition-transform duration-200 cursor-pointer"
                title={skill.name}
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
              >
                <span className="text-xl">{skill.icon}</span>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center relative mt-10 md:mt-0"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative rounded-2xl p-6 bg-white/80 dark:bg-slate-900/80 shadow-2xl backdrop-blur-md border border-white/20 dark:border-slate-800/50"
            role="img"
            aria-label={`Profile picture of ${name}`}
          >
            {/* Gradient glow effect */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300 blur-xl opacity-30 animate-pulse" />

            <img
              src={image}
              alt={`Profile of ${name}`}
              width={208}
              height={208}
              className="w-44 h-44 md:w-52 md:h-52 object-cover rounded-full ring-4 ring-white dark:ring-slate-900 shadow-lg mx-auto"
              loading="eager"
              decoding="async"
            />

            <div className="mt-4 text-center">
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {name}
              </div>
              <div className="text-sm text-gray-600 dark:text-slate-300">
                {title} • {experience}
              </div>
            </div>
          </motion.div>

          {/* Floating badge — only on desktop */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden md:flex absolute -bottom-6 right-0 transform translate-x-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-gray-100 dark:border-slate-700 rounded-xl px-4 py-2 items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Availability status"
          >
            <span
              role="img"
              aria-label="briefcase"
              className="text-indigo-600 text-lg"
            >
              💼
            </span>
            <div className="text-sm font-medium text-gray-700 dark:text-slate-200">
              Open to freelance & full-time
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
