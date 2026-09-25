"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const technologies = ["Next.js", "TypeScript", "Prisma", "PostgreSQL"];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-zinc-900 px-6 py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-600">
              03 / Experience & Education
            </p>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
              Building through education, projects, and practice.
            </h2>

            <div className="mt-16">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: 0.05,
                  ease: "easeOut",
                }}
                className="group grid gap-6 border-t border-zinc-800 py-8 transition-colors duration-300 hover:border-zinc-700 sm:grid-cols-[0.35fr_1fr]"
              >
                <div>
                  <p className="font-mono text-xs text-zinc-600 transition-colors duration-300 group-hover:text-zinc-400">
                    2021 — 2026
                  </p>
                </div>

                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-medium tracking-tight text-zinc-100">
                        University of Uyo
                      </h3>

                      <p className="mt-2 text-sm text-zinc-500">
                        B.Eng. Computer Engineering
                      </p>
                    </div>

                    <span className="hidden font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-700 sm:block">
                      Education
                    </span>
                  </div>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-500">
                    Completed my degree with a foundation across software
                    engineering, computer systems, algorithms, embedded
                    systems, and intelligent computing.
                  </p>
                </div>
              </motion.div>

              {/* Software Development */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: "easeOut",
                }}
                className="group grid gap-6 border-t border-zinc-800 py-8 transition-colors duration-300 hover:border-zinc-700 sm:grid-cols-[0.35fr_1fr]"
              >
                <div>
                  <p className="font-mono text-xs text-zinc-600 transition-colors duration-300 group-hover:text-zinc-400">
                    2024 — Present
                  </p>
                </div>

                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-medium tracking-tight text-zinc-100">
                        Software Development
                      </h3>

                      <p className="mt-2 text-sm text-zinc-500">
                        Independent / Project-Based
                      </p>
                    </div>

                    <span className="hidden font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-700 sm:block">
                      Practice
                    </span>
                  </div>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-500">
                    Building full-stack applications while developing
                    practical experience with modern web technologies,
                    databases, APIs, authentication, and deployment
                    workflows.
                  </p>
                </div>
              </motion.div>

              {/* NexusCart */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                  ease: "easeOut",
                }}
                className="group grid gap-6 border-y border-zinc-800 py-8 transition-colors duration-300 hover:border-zinc-700 sm:grid-cols-[0.35fr_1fr]"
              >
                <div>
                  <p className="font-mono text-xs text-zinc-600 transition-colors duration-300 group-hover:text-zinc-400">
                    2026 — Present
                  </p>
                </div>

                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-medium tracking-tight text-zinc-100">
                        NexusCart
                      </h3>

                      <p className="mt-2 text-sm text-zinc-500">
                        Founder / Developer
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="mt-1 shrink-0 text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-zinc-300"
                    />
                  </div>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-500">
                    Building a marketplace that connects users with local
                    service providers while helping users discover products
                    based on their needs and budget.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-800 px-3 py-1.5 font-mono text-[10px] text-zinc-500 transition-all duration-300 group-hover:border-zinc-700 group-hover:text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}