import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiDotnet,
  SiPhp,
  SiPython,
  SiNextui,
  SiLaravel,
} from "react-icons/si";
import { FiArrowUpRight, FiDownload, FiMail } from "react-icons/fi";

// ---------------- Variants ----------------
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.10, delayChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const float = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

// ---------------- Data ----------------
const coreSkills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: ".NET", icon: SiDotnet },
  { name: "PHP", icon: SiPhp },
  { name: "Python", icon: SiPython },
];

export default function Hero({
  name = "Andreas Bilmar Harteveld Girsang",
  title = "Software Engineer | ERP Developer",
  experience = "3+ years",
  bio =
    "I build scalable web applications and ERP solutions—specialized in Odoo customization, system integration, and reliable backend services for real business workflows.",
  image = "/profile.jpg",
}) {
  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="
        relative overflow-hidden
        min-h-screen flex items-center justify-center
        bg-gradient-to-b from-indigo-50 via-white to-indigo-50
        dark:from-slate-950 dark:via-slate-950 dark:to-slate-900
        px-6 py-12 md:py-20
      "
    >
      {/* ---------- Animated Background ---------- */}
      <div aria-hidden="true" className="absolute inset-0">
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.08] dark:opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.18) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />

        {/* blobs */}
        <motion.div
          className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(99,102,241,.85), transparent 60%)",
          }}
          animate={{ x: [0, 20, 0], y: [0, 14, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, rgba(236,72,153,.75), transparent 60%)",
          }}
          animate={{ x: [0, -18, 0], y: [0, -12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative container max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* ================= LEFT ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="space-y-6 order-2 md:order-1"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="
              inline-flex items-center gap-2 text-sm rounded-full
              bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-200
              px-3 py-1 font-medium w-fit shadow-sm border border-indigo-200/70 dark:border-indigo-400/20
            "
          >
            🚀 Available for hire
            <span className="text-indigo-500/70 dark:text-indigo-200/60">•</span>
            {experience}
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white"
          >
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
              {name}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-xl"
          >
            <span className="font-semibold text-indigo-700 dark:text-indigo-300">
              {title}
            </span>{" "}
            — {bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
            <a
              href="#projects"
              className="
                inline-flex items-center gap-2
                bg-indigo-600 hover:bg-indigo-700 text-white
                px-5 py-3 rounded-xl shadow-lg
                transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
              "
              aria-label="View my projects"
            >
              View projects <FiArrowUpRight />
            </a>

            <a
              href="#contact"
              className="
                inline-flex items-center gap-2
                bg-white/60 dark:bg-slate-900/30
                border border-indigo-200/80 dark:border-indigo-400/20
                text-indigo-700 dark:text-indigo-300
                px-5 py-3 rounded-xl shadow-sm
                transition-all duration-300 hover:shadow-md hover:bg-indigo-50 dark:hover:bg-indigo-500/10
              "
              aria-label="Contact me"
            >
              Contact <FiMail />
            </a>

            <a
              href="/resume.pdf"
              download
              className="
                inline-flex items-center gap-2
                bg-white/60 dark:bg-slate-900/30
                border border-indigo-300/80 dark:border-indigo-400/30
                text-indigo-600
                px-5 py-3 rounded-xl shadow-sm
                transition-all duration-300 hover:shadow-md hover:bg-indigo-600 hover:text-white
              "
              aria-label="Download my resume"
            >
              Resume <FiDownload />
            </a>
          </motion.div>

          {/* Core Skills chips */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-2 pt-2"
            aria-label="Core skills"
          >
            {coreSkills.map(({ name: sName, icon: Icon }) => (
              <motion.span
                key={sName}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="
                  inline-flex items-center gap-2
                  px-3 py-2 rounded-full text-sm font-semibold
                  bg-white/70 dark:bg-slate-900/30
                  border border-slate-200/70 dark:border-slate-800/70
                  text-slate-700 dark:text-slate-200
                  shadow-sm backdrop-blur
                "
                title={sName}
              >
                <span className="text-indigo-600 dark:text-indigo-300">
                  <Icon />
                </span>
                {sName}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="flex justify-center relative mt-10 md:mt-0 order-1 md:order-2"
        >
          <motion.div
            whileHover={{ scale: 1.03, rotate: -1 }}
            transition={{ type: "spring", stiffness: 200, damping: 16 }}
            className="
              relative w-full max-w-sm
              rounded-3xl p-6
              bg-white/75 dark:bg-slate-900/45
              shadow-2xl backdrop-blur
              border border-white/30 dark:border-slate-800/60
            "
            role="img"
            aria-label={`Profile card of ${name}`}
          >
            {/* glow */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300 blur-2xl opacity-25 animate-pulse" />

            {/* image */}
            <div className="relative">
              <img
                src={image}
                alt={`Profile of ${name}`}
                width={240}
                height={240}
                className="
                  w-44 h-44 md:w-52 md:h-52
                  object-cover rounded-full
                  ring-4 ring-white dark:ring-slate-950
                  shadow-lg mx-auto
                "
                loading="eager"
                decoding="async"
              />

              {/* floating ring */}
              <motion.div
                aria-hidden="true"
                className="absolute -inset-3 rounded-full border border-indigo-300/40 dark:border-indigo-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* text */}
            <div className="mt-5 text-center">
              <div className="text-xl font-bold text-slate-900 dark:text-white">
                {name}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                {title} • {experience}
              </div>
            </div>

            {/* quick info */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 px-3 py-2">
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Core
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  ERP + Backend
                </div>
              </div>
              <div className="rounded-2xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 px-3 py-2">
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Databases
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  SQL • Postgre
                </div>
              </div>
            </div>
          </motion.div>

          {/* floating badge desktop */}
          <motion.div
            variants={float}
            animate="animate"
            className="
              hidden md:flex absolute -bottom-6 right-0 translate-x-10
              bg-white/80 dark:bg-slate-800/70 backdrop-blur
              border border-slate-200/60 dark:border-slate-700/60
              rounded-2xl px-4 py-2 items-center gap-2
              shadow-lg
            "
            aria-label="Availability status"
          >
            <span className="text-indigo-600 text-lg">💼</span>
            <div className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Open to freelance & full-time
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
