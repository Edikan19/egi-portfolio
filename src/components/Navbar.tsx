"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/[0.07] bg-[#090909]/75 px-5 py-3.5 shadow-2xl shadow-black/20 backdrop-blur-xl lg:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-lg font-semibold tracking-tight text-zinc-100"
        >
          <span>EGI.</span>

          <span className="h-1 w-1 rounded-full bg-zinc-600 transition-all duration-300 group-hover:w-2 group-hover:bg-zinc-300" />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-xs text-zinc-500 transition-all duration-300 hover:bg-white/[0.04] hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-500"
            >
              {item.label}
            </Link>
          ))}

            <Link
                href="#contact"
                className="group ml-2 flex items-center gap-1 rounded-full border border-zinc-800 px-4 py-2 text-xs text-zinc-200 transition-all duration-300 hover:border-zinc-600 hover:bg-white/[0.04]"
            >
            Let&apos;s talk
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 transition-colors hover:border-zinc-600 md:hidden"
        >
          <span className="sr-only">
            {isOpen ? "Close menu" : "Open menu"}
          </span>

          <span className="flex flex-col gap-1">
            <span
              className={`block h-px w-4 bg-zinc-300 transition-transform duration-300 ${
                isOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />

            <span
              className={`block h-px w-4 bg-zinc-300 transition-transform duration-300 ${
                isOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-white/[0.07] bg-[#090909]/95 p-5 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: index * 0.05,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between border-b border-zinc-900 py-4 text-base text-zinc-300 transition-colors hover:text-white"
                  >
                    {item.label}

                    <ArrowUpRight
                      size={15}
                      className="text-zinc-700"
                    />
                  </Link>
                </motion.div>
              ))}

              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-900 transition-transform hover:scale-[1.02]"
              >
                Let&apos;s talk
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}