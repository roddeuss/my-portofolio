import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStore, FaUsers, FaCashRegister, FaCar, FaTruck, FaChartBar, FaWarehouse, FaProjectDiagram } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce",
    description: "A scalable online store with payment integration and modern UI/UX.",
    link: "https://ingco.co.id",
    icon: <FaStore />,
    tech: ["PHP", "CodeIgniter", "MySQL", "SQL Server"],
    type: "Company Project (Ingco Teknika Indonesia)",
  },
  {
    title: "HRIS",
    description: "Human Resource Information System for employee management and payroll.",
    link: "#",
    icon: <FaUsers />,
    tech: ["PHP", "Laravel", "SQL Server"],
    type: "Company Project (Ingco Teknika Indonesia)",
  },
  {
    title: "POS",
    description: "Point of Sale system with inventory tracking and sales reporting.",
    link: "#",
    icon: <FaCashRegister />,
    tech: ["PHP", "Laravel", "SQL Server"],
    type: "Company Project (Ingco Teknika Indonesia)",
  },
  {
    title: "Dealer Management System",
    description: "Solution for automotive dealers to manage sales, stock, and customer records.",
    link: "#",
    icon: <FaCar />,
    tech: ["C#", "WinForms", "SQL Server"],
    type: "Company Project (Digisoft)",
  },
  {
    title: "Transport Management System",
    description: "Application for managing logistics, fleet, and delivery tracking.",
    link: "#",
    icon: <FaTruck />,
    tech: ["C#", ".NET", "PostgreSQL", "ReactJS"],
    type: "Company Project (Digisoft)",
  },
  {
    title: "Web Monitoring System",
    description: "Real-time monitoring dashboard for system status and analytics.",
    link: "#",
    icon: <FaChartBar />,
    tech: ["C#", ".NET", "PostgreSQL", "MongoDB"],
    type: "Company Project (Digisoft)",
  },
  {
    title: "Warehouse Management System",
    description: "Warehouse operations management for inventory and logistics.",
    link: "#",
    icon: <FaWarehouse />,
    tech: ["C#", ".NET", "PostgreSQL"],
    type: "Company Project (Digisoft)",
  },
  {
    title: "Odoo Project Module",
    description: "Customized Odoo ERP module for project and task management.",
    link: "#",
    icon: <FaProjectDiagram />,
    tech: ["Python", "PostgreSQL"],
    type: "Company Project (Digisoft)",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (link) => {
    if (link === "#") {
      setShowModal(true);
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

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
                <div className="text-3xl text-indigo-600 mb-3">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
                  {project.type}
                </p>
                <p className="text-gray-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleClick(project.link)}
                className="inline-block text-sm font-medium text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition w-fit"
              >
                View Project
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-xl max-w-sm text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Private Project 🔒
              </h3>
              <p className="text-gray-600 dark:text-slate-300 mb-4">
                Sorry, this project is private and for internal use only.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
