"use client";

import { motion } from "motion/react";

const interests = [
  "Full-stack development",
  "Algorithms",
  "Embedded systems",
  "Cloud technologies",
];

export default function About() {
  return (
    <section
      id="about"
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
              01 / About
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
              I&apos;m a Computer Engineer who enjoys turning ideas into useful
              software.
            </h2>

            <div className="mt-10 grid gap-8 border-t border-zinc-900 pt-8 sm:grid-cols-2">
              <p className="text-sm leading-7 text-zinc-500">
                I&apos;m Edikan Gabriel Inyang, a Computer Engineer and
                Software Developer focused on building practical digital
                products that solve real problems.
              </p>

              <p className="text-sm leading-7 text-zinc-500">
                My approach combines engineering fundamentals with modern
                software development, from designing interfaces and APIs to
                working with databases and deployment workflows.
              </p>
            </div>

            {/* Interests */}
            <div className="mt-16">
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Areas I&apos;m interested in
              </p>

              <div className="grid border-t border-zinc-900 sm:grid-cols-2">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    className="group flex items-center justify-between border-b border-zinc-900 py-5 sm:px-4 first:sm:pl-0"
                  >
                    <span className="text-sm text-zinc-400 transition-colors duration-300 group-hover:text-zinc-100">
                      {interest}
                    </span>

                    <span className="font-mono text-[10px] text-zinc-700 transition-colors duration-300 group-hover:text-zinc-400">
                      0{index + 1}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* NexusCart note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 sm:p-8"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Currently building
              </p>

              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-zinc-100">
                    NexusCart
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
                    A marketplace connecting people with local service
                    providers and helping users discover products based on
                    their needs and budget.
                  </p>
                </div>

                <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">
                  2026
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}