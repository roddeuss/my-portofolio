import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStore,
  FaUsers,
  FaCashRegister,
  FaCar,
  FaTruck,
  FaChartBar,
  FaWarehouse,
  FaProjectDiagram,
} from "react-icons/fa";
import { FiArrowUpRight, FiLock, FiX } from "react-icons/fi";

/* ------------------ Data ------------------ */
/**
 * image: taruh file di /public/projects/...
 * link: gunakan "#" untuk private
 */
const projects = [
  {
    title: "E-Commerce",
    description: "A scalable online store with payment integration and modern UI/UX.",
    link: "https://ingco.co.id",
    icon: <FaStore />,
    tech: ["PHP", "CodeIgniter", "MySQL", "SQL Server"],
    type: "Company Project (Ingco Teknika Indonesia)",
    image: "/projects/ecommerce.jpg",
  },
  {
    title: "HRIS",
    description: "Human Resource Information System for employee management and payroll.",
    link: "#",
    icon: <FaUsers />,
    tech: ["PHP", "Laravel", "SQL Server"],
    type: "Company Project (Ingco Teknika Indonesia)",
    image: "/projects/hris.jpg",
  },
  {
    title: "POS",
    description: "Point of Sale system with inventory tracking and sales reporting.",
    link: "#",
    icon: <FaCashRegister />,
    tech: ["PHP", "Laravel", "SQL Server"],
    type: "Company Project (Ingco Teknika Indonesia)",
    image: "/projects/pos.jpg",
  },
  {
    title: "Dealer Management System",
    description: "Solution for automotive dealers to manage sales, stock, and customer records.",
    link: "#",
    icon: <FaCar />,
    tech: ["C#", "WinForms", "SQL Server"],
    type: "Company Project (Digisoft)",
    image: "/projects/dms.jpg",
  },
  {
    title: "Transport Management System",
    description: "Application for managing logistics, fleet, and delivery tracking.",
    link: "#",
    icon: <FaTruck />,
    tech: ["C#", ".NET", "PostgreSQL", "ReactJS"],
    type: "Company Project (Digisoft)",
    image: "/projects/tms.jpg",
  },
  {
    title: "Web Monitoring System",
    description: "Real-time monitoring dashboard for system status and analytics.",
    link: "#",
    icon: <FaChartBar />,
    tech: ["C#", ".NET", "PostgreSQL", "MongoDB"],
    type: "Company Project (Digisoft)",
    image: "/projects/monitoring.jpg",
  },
  {
    title: "Warehouse Management System",
    description: "Warehouse operations management for inventory and logistics.",
    link: "#",
    icon: <FaWarehouse />,
    tech: ["C#", ".NET", "PostgreSQL"],
    type: "Company Project (Digisoft)",
    image: "/projects/wms.jpg",
  },
  {
    title: "Odoo Project Module",
    description: "Customized Odoo ERP module for project and task management.",
    link: "#",
    icon: <FaProjectDiagram />,
    tech: ["Python", "PostgreSQL"],
    type: "Company Project (Digisoft)",
    image: "/projects/odoo-project.jpg",
  },
];

/* ------------------ Motion Variants ------------------ */
const grid = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.10, delayChildren: 0.08 },
  },
};

const card = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
};

const modalBackdrop = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalPanel = {
  hidden: { opacity: 0, scale: 0.92, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } },
  exit: { opacity: 0, scale: 0.92, y: 10, transition: { duration: 0.18 } },
};

/* ------------------ Helpers ------------------ */
function cn(...s) {
  return s.filter(Boolean).join(" ");
}

function TechPill({ children }) {
  return (
    <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
      {children}
    </span>
  );
}

function ProjectCard({ project, onClick }) {
  const isPrivate = project.link === "#";

  return (
    <motion.article
      variants={card}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={cn(
        "group rounded-2xl overflow-hidden",
        "bg-white dark:bg-slate-800",
        "border border-slate-200/70 dark:border-slate-700/60",
        "shadow-md hover:shadow-2xl",
        "flex flex-col"
      )}
    >
      {/* Image */}
      <div className="relative">
        <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
            loading="lazy"
          />
        </div>

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-70" />

        {/* shimmer line */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="
              absolute -left-1/2 top-0 h-full w-1/2
              rotate-12 opacity-0 group-hover:opacity-20
              transition-opacity duration-300
            "
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,.9), transparent)",
              transform: "translateX(-30%)",
              animation: "none",
            }}
          />
        </div>

        {/* top badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/85 dark:bg-slate-900/70 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-900 dark:text-white border border-white/20 dark:border-slate-700/50">
            <span className="text-indigo-600">{project.icon}</span>
            {project.title}
          </span>

          {isPrivate && (
            <span className="inline-flex items-center gap-1 rounded-full bg-black/55 text-white px-2 py-1 text-xs font-semibold">
              <FiLock /> Private
            </span>
          )}
        </div>

        {/* bottom type */}
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-xs text-white/90">
            {project.type}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t, i) => (
            <TechPill key={i}>{t}</TechPill>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => onClick(project)}
          className={cn(
            "mt-auto inline-flex items-center gap-2 w-fit",
            "text-sm font-semibold px-4 py-2 rounded-xl",
            isPrivate
              ? "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              : "bg-indigo-600 text-white hover:bg-indigo-700",
            "transition"
          )}
          aria-label={`View project ${project.title}`}
        >
          View Project <FiArrowUpRight />
        </button>
      </div>
    </motion.article>
  );
}

/* ------------------ Component ------------------ */
export default function Projects() {
  const [modal, setModal] = useState({ open: false, project: null });

  const sortedProjects = useMemo(() => projects, []);

  const handleCardClick = (project) => {
    if (project.link === "#") {
      setModal({ open: true, project });
      return;
    }
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  const closeModal = () => setModal({ open: false, project: null });

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Projects
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A selection of products, internal systems, and ERP-related projects I’ve built and contributed to.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={handleCardClick}
            />
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal.open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-6"
            variants={modalBackdrop}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={closeModal}
          >
            <motion.div
              variants={modalPanel}
              initial="hidden"
              animate="show"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-2xl bg-white dark:bg-slate-800 shadow-2xl border border-slate-200/70 dark:border-slate-700/60 overflow-hidden"
            >
              {/* modal header image */}
              <div className="relative">
                <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-900 overflow-hidden">
                  <img
                    src={modal.project?.image}
                    alt={`${modal.project?.title} preview`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/85 dark:bg-slate-900/70 backdrop-blur border border-white/20 dark:border-slate-700/50 text-slate-900 dark:text-white hover:scale-105 transition"
                  aria-label="Close modal"
                >
                  <FiX />
                </button>

                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/85 dark:bg-slate-900/70 backdrop-blur px-3 py-1 text-sm font-bold text-slate-900 dark:text-white border border-white/20 dark:border-slate-700/50">
                    <span className="text-indigo-600">{modal.project?.icon}</span>
                    {modal.project?.title}
                  </span>

                  <span className="inline-flex items-center gap-1 rounded-full bg-black/55 text-white px-2 py-1 text-xs font-semibold">
                    <FiLock /> Private
                  </span>
                </div>
              </div>

              {/* modal body */}
              <div className="p-6">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {modal.project?.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {modal.project?.tech?.map((t, i) => (
                    <TechPill key={i}>{t}</TechPill>
                  ))}
                </div>

                <div className="mt-5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-700/60 p-4">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    Private Project 🔒
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    This project is for internal use only. If you want to see more details,
                    feel free to contact me.
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="#contact"
                      onClick={closeModal}
                      className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
                    >
                      Contact me
                      <FiArrowUpRight />
                    </a>
                    <button
                      onClick={closeModal}
                      className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Local keyframes (shimmer optional) */}
      <style>{`
        /* (Optional) If you want shimmer animate: add animation in ProjectCard */
      `}</style>
    </section>
  );
}
