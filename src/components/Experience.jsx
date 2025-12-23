import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiBriefcase, FiCalendar } from "react-icons/fi";

const experiences = [
  {
    company: "Ingco Indonesia",
    location: "Medan, Indonesia",
    title: "Software Engineer",
    date: "Oct 2024 – Present",
    tasks: [
      "Maintain and develop features for E-Commerce platforms",
      "Maintain and develop features for HRIS systems",
      "Maintain and develop features for Point of Sales systems",
    ],
  },
  {
    company: "Digisoft Technology Consulting",
    location: "Medan, Indonesia",
    title: "Software Engineer",
    date: "Apr 2023 – Oct 2024",
    tasks: [
      "Created and maintained Desktop Applications",
      "Developed and maintained Web Applications",
      "Built and maintained Odoo ERP Applications",
    ],
  },
  {
    company: "Global Investa Capital",
    location: "Medan, Indonesia",
    title: "Backend Engineer",
    date: "Oct 2022 – Mar 2023",
    tasks: [
      "Developed API Marketplace for NFT",
      "Created API for NFT Profile management",
      "Created API for NFT Collectible Marketplace",
    ],
  },
];

// ---- motion variants ----
const sectionStagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.65, ease: "easeOut" } },
};

const cardIn = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

function cn(...s) {
  return s.filter(Boolean).join(" ");
}

function Badge({ icon: Icon, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2",
        "text-xs font-semibold px-3 py-1 rounded-full",
        "bg-white/70 dark:bg-slate-900/40 backdrop-blur",
        "border border-slate-200/70 dark:border-slate-700/70",
        "text-slate-700 dark:text-slate-200"
      )}
    >
      <Icon className="text-indigo-600 dark:text-indigo-300" />
      {children}
    </span>
  );
}

function TimelineDot() {
  return (
    <div className="relative flex items-center justify-center">
      {/* ping ring */}
      <motion.span
        aria-hidden="true"
        className="absolute h-10 w-10 rounded-full bg-indigo-500/15"
        animate={{ scale: [0.95, 1.15, 0.95], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* solid dot */}
      <span className="h-4 w-4 rounded-full bg-indigo-600 shadow-[0_0_0_6px_rgba(99,102,241,0.15)]" />
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative py-20
        bg-slate-50 dark:bg-slate-900
        overflow-hidden
      "
    >
      {/* Subtle background */}
      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.08] dark:opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.18) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-25 bg-indigo-400/60" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full blur-3xl opacity-20 bg-pink-400/60" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="text-center mb-14"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Experience
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            A timeline of my professional journey — building ERP systems, web apps,
            and backend services.
          </motion.p>
        </motion.div>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Base line (mobile: left, desktop: center) */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 md:-translate-x-1/2 w-px bg-slate-200 dark:bg-slate-700" />

          {/* Glow line overlay */}
          <motion.div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-4 md:left-1/2 md:-translate-x-1/2 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(99,102,241,0.0), rgba(99,102,241,0.7), rgba(236,72,153,0.65), rgba(99,102,241,0.0))",
              opacity: 0.65,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.65 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          />

          {/* Items */}
          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0; // desktop alternating
              return (
                <motion.div
                  key={index}
                  variants={cardIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  className={cn(
                    "relative grid items-start gap-6",
                    "md:grid-cols-2"
                  )}
                >
                  {/* Left/Right spacer to alternate on desktop */}
                  <div className={cn("hidden md:block", isLeft ? "order-1" : "order-2")} />

                  {/* Card column */}
                  <div className={cn(isLeft ? "md:order-2" : "md:order-1")}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      className="
                        relative ml-14 md:ml-0
                        rounded-3xl p-6
                        bg-white/75 dark:bg-slate-800/60
                        border border-slate-200/70 dark:border-slate-700/60
                        shadow-md hover:shadow-2xl
                        backdrop-blur
                      "
                    >
                      {/* small top accent */}
                      <div className="absolute inset-x-6 -top-1 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 opacity-80" />

                      {/* Header */}
                      <div className="flex flex-col gap-3">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {exp.company}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            {exp.title}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Badge icon={FiMapPin}>{exp.location}</Badge>
                          <Badge icon={FiCalendar}>{exp.date}</Badge>
                          <Badge icon={FiBriefcase}>Role</Badge>
                        </div>
                      </div>

                      {/* Tasks */}
                      <ul className="mt-5 space-y-2">
                        {exp.tasks.map((task, i) => (
                          <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300">
                            <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500/80 shrink-0" />
                            <span className="text-sm leading-relaxed">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Dot (mobile: left line, desktop: center) */}
                  <div
                    className={cn(
                      "absolute left-4 top-6 -translate-x-1/2",
                      "md:left-1/2 md:-translate-x-1/2"
                    )}
                  >
                    <TimelineDot />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
