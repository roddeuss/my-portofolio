import React from "react";
import { motion } from "framer-motion";

const technologies = [
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "CodeIgniter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" },
  { name: "Odoo", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "VSCode", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-indigo-50 dark:from-slate-900 dark:to-slate-800 py-20"
    >
      <div className="container max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Technologies & Tools
        </h2>
        <p className="text-gray-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
          All the technologies, frameworks, databases, and tools I use to build scalable applications and ERP solutions.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.15, rotateY: 10, rotateX: 10, boxShadow: "0px 8px 25px rgba(99,102,241,0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="bg-white/90 dark:bg-slate-800/80 rounded-2xl shadow-lg p-6 w-28 h-28 flex flex-col justify-center items-center backdrop-blur-sm border border-indigo-200 hover:border-indigo-500 cursor-pointer"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-12 h-12 object-contain mb-2"
              />
              <span className="text-xs font-semibold text-gray-700 dark:text-slate-200 text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
