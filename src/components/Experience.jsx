import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  },
};

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

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-gray-900 dark:text-white"
          >
            My Journey
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-2 text-gray-600 dark:text-slate-300"
          >
            A timeline of my professional experiences and growth.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-gray-300 dark:border-slate-700">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-12 ml-6"
            >
              {/* Timeline dot */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full ring-8 ring-white dark:ring-slate-900"></span>

              {/* Card */}
              <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-600">
                      {exp.company}
                    </h3>
                    <p className="text-gray-700 dark:text-slate-200">
                      {exp.title} — {exp.location}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-slate-400 mt-2 md:mt-0">
                    {exp.date}
                  </span>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-slate-300 space-y-1">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
