import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-slate-900 text-center"
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Me
          </h2>
          <p className="text-gray-600 dark:text-slate-300 mb-12">
            Feel free to reach out for collaborations, freelance projects, or just
            to connect!
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          {/* Email */}
          <motion.a
            variants={fadeUp}
            href="mailto:andreasbilmar99@gmail.com"
            className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <Mail className="w-5 h-5 text-indigo-600" />
            <span className="text-gray-700 dark:text-slate-200">
              andreasbilmar99@gmail.com
            </span>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            variants={fadeUp}
            href="https://wa.me/6281370925582"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <Phone className="w-5 h-5 text-green-600" />
            <span className="text-gray-700 dark:text-slate-200">
              +62 813 7092 5582
            </span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 flex justify-center flex-wrap gap-6"
        >
          <motion.a
            variants={fadeUp}
            href="https://linkedin.com/in/andreasbimar"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-slate-200 hover:text-indigo-600 transition"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </motion.a>

          <motion.a
            variants={fadeUp}
            href="https://github.com/roddeus"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-slate-200 hover:text-indigo-600 transition"
          >
            <Github className="w-5 h-5" />
            GitHub
          </motion.a>

          <motion.a
            variants={fadeUp}
            href="https://instagram.com/andreasbilmar"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-slate-200 hover:text-indigo-600 transition"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
