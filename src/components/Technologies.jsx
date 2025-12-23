import React from "react";
import { motion } from "framer-motion";

const CATEGORIES = [
  {
    title: "Programming Languages",
    items: [
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      // Frontend
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TailwindCSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },

      // Backend (Node.js)
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "NestJS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
      },

      // Backend (PHP)
      {
        name: "Laravel",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      },
      {
        name: "CodeIgniter",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
      },

      // Backend (Microsoft)
      {
        name: ".NET",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-plain.svg",
      },

      // ERP / Platform
      {
        name: "Odoo",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    title: "Apps & Tools",
    items: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "VSCode", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    ],
  },
];

function TechCard({ tech }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="
        group flex items-center gap-3
        rounded-2xl border border-slate-200/70 dark:border-slate-700/70
        bg-white/70 dark:bg-slate-900/40
        px-4 py-3
        shadow-sm hover:shadow-md
        backdrop-blur
        cursor-default select-none
      "
    >
      <div
        className="
          flex h-10 w-10 items-center justify-center
          rounded-xl bg-slate-50 dark:bg-slate-800/60
          border border-slate-200/60 dark:border-slate-700/60
        "
      >
        <img
          src={tech.logo}
          alt={tech.name}
          className="h-6 w-6 object-contain"
          loading="lazy"
        />
      </div>

      <div className="min-w-0">
        <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">
          {tech.name}
        </div>
        <div className="text-[11px] text-slate-500 dark:text-slate-400">
          Tech stack
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Marquee row: auto scroll horizontal, loop smooth by duplicating items.
 * - `speed`: seconds (lebih kecil = lebih cepat)
 * - `direction`: "left" | "right"
 */
function MarqueeRow({ items, speed = 22, direction = "left" }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      {/* edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent dark:from-slate-900 z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent dark:from-slate-900 z-10" />

      <div
        className={[
          "flex w-max gap-3 py-2",
          "animate-marquee",
          direction === "right" ? "animate-marquee-reverse" : "",
          "will-change-transform",
        ].join(" ")}
        style={{
          ["--marquee-duration"]: `${speed}s`,
        }}
      >
        {doubled.map((tech, idx) => (
          <TechCard key={`${tech.name}-${idx}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="
        relative py-20
        bg-gradient-to-b from-white to-indigo-50
        dark:from-slate-900 dark:to-slate-950
      "
    >
      <div className="container max-w-6xl mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Technologies & Tools
          </h2>
        </div>

        <div className="space-y-8">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="
                rounded-3xl border border-slate-200/70 dark:border-slate-800/70
                bg-white/60 dark:bg-slate-900/30
                p-5 md:p-6
                backdrop-blur
              "
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {cat.title}
                  </h3>
                </div>

                <span
                  className="
                    shrink-0 text-[11px] md:text-xs
                    px-2.5 py-1 rounded-full
                    bg-indigo-100 text-indigo-700
                    dark:bg-indigo-500/10 dark:text-indigo-300
                    border border-indigo-200/70 dark:border-indigo-500/20
                  "
                >
                  {cat.items.length} items
                </span>
              </div>

              <MarqueeRow
                items={cat.items}
                speed={idx % 2 === 0 ? 22 : 26}
                direction={idx % 2 === 0 ? "left" : "right"}
              />

              {/* Mobile helper: biar tetep rapi, spacing cukup, dan mudah dibaca */}
              <div className="mt-3 text-[11px] text-slate-500 dark:text-slate-400 md:hidden">
                Tip: swipe horizontal juga bisa ✨
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for marquee */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee var(--marquee-duration, 22s) linear infinite;
        }
        .animate-marquee-reverse {
          animation-direction: reverse;
        }
        /* Pause on hover biar enak dibaca */
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        /* Prefer-reduced-motion: hormati user yg matiin animasi */
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
