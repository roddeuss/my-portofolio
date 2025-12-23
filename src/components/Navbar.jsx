import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const menuVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18 } },
  exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.16 } },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  const ids = useMemo(
    () => navItems.map((x) => x.href.replace("#", "")),
    []
  );

  // close menu when resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // shadow / blur effect when scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // active section observer
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // pick the most visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    sections.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  const onNavClick = (href) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all",
        scrolled
          ? "bg-white/75 dark:bg-slate-950/55 backdrop-blur border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={() => onNavClick("#home")}
          className="flex items-center gap-2 font-extrabold text-slate-900 dark:text-white"
          aria-label="Go to home"
        >
          <span className="h-9 w-9 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 grid place-items-center shadow-md">
            <span className="text-white text-sm">A</span>
          </span>
          <span className="tracking-tight">
            Andreas<span className="text-indigo-600 dark:text-indigo-400">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => onNavClick(item.href)}
                    className={[
                      "relative px-3 py-2 rounded-xl text-sm font-semibold transition",
                      "text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white",
                      isActive
                        ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-200"
                        : "hover:bg-slate-100/70 dark:hover:bg-slate-800/50",
                    ].join(" ")}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute left-3 right-3 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-indigo-500 to-pink-500" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <ThemeToggle />
        </div>

        {/* Mobile Right */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={() => setOpen((v) => !v)}
            className="
              h-10 w-10 rounded-xl
              bg-white/70 dark:bg-slate-950/40
              border border-slate-200/70 dark:border-slate-800/60
              shadow-sm hover:shadow-md transition active:scale-95
              grid place-items-center
            "
            aria-label="Toggle menu"
          >
            {open ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="md:hidden px-6 pb-4"
          >
            <div
              className="
                rounded-2xl overflow-hidden
                bg-white/80 dark:bg-slate-950/60 backdrop-blur
                border border-slate-200/70 dark:border-slate-800/60
                shadow-lg
              "
            >
              <ul className="flex flex-col">
                {navItems.map((item) => {
                  const isActive = active === item.href;
                  return (
                    <li key={item.href} className="border-b border-slate-200/60 dark:border-slate-800/60 last:border-b-0">
                      <a
                        href={item.href}
                        onClick={() => onNavClick(item.href)}
                        className={[
                          "flex items-center justify-between px-4 py-3 text-sm font-semibold transition",
                          "text-slate-700 dark:text-slate-200",
                          isActive
                            ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-200"
                            : "hover:bg-slate-100/70 dark:hover:bg-slate-800/40",
                        ].join(" ")}
                      >
                        {item.label}
                        <span className="text-slate-400">↗</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
