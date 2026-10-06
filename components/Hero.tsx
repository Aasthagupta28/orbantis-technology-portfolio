"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "3+", label: "Core products" },
  { value: "10+", label: "Tech stacks" },
  { value: "100%", label: "Execution focus" },
];

export function Hero() {
  return (
    <section id="home" className="hero-section scroll-mt-20 text-white">
      <Image
        src="/portfolio/hero-circuit.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-photo object-cover"
      />
      <div className="hero-tint" />
      <div className="hero-grid" />
      <div className="hero-light-pass" />
      <div className="hero-orbit" />

      <div className="section-shell relative z-10 flex min-h-[680px] flex-col items-center justify-center pb-16 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mx-auto mb-6 flex max-w-[340px] items-center justify-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/80 sm:max-w-none sm:text-xs sm:tracking-[0.22em]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent)] shadow-[0_0_18px_var(--accent)]" />
            <span className="text-center">Digital Products · Technology · Orbantis Technologies</span>
          </div>

          <h1 className="text-6xl font-semibold leading-[0.96] sm:text-7xl lg:text-8xl">
            Orbantis
            <span className="block text-[var(--accent)]">Technologies</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            We design and build digital products and intelligent systems that turn ambitious ideas into meaningful business growth.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.16em] text-white/65 sm:text-sm">
            <span>Product strategy</span><span aria-hidden="true">|</span>
            <span>Full-stack engineering</span><span aria-hidden="true">|</span>
            <span>Digital transformation</span>
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="#projects" className="inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--accent)] px-7 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(255,121,0,0.28)] transition hover:bg-[var(--accent-strong)]">
              Explore our work
            </Link>
            <Link href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/45 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15">
              Let&apos;s talk
            </Link>
          </div>
        </motion.div>

        <div className="mt-12 grid w-full max-w-3xl grid-cols-3 border-t border-white/25 pt-5 text-left">
          {stats.map((stat) => (
            <div key={stat.label} className="px-3 first:pl-0 last:pr-0 sm:px-8">
              <div className="text-2xl font-semibold text-white sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-[0.62rem] uppercase tracking-[0.14em] text-white/65 sm:text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
