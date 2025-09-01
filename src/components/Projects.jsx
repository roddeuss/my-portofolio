import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce",
    description: "A scalable online store with payment integration and modern UI/UX.",
    link: "#",
  },
  {
    title: "HRIS",
    description: "Human Resource Information System for employee management and payroll.",
    link: "#",
  },
  {
    title: "POS",
    description: "Point of Sale system with inventory tracking and sales reporting.",
    link: "#",
  },
  {
    title: "Dealer Management System",
    description: "Solution for automotive dealers to manage sales, stock, and customer records.",
    link: "#",
  },
  {
    title: "Transport Management System",
    description: "Application for managing logistics, fleet, and delivery tracking.",
    link: "#",
  },
  {
    title: "Web Monitoring System",
    description: "Real-time monitoring dashboard for system status and analytics.",
    link: "#",
  },
  {
    title: "Odoo Project Module",
    description: "Customized Odoo ERP module for project and task management.",
    link: "#",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.02] transition transform duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
              </div>
              <a
                href={project.link}
                className="inline-block text-sm font-medium text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
