"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="hero-grid hero-glow relative flex min-h-screen items-center overflow-hidden px-6 pt-28 lg:px-10 lg:pt-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col">
        {/* Main hero content */}
        <motion.div
          className="relative z-10 max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 sm:text-xs">
            Software Developer · Computer Engineer
          </p>

          <h1 className="max-w-5xl text-[clamp(3.5rem,9vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.065em] text-zinc-100">
            I build
            <br />
            digital products
            <br />
            <span className="text-zinc-500">that matter.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-7 sm:mt-12 sm:flex-row sm:items-center sm:gap-8">
            <p className="max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
              I&apos;m Edikan Gabriel Inyang, a Computer Engineer and Software
              Developer focused on building thoughtful digital experiences and
              solving real-world problems with technology.
            </p>

            <div className="flex shrink-0 items-center gap-3">
              <Link
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-white"
              >
                View my work

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#contact"
                className="rounded-full border border-zinc-800 px-5 py-3 text-sm text-zinc-300 transition-all duration-300 hover:border-zinc-600 hover:bg-white/[0.03] hover:text-white"
              >
                Let&apos;s talk
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="relative mx-auto mt-16 h-[380px] w-full max-w-[300px] sm:mt-20 sm:h-[420px] sm:max-w-[320px] lg:absolute lg:right-[4%] lg:top-[55%] lg:mx-0 lg:mt-0 lg:h-[420px] lg:w-[320px] lg:-translate-y-1/2"
        >
          {/* Outer glow */}
          <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-white/[0.02] blur-3xl" />

          {/* Image container */}
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950 shadow-2xl">
            <Image
              src="/profile.jpeg"
              alt="Edikan Gabriel Inyang"
              fill
              priority
              sizes="(max-width: 640px) 300px, 320px"
              className="object-cover object-center"
            />

            {/* Image overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent" />

            {/* Subtle inner frame */}
            <div className="pointer-events-none absolute inset-4 rounded-[1.5rem] border border-white/[0.08]" />

            {/* Project label */}
            <div className="pointer-events-none absolute bottom-6 left-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                EGI / 2026
              </p>
            </div>

            {/* Corner detail */}
            <div className="pointer-events-none absolute right-6 top-6 h-2 w-2 rounded-full border border-white/40" />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex items-center gap-3 text-zinc-600 lg:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={15} />
          </motion.div>

          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}