import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Search, MapPin, ShoppingBag } from "lucide-react";

const technologies = [
  "Next.js",
  "TypeScript",
  "Prisma",
  "PostgreSQL",
  "NextAuth",
  "Tailwind CSS",
];

const features = [
  {
    title: "Local Services",
    description: "Discover plumbers, electricians, artisans, and other local service providers.",
    icon: MapPin,
  },
  {
    title: "Smart Shopping",
    description: "Find product recommendations based on a specific need and budget.",
    icon: ShoppingBag,
  },
];

export default function NexusCartPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] px-6 py-8 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        {/* Back link */}
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors duration-300 hover:text-zinc-100"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to work
        </Link>

        {/* Hero */}
        <section className="mt-24 lg:mt-32">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
              In Development
            </span>

            <span className="font-mono text-xs text-zinc-700">
              2026
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-[clamp(4rem,10vw,8rem)] font-medium leading-[0.88] tracking-[-0.065em] text-zinc-100">
            NexusCart
          </h1>

          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              A service and product marketplace designed to connect people
              with local providers and help users discover products based on
              their needs and budget.
            </p>

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-700">
              Marketplace / 01
            </span>
          </div>
        </section>

        {/* Product visual */}
        <section className="mt-20">
          <div className="group relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-[#0c0c0c] shadow-2xl shadow-black/20">
            {/* Background grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-3xl" />

            {/* Browser / product frame */}
            <div className="relative mx-4 my-4 overflow-hidden rounded-[1.5rem] border border-zinc-800 bg-zinc-950 shadow-2xl sm:mx-8 sm:my-8 lg:mx-12 lg:my-12">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-zinc-700" />
                  <span className="h-2 w-2 rounded-full bg-zinc-800" />
                  <span className="h-2 w-2 rounded-full bg-zinc-800" />
                </div>

                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-700">
                  NexusCart
                </span>
              </div>

              {/* Product UI */}
              <div className="p-6 sm:p-10 lg:p-14">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                      Marketplace
                    </p>

                    <p className="mt-2 text-sm font-medium text-zinc-200">
                      NexusCart
                    </p>
                  </div>

                  <span className="hidden font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-700 sm:block">
                    Explore
                  </span>
                </div>

                <div className="mt-12 max-w-2xl">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                    Find what you need
                  </p>

                  <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
                    Services and products,
                    <br />
                    <span className="text-zinc-600">
                      in one place.
                    </span>
                  </h2>

                  {/* Search */}
                  <div className="mt-8 flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-3.5 transition-colors duration-300 group-hover:border-zinc-700">
                    <Search size={15} className="shrink-0 text-zinc-600" />

                    <span className="text-xs text-zinc-600 sm:text-sm">
                      Search for a service or product...
                    </span>
                  </div>
                </div>

                {/* Feature cards */}
                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900"
                      >
                        <Icon
                          size={17}
                          className="text-zinc-500"
                        />

                        <h3 className="mt-6 text-sm font-medium text-zinc-200">
                          {feature.title}
                        </h3>

                        <p className="mt-2 max-w-xs text-xs leading-5 text-zinc-600">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Visual label */}
            <div className="relative flex items-center justify-between border-t border-zinc-900 px-6 py-4 sm:px-8">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-700">
                Conceptual product preview
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-700">
                NexusCart / 2026
              </span>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mt-24 grid gap-12 border-t border-zinc-900 pt-12 md:grid-cols-[0.7fr_1.3fr] lg:mt-32">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
              01 / Overview
            </p>
          </div>

          <div className="space-y-6 text-base leading-7 text-zinc-400">
            <p>
              NexusCart is a marketplace concept I&apos;m building to bring
              two related experiences together: discovering local services
              and finding products that fit a specific need or budget.
            </p>

            <p>
              The service side allows users to discover providers such as
              plumbers, electricians, and other local artisans. The shopping
              side is designed to help users find suitable products through
              recommendation-driven searches.
            </p>

            <p>
              The project is currently in development, so the product,
              interface, and features are still evolving as I build and test
              different ideas.
            </p>
          </div>
        </section>

        {/* What I'm building */}
        <section className="mt-24 grid gap-12 border-t border-zinc-900 pt-12 md:grid-cols-[0.7fr_1.3fr] lg:mt-32">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
              02 / What I&apos;m building
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-900 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group bg-[#090909] p-6 transition-colors duration-300 hover:bg-zinc-950 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={18}
                      className="text-zinc-600 transition-colors duration-300 group-hover:text-zinc-300"
                    />

                    <span className="font-mono text-[9px] text-zinc-800">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-10 text-lg font-medium tracking-tight text-zinc-200">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technology */}
        <section className="mt-24 grid gap-12 border-t border-zinc-900 pt-12 md:grid-cols-[0.7fr_1.3fr] lg:mt-32">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
              03 / Technology
            </p>
          </div>

          <div>
            <p className="max-w-xl text-sm leading-6 text-zinc-500">
              Built with a modern full-stack architecture focused on
              maintainability, authentication, database management, and
              responsive product development.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-800 px-4 py-2 font-mono text-[10px] text-zinc-500 transition-all duration-300 hover:border-zinc-600 hover:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Repository CTA */}
        <section className="mt-24 border-t border-zinc-900 pt-12 lg:mt-32">
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 sm:p-10 lg:p-12">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  Explore the code
                </p>

                <h2 className="mt-4 text-2xl font-medium tracking-tight text-zinc-100 sm:text-3xl">
                  Follow the project as it evolves.
                </h2>

                <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-500">
                  NexusCart is actively being developed, with new features
                  and improvements being added as the product takes shape.
                </p>
              </div>

              <a
                href="https://github.com/Edikan19/NexusCart"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-zinc-100 px-6 py-3.5 text-sm font-medium text-zinc-900 transition-all duration-300 hover:scale-[1.03] hover:bg-white"
              >
                View repository

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-24 flex items-center justify-between border-t border-zinc-900 py-8 lg:mt-32">
          <Link
            href="/"
            className="font-mono text-sm text-zinc-600 transition-colors hover:text-zinc-300"
          >
            EGI.
          </Link>

          <Link
            href="/#work"
            className="text-xs text-zinc-700 transition-colors hover:text-zinc-400"
          >
            Back to work
          </Link>
        </div>
      </div>
    </main>
  );
}