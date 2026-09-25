"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="border-t border-zinc-900 px-6 py-10 lg:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/"
              className="font-mono text-lg font-semibold tracking-tight text-zinc-100"
            >
              EGI.
            </Link>

            <p className="mt-2 text-xs text-zinc-600">
              Computer Engineer · Software Developer
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://github.com/Edikan19"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs text-zinc-500 transition-colors hover:text-zinc-200"
            >
              GitHub
              <ArrowUpRight size={12} />
            </a>

            <a
              href="mailto:edikaninyang24@gmail.com"
              className="flex items-center gap-1 text-xs text-zinc-500 transition-colors hover:text-zinc-200"
            >
              Email
              <ArrowUpRight size={12} />
            </a>

            <a
              href="#"
              className="flex items-center gap-1 text-xs text-zinc-500 transition-colors hover:text-zinc-200"
            >
              Back to top
              <ArrowUp size={12} />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-900 pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-700">
            © 2026 Edikan Gabriel Inyang
          </p>
        </div>
      </div>
    </motion.footer>
  );
}