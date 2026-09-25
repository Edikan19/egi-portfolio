"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const technologies = ["Next.js", "TypeScript", "Prisma", "PostgreSQL"];

export default function Work() {
  return (
    <section
      id="work"
      className="border-t border-zinc-900 px-6 py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-600">
              02 / Selected Work
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
              Things I&apos;m building.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-zinc-500">
            A selection of projects, experiments, and products I&apos;ve
            built while learning and solving real-world problems.
          </p>
        </motion.div>

        {/* NexusCart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Link
                href="/work/nexuscart"
                className="group relative isolate block overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950 transition-all duration-500 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/30"
            >
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              {/* Project visual */}
              <div className="relative min-h-[420px] overflow-hidden border-b border-zinc-800 bg-[#0c0c0c] lg:border-b-0 lg:border-r">
                {/* Grid */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                  }}
                />

                {/* Glow */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-3xl" />

                {/* Conceptual UI */}
                <div className="pointer-events-none absolute inset-x-8 top-10 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl transition-transform duration-700 group-hover:-translate-y-3 sm:inset-x-12">
                  <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
                    <span className="font-mono text-xs font-semibold text-zinc-300">
                      NexusCart
                    </span>

                    <span className="text-[10px] text-zinc-600">
                      Marketplace
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                      Find what you need
                    </p>

                    <div className="mt-4 h-10 rounded-full border border-zinc-800 bg-zinc-900" />

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="h-24 rounded-xl border border-zinc-800 bg-zinc-900 p-4">
                        <div className="h-2 w-20 rounded-full bg-zinc-800" />
                        <div className="mt-3 h-2 w-28 rounded-full bg-zinc-900" />
                      </div>

                      <div className="h-24 rounded-xl border border-zinc-800 bg-zinc-900 p-4">
                        <div className="h-2 w-20 rounded-full bg-zinc-800" />
                        <div className="mt-3 h-2 w-24 rounded-full bg-zinc-900" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Label */}
                <div className="pointer-events-none absolute bottom-8 left-8 sm:left-12">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                    Project 01
                  </p>
                </div>
              </div>

              {/* Project information */}
              <div className="flex flex-col justify-between p-8 lg:p-12">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-zinc-800 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                      In Development
                    </span>

                    <ArrowUpRight
                      size={20}
                      className="text-zinc-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>

                  <h3 className="mt-10 text-3xl font-medium tracking-tight text-zinc-100 transition-colors duration-300 group-hover:text-white sm:text-4xl">
                    NexusCart
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">
                    A service and product marketplace designed to connect
                    people with local providers and help users discover
                    products based on their needs and budget.
                  </p>
                </div>

                <div className="mt-12">
                  <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                    Built with
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-800 px-3 py-1.5 font-mono text-[10px] text-zinc-500 transition-colors duration-300 group-hover:border-zinc-700 group-hover:text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}