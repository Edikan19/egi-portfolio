"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section
      id="contact"
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
              04 / Contact
            </p>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
              Have a project in mind?
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="mt-6 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-zinc-100 sm:text-5xl lg:text-7xl"
            >
              Let&apos;s build something meaningful.
            </motion.h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-zinc-500">
              I&apos;m open to opportunities, collaborations, and interesting
              projects where software can solve meaningful problems.
            </p>

            {/* Contact actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              {/* Email */}
              <a
                href="mailto:edikaninyang24@gmail.com"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-zinc-100 px-6 py-3.5 text-sm font-medium text-zinc-900 transition-all duration-300 hover:scale-[1.03] hover:bg-white"
              >
                <Mail size={16} />

                <span>Send me an email</span>

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              {/* GitHub */}
              <Link
                href="https://github.com/Edikan19"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-zinc-800 px-6 py-3.5 text-sm text-zinc-300 transition-all duration-300 hover:border-zinc-600 hover:bg-white/[0.03] hover:text-white"
              >
                <span>GitHub</span>

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="mt-14 flex items-center gap-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-300" />
              </span>

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Open to opportunities
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}